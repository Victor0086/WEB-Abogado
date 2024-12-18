<?php
$host = "localhost";
$user = "n308805_Usuarios";
$password = "Liberona.2000";
$database = "n308805_blog";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
} else {
    echo "Conexión exitosa a la base de datos.";
}

$conn->close();
?>
