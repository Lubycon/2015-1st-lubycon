function overlap(str, id, url){
	console.log('entry point');

	// Create XMLHttpRequest Object
	if(window.XMLHttpRequest){
		// Code for IE7+, Firefox, Chrome, Opera, Safari
		try{
			xmlhttp = new XMLHttpRequest();
		}
		catch(e){
			xmlhttp = false;
		}
	}
	else{
		// Code for IE6, IE5
		try{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(e){
			xmlhttp = false;
		}
	}

	console.log(xmlhttp);

	// What to do when XML feed you the response from the server
	xmlhttp.onreadystatechange = function(){
		console.log(xmlhttp);
		console.log(xmlhttp.readyState);		

		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			document.getElementById(id).innerHTML = xmlhttp.responseText;
		}
	}

	// Send to request about POST method
	xmlhttp.open("POST", url, true);
	// Must define for POST method to...
	xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	// here
	xmlhttp.send('check=' + str);

}