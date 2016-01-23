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

$(document).ready(function(){
    $('#main_work_space').summernote({
        minHeight:null,
        maxHeight:null,
        focus:true,
        placeholder: 'Write here...',
        toolbar: [
            // [groupName, [list of button]]
            ['style',['style']],
            ['fontsize', ['fontname', 'fontsize']],
            ['style', ['bold', 'italic', 'underline', 'strikethrough', 'clear']],
            ['font', ['superscript', 'subscript']],            
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']],
            ['insert', ['picture', 'video', 'link', 'table', 'hr']],
            ['misc', ['help']],
        ],
        fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Source Sans Pro'],
    });
});
/*--------------------------------community editor end-------------------------------*/