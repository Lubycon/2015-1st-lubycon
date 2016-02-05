<li class="creator_card_in">
    <?php
        $username = "Admin_User";
        $user_img_url = "./ch/img/no_img/no_img_user1.jpg";
        $user_location_img = "./ch/img/flag_icons/United-States-Of-America.png";
        $userjob = "Job";
        $contents_count = 256;
    ?><!--you should change to mySQL later-->
    <div class="creators_card">
        <div class="creator_menu">
            <i class="fa fa-bars creator_menu_icon hidden-mb-b"></i>
            <div class="creator_menu_list">
                <ul>
                    <li><a href="./index.php?1=personal_page&2=personal_page&3=main&4=dashboard"><i class="fa fa-tachometer"></i>View Dashboard</a></li>
                    <li><a href="./index.php?1=personal_page&2=personal_page&3=main&4=my_contents"><i class="fa fa-eye"></i>View Contents</a></li>
                    <li><a href="./index.php?1=personal_page&2=personal_page&3=main&4=insight"><i class="fa fa-bar-chart"></i>View Insight</a></li>
                    <li><a href="./index.php?1=personal_page&2=personal_page&3=main&4=my_forums"><i class="fa fa-table"></i>View Forums</a></li>
                </ul>
            </div>
        </div>
        <div class="creator_top_info">
            <div class="creator_pic">
                <img src="<?=$user_img_url?>" alt="user_pic"/>
            </div>
            <div class="creator_location">
                <img src="<?=$user_location_img?>" alt="user_location"/>
            </div>
        </div>
        <div class="creator_mid_info">
            <p class="creator_name"><?=$username?></p><!--user name-->
            <p class="creator_job"><?=$userjob?></p><!--job-->
        </div>
        <div class="creator_bot_info">
            <article class="contents_count">
                <p class="count_num"><?=$contents_count?></p>
                Contents
            </article>
            <p class="view_profile_bt"><a href="#">VIEW MORE</a></p>
        </div>
        
    </div>
</li>
