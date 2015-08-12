<?php
// check password
// get parameter from overlapcheck.js
$check = trim($_POST["check"]);

$deny[] =


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