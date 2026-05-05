<?php
// Utilidad para generar contraseñas hasheadas

echo "<h2>Generador de Contraseñas</h2>";
echo "<style>
body { font-family: Arial; padding: 20px; background: #f5f5f5; }
.result { background: white; padding: 20px; margin: 10px 0; border-radius: 8px; border-left: 4px solid #ff7878; }
code { background: #f0f0f0; padding: 5px 10px; display: block; word-break: break-all; margin: 10px 0; }
input { padding: 10px; width: 300px; border: 2px solid #ddd; border-radius: 5px; }
button { padding: 10px 20px; background: #ff7878; color: white; border: none; border-radius: 5px; cursor: pointer; }
</style>";

if (isset($_GET['pass'])) {
    $password = $_GET['pass'];
    $hash = password_hash($password, PASSWORD_DEFAULT);
    
    echo "<div class='result'>";
    echo "<p><strong>Contraseña:</strong> " . htmlspecialchars($password) . "</p>";
    echo "<p><strong>Hash generado:</strong></p>";
    echo "<code>" . $hash . "</code>";
    echo "<p>✅ Copia este hash y úsalo en tu consulta SQL para actualizar la contraseña.</p>";
    echo "</div>";
}

// Generar hashes predefinidos para admin y repartidor
echo "<div class='result'>";
echo "<h3>🔑 Hashes Pre-generados:</h3>";
echo "<p><strong>admin123:</strong></p>";
echo "<code>" . password_hash('admin123', PASSWORD_DEFAULT) . "</code>";
echo "<br><p><strong>123456:</strong></p>";
echo "<code>" . password_hash('123456', PASSWORD_DEFAULT) . "</code>";
echo "</div>";

echo "<div class='result'>";
echo "<h3>Generar nueva contraseña:</h3>";
echo "<form method='get'>";
echo "<input type='text' name='pass' placeholder='Ingresa la contraseña' required>";
echo "<button type='submit'>Generar Hash</button>";
echo "</form>";
echo "</div>";

echo "<div class='result'>";
echo "<h3>📋 SQL de ejemplo para actualizar:</h3>";
echo "<code>";
echo "UPDATE usuarios SET password = 'EL_HASH_AQUI' WHERE username = 'admin';";
echo "</code>";
echo "</div>";
?>