<?php
if(!file_exists("upload")) 
{
 mkdir("upload"); //make directory
 chmod("upload", 0777); //take permition
}

if($_FILES['formfile']['name'] != "")  //check file exist
{
 $file_name = $_FILES['formfile']['name']; //set file name
 $target = "./upload/".$file_name; //upload place

 if (move_uploaded_file($_FILES['formfile']['tmp_name'], $target)) 
 {
  chmod("$target", 0666);
  sleep(1);
  echo $file_name;
 }
}
?>