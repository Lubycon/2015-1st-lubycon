<li>
    <?php
        $number = $_GET["number"];
        $current_url = $third_param;
        $username = "Admin_User";
        $contents_name = "Contents_name";
        $price = "Free";
        $contents_thumb_url = "../contents_data/".$current_url."jpg/thumb/".$number.".jpg";
        $user_img_url = "./ch/img/no_img/no_img_user1.jpg";
        $like_num = 0;
        $view_num = 0;
        $comment_num = 0;
    ?><!--you should change to mySQL later-->
    <div class="contents_card">
        <div class="contents_pic">
            <img src="<?=$contents_thumb_url?>" class="load_view" alt="contents thumbnail"/>
        </div>
        <!-- end contents pic -->
        <div class="contents_desc">
            <div class="contents_sub">
                <?php 
                    echo "<a class='contents_link' href='./index.php?1=contents&2=contents_view&3=";
                    switch($current_url)
                    {
                        case "artwork" : echo "artwork"; break;
                        case "vector" : echo "vector"; break;
                        case "3d" : echo "3d"; break;
                        default : echo "all"; break;
                    };
                    echo "&4=".$number."'>";
                ?>
                    <h4 class="contents_title load_view"><?=$contents_name?></h4>
                </a>
                <h5><?=$price?></h5>
            </div>
            <span class="creator_desc">
                <a href="./index.php?1=creators_page&2=creators" class="hidden-mb-ib">
                    <img src="<?=$user_img_url?>" alt="artist photo" />
                </a>
                <span class="by">by</span>
                <a href="./index.php?1=creators_page&2=creators">
                    <span class="name"><?=$username?></span>
                </a>
            </span>
            <i id="bookmark_bt" class="lubyAlert_bt fa fa-star"></i>
        </div>
        <!-- end contents desc -->
        <div class="contents_overlay load_view">
                <?php 
                    echo "<a class='contents_link' href='./index.php?1=contents&2=contents_view&3=";
                    switch($current_url)
                    {
                        case "artwork" : echo "artwork"; break;
                        case "vector" : echo "vector"; break;
                        case "3d" : echo "3d"; break;
                        default : echo "all"; break;
                    };
                    echo "&4=".$number."'>";
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
