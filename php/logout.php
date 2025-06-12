<?php

session_start();
//start or continue the active session so we can access the session data
session_unset();
//delete all temporary data from the session
session_destroy();
//delete all session data from the server
header("Location: index.php");
exit();

?>