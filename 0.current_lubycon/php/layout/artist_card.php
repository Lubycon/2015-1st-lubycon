<li class="artist_card_wrap">
    <?php
        $username = "Admin_User";
        $user_img_url = "./ch/img/no_img/no_img_user1.jpg";
        $user_location_img = "./ch/img/flag_icons/United-States-Of-America.png";
        $userjob = "Job";
    ?><!--you should change to mySQL later-->
    <div class="artists_card">
        <div class="artist_menu">
            <i class="fa fa-bars artist_menu_icon"></i>
            <div class="artist_menu_list">
                <ul>
                    <li><i class="fa fa-eye"></i>View Contents</li>
                    <li><i class="fa fa-bar-chart"></i>View Insight</li>
                    <li><i class="fa fa-user-plus"></i>Follow</li>
                    <li><i class="fa fa-fa fa-envelope-o"></i>Message to artist</li>
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
            <p class="artist_job"><i class="fa fa-suitcase"></i><?=$userjob?></p><!--job-->
        </div>
        <div class="artist_bot_info">
            <div class="view_profile_bt"><i class="fa fa-search-plus"></i>View Profile</div>
        </div>
        
    </div>
</li>
