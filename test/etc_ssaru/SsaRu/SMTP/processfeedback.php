<?php

	$DOCUMENT_ROOT = $_SERVER['DOCUMENT_ROOT'];
	$fromaddress = "Lubycon@gmail.com";
	$toaddress = $_POST['email'];
	$subject = "PHPMailer Test from gamil SMTP";

	function sendMail($fromaddress, $toaddress, $subject){
		date_default_timezone_set('Etc/UTC');
		require './PHPMailer/PHPMailerAutoload.php';

		$mail = new PHPMailer;
		$mail->isSMTP();
		$mail->CharSet='UTF-8';
		$mail->SMTPDebug=1;
		$mail->Debugoutput='html';
		$mail->Host='smtp.gmail.com';
		$mail->SMTPSecure='ssl';
		$mail->Port=465;
		$mail->SMTPAuth=true;
		$mail->Username=$fromaddress;
		$mail->Password="hmdwdg2015";
		$mail->setFrom($fromaddress,$fromaddress);
		$mail->addAddress($toaddress,$toaddress);
		$mail->Subject=$subject;
		$mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));
		$mail->Altbody='This is a plain-text message body';
		$mail->addAttachment('phpmailer_mini.png');
		if(!$mail->send()){
			echo "Mailer Error : ".$mail->ErrorInfo;
		}
	}
	sendMail($fromaddress, $toaddress, $subject);

?>

<html>
<head>
	<title>Bob;s Auto Parts - Feedback Submitted</title>
</head>
<body>
	<h1>Feedback submitted</h1>
	<p>Your feedback has been sent</p>
</body>
</html>