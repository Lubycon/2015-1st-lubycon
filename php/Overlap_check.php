<?php

	require_once './Database.php';

	$database = new DBConnect;
	$database->DBInsert();

	$check = $_POST['check'];

	$database->query = "select exists(select * from member where email = '".$check."')";
	$database->DBQuestion();
	$result = $database->result->fetch_array();

	echo ($result[0]);

?>