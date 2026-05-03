<?php
session_start();
include("conexion.php");

// Verificar que el usuario tenga permisos (admin o supervisor)
if (!isset($_SESSION['rol']) || ($_SESSION['rol'] !== 'administrador' && $_SESSION['rol'] !== 'supervisor')) {
    $_SESSION['mensaje_tipo'] = 'error';
    $_SESSION['mensaje'] = 'No tienes permisos para editar pedidos';
    header("Location: ../index.html");
    exit;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $id = intval($_POST["id"] ?? 0);
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

    if (!$id) {
        $_SESSION['mensaje_tipo'] = 'error';
        $_SESSION['mensaje'] = 'ID de pedido inválido';
        header("Location: ../index.html");
        exit;
    }

    $sql = "UPDATE pedidos SET 
        id_pedido = ?, 
        cliente = ?, 
        direccion = ?, 
        telefono = ?, 
        categoria = ?, 
        material = ?, 
        peso = ?, 
        paquetes = ?, 
        distancia = ?, 
        prioridad = ?, 
        estado = ?, 
        id_almacen = ?, 
        id_repartidor = ?, 
        notas = ?,
        incidencia = ?
        WHERE id = ?";

    $stmt = $conn->prepare($sql);
    
    if (!$stmt) {
        $_SESSION['mensaje_tipo'] = 'error';
        $_SESSION['mensaje'] = 'Error en la preparación: ' . $conn->error;
        header("Location: ../index.html");
        exit;
    }
    
    $stmt->bind_param(
        "ssssssdiissiissi",
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
        $incidencia,
        $id
    );

    if ($stmt->execute()) {
        $_SESSION['mensaje_tipo'] = 'success';
        $_SESSION['mensaje'] = "Pedido {$id_pedido} actualizado correctamente";
        header("Location: ../index.html");
        exit;
    } else {
        $_SESSION['mensaje_tipo'] = 'error';
        $_SESSION['mensaje'] = 'Error al actualizar el pedido: ' . $conn->error;
        header("Location: ../index.html");
        exit;
    }

    $stmt->close();
    $conn->close();
} else {
    header("Location: ../index.html");
    exit;
}
?>