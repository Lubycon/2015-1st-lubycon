<?session_start()
    if(isset($_COOKIE)){
        if(isset($_COOKIE['login'])){
            $info = unserialize($_COOKIE['login']);
            setcookie('login', serialize($info), time()+5);
        }else if(!isset($_COOKIE['login'])){
            session_destroy();
        }
    }
?>
<!DOCTYPE html>

<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta name="subject" content="Lubycon" />
    <meta name="description" content="free sources" />
    <meta name="developer" content="Daniel ZEPOT" />
    <meta name="designer" content="Dart" />
    <meta name="robots" content="index" />
    <meta name="copyright" content="copyrights 2015 LUBYCON" />
    <meta name="keywords" content="design, font ,vector, 3D design, community, designers, engineer, 3D printer, Illustration, Lubycon" />

    <title>Lubycon</title>

    <link rel="shortcut icon" href="./ch/img/logo/lubycon.ico" /> <!-- favicon -->
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Source Sans Pro:200,400,600" type="text/css" />	<!--google web font-->
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" /> <!--icon font-->

    <link href="css/layout/normalize.css" rel="stylesheet" type="text/css" />  <!-- web normalize -->
    <link href="css/layout/common.css" rel="stylesheet" type="text/css" />  <!-- common css -->
    <link href="css/layout/media.css" rel="stylesheet" type="text/css" /> <!-- media query-->
    <link href="css/selectordie.css" rel="stylesheet" type="text/css" /> <!-- selector decoration css -->
    <link href="css/layout/animate.css" rel="stylesheet" type="text/css" /><!--animation for objects-->
    <link href="css/slider.css" rel="stylesheet" type="text/css" /><!--slider css-->

    <script type="text/javascript" src="js/jquery-1.11.3.min.js"></script> <!-- jquery library -->
    <script type="text/javascript" src="js/selectordie.min.js"></script> <!-- selector decoration js -->
    <script type="text/javascript" src="js/selectordie.demo.js"></script> <!-- selector decoration js -->
    <script type="text/javascript" src="js/slider.js"></script><!--slider plugin-->
    <script type="text/javascript" src="js/index.js"></script> <!-- index file js -->
    <script type="text/javascript" src="js/luby_ui.js"></script><!-- ui file js -->
    <script type="text/javascript" src="js/account.js"></script> <!-- account file js -->
    
    <meta name="viewport" content="width=device-width, height=device-height, user-scalable=no"><!--responsive design enable-->
    <meta name="theme-color" content="#222222"><!--mobile web browser address window will be changed to #222-->
    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
