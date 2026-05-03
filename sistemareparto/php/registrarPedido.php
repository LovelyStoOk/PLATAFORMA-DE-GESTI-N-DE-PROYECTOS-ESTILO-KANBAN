<?php
session_start();
include("conexion.php");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Sanitizar entradas
    $id_pedido = trim($_POST["id_pedido"] ?? '');
    $cliente = trim($_POST["cliente"] ?? '');
    $direccion = trim($_POST["direccion"] ?? '');
    $telefono = trim($_POST["telefono"] ?? '');
    $categoria = trim($_POST["categoria"] ?? '');
    $material = trim($_POST["material"] ?? '');
    $peso = floatval($_POST["peso"] ?? 0);
    $paquetes = intval($_POST["paquetes"] ?? 0);
    $distancia = floatval($_POST["distancia"] ?? 0);
    $prioridad = trim($_POST["prioridad"] ?? 'Normal');
    $estado = trim($_POST["estado"] ?? 'Recibido');
    $id_almacen = !empty($_POST["id_almacen"]) ? intval($_POST["id_almacen"]) : NULL;
    $id_repartidor = !empty($_POST["id_repartidor"]) ? intval($_POST["id_repartidor"]) : NULL;
    $notas = trim($_POST["notas"] ?? '');
    $incidencia = trim($_POST["incidencia"] ?? '');
    
    // Calcular tiempo estimado
    $tiempo_minutos_total = 0;
    $tiempo_estimado_formateado = NULL;

    if ($distancia > 0) {
        $velocidad_promedio = 50;
        $tiempo_minutos_total = round(($distancia / $velocidad_promedio) * 60);
        
        if ($tiempo_minutos_total >= 60) {
            $horas = floor($tiempo_minutos_total / 60);
            $minutos = $tiempo_minutos_total % 60;
            $tiempo_estimado_formateado = $minutos > 0 ? "{$horas}h {$minutos}min" : "{$horas}h";
        } else {
            $tiempo_estimado_formateado = "{$tiempo_minutos_total} min";
        }
    }

    // Preparar la consulta SQL
    $sql = "INSERT INTO pedidos (
        id_pedido, cliente, direccion, telefono, categoria, material, peso, paquetes, distancia, 
        prioridad, estado, id_almacen, id_repartidor, notas, tiempo_estimado, tiempo_minutos, incidencia
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    // ← ESTA LÍNEA ES LA QUE FALTABA
    $stmt = $conn->prepare($sql);
    
    if (!$stmt) {
        $_SESSION['mensaje_tipo'] = 'error';
        $_SESSION['mensaje'] = 'Error en la preparación: ' . $conn->error;
        header("Location: ../pedidos.html");
        exit;
    }
    
    // Ahora sí hacer el bind_param
    $stmt->bind_param(
        "ssssssdiissiiissi",
        $id_pedido,
        $cliente,
        $direccion,
        $telefono,
        $categoria,
        $material,
        $peso,
        $paquetes,
        $distancia,
        $prioridad,
        $estado,
        $id_almacen,
        $id_repartidor,
        $notas,
        $tiempo_estimado_formateado,
        $tiempo_minutos_total,
        $incidencia
    );

    if ($stmt->execute()) {
        include_once('registrarNotificacion.php');
        $mensaje = "📦 Nuevo pedido registrado: {$id_pedido} - Cliente: {$cliente}";
        registrarNotificacion('nuevo_pedido', $mensaje, $id_pedido);
        
        $_SESSION['mensaje_tipo'] = 'success';
        $_SESSION['mensaje'] = "Pedido {$id_pedido} registrado correctamente";
        header("Location: ../index.html");
        exit;
    } else {
        $_SESSION['mensaje_tipo'] = 'error';
        $_SESSION['mensaje'] = 'Error al registrar el pedido: ' . $stmt->error;
        header("Location: ../pedidos.html");
        exit;
    }

    $stmt->close();
    $conn->close();
} else {
    header("Location: ../pedidos.html");
    exit;
}
?>