$(function () //window fadein effect
{
    $(window).load(function ()
    {
        $('#bodyer').fadeIn('200');
    });
});

window.addEventListener('load',function(){
    setTimeout(scrollTo,0,0,1);
},false); //disable web adress window in mobile

$(function () //sign in toggle event
{
    $('#signin_bt').click(function () {
        $('#login_box').fadeIn(150);
    });

    $('#sign_out').click(function () //logout
    {
        $("#after_signin").hide();
        $("#signin_bt").show();
        $("#addcontent_bt").hide();
    });
});

$(document).ready(function () { // signin box click toggle
    $(document).click(function (e) {
        var subject = $("#signin_bt");

        if (e.target.id != subject.attr('id') && !subject.has(e.target).length) {
            $("#login_box").fadeOut(150);
        }
    });
});

$(function () { //e-mail and password value reset start
    var emailbox = $('#login_id');
    var passbox = $('#login_pass');

    emailbox.focus(function (){
        if (emailbox.val() == 'E-mail'){
            emailbox.val('');
        }
    });
    emailbox.blur(function (){
        if (emailbox.val() == ''){
            emailbox.val('E-mail');
        }
    });

    passbox.focus(function(){
        if(passbox.val()=='Password'){
            passbox.val('');
            passbox.attr('type', 'password');
        }
    });
    passbox.blur(function(){
        if (passbox.val() == '') {
            passbox.val('Password');
            passbox.attr('type', 'text');
        }
    });
});     //e-mail and password value reset start



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
	    $('#after_signin > ul').stop().fadeIn();
	}, function ()
	{
	    $('#after_signin > ul').stop().fadeOut();
	});
});

