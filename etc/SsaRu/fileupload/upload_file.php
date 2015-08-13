<?php

	if((($_FILES['file']['type']=='image/gif') || 
		($_FILES['file']['type']=='image/jpeg') || 
		($_FILES['file']['type']=='image/pjpeg')) && ($_FILES['file']['size'] < 20000)){
		// restrict file type & file size <20Kb, gif,jpeg,pjpeg
		if($_FILES['file']['error'] > 0){
			//error exception
			echo "Error:".$_FILES['file']['error']."<br/>";
		}
		else{
			echo "Upload :".$_FILES['file']['name'].'<br/>';
			echo "Type:".$_FILES['file']['type'].'<br/>';
			echo "Size:".($_FILES['file']['size']/1024).'Kb<br/>';
			echo "Temp file:".$_FILES['file']['tmp_name'].'<br/>';

			if(file_exists("./".$_FILES['file']['name'])){
				//already exists file
				echo $_FILES['file']['name'].'<br/><br/>'.'already exists';
			}
			else{
				//transfer file
				move_uploaded_file($_FILES['file']['tmp_name'], $_FILES['file']['name']);
				echo "Stored in:".$_FILES['file']['name'];
			}
		}
	}
	else{
		echo "Invalid file";
	}

	
	

?>