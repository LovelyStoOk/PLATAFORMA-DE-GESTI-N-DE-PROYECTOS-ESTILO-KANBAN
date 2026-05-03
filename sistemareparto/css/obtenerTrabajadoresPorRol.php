<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

include 'conexion.php';

// Obtener trabajadores de almacén (buscar variantes del rol)
$sql_almacen = "SELECT id, nombre, apellido_paterno, id_trabajador, rol 
                FROM trabajadores 
                WHERE (rol = 'Almacén' OR rol = 'Almacen' OR rol = 'almacen' OR rol = 'almacén' OR rol = 'Empaquetador')
                ORDER BY nombre";
$resultado_almacen = $conn->query($sql_almacen);

$almacen = [];
if ($resultado_almacen) {
    while ($fila = $resultado_almacen->fetch_assoc()) {
        $almacen[] = [
            'id' => $fila['id'],
            'nombre' => $fila['nombre'] . ' ' . $fila['apellido_paterno'],
            'id_trabajador' => $fila['id_trabajador'],
            'rol' => $fila['rol']
        ];
    }
}

// Obtener repartidores
$sql_repartidor = "SELECT id, nombre, apellido_paterno, id_trabajador, rol 
                   FROM trabajadores 
                   WHERE (rol = 'Repartidor' OR rol = 'repartidor')
                   ORDER BY nombre";
$resultado_repartidor = $conn->query($sql_repartidor);

$repartidores = [];
if ($resultado_repartidor) {
    while ($fila = $resultado_repartidor->fetch_assoc()) {
        $repartidores[] = [
            'id' => $fila['id'],
            'nombre' => $fila['nombre'] . ' ' . $fila['apellido_paterno'],
            'id_trabajador' => $fila['id_trabajador'],
            'rol' => $fila['rol']
        ];
    }
}

// Debug: mostrar todos los trabajadores si no hay resultados
$todos = [];
if (empty($almacen) && empty($repartidores)) {
    $sql_todos = "SELECT id, nombre, apellido_paterno, id_trabajador, rol FROM trabajadores ORDER BY nombre";
    $resultado_todos = $conn->query($sql_todos);
    if ($resultado_todos) {
        while ($fila = $resultado_todos->fetch_assoc()) {
            $todos[] = $fila;
        }
    }
}

echo json_encode([
    'almacen' => $almacen,
    'repartidores' => $repartidores,
    'debug_todos' => $todos
]);

$conn->close();
?>