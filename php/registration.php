<?php

	require_once './Database.php';

	$database = new DBConnect;
	$database->DBInsert();

	$email = $_POST['email'];
	$nick = $_POST['nick'];
	$pass1 = $_POST['pass'];
	$pass2 = $_POST['confirm_pass'];
	$date = date('Y-m-d');

	if($pass1 == $pass2){
		$pass = $pass1;
	}
	else{
		header("Content-Type: text/html; charset=UTF-8");
		echo "<script>alert('입력한 비밀번호가 서로 다릅니다.');history.back();<script>";
		exit;
	}

	$database->query = "insert into member values('".$email."', '".$nick."', password('".$pass."'), '".$date."')";

	$database->DBQuestion();

	if(!$database->result){
		header("Content-Type: text/html; charset=UTF-8");
		echo "<script>alert('회원가입에 실패하였습니다.');history.back();</script>";
		$database->DBOut();
		exit;
	}
	else{
		echo "<script>alert('회원가입 되었습니다. 로그인 화면으로 이동합니다..');</script>";
		$database->DBOut();  
		exit;
	}

?>