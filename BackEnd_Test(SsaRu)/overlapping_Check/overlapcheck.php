<?php

//include library file
require_once './Database.php';

// class instance
$database = new DBconnect;

// Database connect
$database->DBInsert();

// get parameter from overlapcheck.js
$check = trim($_POST["check"]);

// make the inquiry query
$database->query = "select exists(select * from member where email = '".$check."')";
	$database->DBQuestion();
	$result = $database->result->fetch_array();


if($check == ""){
	echo "내용을 입력해주세요";
}
else{
	if($result[0]){
		echo "중복되었습니다.";
	}
	else{
		echo "사용가능합니다.";
	}
}


?>