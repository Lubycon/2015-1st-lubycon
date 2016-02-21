//It started 21th Febuary 2016
//Developed by DART, Lubycon
//LubySelector

(function($){
	$.fn.lubySelector = function(option){
        var defaults = { 
            width : 300,
            theme : "black",//기본값 블랙, 블랙이 아닐 시 무조건 화이트
            header : false,//알파벳 헤더 기능
            searchBar : false//true시 셀렉박스리스트 맨 위에 서치바 생성
        },
        options = $.extend({}, defaults, option),//유저가 입력한 option + default 값 상속-> 새로운 객체 생성
        initLS = function(selector){ //실행 함수
            var existTest = selector.hasClass("lubySelectBody") ? true : false;
            if(existTest) console.log("lubySelector is already exists");//lubySelector가 존재 하는 지 검사
            else{
                makeSelector(selector);
            }
        },
        makeSelector = function(selector){
            selector.parent().prepend("<div class='lubySelector'></div>");//루비셀렉터 div생성
            var lubySelector = selector.prev(".lubySelector");
            lubySelector.text(selector.val());
            selector.addClass("lubySelectorBody");//모체가 되는 셀렉박스에 중복방지 클래스 생성
            selector.hide();//모체 셀렉박스는 숨긴다
            optionEnable(lubySelector);//생성된 루비 셀렉터에 옵션을 적용
        },
        optionEnable = function(selector){
            var themeCheck = (options.theme =="black") ? true : false;//테마 체크 
            var theme = themeCheck ? { background: "#555555", color: "#ffffff" } : { background: "#ffffff", color: "#444444" };
            //테마 객체 생성
            selector.css({
                "width" : options.width,
                "background" : theme.background,
                "color" : theme.color
            });
        }
        initLS(this);
        return this;//enable chaining
    };
})(jQuery);
