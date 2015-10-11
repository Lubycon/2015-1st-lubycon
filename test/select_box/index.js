(function($){//다른 라이브러리와의 충돌 회피
	$.fn.getText = function(){
		return this.each(function(){//chainability 유지, return
			console.log($(this).text());
		});
	};

	style_default = {
		font: "맑은 고딕",
		foreColor: "#555555",
		backColor: "#48cfad"
	};

	$.fn.mystyle = function(option){
		this.each(function(){
			$.extend(style_default, option);
			$(this).css("font-family", style_default.font)
			.css("color", style_default.foreColor)
			.css("background-color", style_default.backColor);
		});
		return this;
	}


	$(document).ready(function(){
		$("#test").getText().mystyle("color","#555555");//chainability가 되지않을 시 css메소드 에
		$("#test2").getText();
		$("#test3").getText();
	});
})(jQuery);