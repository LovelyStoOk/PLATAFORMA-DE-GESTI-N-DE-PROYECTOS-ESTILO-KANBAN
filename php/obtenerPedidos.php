<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

include 'conexion.php';

// Si se solicita un pedido específico por ID (para edición)
if (isset($_GET['id'])) {
    $id = intval($_GET['id']);
    
    $sql = "SELECT p.*, 
            CONCAT(ta.nombre, ' ', ta.apellido_paterno) as nombre_almacen, 
            ta.id_trabajador as id_trabajador_almacen,
            ta.id as id_almacen_fk,
            CONCAT(tr.nombre, ' ', tr.apellido_paterno) as nombre_repartidor,
            tr.id_trabajador as id_trabajador_repartidor,
            tr.id as id_repartidor_fk
            FROM pedidos p
            LEFT JOIN trabajadores ta ON p.id_almacen = ta.id
            LEFT JOIN trabajadores tr ON p.id_repartidor = tr.id
            WHERE p.id = ?";
    
    $stmt = $conn->prepare($sql);
    
    if (!$stmt) {
        echo json_encode(["error" => "Error en la consulta: " . $conn->error]);
        exit;
    }
    
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    
    $pedido = $result->fetch_assoc();
    
    // Devolver array con un solo pedido o array vacío
    echo json_encode($pedido ? [$pedido] : []);
    $stmt->close();
    $conn->close();
    exit;
}

// Si no hay ID, devolver todos los pedidos
$sql = "SELECT p.*, 
        CONCAT(ta.nombre, ' ', ta.apellido_paterno) AS nombre_almacen,
        ta.id_trabajador AS id_trabajador_almacen,
        CONCAT(tr.nombre, ' ', tr.apellido_paterno) AS nombre_repartidor,
        tr.id_trabajador AS id_trabajador_repartidor
        FROM pedidos p
        LEFT JOIN trabajadores ta ON p.id_almacen = ta.id
        LEFT JOIN trabajadores tr ON p.id_repartidor = tr.id
        ORDER BY p.id DESC";

$resultado = $conn->query($sql);

$pedidos = [];

if ($resultado) {
    while ($fila = $resultado->fetch_assoc()) {
        $pedidos[] = $fila;
    }
} else {
    echo json_encode([
        "error" => "Error en la consulta: " . $conn->error
    ]);
    exit;
}

echo json_encode($pedidos);
$conn->close();
?>