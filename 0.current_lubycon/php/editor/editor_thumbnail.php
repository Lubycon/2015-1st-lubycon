<link rel="stylesheet" href="css/contents_view.css" />
<!-- editor css -->
<button class="editor_popup_cancel"><i class="fa fa-times"></i></button>
<header id="tnail_header">Thumbnail Image</header>
<div id="work_space">
    <div id="tnail_preview">
        <ul>
            <?php
                include_once('../php/layout/content_card.php');
            ?>
        </ul>
    </div>
    <!--tnail_preview end-->
    <div id="tnail_work">
        <div id="work_inbody">
            <img src="CH/img/main_img.png" />
        </div>
        <!--work_inbody end-->
        <span id="change_img_bt">Change Image</span>
        <input type="file" id="change_img_real" />
    </div>
    <!--tnail_work end-->
</div>
<div class="buttons_pop">
    <button class="mic_next_bt" id="call_setting">Next</button>
    <button class="cancel_bt" id="tnail_cancel">Cancel</button>
</div>
