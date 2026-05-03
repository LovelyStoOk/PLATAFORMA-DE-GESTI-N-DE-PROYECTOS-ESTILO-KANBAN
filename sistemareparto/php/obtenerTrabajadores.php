<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

include 'conexion.php';

// Verificar que sea POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "message" => "Método no permitido"]);
    exit;
}

// Obtener datos del formulario
$nombre = trim($_POST["nombre"] ?? '');
$apellido_paterno = trim($_POST["apellido_paterno"] ?? '');
$apellido_materno = trim($_POST["apellido_materno"] ?? '');
$id_trabajador = trim($_POST["id_trabajador"] ?? '');
$rfc = strtoupper(trim($_POST["rfc"] ?? ''));
$email = trim($_POST["email"] ?? '');
$rol = trim($_POST["rol"] ?? '');
$telefono = trim($_POST["telefono"] ?? '');
$fecha_ingreso = trim($_POST["fecha_ingreso"] ?? '');
$admin_password = trim($_POST["admin_password"] ?? '');

// Validar campos requeridos
if (empty($nombre) || empty($apellido_paterno) || empty($id_trabajador) || 
    empty($rfc) || empty($email) || empty($rol) || empty($admin_password)) {
    echo json_encode(["success" => false, "message" => "Todos los campos requeridos deben ser completados"]);
    exit;
}

// Validar formato de email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "Formato de email inválido"]);
    exit;
}

// Validar RFC (13 caracteres)
if (strlen($rfc) !== 13) {
    echo json_encode(["success" => false, "message" => "El RFC debe tener 13 caracteres"]);
    exit;
}

// IMPORTANTE: Aquí deberías validar la contraseña de administrador
// Por ejemplo, comparándola con una contraseña almacenada de forma segura
// Para este ejemplo, usaremos una contraseña simple (CÁMBIALA EN PRODUCCIÓN)
$admin_password_correcto = "admin123"; // CAMBIAR ESTO

if ($admin_password !== $admin_password_correcto) {
    echo json_encode(["success" => false, "message" => "Contraseña de administrador incorrecta"]);
    exit;
}

// Verificar si el ID de trabajador ya existe
$stmt = $conn->prepare("SELECT id FROM trabajadores WHERE id_trabajador = ?");
$stmt->bind_param("s", $id_trabajador);
$stmt->execute();
$resultado = $stmt->get_result();

if ($resultado->num_rows > 0) {
    echo json_encode(["success" => false, "message" => "El ID de trabajador ya existe"]);
    $stmt->close();
    exit;
}
$stmt->close();

// Verificar si el RFC ya existe
$stmt = $conn->prepare("SELECT id FROM trabajadores WHERE rfc = ?");
$stmt->bind_param("s", $rfc);
$stmt->execute();
$resultado = $stmt->get_result();

if ($resultado->num_rows > 0) {
    echo json_encode(["success" => false, "message" => "El RFC ya está registrado"]);
    $stmt->close();
    exit;
}
$stmt->close();

// Verificar si el email ya existe
$stmt = $conn->prepare("SELECT id FROM trabajadores WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$resultado = $stmt->get_result();

if ($resultado->num_rows > 0) {
    echo json_encode(["success" => false, "message" => "El email ya está registrado"]);
    $stmt->close();
    exit;
}
$stmt->close();

// Insertar el nuevo trabajador
$sql = "INSERT INTO trabajadores (
    nombre, apellido_paterno, apellido_materno, id_trabajador, 
    rfc, email, rol, telefono, fecha_ingreso
) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

if (!$stmt) {
    echo json_encode(["success" => false, "message" => "Error en la preparación: " . $conn->error]);
    exit;
}

$stmt->bind_param(
    "sssssssss",
    $nombre,
    $apellido_paterno,
    $apellido_materno,
    $id_trabajador,
    $rfc,
    $email,
    $rol,
    $telefono,
    $fecha_ingreso
);

if ($stmt->execute()) {
    echo json_encode([
        "success" => true, 
        "message" => "Trabajador registrado exitosamente",
        "id" => $conn->insert_id
    ]);
} else {
    echo json_encode(["success" => false, "message" => "Error al registrar: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>