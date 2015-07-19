$(function ()
{
    $(window).load(function ()
    {
        $('#bodyer').fadeIn('200');
    });
});

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

$(function ()
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

$(function () { // upload grahp //
    var context = $('.uploaded_graph')[0].getContext('2d');
    var canvers_height = $('.uploaded_graph').height() - 95;
    var uploaded_max = Math.max.apply(null, [$('.uploaded_data1').text(), $('.uploaded_data2').text(), $('.uploaded_data3').text(), $('.uploaded_data4').text(), $('.uploaded_data5').text(), $('.uploaded_data6').text(), $('.uploaded_data7').text()]); // => 89
    var uploaded_ratio = 150 / (uploaded_max * 1.2);

    context.beginPath();
    context.lineTo(13,                 150 - (uploaded_ratio * $('.uploaded_data1').text()));
    context.lineTo(13 + 46,            150 - (uploaded_ratio * $('.uploaded_data2').text()));
    context.lineTo(13 + 46 + (44.5 * 1), 150 - (uploaded_ratio * $('.uploaded_data3').text()));
    context.lineTo(13 + 46 + (44.5 * 2), 150 - (uploaded_ratio * $('.uploaded_data4').text()));
    context.lineTo(13 + 46 + (44.5 * 3), 150 - (uploaded_ratio * $('.uploaded_data5').text()));
    context.lineTo(13 + 46 + (44.5 * 4), 150 - (uploaded_ratio * $('.uploaded_data6').text()));
    context.lineTo(13 + 46 + (44.5 * 5), 150 - (uploaded_ratio * $('.uploaded_data7').text()));
    context.lineWidth = 2;
    context.strokeStyle = '#ffbe54';
    context.stroke();

    $('#uploaded_ul li').children('.graph_data').css('background', 'rgba(255,190,84,0.5)');
    $('#uploaded_ul li').hover(function ()
    {
        $(this).children('.graph_data').stop().fadeIn(150);
    }, function ()
    {
        $(this).children('.graph_data').stop().fadeOut(150);
    }
    );
});
$(function () { // like grahp //
    var context = $('.like_graph')[0].getContext('2d');
    var canvers_height = $('.like_graph').height() - 95;
    var like_max = Math.max.apply(null, [$('.like_data1').text(), $('.like_data2').text(), $('.like_data3').text(), $('.like_data4').text(), $('.like_data5').text(), $('.like_data6').text(), $('.like_data7').text()]); // => 89
    var like_ratio = 150 / (like_max * 1.2);

    context.beginPath();
    context.lineTo(13,                   150 - (like_ratio * $('.like_data1').text()));
    context.lineTo(13 + 46,              150 - (like_ratio * $('.like_data2').text()));
    context.lineTo(13 + 46 + (44.5 * 1), 150 - (like_ratio * $('.like_data3').text()));
    context.lineTo(13 + 46 + (44.5 * 2), 150 - (like_ratio * $('.like_data4').text()));
    context.lineTo(13 + 46 + (44.5 * 3), 150 - (like_ratio * $('.like_data5').text()));
    context.lineTo(13 + 46 + (44.5 * 4), 150 - (like_ratio * $('.like_data6').text()));
    context.lineTo(13 + 46 + (44.5 * 5), 150 - (like_ratio * $('.like_data7').text()));
    context.lineWidth = 2;
    context.strokeStyle = '#9054ff';
    context.stroke();

    $('#like_ul li').children('.graph_data').css('background', 'rgba(144,84,255,0.5)');
    $('#like_ul li').hover(function () {
        $(this).children('.graph_data').stop().fadeIn(150);
    }, function () {
        $(this).children('.graph_data').stop().fadeOut(150);
    }
    );
});
$(function () { // downloaded grahp //
    var context = $('.downloaded_graph')[0].getContext('2d');
    var canvers_height = $('.downloaded_graph').height() - 95;
    var downloaded_max = Math.max.apply(null, [$('.downloaded_data1').text(), $('.downloaded_data2').text(), $('.downloaded_data3').text(), $('.downloaded_data4').text(), $('.downloaded_data5').text(), $('.downloaded_data6').text(), $('.downloaded_data7').text()]); // => 89
    var downloaded_ratio = 150 / (downloaded_max * 1.2);

    context.beginPath();
    context.lineTo(13,                   150 - (downloaded_ratio * $('.downloaded_data1').text()));
    context.lineTo(13 + 46,              150 - (downloaded_ratio * $('.downloaded_data2').text()));
    context.lineTo(13 + 46 + (44.5 * 1), 150 - (downloaded_ratio * $('.downloaded_data3').text()));
    context.lineTo(13 + 46 + (44.5 * 2), 150 - (downloaded_ratio * $('.downloaded_data4').text()));
    context.lineTo(13 + 46 + (44.5 * 3), 150 - (downloaded_ratio * $('.downloaded_data5').text()));
    context.lineTo(13 + 46 + (44.5 * 4), 150 - (downloaded_ratio * $('.downloaded_data6').text()));
    context.lineTo(13 + 46 + (44.5 * 5), 150 - (downloaded_ratio * $('.downloaded_data7').text()));
    context.lineWidth = 2;
    context.strokeStyle = '#2e7bf5';
    context.stroke();

    $('#downloaded_ul li').children('.graph_data').css('background', 'rgba(46,123,245,0.5)');
    $('#downloaded_ul li').hover(function () {
        $(this).children('.graph_data').stop().fadeIn(150);
    }, function () {
        $(this).children('.graph_data').stop().fadeOut(150);
    }
    );
});

$(function () {
    var hint_box = $('#hint_box');
    var hint_name = $('#hint_name');
    var hint_figure = $('#hint_figure');

    hint_box.mouseenter(function () {
        hint_box.css('display','block');
    });

    $('.graph_box').mouseenter(function () {
        hint_box.stop().fadeIn(150);
    }).mouseleave(function () {
        hint_box.stop().fadeOut(150);
    }).mousemove(function (e) {
        hint_box.css(   //mouse follow event
            {
                "top": e.pageY - 15 + "px",
                "left": e.pageX + 20 + "px"
            });
    }).mouseenter(function () {
        hint_name.html($(this).children('.graph_title').text() + ' ' + 'contents'); //graph title text pull
    });

    $('.graph_box > ul > li').mouseenter(function () {
        //alert($(this).children('.graph_data').text());
        hint_figure.html($(this).children('.graph_data').text());   //graph data text pull
    });

    
});