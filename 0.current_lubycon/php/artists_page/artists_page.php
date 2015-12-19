<figure id="main_figure">
    <h2>ARTISTS</h2>
</figure>
<!-- end main_figure -->

<link href="css/artists_page.css" rel="stylesheet" type="text/css" />
<!-- contents page css -->
<section id="contents">
    <section id="navsel">
        <!-- end lnb nav -->
    </section>
    <section id="nav_guide">
        <div class="subnav_box">
            <div class="contents_bt">
                <span class="global_icon">
                    <img src="./ch/img/grobal_icon.png" width="24" height="24" /></span>
                <span class="subnav_selected">All Continents</span>
                <span class="subnav_arrow"><i class="fa fa-caret-down"></i></span>
                <ul class="subnav_list">
                    <li>All Continents</li>
                    <li>Africa</li>
                    <li>Asia</li>
                    <li>Europe</li>
                    <li>North America</li>
                    <li>South America</li>
                    <li>Oceania</li>
                </ul>
            </div>
        </div>
        <div class="contents_bt">
            <span class="global_icon"><i class="fa fa-filter"></i></span>
            <span class="subnav_selected">All</span>
            <span class="subnav_arrow"><i class="fa fa-caret-down"></i></span>
            <ul class="subnav_list">
                <li class="selected_li">All</li>
                <li>Most Like</li>
                <li>Most Download</li>
                <li>Most Comment</li>
            </ul>
        </div>
        <div id="sub_search_bar">
            <div class="select_box">
                <select class="basic">
                    <option value="Title">Name</option>
                    <option value="Designer">Country</option>
                </select>
            </div>
            <input type="text" id="sub_search_text" value="Enter the Keyword" />
            <button id="sub_search_btn">
                <i class="fa fa-search"></i>
            </button>
        </div>
    </section>
    <!-- end nav_guide -->
    <section id="user_view">
        <section id="user_box_total">
            <div id="user_view_main" class="con_main">
                <ul id="artist_card_wrap">
                    <?php
                        for($i=0;$i<30;$i++){
                            include('php/layout/artist_card.php');
                        }
                    ?>
                </ul>
            </div>
            <div id="user_view_aside" class="con_aside">
                <?php 
                    $username = "Admin_User";
                    $userjob = "Job";
                    $usercity = "City";
                    $usercountry = "Country";

                    $file_descript = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
                    
                    $file_view = 0;
                    $file_down = 0;
                    $file_like = 0;                        
                ?>
                <div class="designer_info">
                    <figure>
                        <img src="./ch/img/no_img/no_img_user1.jpg">
                    </figure>
                    <h4><?=$username?></h4>
                    <h5><i class="fa fa-home"></i><?=$usercity?>, <?=$usercountry?></h5>
                </div>
                <button id="content_down"><i class="fa fa-download"></i></button>

                <div id="contents_score">
                    <ul>
                        <li><i class="fa fa-eye"></i></li>
                        <li>Views</li>
                        <li class="contents_view_score"><?=$file_view?></li>
                    </ul>
                    <ul>
                        <li><i class="fa fa-download"></i></li>
                        <li>Downloads</li>
                        <li class="contents_view_score"><?=$file_down?></li>
                    </ul>
                    <ul>
                        <li><i class="fa fa-heart"></i></li>
                        <li>Likes</li>
                        <li class="contents_view_score"><?=$file_like?></li>
                    </ul>
                </div>

                <article id="file_descript">
                    <?=$file_descript?>
                </article>
            </div><!--end con_right-->
        </section><!--end user_box_total-->
    </section><!--end user_view-->
</section>
<!-- end contents section -->
