<script language = "javascript">

	function overlap(){
		document.form.id1.value = "이미 등록된 계정입니다.";
	}

	function non_overlap(){
		document.form.id1.value = "사용가능한 계정입니다.";
	}


</script>

<?php

	require_once './Database.php';

	$database = new DBConnect;
	$database->DBInsert();

	$email=$_GET['email'];

	$database->query = "select exists(select * from member where email = '".$email."')";
	$database->DBQuestion();
	$result = $database->result->fetch_array();

	if($result[0]){
		echo ("<script>overlap();</script>");
	}
	else{
		echo ("<script>non_overlap()</script>");
	}
?>