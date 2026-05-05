<?php
// Mostrar información de PHP
echo "<h1>Configuración de PHP</h1>";
phpinfo();
?>
<hr>
<?php
// Verificar conexión a MySQL
echo "<h1>Verificación de MySQL</h1>";
$mysqli = new mysqli("localhost", "root", "");
if ($mysqli->connect_error) {
    echo "Error de conexión: " . $mysqli->connect_error;
} else {
    echo "Conexión a MySQL exitosa<br>";
    echo "Versión del servidor: " . $mysqli->server_info;
    $mysqli->close();
}
?>