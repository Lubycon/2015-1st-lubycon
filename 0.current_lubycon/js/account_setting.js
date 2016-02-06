$(function () //account setting script
{
    

    $('#change_pass').click(function () //change pass remove attr
    {
        if($('#now_pass_id').attr('disabled'))
        {
            $('#now_pass_id , #pass_id ,#re_pass_id').removeAttr('disabled');
            $('#change_pass').text('Not change Password');
            $('#change_pass').css({'background':'#c1c1c1 ','margin-left':'65px'});
        }else
        {
            $('#now_pass_id , #pass_id ,#re_pass_id').attr('disabled', 'disabled');
            $('#change_pass').text('change Password');
            $('#change_pass').css({ 'background': '#48CFAD ', 'margin-left': '75px' });
            $('#now_pass_id , #pass_id ,#re_pass_id').val('').css({ 'border-left': '2px solid #D5D5D5', 'width': '190px' }).next().removeClass();
            $('#pass_check, #now_pass_check').text('').show();
        }
    });
    

    /* 안씀
    $('#pass ,#repeat_pass, #repeat_pass_again').blur(function () //change pass border color
    {

        // id_overlapping Logic
        // 추가적인 비밀번호 로직 필요
        var data = $(this).val();
        var Id = $(this).attr('id');
        var CurrentId = '#'+Id;

        $.ajax({
            type:"POST",
            url:"./php/overlap_check.php",
            data:'check='+ data ,
            cache: false,
            success: function(data){

                if(data == "")
                {   console.log('empty');
                    $(CurrentId).css({ 'border-left': '2px solid #D5D5D5', 'width': '190px' });
                    $(CurrentId).next(i).removeClass();
                }
                else
                {
                    if(data == 1)//overlapping
                    {
                        console.log('overlap');
                        $(CurrentId).css({ 'border-left': '2px solid #D5D5D5', 'width': '190px' });
                        $(CurrentId).next(i).removeClass();
                        $(CurrentId).next(i).addClass('fa fa-times');
                    }
                    else if(data == 0)
                    {
                        console.log('non-overlap');
                        $(CurrentId).css({ 'border-left': '5px solid #8ec89a', 'width': '187px' });
                        $(CurrentId).next(i).removeClass();
                        $(CurrentId).next(i).addClass('fa fa-check');
                    }
                    else
                    {
                        console.log("exception");
                    }
                }
            }

        });

    });
    */
    var i = 1;

    $('#lang_plus').click(function () //clone language div and change id
    {
        if(i < 4){
            $("#clone_div").append('<div id="lang_clone"></div>');
            $("#lang_clone").append('<label>&nbsp;</label>');
            $('#lang_input_id').clone(true).appendTo('#lang_clone');
            $('#lang_option_id').clone(true).appendTo('#lang_clone');
            $("#lang_clone").append('<span id="lang_minus_id" class="lang_minus"><i class="fa fa-minus-circle"></i></span>');
            $('#lang_public_id').clone(true).appendTo('#lang_clone');


            $('#lang_clone > #lang_input_id').attr('id', 'lang_input_' + i);
            $('#lang_clone > #lang_option_id').attr('id', 'lang_option_' + i);
            $('#lang_clone > #lang_public_id').attr('id', 'lang_public_' + i).css("margin-left","70px");
            $('#lang_clone > #lang_minus_id').attr('id', 'lang_minus_' + i);

            $("#lang_clone").append('<br/>');

            $('#clone_div > #lang_clone').attr('id', 'lang_clone_' + i);
            i++; //int plus
        }
        else{
            alert("Sorry, You can not add language more than 4 things.");
            i = i;
            return true;
        }
    });

    $(document).on("click", ".lang_minus", function () {
        $(this).parent().remove();
        i--; //int minus
        // clone div remove
    });

});

$(function () {

    $('#file_bt').click(function () // input file fake bt event
    {
        $('#file_hide').click();
    });
    $('#file_hide').change(function () {
        $('#file_text').val($(this).val());
    });
});

// input file preview
$.fn.setPreview = function (opt) {
    "use strict"
    var defaultOpt = {
        inputFile: $(this),
        img: null,
        w: 216,
        h: 216
    };
    $.extend(defaultOpt, opt);

    var previewImage = function () {
        if (!defaultOpt.inputFile || !defaultOpt.img) return;

        var inputFile = defaultOpt.inputFile.get(0);
        var img = defaultOpt.img.get(0);

        // FileReader
        if (window.FileReader) {
            // image ÆÄÀÏ¸¸
            if (!inputFile.files[0].type.match(/image\//)) return;

            // preview
            try {
                var reader = new FileReader();
                reader.onload = function (e) {
                    img.src = e.target.result;
                    img.style.width = defaultOpt.w + 'px';
                    img.style.height = defaultOpt.h + 'px';
                    img.style.display = '';
                }
                reader.readAsDataURL(inputFile.files[0]);
            } catch (e) {
                // exception...
            }
            // img.filters (MSIE)
        } else if (img.filters) {
            inputFile.select();
            inputFile.blur();
            var imgSrc = document.selection.createRange().text;

            img.style.width = defaultOpt.w + 'px';
            img.style.height = defaultOpt.h + 'px';
            img.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enable='true',sizingMethod='scale',src=\"" + imgSrc + "\")";
            img.style.display = '';
            // no support
        } else {
            // Safari5, ...
        }
    };

    // onchange
    $(this).change(function () {
        previewImage();
    });
};


$(document).ready(function () {
    var opt = {
        img: $('#img_preview'),
        w: 'auto',
        h: 216
    };

    $('#file_hide').setPreview(opt);
});

////////////////////////////delete button interaction start
$(function(){
    ////////cancel bt start/////////////////////////////////
    $('.dark_overlay, .index_cancel_bt').on("click touchend",function (){
        eventHandler(event,$(this));
        $('.dark_overlay').stop().fadeOut(200);
        $('#confirm_btAlert').stop().fadeOut(200);
    });
    $(".index_confirm_bt").on("click touchend",function(){
        eventHandler(event,$(this));
        $("#confirm_btAlert").css("display","none");
        $("#success_btAlert").css("display","inline-block");
        $("#success_btAlert").attr("class","lubyAlert zoomIn animated");
        setTimeout("removeAlert()",1500);
    })
    //////////cancel bt end/////////////////////////////////
});
function eventHandler(event, selector) {//
    event.stopPropagation();
    event.preventDefault();
    if (event.type === 'touchend'){
        selector.off('click');
    }
};
function removeAlert(){
    $("#success_btAlert").fadeOut(500);
    $(".dark_overlay").fadeOut(500);
}

////////////////////////////delete button interaction end
