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
//      nav_guide sticky start
/////////////////////////////////////////////////////////
$(document).scroll(function (){
    if($(".nav_guide").length != 0){
        var nav_guide = $(".nav_guide");
        var sticky_start = $("#main_figure").height() + $("#navsel").height();
        var contents_y = nav_guide.height();
        if($("#navsel").length == 0){
            sticky_start -= $("#navsel").height();
        }else{
            sticky_start;
        }   
        if (($(document).scrollTop() > sticky_start) && (windowWidth >= 1025)){
            $("#main_header").css({"box-shadow": "0px 0px 0px 0px rgba(0,0,0,0.5)"});
            nav_guide.css({ "position": "fixed", "top": "50px", "z-index": "4", "box-shadow": "0px 3px 7px rgba(0,0,0,0.3)" });
            nav_guide.next().css({"top": contents_y});
            nav_guide.next().next().css({"top": contents_y});
            $("#floating_bt").css({"position" : "fixed", "top" : "100px"});
        }
        else {
            $("#main_header").css({"box-shadow": "0px 2px 4px 0px rgba(0,0,0,0.5)"});
            nav_guide.css({ "position": "relative", "top": "0px", "box-shadow": "0px 0px 0px rgba(0,0,0,0.3)" });
            nav_guide.next().css({"top": "0px"});
            nav_guide.next().next().css({"top": "0px"});
            $("#floating_bt").css({"position" : "absolute", "top" : "0px"});
        }  
    }
    else{
        return true;
    }  
});
/////////////////////////////////////////////////////////
//      nav_guide sticky end
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//      containers sticky start
/////////////////////////////////////////////////////////
$(document).ready(function(){  
    $(document).scroll(function () {
        var stickyStart = $("#main_header").height() + $("#navsel").height() + $(".nav_guide").height();
        if($("#navsel").length == 0){
                stickyStart -= $("#navsel").height();
        }else{
            stickyStart;
        }
        var scrollEnd = $(document).height() - $(window).height();
        var bannerPosition = $(".con_aside").height() - $("#navsel").height();

        if($(document).find(".con_aside") && ($(".con_aside").attr("id") != "editor_aside") && (windowWidth >= 1025)){ 
            
            if ($(document).scrollTop() >= stickyStart && $(document).scrollTop() < scrollEnd){
                $(".con_aside").css({ "position": "fixed", "top": "100px" });
                //console.log("sticky start");
            }
            else if($(document).scrollTop() == scrollEnd){
                //console.log("sticky bottom end");
            }
            else if($(document).scrollTop() < stickyStart){
                $(".con_aside").css({ "position": "absolute", "top": "0px" });
                $("#floating_bt").css({ "position": "absolute", "top": "0px"});
                //console.log("sticky top end");
            };
        }
        else{
            return true;
        };
    });
});
/////////////////////////////////////////////////////////
//      containers sticky end
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
            $(this).on("click touchend", function(){
                eventHandler(event, $(this));
                var thisId = $(this).attr("id");
                var alertObject = $(document).find("#"+thisId.toString()+"Alert");
                switch(toggle_count){
                    case 0:
                        switch(thisId){
                            case "bookmark_bt" :
                                $(this).css("color","#ffbe54");
                                $(this).find("i").css('color', '#ffbe54');
                                toggle_count = 1;
                                console.log("this is star");
                            break;
                            case "like_bt" :
                                $(this).find("i").css('color', '#ec6446');
                                toggle_count = 1;
                                console.log("this is heart");
                            break;
                            case "confirm_bt" :
                                toggle_count = toggle_count;
                                $(".dark_overlay").fadeIn(200);
                                console.log("this is confirm");
                            break;
                            default: return false; break;
                        }
                        alertObject.stop().fadeIn(700,function(event){ 
                            if(alertObject.attr("id") != "confirm_btAlert"){
                                hideAlert();
                                console.log(toggle_count);
                                return true; 
                            }
                            else if(alertObject.attr("id") === "confirm_btAlert"){
                                return true;
                            }
                        });
                    break;
                    case 1:
                        $(this).css("color","#cccccc");
                        $(this).find("i").css('color', '#cccccc');
                        toggle_count = 0;
                        console.log(toggle_count);
                        return true;
                    break;
                    default: return false; break;
                }//switch end
            });//click end
        });//each end
    },1);//setTimeout end  
});//window load end
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
<div class="lubySelector"> //.....................................class: lubySelector
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
        var option_list = [];//make option list array
        $(this).find(".global_icon").addClass("hidden-mb-ib");
        $(this).find(".lubySelector_list li").each(function(){//make option list array
            option_list.push($(this).text().replace(/ /gi, ''));
            //It will be push to array after removed all spaces  
        });
        $(this).after("<select class='original_box'>");//make select box after lubySelector  
        for(var i = 0; i < option_list.length; i++){//make options in select box
            $(this).next(".original_box").append("<option value="+option_list[i]+">"+option_list[i]+"</option>");
            //i = Array's index
        };
        $(".original_box").hide();//original select box will be hide
        $(".original_box").change(function(){
            var lubySelectbox = $(this).prev(".lubySelector").find(".lubySelector_selected");
            var original_value = $(this).val();
            lubySelectbox.text(original_value.toString());
            $(this).prev(".lubySelector").find($(".lubySelector_list")).stop().fadeOut(300);
            $(this).prev(".lubySelector").css("background","#555555");
            $(this).prev(".lubySelector").find($(".lubySelector_arrow")).children("i").attr("class","fa fa-caret-down");
            $(this).hide();
            toggle_count = 0;    
        });
        $(this).on("click touchend",function (e){
            eventHandler(event, $(this));
            if(!dragging){
                switch(toggle_count){
                    case 0 :
                        if(windowWidth > 1024){
                            $(this).find($(".lubySelector_list")).stop().fadeIn(300);
                            $(this).css("background","#333333");
                            $(this).find($(".lubySelector_arrow")).children("i").attr("class","fa fa-caret-up");
                        }
                        else{
                            $(this).next(".original_box").show().trigger("focus");
                        }
                        toggle_count = 1;
                        console.log(toggle_count);
                        return true;
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
                        console.log(toggle_count);
                        return true;
                    break;

                    default: return false; break;
                };//switch end
            }
            else if(dragging){
                return;
            }            
        });//click end
        $(this).mouseleave(function(){
            $(document).click(function (event) {
                event = event || window.event//for IE
                if (!$(event.target).hasClass("lubySelector")) {
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
        $(this).find($(".lubySelector_list li")).on("click touchend",function (event){
            event = event || window.event
            var selected_v = $(event.target).text();
            var selected_option = $(event.target).text().replace(/ /gi, '');
            $(event.target).parent().siblings(".lubySelector_selected").text(selected_v);
            $(event.target).parents(".lubySelector").next(".original_box").val(selected_option);
            $(event.target).siblings("li").removeClass();
            $(event.target).addClass("selected_li");
            console.log("hidden_selector value is " + "'" + $(event.target).parents(".lubySelector").next(".original_box").val() + "'");
        });
    });//each end
});
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