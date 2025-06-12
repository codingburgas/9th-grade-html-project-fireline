<?php

session_start();
require_once 'config.php';
//pull in db connection code

if(isset($_POST['register'])) {
//check if the register button was clicked (if the form field exists)
//post is an associative array where keys = input names and values = user input
//it is the gateway to everything the user submitted through the form
    $name = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    //turn the password into a secure hash so you don't store the raw passwords in your db

    $checkEmail = $conn->query("SELECT email FROM users WHERE email = '$email'");
    //check for duplicate email
    if($checkEmail->num_rows > 0){
        $_SESSION['register_error'] = 'Email is already registered!';
        $_SESSION['active_form'] = 'register';
        //show register page with error message
    } else {
        $conn->query("INSERT INTO users (username, email, password) VALUES ('$name', '$email', '$password')");
        //if email is free, stores the user's data in the db
    }

    header("Location: index.php");
    exit();
}

if(isset($_POST['login'])){
//check if login button was clicked

    $email = $_POST['email'];
    $password = $_POST['password'];
    //get user input

    $result = $conn->query("SELECT * FROM users WHERE email = '$email'");
    //select the entire row for the matching email
    if($result->num_rows > 0){
        $user = $result->fetch_assoc();
        //grab selected row
        if(password_verify($password, $user['password'])){
            //compare raw password to hash password
            $_SESSION['username'] = $user['username'];
            $_SESSION['email'] = $user['email'];
            //store who is logged in in the session

            header("Location: home.php");

            exit();
        }
    }

    $_SESSION['login_error'] = 'Incorrect email or password';
    $_SESSION['active_form'] = 'login';
    //show login page with error message
    header("Location: index.php");
    exit();
}

?>