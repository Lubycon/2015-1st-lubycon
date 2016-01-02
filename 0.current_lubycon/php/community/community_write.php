<figure id="main_figure">
    <div class="dark_overlay_small"></div>
    <h2>COMMUNITY</h2>
</figure><!-- end main_figure -->

<link href="css/community_write.css" rel="stylesheet" type="text/css" />  <!-- community_view css -->
<link href="css/community.css" rel="stylesheet" type="text/css" />  <!-- community css -->
<script src="js/community.js" type="text/javascript"></script>

<section id="contents">
    <section id="navsel">
        <nav id="lnb_nav">
            <ul>
                <li class="nav_menu" id="forum">
                    <a href="./index.php?1=community&2=community_page&3=forum">Forum</a>
                </li>
                <li class="nav_menu" id="tutorial">
                    <a href="./index.php?1=community&2=community_page&3=tutorial">Tutorial</a>
                </li>
                <li class="nav_menu" id="qna">
                    <a href="./index.php?1=community&2=community_page&3=qna">Q&amp;A</a>
                </li>
            </ul>
        </nav>
    </section>

    <section id="nav_guide"></section>  <!-- end nav_guide -->

    <section id="work_space">
        <div id="work_inner">
            <div class="properties_box">
                <p class="work_title">Title</p>
                <input type="text" class="write_box_com" id="write_box_title" />
            </div><!--title end-->
            
            <div class="properties_box">
                <p class="work_title">Contents</p>
                
                <div id="main_work_space">
                    <?php
                        include('php/community/wysiwygs.php');
                    ?>
                </div><!--main_work_space end-->
            </div><!--main textbox end-->
            
            <div class="properties_box">
                <p class="work_title">Link1</p>
                <input type="text" class="write_box_com" id="write_box_title" />
            </div><!--link1 end-->
            <div class="properties_box">
                <p class="work_title">Link2</p>
                <input type="text" class="write_box_com" id="write_box_title" />
            </div><!--link2 end-->
            <div class="properties_box" id="uploader_com">
                <p class="work_title">File Upload</p>
                <span id="file_import_bt">Find the file</span>
                <input type="file" id="file_import_com" />
                <input type="text" id="file_text_com" val="please select file..." readonly />
            </div><!--link2 end-->
        </div>
    </section><!--work_space end-->        
</section>  <!-- end contents section -->