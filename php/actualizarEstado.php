<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

ini_set('display_errors', 0);
error_reporting(0);

include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "message" => "Método no permitido"]);
    exit;
}

$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "Datos inválidos"]);
    exit;
}

$pedido_id = isset($data['pedido_id']) ? intval($data['pedido_id']) : 0;
$nuevo_estado = isset($data['estado']) ? trim($data['estado']) : '';

if (!$pedido_id || !$nuevo_estado) {
    echo json_encode(["success" => false, "message" => "Faltan datos requeridos"]);
    exit;
}

$estados_validos = ['Recibido', 'Preparado', 'En ruta', 'Completado', 'Problemas'];
if (!in_array($nuevo_estado, $estados_validos)) {
    echo json_encode(["success" => false, "message" => "Estado inválido"]);
    exit;
}

// Obtener información del pedido actual
$sql_info = "SELECT distancia, cliente, tiempo_estimado, tiempo_total, firma FROM pedidos WHERE id = ?";
$stmt_info = $conn->prepare($sql_info);

if (!$stmt_info) {
    echo json_encode(["success" => false, "message" => "Error en la consulta"]);
    exit;
}

$stmt_info->bind_param("i", $pedido_id);
$stmt_info->execute();
$resultado_info = $stmt_info->get_result();
$pedido_actual = $resultado_info->fetch_assoc();
$stmt_info->close();

if (!$pedido_actual) {
    echo json_encode(["success" => false, "message" => "Pedido no encontrado"]);
    exit;
}

// Preparar valores adicionales según el nuevo estado
$tiempo_estimado = $pedido_actual['tiempo_estimado']; // Mantener el existente
$tiempo_total = $pedido_actual['tiempo_total']; // Mantener el existente
$firma = $pedido_actual['firma']; // Mantener el existente
$distancia = floatval($pedido_actual['distancia']);

// Si cambia a "En ruta" y NO tiene tiempo estimado, calcularlo
// Si cambia a "En ruta" y NO tiene tiempo estimado, calcularlo
if ($nuevo_estado === 'En ruta' && empty($tiempo_estimado) && $distancia > 0) {
    $velocidad_promedio = 50; // km/h
    $tiempo_minutos = round(($distancia / $velocidad_promedio) * 60);
    
    // Asegurar un mínimo razonable
    $tiempo_minutos = max(10, $tiempo_minutos); // Mínimo 10 minutos
    
    // Formatear el tiempo de forma legible
    if ($tiempo_minutos >= 60) {
        $horas = floor($tiempo_minutos / 60);
        $minutos = $tiempo_minutos % 60;
        
        if ($minutos > 0) {
            $tiempo_estimado = $horas . "h " . $minutos . "min";
        } else {
            $tiempo_estimado = $horas . "h";
        }
    } else {
        $tiempo_estimado = $tiempo_minutos . " min";
    }
}

// Si cambia a "Completado" y NO tiene tiempo total ni firma, generarlos
// Si cambia a "Completado" y NO tiene tiempo total ni firma, generarlos
if ($nuevo_estado === 'Completado') {
    if (empty($tiempo_total) && $distancia > 0) {
        // CORRECCIÓN: Calcular tiempo base correctamente
        $velocidad_promedio = 50; // km/h
        $tiempo_base = ($distancia / $velocidad_promedio) * 60; // minutos
        
        // Agregar variación realista (tráfico, etc.)
        $variacion = rand(-15, 30); // -15 a +30 minutos de variación
        $tiempo_total_min = max(5, round($tiempo_base + $variacion)); // Mínimo 5 minutos
        
        // Formatear
        if ($tiempo_total_min >= 60) {
            $horas = floor($tiempo_total_min / 60);
            $minutos = $tiempo_total_min % 60;
            $tiempo_total = $minutos > 0 ? "{$horas}h {$minutos}min" : "{$horas}h";
        } else {
            $tiempo_total = "{$tiempo_total_min} min";
        }
    }
    
    // Generar firma solo si no existe
    if (empty($firma)) {
        $nombre_cliente = trim($pedido_actual['cliente']);
        $palabras = explode(" ", $nombre_cliente);
        $iniciales = "";
        foreach ($palabras as $palabra) {
            $palabra = trim($palabra);
            if (!empty($palabra)) {
                $iniciales .= strtoupper(substr($palabra, 0, 1));
            }
        }
        $firma = "Recibido por: " . ($iniciales ?: "CLIENTE");
    }
}

// Actualizar el estado en la base de datos
$sql = "UPDATE pedidos SET estado = ?, tiempo_estimado = ?, tiempo_total = ?, firma = ? WHERE id = ?";
$stmt = $conn->prepare($sql);

if (!$stmt) {
    echo json_encode(["success" => false, "message" => "Error en la preparación"]);
    exit;
}

$stmt->bind_param("ssssi", $nuevo_estado, $tiempo_estimado, $tiempo_total, $firma, $pedido_id);

if ($stmt->execute()) {
    if ($stmt->affected_rows > 0 || $conn->affected_rows === 0) {

        include_once('registrarNotificacion.php');
        $sql_pedido_info = "SELECT id_pedido, cliente FROM pedidos WHERE id = ?";
        $stmt_pedido_info = $conn->prepare($sql_pedido_info);
        $stmt_pedido_info->bind_param("i", $pedido_id);
        $stmt_pedido_info->execute();
        $pedido_info = $stmt_pedido_info->get_result()->fetch_assoc();
        $stmt_pedido_info->close();
        
        $emoji = '';
        switch($nuevo_estado) {
            case 'Recibido': $emoji = '📥'; break;
            case 'Preparado': $emoji = '🧺'; break;
            case 'En ruta': $emoji = '🚚'; break;
            case 'Completado': $emoji = '✅'; break;
            case 'Problemas': $emoji = '⚠️'; break;
        }
        
        $mensaje = "{$emoji} Estado cambiado a '{$nuevo_estado}' - Pedido: {$pedido_info['id_pedido']} ({$pedido_info['cliente']})";
        registrarNotificacion('cambio_estado', $mensaje, $pedido_info['id_pedido']);

        $sql_select = "SELECT id, id_pedido, cliente, estado, tiempo_estimado, tiempo_total, firma FROM pedidos WHERE id = ?";
        $stmt_select = $conn->prepare($sql_select);
        $stmt_select->bind_param("i", $pedido_id);
        $stmt_select->execute();
        $resultado = $stmt_select->get_result();
        $pedido = $resultado->fetch_assoc();
        
        echo json_encode([
            "success" => true, 
            "message" => "Estado actualizado correctamente",
            "pedido" => $pedido,
            "datos_calculados" => [
                "tiempo_estimado" => $tiempo_estimado,
                "tiempo_total" => $tiempo_total,
                "firma" => $firma
            ]
        ]);
        $stmt_select->close();
    } else {
        echo json_encode([
            "success" => false, 
            "message" => "No se pudo actualizar el pedido"
        ]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Error al ejecutar la actualización"]);
}

$stmt->close();
$conn->close();
?>