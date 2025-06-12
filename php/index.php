<?php

session_start();

$errors = [
    'login' => $_SESSION['login_error'] ?? '',
    'register' => $_SESSION['register_error'] ?? ''
    //null coalescing operator says that if the session entry exists and is different from null, use it, otherwise use an empty string
    //check if login or register was last active
];
$activeForm = $_SESSION['active_form'] ?? 'login';
//default to login if nothing is stored

session_unset();
//remove all variables from session so the error won't show again after you load a page

function showError($error){
    return !empty($error) ? "<p class='error-message'>$error</p>" : '';
}
//if $error is empty, it won't proceed with the code in the curly brackets, if it's not empty, it will load an error message

function isActiveForm($formName, $activeForm){
    return $formName === $activeForm ? 'active' : '';
    //if a string 'active' is returned, the corresponding form from formName is revealed
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
    <link rel="stylesheet" href="../css/logIn.css">
    <script src="../javascript/loginRegister.js"></script>
</head>
<body class="LRPage">

    <div class="container">
        <div class="form-box <?= isActiveForm('login', $activeForm); ?>" id="login-form">
            <form action="loginRegister.php" method="post">
                <h2>Login</h2>
                <?= showError($errors['login']); ?>
                <input type="email" name="email" placeholder="Email" required>
                <input type="password" name="password" placeholder="Password" required>
                <button type="submit" name="login">Login</button>
                <p>Don't have an account? <a href="#" onclick="showForm('register-form')">Register</a></p>
            </form>
        </div>



        <div class="form-box <?= isActiveForm('register', $activeForm); ?>" id="register-form">
            <form action="loginRegister.php" method="post">
                <h2>Register</h2>
                <?= showError($errors['register']); ?>
                <input type="text" name="username" placeholder="Username" required>
                <input type="email" name="email" placeholder="Email" required>
                <input type="password" name="password" placeholder="Password" required>
                <button type="submit" name="register">Register</button>
                <p>Already have an account? <a href="#" onclick="showForm('login-form')">Login</a></p>
            </form>
        </div> 
    </div>
</body>
</html>