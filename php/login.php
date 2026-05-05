<?php
session_start();
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $username = trim($_POST["username"] ?? '');
    $password = trim($_POST["password"] ?? '');

    if (empty($username) || empty($password)) {
        header("Location: ../login.html?error=invalid");
        exit;
    }

    // Buscar usuario en la base de datos
    $sql = "SELECT id, username, password, nombre_completo, rol, activo FROM usuarios WHERE username = ?";
    $stmt = $conn->prepare($sql);
    
    if (!$stmt) {
        die("Error en la consulta");
    }

    $stmt->bind_param("s", $username);
    $stmt->execute();
    $resultado = $stmt->get_result();

    if ($resultado->num_rows === 1) {
        $usuario = $resultado->fetch_assoc();

        // Verificar si el usuario está activo
        if ($usuario['activo'] != 1) {
            header("Location: ../login.html?error=inactive");
            exit;
        }

        // Verificar contraseña
        $passwordValido = false;
        
        // Primero intentar con password_verify (contraseñas hasheadas)
        if (password_verify($password, $usuario['password'])) {
            $passwordValido = true;
        } 
        // Si falla, intentar comparación directa (contraseñas sin hashear - temporal)
        else if ($password === $usuario['password']) {
            $passwordValido = true;
            
            // HASHEAR la contraseña automáticamente para la próxima vez
            $nuevoHash = password_hash($password, PASSWORD_DEFAULT);
            $sqlUpdate = "UPDATE usuarios SET password = ? WHERE id = ?";
            $stmtUpdate = $conn->prepare($sqlUpdate);
            $stmtUpdate->bind_param("si", $nuevoHash, $usuario['id']);
            $stmtUpdate->execute();
            $stmtUpdate->close();
        }
        
        if ($passwordValido) {
            // Login exitoso - Crear sesión
            $_SESSION['user_id'] = $usuario['id'];
            $_SESSION['username'] = $usuario['username'];
            $_SESSION['nombre_completo'] = $usuario['nombre_completo'];
            $_SESSION['rol'] = $usuario['rol'];
            $_SESSION['login_time'] = time();

            // Redirigir al tablero
            header("Location: ../index.html");
            exit;
        } else {
            // Contraseña incorrecta
            header("Location: ../login.html?error=invalid");
            exit;
        }
    } else {
        // Usuario no encontrado
        header("Location: ../login.html?error=invalid");
        exit;
    }

    $stmt->close();
    $conn->close();
} else {
    header("Location: ../login.html");
    exit;
}
?>