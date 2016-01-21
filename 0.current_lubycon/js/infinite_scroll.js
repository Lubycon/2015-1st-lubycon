var ajax_eventing = false;

$(document).scroll(function ()
{
    var window_position = $(document).height() - $(document).scrollTop();
    var ajax_call_boundary = 150;

    if (window_position <= ($(window).height() + ajax_call_boundary) && ajax_eventing == false)
    {
        console.log('down ajax call');
        ajax_eventing = true;
        down_call_contents();

    } else if ( $(document).scrollTop() <= ajax_call_boundary )
    {

        console.log('up ajax call');

    }
});

function down_call_contents() {
    $.ajax
    ({
        url: "php/ajax/infinite_scroll_ajax.php",
        processData: false,
        contentType: false,
        //data: formData,
        type: "POST",
        cache: false,
        success: function (data)
        {
            $("#contents_box ul").append(data);
            ajax_eventing = false;
           
        }
    })
};