</head>
<body id="bodyer">
<div id="wrapper"> 
    <div class="dark_overlay"></div>
    <div id="cancel_layer"></div>
    <div id="gotop_bt"><i class="fa fa-angle-up"></i></div>
    <aside id="mb-menu_panel" class="visible-mb"><!--mobile panel menu-->
    <?php
        $user_pic = "./ch/img/no_img/no_img_user1.jpg";
        $user_name = "Lorem ipsum";
    ?>
        <header id="mb-user_section">
            <figure id="mb-user_pic">
                <img src=<?=$user_pic?>></img>
            </figure>
            <span id="mb-user_name"><?=$user_name?></span>
        </header>
        <ul class="mb-menu_group">
            <li class="mb-menu_list">
                <i class="fa fa-font fa-1x"></i><a href="./index.php?1=contents&2=contents_page&3=artwork">Artwork</a>
            </li>
            <li class="mb-menu_list">
                <i class="fa fa-square fa-1x"></i><a href="./index.php?1=contents&2=contents_page&3=vector">Vector</a>
            </li>
            <li class="mb-menu_list">
                <i class="fa fa-cube fa-1x"></i><a href="./index.php?1=contents&2=contents_page&3=3d">3D Model</a>
            </li>
        </ul>
        <ul class="mb-menu_group">
            <li class="mb-menu_list">
                <i class="fa fa-pencil fa-1x"></i><a href="./index.php?1=creators_page&2=creators">Creator</a>
            </li>
            <li class="mb-menu_list">
            	<i class="fa fa-comments-o fa-1x"></i><a href="./index.php?1=community&2=community_page&3=forum">Forum</a>
            </li>
        </ul>
        <ul class="mb-menu_group">
            <li class="mb-menu_list">
                <i class="fa fa-home fa-1x"></i><a href="./index.php?1=personal_page&2=personal_page&3=dashboard">Dashboard</a>
            </li>
            <li class="mb-menu_list">
                <i class="fa fa-line-chart fa-1x"></i><a href="./index.php?1=personal_page&2=personal_page&3=insight">Insight</a>
            </li>
            <li class="mb-menu_list">
                <i class="fa fa-gear fa-1x"></i><a href="./index.php?1=personal_page&2=personal_page&3=account_setting">Account Setting</a>
            </li>
        </ul>
        <ul class="mb-menu_group">
            <li class="mb-menu_list"><i class="fa fa-power-off fa-1x"></i>Log out</li>
        </ul>
    </aside>
    <!-- popup start -->
    <!-----------------------------------------------------alert boxes-------------------------------------------------->
    <div class="lubyAlert" id="successAlert">
        <i id="suc_icon" class="fa fa-check-circle rotateIn animated"></i>
        <p>Success!</p>
    </div><!--succese box-->
    <div class="lubyAlert" id="failAlert">
        <i id="fail_icon" class="fa fa-times tada animated"></i>
        <p>Failed!</p>
    </div><!--fail box-->
    <div class="lubyAlert" id="bookmarkAlert">
        <i id="star_icon" class="fa fa-star bounce animated"></i>
        <p>It's marked!</p>
    </div><!--bookmark box-->
    <div class="lubyAlert" id="likeAlert">
        <i id="like_icon" class="fa fa-heart bounceIn animated"></i>
        <p>Like :)</p>
    </div>
    <div class="lubyAlert" id="confirmAlert">
        <p class="confirm_text">Are you sure?</p>
        <button class="index_confirm_bt">Confirm</button>
        <button class="index_cancel_bt">Cancel</button>
    </div><!--confirm box-->
    <!-----------------------------------------------------alert boxes-------------------------------------------------->
    <div class="editor_popup fadeInDown animated">
        <p>Which content will you upload?</p>
        <ul>
            <li>
                <a href="./index.php?1=editor&2=editor&3=artwork">
                <i class="fa fa-font"></i>
                <p>Artwork</p>
                </a>
            </li>
            <li>
                <a href="./index.php?1=editor&2=editor&3=vector">
                <i class="fa fa-stop"></i>
                <p>Vector</p>
                </a>
            </li>
            <li>
                <a href="./index.php?1=editor&2=editor&3=3d">
                <i class="fa fa-cube"></i>
                <p>3D Model</p>
                </a>
            </li>
        </ul>
        <button class="editor_popup_cancel animate_scale"><i class="fa fa-times"></i></button>
    </div>
    <!-- popup end -->
    <!---------------- common parts start ---------------->
    <!---------------- header start ---------------->
    <header id="main_header">
        <div id="mb-menu" class="visible-mb"><i class="fa fa-bars"></i></div>
        <h1>
            <a href="./index.php">
                <img id="luby-logo" class="hidden-mb-ib" src="./ch/img/logo/lubycon_logo.svg" width="176" height="40" alt="Lubycon logo" />
                <img id="luby-logo-mb" class="visible-mb" src="./ch/img/logo/lubycon_logo-mb.svg" width="100" height="50" alt="Lubycon logo" />
            </a>
            <span id="beta_version" class="hidden-mb-b">BETA</span><!--beta mark-->
        </h1><!--LUBYCON LOGO-->

        <nav id="main_gnb" class="hidden-mb-b">
            <ul id="gnb">
                <li class="bigsub">
                    <a href="./index.php?1=contents&2=contents_page&3=all" class="bigsub_link">
                        Contents
                    </a>
                    <ul class="sub">
                        <li>
                            <a href="./index.php?1=contents&2=contents_page&3=artwork"><i class="fa fa-font fa-1x"></i><p>Artwork</p></a>
                        </li>
                        <li>
                            <a href="./index.php?1=contents&2=contents_page&3=vector"><i class="fa fa-square fa-1x"></i><p>Vector</p></a>
                        </li>
                        <li>
                            <a href="./index.php?1=contents&2=contents_page&3=3d"><i class="fa fa-cube fa-1x"></i><p>3D Model</p></a>
                        </li>
                    </ul>	<!--end Contents menu-->
                </li>
                <li class="menu_bar"></li>
                <li class="bigsub">
                    Community
                    <ul class="sub">
                        <li><!--ranking-->
                            <a href="./index.php?1=creators_page&2=creators"><i class="fa fa-pencil fa-1x"></i><p>Creators</p></a>
                        </li>
                        <li><!--forum-->
                            <a href="./index.php?1=community&2=community_page&3=forum"><i class="fa fa-comments-o fa-1x"></i><p>Forum</p></a>
                        </li>
                        <li><!--tutorial-->
                            <a href="./index.php?1=community&2=community_page&3=tutorial"><i class="fa fa-book fa-1x"></i><p>Tutorial</p></a>
                        </li>
                        <li><!--Q&A-->
                            <a href="./index.php?1=community&2=community_page&3=qna"><i class="fa fa-question fa-1x"></i><p>Q&amp;A</p></a>
                        </li>
                    </ul>	<!--end Community menu-->
                </li>
                <li class="menu_bar"></li>
                <li class="bigsub">
                    Company
                    <ul class="sub">
                        <li>
                            <a href="./index.php?1=company&2=about_us"><i class="fa fa-building fa-1x"></i><p>About us</p></a>
                        </li>
                    </ul>	<!--end Company menu-->
                </li>
            </ul> <!-- end gnb ul -->
        </nav>	<!--end main_gnb-->

        <!-- before sign in -->
        <div id="signin_bt" class="hidden-mb-b">
            <div id="signin">
                <a href="./login_page.php">
                    <p class="signicon"><i class="fa fa-unlock-alt fa-lg"></i></p>
                    <p class="signin">SIGN IN</p>
                </a>
            </div>  <!-- end signin -->
        </div>
        <!-- before sign in -->

        <!-- after sign in -->
        <div id="after_signin" class="hidden-mb-b">
                <figure><img src="./ch/img/no_img/no_img_user1.jpg" alt="profile_img" /></figure>
                <div id="display_user">
                    <span id="user_id">Admin_User</span>
                    <i class="fa fa-angle-down"></i>
                </div>  
            <ul>
                <li><a href="./index.php?1=personal_page&2=personal_page&3=dashboard">Dashboard</a></li>
                <li><a href="./index.php?1=personal_page&2=personal_page&3=my_contents">My Contents</a></li>
                <li><a href="./index.php?1=personal_page&2=personal_page&3=insight">Insight</a></li>
                <li><a href="./index.php?1=personal_page&2=personal_page&3=bookmark">Bookmarks</a></li>
                <li><a href="./index.php?1=personal_page&2=personal_page&3=account_setting">Account Setting</a></li>
                <li style="display:none;"><a href="./index.php?1=personal_page&2=personal_page&3=message">Message</a></li>
                <li id="sign_out"><a href="./logout.php">Sign Out</a></li>
            </ul>
        </div>
        <!-- end after sign in -->

        <button id="addcontent_bt" class="animate_width hidden-mb-b"><i class="fa fa-plus"></i>Add Contents</button>
        <!--세션 여기-->
        
        <?php
            if(isset($_COOKIE)){
                //echo '<script>console.log("if 1-1");</script>';
                if(isset($_COOKIE['login'])){
                    echo ('<script>$("#signin_bt").hide();$("#after_signin,#addcontent_bt").show();</script>');
                }
            }
        ?>

        <!--end content button-->
        <div id="lang_select_bt" class="hidden-mb-b">
            <ul>
                <li class="lang_selected">ENG</li>
                <ul class="lang_list">
                    <li>CHI</li>
                    <li class="selected_language">ENG</li>
                    <li>FRA</li>
                    <li>GER</li>
                    <li>JPN</li>
                    <li>KOR</li>
                    <li>RUS</li>
                    <li>SPA</li>
                </ul>	<!-- end lang_list -->
            </ul>	<!-- end lang_all -->
        </div>	<!-- end lang_select_bt -->
        <div id="mb-search" class="visible-mb"><i class="fa fa-search icon1"></i><i class="fa fa-angle-up icon2"></i></div>
    </header>	
    <!---------------- header end ---------------->
    <!---------------- search bar start ---------------->
    <div id="main_search_bar">
        <input type="text" id="main_search_text" value="Enter the Keyword" />
        <button id="main_search_btn" class="out">
            <i class="fa fa-search"></i>
        </button>

        <div id="select_box">|
            <select class="basic">
                <option value="All">All</option>
                <option value="Contents">Contents</option>
                <option value="Creatorr">Creator</option>
                <option value="Community">Community</option>
            </select>
            <span class="lubySelector_arrow"><i class="fa fa-caret-down"></i></span>
        </div>
        <!-- end select_box -->
    </div>
    <!---------------- search bar end ---------------->
    <!---------------- common parts end ---------------->
    <?php
        if( empty($_GET['1']) == false ) {
            include_once("php/".$_GET['1']."/".$_GET['2'].".php");
        }
        else{
            include_once("index_body.php");
        }
    ?>
    <footer id="footer" class="footer"></footer>   <!--end footer-->
</div>
</body>

</html>