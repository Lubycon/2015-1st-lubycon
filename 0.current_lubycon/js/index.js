/*----------------------------common js----------------------------*/
/////////////////////////////////////////////////////////
//      debuging tool start
/////////////////////////////////////////////////////////
/*
$(document).ready(function(){
    $(function(){//property check
        $(window).click(function(e){
            console.log("------------------------------------------------------------------------")
            console.log("document_scrollTop : " + $(document).scrollTop());
            console.log("document.height : " + $(document).height());
            console.log("window.height : " + $(window).height());
            console.log("class : " + $(event.target).attr('class'));
            console.log("id : " + event.target.id);
        });
    });
});*/
/*$(document).on('keypress', function(e) {
    if (e.which == 13) {// 13 == enter key@ascii
        alert("you pressed enter key");
    };
});*/
/////////////////////////////////////////////////////////
//      debuging tool end
/////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////
//      ready to body fadein event start
/////////////////////////////////////////////////////////
/*$(function () {
    $(window).load(function (){
        $('#bodyer').fadeIn(500); //don't add stop function
    });
});*/
/////////////////////////////////////////////////////////
//      ready to body fadein event end
/////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////
//      gloval navigation button hover event start
//      get parameter change selected nav color
/////////////////////////////////////////////////////////

$(function () //gnb hober event
{
    $('.bigsub').hover(function () {
        $(this).children("ul").stop().fadeIn(300);
    }, function () {
        $(this).children("ul").stop().fadeOut(300);
    });
});

function getUrlParameter(sParam) //get parameter

