/* ===========================================================
 *
 *  Name:          lubySelector.min.js
 *  Updated:       2016-02-23
 *  Version:       0.1.0
 *  Created by:    DART, Lubycon.co
 *
 *  Copyright (c) 2016 Lubycon.co
 *
 * =========================================================== */

(function($){
	$.fn.lubySelector = function(option){
        var defaults = { 
            width: 150,
            icon: "fa fa-filter",
            theme: "black",//white, ghost
            header: false,//알파벳 헤더 기능
            searchBar: false,//true시 셀렉박스리스트 맨 위에 서치바 생성
            callback: $.nothing
        },
        d = {},
        pac = {
            init: function (option) {
                return d = $.extend({}, defaults, option), this.each(function () {
                    if ($(this).hasClass("selectorKey")) $.error("lubySelector is already exists");
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
                        }).insertAfter($this).append($this).css({"width":d.width})
                        .on("click", pac.boxClick).on("click", pac.trigger)
                        .on("focusin", pac.boxFocus).on("focusout", pac.boxBlur)
                        .on("click", ".ls_option", pac.optionClick)
                        .on("change","select",pac.changeOption),

                        $label = $("<span/>",{"class": "ls_Label"}).insertBefore($this).text(label),
                        $optionWrap = $("<span/>",{"class": "ls_optionWrap"}).insertBefore($this).hide(),
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
                selector.stopPropagation();
                !$this.hasClass("open")?
                    options.fadeIn(300) && $this.addClass("open"):
                    options.fadeOut(300) && $this.removeClass("open");
                
            },
            trigger: function(selector) {
                var $this = $(this),
                selectbox = $this.find("select");
                selector.stopPropagation();
                $this.hasClass("open")?
                    selectbox.show().trigger("focus")&&console.log("original selectbox was enabled"):
                    selectbox.hide().trigger("blur")&&console.log("original selectbox was disabled");
                
            },
            boxFocus: function(selector) {
                var $this = $(this);
                !$this.hasClass("focused") ? $this.addClass("focused"): "";
            },
            boxBlur: function(selector) {
                var $this = $(this);
                $this.hasClass("focused") ? $this.removeClass("open focused") && $this.find(".ls_optionWrap").fadeOut(300):"";
            },
            optionClick: function(selector) {
                var $this = $(this),
                selectbox = $this.parent().next("select"),
                label = $this.parent().prev(".ls_Label"),
                selectedValue = $this.data("value");
                selector.stopPropagation();
                !$this.hasClass("selected")?
                    $this.addClass("selected").siblings().removeClass("selected") && selectbox.val(selectedValue) && label.text(selectedValue):
                    ""; 
            },
            changeOption: function(selector) {
                var $this = $(this),
                text = $this.val(),
                option = $this.find("option").val(),
                list = $this.prev(".ls_optionWrap").find(".ls_option"),
                listValue = list.data("value");
                list.each(function(){
                    var $this = $(this);
                    (listValue == option) ? $this.addClass("selected") : $this.removeClass("selected");//어제 여기까지 짬(문제점 : 전부다 false로 감)
                })
            }
        },
        start = {
            test: function () {
                return this.each(function () {
                    console.log("tested");
                })
            }
        }

        return start[option] ? 
        start[option].apply(this, Array.prototype.slice.call(arguments, 1)) : 
        "object" != typeof option && option ? 
            ($.error('No such method "' + option + '" for the lubySelector instance'), void 0) : 
            pac.init.apply(this, arguments);
    };
})(jQuery);
