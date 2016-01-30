<?php
    for($i=0;$i<60;$i++)
    {
        $_GET["number"] = $i;
        @$_GET["3"] = $_GET["3"];
        include('../layout/content_card.php');
    }
    sleep(2);
?>

       