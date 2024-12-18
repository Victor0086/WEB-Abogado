<?php
header('Content-Type: application/json');

// Configuración de la base de datos
$host = "localhost";
$user = "n308805_Usuarios";
$password = "Liberona.2000";
$database = "n308805_blog";

// Crear conexión
$conn = new mysqli($host, $user, $password, $database);

// Verificar conexión
if ($conn->connect_error) {
    die(json_encode(["error" => "Error de conexión: " . $conn->connect_error]));
}

// Verificar si la base de datos está conectada correctamente
echo "Conexión exitosa. Base de datos seleccionada: $database\n";

// Obtener comentarios
$sql = "SELECT nombre, comentario FROM comentarios ORDER BY fecha DESC";
$result = $conn->query($sql);

if (!$result) {
    die(json_encode(["error" => "Error en la consulta SQL: " . $conn->error]));
}

$comentarios = [];
while ($row = $result->fetch_assoc()) {
    $comentarios[] = $row;
}

echo json_encode($comentarios);

$conn->close();
?>
