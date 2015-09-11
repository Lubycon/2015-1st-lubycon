$(function () {
    $(document).scroll(function () //community subject event
    {
        if ($(document).scrollTop() > 260) {
            $('#post_subject_area').css({ "position": "fixed", "top": "45px", "z-index": "2" })
        } else {
            $('#post_subject_area').css({ "position": "absolute", "top": "50px" });
        }
    });

    $(document).scroll(function () //community view banner
    {
        //console.log($('#comment_more_box').offset().top - 757);
        if ($(document).scrollTop() > 350 && $(document).scrollTop() < $('#comment_more_box').offset().top - 430) {
            $('#post_banner').css({ "position": "fixed", "top": "100px" });
        } else if ($(document).scrollTop() < 349) {
            $('#post_banner').css({ "position": "absolute", "top": "0" + "px" });
        } else if ($(document).scrollTop() > $('#comment_more_box').offset().top - 430) {
            $('#post_banner').css({ "position": "absolute", "top": $('#comment_more_box').offset().top - 757 + "px" });
        };
    });



    var i = 0;
    $('#con_like_bt').click(function () // like button toggle
    {
        if (i == 0) {
            $('#con_like_bt').css('background', '#ec6446');
            i++;
        } else {
            $('#con_like_bt').css('background', '#c1c1c1');
            i = 0;
        }
    });
});
/*--------------------------------community editor start-------------------------------*/
$(function(){
    $('#file_import_bt').click(function () {
        $('#file_import_com').click();
    });

    $('#file_import_com').change(function () {
        $('#file_text_com').val($(this).val());
    });
});

$(function () {
    $('.tool_com').hover(function ()
    {
        $(this).children('.tooltip_bt').stop().fadeIn(300).css("display", "inline-block");
    }, function () {
        $(this).children('.tooltip_bt').stop().fadeOut(300);
    });
});
/*--------------------------------community editor start-------------------------------*/