<li>
    <?php
        $number = $_GET["number"];
        $current_url = $third_param;
        $artwork_subject = array('wild','A.P.C. - Redesign','A4 Magazine Mock Up (FREE)','alp impressions X','Amsdam Typeface','Anyone','Astronaut Y&R Mexico','BEACH HOUSE','Beasts','Blancpain GT Series. Monza (2015)','Cirka Distilleries','Clean Broadcast Package','CLEANSING INSIDE','Climbing crew - Pinch lovers','DAS KREATIVE HAUS','Digital Portraits','Dinette - Restaurant Branding','Donuts Webdesign','driexdrie','Editorial 2015','Exhibition Design Art Fair 2015','Five projects 2015','foodwheels','Frockhub','Greetings','Guide to the Expanse','I-ZUK','Jackpot - Nissan NP300','Kirpichi burger bar','Landyachtz New Graphics','Left March','Lipton Ice Tea','LULA Magazine Website','Manerba Office system catalogues','Marmier','Mechanical fish mod. Delta','MY LAND- Sugar Mountain. #03','Nike - Forward Engineering vs Industrial Logoism','Ofelia','Play','POLO HOSPITALITY','Project Farmhouse Maas Architects','Quartz','Quiet Life','R LOGO II','Revolution','Schmitten Chocolates Splash','SKETCHBOOK HOLIDAYS','Spooky','starwars','Strana detey  Kids world','The King Pirate','This Means War','Trace a Line','Universal Monsters poster set','Vision - Pause fest 2016 Motion Response','Warsteiner X Fricote Magazine','watched','Watts Dominique','Wedding Stationery  Ashley & Edwin','Weekly Project Abstract Shapes','White River');
        $vector_subject = array('Zombie Selfie','2d graphics','Apex Predator','Arachnoid','BMW E9. Vector illustration','Brave Berserker','Buildings','Buildingss','Carrot App Logo','CBRE Animated Infographics','Character Doodles','Comics Tribute Vector','Cosmos Muertos','Cute Monster Pack','Denmark','Expo 2015 - Cereals & Tubers','Favorite Albums, 2015','Fire temple warriors','Flat Design Manchot','Freddy Krueger SLEEP KILLS (Poster)','FU#K MARVEL','Glennz Tees Concepts & Designs July-Dec 2015','Golden animals','Grayscale Vector','HANDLETTERED LOGOTYPES & MARKS ? VOL. 2','Icarus Myths Legends','Icon Selection 2015','Illusive','Illustration Mix 2013','Jack Nicholson - Low poly','Jon Bellion','Lauren Calaway','Lootcrate - Cyber','Lord Ganesh','Masterok - branding, character, website design','Midnight Girl','My Desk','My vector drawings','Mystic cat force','Natale con i tuoi Christmas Card','Native Americans','Natural Anthem','Owls of the World','Personal tribute to Lemmy Kilmister','Phobos','Polygons Marvel Heroes','Portraits 03','Portraits 04','Queen of Spades','RIDERS','Run Out - Album','Save Us Records Cover Art for EPs 2015','Sea free icons','Shadow of the Colossus Poster Series','Shinobi Systems','Star Wars First order vector','SUPA-ROBOT','Superette - Iconography Collection','Telegramme Paper Co. Wildlife Collection','The New York Times','Timo!','Univali - Video','Vector 15','Vector illustration set','Workshop Grafica vettoriale, la nuova stampa darte','World Landmarks','ZIAMIMI Font');

        switch($current_url)
        {
            case "artwork" : $current_url = "artwork"; $contents_name = $artwork_subject; break;
            case "vector" : $current_url = "vector"; $contents_name = $vector_subject; break;
            case "3d" : $current_url = "3d"; break;
            default : $current_url = "artwork"; break;
        };

        $username = "Admin_User";
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
                        default : echo "artwork"; break;
                    };
                    echo "&4=".$number."'>";
                ?>
                    <h4 class="contents_title load_view"><?=$contents_name[$number]?></h4>
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
                        default : echo "artwork"; break;
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
