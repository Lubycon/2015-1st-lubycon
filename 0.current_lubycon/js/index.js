/*----------------------------common js----------------------------*/

/////////////////////////////////////////////////////////
//      ready to body fadein event start
/////////////////////////////////////////////////////////

$(function () //window fadein effect
{
    $(window).load(function ()
    {
        $('#bodyer').fadeIn(500); //don't add stop function
    });
});

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
        $(this).children().stop().fadeIn(300);
    }, function () {
        $(this).children().stop().fadeOut(300);
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
    $('#lnb_nav ul').children('.' + third_param).addClass('selected_nav');

})

       
/////////////////////////////////////////////////////////
//      gloval navigation button hover event end
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//      add hover animation for every buttons start
/////////////////////////////////////////////////////////

$(function () //add hover animation for every buttons
{
    $('button').hover(function()
    {
        $(this).stop().animate({ opacity: 0.8 }, 200);
    }, function ()
    {
         $(this).stop().animate({ opacity: 1 }, 200);
    });
});

/////////////////////////////////////////////////////////
//      add hover animation for every buttons end
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//      change language start
/////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////
//      change language end
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//      before sign in child event start
/////////////////////////////////////////////////////////

$(function () //sign in toggle event
{
    $('#signin_bt').click(function () {
        $('#login_box').stop().fadeIn(150);
        $('#login_box').attr("class","bounceInDown animated");
        $("#login_box").css("display","block");
        $("#login_id").focus();
    });

    $('#sign_out').click(function () //logout
    {
        $("#after_signin").hide();
        $("#signin_bt").show();
        $("#addcontent_bt").hide();
    });
});

$(document).ready(function () // signin box click toggle
{
    $(document).click(function (e) {
        var subject = $("#signin_bt");

        if (e.target.id != subject.attr('id') && !subject.has(e.target).length) {
            $("#login_box").fadeOut(400);
        }
    });
});

/////////////////////////////////////////////////////////
//      before sign in child event end
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//      before sign in input reset start
/////////////////////////////////////////////////////////

$(function () //e-mail and password value reset start
{
    var emailbox = $('#login_id');
    var passbox = $('#login_pass');

    emailbox.focus(function () {
        if (emailbox.val() == 'E-mail') {
            emailbox.val('');
        }
        $('#email_icon').css('color','#48cfad');
    });
    emailbox.blur(function () {
        if (emailbox.val() == '') {
            emailbox.val('E-mail');
        }
         $('#email_icon').css('color','#b1b1b1');
    });

    passbox.focus(function () {
        if (passbox.val() == 'Password') {
            passbox.val('');
            passbox.attr('type', 'password');
        }
        $('#pass_icon').css('color','#48cfad');
    });
    passbox.blur(function () {
        if (passbox.val() == '') {
            passbox.val('Password');
            passbox.attr('type', 'text');
        }
        $('#pass_icon').css('color','#b1b1b1');
    });
});     //e-mail and password value reset end

/////////////////////////////////////////////////////////
//      before sign in input reset end
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//      before sign in input shiny start
/////////////////////////////////////////////////////////
$(function () {
    $('#email_id').focus(function () {
        $('#email_input label').css('color', '#48cfad');
    });
    $('#email_id').blur(function () {
        $('#email_input label').css('color', '#838282');
    });
});
/////////////////////////////////////////////////////////
//      before sign in input shiny end
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//      create account bt popup event start (ajax)
/////////////////////////////////////////////////////////

$(function () { //create account bt popup event start

    $('#create_acc').hover(function ()
    {
        $(this).stop().animate({ opacity: 0.8 }, 200);
    }, function ()
    {
        $(this).stop().animate({ opacity: 1 }, 200);
    });

    $("#create_acc").click(function () {
        $.ajax({
            type: "POST",
            url: "php/ajax/create_account_popup.php", //이페이지에서 중복체크를 한다
            //data: "id=" + id,//test.asp에 id 값을 보낸다
            cache: false,
            success: function (data)
            {
                $('#bodyer').hide().append(data).fadeIn(300); //해당 내용을 보여준다
                $(".basic_filter").selectOrDie
                ({
                    customClass: "custom",
                    customID: "custom",
                    size: 5
                });
                $('.dark_overlay').fadeIn(300);
            }
        });
    });

    $('.dark_overlay').click(function () {
        $('.dark_overlay').stop().fadeOut(300);
        $('#create_account_area').stop().fadeOut(300).remove();
    });
});

