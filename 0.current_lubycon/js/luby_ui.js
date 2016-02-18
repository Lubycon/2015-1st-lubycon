//This file is only one separate classification codes associated with the UI of the Lubycon.
//1. sticky
//2. hover action
//3. tooltip box action
//4. alert action
//5. selector
//6. mb-panel_menu
/////////////////////////////////////////////////////////
//      event handler start
/////////////////////////////////////////////////////////
//This function will be canceled the click event when users touch in mobile devices
//So if you want use any function in mobile, This eventHandler must be called to your function//
function eventHandler(event, selector) {
    event.stopPropagation();
    event.preventDefault();
    if (event.type === 'touchend'){
        selector.off('click');
    }
};
/////////////////////////////////////////////////////////
//      event handler end
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//      dragging sensor start
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//      dragging sensor end
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//      sticky start
/////////////////////////////////////////////////////////
$(document).scroll(function () {
    if (($(".nav_guide").length != 0) && windowWidth >= 1025) {
        var stickyStart = $("#main_figure").height() + $("#navsel").height();
        if($("#navsel").length == 0) {
            stickyStart -= $("#navsel").height();
        }else {
            stickyStart;
        }
        if($("#main_figure").length == 0){
            stickyStart -= $("#main_figure").height();
        }else{
            stickyStart;
        }
        lubySticky(stickyStart);
    }
    else {
        return;
    }
});
function lubySticky(stickyStart) {
    if ($(document).scrollTop() >= stickyStart) {
        if ($(".nav_guide").attr("id") == "contents_info_wrap") {
            $("#contents_score").hide(1, function () {
                $(".nav_guide").css({
                    "position": "fixed",
                    "top": "50px",
                    "z-index": "4",
                    "box-shadow": "0px 3px 7px rgba(0,0,0,0.3)"
                });
                stickyContent(stickyStart);
                return;
            });
        }
        else {
            $(".nav_guide").css({
                "position": "fixed",
                "top": "50px",
                "z-index": "4",
                "box-shadow": "0px 3px 7px rgba(0,0,0,0.3)"
            });
            stickyContent(stickyStart);
            return;
        }
    }
    else {
        if ($(".nav_guide").attr("id") == "contents_info_wrap") {
            $(".nav_guide").css({
                "position": "relative",
                "top": "0px",
                "box-shadow": "0px 0px 0px rgba(0,0,0,0.3)"
            });
            stickyContent(stickyStart);
            $("#contents_score").show();
            return;
        }
        else {
            $(".nav_guide").css({
                "position": "relative",
                "top": "0px",
                "box-shadow": "0px 0px 0px rgba(0,0,0,0.3)"
            });
            stickyContent(stickyStart);
            return;
        }
    }
}
function stickyContent(stickyStart) {
    var bannerPosition = $("#main_header").height() + $(".nav_guide").height(),
        contentPosition = bannerPosition - $("#navsel").height() - 15;
    if($("#navsel").length == 0){
        contentPosition -= 35; 
    }
    else{
        contentPosition = contentPosition;
    }
    if ($(document).find(".con_aside") && ($(".con_aside").attr("id") != "editor_aside")) {
        if ($(document).scrollTop() >= stickyStart) {
            stickyAsideStart(bannerPosition, contentPosition);
        }
        else if ($(document).scrollTop() < stickyStart) {
            stickyAsideStop();
        };
    }
    else {
        return;
    }
}
function stickyAsideStart(bannerPosition, contentPosition) {
    if ($(".nav_guide").attr("id") == "contents_info_wrap") {
        $(".nav_guide").next().css({ "top": contentPosition.toString() + "px" });
        $(".con_aside").css({ "position": "fixed", "top": bannerPosition.toString() + "px" });
        $("#floating_bt").css({ "position": "fixed", "top": "150px" });
    }
    else {
        $(".con_aside").css({ "position": "fixed", "top": bannerPosition });
        $(".nav_guide").next().css({ "top": contentPosition });
    }
}
function stickyAsideStop() {
    $(".nav_guide").next().css({ "top": "0px" });
    $(".con_aside").css({ "position": "absolute", "top": "0px" });
    $("#floating_bt").css({ "position": "absolute", "top": "0px" });
    $("#floating_bt").css({ "position": "absolute", "top": "0px" });
}
/////////////////////////////////////////////////////////
//      sticky end
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//      add hover animations start
/////////////////////////////////////////////////////////
$(function(){   
    $('.animate_scale').hover(function (e){
        $(this).stop().animate({ width: "+=3", height: "+=3", right: "-=1.5", top: "-=1.5" }, 150);
    }, function(){
         $(this).stop().animate({ width: "-=3", height: "-=3", right: "+=1.5", top: "+=1.5" }, 150);
    });
});//scale animation end
$(function(){
    $('.animate_width').hover(function (e){
        $(this).stop().animate({ width: "+=3", right: "-=1.5"}, 150);
    }, function(){
        $(this).stop().animate({ width: "-=3", right: "+=1.5"},150);
    })
})
$(function(){
    $(".animate_opacity").hover(function (e){
        $(this).stop().animate({ opacity: 0.8 },200);
    },function(){
        $(this).stop().animate({ opacity: 1 },200);
    });
});//opacity animation end

