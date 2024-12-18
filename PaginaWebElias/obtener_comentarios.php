<?php
header('Content-Type: application/json; charset=utf-8');

// Configuración de la base de datos
$host = "localhost";
$user = "n308805_Usuarios";
$password = "Liberona.2000";
$database = "n308805_blog";

// Crear conexión
$conn = new mysqli($host, $user, $password, $database);

// Configurar la codificación de caracteres a UTF-8
$conn->set_charset("utf8mb4");

// Verificar conexión
if ($conn->connect_error) {
    die(json_encode(["error" => "Error de conexión: " . $conn->connect_error]));
}

// Obtener comentarios
$sql = "SELECT nombre, comentario, fecha FROM comentarios ORDER BY fecha DESC";
$result = $conn->query($sql);

$comentarios = [];
if ($result) {
    while ($row = $result->fetch_assoc()) {
        $comentarios[] = $row;
    }
    echo json_encode($comentarios, JSON_UNESCAPED_UNICODE);
} else {
    echo json_encode(["error" => "Error en la consulta SQL: " . $conn->error]);
}

$conn->close();
?>
