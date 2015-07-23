$(function ()
{
    $(window).load(function ()
    {
        $('#bodyer').fadeIn('200');
    });
});

$(function ()
{
    $('#signin_bt').click(function () {
        $('#login_box').fadeIn(150);
    });
    $('#login_box').blur(function () {
        alert('1');
    });
    /*
    $('body').click(function () {
        $('#login_box').fadeOut(150);
    });
   
    $('body').not('#login_box').click(function () {
        alert('1');
    });
    */
});

$(function ()
{
	$('.lang_selected').mouseenter(function()
	{
		$('.lang_list').stop().slideDown(300);
	});
	$('#lang_select_bt').mouseleave(function()
	{
		$('.lang_list').stop().slideUp(300);
	});
	$('.lang_list li').click(function()
	{
		$('.lang_selected').text($(this).text());
		$('.lang_list').stop().slideUp(300);
	});
	$('.lang_list li').hover(function()
    {
        $(this).css('color','#fff')
    },
    function()
    {
        $(this).css('color','#929292')
    });
});

$(function()
{
	$('.bigsub').hover(function()
	{
		$(this).children().stop().fadeIn(300);
	}, function ()
	{
	    $(this).children().stop().fadeOut(300);
	});

	$('#after_signin').hover(function ()
	{
	    $('#after_signin > ul').fadeIn();
	}, function ()
	{
	    $('#after_signin > ul').fadeOut();
	});
});

$(function () { //search box click value reset start
    var search_box = $('#main_search_text');

    search_box.focus(function () {
        if (search_box.val() == 'Enter the Keyword') {
            search_box.val('');
        }
    });
    search_box.blur(function () {
        if (search_box.val() == '') {
            search_box.val('Enter the Keyword');
        }
    });
});		//search box click value reset end

$(function()  //slider change 
{
	$('#font_bt').click(function()
	{
		$('#slider1').fadeIn(150);
		$('#slider2').hide();
		$('#slider3').hide();
		$('.down_triangle').stop().animate({ left: 87 }, 100);
	});
	$('#vector_bt').click(function()
	{
		$('#slider1').hide();
		$('#slider2').fadeIn(150);
		$('#slider3').hide();
		$('.down_triangle').stop().animate({ left: 276 }, 100);
	});
	$('#3d_bt').click(function()
	{
		$('#slider1').hide();
		$('#slider2').hide();
		$('#slider3').fadeIn(150);
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
/*
$(function () {
    $('.la_bt').click(function () {
        $(this).addClass("clicked", 1000, callback);
    });

    function callback() {
        setTimeout(function () {
            $(this).removeClass("clicked");
        }, 1500);
    }
});
*/
/*
$(function ()
{
    $('#desingers_intro_img').hover(function ()
    {
        $(this).animate({ opacity: 0.5 },100);
    }, function () {
        $(this).animate({ opacity: 1 },100);
    });
});
*/

$(function ()  //main_board change 
{
    $('#board_bt').click(function () {
        $('#table1').show();
        $('#table2').hide();
        $('#table3').hide();
        $('#cate_pointer').stop().animate({ left: 0 }, 40);
    });
    $('#tutorial_bt').click(function () {
        $('#table1').hide();
        $('#table2').show();
        $('#table3').hide();
        $('#cate_pointer').stop().animate({ left: 133 }, 40);
    });
    $('#qna_bt').click(function () {
        $('#table1').hide();
        $('#table2').hide();
        $('#table3').show();
        $('#cate_pointer').stop().animate({ left: 266 }, 40);
    })
});

$(function () //contents page category
{
    
    $('#cate_bt').click(function () {
            $('#open_cate_inner').stop().animate({ top: 0 });
    });
});

$(function () { /* designers page continets selcect */
    $('.contents_bt').mouseenter(function () {
        $('.continets_list').stop().slideDown(300);
        $('.contents_bt').css('background', '#464646');
    });
    $('.contents_bt').mouseleave(function () {
        $('.continets_list').stop().slideUp(300);
        $('.contents_bt').css('background', '#000');
    });
    $('.continets_list li').click(function () {
        $('.continets_selected').text($(this).text());
        $('.continets_list').stop().slideUp(300);
    });
});

$(function () //account setting script
{
    $(document).ready(function ()
    {
        $('#account_aside > ul > li').click(function () {
            $("html, body").animate({ scrollTop: ($(this).attr('id')) }, 300);
            $('#account_aside > ul > li').removeClass('selected_account');
            $(this).addClass('selected_account');
        });
        alert($(document).offset().top);
    });
    $(document).scroll(function () {
        if ($(document).scrollTop() > 300)
        {
            $('#account_aside').css({ "position": "fixed", "top": "65px" });
        } else
        {
            $('#account_aside').css({ "position": "absolute", "top": "0px" });
        }
    });

    $('#Change_pass').click(function ()
    {
        $('#pass').removeAttr('disabled');
        $('#repeat_pass').removeAttr('disabled');
        $('#repeat_pass_again').removeAttr('disabled');
    });
    $('#lang_plus').click(function ()
    {
        $("#clone_div").append('<label>&nbsp;</label><input type="text" class="language_text" />');
        $("#clone_div").append('<div class="language_option"><select class="basic_filter"><option value="Beginer">Beginer</option><option value="Advanced">Advanced</option><option value="Fluent">Fluent</option><option value="Native">Native</option></select></div>');

    });
});

$(function ()
{
    $(document).scroll(function ()
    {
        if ($(document).scrollTop() > 260) {
            $('#nav_guide').css({ "position": "fixed", "top": "36px", "z-index": "2" })
        } else
        {
            $('#nav_guide').css({ "position": "absolute" , "top" : "50px"})
        }
    });

    var i = 0;

    $('#con_like_bt').click(function ()
    {
        if (i == 0)
        {
            $('#con_like_bt').css('background', '#ec6446');
            i++;
        } else
        {
            $('#con_like_bt').css('background', '#c1c1c1');
            i = 0;
        }
    });
    });