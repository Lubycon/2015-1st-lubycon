<?php
    echo "<br/>-------------zip file upload--------------<br/><br/>";
    $set_date = date("YmdHis");
    $con_cate = $_POST['contents_cate_name'];
    $uploaddir = '../../../contents_data/' . $con_cate . "/" . $set_date . "/" ;
    $upload_basename = basename($_FILES['upload_file']['name']);
    $uploadfile = $uploaddir . $upload_basename;

    if( mkdir($uploaddir,0070) )
    {
        //echo "directory is making<br/>";
        if (move_uploaded_file($_FILES['upload_file']['tmp_name'], $uploadfile)) 
        {
            //echo "zip file upload succece<br/>";
            echo "file name : " . $upload_basename . "<br/>";
            echo "contents category : " . $con_cate . "<br/>";
            echo "upload date : " . $set_date . " (year-month-day-hour-minite-second)<br/>";
            echo "upload path : localhost/contensts_data/". $con_cate . "/" . $set_date . "/" . $upload_basename;
        } else {
            print "zip file upload failed<br/>";
        }
    }else
    {
        echo "make directory fail";
    };
    echo "<br/><br/>-------------zip file upload--------------<br/>";

    
    echo "<br/>-------------text editor html--------------<br/><br/>";

    $text_editor = $_POST['text_editor'];
    /*
    $textuploaddir = '/var/www/uploads/';
    $textuploadfile = $textuploaddir . basename($_FILES['userfile']['name']);

    echo '<pre>';
    if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
        echo "파일이 유효하고, 성공적으로 업로드 되었습니다.\n";
    } else {
        print "파일 업로드 공격의 가능성이 있습니다!\n";
    }

    echo '자세한 디버깅 정보입니다:';
    print_r($_FILES);

    print "</pre>";
    */
    echo "text_editor = ". $text_editor;
    
    echo "<br/><br/>-------------text editor html--------------<br/>";


    // it's for multiple select box
    //$sel_cate = $_POST['user_selected_category'];
    //$sel_tag = $_POST['user_selected_tag'];
    //
    
    echo "<br/>-------------contents subject name--------------<br/><br/>";

    echo "contents_subject = " . $_POST['contents_subject'];
    
    echo "<br/><br/>-------------contents subject name--------------<br/>";
    /*if($con_article)
    {
        for($k=0 ; $k< count($con_article); $k++)
        {
            echo "<br/>contents article".$k."=";
            echo $con_article[$k];
        };
    };*/
    /*
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
    */
?>
