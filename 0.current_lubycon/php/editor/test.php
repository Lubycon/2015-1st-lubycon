<?php
    echo "-------------zip file upload--------------<br/>";
    $set_date = date("YmdHis");
    $con_cate = $_POST['contents_cate_name'];
    $uploaddir = '../../../contents_data/' . $con_cate . "/" . $set_date . "/" ;
    $uploadfile = $uploaddir . basename($_FILES['upload_file']['name']);

    if( mkdir($uploaddir,0070) )
    {
        echo "directory was make<br/>";
        if (move_uploaded_file($_FILES['upload_file']['tmp_name'], $uploadfile)) 
        {
            echo "zip file upload succece<br/>";
            echo "upload path : localhost/contensts_data/". $con_cate . "/" . $set_date . "/" . basename($_FILES['upload_file']['name']) . "<br/>";
        } else {
            print "zip file upload failed<br/>";
        }
    }else
    {
        echo "make directory fail";
    };
    echo "-------------zip file upload--------------<br/>";













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
