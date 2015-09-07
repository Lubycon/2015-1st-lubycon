<link href="css/editor.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="js/jquery-ui.min.js"></script>
<!-- editor css -->
<div id="next_pop_body"></div><!--go to thumbnail-->

<div id="embed_popup">
    <p>Embed Media</p>
    <textarea id="embed_textarea"></textarea>
    <button class="mic_next_bt">Embed</button>
    <button class="cancel_bt">Cancel</button>
    <button class="editor_popup_cancel"><i class="fa fa-times"></i></button>
</div>
<nav id="editor_gnv">
    <ol>
        <li class="editor_selected_gnv">1.Edit</li>
        <li>></li>
        <li>2.Thumbnail</li>
        <li>></li>
        <li>3.Setting</li>
        <li>></li>
        <li>4.Preview</li>
    </ol>
    <button class="next_bt" id="call_thumb">Next</button>
</nav>
<section id="editor_inbody">
    <aside id="editor_aside">
        <ol>
            <li id="editor_upload_file">
                <i class="fa fa-cloud-upload"></i>
                <span class="tooltip_bt" id="file_tooltip">Upload file to server</span><!--tooltip-->
            </li><!--upload file bt-->
            <li id="editor_preview_upload">
                <i class="fa fa-picture-o"></i>
                <span class="tooltip_bt" id="image_tooltip">Upload preview image</span><!--tooltip-->
            </li><!--upload preview img bt-->
        </ol>
        
        
        
        <input type="file" id="upload_file_input"/>
        <input type="file" name="images[]" id="preview_upload_input" accept="image/*" multiple />
        
        <ol>
            <li id="img_crop" class="img_crop_notallow">
                <i class="fa fa-crop"></i>
                <span class="tooltip_bt" id="file_tooltip">Image crop tool</span><!--tooltip-->
            </li>
            <li id="add_text">
                <i class="fa fa-font"></i>
                <span class="tooltip_bt" id="file_tooltip">Text tool</span><!--tooltip-->
            </li>
            <li id="embed_media">
                <i class="fa fa-code"></i>
                <span class="tooltip_bt" id="file_tooltip">Embed media</span><!--tooltip-->
            </li>
        </ol>
        

        <div id="file_info">
            <header id="info_header">File info<i class="fa fa-angle-down" id="info_toggle"></i></header>
            <section id="files">
                <article id="file_name"><i class="fa fa-chevron-circle-down"></i>
                    <p><i class="fa fa-folder"></i>Lorem ipsum.zip</p>
                </article>
                <ul>
                    <li><i class="fa fa-file"></i>ipsum.psd</li>
                    <li><i class="fa fa-file"></i>ipsum.ai</li>
                    <li><i class="fa fa-file"></i>ipsum.html</li>
                    <li><i class="fa fa-file"></i>ipsum.css</li>
                    <li><i class="fa fa-circle"></i><i class="fa fa-file"></i>ipsum.js</li>
                </ul>
            </section>
            <footer id="storage">
                <p>1.2 MB</p>
            </footer>
        </div>
    </aside>
    <section id="editor_body">
        
        <!-- drag able script aply code -->
        <script>
            $(function () {
                $("#editor_preview_box").sortable({
                    revert: true
                });
            });
        </script>
        <!-- drag able script aply code -->

        <section id="editor_section">
            <p>
                <input type="text" value="Your Contents Name" />
            </p>
            <ul id="editor_preview_box">
            </ul>
        </section>
    </section>
</section>
