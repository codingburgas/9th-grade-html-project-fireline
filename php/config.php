<?php

$host = "localhost";
// localhost means the database is on the same computer as the php code 
$user = "root";
//root is default admin account and has all privileges
$password = "";
//no password is set
$database = "users_db";

$conn = new mysqli($host, $user, $password, $database);
//conn is a variable which holds the object returned by the new mysqli
//can be used to check for errors or run queries

if($conn->connect_error){
//ask the conn object for its' connect_error property

    die("Connection failed: ". $conn->connect_error);
    //stop script and prints error message
}
//if connect_error is not empty then something went wrong

?>