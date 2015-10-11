$(function () {
    $(document).scroll(function () //community subject sticky event
    {
        if($(document).find('#post_subject_area'))
        {
            if ($(document).scrollTop() > 206) {
                $('#post_subject_area').css({ "position": "fixed", "top": "45px", "z-index": "2" })
            }
            else {
                $('#post_subject_area').css({ "position": "absolute", "top": "50px" });
            }  
        }
        else{
            console.log("");
            return true;
        }
        
    });

    $(document).scroll(function () //community view banner
    {
        if($(document).find("#post_banner")){
            if ($(document).scrollTop() > 279 && $(document).scrollTop() < $('#comment_more_box').offset().top - 430) {
                $('#post_banner').css({ "position": "fixed", "top": "100px" });
            } else if ($(document).scrollTop() < 349) {
                $('#post_banner').css({ "position": "absolute", "top": "0" + "px" });
            } else if ($(document).scrollTop() > $('#comment_more_box').offset().top - 570) {
                $('#post_banner').css({ "position": "absolute", "top": $('#comment_more_box').offset().top - 730 + "px" });
            };
        }
        else{
            console.log("");
            return true;
        }
        //console.log($('#comment_more_box').offset().top - 757);       
    });



    var toggle_count = 0;
    $('#con_like_bt').click(function () // like button toggle
    {
        switch(toggle_count){
            case 0 :
                $('#con_like_bt').css('background', '#ec6446'); 
                $("#like_alert").css('display','inline-block');
                $("#like_alert").attr("class","luby_alert fadeIn animated");
                setTimeout("hideAlert()",1500);
                toggle_count++;
            break;
            case 1 :
                $('#con_like_bt').css('background', '#c1c1c1');
                toggle_count = 0;
            break;
        }
    });
});
function hideAlert(){
    $("#like_alert").attr("class","luby_alert fadeOut animated");
    $("#like_alert").stop().fadeOut(1000);
};
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

$(function(){
    $('.note-codable').focus(function(){
        $('.note-editing-area').css('border','1px solid #48cfad');
    });
});

/*--------------------------------community editor start-------------------------------*/