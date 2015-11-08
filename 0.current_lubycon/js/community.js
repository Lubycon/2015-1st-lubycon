$(function () {
    $(document).scroll(function () //community subject sticky event
    {
        if($(document).find('#post_subject_area'))
        {
            if ($(document).scrollTop() > 206) {
                $('#post_subject_area').css({ "position": "fixed", "top": "50px", "z-index": "2" });
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

    $(document).scroll(function ()
    {
        var scrollend = $("#post_box").height() + 30 - $("#post_banner").height();
        if($(document).find("#post_banner"))
        { 
            console.log(scrollend);
            if ($(document).scrollTop() > 214 && $(document).scrollTop() < 1152) {//변수로 바꿔야
                $("#post_banner").css({ "position": "fixed", "top": "100px" });
            }
            else {
                $("#post_banner").css({ "position": "absolute", "top": "0" });
            };
        }
        else{
            return true;
        }; 
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

$(function(){
    $('.note-codable').focus(function(){
        $('.note-editing-area').css('border','1px solid #48cfad');
    });
});

/*--------------------------------community editor start-------------------------------*/