$(function () { //add contents button start
    $('#addcontent_bt').hover(function () {
        $(this).stop().animate({ opacity: 0.9 }, 200);
    }, function () {
        $(this).stop().animate({ opacity: 1 }, 200);
    });

    $('#addcontent_bt').click(function () {
        $('.dark_overlay').show();
        $('.editer_popup').show();
    });

    $('.editer_popup > ul > li').hover(function () {
        $(this).children('i').css({ "color": "#fff", "background": "#48cfad" })
    }, function () {
        $(this).children('i').css({ "color": "#838383", "background": "#fff" })
    });

    $('.editer_popup_cancel , .dark_overlay , #cancel_bt').click(function () {
        $('.dark_overlay').hide();
        $('.editer_popup').hide();
        $('#embed_popup').hide();
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

    $(document).ready(function () { // signin box click toggle
        $(document).click(function (e) {
            var subject = $("#category");

            if (e.target.id != subject.attr('id') && !subject.has(e.target).length) {
                $('#open_cate_inner').stop().animate({ top: -85 });
                $('#down_arrow').children().removeClass();
                $('#down_arrow').children().addClass('fa fa-angle-down');
                cate_point--;
            }
        });
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
/*----------------------------creat account----------------------------*/
$(function form_check (fo)
{
    var regx = /[`;',./~!@\#$%<>^&*\()\-=+_\’]/gi; //special letters
    var space = / /gi //space
    var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/; //email check
    var nick_check = /^[A-Za-z0-9+]*$/; ;

    var email_com;
    

    /*----------------------------create account email logic----------------------------*/
    $('#email_id').on("keydown keyup click blur ready change", function () 
    { 
        var current_id = '#' + $(this).attr('id');
        var value = $(this).val();
    if ($(this).val() == '') { //blank
            $(this).css({ 'border-left': '2px solid #D5D5D5', 'width': '190px' });
            $(this).next().removeClass();

            $('#email_check').text('').show();

            email_com = false;
    } else if (regex.test($(this).val()) === false) {

        $(this).css({ 'border-left': '5px solid #ea4126', 'width': '187px' });
        $(this).next().removeClass();
        $(this).next().addClass('fa fa-times');

        $('#email_check').text('wrong email adress').show();

        email_com = false
    } 
    else { //complite

        //enter to AJAX Logic by SsaRu
        $.ajax({
            type:"POST",
            url:"./php/overlap_check.php",
            data:'data='+ value +'&'+ 'id=email',
            cache: false,
            success: function(data)
            {
                if(data == ''){ //void value
                    console.log('DB return value empty');
                    console.log(data);
                    $(current_id).css({ 'border-left': '2px solid #D5D5D5', 'width': '190px' });
                    $(current_id).next().removeClass();
                    $('#email_check').text('').show();
                    email_com = false;
                }
                else if(data == 1){ //overlapping
                    console.log('DB return value overlapping');
                    console.log(data);
                    $(current_id).css({ 'border-left': '5px solid #ea4126', 'width': '187px' });
                    $(current_id).next().removeClass();
                    $(current_id).next().addClass('fa fa-times');

                    $('#email_check').text('Overlapping').show();
                    email_com = false;
                }
                else if(data == 0){ //Non-overlapping
                    console.log('DB return value non-overlapping');
                    console.log(data);
                    $(current_id).css({ 'border-left': '5px solid #8ec89a', 'width': '187px' });
                    $(current_id).next().removeClass();
                    $(current_id).next().addClass('fa fa-check');
                    $('#email_check').text('').show();

                    email_com = true;
                }
                else{
                    console.log("return value error");
                    console.log(data);

                    email_com = false;
                }
            }
        })
    }
    });

    /*----------------------------end create account email logic----------------------------*/

    /*----------------------------creat account password logic----------------------------*/

    $('#pass_id').on("keydown keyup click blur ready change", function () 
    {
        //console.log($(this).val().match('null') == null == false)
        //console.log(regx.test($(this).val()));
        if ($(this).val() == '') { //blank
            $(this).css({ 'border-left': '2px solid #D5D5D5', 'width': '190px' });
            $(this).next().removeClass();

            $('#pass_check').text('').show();

        } else if ($(this).val().match(/[^0-9]/g) == null) //문자한개필요
        {
            $(this).css({ 'border-left': '5px solid #ea4126', 'width': '187px' });
            $(this).next().removeClass();
            $(this).next().addClass('fa fa-times');

            $('#pass_check').text('you must use least one alpabet').show();

        } else if ($(this).val().match(regx)) //특수문자 불가
        {
            $(this).css({ 'border-left': '5px solid #ea4126', 'width': '187px' });
            $(this).next().removeClass();
            $(this).next().addClass('fa fa-times');

            $('#pass_check').text('you can not write !@#%').show();

        } else if ($(this).val().match(space) || $(this).val().match('null') == null == false) //공백 불가
        {
            $(this).css({ 'border-left': '5px solid #ea4126', 'width': '187px' });
            $(this).next().removeClass();
            $(this).next().addClass('fa fa-times');

            $('#pass_check').text('you can not write null').show();

        } else if ($(this).val().length < 8 || $(this).val().length > 16) {  // 8자보다 짧을때
            $(this).css({ 'border-left': '5px solid #ea4126', 'width': '187px' });
            $(this).next().removeClass();
            $(this).next().addClass('fa fa-times');

            $('#pass_check').text('8~16 write plz').show();

        } else if ($(this).val() != $('#re_pass_id').val() && $('#re_pass_id').val() != '') { //not same repeat pass
            $('#re_pass_id').css({ 'border-left': '5px solid #ea4126', 'width': '187px' });
            $('#re_pass_id').next().removeClass();
            $('#re_pass_id').next().addClass('fa fa-times');

            pass_com = false;

            $('#re_pass_check').text('It`s not same').show();

        } else if ($(this).val().length >= 8 && $(this).val().length <= 16) { // complite
            $(this).css({ 'border-left': '5px solid #8ec89a', 'width': '187px' });
            $(this).next().removeClass();
            $(this).next().addClass('fa fa-check');
            $(this).val($(this).val().toLowerCase()); // lowercase and uppercase same

            $('#pass_check').text('').show();

            console.log($(this).val());

            if ($(this).val() == $('#re_pass_id').val())
            {
                $('#re_pass_id').css({ 'border-left': '5px solid #8ec89a', 'width': '187px' });
                $('#re_pass_id').next().removeClass();
                $('#re_pass_id').next().addClass('fa fa-check');

                $('#re_pass_check').text('').show();
                pass_com = true;
            };
        };

        // Repeat 3 words
        var val = $(this).val();
        var ch = '';
        var cnt = 0;
        for (var i = 0 ; i < val.length ; i++) {
            if (ch == val.charAt(i)) {
                cnt++;

                if (cnt > 2) {
                    $(this).css({ 'border-left': '5px solid #ea4126', 'width': '187px' });
                    $(this).next().removeClass();
                    $(this).next().addClass('fa fa-times');

                    $('#pass_check').text('Repeat 3 words').show();
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
    $('#re_pass_id').on("keydown keyup click blur ready change", function () // repeat pass check
    {
        if ($(this).val() == '') { //blank
            $(this).css({ 'border-left': '2px solid #D5D5D5', 'width': '190px' });
            $(this).next().removeClass();

            pass_com = false;

            $('#pass_check').text('').show();
        }else if ($(this).val() != $('#pass_id').val()) { //not same
            $(this).css({ 'border-left': '5px solid #ea4126', 'width': '187px' });
            $(this).next().removeClass();
            $(this).next().addClass('fa fa-times');

            pass_com = false;

            $('#re_pass_check').text('It`s not same').show();

        } else if ($(this).val() == $('#pass_id').val()) { //complite
            $(this).css({ 'border-left': '5px solid #8ec89a', 'width': '187px' });
            $(this).next().removeClass();
            $(this).next().addClass('fa fa-check');

            $('#re_pass_check').text('').show();
            pass_com = true;

        }
        
    });

    var now_pass_com;
    $('#now_pass_id').on("keydown keyup click blur ready change", function () //account setting page now password check
    {
        if ($(this).val() == '') { //blank
            $(this).css({ 'border-left': '2px solid #D5D5D5', 'width': '190px' });
            $(this).next().removeClass();

            $('#now_pass_check').text('').show();

            now_pass_com = false;
        } else if ($(this).val() != 'idiotdart') { //not same
            $(this).css({ 'border-left': '5px solid #ea4126', 'width': '187px' });
            $(this).next().removeClass();
            $(this).next().addClass('fa fa-times');

            $('#now_pass_check').text('Wrong your password').show();

            now_pass_com = false;
        } else if ($(this).val() == 'idiotdart') { //complite
            $(this).css({ 'border-left': '5px solid #8ec89a', 'width': '187px' });
            $(this).next().removeClass();
            $(this).next().addClass('fa fa-check');

            $('#now_pass_check').text('').show();
            now_pass_com = true;
        }
    });


    /*----------------------------end creat account password logic----------------------------*/

    var abuse_name = new Array('sex', 'bitch', 'pussy', 'cunt', 'fuck', 'fucking');

    /*----------------------------creat account nick name logic----------------------------*/
    var nick_com;
    $('#nick_id').on("keydown keyup click blur ready change", function () 
    {
        var value = $(this).val();
        var current_id = '#' + $(this).attr('id');
        //console.log(jQuery.inArray($('#nick_id').val(), nick_array));
        if ($(this).val() == '') { //blank
            $(this).css({ 'border-left': '2px solid #D5D5D5', 'width': '190px' });
            $(this).next().removeClass();

            nick_com = false;

            $('#nick_check').text('').show();

        } else if (jQuery.inArray($(this).val(),abuse_name) >= 0) { //abuse names
            $(this).css({ 'border-left': '5px solid #ea4126', 'width': '187px' });
            $(this).next().removeClass();
            $(this).next().addClass('fa fa-times');

            nick_com = false;

            $('#nick_check').text('abuse name').show();

            //console.log(jQuery.inArray($('#nick_id').val(), abuse_name))

        } else if (!nick_check.test($(this).val())) //영어,숫자 외 불가
        {
            $(this).css({ 'border-left': '5px solid #ea4126', 'width': '187px' });
            $(this).next().removeClass();
            $(this).next().addClass('fa fa-times');

            $('#nick_check').text('you can write only english and number').show();

            nick_com = false;

        } else if ($(this).val().match(space) || $(this).val().match('null') == null == false) //공백 불가
        {
            $(this).css({ 'border-left': '5px solid #ea4126', 'width': '187px' });
            $(this).next().removeClass();
            $(this).next().addClass('fa fa-times');

            $('#nick_check').text('you can not write null').show();

            nick_com = false;

        } else { //complite

            //enter to AJAX Logic by SsaRu
            $.ajax({
                type:"POST",
                url:"./php/overlap_check.php",
                data:'data=' + value + '&' + 'id=nick',
                cache: false,
                success: function(data){
                    if(data == "")  //void value
                    {
                        console.log("DB return value empty");
                        
                        $(current_id).css({ 'border-left': '2px solid #D5D5D5', 'width': '190px' });
                        $(current_id).next().removeClass();
                        nick_com = false;

                        $('#nick_check').text('').show();
                        
                    }
                    else if(data == 1)  //overlapping
                    {
                        console.log('DB return value overlapping');

                        $(current_id).css({ 'border-left': '5px solid #ea4126', 'width': '187px' });
                        $(current_id).next().removeClass();
                        $(current_id).next().addClass('fa fa-times');
                       
                        $('#nick_check').text('Overlapping')
                        nick_com = false;

                    }
                    else if(data == 0)  //non-overlapping
                    {
                        console.log('DB return value Non-overlapping');

                        $(current_id).css({ 'border-left': '5px solid #8ec89a', 'width': '187px' });
                        $(current_id).next().removeClass();
                        $(current_id).next().addClass('fa fa-check');

                        $('#nick_check').text('').show();
                        nick_com = true;
                    }
                    else    //exception processing
                    {
                        console.log("DB return value error");
                        console.log(data);
                        nick_com = false;
                    }
                }
            });
        }
    });

    /*----------------------------end creat account nick name logic----------------------------*/

    /*----------------------------submit able event----------------------------*/

    $(document).click(function () 
    {
        //console.log(email_com == true)
        //console.log(pass_com == true)
        //console.log(nick_com == true)
        //console.log($('.check_box:checked').length == 2)

        //console.log(!!('#nick_id').match(nick_check));
        if ( email_com && nick_com && pass_com && $('.check_box:checked').length == 2)
        {
            $('.account_submit').removeAttr('disabled');
            $('.account_submit').css('background', '#47bf7e');
        } else {
            $('.account_submit').attr('disabled', 'disabled');
            $('.account_submit').css('background', '#c1c1c1');
        }
        
    });

    $(document).on("keydown keyup click blur ready mouseenter", function () //submit able event
    {
        //console.log($('.check_box:checked').length == 2);
        if (email_com && nick_com && pass_com && $('.check_box:checked').length == 2) {
            $('.account_submit').removeAttr('disabled');
            $('.account_submit').css('background', '#47bf7e');
        } else {
            $('.account_submit').attr('disabled', 'disabled');
            $('.account_submit').css('background', '#c1c1c1');
        }

        if (!nick_check.test($('#nick_id').val())) //영어,숫자 외 불가
        {
            $('#nick_id').css({ 'border-left': '5px solid #ea4126', 'width': '187px' });
            $('#nick_id').next().removeClass();
            $('#nick_id').next().addClass('fa fa-times');

            $('#nick_check').text('you can write only english and number').show();

            nick_com = false;
        }
        if (!$('#now_pass_id').attr('disabled')) { //account setting page submit bt disable event
            if (now_pass_com && pass_com) {
                $('#submit_bt').removeAttr('disabled');
                $('#submit_bt').css('background', '#47bf7e');
            } else {
                $('#submit_bt').attr('disabled', 'disabled');
                $('#submit_bt').css('background', '#c1c1c1');
            };
        }

    });
});
/*----------------------------end submit able event----------------------------*/

/*----------------------------end creat account----------------------------*/


/*----------------------------about us----------------------------*/
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

/*----------------------------waiting for resisting start----------------------------*/
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
/*----------------------------waiting for resisting end----------------------------*/

/***********************************index_2 canvas start****************************************/
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


/*index_2 canvas*/

/*----------------------------waiting for resisting end----------------------------*/


$(function () {
    $('#editer_aside ol li').hover(function () //aside li mouse hover event
    {
        $(this).css({ "background": "#48cfad", "color": "#fff" });
        $(this).children('i').css({ "color": "#fff" });
    }, function () {
        $(this).css({ "background": "#fff", "color": "#2f2f2f" });
        $(this).children('i').css({ "color": "#646464" });
    });

    $('#editer_upload_file').click(function () {
        $('#upload_file_input').click();
    });
    $('#editer_preview_upload').click(function () {
        $('#preview_upload_input').click();
    });

    // input file preview
    $.fn.setPreview = function (opt) {
        "use strict"
        var defaultOpt = {
            inputFile: $(this),
            img: null
        };
        $.extend(defaultOpt, opt);

        var previewImage = function () {
            if (!defaultOpt.inputFile || !defaultOpt.img) return;

            var inputFile = defaultOpt.inputFile.get(0);
            var img = defaultOpt.img.get(0);

            // FileReader
            if (window.FileReader) {
                // image ÆÄÀÏ¸¸
                if (!inputFile.files[0].type.match(/image\//)) return;

                // preview
                try {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        img.src = e.target.result;
                        img.style.width = defaultOpt.w + 'px';
                        img.style.height = defaultOpt.h + 'px';
                        img.style.display = '';
                    }
                    reader.readAsDataURL(inputFile.files[0]);
                } catch (e) {
                    // exception...
                }
                // img.filters (MSIE)
            } else if (img.filters) {
                inputFile.select();
                inputFile.blur();
                var imgSrc = document.selection.createRange().text;

                img.style.width = defaultOpt.w + 'px';
                img.style.height = defaultOpt.h + 'px';
                img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enable='true',sizingMethod='scale',src=\"" + imgSrc + "\")";
                img.style.display = '';
                // no support
            } else {
                // Safari5, ...
            }
        };

        // onchange
        $(this).change(function () {
            previewImage();
        });
    };


    $(document).ready(function () {
        var opt = {
            img: $('#preview_img')
        };

        $('#preview_upload_input').setPreview(opt);
    });

    $('#embed_media').click(function () {
        $('.dark_overlay').show();
        $('#embed_popup').show();
    });


    $('#embed_bt').click(function () // embed code event
    {
        $('#editer_preview_box').append($('#embed_textarea').val());
        $('#embed_popup').hide();
        $('.dark_overlay').hide();
    });

    var i = 0;
    $('#add_text').click(function () { //add text bt event
        $('#text_editer').clone(true).appendTo('#editer_preview_box');

        $('#text_editer').attr('id', 'text_editer_' + i);

        $('#con_move_bt').attr('id', 'con_move_bt_' + i);
        $('#con_delete_bt').attr('id', 'con_delete_bt_' + i);

        $('#editer_body_text').attr('id', 'editer_body_text_' + i);
        $('#textarea_editer').attr('id', 'textarea_editer_' + i);

        $('#select_box').attr('id', 'select_box_' + i);

        $('#text_bold').attr('id', 'text_bold_' + i);
        $('#text_italic').attr('id', 'text_italic_' + i);
        $('#text_underline').attr('id', 'text_underline_' + i);
        $('#text_strike').attr('id', 'text_strike_' + i);

        $('#color_picker').attr('id', 'color_picker_' + i);

        $('#align_left').attr('id', 'aign_left_' + i);
        $('#align_center').attr('id', 'align_center_' + i);
        $('#align_right').attr('id', 'align_right_' + i);
        i++;
    });

    $('.color_picker').ready(function () // color picker palete making
    {
        $('.color_picker > ul > li').each(function () {
            $(this).css("background",$(this).text());
        });
    });



    //var find_textarea = $(this).parent('.textarea_editer').prev('.editer_body_text');

    $('.con_delete_bt[id*="con_delete_bt"]').click(function () //delete text area
    {
        $(this).parent().remove();
    });
    $('.select_box[id*="select_box"]').change(function () //change font size
    {
        $(this).parent('.textarea_editer').prev('.editer_body_text').css({ 'font-size': $(this).find('option:selected').text() });
    });

    $('.text_bold[id*="text_bold"]').click(function () //change font weight
    {
        if ($(this).parent('.textarea_editer').prev('.editer_body_text').css("font-weight") == "400")
        {
            $(this).parent('.textarea_editer').prev('.editer_body_text').css({ 'font-weight': '600' });
        } else
        {
            $(this).parent('.textarea_editer').prev('.editer_body_text').css({ 'font-weight': '400' });
        }
    });

    $('.text_italic[id*="text_italic"]').click(function () //change font italic
    {
        if ($(this).parent('.textarea_editer').prev('.editer_body_text').css('font-style') == 'normal' ) 
        {
            $(this).parent('.textarea_editer').prev('.editer_body_text').css({ 'font-style': 'italic' });
        } else {
            $(this).parent('.textarea_editer').prev('.editer_body_text').css({ 'font-style': 'normal' });
        }
    });
    $('.text_strike[id*="text_strike"]').click(function () //change font strike
    {
        if ($(this).parent('.textarea_editer').prev('.editer_body_text').css('text-decoration') == 'none' ||
            $(this).parent('.textarea_editer').prev('.editer_body_text').css('text-decoration') == 'underline')
        {
            $(this).parent('.textarea_editer').prev('.editer_body_text').css({ 'text-decoration': 'line-through' });
        } else {
            $(this).parent('.textarea_editer').prev('.editer_body_text').css({ 'text-decoration': 'none' });
        }
    });
    $('.text_underline[id*="text_underline"]').click(function () //change font underline
    {
        if ($(this).parent('.textarea_editer').prev('.editer_body_text').css('text-decoration') == 'none' ||
            $(this).parent('.textarea_editer').prev('.editer_body_text').css('text-decoration') == 'line-through')
        {
            $(this).parent('.textarea_editer').prev('.editer_body_text').css({ 'text-decoration': 'underline' });
        } else {
            $(this).parent('.textarea_editer').prev('.editer_body_text').css({ 'text-decoration': 'none' });
        }
    });

    $('.color_picker[id*="color_picker"] > ul > li').click(function () //change font underline
    {
        $(this).parents('.textarea_editer').prev('.editer_body_text').css({ "color": $(this).text() });
        $(this).parent('ul').prev('.selected_color').css({ "background": $(this).text() });
    });

    $('.align_left[id*="align_left"]').click(function () //change txt align left
    {
        $(this).parent('.textarea_editer').prev('.editer_body_text').css({ 'text-align': 'left' });
    });
    $('.align_center[id*="align_center"]').click(function () //change txt align center
    {
        $(this).parent('.textarea_editer').prev('.editer_body_text').css({ 'text-align': 'center' });
    });
    $('.align_right[id*="align_right"]').click(function () //change txt align right
    {
        $(this).parent('.textarea_editer').prev('.editer_body_text').css({ 'text-align': 'right' });
    });


    $(".text_editer[id*='text_editer']").hover(function () // textarea move, delete bt hover
    {
        $(this).children('.con_move_bt, .con_delete_bt').stop().fadeIn(150);
        //$('.con_move_bt, .con_delete_bt').stop().fadeIn(150);
    }, function ()
    {
        $(this).children('.con_move_bt, .con_delete_bt').stop().fadeOut(150);
    });

    $(".editer_body_text[id*='editer_body_text']").focus(function ()
    {
        $(this).next('.textarea_editer').stop().fadeIn(150);
        //$('.textarea_editer').fadeIn(150);
    });


    $(document).ready(function () { //outside click toggle
        $(document).click(function (e) {
            var subject = $(".text_editer");

            if (e.target.id != subject.attr('id') && !subject.has(e.target).length) {
                $('.textarea_editer').fadeOut(150);
            }
        });
    });


    $('.selected_color').click(function () //color picker toggle
    {
        $(this).next('ul').toggle();
    });

    $('.color_picker > ul > li').click(function ()
    {
        $(this).parent('ul').hide();
    });
});