<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

include 'conexion.php';

// Obtener todas las notificaciones ordenadas por fecha
$sql = "SELECT * FROM notificaciones ORDER BY fecha_creacion DESC LIMIT 50";
$resultado = $conn->query($sql);

$notificaciones = [];
if ($resultado) {
    while ($fila = $resultado->fetch_assoc()) {
        $notificaciones[] = $fila;
    }
}

// Contar no leídas
$sql_count = "SELECT COUNT(*) as total FROM notificaciones WHERE leida = 0";
$resultado_count = $conn->query($sql_count);
$count_row = $resultado_count->fetch_assoc();

echo json_encode([
    'notificaciones' => $notificaciones,
    'no_leidas' => $count_row['total']
]);

$conn->close();
?>