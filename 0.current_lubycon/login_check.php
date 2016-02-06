<?php
	require_once './php/database/database_class.php';

	$database = new DBConnect;
	$database->DBInsert();


	$login_id = $_POST['login_id'];
	$login_pass = $_POST['login_pass'];
	
	$database->query = "SELECT user_email, user_pass FROM luby_user WHERE (user_email='".$login_id."')";
	$database->DBQuestion();

	$result = mysqli_fetch_array($database->result);

	if(password_verify($login_pass,$result['user_pass'])){
		echo "<script>document.location.href='index.php'</script>";
	}else{
		echo "false <br/>";
	}


echo "<hr/><p>login value start</p>";
echo "login id = " . $login_id;
echo "<br/>";
echo "login password = " . $hash;
echo "<p>login value end</p><hr/>";



echo "<hr/><p>create account value start</p>";
echo "<p>create account value end</p><hr/>";
?>