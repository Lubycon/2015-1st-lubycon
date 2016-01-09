/*----------------------------time card in dashboard page start------------------------*/
function localTime() {
    var localtime = new Date();
    var local_h = localtime.getHours();
    var local_m = localtime.getMinutes();
    var local_s = localtime.getSeconds();
    var mid = "";
    var clock = setTimeout(localTime, 1000);
    
    if(local_h <= 12){ //At 00 hours we need to show 12 am
    	mid = "am";
    }
    else if(local_h > 12){ // pm
    	local_h = local_h - 12;
    	mid = "pm";
    };
    //console.log("<"+mid+">"+local_h+":"+local_m+":"+local_s);

    local_h = checkTime(local_h);
    local_m = checkTime(local_m);
    local_s = checkTime(local_s);
    $("#user_ampm").text(mid);
    $("#userclock").html(local_h + "<span class='colon'>:</span>" + local_m);
    $("#local_ampm").text(mid);
    $("#localclock").html(local_h + "<span class='colon'>:</span>" + local_m);
};

function checkTime(i) {
    if (i < 10){
    	i = "0" + i
	};  // add zero in front of numbers < 10

    return i;
};

function blinkColon() {

	var colon_count = 0;

    var blink_time = setInterval(function(){
        var colon = $(".colon");
    	if(colon_count == 0){
    		colon.css("visibility","hidden");
    		colon_count = 1;
    		//console.log(colon_count);
    	}
    	else if(colon_count == 1){
    		colon_count = 0;
    		colon.css("visibility","visible");
    		//console.log(colon_count);
    	}
    },500);
};

localTime();
blinkColon();




/*----------------------------time card in dashboard page end--------------------------*/
