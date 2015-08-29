<?php

ini_set("display_errors", "1");
session_start();


$sess_id = $_COOKIE[session_name()];
$session = "sess_".$sess_id;


echo $sess_id;
echo '<br />';
/*
$_SESSION = array();	//reset $_SESSION

if(isset($_COOKIE[session_name()])){
	setcookie(session_name(),'',time()-42000,'/');
}

session_destroy();
//header('Location: ./login.html');
*/
?>