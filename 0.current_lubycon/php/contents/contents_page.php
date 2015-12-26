<figure id="main_figure">
    <h2>CONTENTS</h2>
</figure>	<!-- end main_figure -->
<link href="css/contents_page.css" rel="stylesheet" type="text/css" />  <!-- contents page css -->
<section id="contents">
    <section id="navsel">
        <nav id="lnb_nav">
            <ul>
                <li class="nav_menu" id="all">
                    <a href="./index.php?1=contents&2=contents_page&3=all">All</a>
                </li>
                <li class="nav_menu" id="artwork">
                    <a href="./index.php?1=contents&2=contents_page&3=artwork">Artwork</a>
                </li>
                <li class="nav_menu" id="vector">
                    <a href="./index.php?1=contents&2=contents_page&3=vector">Vector</a>
                </li>
                <li class="nav_menu" id="3d"> 
                    <a href="./index.php?1=contents&2=contents_page&3=3d">3D</a>
                </li>
            </ul>
        </nav>  <!-- end lnb nav -->
    </section>  <!-- end section -->


    <section id="nav_guide">
        <div class="subnav_box">
            <?php
                $current_url = $_GET["3"];//change to db query later
                switch($current_url){
                    case "artwork" : include_once("php/sub_nav/categories/category_artwork.php"); break;
                    case "vector" : include_once("php/sub_nav/categories/category_vector.php"); break;
                    case "3d" : include_once("php/sub_nav/categories/category_3d.php"); break;
                }
            ?>
            <div class="contents_bt">
                <span class="global_icon"><i class="fa fa-usd"></i></span>
                <span class="subnav_selected">All</span>
                <span class="subnav_arrow"><i class="fa fa-caret-down"></i></span>
                <ul class="subnav_list">
                    <li class="selected_li">All</li>
                    <li>Free</li>
                    <li>Free for personal</li>
                    <li>Paid</li>
                </ul>
            </div><!--pay selector end-->
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

            <div id="sub_search_bar">
                <div class="select_box">
                    <select class="basic">
                        <option value="Title">Title</option>
                        <option value="Designer">Designer</option>
                        <option value="Tag">Tag</option>
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
    <section id="contents_box">
        <ul>
            <?php
            for($i=0;$i<30;$i++)
            {
                include('php/layout/content_card.php');
            }
            ?>
        </ul>
    </section>  <!-- end contents box -->
    <?php
        include_once('php/layout/pager.php');
    ?>
</section>  <!-- end contents section -->
