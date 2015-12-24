
/*----------------------------editor start----------------------------*/
/////////////////////////////////////////////////////////
//      editor content_name start
/////////////////////////////////////////////////////////
$(function ()
{
    var editor_content_name = $('#editor_content_name');

    editor_content_name.focus(function () {
        if(editor_content_name.val() == 'Your Contents Name') {
            editor_content_name.val('');
        }
    });
    editor_content_name.blur(function () {
        if (editor_content_name.val() == '') {
            editor_content_name.val('Your Contents Name');
        }
    });
});
//////////text input auto resize start-------/////////
function Expander() {
    this.start = function () {
        $("#editor_content_name").keydown(function(e) {
            this.style.width = 0;
            var newWidth = this.scrollWidth + 5;
            
            if( this.scrollWidth >= this.clientWidth ){
                newWidth += 5;
                this.style.width = newWidth + 'px';
            }
        });
    }
}

$(function() {
    window.app = new Expander();
    window.app.start();
});
//////////text input auto resize end-------/////////
/////////////////////////////////////////////////////////
//      editor content_name end
/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
//      editor nav start
/////////////////////////////////////////////////////////


function editor_gnv_select(gnv_sel)
{
    $("#editor_gnv ol li").removeClass();
    switch (gnv_sel)
    {
        case "edit":
            $("#editor_gnv ol li:nth-child(1)").addClass("editor_selected_gnv");
            break;
        case "call_thumb":
            $("#editor_gnv ol li:nth-child(3)").addClass("editor_selected_gnv");
            break;
        case "call_setting":
            $("#editor_gnv ol li:nth-child(5)").addClass("editor_selected_gnv");
            break;
        default :
            $("#editor_gnv ol li:nth-child(1)").addClass("editor_selected_gnv");
            break;
    }
};
/* gnv function
$(document).ready(function () {
    editor_gnv_select("setting");
});
*/

