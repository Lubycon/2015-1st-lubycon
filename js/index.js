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
    var context = $('.upload_graph')[0].getContext('2d');
    var canvers_height = $('.upload_graph').height() - 95;
    var upload_max = Math.max.apply(null, [$('.upload_data1').text(), $('.upload_data2').text(), $('.upload_data3').text(), $('.upload_data4').text(), $('.upload_data5').text(), $('.upload_data6').text(), $('.upload_data7').text()]); // => 89
    var upload_ratio = 150 / (upload_max * 1.2);

    context.beginPath();
    context.lineTo(15,                 150 - (upload_ratio * $('.upload_data1').text()));
    context.lineTo(15 + 50,            150 - (upload_ratio * $('.upload_data2').text()));
    context.lineTo(15 + 50 + (44 * 1), 150 - (upload_ratio * $('.upload_data3').text()));
    context.lineTo(15 + 50 + (44 * 2), 150 - (upload_ratio * $('.upload_data4').text()));
    context.lineTo(15 + 50 + (44 * 3), 150 - (upload_ratio * $('.upload_data5').text()));
    context.lineTo(15 + 50 + (44 * 4), 150 - (upload_ratio * $('.upload_data6').text()));
    context.lineTo(15 + 50 + (44 * 5), 150 - (upload_ratio * $('.upload_data7').text()));
    context.lineWidth = 1;
    context.strokeStyle = '#ffbe54';
    context.stroke();
});
$(function () { // like grahp //
    var context = $('.like_graph')[0].getContext('2d');
    var canvers_height = $('.like_graph').height() - 95;
    var like_max = Math.max.apply(null, [$('.like_data1').text(), $('.like_data2').text(), $('.like_data3').text(), $('.like_data4').text(), $('.like_data5').text(), $('.like_data6').text(), $('.like_data7').text()]); // => 89
    var like_ratio = 150 / (like_max * 1.2);

    context.beginPath();
    context.lineTo(15, 150 - (like_ratio * $('.like_data1').text()));
    context.lineTo(15 + 50, 150 - (like_ratio * $('.like_data2').text()));
    context.lineTo(15 + 50 + (44 * 1), 150 - (like_ratio * $('.like_data3').text()));
    context.lineTo(15 + 50 + (44 * 2), 150 - (like_ratio * $('.like_data4').text()));
    context.lineTo(15 + 50 + (44 * 3), 150 - (like_ratio * $('.like_data5').text()));
    context.lineTo(15 + 50 + (44 * 4), 150 - (like_ratio * $('.like_data6').text()));
    context.lineTo(15 + 50 + (44 * 5), 150 - (like_ratio * $('.like_data7').text()));
    context.lineWidth = 1;
    context.strokeStyle = '#9054ff';
    context.stroke();
});
$(function () { // downloaded grahp //
    var context = $('.downloaded_graph')[0].getContext('2d');
    var canvers_height = $('.downloaded_graph').height() - 95;
    var downloaded_max = Math.max.apply(null, [$('.downloaded_data1').text(), $('.downloaded_data2').text(), $('.downloaded_data3').text(), $('.downloaded_data4').text(), $('.downloaded_data5').text(), $('.downloaded_data6').text(), $('.downloaded_data7').text()]); // => 89
    var downloaded_ratio = 150 / (downloaded_max * 1.2);

    context.beginPath();
    context.lineTo(15, 150 - (downloaded_ratio * $('.downloaded_data1').text()));
    context.lineTo(15 + 50, 150 - (downloaded_ratio * $('.downloaded_data2').text()));
    context.lineTo(15 + 50 + (44 * 1), 150 - (downloaded_ratio * $('.downloaded_data3').text()));
    context.lineTo(15 + 50 + (44 * 2), 150 - (downloaded_ratio * $('.downloaded_data4').text()));
    context.lineTo(15 + 50 + (44 * 3), 150 - (downloaded_ratio * $('.downloaded_data5').text()));
    context.lineTo(15 + 50 + (44 * 4), 150 - (downloaded_ratio * $('.downloaded_data6').text()));
    context.lineTo(15 + 50 + (44 * 5), 150 - (downloaded_ratio * $('.downloaded_data7').text()));
    context.lineWidth = 1;
    context.strokeStyle = '#2e7bf5';
    context.stroke();
});