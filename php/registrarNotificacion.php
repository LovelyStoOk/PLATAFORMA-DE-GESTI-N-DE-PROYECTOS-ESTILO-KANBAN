<?php
header('Content-Type: application/json');
include 'conexion.php';

function registrarNotificacion($tipo, $mensaje, $id_pedido = null) {
    global $conn;
    
    $sql = "INSERT INTO notificaciones (tipo, mensaje, id_pedido) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    
    if (!$stmt) {
        return false;
    }
    
    $stmt->bind_param("sss", $tipo, $mensaje, $id_pedido);
    $resultado = $stmt->execute();
    $stmt->close();
    
    return $resultado;
}
?>