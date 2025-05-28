<?php

session_start();

$errors = [
    'login' => $_SESSION['login_error'] ?? '',
    'register' => $_SESSION['register_error'] ?? ''
];
$activeForm = $_SESSION['active_form'] ?? 'login';

session_unset();

function showError($error){
    return !empty($error) ? "<p class='error-message'>$error</p>" : '';
}

function isActiveForm($formName, $activeForm){
    return $formName === $activeForm ? 'active' : '';
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Fireline Main Page</title>
  <link rel="stylesheet" href="../../css/style.css">
</head>
<body>
  <script src="../../javascript/script.js"></script>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">Fireline</div>
      <ul class="nav-links">
        <li><a href="homeA.php">Home</a></li>
        <li><a href="../../html/incidents.html">Incidents</a></li>
        <li><a href="../../html/map.html">Map</a></li>
        <li><a href="../../html/personnel.html">Personnel</a></li>
        <li><a href="../../html/vehicles.html">Vehicles</a></li>
        <li><a href="../../html/teams.html">Teams</a></li>
        <li><a href="../../html/statistics.html">Statistics</a></li>
        <li><a href="../../html/messages.html">Messages</a></li>
        <li><a href="../../html/settings.html">Settings</a></li>
      </ul>
    </div>
  </nav>

  <h1> asdasjdajsdajsdjas</h1>
  <button onclick="darkmode()">Dark mode</button>
</body>
</html>
