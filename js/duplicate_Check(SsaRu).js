function Check_email(str){
	if(str.length == 0){
		document.getElementById("textHint").innerHTML = "";
		return ;
	}
	else{
		if(window.XMLHttpRequest){
			var xmlhttp = new XMLHttpRequest();
		}
		else{
			var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}

		xmlhttp.onreadystatechange = function(){
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
				document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
			}
		}
		xmlhttp.open("POST", "Email_Overlapping_Check.php?check=" + str, true);
		xmlhttp.send();
	}
}