<?php
$servername = "localhost";
$username = "root";
$password = "";
$db="okoknp";

// Create connection
$conn = new mysqli($servername, $username, $password,$db);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$sql ="CREATE TABLE  Anime(
    row_id INT(9) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    genre VARCHAR(255),
    type VARCHAR(255),
    episodes INT,
    rating DECIMAL,
    members INT)";
//umm for inserting those rows i did manually from phpmyadmiin
if ($conn->query($sql) === TRUE) {
    echo "Table MyGuests created successfully";
  } else {
    echo "Error creating table: " . $conn->error;
  }
  
  $conn->close();
?>