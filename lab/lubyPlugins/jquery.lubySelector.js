//It started 21th Febuary 2016
//Developed by DART, Lubycon
//LubySelector

(function($){
	$.fn.lubySelector = function(option){
        var defaults = { 
            width: 150,
            icon: "fa fa-filter",
            theme: "black",//기본값 블랙, 블랙이 아닐 시 무조건 화이트
            header: false,//알파벳 헤더 기능
            searchBar: false,//true시 셀렉박스리스트 맨 위에 서치바 생성
            callback: $.nothing
        },
        d = {},
        pac = {
            init: function (option) {
                return d = $.extend({}, defaults, option), this.each(function () {
                    if ($(this).hasClass("selectorKey")) console.log("lubySelector is already exists");
                    else {
                        var $this = $(this), $label, $options,
                        width = $this.data("width") ? $this.data("width") : d.width,
                        theme = $this.data("theme") ? $this.data("theme") : d.theme,
                        header = $this.data("header") ? $this.data("header") : d.header,
                        searchBar = $this.data("searchBar") ? $this.data("searchBar") : d.searchBar,
                        label = $this.val(),

                        $wrapper = $("<span/>", {
                            "class": "lubySelector",
                            header: header,
                            searchBar: searchBar,
                            theme: theme
                        }).insertAfter(this).css({"width":d.width}).on("click",pac.boxClick),
                        $label = $("<span/>",{"class": "ls_Label"}).appendTo($wrapper).text(label),
                        $optionWrap = $("<span/>",{"class": "ls_optionWrap"}).appendTo($wrapper).hide(),
                        $options = $("<span/>",{"class": "ls_option"}).appendTo($optionWrap);
                        $this.find("option").each(function(option,selector){
                            var $this = $(this);
                            pac.dataIn(option,d,$this,$options);
                        });
                    }
                })
            },
            dataIn: function(option,d,selector,list) {
                var $this = selector,//options in selectbox
                $selectbox = $this.parent,
                $options = list,
                $optionWrap = $options.parent(),
                optionVal = $this.val(),
                optionText = $this.text(),
                selected = $this.is(":selected") ? "selected" : "",
                disabled = $this.is(":disabled") ? " disabled " : "",
                
                icon = $this.data("icon") ? $this.data("icon") : d.icon,
                selected = $this.is(":selected") ? "selected" : "";
                
                $this.is("option") ? 
                ($("<span/>", {
                    "class": "ls_option " + disabled + selected,
                    title: optionText,
                    html: optionText,
                    "data-value": optionVal
                }).appendTo($optionWrap)) : "";
            },
            boxClick: function(selector) {
                var $this = $(this),
                    options = $this.find(".ls_optionWrap");
                selector.stopPropagation();//셀렉터가 로딩되었을 때 이벤트 자동발생 방지
                !$this.hasClass("open")?
                    options.fadeIn(300) && $this.addClass("open"):
                    options.fadeOut(300) && $this.removeClass("open");
                
            }
        },
        start = {
            test: function () {
                return this.each(function () {
                    console.log("tested");
                })
            }
        }
        //debug = console.log("object" != typeof option && option ? ($.error('lubySelecto: No such method "' + option + '" for the lubySelector instance'), void 0) : pac.init.apply(this, arguments));

        return start[option] ? 
        start[option].apply(this, Array.prototype.slice.call(arguments, 1)) : 
        "object" != typeof option && option ? 
            ($.error('lubySelecto: No such method "' + option + '" for the lubySelector instance'), void 0) : 
            pac.init.apply(this, arguments);
    };
})(jQuery);
