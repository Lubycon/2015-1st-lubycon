var ajax_eventing = false;

function call_comments() {
    $.ajax
    ({
        url: "php/ajax/call_comments_ajax.php",
        processData: false,
        contentType: false,
        //data: formData,
        type: "POST",
        cache: false,
        success: function (data)
        {
            $("#comment_list").append(data);
            ajax_eventing = false;
        }
    })
};

$("#comment_more_bt").click(function()
{
    
    if (ajax_eventing == false)
    {
        ajax_eventing = true;
        call_comments();
    }
});