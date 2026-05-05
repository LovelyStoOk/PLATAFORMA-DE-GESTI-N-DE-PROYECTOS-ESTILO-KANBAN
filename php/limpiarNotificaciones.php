<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

include 'conexion.php';

// Eliminar todas las notificaciones
$sql = "DELETE FROM notificaciones";

if ($conn->query($sql)) {
    echo json_encode(['success' => true, 'message' => 'Todas las notificaciones han sido eliminadas']);
} else {
    echo json_encode(['success' => false, 'message' => $conn->error]);
}

$conn->close();
?>