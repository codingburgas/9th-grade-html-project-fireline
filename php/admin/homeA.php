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

  <link rel="stylesheet" href="../css/style.css">
</head>
<body>
  <script type="text/javascript" src="../javascript/script.js" defer></script>

  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">Fireline</div>

      <ul class="nav-links">

        <li><a href="homeA.php">Home</a></li>
        <li><a href="incidents.html">Incidents</a></li>
        <li><a href="map.html">Map</a></li>
        <li><a href="personnel.html">Personnel</a></li>
        <li><a href="vehicles.html">Vehicles</a></li>
        <li><a href="teams.html">Teams</a></li>
        <li><a href="statistics.html">Statistics</a></li>
        <li><a href="messages.html">Messages</a></li>
        <li><a href="settings.html">Settings</a></li>
        
      </ul>
    </div>
  </nav>
<button id="theme-switch" >
    <svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="38px" fill="#e3e3e3"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="38px" fill="#e3e3e3"><path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"/></svg>  
</button>
<h1 class="header1"> Fireline</h1>
<div class = "grid-container1">
    <div class ="box" style="grid-area: box-1">
            <h1>Report a fire</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nisl urna, sed consequat ipsum gravida a. Phasellus sed libero vel enim scelerisque condimentum eget molestie libero. Nam ullamcorper convallis fringilla. Mauris fermentum sagittis porttitor. Sed molestie augue eros. Fusce varius sem ac tempor tincidunt. Aenean mollis ullamcorper magna, in rhoncus lacus feugiat ut. Sed tincidunt turpis eu lectus consectetur sollicitudin. Morbi mattis ut lectus eu pulvinar. Mauris id vulputate nisl. Fusce pretium, justo vel suscipit dictum, metus sem faucibus dui, at imperdiet tortor eros feugiat lorem. Etiam eleifend euismod leo, a congue tellus interdum at. Morbi condimentum ut nibh a rhoncus. Pellentesque pretium porttitor sodales. Nullam sed felis a eros porttitor pellentesque. Sed non lectus at urna volutpat rhoncus a eget nibh. </p>
    </div>
    <div class ="box" style="grid-area: box-2">
           <h1>Live Incident Map</h1>
    </div>
    <div class= "box" style="grid-area:box-3">
    <h1>View recent fires</h1>
    </div>
</div>
<h1 class="header1"> About Us</h1>
<p class="par">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nisl urna, sed consequat ipsum gravida a. Phasellus sed libero vel enim scelerisque condimentum eget molestie libero. Nam ullamcorper convallis fringilla. Mauris fermentum sagittis porttitor. Sed molestie augue eros. Fusce varius sem ac tempor tincidunt. Aenean mollis ullamcorper magna, in rhoncus lacus feugiat ut. Sed tincidunt turpis eu lectus consectetur sollicitudin. Morbi mattis ut lectus eu pulvinar. Mauris id vulputate nisl. Fusce pretium, justo vel suscipit dictum, metus sem faucibus dui, at imperdiet tortor eros feugiat lorem. Etiam eleifend euismod leo, a congue tellus interdum at. Morbi condimentum ut nibh a rhoncus. Pellentesque pretium porttitor sodales. Nullam sed felis a eros porttitor pellentesque. Sed non lectus at urna volutpat rhoncus a eget nibh.</p>
<div class = "grid-container2">
    <div class ="box" style="grid-area: box-1">
            <h1>Fire trucks</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nisl urna, sed consequat ipsum gravida a. Phasellus sed libero vel enim scelerisque condimentum eget molestie libero. Nam ullamcorper convallis fringilla. Mauris fermentum sagittis porttitor. Sed molestie augue eros. Fusce varius sem ac tempor tincidunt. Aenean mollis ullamcorper magna, in rhoncus lacus feugiat ut. Sed tincidunt turpis eu lectus consectetur sollicitudin. Morbi mattis ut lectus eu pulvinar. Mauris id vulputate nisl. Fusce pretium, justo vel suscipit dictum, metus sem faucibus dui, at imperdiet tortor eros feugiat lorem. Etiam eleifend euismod leo, a congue tellus interdum at. Morbi condimentum ut nibh a rhoncus. Pellentesque pretium porttitor sodales. Nullam sed felis a eros porttitor pellentesque. Sed non lectus at urna volutpat rhoncus a eget nibh. </p>
    </div>
    <div class ="box" style="grid-area: box-2">
           <h1>Our teams</h1>
    </div>
    <div class= "box" style="grid-area:box-3">
    <h1>Other</h1>
    </div>
</div>
<footer>
        <p><br>for more info contact us on our emails</p>
    </footer>
</body>
</html>