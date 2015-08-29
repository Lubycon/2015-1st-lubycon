<?php
session_cache_expire(1);
session_save_path('./');
session_start();

$_SESSION['IDENTITY'] = $_POST['id'];
$_SESSION['PASSWORD'] = $_POST['pwd'];
$_SESSION['time'] = date("Y-m-d H:i:s", strtotime("+4 hours"));

echo $_SESSION['IDENTITY'];
echo '<br / >';
echo $_SESSION['PASSWORD'];
echo '<br />';
echo '<br />';

echo 'entry point 1';
echo '<br />';
$id = "SsaRu";
$pwd = "123456";

echo 'entry point 2';
echo '<br />';
if(!empty($_SESSION['IDENTITY']) && !empty($_SESSION['PASSWORD'])){
	echo 'entry point 3';
	echo '<br />';
	if($_SESSION['IDENTITY'] == $id && $_SESSION['PASSWORD'] == $pwd){
		echo 'entry point 4';
		echo '<br />';

		$_SESSION['is_login'] = true;
		$_SESSION['nickname'] = '싸루';
		header('Location: session.php');
		
		exit;
	}
}

echo '로그인 하지 못했습니다.';

?>