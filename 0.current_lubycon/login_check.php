<?php
	require_once './php/database/database_class.php';
	require_once './php/session/session_class.php';

	$session = new Session();

	$database = new DBConnect;
	$database->DBInsert();


	$login_id = $_POST['login_id'];
	$login_pass = $_POST['login_pass'];
	
	$database->query = "SELECT user_email, user_pass, user_nick FROM luby_user WHERE 
	(user_email='".$login_id."')";
	$database->DBQuestion();

	$result = mysqli_fetch_array($database->result);

	$login_nick = $result['user_nick'];
	if(password_verify($login_pass,$result['user_pass'])){
		// 로그인 기록 로그 테이블에 남겨놔야함.
		$info[0] = $login_nick;
		$info[1] = time();
		setcookie('login', serialize($info), time()+900);
		$session->create_session('id');
		$session->insert_value('id', $info);
		
		//$_SESSION['id'] = $login_id;
		header('location:index.php');
		//echo "<script>document.location.href='index.php'</script>";
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