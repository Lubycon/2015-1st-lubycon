$(function () //window fadein effect
{
    $(window).load(function ()
    {
        $('#bodyer').fadeIn('200');
    });
});

$(function () //sign in toggle event
{
    $('#signin_bt').click(function () {
        $('#login_box').fadeIn(150);
    });

    $('#sign_out').click(function () //logout
    {
        $("#after_signin").hide();
        $("#signin_bt").show();
    });
});

$(function () //language change bt slide and change
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

$(function() //gnb hober event
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

$(function(){ //add contents button start
    $('#addcontent_bt').hover(function(){
        $(this).stop().animate({opacity:0.9},200);
    },function(){
        $(this).stop().animate({opacity:1},200);
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

//main figure button animation start
$(function(){
    $('#main_figure button').hover(
        function (){
            $(this).animate({opacity:0.5, width:160},200);
        },
        function (){
            $(this).animate({opacity:1, width:150},200);
        }
    );
});

//main figure button animation end



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
    var cate_point = 0
    $('#cate_bt').click(function () {
        if (cate_point == 0)
        {
            $('#open_cate_inner').stop().animate({ top: 0 });
            $('#down_arrow').children().removeClass();
            $('#down_arrow').children().addClass('fa fa-angle-up');
            cate_point++;
        } else if (cate_point == 1)
        {
            $('#open_cate_inner').stop().animate({ top: -85 });
            $('#down_arrow').children().removeClass();
            $('#down_arrow').children().addClass('fa fa-angle-down');
            cate_point--;
        }
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
/*
$(function () //account setting script
{
    $(document).ready(function ()
    {
        $('#clone_div').click(function () {
            console.log('minus gogo');
        });
    });
    

    $(document).scroll(function () { //account setting move banner
        if ($(document).scrollTop() > $('#account_setting_section').offset().top-65)
        {
            $('#account_aside').css({ "position": "fixed", "top": "65px" });
        } else
        {
            $('#account_aside').css({ "position": "absolute", "top": "0px" });
        }
    });
    $(document).ready(function () //account setting banner event
    {
        

        
        $(document).scroll(function () { //account setting move banner
            //console.log($(document).scrollTop());
            if ($(document).scrollTop() > $('#account_setting_section').offset().top-65 && $(document).scrollTop() < $('#basic_info_section').offset().top -80) {
                $('#account_aside > ul > li').removeClass('selected_account');
                $('#account_Setting_sub').addClass('selected_account');
            } else if ($(document).scrollTop() > $('#basic_info_section').offset().top-79 && $(document).scrollTop() < $('#contact_info_section').offset().top - 80) {
                $('#account_aside > ul > li').removeClass('selected_account');
                $('#basic_info_sub').addClass('selected_account');
            } else if ($(document).scrollTop() > $('#contact_info_section').offset().top-79 && $(document).scrollTop() < $('#contact_info_section').offset().top - 70) {
                $('#account_aside > ul > li').removeClass('selected_account');
                $('#contact_info_sub').addClass('selected_account');
            } else if ($(document).scrollTop() == 1360) {
                $('#account_aside > ul > li').removeClass('selected_account');
                $('#delete_account_sub').addClass('selected_account');
            }
        });
        $('#account_Setting_sub').click(function () {
            $("html, body").stop().animate({ scrollTop: ($('#account_setting_section').offset().top) - 65 });
            $('#account_aside > ul > li').removeClass('selected_account');
            $('#account_Setting_sub').addClass('selected_account');
        });
        $('#basic_info_sub').click(function () {
            $("html, body").stop().animate({ scrollTop: ($('#basic_info_section').offset().top) - 65 });
            $('#account_aside > ul > li').removeClass('selected_account');
            $('#basic_info_sub').addClass('selected_account');
        });
        $('#contact_info_sub').click(function () {
            $("html, body").stop().animate({ scrollTop: ($('#contact_info_section').offset().top) - 65 });
            $('#account_aside > ul > li').removeClass('selected_account');
            $('#contact_info_sub').addClass('selected_account');
        });
        $('#delete_account_sub').click(function () {
            $("html, body").stop().animate({ scrollTop: ($('#delete_account_section').offset().top) - 65 });
            $('#account_aside > ul > li').removeClass('selected_account');
            $('#delete_account_sub').addClass('selected_account');
        });
       
});

    var i = 2;
    $('#Change_pass').click(function () //change pass remove attr
    {
        $('#pass ,#repeat_pass, #repeat_pass_again').removeAttr('disabled');
    });
    $('#pass ,#repeat_pass, #repeat_pass_again').focus(function () //change pass border color
    {
        $(this).css({ 'border-left': '5px solid #ffbe54', 'width': '187px' });
        $(this).after('<i class="fa fa-times"></i>');
    }).blur(function ()
    {
        $(this).css({ 'border-left': '5px solid #8ec89a', 'width': '187px' });
        $(this).after('<i class="fa fa-check"></i>');
    });
        $("#lang_clone").append('<br/>');

        $('#clone_div > #lang_clone').attr('id', 'lang_clone_' + i);
        i++; //int plus
    });
 */
/* creat account */
$(function ()
{
    var email_com;
    $('#email_id').keyup(function () //create account email logic
    { 
    var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

    if (regex.test($(this).val()) === false) {
        $(this).css({ 'border-left': '5px solid #ffbe54', 'width': '187px' });
        $(this).next().removeClass();
        $(this).next().addClass('fa fa-times');

        $('#email_check').text('worng email').show();

        email_com = false;

    } else if ($(this).val() == '') { //blank
        $(this).css({ 'border-left': '2px solid #D5D5D5', 'width': '190px' });
        $(this).next().removeClass();

        $('#email_check').text('').show();

        email_com = false;

    } else { //complite
        $(this).css({ 'border-left': '5px solid #8ec89a', 'width': '187px' });
        $(this).next().removeClass();
        $(this).next().addClass('fa fa-check');
        $('#email_check').text('').show();

        email_com = true;
    }
    });

    $('#pass_id').keyup(function () //creat account password logic
    {
        if ($(this).val() == '') { //blank
            $(this).css({ 'border-left': '2px solid #D5D5D5', 'width': '190px' });
            $(this).next().removeClass();

            $('#pass_check').text('').show();

        } else if ($(this).val().match(/[^0-9]/g) == null) //문자한개필요
        {
            $(this).css({ 'border-left': '5px solid #ffbe54', 'width': '187px' });
            $(this).next().removeClass();
            $(this).next().addClass('fa fa-times');

            $('#pass_check').text('you must insert alpabet').show();

        } else if ($(this).val().length < 8 || $(this).val().length > 16) {  // 8자보다 짧을때
            $(this).css({ 'border-left': '5px solid #ffbe54', 'width': '187px' });
            $(this).next().removeClass();
            $(this).next().addClass('fa fa-times');

            $('#pass_check').text('8~12 wirte plz').show();

        } else if ($(this).val().length >= 8 && $(this).val().length <= 16) { // complite
            $(this).css({ 'border-left': '5px solid #8ec89a', 'width': '187px' });
            $(this).next().removeClass();
            $(this).next().addClass('fa fa-check');
            $(this).val($.trim($(this).val()));
            $('#pass_check').text('').show();
        };

        // 동일한 문자가 3회 이상 반복되는 경우
        var val = $(this).val();
        var ch = '';
        var cnt = 0;
        for (var i = 0 ; i < val.length ; i++) {
            if (ch == val.charAt(i)) {
                cnt++;

                if (cnt > 2) {
                    $(this).css({ 'border-left': '5px solid #ffbe54', 'width': '187px' });
                    $(this).next().removeClass();
                    $(this).next().addClass('fa fa-times');

                    $('#pass_check').text('3word repeat').show();
                    break;
                }
            }
            else {
                ch = val.charAt(i);
                cnt = 1;
            }
        };
    });
    var pass_com;
    $('#re_pass_id').keyup(function () // repeat pass check
    {
        $(this).val($.trim($(this).val()));
        if ($(this).val() == '') { //blank
            $(this).css({ 'border-left': '2px solid #D5D5D5', 'width': '190px' });
            $(this).next().removeClass();

            pass_com = false;

            $('#pass_check').text('').show();
            }
        else if ($(this).val() != $('#pass_id').val()) { //not same
            $(this).css({ 'border-left': '5px solid #ffbe54', 'width': '187px' });
            $(this).next().removeClass();
            $(this).next().addClass('fa fa-times');

            pass_com = false;

            $('#re_pass_check').text('not same pass').show();

        } else if ($(this).val() == $('#pass_id').val()) { //complite
            $(this).css({ 'border-left': '5px solid #8ec89a', 'width': '187px' });
            $(this).next().removeClass();
            $(this).next().addClass('fa fa-check');
            $(this).val($.trim($(this).val()));

            $('#re_pass_check').text('').show();
            pass_com = true;

        }
        
    });

    var abuse_name = new Array('sex','bitch')
    var nick_com;
    $('#nick_id').keyup(function () //creat account nick name logic
    {
        $(this).val($.trim($(this).val()));
        if ($(this).val() == '') { //blank
            $(this).css({ 'border-left': '2px solid #D5D5D5', 'width': '190px' });
            $(this).next().removeClass();

            nick_com = false;

            $('#nick_check').text('').show();

        } else if (jQuery.inArray($(this).val(),abuse_name) >= 0) { //abuse names
            $(this).css({ 'border-left': '5px solid #ffbe54', 'width': '187px' });
            $(this).next().removeClass();
            $(this).next().addClass('fa fa-times');

            nick_com = false;

            $('#nick_check').text('abuse name').show();

            //console.log(jQuery.inArray($('#nick_id').val(), abuse_name))

        } else if ($(this).val() == '2') { //duplicate names
            $(this).css({ 'border-left': '5px solid #ffbe54', 'width': '187px' });
            $(this).next().removeClass();
            $(this).next().addClass('fa fa-times');

            $('#nick_check').text('duplicated name').show();

            nick_com = false;

        } else{ //complite
            $(this).css({ 'border-left': '5px solid #8ec89a', 'width': '187px' });
            $(this).next().removeClass();
            $(this).next().addClass('fa fa-check');
            $(this).val($.trim($(this).val()));

            $('#nick_check').text('').show();
            nick_com = true;

        }
    });

    $(document).click(function () //submit able event
    {
        console.log(email_com == true)
        console.log(pass_com == true)
        console.log(nick_com == true)
        console.log($('.check_box:checked').length == 2)

        //console.log($('.check_box:checked').length == 2);
        if ( email_com && nick_com && pass_com && $('.check_box:checked').length == 2)
        {
            $('.account_submit').removeAttr('disabled');
            $('.account_submit').css('background', '#47bf7e');
        } else {
            $('.account_submit').attr('disabled', 'disabled');
            $('.account_submit').css('background', '#c1c1c1');
        }
        
    });

    $(document).keyup(function () //submit able event
    {
        //console.log($('.check_box:checked').length == 2);
        if (email_com && nick_com && pass_com && $('.check_box:checked').length == 2) {
            $('.account_submit').removeAttr('disabled');
            $('.account_submit').css('background', '#47bf7e');
        } else {
            $('.account_submit').attr('disabled', 'disabled');
            $('.account_submit').css('background', '#c1c1c1');
        }

    });
});

/* creat account */


/*about us*/
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

/*about us*/

/*waiting for resisting start*/
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
/*waiting for resisting end*/
