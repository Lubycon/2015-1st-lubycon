function eventHandler(event, selector) {//
    event.stopPropagation();
    event.preventDefault();
    if (event.type === 'touchend'){
        selector.off('click');
    }
};
/*--------------------------------postbox sticky start-------------------------------*/
$(function(){
    if(($(window).width() > 1024) && ($("#main_board").length != 0)){
        var postBanner = $("#post_banner"),
            valueMain = $("#author_main").outerHeight(true),
            valueSub = $("#author_sub").outerHeight(true),
            bannerStop = $("#main_board").position().top - (valueMain + valueSub) - 101,
            bannerPosition = (bannerStop-101-35).toString()+"px";
        $("#comment_box").on("resize",function(){
            bannerStop = $("#main_board").position().top - (valueMain + valueSub) - 101,
            bannerPosition = (bannerStop-101-35).toString()+"px";
            postBanner.css({ "position": "fixed", "top": "100px" });
        });
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
/*--------------------------------community write button start-----------------------------*/
$(function(){
    if($("#write_bt").length != 0){
        if("length true");
        $("#write_bt").parent("a").on("click touchend", function(event){
            eventHandler(event,$(this));
            var url = "./index.php?1=community&2=community_write";    
            $(location).attr('href',url);
            return;
        });
    }else{
        return;
    }
});
/*--------------------------------community write button end-------------------------------*/

/*--------------------------------community editor start-------------------------------*/
$(function(){
    $('#file_import_bt').on("click touchend",function() {
        eventHandler(event,$(this));
        $('#file_import_com').click();
    });
    $('#file_import_com').change(function () {
        $('#file_text_com').val($(this).val());
    });
});

$(document).ready(function(){
    if($("#main_work_space").length != 0){
        $('#main_work_space').summernote({
            minHeight: 200,
            maxHeight:null,
            focus:true,
            placeholder: 'Write here...',
            toolbar: [
                // [groupName, [list of button]]
                ['style',['style']],
                ['fontsize', ['fontsize']],
                ['font', ['superscript', 'subscript']],
                ['style', ['bold', 'italic', 'underline', 'strikethrough', 'clear']],    
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['height', ['height']],
                ['insert', ['picture', 'video', 'link', 'table', 'hr']],
                ['misc', ['help']],
            ]
        });
        return true;
    }else{
        return false;
    }
    
});
/*--------------------------------community editor end-------------------------------*/