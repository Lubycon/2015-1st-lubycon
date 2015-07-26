
$(function(){
	////////////////////////////////////////////first animation start
	$("#thanks").animate({opacity:1},700);//1s	
	$("#circle").animate({opacity:1},700);//1s
    //draw circle start
    $(function(){
        var context = $('#cir_body')[0].getContext('2d');
		var dig1 = 360/3000;
		var numalt = (dig1*$('#cir_body').text());
		var i = 0;
		
		context.translate(65,65);//center
		context.rotate(315*(Math.PI/90));//start point and draw speed
		
		setInterval(function(){
			context.beginPath();
			if( i > -numalt ){
				context.arc(0 ,0 ,50 ,0 ,i*(Math.PI/60) ,true);
				i--;
			};
				
			context.strokeStyle = '#8ec89a';
			context.lineWidth = 100;
			context.stroke();
		},2);
	});
				
	//draw circle end
	/////////////////////////////////////////////first animation end
	$("#thanks").queue(function(){
		/////////////////////////////////////////second animation start					
		$("#thanks2").animate({opacity:1},700);//1s
		/////////////////////////////////////////second animation end		
		$("#thanks2").queue(function(){
			////////////////////////////////////third animation start			
			setTimeout("go_index()", 4000);//4s
			setInterval("remove_rect()", 1000);//1s
			///////////////////////////////////third animation end		
		});
	});
});




function go_index(){
		location.href = "index.html";
};

function remove_rect(){
	$(".timer_rect:last").removeClass("timer_rect")
};

