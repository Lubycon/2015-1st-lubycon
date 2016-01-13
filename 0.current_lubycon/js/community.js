/*--------------------------------postbox sticky start-------------------------------*/
$(function(){
    if($("#main_board").length != 0){
        var postBanner = $("#post_banner");
        var bannerStop = $("#main_board").offset().top - $(window).height();
        $(document).scroll(function(){
            if($(document).scrollTop() >= bannerStop){
                postBanner.css({"position":"absolute", "top":"1126px"});
                return;
            }
            else{
                return;
            }
        });
    }else{
        return;
    }; 
});
/*--------------------------------postbox sticky end-------------------------------*/

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