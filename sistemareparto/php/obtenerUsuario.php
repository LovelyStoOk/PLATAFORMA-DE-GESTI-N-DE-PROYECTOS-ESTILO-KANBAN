<?php
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['user_id'])) {
    echo json_encode([
        'logged_in' => false,
        'redirect' => 'login.html'
    ]);
    exit;
}

echo json_encode([
    'logged_in' => true,
    'user' => [
        'id' => $_SESSION['user_id'],
        'username' => $_SESSION['username'],
        'nombre_completo' => $_SESSION['nombre_completo'],
        'rol' => $_SESSION['rol']
    ]
]);
?>