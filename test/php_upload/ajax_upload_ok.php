<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
</head>   
<body>
<?php
var_dump($_FILES['userfile']['tmp_name']);

ini_set("display_errors", "1");
$uploaddir = 'C:\BitNami\wampstack-5.5.28-0\apache2\htdocs\test\php_upload\uploadimg\\';
$uploadfile = $uploaddir . basename($_FILES['userfile']['name']);
echo '<pre>';
if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
    echo "succece upload.\n";
} else {
    print "file upload was failed!\n";
}
echo 'info debug:';
print_r($_FILES);
print "</pre>";
?>
<img src="uploadimg/<?=$_FILES['userfile']['name']?>"/>
</body>
</html>