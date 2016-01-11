<div class="main_figure_wrap">
    <figure id="main_figure">
        <div class="dark_overlay_small"></div>
        <h2>COMMUNITY</h2>
    </figure>   <!-- end main_figure -->
</div>
<!-- end main_figure -->

<link href="css/community.css" rel="stylesheet" type="text/css" />
<!-- contents page css -->
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
        <!-- end lnb nav -->
        <!-- end select box -->
    </section>
    <section id="nav_guide">
    
        <div class="subnav_box">
            <div class="contents_bt">
                <span class="global_icon"><i class="fa fa-filter"></i></span>
                <span class="subnav_selected">Featured</span>
                <span class="subnav_arrow"><i class="fa fa-caret-down"></i></span>
                <ul class="subnav_list">
                    <li class="selected_li">Featured</li>
                    <li>Recent</li>
                    <li>Most Like</li>
                    <li>Most Download</li>
                    <li>Most Comment</li>
                </ul>
            </div>
            <div class="contents_bt">
                <span class="global_icon"><i class="fa fa-globe"></i></span>
                <span class="subnav_selected">English</span>
                <span class="subnav_arrow"><i class="fa fa-caret-down"></i></span>
                <ul class="subnav_list">
                    <li class="selected_li">English</li>
                    <li>Korean</li>
                    <li>Japanese</li>
                    <li>Chinese</li>
                    <li>French</li>
                </ul>
            </div>
            <div class="contents_bt">
                <span class="global_icon"><i class="fa fa-bars"></i></span>
                <span class="subnav_selected">20 Contents</span>
                <span class="subnav_arrow"><i class="fa fa-caret-down"></i></span>
                <ul class="subnav_list">
                    <li class="selected_li">20 Contents</li>
                    <li>30 Contents</li>
                    <li>40 Contents</li>
                    <li>50 Contents</li>
                </ul>
            </div>
            <div id="sub_search_bar">
                <div class="select_box">
                    <select class="basic">
                        <option value="Title">Title</option>
                        <option value="Subject">Subject</option>
                        <option value="Writer">Writer</option>
                    </select>
                <span class="subnav_arrow"><i class="fa fa-caret-down"></i></span>
                </div>
                <input type="text" id="sub_search_text" value="Enter the Keyword" />
                <button id="sub_search_btn">
                    <i class="fa fa-search"></i>
                </button>
            </div>
        </div><!--subnav_box end-->
    </section>
    <!-- end nav_guide -->
    <section class="main_wrap">
        <div id="forum_option_box">
            <!-- end forum_search_box -->
            <a href="./index.php?1=community&2=community_write">
                <span id="write_bt" class="out">Write</span>
            </a>

        </div>
        <!-- end forum_option_box -->
    </section>

    <?php
        include("main_board.php");
    ?><!--end main_board section -->
</section>
<!-- end contents section -->
