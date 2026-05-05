<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

include 'conexion.php';

// Obtener trabajadores de almacén
$sql_almacen = "SELECT id, nombre, apellido_paterno, id_trabajador, rol 
                FROM trabajadores 
                WHERE rol LIKE '%lmac%' OR rol LIKE '%Empaquetador%'
                ORDER BY nombre";
$resultado_almacen = $conn->query($sql_almacen);

$almacen = [];
if ($resultado_almacen) {
    while ($fila = $resultado_almacen->fetch_assoc()) {
        $almacen[] = [
            'id' => $fila['id'],
            'nombre' => $fila['nombre'] . ' ' . $fila['apellido_paterno'],
            'id_trabajador' => $fila['id_trabajador']
        ];
    }
}

// Obtener repartidores
$sql_repartidor = "SELECT id, nombre, apellido_paterno, id_trabajador, rol 
                   FROM trabajadores 
                   WHERE rol LIKE '%epartidor%'
                   ORDER BY nombre";
$resultado_repartidor = $conn->query($sql_repartidor);

$repartidores = [];
if ($resultado_repartidor) {
    while ($fila = $resultado_repartidor->fetch_assoc()) {
        $repartidores[] = [
            'id' => $fila['id'],
            'nombre' => $fila['nombre'] . ' ' . $fila['apellido_paterno'],
            'id_trabajador' => $fila['id_trabajador']
        ];
    }
}

// Debug: mostrar todos los trabajadores
$sql_todos = "SELECT id, nombre, apellido_paterno, id_trabajador, rol FROM trabajadores ORDER BY nombre";
$resultado_todos = $conn->query($sql_todos);
$todos = [];
if ($resultado_todos) {
    while ($fila = $resultado_todos->fetch_assoc()) {
        $todos[] = $fila;
    }
}

echo json_encode([
    'almacen' => $almacen,
    'repartidores' => $repartidores,
    'todos_trabajadores' => $todos
]);

$conn->close();
?>