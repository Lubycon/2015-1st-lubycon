<?php
	
	//include DB class 
	require_once './Database.php';

	// object instance
	$database = new DBConnect;
	$database->DBInsert();

	//get variable
	$check = $_POST['check'];

	//overlap check
	$database->query = "select exists(select * from member where email = '".$check."')";
	$database->DBQuestion();
	$result = $database->result->fetch_array();

	//return to xml
	echo ($result[0]);

?>