<?php
if ($_FILES['file']['name']) 
{
    if (!$_FILES['file']['error']) 
    {
        $name = md5(rand(100, 200));
        $ext = explode('.', $_FILES['file']['name']);
        $filename = $name . '.' . $ext[1];
        $destination = '../../../contents_data/temp/' . $filename; //change this directory
        $location = $_FILES["file"]["tmp_name"];
        move_uploaded_file($location, $destination);
        $file_info = array("file_path" => $destination , "file_name" => $filename);
        echo json_encode($file_info);
    }else{
        echo  $message = 'Ooops!  Your upload triggered the following error:  ' . $_FILES['file']['error'];
    }
}
?>