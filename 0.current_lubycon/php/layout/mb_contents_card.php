<li>
    <?php
        $username = "Admin_User";
        $contents_name = "Contents_name";
        $price = "Free";
        $contents_thumb_url = "./ch/img/no_img/no_img.jpg";
        $user_img_url = "./ch/img/no_img/no_img_user1.jpg";
        $like_num = 0;
        $view_num = 0;
        $comment_num = 0;
    ?><!--you should change to mySQL later-->
    <div class="mb-contents_card">
        <div class="mb-contents_pic">
            <img src="<?=$contents_thumb_url?>" class="load_view" alt="contents thumbnail"/>
        </div>
        <!-- end contents pic -->
        <div class="mb-contents_disc">
            <div class="mb-contents_sub">
                <h4 class="mb-contents_title load_view"><?=$contents_name?></h4>
            </div>
            <a href="./index.php?1=creators_page&2=creators">
                <img src="<?=$user_img_url?>" alt="artist photo" />
            </a>
            <span class="by">by</span>
            <a href="./index.php?1=creators_page&2=creators">
                <span class="name"><?=$username?></span>
            </a>
            <i class="bookmark_bt fa fa-star"></i>
        </div>
        <div class="mb-content_count">
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
        </div>
    </div>
</li>
