<?php
$check_id = $_POST['check_id'];

if($check_id == 'call_thumb')
{
    include('../editor/editor_thumbnail.php');
}else if($check_id == 'call_setting')
{
    include('../editor/editor_setting.php');
}

?>