/////////////////////////////////////////////////////////
//      create account bt popup event end
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//      after signin child hover show and hide start
/////////////////////////////////////////////////////////

$(function() //after signin child hover show and hide
{
	$('#after_signin').hover(function ()
	{
	    $('#after_signin > ul').stop().fadeIn();
	}, function ()
	{
	    $('#after_signin > ul').stop().fadeOut();
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
    var search_box2 = $('#forum_search_text');

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

    search_box2.focus(function(){
        if(search_box2.val()=='Enter the Keyword'){
            search_box2.val('')
        }
    });
    search_box2.blur(function(){
        if(search_box2.val()==''){
            search_box2.val('Enter the Keyword');
        }
    });
});//search box click value reset end

/////////////////////////////////////////////////////////
//      main search bar input reset end
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

/*----------------------------common js----------------------------*/

/*----------------------------index page slider----------------------------*/


/////////////////////////////////////////////////////////
//      index page slide switch start
/////////////////////////////////////////////////////////

$(function()  //slider change 
{
	$('#font_bt').click(function()
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
/*----------------------------index page slider----------------------------*/


/*----------------------------contents page----------------------------*/
/////////////////////////////////////////////////////////
//      category bar select menu end
/////////////////////////////////////////////////////////


$(function () //contents page category
{
    $('#cate_bt').click(function () {
        if ($('#open_cate_inner').css('top') == '-85px')
        {
            $('#open_cate_inner').stop().animate({ top: 0 });
            $('#down_arrow').children().removeClass();
            $('#down_arrow').children().addClass('fa fa-angle-up');
        } else if ($('#open_cate_inner').css('top') == '0px')
        {
            $('#open_cate_inner').stop().animate({ top: -85 });
            $('#down_arrow').children().removeClass();
            $('#down_arrow').children().addClass('fa fa-angle-down');
        }
    });

    $(document).ready(function () { // signin box click toggle
        $(document).click(function (e) {
            var subject = $("#category");

            if (e.target.id != subject.attr('id') && !subject.has(e.target).length) {
                $('#open_cate_inner').stop().animate({ top: -85 });
                $('#down_arrow').children().removeClass();
                $('#down_arrow').children().addClass('fa fa-angle-down');
            }
        });
    });
});


/////////////////////////////////////////////////////////
//      category bar select menu end
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//      contents card hover overlay view start
/////////////////////////////////////////////////////////
$(function ()
{
    $('.contents_card').hover(function ()
    {
        $(this).children('.contents_overlay').stop().fadeIn(300);
    }, function ()
    {
        $(this).children('.contents_overlay').stop().fadeOut(300);
    });
});
/////////////////////////////////////////////////////////
//      contents card hover overlay view end
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//      contents card bookmark toggle start
/////////////////////////////////////////////////////////
$(function () {
    var toggle_count = 0;
    $(document).on('click', ".bookmark_bt,#bookmark_inner_bt", function ()
        {
        switch (toggle_count) {
            case 0:
                $(this).css('color', '#ffbe54');
                toggle_count = 1;
                break;

            case 1:
                $(this).css('color', '#c1c1c1');
                toggle_count = 0;
                break;
        }
    });
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
                $("#files").stop().slideDown(300);
                $("#info_toggle").attr('class', 'fa fa-angle-up');
                toggle_count = 1;
                break;

            case 1:
                $("#files").stop().slideUp(300);
                $("#info_toggle").attr('class', 'fa fa-angle-down');
                toggle_count = 0;
                break;
        };
    });
});
/////////////////////////////////////////////////////////
//      contents view file_info toggle end
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//      contents view load ajax start
/////////////////////////////////////////////////////////
$(function ()
{
    $(document).on('click','.load_view',function ()
    {
        $.ajax({
            type: "POST",
            url: "php/ajax/contents_view.php", //이페이지에서 중복체크를 한다
            //data: "id=" + id,//test.asp에 id 값을 보낸다
            cache: false,
            success: function (data) {
                $('#bodyer').hide().append(data).fadeIn(300); //해당 내용을 보여준다
                $('.dark_overlay').fadeIn(300);
            }
        });
    });

    $('.dark_overlay').click(function ()
    {
        $('.dark_overlay').stop().fadeOut(300);
        $('#pop_up').stop().fadeOut(300).remove();
    });
});

/////////////////////////////////////////////////////////
//      contents view load ajax end
/////////////////////////////////////////////////////////
/*----------------------------contents page----------------------------*/



/*----------------------------creat account statt----------------------------*/
$(function form_check (fo)
{
    var regx = /[`;',./~!@\#$%<>^&*\()\-=+_\’]/gi; //special letters
    var space = / /gi //space
    var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/; //email check
    var nick_check = /^[A-Za-z0-9+]*$/; ;

/*----------------------------create account email logic----------------------------*/

    /////////////////////////////////////////////////////////
    //      e-mail check start
    /////////////////////////////////////////////////////////

    var email_com;

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
                    $(current_id).val($(current_id).val().toLowerCase()); // lowercase and uppercase same
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
    /////////////////////////////////////////////////////////
    //      e-mail check end
    /////////////////////////////////////////////////////////


    /*----------------------------end create account email logic----------------------------*/

    /*----------------------------creat account password logic----------------------------*/

    /////////////////////////////////////////////////////////
    //      password check end
    /////////////////////////////////////////////////////////

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

        } /*else if ($(this).val().match(regx)) //특수문자 불가
        {
            $(this).css({ 'border-left': '5px solid #ea4126', 'width': '187px' });
            $(this).next().removeClass();
            $(this).next().addClass('fa fa-times');

            $('#pass_check').text('you can not write !@#%').show();

        }*/ else if ($(this).val().match(space) || $(this).val().match('null') == null == false) //공백 불가
        {
            $(this).css({ 'border-left': '5px solid #ea4126', 'width': '187px' });
            $(this).next().removeClass();
            $(this).next().addClass('fa fa-times');

            $('#pass_check').text('you can not write null').show();

        } else if ($(this).val().length < 8 || $(this).val().length > 20) {  // 8 to 20 letters
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

        } else if ($(this).val().length >= 8 && $(this).val().length <= 20) { // complite
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
    /////////////////////////////////////////////////////////
    //      password check end
    /////////////////////////////////////////////////////////




    /////////////////////////////////////////////////////////
    //      now pass check start
    /////////////////////////////////////////////////////////
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
    /////////////////////////////////////////////////////////
    //      now pass check end
    /////////////////////////////////////////////////////////

    /*----------------------------end creat account password logic----------------------------*/

    var abuse_name = new Array('sex', 'bitch', 'pussy', 'cunt', 'fuck', 'fucking');

    /*----------------------------creat account nick name logic----------------------------*/
    /////////////////////////////////////////////////////////
    //      nick name check start
    /////////////////////////////////////////////////////////

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
                        $(current_id).val($(current_id).val().toLowerCase()); // lowercase and uppercase same

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

    /////////////////////////////////////////////////////////
    //      nick name check end
    /////////////////////////////////////////////////////////

    /*----------------------------end creat account nick name logic----------------------------*/

    /*----------------------------submit able event----------------------------*/

    /////////////////////////////////////////////////////////
    //      account submit event start
    /////////////////////////////////////////////////////////

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

        if (email_com && $('.find_submit').attr('class') == 'find_submit')
        {
            $('.find_submit').removeAttr('disabled');
            $('.find_submit').css('background', '#48cfad');
        } else
        {
            $('.find_submit').attr('disabled', 'disabled');
            $('.find_submit').css('background', '#c1c1c1');
        }
    });
    /////////////////////////////////////////////////////////
    //      account submit event end
    /////////////////////////////////////////////////////////
});
/*----------------------------end submit able event----------------------------*/

/*----------------------------end creat account----------------------------*/

/*----------------------------start personal page----------------------------*/

/////////////////////////////////////////////////////////
//      personal page subnav hover and ajax
/////////////////////////////////////////////////////////
$(function () { /* designers page subnav selcect */
    $('.contents_bt').mouseenter(function () {
        $('.subnav_list').stop().slideDown(300);
        $('.contents_bt').css('background', '#464646');
    });
    $('.contents_bt').mouseleave(function () {
        $('.subnav_list').stop().slideUp(300);
        $('.contents_bt').css('background', '#222');
    });
    /*
    $('.subnav_list li').click(function () {
        $('.subnav_selected').text($(this).text());
        $('.subnav_list').stop().slideUp(300);
    });
    */
    $('document').ready(function () {
        if ($('.personal').attr('class') == 'personal')
        {
            var id = four_param;
        $.ajax(
            {
                type: "POST",
                url: "php/ajax/subnav.php", //이페이지에서 중복체크를 한다
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
        }
    });

    $(".subnav_list li").click(function () {
        $('.subnav_selected').text($(this).text());
        $('.subnav_list').stop().slideUp(300);
        var id = $(this).attr('id');
        console.log(id);

        $.ajax(
            {
                type: "POST",
                url: "php/ajax/subnav.php", //이페이지에서 중복체크를 한다
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
//      about us hover event
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
//      about us hover event
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



/*----------------------------editor start----------------------------*/
/////////////////////////////////////////////////////////
//      editor nav start
/////////////////////////////////////////////////////////
$(function () {
    $('#editor_aside ol li').hover(function () //aside li mouse hover event
    {
        $(this).css({ "background": "#666666"});
        $(this).children('i').css({ "color": "#48cfad" });
        $(this).children('.tooltip_bt').stop().fadeIn(300).css("display","inline-block");
    }, function () {
        $(this).css({ "background": "#555"});
        $(this).children('i').css({ "color": "#333333" });
        $(this).children('.tooltip_bt').stop().fadeOut(300);

    });

/////////////////////////////////////////////////////////
//      editor nav end
/////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    //      img crop start
    /////////////////////////////////////////////////////////
    $(document).on('click', '.preview_img', function ()
    {
        if ($(this).css('border') == '1px solid rgb(255, 255, 255)')
        {
            $(this).css({ "background": "rgb(255, 255, 255)" }); //css reset
            $(this).css({ "box-shadow": "0px 0px 5px rgba(72, 203, 173, 1)"});
            $(this).removeAttr('id'); // remove all id

            $(this).css({ "border": "1px solid #48cfad" });
            $(this).attr('id', 'selected_img');

            $('#img_crop').removeClass('img_crop_notallow'); //img crop bt able
        } else
        {
            $(this).css({ "border": "1px solid #ffffff" });
            $(this).css({ "box-shadow": "none"});
            $('#img_crop').addClass('img_crop_notallow'); //img crop bt disable
        }
    });

    /////////////////////////////////////////////////////////
    //      img crop end
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      editor_upload_file start
    /////////////////////////////////////////////////////////

    $('#editor_upload_file').click(function () { //upload file window open
        $('#upload_file_input').click();
    });

    /////////////////////////////////////////////////////////
    //      editor_upload_file end
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      preview img start 
    /////////////////////////////////////////////////////////


    $('#editor_preview_upload').click(function () { //preview image window open
        $('#preview_upload_input').click();
    });

    $('#preview_upload_input').on('change', function (e) //preview image upload
    {
        var files = e.target.files;

			$.each(files, function (i, file)
			{
				var reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onload = function (e)
				{

				    var template = '<li class="preview_img">' +
                                   '<div id="contents_div" class="contents_div">' +
                                   '<img src="' + e.target.result + '">' +
                                   '<button class="con_delete_bt"><i class="fa fa-times"></i></button>' +
                                   '</div>' +
                                   '</li>'
				    
				    $('#editor_section ul').append(template);
				};
			});
    });
    /////////////////////////////////////////////////////////
    //      editor nav end
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      embed midea 
    /////////////////////////////////////////////////////////

    $('#embed_media').click(function () { // embed code window load
        $('.dark_overlay').stop().fadeIn(100);
        $('#embed_popup').stop().fadeIn(100);
    });


    $('.mic_next_bt').click(function () // embed code event
    {
        var embed_midea =
            '<li class="embed_contents">' +
            $('#embed_textarea').val() +
            '<button class="con_delete_bt"><i class="fa fa-times"></i></button>' +
            '</li>'

        $('#editor_preview_box').append(embed_midea);
        $('#embed_popup').hide();
        $('.dark_overlay').hide();
    });

    /////////////////////////////////////////////////////////
    //      embed midea 
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      add text 
    /////////////////////////////////////////////////////////
    
    $('#add_text').click(function ()
    {
        var text_editor =
            '<li class="text_editor">'+
                    '<div id="text_contents_div" class="contents_div">'+
                        '<button class="con_delete_bt"><i class="fa fa-times"></i></button>'+
                        '<textarea class="editor_body_text"></textarea>'+
                        '<div class="textarea_editor">'+
                            '<div class="select_box">'+
                                '<select class="basic">'+
                                    '<option value="14pt">14pt</option>'+
                                    '<option value="18pt">18pt</option>'+
                                    '<option value="24pt">24pt</option>'+
                                    '<option value="30pt">30pt</option>'+
                                    '<option value="36pt">36pt</option>'+
                                    '<option value="48pt">48pt</option>'+
                                    '<option value="60pt">60pt</option>'+
                                    '<option value="72pt">72pt</option>'+
                                '</select>'+
                            '</div>'+
                            '<button class="text_bold"><i class="fa fa-bold"></i></button>'+
                            '<button class="text_italic"><i class="fa fa-italic"></i></button>'+
                            '<button class="text_underline"><i class="fa fa-underline"></i></button>'+
                            '<button class="text_strike"><i class="fa fa-strikethrough"></i></button>'+
                            '<div class="color_picker">'+
                                '<div class="selected_color"></div>'+
                                '<ul><!--color list-->'+
                                    '<li class="colors">#fff</li><!--monotone-->'+
                                    '<li>#aaaaaa</li>'+
                                    '<li>#999999</li>'+
                                    '<li>#777777</li>'+
                                    '<li>#555555</li>'+
                                    '<li>#333333</li>'+
                                    '<li>#222222</li>'+
                                    '<li>#000000</li>'+

                                    '<li>#ffe8e8</li>' + '<!--red-->'+
                                    '<li>#fdc8c8</li>'+
                                    '<li>#fea3a3</li>'+
                                    '<li>#fe7a7a</li>'+
                                    '<li>#ff0000</li>' + '<!--middle-->'+
                                    '<li>#db0101</li>'+
                                    '<li>#b70202</li>'+
                                    '<li>#920000</li>'+

                                    '<li>#fff9e8</li>' + '<!--orange-->'+
                                    '<li>#fdefc8</li>'+
                                    '<li>#fee5a3</li>'+
                                    '<li>#feda7a</li>'+
                                    '<li>#ffba00</li>' + '<!--middle-->'+
                                    '<li>#dba001</li>'+
                                    '<li>#b78602</li>'+
                                    '<li>#926b00</li>'+

                                    '<li>#ffffe8</li>' + '<!--yellow-->'+
                                    '<li>#fdfdc8</li>'+
                                    '<li>#fefda3</li>'+
                                    '<li>#fefc7a</li>'+
                                    '<li>#ffff00</li>' + '<!--middle-->'+
                                    '<li>#dbd901</li>'+
                                    '<li>#b7b602</li>'+
                                    '<li>#818201</li>'+

                                    '<li>#efffe8</li>' + '<!--green-->'+
                                    '<li>#d9fdc8</li>'+
                                    '<li>#c2fea3</li>'+
                                    '<li>#a7fe7a</li>'+
                                    '<li>#00ff00</li>' + '<!--middle-->'+
                                    '<li>#4adb01</li>'+
                                    '<li>#3db702</li>'+
                                    '<li>#2b8402</li>'+

                                    '<li>#e8fffc</li>' + '<!--mint-->'+
                                    '<li>#c8fdf5</li>'+
                                    '<li>#a3feef</li>'+
                                    '<li>#7afee6</li>'+
                                    '<li>#00ffd5</li>' + '<!--middle-->'+
                                    '<li>#48cfad</li>'+
                                    '<li>#02b799</li>'+
                                    '<li>#00927d</li>'+

                                    '<li>#e8f8ff</li>' + '<!--sky blue-->'+
                                    '<li>#c8eefd</li>'+
                                    '<li>#a3e6fe</li>'+
                                    '<li>#7adcfe</li>'+
                                    '<li>#00baff</li>' + '<!--middle-->'+
                                    '<li>#01a1db</li>'+
                                    '<li>#0286b7</li>'+
                                    '<li>#006892</li>' +

                                    '<li>#e8ecff</li>' + '<!--blue-->'+
                                    '<li>#c8d4fd</li>'+
                                    '<li>#a3b9fe</li>'+
                                    '<li>#7a9cfe</li>'+
                                    '<li>#0000ff</li>' + '<!--middle-->'+
                                    '<li>#0136db</li>'+
                                    '<li>#022eb7</li>'+
                                    '<li>#002192</li>'+

                                    '<li>#f4e8ff</li>' + '<!--pupple-->'+
                                    '<li>#e4c8fd</li>'+
                                    '<li>#d0a3fe</li>'+
                                    '<li>#ba7afe</li>'+
                                    '<li>#8000ff</li>' + '<!--middle-->'+
                                    '<li>#6e01db</li>'+
                                    '<li>#5c02b7</li>'+
                                    '<li>#4c0092</li>'+
                                '</ul>'+
                            '</div>'+
                            '<button class="align_left"><i class="fa fa-align-left"></i></button>'+
                            '<button class="align_center"><i class="fa fa-align-center"></i></button>'+
                            '<button class="align_right"><i class="fa fa-align-right"></i></button>'+
                        '</div>'+
                    '</div>'+
                    '</li>'
        
        $('#editor_preview_box').append(text_editor);
        $(".basic").selectOrDie(); //seleter load script
    });
     
    /////////////////////////////////////////////////////////
    //      add text end
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      text editor tools start
    /////////////////////////////////////////////////////////

    
    $(document).on('change', '.select_box', function () //change font size
    {
        $(this).parent('.textarea_editor').prev('.editor_body_text').css({ 'font-size': $(this).find('option:selected').text() });
    });

    $(document).on('click', '.text_bold', function () //change font weight
    {
        if ($(this).parent('.textarea_editor').prev('.editor_body_text').css("font-weight") == "400")
        {
            $(this).parent('.textarea_editor').prev('.editor_body_text').css({ 'font-weight': '600' });
        } else
        {
            $(this).parent('.textarea_editor').prev('.editor_body_text').css({ 'font-weight': '400' });
        }
    });

    $(document).on('click', '.text_italic', function () //change font italic
    {
        if ($(this).parent('.textarea_editor').prev('.editor_body_text').css('font-style') == 'normal' ) 
        {
            $(this).parent('.textarea_editor').prev('.editor_body_text').css({ 'font-style': 'italic' });
        } else {
            $(this).parent('.textarea_editor').prev('.editor_body_text').css({ 'font-style': 'normal' });
        }
    });
    $(document).on('click', '.text_strike', function () //change font strike
    {
        if ($(this).parent('.textarea_editor').prev('.editor_body_text').css('text-decoration') == 'none' ||
            $(this).parent('.textarea_editor').prev('.editor_body_text').css('text-decoration') == 'underline')
        {
            $(this).parent('.textarea_editor').prev('.editor_body_text').css({ 'text-decoration': 'line-through' });
        } else {
            $(this).parent('.textarea_editor').prev('.editor_body_text').css({ 'text-decoration': 'none' });
        }
    });
    $(document).on('click', '.text_underline', function () //change font underline
    {
        if ($(this).parent('.textarea_editor').prev('.editor_body_text').css('text-decoration') == 'none' ||
            $(this).parent('.textarea_editor').prev('.editor_body_text').css('text-decoration') == 'line-through')
        {
            $(this).parent('.textarea_editor').prev('.editor_body_text').css({ 'text-decoration': 'underline' });
        } else {
            $(this).parent('.textarea_editor').prev('.editor_body_text').css({ 'text-decoration': 'none' });
        }
    });

    $(document).on('click', '.align_left', function () //change txt align left
    {
        $(this).parent('.textarea_editor').prev('.editor_body_text').css({ 'text-align': 'left' });
    });
    $(document).on('click', '.align_center', function () //change txt align center
    {
        $(this).parent('.textarea_editor').prev('.editor_body_text').css({ 'text-align': 'center' });
    });
    $(document).on('click', '.align_right', function () //change txt align right
    {
        $(this).parent('.textarea_editor').prev('.editor_body_text').css({ 'text-align': 'right' });
    });
    /////////////////////////////////////////////////////////
    //      text editor tools end
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      delete bt hover start
    /////////////////////////////////////////////////////////

    $(document).on('mouseenter', '.text_editor', function () // textarea delete bt hover
    {
        $(this).find('.con_delete_bt').stop().fadeIn(150);
        $(this).children('.contents_div').css({ "border": "1px solid #d1d1d1" });
    });
    $(document).on('mouseleave', '.text_editor', function () // textarea delete bt hover
    {
        $(this).find('.con_delete_bt').stop().fadeOut(150);
        $(this).children('.contents_div').css({ "border": "1px solid #fff" });
    });


    $(document).on('mouseenter', '.preview_img', function () // preview_img delete bt hover
    {
        $(this).find('.con_delete_bt').stop().fadeIn(150);
        $(this).children('.contents_div').css({ "border": "1px solid #d1d1d1" });
    });
    $(document).on('mouseleave', '.preview_img', function () // preview_img delete bt hover
    {
        $(this).find('.con_delete_bt').stop().fadeOut(150);
        $(this).children('.contents_div').css({ "border": "1px solid #fff" });
    });


    $(document).on('mouseenter', '.embed_contents', function () { // embed contents delete bt hover
        $(this).children('.con_delete_bt').stop().fadeIn(150);
        $(this).css({ "border": "1px solid #d1d1d1" });
    });
    $(document).on('mouseleave', '.embed_contents', function () { // embed contents delete bt hover
        $(this).children('.con_delete_bt').stop().fadeOut(150);
        $(this).css({ "border": "1px solid #fff" });
    });

    /////////////////////////////////////////////////////////
    //      delete bt hover end
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      contents delete btn start
    /////////////////////////////////////////////////////////

    $(document).on('click', '.con_delete_bt', function () //text area delete event
    {
        $(this).parents('.text_editor').fadeOut(200, function() { $(this).remove(); });
        $(this).parents('.embed_contents').fadeOut(200, function() { $(this).remove(); });
        $(this).parents('.preview_img').fadeOut(200, function() { $(this).remove(); });
    });

    /////////////////////////////////////////////////////////
    //      contents delete btn end
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      color picker start
    /////////////////////////////////////////////////////////
    $(document).on('focus', '.editor_body_text', function () // text editor focus view
    {
        $(this).next('.textarea_editor').stop().fadeIn(150);
    });

    $(document).on('click', '.color_picker > ul > li', function () //change text color change
    {
        $(this).parents('.textarea_editor').prev('.editor_body_text').css({ "color": $(this).text() });
        $(this).parent('ul').prev('.selected_color').css({ "background": $(this).text() });
        $(this).parent('ul').hide();
    });

    $(document).ready(function () { //outside click toggle
        $(document).click(function (e) {
            var subject = $(".text_editor");

            if (e.target.id != subject.attr('id') && !subject.has(e.target).length) {
                $('.textarea_editor').stop().fadeOut(150);
            }
        });
    });

    $(document).on('click', '.selected_color', function () //color picker toggle
    {
        $(this).next('ul').toggle();
    });

    $(document).on('click', '.color_picker', function () // color picker palete making
    {
        $('.color_picker > ul > li').each(function ()
        {
            $(this).css("background", $(this).text());
        });
    });
    /////////////////////////////////////////////////////////
    //      color picker end
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      text editor tools end
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      editor next contents call ajax start
    /////////////////////////////////////////////////////////
    $(document).on('click','.next_bt',function ()
    {
        var check_id = $(this).attr('id');
        console.log(check_id);
        $.ajax({
            type: "POST",
            url: "php/ajax/editor_ajax.php", //이페이지에서 중복체크를 한다
            data: "check_id=" + check_id,//test.asp에 id 값을 보낸다
            cache: false,
            success: function (data) {
                $('#next_pop_body').html('').append(data).fadeIn(300); //해당 내용을 보여준다
                $('.dark_overlay').fadeIn(300);
            }
        });
    });

    $('.dark_overlay').click(function () {
        $('.dark_overlay').stop().fadeOut(300);
        $('#next_pop_body').stop().fadeOut(300).html('');
    });
    $(document).on('click','.cancel_bt, .editor_popup_cancel',function()
    {
        $('.dark_overlay').stop().fadeOut(300);
        $('#next_pop_body').stop().fadeOut(300).html('');
    })

    /////////////////////////////////////////////////////////
    //      editor next contents call ajax end
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    //      editor change thumbnail start
    /////////////////////////////////////////////////////////
    $(function(){
        $(document).on('click','#change_img_bt', function(){
            $('#change_img_real').click();
        });
    });
    /////////////////////////////////////////////////////////
    //      editor change thumbnail start
    /////////////////////////////////////////////////////////



});
/*----------------------------editor end----------------------------*/
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