$(function () {
    $('#editor_aside ol li').hover(function () //aside tools mouse hover event
    {
        $(this).css({ "background": "#666666" });
        $(this).children('i').css({ "color": "#48cfad" });
        $(this).children('.tooltip_bt').stop().fadeIn(300).css("display", "inline-block");
    }, function () {
        $(this).css({ "background": "#555" });
        $(this).children('i').css({ "color": "#333333" });
        $(this).children('.tooltip_bt').stop().fadeOut(300);

    });

    /////////////////////////////////////////////////////////
    //      editor nav end
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    //      img crop start
    /////////////////////////////////////////////////////////
    $(document).on('click', '.preview_img', function () {
        if ($(this).css('border') == '1px solid rgb(255, 255, 255)') {
            $(this).css({ "background": "rgb(255, 255, 255)" }); //css reset
            $(this).css({ "box-shadow": "0px 0px 5px rgba(72, 203, 173, 1)" });
            $(this).removeAttr('id'); // remove all id

            $(this).css({ "border": "1px solid #48cfad" });
            $(this).attr('id', 'selected_img');

            $('#img_crop').removeClass('img_crop_notallow'); //img crop bt able
        } else {
            $(this).css({ "border": "1px solid #ffffff" });
            $(this).css({ "box-shadow": "none" });
            $('#img_crop').addClass('img_crop_notallow'); //img crop bt disable
        }
    });

    /////////////////////////////////////////////////////////
    //      img crop end
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      editor_upload_file start
    /////////////////////////////////////////////////////////

    $('#editor_upload_file').click(function () { //upload file window open
        $('#upload_file_input').click();
    });


    //ajax start
    $(function ()
    {
        $('#upload_file_input').change(function ()
        {
            upload_File_ajax();
        });
    });

    function upload_File_ajax()
    {
        var form = $("#editor_form")[0];
        var formData = new FormData(form);
        $.ajax
        ({
            url: "php/ajax/editor_fileupload.php",
            processData: false,
            contentType: false,
            data: formData,
            type: "POST",
            dataType: 'json',
            cache: false,
            success: function (data)
            {
                console.log('upload succece');
                //console.log(args); arg is uploaded file name
                $("#file_info_filename").text(data["filename"]); //uploaed file name
                $("#file_info_filesize").text(data["filesize"] + "byte"); //uploaded file size
                $("#file_info_fileinside").html(""); //reset box
                for (var i = 0; i < data["zip_inside"].length; i++) { //uploaded zip inside data
                    var for_array = "<li>" + data["zip_inside"][i] + "</li>";
                    $("#file_info_fileinside").append(for_array);
                    
                    if( i >= 10 )
                    {
                        $("#file_info_fileinside").append("<li>..........</li>");
                        break;
                    };
                };
                $("#file_info_fileinside").append("<li>uploaded zip file in " + data["zip_inside"].length + " files</li>");
                file_info_slidedown(); //file_info slide_down function
            },
            error: function (data)
            {
                console.log('upload fail');
                $('#editor_form').trigger("reset");
            },
        })
    }



    /////////////////////////////////////////////////////////
    //      editor_upload_file end
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      preview img start 
    /////////////////////////////////////////////////////////


    $('#editor_preview_upload').click(function () { //preview image window open
        $('#preview_upload_input').click();
    });

    $('#preview_upload_input').on('change', function (e) //preview image upload
    {
        var files = e.target.files;

        $.each(files, function (i, file) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (e) {

                var template = '<li class="preview_img">' +
                               '<div id="contents_div" class="contents_div">' +
                               '<img src="' + e.target.result + '">' +
                               '<button type="button" class="con_delete_bt"><i class="fa fa-times"></i></button>' +
                               '</div>' +
                               '</li>'

                $('#editor_section ul').append(template);
            };
        });
    });
    /////////////////////////////////////////////////////////
    //      editor nav end
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      embed midea 
    /////////////////////////////////////////////////////////

    $('#embed_media').click(function () { // embed code window load
        $('.dark_overlay').stop().fadeIn(100);
        $('#embed_popup').stop().fadeIn(100);
    });


    $('.mic_next_bt').click(function () // embed code event
    {
        var embed_midea =
            '<li class="embed_contents">' +
            $('#embed_textarea').val() +
            '<button type="button" class="con_delete_bt"><i class="fa fa-times"></i></button>' +
            '</li>'

        $('#editor_preview_box').append(embed_midea);
        $('#embed_popup').hide();
        $('.dark_overlay').hide();
    });

    /////////////////////////////////////////////////////////
    //      embed midea 
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      add text 
    /////////////////////////////////////////////////////////

    $('#add_text').click(function () {
        var text_editor =
            '<li class="text_editor disabled">' +
                '<form class="text_editor" action="textarea.html" method="get">' +
                  '<div class="form-group">' +
                    '<button type="button" class="con_delete_bt"><i class="fa fa-times"></i></button>' +
                    '<button type="button" class="con_move_bt"><i class="fa fa-arrows"></i></button>' +
                    '<textarea name="text" class="summernote" id="contents" title="Contents"></textarea>' +
                  '</div>' +
                '</form>'
            '<li>';
                        

        $('#editor_preview_box').append(text_editor);
        $('.summernote').summernote({
            height: 200
        });
        $(".basic").selectOrDie(); //seleter load script
    });

    /////////////////////////////////////////////////////////
    //      add text end
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      delete bt hover start
    /////////////////////////////////////////////////////////

    $(document).on('mouseenter', '.text_editor', function () // textarea delete bt hover
    {
        $(this).find('.con_delete_bt , .con_move_bt').stop().fadeIn(150);
        $(this).children('.contents_div').css({ "border": "1px solid #d1d1d1" });
    });
    $(document).on('mouseleave', '.text_editor', function () // textarea delete bt hover
    {
        $(this).find('.con_delete_bt, .con_move_bt').stop().fadeOut(150);
        $(this).children('.contents_div').css({ "border": "none" });
    });


    $(document).on('mouseenter', '.preview_img', function () // preview_img delete bt hover
    {
        $(this).find('.con_delete_bt').stop().fadeIn(150);
        $(this).children('.contents_div').css({ "border": "1px solid #d1d1d1" });
    });
    $(document).on('mouseleave', '.preview_img', function () // preview_img delete bt hover
    {
        $(this).find('.con_delete_bt').stop().fadeOut(150);
        $(this).children('.contents_div').css({ "border": "none" });
    });


    $(document).on('mouseenter', '.embed_contents', function () { // embed contents delete bt hover
        $(this).children('.con_delete_bt').stop().fadeIn(150);
        $(this).css({ "border": "1px solid #d1d1d1" });
    });
    $(document).on('mouseleave', '.embed_contents', function () { // embed contents delete bt hover
        $(this).children('.con_delete_bt').stop().fadeOut(150);
        $(this).css({ "border": "none" });
    });

    /////////////////////////////////////////////////////////
    //      delete bt hover end
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      contents delete btn start
    /////////////////////////////////////////////////////////

    $(document).on('click', '.con_delete_bt', function () //text area delete event
    {
        $(this).parents('.text_editor').fadeOut(200, function () { $(this).destroy(); });
        $(this).parents('.embed_contents').fadeOut(200, function () { $(this).remove(); });
        $(this).parents('.preview_img').fadeOut(200, function () { $(this).remove(); });
    });
    $(document).on('mouseenter', '.con_move_bt', function () //text area delete event
    {
        $(this).parents('.text_editor').removeClass("disabled");
        $("#editor_preview_box").sortable({ cancel: ".disabled" });
    });
    $(document).on('mouseup', '.con_move_bt', function () //text area delete event
    {
        $('.text_editor').addClass("disabled");
        $("#editor_preview_box li").disableSelection();
    });

    /////////////////////////////////////////////////////////
    //      contents delete btn end
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      text color picker start
    /////////////////////////////////////////////////////////
    $(document).on('focus', '.editor_body_text', function () // text editor focus view
    {
        $(this).next('.textarea_editor').stop().fadeIn(200);
        $(this).parent(".contents_div").css("background","rgba(255,255,255,0.1)");
    });
    $(document).on("blur",".editor_body_text", function(){
        $(this).next(".textarea_editor").stop().fadeOut(200);
        $(this).parent(".contents_div").css("background","none");
    })

    $(document).on('click', '.color_picker > ul > li', function () //change text color change
    {
        $(this).parents('.textarea_editor').prev('.editor_body_text').css({ "color": $(this).text() });
        $(this).parent('ul').prev('.selected_color').css({ "background": $(this).text() });
        $(this).parent('ul').hide();
    });

    $(document).ready(function () { //outside click toggle
        $(document).click(function (e) {
            var subject = $(".text_editor");

            if (e.target.id != subject.attr('id') && !subject.has(e.target).length) {
                $('.textarea_editor').stop().fadeOut(200);
            }
        });
    });

    $(document).on('click', '.selected_color', function () //color picker toggle
    {
        $(this).next('ul').toggle();
    });

    $(document).on('click', '.color_picker', function () // color picker palete making
    {
        $('.color_picker > ul > li').each(function () {
            $(this).css("background", $(this).text());
        });
    });
    /////////////////////////////////////////////////////////
    //      text color picker end
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      text editor tools end
    /////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    //      editor next contents call ajax start
    /////////////////////////////////////////////////////////
    $(document).on('click', '.next_bt', function () {
        var check_id = $(this).attr('id');
        //console.log(check_id);

        editor_gnv_select(check_id);

        $.ajax({
            type: "POST",
            url: "php/ajax/editor_ajax.php",
            data: "check_id=" + check_id,
            cache: false,
            success: function (data) {
                /* call php data */
                $('#next_pop_body').html('').append(data).fadeIn(300).css('display', 'inline-block');

                /* remove contents card event */
                $('#tnail_preview ul li .load_view').removeClass('load_view');
                $('#tnail_preview ul li a').removeAttr('href');

                /* js align center */
                $('#next_pop_body').css('marginLeft', function () {
                    return $(this).width() / -2;//set width
                });

                /* select box call function */
                $(".basic_filter").selectOrDie
                ({
                    customClass: "custom",
                    customID: "custom",
                    size: 5
                });
                $('.dark_overlay').fadeIn(300);

                /* change card title to user type text */
                $(".contents_title").text($("#editor_content_name").val());
            }
        });
    });

    $('.dark_overlay').click(function () {
        $('.dark_overlay').stop().fadeOut(300);
        $('#next_pop_body').stop().fadeOut(300).html('');
        editor_gnv_select("edit");
    });
    $(document).on('click', '.cancel_bt, .editor_popup_cancel', function () {
        $('.dark_overlay').stop().fadeOut(300);
        $('#next_pop_body').stop().fadeOut(300).html('');
        editor_gnv_select("edit");
    })
    $(document).on("click","#back_bt_editor", function(){
        //please add function for go back(ajax);
    });

    /////////////////////////////////////////////////////////
    //      editor next contents call ajax end
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    //      editor change thumbnail start
    /////////////////////////////////////////////////////////
    


    /////////////////////////////////////////////////////////
    //      editor change thumbnail start
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    //      editor edit price start
    /////////////////////////////////////////////////////////
    $(function(){
        var price_name=$('#price_editor').find('.sod_label');
        var price_list=$('#price_editor').find('.sod_label').text();//correct
        
        price_name.on('change',function(){
            console.log(price_list);
            if(price_list=='Paid'){
                $('#price_input').removeAttr('disabled');
            }
            else{
                $('#price_input').attr('disabled','disabled');
            }
        });
    });
    /////////////////////////////////////////////////////////
    //      editor edit price end
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    //      editor edit body color picker start
    /////////////////////////////////////////////////////////
    $(document).ready(function(){
        $(function(){
            $("#body_color_picker").spectrum({
                color:"#ffffff",
                preferredFormat: "rgb",
                move: function(color){
                    var editor_body = $("#editor_preview_box");
                    editor_body.css("background",color.toRgbString());
                },
                change: function(color){
                    var editor_body = $("#editor_preview_box");
                    editor_body.css("background",color.toRgbString());
                }
            });
        });
    })
    /////////////////////////////////////////////////////////
    //      editor edit body color picker end
    /////////////////////////////////////////////////////////



});
/*----------------------------editor end----------------------------*/