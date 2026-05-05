<?php
session_start();

// Función para verificar si el usuario está logueado
function verificarSesion() {
    if (!isset($_SESSION['user_id']) || !isset($_SESSION['username'])) {
        header("Location: login.html?error=session");
        exit;
    }
    
    // Verificar tiempo de sesión (opcional - 2 horas)
    $timeout = 7200; // 2 horas en segundos
    if (isset($_SESSION['login_time']) && (time() - $_SESSION['login_time']) > $timeout) {
        session_destroy();
        header("Location: login.html?error=session");
        exit;
    }
    
    // Actualizar tiempo de actividad
    $_SESSION['login_time'] = time();
}

// Función para verificar si el usuario es administrador
function esAdministrador() {
    return isset($_SESSION['rol']) && $_SESSION['rol'] === 'administrador';
}

// Función para obtener datos del usuario actual
function obtenerUsuarioActual() {
    return [
        'id' => $_SESSION['user_id'] ?? null,
        'username' => $_SESSION['username'] ?? null,
        'nombre_completo' => $_SESSION['nombre_completo'] ?? null,
        'rol' => $_SESSION['rol'] ?? null
    ];
}

// Verificar sesión automáticamente
verificarSesion();
?>