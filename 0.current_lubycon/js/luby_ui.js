//This file is only one separate classification codes associated with the UI of the Lubycon.
//1. sticky
//2. hover action
//3. tooltip box action
//4. alert action
//5. selector

/////////////////////////////////////////////////////////
//      nav_guide sticky start
/////////////////////////////////////////////////////////
$(document).scroll(function (){
    if($("#nav_guide").length != 0){
        var nav_guide = $("#nav_guide");
        var sticky_start = $("#main_figure").height() + $("#navsel").height();
        var contents_y = nav_guide.height();
        if($("#navsel").length == 0){
            sticky_start -= $("#navsel").height();
        }else{
            sticky_start;
        }   
        if (($(document).scrollTop() > sticky_start) && ($(window).width() >= 1025)){
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
        var stickyStart = $("#main_header").height() + $("#navsel").height() + $("#nav_guide").height();
        if($("#navsel").length == 0){
                stickyStart -= $("#navsel").height();
        }else{
            stickyStart;
        }
        var scrollEnd = $(document).height() - $(window).height();
        var bannerPosition = $(".con_aside").height() - $("#navsel").height();

        if($(document).find(".con_aside") && ($(".con_aside").attr("id") != "editor_aside") && ($(window).width() >= 1025)){ 
            
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
        $(this).stop().animate({ opacity: 0.5 },200);
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
//      alert event start
/////////////////////////////////////////////////////////
$(function (){
    $(document).on("click",".bookmark_bt,#bookmark_inner_bt",function(){
        var window_width = $(window).width();
        if($(this).css("color") != "rgb(193, 193, 193)"){
            console.log("success");
            $("#bookmark_alert").css('display','inline-block');
            $("#bookmark_alert").attr("class","luby_alert fadeIn animated");
            $("#star_icon").attr("class","fa fa-star bounce animated");
            setTimeout("hideAlert()",1500);
            return true; 
        }
        else{
            return false;
        };
    });//bookmark alert   
});
//like alert start
$(function(){
    $(document).on("click",".like_bt,.like_bt_active",function(){
        if($(this).hasClass("like_bt")){
            console.log("like!");
            $(this).attr("class","like_bt_active");
            $("#like_alert").css('display','inline-block');
            $("#like_alert").attr("class","luby_alert fadeIn animated");
            setTimeout("hideAlert2()",1500);
        }
        else if($(this).hasClass("like_bt_active")){
            console.log("unlike");
            $(this).attr("class","like_bt");
        }
        else{
            return false;
        };//if end
    });//on end
});//function end
//like alert end
function hideAlert(){
    $("#bookmark_alert").attr("class","luby_alert fadeOut animated");
    $("#star_icon").attr("class","fa fa-star");
    $("#bookmark_alert").stop().fadeOut(1000);
};
function hideAlert2(){
    $("#like_alert").attr("class","luby_alert fadeOut animated");
    $("#like_alert").stop().fadeOut(1000);
};
/////////////////////////////////////////////////////////
//      alert event end
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//      contents card bookmark toggle start
/////////////////////////////////////////////////////////
$(function(){
    $(".bookmark_bt,#bookmark_inner_bt").each(function(){
        var bookmark_count = 0;
        $(this).click(function(){
            switch(bookmark_count){
                case 0:
                $(this).css('color', '#ffbe54');
                bookmark_count = 1;
                console.log(bookmark_count);
                break;

            case 1:
                $(this).css('color', '#c1c1c1');
                bookmark_count = 0;
                console.log(bookmark_count);
                break;
            }//switch end
        });//click end
    });//each end
});
/////////////////////////////////////////////////////////
//      contents card bookmark toggle end
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//      lubySelectbox action start
/////////////////////////////////////////////////////////
$(function(){
    $(".lubySelector").each(function(){
        var toggle_count = 0;
       
        $(this).click(function(){
            console.log(toggle_count);
            switch(toggle_count){
                case 0 :
                    $(this).find($(".lubySelector_list")).stop().fadeIn(300);
                    $(this).css("background","#333333");
                    $(this).find($(".lubySelector_arrow")).children("i").attr("class","fa fa-caret-up");
                    toggle_count = 1;
                    return false;
                break;

                case 1 :
                    $(this).find($(".lubySelector_list")).stop().fadeOut(300);
                    $(this).css("background","#555555");
                    $(this).find($(".lubySelector_arrow")).children("i").attr("class","fa fa-caret-down");
                    toggle_count = 0;
                    return false;
                break;
            };//switch end
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
        $(this).find($(".lubySelector_list li")).click(function (event){
            event = event || window.event
            var selected_v = $(event.target).text();
            $(event.target).parent().siblings(".lubySelector_selected").text(selected_v);
            $(event.target).siblings("li").removeClass();
            $(event.target).addClass("selected_li");
        });
    });//each end
});

/////////////////////////////////////////////////////////
//      lubySelectbox action end
/////////////////////////////////////////////////////////