/////////////////////////////////////////////////////////
//      add hover animations end
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//      tooltip start
/////////////////////////////////////////////////////////
$(function(){
   $(document).ready(function(){
        var tip_parent = $(document).find(".tooltip_bt").prev();
        //if you want use tooltip, just add "tootip_bt" class to object
        tip_parent.hover(function() {
            $(this).next(".tooltip_bt").stop().fadeIn(300);
        }, function() {
            $(this).next(".tooltip_bt").stop().fadeOut(300);
        });
    });
});
/////////////////////////////////////////////////////////
//      toottip_end
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//      lubyAlert start
/////////////////////////////////////////////////////////   
$(window).on("load",function(){
    setTimeout(function(){
        $(".lubyAlert_bt").each(function(){
            var toggle_count = 0;
            $(this).on("click touchend", function (event){
                if(!dragging){
                    eventHandler(event, $(this));
                    toggle_count = showAlert($(this),toggle_count);
                }
                else if(dragging){
                    return;
                } 
            });//click end
        });//each end
    },1);//setTimeout end  
});//window load end
function showAlert(selector,arg){
    var thisData = selector.attr("data");
    var alertObject = $(document).find("#"+thisData+"Alert");
    switch(arg){
        case 0:
            switch(thisData){
                case "bookmark" :
                    selector.css("color","#ffbe54");
                    selector.find("i").css('color', '#ffbe54');
                    arg = 1;
                    console.log("this is star");
                break;
                case "like" :
                    selector.find("i").css('color', '#48cfad');
                    arg = 1;
                    console.log("this is heart");
                break;
                case "confirm" :
                    arg = arg;
                    $(".dark_overlay").fadeIn(200);
                    console.log("this is confirm");
                break;
                case "success" :
                    arg = 1;
                    console.log("this is success");
                break;
                default: return false; break;
            }
            alertObject.stop().fadeIn(700,function(event){ 
                if(alertObject.attr("id") != "confirmAlert"){
                    hideAlert();
                    console.log(arg);
                }
                else if(alertObject.attr("id") === "confirmAlert"){

                }
            });
            return arg;
        break;
        case 1:
            selector.css("color","#cccccc");
            selector.find("i").css('color', '#cccccc');
            arg = 0;
            console.log(arg);
            return arg;
        break;
        default: return false; break;
    }//switch end
}
function hideAlert(){
    setTimeout(function(){
        $(".lubyAlert").fadeOut(700,function(){
            return;
        });
    },500)
};
/////////////////////////////////////////////////////////
//      lubyAlert end
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//      lubySelectbox action start
/////////////////////////////////////////////////////////
/*
<div data="name" class="lubySelector"> //.....................................class: lubySelector
    <span class="global_icon"><i class="fa fa-usd"></i></span> // class: global_icon(It was used font-awesome)
    <span class="lubySelector_selected">All</span> //.............class: lubySelector_selected
    <span class="lubySelector_arrow"><i class="fa fa-caret-down"></i></span> //class: lubySelector_arrow
    <ul class="lubySelector_list"> //.............................class: lubySelector_list
        <li class="selected_li">All</li> //.......................class: selected_li
        <li>Free</li>
        <li>Free for personal</li>
        <li>Paid</li>
    </ul>
</div>
*/
$(function(){
    $(".lubySelector").each(function(){
        var toggle_count = 0;
        var option_list = [];
        $(this).find(".global_icon").addClass("hidden-mb-ib");
        $(this).find(".lubySelector_list li").each(function(){
            option_list.push($(this).text().replace(/ /gi, ''));
            //It will be push to array after removed all spaces  
        });
        $(this).after("<select class='original_box' name='" + $(this).attr('data') + "[]'>");
        for(i in option_list){
            $(this).next(".original_box").append("<option value="+option_list[i]+">"+option_list[i]+"</option>");
        };
        $(".original_box").hide();//original select box will be hide
        $(".original_box").change(function(){
            var lubySelectbox = $(this).prev(".lubySelector").find(".lubySelector_selected");
            var original_value = $(this).val();
            lubySelectbox.text(original_value.toString());
            $(this).hide();
            toggle_count = 0;    
        });
        $(this).on("click touchend",function (event){
            eventHandler(event, $(this));
            if(!dragging){
                switch(toggle_count){
                    case 0 :
                        if(windowWidth > 1024){
                            $(this).find($(".lubySelector_arrow")).children("i").attr("class","fa fa-caret-down");
                            $(this).find($(".lubySelector_list")).stop().fadeIn(300);
                            $(this).css("background","#333333");
                            $(this).find($(".lubySelector_arrow")).children("i").attr("class","fa fa-caret-up");
                        }
                        else{
                            $(this).next(".original_box").show().trigger("focus");
                        }
                        toggle_count = 1;
                    break;

                    case 1 :
                        if(windowWidth > 1024){
                            $(this).find($(".lubySelector_list")).stop().fadeOut(300);
                            $(this).css("background","#555555");
                            $(this).find($(".lubySelector_arrow")).children("i").attr("class","fa fa-caret-down");
                        }
                        else{
                            $(this).next(".original_box").hide().trigger("blur");
                        }
                        toggle_count = 0;
                    break;

                    default: return; break;
                };//switch end
                keyCheck(toggle_count,$(this).find($(".lubySelector_list")));
                return;
            }
            else if(dragging){
                return;
            }            
        });//click end
        $(this).find($(".lubySelector_list li")).on("click touchend",function (event){
            event = event || window.event
            var selected_v = $(event.target).text();
            var selected_option = $(event.target).text().replace(/ /gi, '');
            $(event.target).parent().siblings(".lubySelector_selected").text(selected_v);
            $(event.target).parents(".lubySelector").next(".original_box").val(selected_option);
            $(event.target).siblings("li").removeClass();
            $(event.target).addClass("selected_li");
        });
        hideAnywhere($(this))
    });//each end
});
function hideAnywhere(selector){
    selector.mouseleave(function(){
        $(document).click(function (event) {
            event = event || window.event//for IE
            if (!$(event.target).hasClass($(this).attr("class"))) {
                $(this).find($(".lubySelector_list")).stop().fadeOut(300);
                $(".lubySelector").css("background","#555555");
                $(this).find($(".lubySelector_arrow")).children("i").attr("class","fa fa-caret-down");
                toggle_count = 0;
                return true;
            }//if end
            else{
                return true;
            }//else end
        });//click end
    });//mouseleave end
}
function keyCheck(toggleCount,lubySelector){
    if(toggleCount == 1){
        $(document).on('keydown', function(event) {
            var keyCode = event.keyCode ? event.keyCode : event.which;
            if(keyCode==65){
                lubySelector.scrollTop(0);
            }
        });  
    }
    else{
        return;
    }
};
/////////////////////////////////////////////////////////
//      lubySelectbox action end
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//      mobile menu action start
/////////////////////////////////////////////////////////
$(window).on("load resize",function(){
    if((windowWidth <= 1024) && ($("#mb-menu_panel").length != 0)){
        $("#mb-menu_panel").height = window.screen.height;
        var mb_menu = $("#mb-menu");
        var mb_menu_toggle = 0;
        var distance = $("#mb-menu_panel").outerWidth();
        mb_menu.on("click touchend", function(){
            if(!dragging){
                eventHandler(event, $(this));
                remove_mb_menu();
                return;
            }
            else if(dragging){
                return;
            }
        });//click end
        $("#cancel_layer").on("click touchend",function(){
            remove_mb_menu();
            return;
        });
        function remove_mb_menu(){
            switch(mb_menu_toggle){
                case 0 : 
                    $("#wrapper").stop().animate({ left: distance.toString() }, 200);
                    $("#mb-menu_panel").stop().animate({ left: "0"}, 200);
                    $("#cancel_layer").css({
                        "width": window.screen.width.toString(),
                        "height": window.screen.height.toString(),
                        "background": "transparent",
                        "position": "absolute",
                        "top": "0",
                        "left": "0",
                        "z-index": "100000",
                        "cursor": "pointer"
                    });
                    $("#cancel_layer").show();
                    $("body").css({
                        "position":"fixed",
                        "height":window.screen.height.toString(),
                        "overflow":"hidden"
                    });
                    mb_menu_toggle = 1;
                    console.log(mb_menu_toggle);
                    return;
                break;
                case 1 :
                    $("#cancel_layer").hide();
                    $("#wrapper").stop().animate({ left: "0" }, 200);
                    $("#mb-menu_panel").stop().animate({ left: (distance*-1).toString()}, 200);
                    $("body").css({
                        "position":"relative",
                        "height":"auto",
                        "overflow":"auto"
                    });
                    $("body").css("overflow-x", "hidden");
                    mb_menu_toggle = 0;
                    console.log(mb_menu_toggle);
                    return;
                break;
                default: return; break;
            };//swtich end
        }//remove_function end
    }//if end
    else{
        return; 
    }
});
/////////////////////////////////////////////////////////
//      mobile menu action end
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//      mobile search action start
/////////////////////////////////////////////////////////
$(window).on("load resize",function(){
    if((windowWidth <= 1024) && ($("#mb-menu_panel").length != 0)){
        var searchBt = $("#mb-search"),
            searchInBt = $("#main_search_btn"),
            searchBox = $("#main_search_bar"),
            searchText = $("#main_search_text"),
            searchTextWidth = (windowWidth - searchInBt.outerWidth(true) - 25).toString(),
            darkOverlay = $(".dark_overlay"),
            mainHeader = $("#main_header"),
            icon1 = $("#mb-search .icon1"),
            icon2 = $("#mb-search .icon2"),
            toggle_count = 0;
        searchText.css("width",searchTextWidth+"px");
        searchBt.on("click touchend",function(){
            eventHandler(event, $(this));
            switch(toggle_count){
                case 0 :  
                    icon1.fadeOut(500);
                    icon2.fadeIn(500);
                    searchBox.stop().slideDown(300,function(){
                        searchBox.find("input").stop().fadeIn(500);
                    });
                    darkOverlay.css("z-index","10");
                    mainHeader.css("border-bottom", "0px solid #111");
                    toggle_count = 1;
                break;
                case 1 : 
                    
                    searchBox.find("input").stop().fadeOut(500,function(){
                        searchBox.stop().slideUp(300);
                        icon1.fadeIn(500);
                        icon2.fadeOut(500);
                    });
                    darkOverlay.css("z-index","50");
                    mainHeader.css("border-bottom", "1px solid #111");
                    toggle_count = 0;
                break;
                default: return; break;
            }
        });
    }
});
/////////////////////////////////////////////////////////
//      mobile search action end
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//      visible goToTheTop button start
/////////////////////////////////////////////////////////
$(window).on("load resize", function(){
    if((windowWidth < 1025) && ($("#gotop_bt").length != 0)){
        var goTopBt = $(document).find("#gotop_bt");
        $(document).on("touchmove scroll", function (event){
            eventHandler(event,$(this));
            if($(document).scrollTop() > 500){
                goTopBt.stop().show();
                return;
            }
            else{
                goTopBt.stop().hide();
                return;
            }
        });
        $("#gotop_bt").on("click touchend", function(event){
            eventHandler(event,$(this));
            $('html, body').animate({scrollTop : 0},500);
            return;
        });
    }
    else{
        return;
    }
})
/////////////////////////////////////////////////////////
//      visible goToTheTop button end
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//      share toggle button start
/////////////////////////////////////////////////////////
$(document).ready(function(){
    if($(".share_bt_wrap").length != 0){
        var toggle_count = 0;
        $(this).find(".share_bt").on("click touchend", function(event){
            if(!dragging){
                console.log(toggle_count);
                eventHandler(event, $(this));
                switch(toggle_count){
                    case 0 : 
                        $(".sharing_bt_box").fadeIn(200);
                        $(".share_list").on("click touchend", function(event){
                            eventHandler(event, $(this));
                            toggle_count = showAlert($(this),toggle_count);
                            $(this).parents(".sharing_bt_box").fadeOut(200);
                            toggle_count = 0;
                            return;
                        });
                        toggle_count = 1;
                    break;
                    case 1 :
                        $(this).next(".sharing_bt_box").fadeOut(200);
                        toggle_count = 0;
                    break;
                    default : return; break;
                }
            }
            else if(dragging){
                return;
            }   
        });
    }
});
/////////////////////////////////////////////////////////
//      share toggle button end
/////////////////////////////////////////////////////////