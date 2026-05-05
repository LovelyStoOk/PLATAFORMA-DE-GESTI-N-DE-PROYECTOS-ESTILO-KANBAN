<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "kanban_easygo";  // ← Cambia de "sistemareparto" a "kanban_easygo"

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>