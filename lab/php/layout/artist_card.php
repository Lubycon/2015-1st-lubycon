<li class="artist_card_in">
    <?php
        $username = "Admin_User";
        $user_img_url = "./ch/img/no_img/no_img_user1.jpg";
        $user_location_img = "./ch/img/flag_icons/United-States-Of-America.png";
        $userjob = "Job";
        $contents_count = 256;
    ?><!--you should change to mySQL later-->
    <div class="artists_card">
        <div class="artist_menu">
            <i class="fa fa-bars artist_menu_icon hidden-mb-b"></i>
            <div class="artist_menu_list">
                <ul>
                    <li><a href="./index.php?1=personal_page&2=personal_page&3=main&4=dashboard"><i class="fa fa-tachometer"></i>View Dashboard</a></li>
                    <li><a href="./index.php?1=personal_page&2=personal_page&3=main&4=my_contents"><i class="fa fa-eye"></i>View Contents</a></li>
                    <li><a href="./index.php?1=personal_page&2=personal_page&3=main&4=insight"><i class="fa fa-bar-chart"></i>View Insight</a></li>
                    <li><a href="./index.php?1=personal_page&2=personal_page&3=main&4=my_forums"><i class="fa fa-table"></i>View Forums</a></li>
                </ul>
            </div>
        </div>
        <div class="artist_top_info">
            <div class="artist_pic">
                <img src="<?=$user_img_url?>" alt="user_pic"/>
            </div>
            <div class="artist_location">
                <img src="<?=$user_location_img?>" alt="user_location"/>
            </div>
        </div>
        <div class="artist_mid_info">
            <p class="artist_name"><?=$username?></p><!--user name-->
            <p class="artist_job"><i class="fa fa-suitcase hidden-mb-ib"></i><?=$userjob?></p><!--job-->
        </div>
        <div class="artist_bot_info">
            <article class="contents_count">
                <p class="count_num"><?=$contents_count?></p>
                Contents
            </article>
            <p class="view_profile_bt"><a href="#">VIEW MORE</a></p>
        </div>
        
    </div>
</li>
