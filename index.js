$(function ()
{
    $('#signin').click(function () {
        $('#login_box').toggle();
    });
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
		$('.lang_list').slideUp(300);
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
});

$(function()  //slider change 
{
	$('#font_bt').click(function()
	{
		$('#slider1').show();
		$('#slider2').hide();
		$('#slider3').hide();
		$('.down_triangle').stop().animate({ left: 87 }, 100);
	});
	$('#vector_bt').click(function()
	{
		$('#slider1').hide();
		$('#slider2').show();
		$('#slider3').hide();
		$('.down_triangle').stop().animate({ left: 276 }, 100);
	});
	$('#3d_bt').click(function()
	{
		$('#slider1').hide();
		$('#slider2').hide();
		$('#slider3').show();
		$('.down_triangle').stop().animate({ left: 469 }, 100);
	})
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