{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

var first_param = getUrlParameter('1');
var seceond_param = getUrlParameter('2');
var third_param = getUrlParameter('3');
var four_param = getUrlParameter('4');

$(function () //selcted change
{
    $('#lnb_nav ul').children('#' + third_param).addClass('selected_nav');
    $(".selected_nav").children("a").click(function(){
        return false;//disabled anchor tag
    });
});

       
/////////////////////////////////////////////////////////
//      gloval navigation button hover event end
/////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////
//      add hover animations start
/////////////////////////////////////////////////////////

$(function(){   
    $('.animate_scale').hover(function(e){
        console.log($(this).width());
        console.log($(this).height());
        $(this).animate({ width: "+=3", height: "+=3", right: "-=1.5", top: "-=1.5" }, 150);
    }, function(){
         $(this).animate({ width: "-=3", height: "-=3", right: "+=1.5", top: "+=1.5" }, 150);
    });
});//scale animation end
$(function(){
    $(".animate_opacity").hover(function(e){
        $(this).animate({ opacity: 0.5 },200);
    },function(){
        $(this).animate({ opacity: 1 },200);
    });
});//opacity animation end

//tooltip start
$(function(){
   $(document).ready(function(){
        var tip_parent = $(document).find(".tooltip_bt").prev();

        tip_parent.hover(function() {
            $(this).next(".tooltip_bt").stop().fadeIn(300);
        }, function() {
            $(this).next(".tooltip_bt").stop().fadeOut(300);
        });
    });
});
//tooltip end

/////////////////////////////////////////////////////////
//      add hover animations end
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//      change language start
/////////////////////////////////////////////////////////

$(function () //language change bt slide and change
{
	$('.lang_selected').mouseenter(function(){
		$('.lang_list').stop().slideDown(300);
	});
	$('#lang_select_bt').mouseleave(function(){
		$('.lang_list').stop().slideUp(300);
	});
	$('.lang_list li').click(function(){
		$('.lang_selected').text($(this).text());
		$('.lang_list').stop().slideUp(300);
	});
	$('.lang_list li').hover(function(){
        $(this).css('color','#fff')
    },
    function(){
        $(this).css('color','#929292')
    });
});

/////////////////////////////////////////////////////////
//      change language end
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//      before sign in child event start
/////////////////////////////////////////////////////////

$(function () //sign in toggle event
{
    $('#sign_out').click(function () //logout
    {
        $("#after_signin").hide();
        $("#signin_bt").show();
        $("#addcontent_bt").hide();
    });
});

/////////////////////////////////////////////////////////
//      before sign in child event end
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//      after signin child hover show and hide start
/////////////////////////////////////////////////////////

$(function() //after signin child hover show and hide
{
    var toggle_count = 0;
	$('#after_signin').click(function (){
        switch(toggle_count){
            case 0 : 
                $('#after_signin > ul').stop().fadeIn(200);
                toggle_count = 1;
            break;
            case 1 : 
                $('#after_signin > ul').stop().fadeOut(200);
                toggle_count = 0;
            break;
            default: 
                return false;
            break;
        } 
	});

	$('#sign_out').click(function () // sign out
	{
	    $("#after_signin").hide();
	    $("#signin_bt").show();
	    $("#addcontent_bt").hide();
	});
});

/////////////////////////////////////////////////////////
//      after signin child hover show and hide end
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//      add contents bt popup event start
/////////////////////////////////////////////////////////

$(function () { //add contents button start
    $('#addcontent_bt').hover(function () {
        $(this).stop().animate({ opacity: 0.9 }, 200);
    }, function () {
        $(this).stop().animate({ opacity: 1 }, 200);
    });

    $('#addcontent_bt').click(function () {
        $('.dark_overlay').stop().fadeIn(100);
        $('.editor_popup').css("display","block");
        $('.editor_popup').attr("class","editor_popup fadeInDown animated");
    });

    $('.editor_popup > ul > li').hover(function () {
        $(this).children('a').children('i').css({ "color": "#fff", "background": "#48cfad" })
    }, function () {
        $(this).children('a').children('i').css({ "color": "#383838", "background": "#fff" })
    });

    $('.editor_popup_cancel , .dark_overlay , .cancel_bt').click(function () {
        $('.dark_overlay').stop().fadeOut(200);
        $('.editor_popup').stop().fadeOut(200);
        $('#embed_popup').stop().fadeOut(150);
    });
});

/////////////////////////////////////////////////////////
//      add contents bt popup event end
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//      main search bar input reset start
/////////////////////////////////////////////////////////

$(function () { //search box click value reset start
    var search_box = $('#main_search_text');
    var search_box2 = $('#sub_search_text');
    var search_bt = $('#main_search_btn');
    var search_bt2 = $('#sub_search_btn');

    search_box.on('keypress', function(e) {
        console.log("keypress_true");
        if(e.which == 13) {// 13 == enter key@ascii
            console.log("if true");
            search_bt.click();
        };//if end
    });//keypress end

    search_bt.click(function(){
        console.log("clicked");
    });

    search_box.focus(function(){
        if (search_box.val() == 'Enter the Keyword') {
            search_box.val('');
        }
    });
    search_box.blur(function(){
        if (search_box.val() == '') {
            search_box.val('Enter the Keyword');
        }
    });

    search_box2.on('keypress', function(e) {
        console.log("keypress_true");
        if(e.which == 13) {// 13 == enter key@ascii
            console.log("if true");
            search_bt.click();
        };//if end
    });//keypress end

    search_bt2.click(function(){
        console.log("clicked");
    });

    search_box2.focus(function(){
        if(search_box2.val()=='Enter the Keyword'){
            search_box2.val('')
            $("#sub_search_bar").stop().animate({width:350},200);
        }
    });
    search_box2.blur(function(){
        if(search_box2.val()==''){
            search_box2.val('Enter the Keyword');
            $("#sub_search_bar").stop().animate({width:295},200);
        }
    });
});//search box click value reset end

/////////////////////////////////////////////////////////
//      main search bar input reset end
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//      create account checkbox event start
/////////////////////////////////////////////////////////
/*$(function(){
     $(document).on("click", function(e) {
        if($(".check_box").is(":checked") == true){

        }else{

        };
    });
});*/

/////////////////////////////////////////////////////////
//      create account checkbox event end
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//      main figure animate end
/////////////////////////////////////////////////////////

//main figure button animation start
$(function(){
    $('#figure_signin').hover(
        function (){
            $(this).stop().animate({opacity:0.5, width:160},200);
        },
        function (){
            $(this).stop().animate({opacity:1, width:150},200);
        }
    );
});
/////////////////////////////////////////////////////////
//      main figure animate end
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//      containers sticky start
/////////////////////////////////////////////////////////

$(document).scroll(function () {
    var sticky_start = $("#main_header").height() + $("#main_figure").height();
    if($("#navsel").length == 0){
            sticky_start -= 50;
    }else{
        sticky_start;
    }
    var scrollend = $("#footer").offset().top - $(window).height();
    var banner_position = 
    $("#footer").offset().top 
    - $(".con_aside").height() 
    - $("#navsel").height() 
    - $("#main_figure").height();

    if($(document).find(".con_aside") && $(".con_aside").attr("id") != "editor_aside"){ 
        if ($(document).scrollTop() > sticky_start && $(document).scrollTop() < scrollend){
            $(".con_aside").css({ "position": "fixed", "top": "100px" });
        }
        else if($(document).scrollTop() > scrollend){
            $(".con_aside").css({ "position": "absolute", "top": banner_position + "px" });
            $(".con_aside").css({ "height" : $(window).height() + "px"});
        }
        else {
            $(".con_aside").css({ "position": "absolute", "top": "0px" });
            $("#floating_bt").css({ "position": "absolute", "top": "100px"});
        };
    }
    else{
        return true;
    };
});
/////////////////////////////////////////////////////////
//      containers sticky end
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//      main figure sticky start
/////////////////////////////////////////////////////////
$(function(){

});
/////////////////////////////////////////////////////////
//      main figure sticky end
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//      nav_guide sticky start
/////////////////////////////////////////////////////////
$(document).scroll(function (){
    if($("#nav_guide").length != 0){
        var nav_guide = $("#nav_guide");
        var sticky_start = $("#main_header").height() + $("#main_figure").height();
        var contents_y = nav_guide.height();
        if($("#navsel").length == 0){
            sticky_start -= 50;
        }else{
            sticky_start;
        }

        
        if ($(document).scrollTop() > sticky_start){
            $("#main_header").css({"box-shadow": "0px 0px 0px 0px rgba(0,0,0,0.5)"});
            nav_guide.css({ "position": "fixed", "top": "50px", "z-index": "2", "box-shadow": "0px 3px 7px rgba(0,0,0,0.3)" });
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


/*----------------------------common js----------------------------*/

/*----------------------------index page slider----------------------------*/


/////////////////////////////////////////////////////////
//      index page slide switch start
/////////////////////////////////////////////////////////

$(function()  //slider change 
{
	$('#artwork_bt').click(function()
	{
		$('#slider1').stop().fadeIn(150);
		$('#slider2').hide();
		$('#slider3').hide();
		$('.down_triangle').stop().animate({ left: 87 }, 100);
	});
	$('#vector_bt').click(function()
	{
		$('#slider1').hide();
		$('#slider2').stop().fadeIn(150);
		$('#slider3').hide();
		$('.down_triangle').stop().animate({ left: 276 }, 100);
	});
	$('#3d_bt').click(function()
	{
		$('#slider1').hide();
		$('#slider2').hide();
		$('#slider3').stop().fadeIn(150);
		$('.down_triangle').stop().animate({ left: 469 }, 100);
	})
	$('.slider_item ul li').hover(function ()
	{
	    $(this).stop().animate({opacity:0.3},100);
	}, function ()
	{
	    $(this).stop().animate({ opacity: 1 },100);
	});
});
/////////////////////////////////////////////////////////
//      index page slide switch end
/////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////
//      index page triple bt event start
/////////////////////////////////////////////////////////
$(function()	// triple bt on event
{
	$('.la_bt').on(
	{
		mouseenter : function()
		{
			$('.la_bt').removeClass('over');
			$(this).addClass('over');
		},
		mouseleave: function () {
		    $('.la_bt').removeClass('over');
		    $(this).addClass('out');
		},
		click: function ()
		{
		    $('.la_bt').removeClass('clicked');
		    $(this).addClass('clicked');
		}
	});
});
/////////////////////////////////////////////////////////
//      index page triple bt event end
/////////////////////////////////////////////////////////
/*----------------------------index page slider end----------------------------*/
/*----------------------------contents page----------------------------*/


/////////////////////////////////////////////////////////
//      contents card hover overlay view start
/////////////////////////////////////////////////////////
$(function ()
{
    $(document).on({
        mouseenter: function() {
            $(this).children('.contents_overlay').stop().fadeIn(300);
        },
        mouseleave: function() {
            $(this).children('.contents_overlay').stop().fadeOut(300)
        }
    }, '.contents_card');
});
/////////////////////////////////////////////////////////
//      contents card hover overlay view end
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//      contents view con_left hovering start
/////////////////////////////////////////////////////////
$(function(){
    if($("#contents_main").length != 0){
        floating_bt_action();
    }
    else{
        return;
    }
});
function floating_bt_action(){
    $("#contents_main").hover(function(){
        $("#floating_bt").stop().fadeIn(200);
        $(document).scroll(function(){
            if($("#floating_bt").offset().top > $("#comment_box").offset().top - 50){
                $("#floating_bt").stop().fadeOut(200);
            }
            else{
                $("#floating_bt").stop().fadeIn(200);
                return;
            }
        });
    },function(){
        $("#floating_bt").stop().fadeOut(200);
        $(document).scroll(function(){
            $("#floating_bt").stop().fadeOut(200);
            return;
        });
    });
}
/////////////////////////////////////////////////////////
//      contents view con_left hovering end
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//      comment write box auto height start
/////////////////////////////////////////////////////////
function Expander() {
    this.start = function () {
        $("#comment_text").keydown(function(event) {
            this.style.height = 0;
            var newHeight = this.scrollHeight + 5;
            
            if( this.scrollHeight >= this.clientHeight ){
                newHeight += 5;
                this.style.height= newHeight + 'px';
            }//if end
        });//keydown end
    }//function end
}//expander function end

$(function() {
    window.app = new Expander();
    window.app.start();
});
/////////////////////////////////////////////////////////
//      comment write box auto height end
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
//      contents view file_info toggle start
/////////////////////////////////////////////////////////


$(function () {
    var toggle_count = 0;
    $(document).on('click', '#info_header', function ()
    {
        switch (toggle_count) {
            case 0:
                file_info_slidedown();
                toggle_count = 1;
                break;

            case 1:
                file_info_slideup();
                toggle_count = 0;
                break;
        };
    });
});

function file_info_slidedown() {
    $("#files").stop().slideDown(300);
    $("#info_toggle").attr('class', 'fa fa-angle-up');
    toggle_count = 1;
};
function file_info_slideup() {
    $("#files").stop().slideUp(300);
    $("#info_toggle").attr('class', 'fa fa-angle-down');
    toggle_count = 0;
};

/////////////////////////////////////////////////////////
//      contents view file_info toggle end
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//      alert event start
/////////////////////////////////////////////////////////
$(function (){
    $(document).on("click",".bookmark_bt,#bookmark_inner_bt",function(){
        if($(this).css("color") != "rgb(193, 193, 193)"){
            console.log("success");
            $("#bookmark_alert").css('display','inline-block');
            $("#bookmark_alert").attr("class","luby_alert fadeIn animated");
            $("#star_icon").attr("class","fa fa-star bounce animated");
            setTimeout("hideAlert()",1500);
            return false; 
        }
        else{
            return true;
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
            return true;
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
/*----------------------------contents page----------------------------*/


/*----------------------------start personal page----------------------------*/

/////////////////////////////////////////////////////////
//      personal page subnav hover and ajax
/////////////////////////////////////////////////////////
$(function () {
    $(".contents_bt").each(function(){
        var toggle_count = 0;
       
        $(this).click(function(){
            console.log(toggle_count);
            switch(toggle_count){
                case 0 :
                    $(this).find($(".subnav_list")).stop().fadeIn(300);
                    $(this).css("background","#333333");
                    $(this).find($(".subnav_arrow")).children("i").attr("class","fa fa-caret-up");
                    toggle_count = 1;
                    return false;
                break;

                case 1 :
                    $(this).find($(".subnav_list")).stop().fadeOut(300);
                    $(this).css("background","#555555");
                    $(this).find($(".subnav_arrow")).children("i").attr("class","fa fa-caret-down");
                    toggle_count = 0;
                    return false;
                break;
            };//switch end
        });//click end
        //-------------------------------selectbox fadeOut event-----------------------------//
        $(this).mouseleave(function(){
            $(document).click(function (event) {
                event = event || window.event//for IE
                if (!$(event.target).hasClass("contents_bt")) {
                    $(this).find($(".subnav_list")).stop().fadeOut(300);
                    $(".contents_bt").css("background","#555555");
                    $(this).find($(".subnav_arrow")).children("i").attr("class","fa fa-caret-down");
                    toggle_count = 0;
                    return true;
                }//if end
                else{
                    return true;
                }//else end
            });//click end
        });//mouseleave end
        //-------------------------------selectbox fadeOut event-----------------------------//
    });//each end


    $('document').ready(function () {
        if ($('.personal').attr('class') == 'personal con_main') {
            var id = four_param;
            $.ajax({
                type: "POST",
                url: "php/ajax/subnav_check.php", //이페이지에서 중복체크를 한다
                data: 'id='+id,//test.asp에 id 값을 보낸다
                cache: false,
                success: function (data) {
                    //$('#bodyer').hide().append(data).fadeIn(300); //해당 내용을 보여준다
                    $('#contents_box').html('');
                    $('#contents_box').append(data);
                    $(".basic_filter").selectOrDie
                    ({
                        customClass: "custom",
                        customID: "custom",
                        size: 5
                    });
                }
            });
        }//if end
    });

    $("#subnav li").click(function (){
        if(!$(this).hasClass("selected_subnav")){
            $("#subnav li").removeClass("selected_subnav");
            $(this).addClass("selected_subnav");
        }else{
            return;
        }//if,else end
        
        var id = $(this).attr('id');
        console.log(id);

        $.ajax({
            type: "POST",
            url: "php/ajax/subnav_check.php", //이페이지에서 중복체크를 한다
            data: "id=" + id,//test.asp에 id 값을 보낸다
            cache: false,
            success: function (data) {
                //$('#bodyer').hide().append(data).fadeIn(300); //해당 내용을 보여준다
                $('#contents_box').html('');
                $('#contents_box').append(data);
                $(".basic_filter").selectOrDie
                ({
                    customClass: "custom",
                    customID: "custom",
                    size: 5
                });
            }
        });
    });
});

/////////////////////////////////////////////////////////
//      personal page subnav hover and ajax
/////////////////////////////////////////////////////////

/*----------------------------personal page----------------------------*/

/*----------------------------about us----------------------------*/
/////////////////////////////////////////////////////////
//      about us animation event start
/////////////////////////////////////////////////////////
$(window).load(function(){
    $("#descript_lubycon").addClass("fadeIn animated");
    
    $(function(){
        $(document).scroll(function () { //account setting move banner
            if($(window).scrollTop()>=360){
               callIcon1();
               setTimeout("callIcon2()",250);
               setTimeout("callIcon3()",500);
            }//if end
            if($(window).scrollTop()>=1156){
                /////////animation
                callTeam1();
                setTimeout("callTeam2()",150);
                setTimeout("callTeam3()",300);
                setTimeout("callTeam4()",450);
                setTimeout("callTeam5()",600);
            }
            if($(window).scrollTop()>=1993){
                callContact();
            }
        });    
    });
});
///////////animation for Icon methods start
function callIcon1(){
    $("#icon1").addClass("fadeIn animated").stop().animate({opacity:100},200);
};
function callIcon2(){
    $("#icon2").addClass("fadeIn animated").stop().animate({opacity:100},200);
};
function callIcon3(){
    $("#icon3").addClass("fadeIn animated").stop().animate({opacity:100},200);
};
///////////animation for Icon methods end
///////////animation for Employees methods start
function callTeam1(){
    $("#ceo").addClass("fadeIn animated").stop().animate({opacity:100},200);
};
function callTeam2(){
    $("#dart").addClass("fadeIn animated").stop().animate({opacity:100},200);
}
function callTeam3(){
    $("#ssaru").addClass("fadeIn animated").stop().animate({opacity:100},200);
}
function callTeam4(){
    $("#simon").addClass("fadeIn animated").stop().animate({opacity:100},200);
}
function callTeam5(){
    $("#zepot").addClass("fadeIn animated").stop().animate({opacity:100},200);
}
///////////animation for Employees methods end
///////////animation for Contact Us start
function callContact(){
    $("#contact_body").addClass("fadeIn animated").stop().animate({opacity:100},200);
}
///////////animation for Contact Us end
/////////////////////////////////////////////////////////
//      about us animation event end
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//      about us hover event start
/////////////////////////////////////////////////////////
$(function(){
    $('#mailbtn').hover(
        function (){
            $(this).animate({opacity:0.7},200);
        },
        function (){
            $(this).animate({opacity:1},200);
        }
    );
});

$(function(){
    $('#mailadress').hover(
        function (){
            $(this).animate({opacity:0.5},200);
        },
        function (){
            $(this).animate({opacity:1},200);
        }
    );
});
/////////////////////////////////////////////////////////
//      about us hover event end
/////////////////////////////////////////////////////////


/************************************about us**************************************/

/*----------------------------waiting for resisting start----------------------------*/

/////////////////////////////////////////////////////////
//      waiting for resisting animate
/////////////////////////////////////////////////////////
$(function(){
    $("#thanks").animate({opacity:1},500);
    $("#thanks").queue(function(){
        $("#thanks2").animate({opacity:1},500);//
        $("#thanks2").queue(function(){
            $("#circle").animate({opacity:1},800); 
        });
    }); 
});

$(function(){
    $('#circle').hover(
        function (){
            $(this).stop().animate({opacity:0.7},200);
            $('#gotomain').stop().animate({opacity:1},500);
        },
        function (){
            stop();
            $(this).stop().animate({opacity:1},200);
            $('#gotomain').stop().animate({opacity:0},500);
        }
    );
});
/////////////////////////////////////////////////////////
//      waiting for resisting animate
/////////////////////////////////////////////////////////

/*----------------------------waiting for resisting end----------------------------*/

/***********************************index_2 canvas start****************************************/
/*
=======
/***********************************designer of the month canvas start****************************************/
$(function () {
    var pb = document.getElementById('photo_body');
    if (pb) {
        var pbdraw = pb.getContext("2d");

        pbdraw.beginPath();
        pbdraw.moveTo(140, 0);
        pbdraw.lineTo(0, 88);
        pbdraw.lineTo(0, 246);
        pbdraw.lineTo(140, 325);
        pbdraw.lineTo(280, 246);
        pbdraw.lineTo(280, 88);
        pbdraw.closePath();

        pbdraw.fillStyle = '#464646';
        pbdraw.fill();
    }
});

/***********************************designer of the month canvas end****************************************/

/*----------------------------waiting for resisting end----------------------------*/

/*----------------------------followers start--------------------------*/
$(function(){
    var toggle_count=0;//from DB
    $(document).on('click','.follow_card_bt', function(){
        switch(toggle_count){
            case 0:
                $(this).css("background","#333");
                $(this).children().attr("class","fa fa-user-times");
                toggle_count=1;
                console.log(toggle_count);
            break;

            case 1:
                $(this).css("background","#48cfad");
                $(this).children().attr("class","fa fa-user-plus");
                toggle_count=0;
                console.log(toggle_count);
            break;
        };
    });
});
/*----------------------------followers end----------------------------*/
/*----------------------------pager interaction start--------------------------*/
$(function(){
    var page_li = $(".page_list li");

    $(".ten_page").hover(function(){
        $(this).stop().animate({opacity:0.6},300);
    },function(){
        $(this).stop().animate({opacity:1},300);
    });
    
    $(".one_page").hover(function(){
        $(this).stop().animate({opacity:0.6},300);
    },function(){
        $(this).stop().animate({opacity:1},300);
    });


    page_li.hover(function(){
        $(this).stop().animate({opacity:0.6},300);
    },function(){
        $(this).stop().animate({opacity:1},300);
    })
    
    page_li.click(function(){
        page_li.removeClass();
        $(this).addClass("selected_pager");
    })

});
/*----------------------------pager interaction end--------------------------*/
/*--------------------my info setting in artist_page toggle start------------*/
$(function(){
    if($("#myinfo_setting").length != 0){
        var my_toggle_count = 0;
        $("#myinfo_setting").click(function(){
            switch(my_toggle_count){
                case 0:
                $("#myinfo_menu_list").fadeIn(200);
                my_toggle_count = 1;
                //console.log(my_toggle_count);
                break;
            case 1:
                $("#myinfo_menu_list").fadeOut(200);
                my_toggle_count = 0;
                //console.log(my_toggle_count);
                break;
            }//switch end
        });//click end
        $("#myinfo_setting").mouseleave(function(){
            $(document).click(function (event) {
                event = event || window.event//for IE
                if ($(event.target).attr("id") != "myinfo_setting") {
                    //console.log($(event.target).attr("id"));
                    $(this).find($("#myinfo_menu_list")).stop().fadeOut(200);
                    my_toggle_count = 0;
                    //console.log(my_toggle_count);
                    return;
                }//if end
                else{
                    return;
                }//else end
            });//click end
        });//mouseleave end
    };//if end
});
/*--------------------my info setting in artist_page toggle end----------------------*/
/*----------------------------artist card menu toggle start--------------------------*/
$(function(){
    if($(".artists_card").length != 0){
        $(".artist_menu").each(function(){
            var toggle_count = 0;
            $(this).click(function (event){
                event = event || window.event//for IE
                switch(toggle_count){
                    case 0:
                    $(this).children(".artist_menu_list").stop().fadeIn(200);
                    toggle_count = 1;
                    //console.log(toggle_count);
                    break;
                case 1:
                    $(this).children(".artist_menu_list").stop().fadeOut(200);
                    toggle_count = 0;
                    //console.log(toggle_count);
                    break;
                }//switch end
            });//click end
            $(this).mouseleave(function(){
                $(document).click(function (event) {
                    event = event || window.event//for IE
                    if (!$(event.target).hasClass("artist_menu_icon")) {
                        //console.log($(event.target).attr("class"));
                        $(this).find($(".artist_menu_list")).stop().fadeOut(200);
                        toggle_count = 0;
                        //console.log(toggle_count);
                        return;
                    }//if end
                    else{
                        return;
                    }//else end
                });//click end
            });//mouseleave end
        });//each end
    };//if end
});

/*----------------------------artist card menu toggle end--------------------------*/
/*-----------------------------footer sticky start----------------------------------*/
/*$(window).scroll(function() {
    if ($(window).scrollTop() <= $(document).height() - $(window).height()){//footer height 180px
        $("#footer").attr("class","relative_foot");
    }
    else{
        $("#footer").attr("class","fixed_foot fadeIn animated");
        $("#footer").css("top","50px");         
    };
});*/
/*-----------------------------footer sticky end----------------------------------*/