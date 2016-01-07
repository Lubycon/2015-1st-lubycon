<?php
    $username = "Admin_User";
    $user_img_url = "./ch/img/no_img/no_img_user1.jpg";
    $user_location_img = "./ch/img/flag_icons/Korea-South.png";//in profile card

    $userjob = "Job";//in job card

    $language1 = "Language1";
    $language2 = "Language2";//in language card

    $country_code = "+00";
    $user_mob = "10-0000-0000";
    $user_web = "www.lubycon.com";
    $user_mail = "lorem@ipsum.com";//in contact card

    $localcity = "City";
    $localcountry = "Country";
    $usercity = "City";
    $usercountry = "Country";//in time card
?>
<div id="information_inbody">
    <ul id="dashboard_wrap">              
        <li class="dash_card" id="profile_card">
            <div class="artist_pic">
                <img src="<?=$user_img_url?>" alt="user_pic"/>
            </div>
            <div class="artist_location">
                <img src="<?=$user_location_img?>" alt="user_location"/>
            </div>
            <p class="artist_name"><?=$username?></p>
            <div id="sns_bt_wrap">
                <div class="sns_bt" id="facebook_bt">
                    <i class="fa fa-facebook"></i>
                </div>
                <div class="sns_bt" id="twitter_bt">
                    <i class="fa fa-twitter"></i>
                </div>
                <div class="sns_bt" id="google_bt">
                    <i class="fa fa-google-plus"></i>
                </div>
            </div> 
        </li><!--profile card end-->
        <li class="dash_card dash_card_long" id="recent_card"></li><!--recent card end-->
        <li class="dash_card" id="best_card"></li><!--best card end-->
        <li class="dash_card dash_card_wrap" id="job_language_wrap">
            <div class="info_card" id="job_card">
                <figure id="job_icon_wrap">
                    <p id="job_title">Job</p>
                    <i id="job_icon" class="fa fa-pencil"></i>
                </figure>
                <p class="artist_job"><?=$userjob?></p>
            </div><!--job card end-->
            <div class="info_card" id="language_card">
                <p id="personal_language"><i class="fa fa-language" id="language_icon"></i>
                    <?=$language1?>, <?=$language2?>
                </p>
            </div><!--language card end-->
        </li>   
        <li class="dash_card dash_card_wrap" id="contact_card_wrap" >
            <div class="contact_card" id="mobile_card">
                <p class="personal_num">
                    <i class="fa fa-mobile" id="mobile_icon"></i><span class="in_num">
                    <?=$country_code?>-<?=$user_mob?></span>
                </p>
            </div><!--mobile end-->
            <div class="contact_card" id="web_card">
                <p class="personal_num">
                    <i class="fa fa-desktop" id="desktop_icon"></i>
                    <span class="in_num"><a href="<?=$user_web?>"><?=$user_web?></a></span>
                </p>
            </div><!--website end-->
            <div class="contact_card" id="email_card">
                <p class="personal_num">
                    <?=$user_mail?>
                </p>
            </div><!--email end-->
        </li><!--contact card end-->
        <li class="dash_card dash_card_long"></li>
        <li class="dash_card dash_card_long" id="time_card"></li>
        <li class="dash_card dash_card_long" id="insight_card"></li>
    </ul>
</div>