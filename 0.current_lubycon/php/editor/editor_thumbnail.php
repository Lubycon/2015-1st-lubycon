<link rel="stylesheet" href="css/contents_view.css" />
<!-- editor css -->
<div id="next_pop_body">
    <button class="editor_popup_cancel"><i class="fa fa-times"></i></button>
    <header id="tnail_header">Thumbnail Image</header>
    <div id="tnail_preview">
    	<?php
            include('php/layout/content_card.php');
        ?>
    </div><!--tnail_preview end-->
    <div id="tnail_work">
    	<div id="work_inbody">
    		<img src="#" />	
    	</div><!--work_inbody end-->
    	<input type="file" id="change_img"/>
    </div><!--tnail_work end-->
    <div class="buttons_pop">
        <button class="next_bt">Next</button>
        <button class="cancel_bt">Cancel</button>
    </div>
</div><!--next_pop_body end-->