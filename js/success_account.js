
$(function(){
	//first animation start
	$("#thanks").animate({opacity:1},1000);//1s	
	$("#circle").animate({opacity:1},1000);//1s
	//first animation end
	$("#thanks").queue(function(){
		//second animation start					
		$("#thanks2").animate({opacity:1},1000);//1s
		//second animation end		
		$("#thanks2").queue(function(){
			//third animation start			
			setTimeout("go_index()", 4000);//4s
			setInterval("remove_rect()", 1000);//1s
			//third animation end		
		});
	});
});




	function go_index(){
			location.href = "index.html";
	};

	function remove_rect(){
		$(".timer_rect:last").removeClass("timer_rect")
	};

