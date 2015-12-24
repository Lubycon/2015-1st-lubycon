<?php
    $text_editor = $_POST['text_editor'];

    echo "text_editor = ". $text_editor;

    // it's for multiple select box
    $sel_cate = $_POST['user_selected_category'];
    $sel_tag = $_POST['user_selected_tag'];
    //

    echo "contents_subject = " . $_POST['contents_subject'];
    
    /*if($con_article)
    {
        for($k=0 ; $k< count($con_article); $k++)
        {
            echo "<br/>contents article".$k."=";
            echo $con_article[$k];
        };
    };*/

    if($sel_cate)
    {
        echo "<br/>user selectd categories = ";
        for($i=0 ; $i< count($sel_cate); $i++)
        {
            echo $sel_cate[$i] . " ";
        };
    };
    if($sel_tag)
    {
        echo "<br/>user selectd tags = ";
        for($j=0 ; $j< count($sel_tag); $j++)
        {
            echo $sel_tag[$j] . " ";
        };
    };

    echo "<br/>setting_desc = " . $_POST['setting_desc'];
    echo "<br/>setting_price_option = " . $_POST['setting_price_option'];
?>
