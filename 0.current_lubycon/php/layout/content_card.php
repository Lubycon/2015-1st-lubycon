<li>
    <?php
        $username = "Admin_User";
        $contents_name = "Contents_name";
        $price = "Free";
        $like_num = 0;
        $view_num = 0;
        $comment_num = 0;
    ?><!--you should change to mySQL later-->
    <div class="contents_card">
        <div class="contents_pic">
            <img src="CH/img/no_img/no_img.jpg" class="load_view" alt="contents thumbnail"/>
        </div>
        <!-- end contents pic -->
        <div class="contents_disc">
            <div class="contents_sub">
                <h4 class="contents_title load_view"><?=$contents_name?></h4>
                <h5><?=$price?></h5>
            </div>
            <a href="./index.php?1=personal_page&2=personal_page&3=main">
                <img src="ch/img/no_img/no_img_user1.jpg" alt="artist photo" />
            </a>
            <span class="by">by</span>
            <a href="./index.php?1=personal_page&2=personal_page&3=main">
                <span class="name"><?=$username?></span>
            </a>
            <i class="bookmark_bt fa fa-star"></i>
        </div>
        <!-- end contents disc -->
        <div class="contents_overlay load_view">
            <?php 
                $current_url = $_GET["3"];
                switch($current_url){
                    case "artwork" : echo "<a href='./index.php?1=contents&2=contents_view&3=artwork'>"; break;
                    case "vector" : echo "<a href='./index.php?1=contents&2=contents_view&3=vector'>"; break;
                    case "3d" : echo "<a href='./index.php?1=contents&2=contents_view&3=3d'>"; break;
                    default : echo "<a href='./index.php?1=contents&2=contents_view&3=all'>"; break;
                };
            ?>
                <i class="fa fa-search-plus"></i>
                <ul>
                    <li>
                        <i class="fa fa-eye"></i>
                        <span class="contents_view_count"><?=$view_num?></span>
                    </li>
                    <li>
                        <i class="fa fa-comment-o"></i>
                        <span class="contents_comments"><?=$comment_num?></span>
                    </li>
                    <li class="contents_like_li">
                        <i class="fa fa-heart"></i>
                        <span class="contents_like"><?=$like_num?></span>
                    </li>
                </ul>
            </a>
        </div>
    </div>
</li>
