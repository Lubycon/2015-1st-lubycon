//----------------------------creat account statt----------------------------

var regx = /[`;',./~!@\#$%<>^&*\()\-=+_\’]/gi; //special letters
var space = / /gi //space check
var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/; //email check
var nick_check = /^[A-Za-z0-9+]*$/;; //only alpabet, number

var email_com; //for submit able

$(document).on("blur", "#email_id", function () {
    console.log('email blur');
    /////////////////////////////////////////////////////////
    //      e-mail check start
    /////////////////////////////////////////////////////////

      
    var current_id = '#' + $(this).attr('id');
    var value = $(this).val();

    if ($(this).val() == '') { //blank case

        $(this).css({ 'border-left': '2px solid #D5D5D5', 'width': '190px' });
        $(this).next().removeClass();

        $('#email_check').text('').show();
        email_com = false; 

    } else if (regex.test($(this).val()) === false) { //wrong email address to regex

        $(this).css({ 'border-left': '5px solid #ea4126', 'width': '187px' });
        $(this).next().removeClass();
        $(this).next().addClass('fa fa-times');

        $('#email_check').text('wrong email adress').show();
        email_com = false
    }
    else { //complite go ajax
        //enter to AJAX Logic by SsaRu
        $.ajax({
            type: "POST",
            url: "php/ajax/overlap_check.php",
            data: 'data=' + value + '&' + 'id=email',
            cache: false,
            success: function (data) {
                if (data == '') { //void value
                    console.log('DB return value empty');
                    console.log(data);
                    $(current_id).css({ 'border-left': '2px solid #D5D5D5', 'width': '190px' });
                    $(current_id).next().removeClass();
                    $('#email_check').text('').show();
                    email_com = false;
                }
                else if (data == 1) { //overlapping
                    console.log('DB return value overlapping');
                    console.log(data);
                    $(current_id).css({ 'border-left': '5px solid #ea4126', 'width': '187px' });
                    $(current_id).next().removeClass();
                    $(current_id).next().addClass('fa fa-times');

                    $('#email_check').text('Overlapping').show();
                    email_com = false;
                }
                else if (data == 0) { //Non-overlapping
                    console.log('DB return value non-overlapping, done');
                    console.log(data);
                    $(current_id).css({ 'border-left': '5px solid #8ec89a', 'width': '187px' });
                    $(current_id).next().removeClass();
                    $(current_id).next().addClass('fa fa-check');
                    $(current_id).val($(current_id).val().toLowerCase()); // lowercase and uppercase same
                    $('#email_check').text('').show();

                    email_com = true;
                }
                else {
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
/////////////////////////////////////////////////////////
//      password check end
/////////////////////////////////////////////////////////
$(document).on("blur", "#pass_id", function () {
    //console.log($(this).val().match('null') == null == false)
    //console.log(regx.test($(this).val()));
    if ($(this).val() == '') { //blank
        $(this).css({ 'border-left': '2px solid #D5D5D5', 'width': '190px' });
        $(this).next().removeClass();

        pass_com = false; 

        $('#pass_check').text('').show();

    } else if ($(this).val().match(/[^0-9]/g) == null) //문자한개필요
    {
        $(this).css({ 'border-left': '5px solid #ea4126', 'width': '187px' });
        $(this).next().removeClass();
        $(this).next().addClass('fa fa-times');

        pass_com = false;

        $('#pass_check').text('you must use least one alpabet').show();

    } else if ($(this).val().match(regx)) //특수문자 불가
    {
        $(this).css({ 'border-left': '5px solid #ea4126', 'width': '187px' });
        $(this).next().removeClass();
        $(this).next().addClass('fa fa-times');

        pass_com = false;

        $('#pass_check').text('you can not write !@#%').show();

    } else if ($(this).val().match(space) || $(this).val().match('null') == null == false) //공백 불가
    {
        $(this).css({ 'border-left': '5px solid #ea4126', 'width': '187px' });
        $(this).next().removeClass();
        $(this).next().addClass('fa fa-times');

        pass_com = false;

        $('#pass_check').text('you can not write null').show();

    } else if ($(this).val().length < 8 || $(this).val().length > 20) {  // 8 to 20 letters
        $(this).css({ 'border-left': '5px solid #ea4126', 'width': '187px' });
        $(this).next().removeClass();
        $(this).next().addClass('fa fa-times');

        pass_com = false;

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

        if ($(this).val() == $('#re_pass_id').val()) {
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
$(document).on("blur", "#re_pass_id", function () { // repeat pass check
    if ($(this).val() == '') { //blank
        $(this).css({ 'border-left': '2px solid #D5D5D5', 'width': '190px' });
        $(this).next().removeClass();

        pass_com = false;

        $('#pass_check').text('').show();
    } else if ($(this).val() != $('#pass_id').val()) { //not same
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
$(document).on("blur", function () {
    $('#now_pass_id').on("blur", function () //account setting page now password check
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
});
/////////////////////////////////////////////////////////
//      now pass check end
/////////////////////////////////////////////////////////


//----------------------------end creat account password logic----------------------------

var abuse_name = new Array('sex', 'bitch', 'pussy', 'cunt', 'fuck', 'fucking','zepot');

//----------------------------creat account nick name logic----------------------------
/////////////////////////////////////////////////////////
//      nick name check start
/////////////////////////////////////////////////////////

var nick_com;
$(document).on("blur", "#nick_id", function () {

    var value = $(this).val();
    var current_id = '#' + $(this).attr('id');

    //console.log(jQuery.inArray($('#nick_id').val(), nick_array));
    if ($(this).val() == '') { //blank
        $(this).css({ 'border-left': '2px solid #D5D5D5', 'width': '190px' });
        $(this).next().removeClass();

        nick_com = false; 

        $('#nick_check').text('').show();
        console.log('blank');


    }
 else if (jQuery.inArray($(this).val(), abuse_name) >= 0) { //abuse names
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

    } else if (!nick_check.test($('#nick_id').val())) //영어,숫자 외 불가
    {
        $('#nick_id').css({ 'border-left': '5px solid #ea4126', 'width': '187px' });
        $('#nick_id').next().removeClass();
        $('#nick_id').next().addClass('fa fa-times');

        $('#nick_check').text('you can write only english and number').show();

        nick_com = false;

    } else { //complite

        //enter to AJAX Logic by SsaRu
        $.ajax({
            type: "POST",
            url: "php/ajax/overlap_check.php",
            data: 'data=' + value + '&' + 'id=nick',
            cache: false,
            success: function (data) {
                if (data == "")  //void value
                {
                    console.log("DB return value empty");

                    $(current_id).css({ 'border-left': '2px solid #D5D5D5', 'width': '190px' });
                    $(current_id).next().removeClass();
                    nick_com = false;

                    $('#nick_check').text('').show();

                }
                else if (data == 1)  //overlapping
                {
                    console.log('DB return value overlapping');

                    $(current_id).css({ 'border-left': '5px solid #ea4126', 'width': '187px' });
                    $(current_id).next().removeClass();
                    $(current_id).next().addClass('fa fa-times');

                    $('#nick_check').text('Overlapping')
                    nick_com = false;

                }
                else if (data == 0)  //non-overlapping
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
//----------------------------submit able event----------------------------

    /////////////////////////////////////////////////////////
    //      account submit event start
    /////////////////////////////////////////////////////////

$(document).on("click blur", '#create_account_area', function () //submit able event
{
    //console.log('email');console.log(email_com == true);
    //console.log('pass'); console.log(pass_com == true);
    //console.log('nick'); console.log(nick_com == true);
    //console.log('checkbox'); 
    //console.log($('.check_box:checked').length == 2);
    //console.log(!!('#nick_id').match(nick_check));

        if (email_com && nick_com && pass_com && $('.check_box:checked').length == 2) { //account setting submit to able
            $('.account_submit').removeAttr('disabled');
            $('.account_submit').css('background', '#47bf7e');
        } else {
            $('.account_submit').attr('disabled', 'disabled');
            $('.account_submit').css('background', '#c1c1c1');
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
        /* 이거 뭔지 모르겠어서 잠금
        if (email_com && $('.find_submit').attr('class') == 'find_submit') //account setting
        {
            $('.find_submit').removeAttr('disabled');
            $('.find_submit').css('background', '#48cfad');
        } else {
            $('.find_submit').attr('disabled', 'disabled');
            $('.find_submit').css('background', '#c1c1c1');
        }
        */
    });
    /////////////////////////////////////////////////////////
    //      account submit event end
    /////////////////////////////////////////////////////////
//----------------------------end submit able event----------------------------

/*----------------------------end creat account----------------------------*/
