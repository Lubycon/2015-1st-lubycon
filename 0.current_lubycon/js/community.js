/*--------------------------------postbox sticky start-------------------------------*/
$(function(){
    if($("#main_board").length != 0){
        var postBanner = $("#post_banner"),
            valueMain = $("#author_main").outerHeight(true),
            valueSub = $("#author_sub").outerHeight(true),
            bannerStop = $("#main_board").position().top - (valueMain + valueSub) - 101,
            bannerPosition = (bannerStop-101-35).toString()+"px";
            console.log(valueMain, valueSub, bannerStop);

        $(document).scroll(function(){
            if($(document).scrollTop() >= bannerStop){
                postBanner.css({"position":"absolute", "top": bannerPosition});
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
    if($("#main_work_space").length != 0){
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
        return true;
    }else{
        return false;
    }
    
});
/*--------------------------------community editor end-------------------------------*/