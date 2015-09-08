<button class="editor_popup_cancel"><i class="fa fa-times"></i></button>
<header id="setting_header">Settings</header>
<div id="total_set">
	<div id="left_set">
	    <div id="cate_editor">
	    	<p class="setting_title">Categories (max 3 categorys)</p>
	    	<div class="set_con">
                <form>
                    <select data-placeholder="Choose your contents categorys" style="width:100%;" multiple class="chosen-select" tabindex="8">
                        <option>Car</option>
                        <option>People</option>
                        <option>Book</option>
                        <option>Stuff</option>
                        <option>Contry</option>
                        <option>Animal</option>
                        <option>Nature</option>
                        <option>Article</option>
                        <option>Font</option>
                        <option>3D Contents</option>
                    </select>
                </form>
	    	</div>
	    </div>
	    <div id="tag_editor">
	    	<p class="setting_title">Tags</p>
            <div class="set_con">
                <form>
                    <select data-placeholder="Choose your contents categorys" style="width:100%;" multiple class="chosen-select" tabindex="8">
                        <option>Car</option>
                        <option>People</option>
                        <option>Book</option>
                        <option>Stuff</option>
                        <option>Contry</option>
                        <option>Animal</option>
                        <option>Nature</option>
                        <option>Article</option>
                        <option>Font</option>
                        <option>3D Contents</option>
                    </select>
                </form>
	    	</div>
	    </div>
	    <div id="des_editor">
	    	<p class="setting_title">Description</p>
	    	<textarea id="setting_des_text"></textarea>
	    </div>
	</div>
	<!--left_set end-->
	<div id="right_set">
	    <div id="price_editor">
	    	<p class="setting_title">Price</p>
	    	<select class="basic_filter">
                <option value="Free">Free</option>
                <option value="FFA">Free for personal use</option>
                <option value="Paid">Paid</option>
            </select>
            <input type="text" id="price_input" disabled="disabled" />
	    </div>
	    <div id="copyright_editor">
	    	<p class="setting_title">Common Copyrights</p>
	    	<div class="set_con"></div>
	    </div>
	</div>
	<!--right_set end-->
</div>
<!--total_set end-->
<div class="buttons_pop">
    <button class="final_upload_bt" id="upload_final">Upload</button>
    <button class="cancel_bt">Cancel</button>
</div>

<!-- multi select box css -->
<link rel="stylesheet" href="css/chosen_prism.css">
<link rel="stylesheet" href="css/chosen.css">
<!-- multi select box css -->
<!-- multi select box js -->
<script src="js/chosen.jquery.js" type="text/javascript"></script>
<script src="js/chosen.prism.js" type="text/javascript"></script>
<script type="text/javascript">
    var config = {
        '.chosen-select': {},
        '.chosen-select-deselect': { allow_single_deselect: true },
        '.chosen-select' : {max_selected_options: 3}
    }
    for (var selector in config) {
        $(selector).chosen(config[selector]);
    }
</script>
<!-- multi select box js -->