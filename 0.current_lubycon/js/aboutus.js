$(document).on('mouseenter', '.descript_lubycon', function () {
    $(".descript_lubycon .lubycon_logo").stop().animate(
        {
            "width": "+=5"
        }, 200
        );
    $(".descript_article").stop().animate(
        {
            "padding-top": "-=5"
        }, 200
        );
});
$(document).on('mouseleave', '.descript_lubycon', function () {
    $(".descript_lubycon .lubycon_logo").stop().animate(
        {
            "width": "-=5"
        }, 200
        );
    $(".descript_article").stop().animate(
        {
            "padding-top": "+=5"
        }, 200
        );
});
$(document).on('mouseenter','.contactus_mailbt', function ()
{
    $(this).stop().animate(
        {
            "padding" : "0px 10px"
        },200
        );
});
$(document).on('mouseleave', '.contactus_mailbt', function () {
    $(this).stop().animate(
        {
            "padding": "0px"
        }, 200
        );
});