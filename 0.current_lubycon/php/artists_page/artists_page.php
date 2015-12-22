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
            <div id="user_view_aside" class="con_aside">
                <?php 
                    $username = "Admin_User";
                    $userjob = "Job";
                    $usercity = "City";
                    $usercountry = "Country";
                    $language1 = "language1";
                    $language2 = "language2";
                    
                ?>
                <i id="myinfo_setting" class="fa fa-gear"></i>
                <div id="myinfo_menu_list">
                    <ul>
                        <li><i class="fa fa-eye"></i>View Contents</li>
                        <li><i class="fa fa-bar-chart"></i>View Insight</li>
                        <li><i class="fa fa-user-plus"></i>Follow</li>
                        <li><i class="fa fa-fa fa-envelope-o"></i>Message to artist</li>
                    </ul>
                </div>
                <div id="myinfo_main">
                    <figure>
                        <img src="./ch/img/no_img/no_img_user1.jpg">
                    </figure>
                    <h4><?=$username?></h4>
                </div>
                <div id="myinfo_sub">
                    <article class="myinfo_wrap" id="myinfo_job">
                        <i class="fa fa-suitcase"></i>
                        <p class="myinfo_name" id="job_name"><?=$userjob?></p>
                    </article>
                    <article class="myinfo_wrap" id="myinfo_location">
                        <i class="fa fa-home"></i>
                        <p class="myinfo_name" id="location_name"><?=$usercity?>, <?=$usercountry?></p>
                    </article>
                    <article class="myinfo_wrap" id="myinfo_language">
                        <i class="fa fa-language"></i>
                        <p class="myinfo_name" id="language_name"><?=$language1?>, <?=$language2?></p>
                    </article>
                </div>
                <button id="my_page_bt">My Page</button>
            </div><!--end con_aside-->
            <div id="user_view_main" class="con_main">
                <ul id="artist_card_wrap">
                    <li id="best_artist_wrap">
                        <p>ARTIST_OF_THE_MONTH(designing...)</p>
                    </li>
                    <?php
                        for($i=0;$i<30;$i++){
                            include('php/layout/artist_card.php');
                        }
                    ?>
                </ul>
            </div><!--end con_main-->
        </section><!--end user_box_total-->
    </section><!--end user_view-->
</section>
<!-- end contents section -->
