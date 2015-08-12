<?php
ini_set("display_errors", "1");
session_save_path('./');
session_start();
echo (file_get_contents("sess_".session_id()));

echo $_SESSION['IDENTITY'];
echo '<br />';
echo $_SESSION['PASSWORD'];
echo '<br />';
echo $_SESSION['is_login'];
echo '<br />';
echo $_SESSION['nickname'];
echo '<br />';
echo $_SESSION['time'];
echo '<br />';

?>

<html>
<body>
	<?php echo $_SESSION['nickname'];?>님 환영합니다<br />
	<a href="./logout.php">로그아웃</a>
</body>
</html>