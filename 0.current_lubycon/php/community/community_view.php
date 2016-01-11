<div class="main_figure_wrap">
    <figure id="main_figure">
        <div class="dark_overlay_small"></div>
        <h2>COMMUNITY</h2>
    </figure>
</div>	<!-- end main_figure -->

<link href="css/community_view.css" rel="stylesheet" type="text/css" />  <!-- community_view css -->
<link href="css/community.css" rel="stylesheet" type="text/css" />  <!-- community css -->
<script type="text/javascript" src="js/community.js"></script>

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
    <?php
        $post_subject = "Lorem Ipsum";
        $year = 2015;
        $month = "Nov";
        $day = 7;
        $hour = 0;
        $minute = 0;

        $post_like = 0;
        $post_view = 0;
        $comment_num = 0;

        $username = "Admin_User";
        $userjob = "Job name";
        $usercity = "City";
        $usercountry = "Country";
        $post_content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Cras commodo lacus at lacus bibendum imperdiet.
                            Quisque in accumsan turpis. Nullam non lacus nec enim convallis iaculis.
                                    Vivamus a sodales sapien. Curabitur suscipit ullamcorper enim, quis hendrerit nunc tempus eu.
                                    Nunc porttitor mauris sapien, quis molestie quam placerat sit amet.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Cras commodo lacus at lacus bibendum imperdiet.
                                    Quisque in accumsan turpis. Nullam non lacus nec enim convallis iaculis.
                                    Vivamus a sodales sapien. Curabitur suscipit ullamcorper enim, quis hendrerit nunc tempus eu.
                                    Nunc porttitor mauris sapien, quis molestie quam placerat sit amet.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    ?>

    <section id="nav_guide">
        <p id="post_subject">
            <?=$post_subject?>
            <span class="written_date"><?=$year?>.<?=$month?>.<?=$day?> <?=$hour?>:<?=$minute?></span>
        </p>
        
        <ul id="post_info">
            <li><i id="like_icon" class="fa fa-heart count_icon"></i><?=$post_like?></li>
            <li><i id="view_icon" class="fa fa-eye count_icon"></i><?=$post_view?></li>
        </ul>
    </section>  <!-- end nav_guide -->
    <section id="post_box" class="con_wrap">
        <section id="post_section" class="con_main">
            <article id="post_contents">
                <p>
                    <?=$post_content?>
                </p>
                <div id="com_like_bt" class="like_bt"><i class="fa fa-heart"></i></div>
                <div id="post_edit_box">
                    <button class="post_edit_bt animate_opacity"><i class="fa fa-trash"></i>Delete</button>
                    <button class="post_edit_bt animate_opacity"><i class="fa fa-repeat"></i>Modified</button>
                </div>
            </article>  <!-- end post_contents -->
            <article id="comment_box">
                <div id="comment_writer">
                    <div id="comment_text_box">
                        <figure id="comment_my_pic">
                            <img src="ch/img/no_img/no_img_user1.jpg">
                        </figure>
                        <textarea id="comment_text"></textarea>
                        <button id="comment_bt">
                            <i class="fa fa-comments"></i>
                        </button>
                    </div>
                </div>
                <div id="comment_list">
                    <p id="comment_count"><span id="comment_counter">10</span> Comments</p>
                    <?php
                        for($i=1; $i<=10; $i++){
                            include("php/layout/comment.php");
                        };
                    ?>
                </div><!--end comment_list-->
                <div id="comment_more_box">
                    <button id="comment_more_bt"><i class="fa fa-angle-down"></i></button>
                </div>
            </article>
        </section><!-- end post_section -->
        <aside id="post_banner" class="con_aside">
            <div id="profile_pic">
                <figure id="img_mask">
                    <img src="./ch/img/no_img/no_img_user1.jpg">
                </figure>
            </div>
            <h4><?=$username?></h4>
            <h5 class="designer_job"><?=$userjob?></h5>
            <h6><i class="fa fa-home"></i><?=$usercity?>, <?=$usercountry?></h6>
            <div id="designer_follow"><i class="fa fa-user-plus"></i></div>
            <div id="share_box">
                <div id="share_face" class="share_bt"><i class="fa fa-facebook"></i></div>
                <div id="share_google" class="share_bt"><i class="fa fa-google-plus"></i></div>
            </div>
        </aside>    <!-- end post_banner -->
    </section>  <!-- end post_box -->
    <?php
        include("main_board.php");
    ?><!--end main_board section -->
</section>  <!-- end contents section -->