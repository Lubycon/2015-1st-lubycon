<?php
$id = $_POST['id'];
//echo $id;
switch($id)
{
    case 'my_contents':include('../personal_page/my_contents.php'); break;
    case 'message':include('../personal_page/message.php'); break;
    case 'bookmark':include('../personal_page/bookmark.php'); break;
    case 'account_setting':include('../personal_page/account_setting.php'); break;
    default:echo '';
}

//include('../account/create_account.php');
?>