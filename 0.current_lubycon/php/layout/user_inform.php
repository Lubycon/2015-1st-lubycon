<div id="information_body">
    <?php
        $username = "Admin_User";
        $userjob = "Job";
        $usercity = "City";
        $usercountry = "Country";
        $language1 = "Language1";
        $language2 = "Language2";
        $user_descript = "Hi Lubycon guys. I'm Daniel.<br>
                    I work at front-end engineer and usally use Javascript or PHP. 
                    If you felt something after see my design that please message to me right now :)";
        //first_Card end
        $country_code = "+00";
        $user_mob = "10-0000-0000";
        $user_fax = "10-0000-0000";
        $user_web = "www.lubycon.com";
        //second_Card end
        $total_view = 0;
        $total_like = 0;
        $total_down = 0;
        $total_follow = 0;
        //third_Card end
    ?>
    <div id="information_inbody">
        <section id="personal_info">
            <div id="personal_info_wrap">
                <figure id="personal_photo">
                    <img src="./ch/img/no_img/no_img_user1.jpg" alt="Designer_photo" />
                </figure>
                
                <div id="basic_info_box">
                    <span id="personal_name"><?=$username?></span>
                    <p id="personal_job"><i class="fa fa-suitcase" id="job_icon"></i>
                        <?=$userjob?>
                    </p>
                    <p id="personal_legion"><i class="fa fa-home" id="home_icon"></i>
                        <?=$usercity?>, <?=$usercountry?>
                    </p>
                    <p id="personal_language"><i class="fa fa-language" id="language_icon"></i>
                        <?=$language1?>, <?=$language2?>
                    </p>
                </div>
            </div>
            <div id="descript_box">
                <p id="personal_des">
                    <?=$user_descript?><!--166byte/space-->
                </p>
            </div>
        </section>
        <section id="personal_contact">
            <ul>
                <li class="personal_num">
                    <i class="fa fa-mobile" id="mobile_icon"></i><span class="in_num">
                    <?=$country_code?>-<?=$user_mob?></span>
                </li>
                <li class="personal_num">
                    <i class="fa fa-fax" id="fax_icon"></i><span class="in_num">
                    <?=$country_code?>-<?=$user_fax?>
                </span>
                </li>
                <li class="personal_num">
                    <i class="fa fa-desktop" id="desktop_icon"></i><span class="in_num">
                    <a href="<?=$user_web?>">
                        <?=$user_web?>
                    </a></span>
                </li>
            </ul>
        </section>
        <section id="personal_score">
            <ul>
                <li><i class="fa fa-eye"></i><p><?=$total_view?></p></li>
                <li><i class="fa fa-heart"></i><p><?=$total_like?></p></li>
                <li><i class="fa fa-download"></i><p><?=$total_down?></p></li>
                <li><i class="fa fa-user-plus"></i><p><?=$total_follow?></p></li>
            </ul>
            <button id="personal_messeage"><i class="fa fa-envelope-o"></i><p>Messeage</p></button>
            <button id="personal_follow"><i class="fa fa-user-plus"></i><p>Follow</p></button>
        </section>
    </div>
</div>