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

    $(document).scroll(function (){
        var scrollend = $("#post_banner").parent().next().offset().top - $(window).height();
        var banner_position = 
        $("#post_banner").parent().next().offset().top 
        - $("#post_banner").height() 
        - $("#navsel").height() 
        - $("#main_figure").height() 
        -30;

        if($(document).find("#post_banner")){ 
            if ($(document).scrollTop() > 214 && $(document).scrollTop() < scrollend){
                $("#post_banner").css({ "position": "fixed", "top": "100px" });
            }
            else if($(document).scrollTop() > scrollend){
                $("#post_banner").css({ "position": "absolute", "top": banner_position + "px" });
                $("#post_banner").css({ "height" : $(window).height() + "px"})
            }
            else {
                $("#post_banner").css({ "position": "absolute", "top": "0px" });
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