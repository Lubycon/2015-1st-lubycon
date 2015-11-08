<figure id="main_figure">
    <h2>COMMUNITY</h2>
</figure>	<!-- end main_figure -->

<link href="css/community_view.css" rel="stylesheet" type="text/css" />  <!-- community_view css -->
<link href="css/community.css" rel="stylesheet" type="text/css" />  <!-- community css -->
<script type="text/javascript" src="js/community.js"></script>

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
    </section>
    <?php
        $post_subject = "Lorem Ipsum";
        $year = 2015;
        $month = "Nov";
        $day = 7;
        $hour = 00;
        $second = 00;

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
        </p>
    </section>  <!-- end nav_guide -->
    <section id="post_writer_box">
        <div id="post_writer_box_inner">
            <p class="post_writer_date"><?=$year?>.<?=$month?>.<?=$day?> <?=$hour?>:<?=$second?></p>
            <ul>
                <li><i class="fa fa-heart"></i><?=$post_like?></li>
                <li><i class="fa fa-eye"></i><?=$post_view?></li>
            </ul>
        </div>
    </section>

    <section id="post_box">
        <section id="post_section">
            <article id="post_contents">
                <p>
                    <?=$post_content?>
                </p>
                <div class="like_bt"><i class="fa fa-heart"></i></div>
                <div id="post_edit_box">
                    <button class="out">Delete</button>
                    <button class="out">Modified</button>
                </div>
            </article>  <!-- end post_contents -->
            <article id="comment_box">
                <div id="comment_writer">
                    <div id="comment_text_box">
                        <textarea id="comment_text">hello world</textarea>
                        <button id="comment_bt">
                            <i class="fa fa-comments"></i>
                        </button>
                    </div>
                </div>
                <div id="comment_list">
                    <p id="comment_count"><span class="comment_counter">12</span> Comments</p>
                    <?php
                        for($i=1; $i<=10; $i++){
                            include("php/layout/comment.php");
                        };
                    ?>
                </div><!--end comment_list-->
                <div id="comment_more_box">
                    <button id="comment_more_bt"><i class="fa fa-angle-down"></i></button>
                </div>
            </article><!-- end comment_box -->
        </section>  <!-- end post_section -->
        <aside id="post_banner">
            <div id="profile_pic">
                <figure id="img_mask">
                    <img src="ch/img/no_img/no_img_user1.jpg">
                </figure>
            </div>
            <h4><?=$username?></h4>
            <h5 class="designer_job"><?=$userjob?></h5>
            <h6><i class="fa fa-home"></i><?=$usercity?>, <?=$usercountry?></h6>
            <button id="designer_follow"><i class="fa fa-user-plus"></i></button>
            <div id="share_box">
                <button id="share_face"><i class="fa fa-facebook"></i></button>
                <button id="share_google"><i class="fa fa-google-plus"></i></button>
            </div>
        </aside>    <!-- end post_banner -->
    </section>  <!-- end post_box -->
    <?php
        include("main_board.php");
    ?><!--end main_board section -->
</section>  <!-- end contents section -->