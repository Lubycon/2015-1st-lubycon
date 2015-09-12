<script src="js/jquery.form.min.js"></script>

<button class="editor_popup_cancel"><i class="fa fa-times"></i></button>
<header id="tnail_header">Thumbnail Image</header>
<div id="work_space">
    <div id="tnail_preview">
        <ul>
            <?php
                include_once('../layout/content_card.php');
            ?>
        </ul>
    </div>
    <!--tnail_preview end-->
    <div id="tnail_work">
        <div id="work_inbody">
        </div>
        <!--work_inbody end-->
        <span id="change_img_bt">Change Image</span>
        <form id="form1" name="form1">
            <input type="file" id="change_img_real" name="formfile">
        </form>
    </div>
    <!--tnail_work end-->
</div>
<div class="buttons_pop">
    <button class="next_bt" id="call_setting">Next</button>
    <button class="cancel_bt" id="tnail_cancel">Cancel</button>
</div>
