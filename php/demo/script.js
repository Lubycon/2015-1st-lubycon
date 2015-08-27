var default_content="";

$(document).ready(function(){
	
	checkURL();
	$('ul li a').click(function (e){

			checkURL(this.hash);

	});
	
	//filling in the default content
	default_content = $('#pageContent').html();
	
	
	setInterval("checkURL()",250);
	
});

var lasturl="";

function checkURL(hash)
{
	if(!hash) hash=window.location.hash;
	
	if(hash != lasturl)
	{
		lasturl=hash;
		
		// FIX - if we've used the history buttons to return to the homepage,
		// fill the pageContent with the default_content
		
		if(hash=="")
		$('#pageContent').html(default_content);
		
		else
		loadPage(hash);
	}
}

         

function loadPage(url)
{
    consoel.log('come in');
    function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] == sParam) {
                return sParameterName[1];
            }
        }
    }
    var fi = getUrlParameter('1');
    var se = getUrlParameter('2');


	$('#loading').css('visibility','visible');
	
	$.ajax({
		type: "POST",
		url: "load_page.php",
		data: 'page='+se,
		dataType: "html",
		success: function(msg){
			
			
			    console.log(msg);
				$('#pageContent').html(msg);
				$('#loading').css('visibility','hidden');
			
		}
		
	});

}