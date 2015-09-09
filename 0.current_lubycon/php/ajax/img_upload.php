<?php
$form_data = $_POST['submit_data'];

var_dump($_FILES['userfile']['tmp_name']);
exit;
var_dump($_FILES['userfile']['tmp_name']);

ini_set("display_errors", "1");
$uploaddir = 'C:\Bitnami\wampstack-5.5.28-0\apache2\htdocs\0.current_lubycon\CH\user_thumbnail\\';
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