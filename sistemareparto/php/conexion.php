<?php
$servername = "localhost";
$username = "root"; // usuario por defecto de XAMPP
$password = "";     // sin contraseña por defecto
$database = "sistemareparto"; // nombre de tu base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>
