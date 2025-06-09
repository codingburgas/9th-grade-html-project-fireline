<?php
require 'config.php';
header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"), true);

$title = $conn->real_escape_string($data['title']);
$description = $conn->real_escape_string($data['description']);
$type = $conn->real_escape_string($data['type']);
$severity = $conn->real_escape_string($data['severity']);
$people = (int)$data['people'];
$lat = (float)$data['lat'];
$lng = (float)$data['lng'];

$sql = "INSERT INTO incidents (title, description, type, severity, people, lat, lng)
        VALUES ('$title', '$description', '$type', '$severity', $people, $lat, $lng)";

if ($conn->query($sql)) {
    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error", "error" => $conn->error]);
}
?>
