<?php
session_start();
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

if (!$pedido_id) {
    echo json_encode(["success" => false, "message" => "ID de pedido requerido"]);
    exit;
}

// Obtener información completa del pedido
$sql_pedido = "SELECT * FROM pedidos WHERE id = ?";
$stmt = $conn->prepare($sql_pedido);

if (!$stmt) {
    echo json_encode(["success" => false, "message" => "Error en la consulta"]);
    exit;
}

$stmt->bind_param("i", $pedido_id);
$stmt->execute();
$resultado = $stmt->get_result();

if ($resultado->num_rows === 0) {
    echo json_encode(["success" => false, "message" => "Pedido no encontrado"]);
    $stmt->close();
    exit;
}

$pedido = $resultado->fetch_assoc();
$stmt->close();

// Verificar que el pedido esté completado
if ($pedido['estado'] !== 'Completado') {
    echo json_encode(["success" => false, "message" => "Solo se pueden archivar pedidos completados"]);
    exit;
}

// Obtener usuario que archiva
$archivado_por = isset($_SESSION['username']) ? $_SESSION['username'] : 'Sistema';

// Insertar en pedidos_archivados
$sql_archivar = "INSERT INTO pedidos_archivados (
    id_pedido_original, id_pedido, cliente, direccion, telefono, categoria, 
    peso, paquetes, distancia, prioridad, estado_final, notas, 
    tiempo_estimado, tiempo_total, firma, incidencia, fecha_completado, archivado_por
) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt_archivar = $conn->prepare($sql_archivar);

if (!$stmt_archivar) {
    echo json_encode(["success" => false, "message" => "Error al preparar archivado"]);
    exit;
}

$fecha_completado = date('Y-m-d H:i:s');

$stmt_archivar->bind_param(
    "isssssdisissssssss",
    $pedido['id'],
    $pedido['id_pedido'],
    $pedido['cliente'],
    $pedido['direccion'],
    $pedido['telefono'],
    $pedido['categoria'],
    $pedido['peso'],
    $pedido['paquetes'],
    $pedido['distancia'],
    $pedido['prioridad'],
    $pedido['estado'],
    $pedido['notas'],
    $pedido['tiempo_estimado'],
    $pedido['tiempo_total'],
    $pedido['firma'],
    $pedido['incidencia'],
    $fecha_completado,
    $archivado_por
);

if ($stmt_archivar->execute()) {
    // Eliminar de la tabla principal
    $sql_eliminar = "DELETE FROM pedidos WHERE id = ?";
    $stmt_eliminar = $conn->prepare($sql_eliminar);
    $stmt_eliminar->bind_param("i", $pedido_id);
    
    if ($stmt_eliminar->execute()) {
        echo json_encode([
            "success" => true,
            "message" => "Pedido archivado exitosamente",
            "pedido" => [
                "id" => $pedido['id'],
                "id_pedido" => $pedido['id_pedido']
            ]
        ]);
    } else {
        echo json_encode(["success" => false, "message" => "Error al eliminar pedido"]);
    }
    
    $stmt_eliminar->close();
} else {
    echo json_encode(["success" => false, "message" => "Error al archivar pedido"]);
}

$stmt_archivar->close();
$conn->close();
?>