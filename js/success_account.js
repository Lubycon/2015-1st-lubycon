//success_account page timer start
$(document).ready(function() {
	setTimeout("go_index()", 4000);
	setInterval("remove_rect()", 1000); 
});

function go_index(){
		location.href = "index.html";
};

function remove_rect(){
	$(".timer_rect:last").removeClass("timer_rect")
};
//success_account page timer end
