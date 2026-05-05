<?php
// Incluir tu archivo de conexión
require_once 'conexion.php';  // o el nombre de tu archivo de conexión

if ($conn) {
    echo "✅ Conexión exitosa a la base de datos 'sistemareparto'<br>";
    
    // Probar consulta simple
    $sql = "SHOW TABLES";
    $result = $conn->query($sql);
    
    if ($result) {
        echo "<br>📋 Tablas encontradas:<br><ul>";
        while ($row = $result->fetch_array()) {
            echo "<li>" . $row[0] . "</li>";
        }
        echo "</ul>";
    } else {
        echo "❌ Error al consultar tablas: " . $conn->error;
    }
} else {
    echo "❌ No se pudo establecer conexión";
}
?>