<figure id="main_figure">
    <h2>COMMUNITY</h2>
</figure>	<!-- end main_figure -->

<link href="css/community_write.css" rel="stylesheet" type="text/css" />  <!-- community_view css -->
<link href="css/community.css" rel="stylesheet" type="text/css" />  <!-- community css -->
<script src="js/community.js" ></script>


<section id="contents">
    <section id="navsel">
        <nav id="lnb_nav">
            <ul>
                <li class="forum">
                    <a href="./index.php?1=community&2=community_page&3=forum">Forum</a>
                </li>
                <li class="tutorial">
                    <a href="./index.php?1=community&2=community_page&3=tutorial">Tutorial</a>
                </li>
                <li class="qna">
                    <a href="./index.php?1=community&2=community_page&3=qna">Q&amp;A</a>
                </li>
            </ul>
        </nav>
        <div class="search_option">
            <i class="fa fa-filter"></i>
            <select class="basic_filter">
                <option value="English">English</option>
                <option value="Korean">Korean</option>
                <option value="Japanese">Japanese</option>
                <option value="Chinese">Chinese</option>
                <option value="French">French</option>
            </select>
        </div>  <!-- end select box -->
    </section>

    <section id="nav_guide"></section>  <!-- end nav_guide -->

    <section id="work_space">
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
        <div class="properties_box">
            <p class="work_title">File Upload</p>
            <span id="file_import_bt">Find the file</span>
            <input type="file" id="file_import_com" />
            <input type="text" id="file_text_com" val="please select file..." readonly />
        </div><!--link2 end-->
    </section><!--work_space end-->        
</section>  <!-- end contents section -->