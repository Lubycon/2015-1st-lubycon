<?php
$id = $_POST['id'];
//echo $id;
switch($id)
{
    case 'my_contents':include_once('../personal_page/my_contents.php'); break;
    case 'message':include_once('../personal_page/message.php'); break;
    case 'bookmark':include_once('../personal_page/bookmark.php'); break;
    case 'account_setting':include_once('../personal_page/account_setting.php'); break;
    default:echo '404 not found';
}

//include_once('../account/create_account.php');
?>