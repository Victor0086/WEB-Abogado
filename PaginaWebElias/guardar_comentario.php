<?php
header('Content-Type: application/json; charset=utf-8');

$host = "localhost";
$user = "n308805_Usuarios";
$password = "Liberona.2000";
$database = "n308805_blog";

$conn = new mysqli($host, $user, $password, $database);
$conn->set_charset("utf8mb4");

if ($conn->connect_error) {
    die(json_encode(["error" => "Error de conexión: " . $conn->connect_error]));
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? '';
    $comment = $_POST['comment'] ?? '';

    if (empty($name) || empty($comment)) {
        echo json_encode(["error" => "Todos los campos son obligatorios"]);
        exit;
    }

    $stmt = $conn->prepare("INSERT INTO comentarios (nombre, comentario) VALUES (?, ?)");
    if ($stmt) {
        $stmt->bind_param("ss", $name, $comment);
        if ($stmt->execute()) {
            echo json_encode(["success" => "Comentario guardado correctamente"]);
        } else {
            echo json_encode(["error" => "Error al insertar los datos: " . $stmt->error]);
        }
        $stmt->close();
    } else {
        echo json_encode(["error" => "Error en la preparación de la consulta: " . $conn->error]);
    }
} else {
    echo json_encode(["error" => "Método no permitido"]);
}

$conn->close();
?>
