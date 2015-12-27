<link href="css/spectrum.css" rel="stylesheet" type="text/css" />
<link href="css/editor.css" rel="stylesheet" type="text/css" />
<link href="css/summernote.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="css/bootstrap.min.css" />

<script type="text/javascript" src="js/jquery-ui.min.js"></script>
<script type="text/javascript" src="js/jquery.form.min.js"></script>
<script type="text/javascript" src="js/editor.js"></script>
<script type="text/javascript" src="js/spectrum.js"></script>
<script type="text/javascript" src="js/summernote.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>

<!-- editor css -->

<?php
//php variable setting
    $contents_cate = $_GET["3"];
    //$upload_file = user upload file (i guess only ziped file)
    //$upload_preview_file = user upload preview image files (user can multiple images)
    //$upload_preview_url = user upload preview image url (for easy call)
    
    $uploaded_file_name;
    $uploaded_file_inside_list = "Nothing Uploaded";
    $uploaded_file_size;

?>



<form id="editor_form" enctype="multipart/form-data" method="post" action="./php/editor/test.php">
<input type="hidden" name="contents_cate_name" value="<?=$contents_cate?>" />
<div id="popup_wrap">
    <div id="next_pop_body" class="fadeInDown animated"></div><!--go to thumbnail-->
<!--<div id="popup_wrap">
    <div id="next_pop_body" class="fadeInDown animated"></div>
</div>

<div id="embed_popup">
    <p>Embed Media</p>
    <textarea id="embed_textarea"></textarea>
    <button type="button" class="mic_next_bt">Embed</button>
    <button type="button" class="cancel_bt">Cancel</button>
    <button type="button" class="editor_popup_cancel"><i class="fa fa-times"></i></button>
</div>
<nav id="editor_gnv">
    <ol>
        <li class="editor_selected_gnv">1.Edit</li>
        <li>></li>
        <li>2.Thumbnail</li>
        <li>></li>
        <li>3.Setting</li>
    </ol>
    <button type="button" class="next_bt" id="call_thumb">Next</button>
</nav>-->
<section id="editor_inbody">
    <section id="editor_body">
        <section id="editor_section" class="con_main">
            <textarea name="text_editor" id="summernote" title="Contents"></textarea>
            <!--summernote-->
        </section><!--editor_section end-->
    </section><!--editor_body end-->
    <aside id="editor_aside" class="con_aside">
        <p>
            <input id="editor_content_name" type="text" value="Your Contents name" name="contents_subject" />
        </p>
        <ol>
            <li id="editor_upload_file">
                <i class="fa fa-cloud-upload"></i>
                <span class="tooltip_bt" id="file_tooltip">Upload file to server<br/>(allow only zip file)</span>
            </li>
        </ol>
        <input type="file" id="upload_file_input" name="upload_file" accept="application/zip"/>
        <input type="submit" class="final_upload_bt" id="upload_final" value="submit" />
        <!--<div id="editor_aside_wrap">
            <ol>
                <li id="editor_upload_file">
                    <i class="fa fa-cloud-upload"></i>
                    <span class="tooltip_bt" id="file_tooltip">Upload file to server<br/>(allow only zip file)</span>
                </li>
                <li id="editor_preview_upload">
                    <i class="fa fa-picture-o"></i>
                    <span class="tooltip_bt" id="image_tooltip">Upload preview image</span>
                </li>
            </ol>

            <input type="file" id="upload_file_input" name="upload_file" accept="application/zip"/>
            <input type="file" id="preview_upload_input" name="images[]" accept="image/*" multiple />
            
            <ol>
                <li id="img_crop" class="img_crop_notallow">
                    <i class="fa fa-crop"></i>
                    <span class="tooltip_bt" id="file_tooltip">Image crop tool</span>
                </li>
                <li id="add_text">
                    <i class="fa fa-font"></i>
                    <span class="tooltip_bt" id="file_tooltip">Text tool</span>
                </li>
                <li id="change_bd_color">
                    <input type="text" id="body_color_picker"></input>
                    <span class="tooltip_bt" id="body_color_tooltip">Body color</span>
                </li>
                <li id="embed_media">
                    <i class="fa fa-code"></i>
                    <span class="tooltip_bt" id="file_tooltip">Embed media</span>
                </li>
            </ol>
        </div>-->
            
            <!-- need ajax show uploaded file zip and inside zip files-->
            <div id="file_info">
                <header id="info_header">File info<i class="fa fa-angle-down" id="info_toggle"></i></header>
                <section id="files">
                    <article id="file_name"><i class="fa fa-chevron-circle-down"></i>
                        <p id="file_info_filename"><i class="fa fa-folder"></i>Nothing Uploaded</p>
                    </article>
                    <ul id="file_info_fileinside">
                        <?php
                            //for( $i = 0 ; $i < count($uploaded_file_inside_list) ; $i++ )
                            //{
                            //    echo "<li>".$uploaded_file_inside_list[$i]."</li>";
                            //}
                        ?>
                    </ul>
                </section>
                <footer id="storage">
                    <p id="file_info_filesize"><?=$uploaded_file_size?></p>
                </footer>
            </div>
        </div>
    </aside><!--editor_aside end-->
</section><!--editor_inbody_end-->
</form>