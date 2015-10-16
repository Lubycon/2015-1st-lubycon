<!DOCTYPE html>

<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="subject" content="Lubycon" />
    <meta name="description" content="free sources" />
    <meta name="author" content="Daniel ZEPOT" />
    <meta name="robots" content="index" />
    <meta name="copyright" content="copyrights 2015 LUBYCON" />
    <meta name="keywords" content="design, font ,vector, 3D design, community, designers, engineer, 3D printer, Illustration, Lubycon" />

    <title>LUBYCON</title>

    <link rel="shortcut icon" href="CH/img/logo/lubycon.ico" /> <!-- favicon -->
    <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Source Sans Pro:200,400" type="text/css" />	<!--google web font-->
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" /> <!--icon font-->

    <link href="css/layout/normalize.css" rel="stylesheet" type="text/css" />  <!-- web normalize -->
    <link href="css/layout/common.css" rel="stylesheet" type="text/css" />  <!-- common css -->  
    <link href="css/selectordie.css" rel="stylesheet" type="text/css" /> <!-- selector decoration css -->
    <link href="css/layout/animate.css" rel="stylesheet" type="text/css" /><!--animation for objects-->
    <link href="css/slider.css" rel="stylesheet" type="text/css">

    <script type="text/javascript" src="js/jquery-1.11.3.min.js"></script> <!-- jquery library -->
    <script type="text/javascript" src="js/selectordie.min.js"></script> <!-- selector decoration js -->
    <script type="text/javascript" src="js/selectordie.demo.js"></script> <!-- selector decoration js -->
    <script type="text/javascript" src="js/slider.js"></script><!--slider plugin-->
    <script type="text/javascript" src="js/index.js"></script> <!-- index file js -->

    <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
</head>
<body id="bodyer">
    <!-- popup start -->
    <div class="dark_overlay"></div>
    <!-----------------------------------------------------alert boxes-------------------------------------------------->
    <div class="luby_alert" id="suc_alert">
        <i id="suc_icon" class="fa fa-check-circle rotateIn animated"></i>
        <p>Success!</p>
    </div><!--succese box-->
    <div class="luby_alert" id="fail_alert">
        <i id="fail_icon" class="fa fa-times tada animated"></i>
        <p>Failed!</p>
    </div><!--fail box-->
    <div class="luby_alert" id="bookmark_alert">
        <i id="star_icon" class="fa fa-star bounce animated"></i>
        <p>It's marked!</p>
    </div><!--bookmark box-->
    <div class="luby_alert" id="like_alert">
        <i id="like_icon" class="fa fa-heart"></i>
        <p>Like :)</p>
    </div>
    <div class="luby_alert" id="confirm_alert">
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
                <p>3D</p>
                </a>
            </li>
        </ul>
        <button class="editor_popup_cancel"><i class="fa fa-times"></i></button>
    </div>
    <!-- popup end -->
    <!---------------- common parts start ---------------->
    <!---------------- header start ---------------->
    <header id="main_header">
        <h1>
            <a href="./index.php">
                <img src="CH/img/logo/lubycon_logo.svg" width="176" height="40" alt="Lubycon logo" />
            </a>
            <span id="beta_version">BETA</span><!--beta mark-->
        </h1><!--LUBYCON LOGO-->

        <nav id="main_gnb">
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
                            <a href="./index.php?1=contents&2=contents_page&3=3d"><i class="fa fa-cube fa-1x"></i><p>3D</p></a>
                        </li>
                    </ul>	<!--end Contents menu-->
                </li>
                <li class="menu_bar"></li>
                <li class="bigsub">
                    Community
                    <ul class="sub">
                        <li><!--ranking-->
                            <a href="./index.php?1=designers_page&2=designers_page&3=all"><i class="fa fa-trophy fa-1x"></i><p>Ranking</p></a>
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
        <div id="signin_bt">
            <div id="signin">
                <span class="partition">|</span>
                <p class="signicon"><i class="fa fa-unlock-alt fa-lg"></i></p>
                <p class="signin">SIGN IN</p>
            </div>  <!-- end signin -->
                <div id="login_box" class="bounceInDown animated">
                    <div id="login_box_header">SIGN IN</div>
                    <form id="main_login" name="main_login" method="post">
                        <div id="login_input">
                                <input type="text" id="login_id" name="login_id" value="E-mail"/><i id="email_icon" class="fa fa-user"></i>
                                <input type="text" id="login_pass" name="login_pass" value="Password" /><i id="pass_icon" class="fa fa-unlock-alt"></i>
                        </div> <!-- end login_input div --> 
                        <input id="login_lubycon" type="button" value="Go"><!--submit bt-->
                    </form><!--end login_input form-->
                    <a href="./php/account/forgot_password.php" target="_self"><p id="forgot_pass">Forgot your password?</p></a> 
                    <div id="login_submit">
                        <button id="login_facebook"><i class="fa fa-facebook"></i><span></span></button>
                        <button id="login_google"><i class="fa fa-google-plus"></i><span></span></button>
                    </div>     <!-- end login_submit div -->
                    <p id="create_acc">Create An Account</p>          
                </div>  <!-- end login_box div -->
        </div>
        <!-- before sign in -->


        <!-- after sign in -->
        <div id="after_signin">
            <a href="./index.php?1=personal_page&2=personal_page&3=main&4=my_contents">
                <span class="partition">|</span>
                <figure><img src="ch/img/no_img/no_img_user1.jpg" alt="profile_img" /></figure>
                <span id="user_id">Admin_User</span>
                <i class="fa fa-angle-down"></i>
            </a>
            <ul>
                <li><a href="./index.php?1=personal_page&2=personal_page&3=main&4=my_contents">My Contents</a></li>
                <li style="display:none;"><a href="./index.php?1=personal_page&2=personal_page&3=main&4=message">Message</a></li>
                <li><a href="./index.php?1=personal_page&2=personal_page&3=main&4=bookmarks">Bookmarks</a></li>
                <li><a href="./index.php?1=personal_page&2=personal_page&3=main&4=account_setting">Account Setting</a></li>
                <li id="sign_out">Sign Out</li>
            </ul>
        </div>
        <!-- end after sign in -->

        <button id="addcontent_bt"><i class="fa fa-plus"></i>Add Contents</button>

        <!--end content button-->
        <div id="lang_select_bt">
            <ul>
                <li class="lang_selected">ENG</li>
                <ul class="lang_list">
                    <li>KOR</li>
                    <li>CHN</li>
                    <li>ENG</li>
                    <li>FRN</li>
                    <li>JPN</li>
                    <li>POR</li>
                </ul>	<!-- end lang_list -->
            </ul>	<!-- end lang_all -->
        </div>	<!-- end lang_select_bt -->
    </header>	
    <!---------------- header end ---------------->
    <!---------------- search bar start ---------------->
    <div id="main_search_bar">
        <input type="text" id="main_search_text" value="Enter the Keyword" />

        <button id="main_search_btn" class="out">
            <i class="fa fa-caret-left"></i>
            <i class="fa fa-search"></i>
        </button>

        <div id="select_box">|
            <select class="basic">
                <option value="All">All</option>
                <option value="Contents">Contents</option>
                <option value="Designer">Designer</option>
                <option value="Community">Community</option>
            </select>
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
    <footer id="footer" class="relative_foot"></footer>   <!--end footer-->
</body>

</html>