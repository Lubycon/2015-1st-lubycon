<?php

$email = $_POST['email'];
$nick = $_POST['nick'];
$pass = $_POST['pass'];
$repass = $_POST['re_pass'];

//regular expression
	$mail_vali = "/^[0-9a-zA-Z]([\-.\w]*[0-9a-zA-Z\-_+])*@([0-9a-zA-Z][\-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9}$/";	// email validation check
	$pass_vali[0] = "/[^0-9]/";
	$pass_vali[1] = "/[`;',.\/~!@\#$%<>^&*\()\-=+_\¡¯]/";
	$nick_vali = "/^[A-Za-z0-9+]*$/";	//only english & number

	//confirm password
	$nomali_pass = strtolower($pass);	//string nomalization -> to lower
	$nomali_repass = strtolower($repass);
	$confirm_pass = ($nomali_pass == $nomali_repass) && preg_match($pass_vali[0], $pass) &&((int)strlen($pass)) > 7 && ((int)strlen($pass) < 21 && !($pass == ' '));	//length & pass same check

	//confirm email
	$mail_length = strlen($email);	//length email (deny null & space)
	$confirm_email = $mail_length > 0 && !($email == ' ') && preg_match($mail_vali, $email);

	//confirm nickname
	$nick_length = ((int)strlen($nick));

	$confirm_nick = $nick_length > 0 && $nick_length < 17 && !($nick == ' ') && preg_match($nick_vali, $nick);

	//email validation check
	if($confirm_email){	//check to length & validation
		$email_validation = true;
		echo("console.log('email = true');");
	}
	else{
		$email_validation = false;
		echo("<sciprt>console.log('email = false');</sciprt>");
	}

	//password validation check
	if($confirm_pass){
		$pass_validation = true;
		echo("<sciprt>console.log('pass = true');</sciprt>");
	}
	else{
		$pass_validation = false;
		echo("<sciprt>console.log('pass = false');</sciprt>");
	}

	//nickname validation check
	if($confirm_nick){
		$nick_validation = true;
		echo("<sciprt>console.log('nick = true');</sciprt>");
	}
	else{
		$nick_validation = false;
		echo("<sciprt>console.log('nick = false');</sciprt>");
	}

	if($email_validation && $pass_validation && $nick_validation){
		echo("정상적인 입력입니다.");
	}
	else{
		echo("정상적이지 않은 입력입니다.");
	}

?>