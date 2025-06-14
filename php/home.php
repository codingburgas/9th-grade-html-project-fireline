<?php

session_start();

$errors = [
    'login' => $_SESSION['login_error'] ?? '',
    'register' => $_SESSION['register_error'] ?? ''
    //null coalescing operator says that if the session entry exists and is different from null, use it, otherwise use an empty string
    //check if login or register was last active
  ];
$activeForm = $_SESSION['active_form'] ?? 'login';
//if register is stored it becomes active form, otherwise it is login by default

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
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Fireline Main Page</title>
  <link rel="stylesheet" href="../css/style.css"/>
  <link rel="stylesheet" href="../css/statistics.css"/>
  <script defer src="../javascript/loginRegister.js"></script>
  <
</head>
<body>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">Fireline</div>
      <ul class="nav-links">
        <li><a href="home.php">Home</a></li>
        <li><a href="../html/incidents.html">Incidents</a></li>
        <li><a href="../html/map.html">Map</a></li>
        <li><a href="../html/personnel.html">Personnel</a></li>
        <li><a href="../html/vehicles.html">Vehicles</a></li>
        <li><a href="../html/teams.html">Teams</a></li>
        <div class="dropdown">
    <button class="dropbtn">Statistics
    </button>
    <div class="dropdown-content">
      <a href="../html/chartFires.html">Fires</a>
      <a href="../html/chartRegions.html">Regions</a>
      <a href="../html/chartAccidents.html">Accidents</a>
    </div>
    </div>
        <li><a href="../html/contact.html">Messages</a></li>
      </ul>
      <button class="dropbtn" onclick="window.location.href='logout.php'">Log out</button>
    </div>
  </nav>
  <button id="theme-switch" >
    <svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="38px" fill="#e3e3e3"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="38px" fill="#e3e3e3"><path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"/></svg>  
</button>
  <h1 class="header1">Fireline</h1>
  <p class="par">Stay alert. Stay safe. Respond fast.</p>

  <div class="grid-container1">
    <div class="box">
      <h1>Report a fire</h1>
      <p>Quickly submit reports to alert the response team and track emergencies in real-time.</p>
    </div>
    <div class="box">
      <h1>Live Incident Map</h1>
      <p>View active incidents on a dynamic map updated live from field data.</p>
    </div>
    <div class="box">
      <h1>View recent fires</h1>
      <p>See the latest fire records and incident outcomes.</p>
    </div>
  </div>

  <h1 class="header1">About Us</h1>
  <p class="par">Fireline is a platform designed to support emergency response teams by offering fast, reliable incident tracking, resource allocation, and communication.</p>

  <div class="grid-container2">
    <div class="box">
      <h1>Fire trucks</h1>
      <p>Details on active and reserve vehicles across the regions.</p>
    </div>
    <div class="box">
      <h1>Our teams</h1>
      <p>Meet the people keeping your communities safe.</p>
    </div>
    <div class="box">
      <h1>Other</h1>
      <p>Everything else that supports operations — from drones to databases.</p>
    </div>
  </div>

  <footer>
    <p>Contact us at <a href="mailto:info@fireline.org">info@fireline.org</a></p>
  </footer>
</body>
</html>