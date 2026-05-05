<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

include 'conexion.php';

$sql = "SELECT * FROM pedidos_archivados ORDER BY fecha_completado DESC";
$resultado = $conn->query($sql);

$archivados = [];

if ($resultado) {
    while ($fila = $resultado->fetch_assoc()) {
        $archivados[] = $fila;
    }
} else {
    echo json_encode([
        "error" => "Error en la consulta: " . $conn->error
    ]);
    exit;
}

echo json_encode($archivados);
$conn->close();
?>