//It started 21th Febuary 2016
//Developed by DART, Lubycon
//LubySelector

(function($){
	$.fn.lubySelector = function(option){
        var defaults = { 
            width: 300,
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
                        var $this = $(this),

                        width = $this.data("width") ? $this.data("width"):d.width,
                        theme = $this.data("theme") ? $this.data("theme"):d.theme,
                        header = $this.data("header") ? $this.data("header"):d.header,
                        searchBar = $this.data("searchBar") ? $this.data("searchBar"):d.searchBar,
                        $lubySelector = $("<span/>", {
                            "class": "lubySelector",
                            header: header,
                            searchBar: searchBar,
                            theme: theme
                        }),
                        $lubySelector = $this.wrapAll($lubySelector);
                    }
                })
            }
        },
        callbacks = {
            test: function () {
                return this.each(function () {
                    console.log("tested");
                })
            }
        }
        //debug = console.log("object" != typeof option && option ? ($.error('lubySelecto: No such method "' + option + '" for the lubySelector instance'), void 0) : pac.init.apply(this, arguments));

        return callbacks[option] ? 
        callbacks[option].apply(this, Array.prototype.slice.call(arguments, 1)) : 
        "object" != typeof option && option ? 
            ($.error('lubySelecto: No such method "' + option + '" for the lubySelector instance'), void 0) : 
            pac.init.apply(this, arguments);
    };
})(jQuery);
