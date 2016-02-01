<?php
    $third_param = $_POST['third_param'];
    for($i=0;$i<60;$i++)
    {
        $_GET["number"] = $i;
        include('../layout/community_card.php');
    }
    sleep(2);
?>

       