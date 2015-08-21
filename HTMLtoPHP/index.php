<!DOCTYPE html>

<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="subject" content="Lubycon" />
    <meta name="description" content="free sources" />
    <meta name="author" content="Daniel ZEPOT" />
    <meta name="robots" content="index" />
    <meta name="copyright" content="copyrights 2015 ZEPOT" />
    <meta name="keywords" content="font ,vector, 3D design, community, designers, engineer, 3D printer, Illustration, Lubycon" />

    <title>LUBYCON</title>
    <link rel="shortcut icon" href="CH/img/logo/lubycon.ico" />  <!-- favicon -->
    <!--<link href="http://fonts.googleapis.com/css?family=Exo+2:400" rel="stylesheet" type="text/css" />-->
    <link href='http://fonts.googleapis.com/css?family=Source Sans Pro:200,400' rel='stylesheet' type='text/css' />	<!--google web font-->
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" /> <!--icon font-->

    <link href="css/normalize.css" rel="stylesheet" type="text/css" />  <!-- web normalize -->
    <link href="css/layout/common.css" rel="stylesheet" type="text/css" />  <!-- common css -->
    <link href="css/index.css" rel="stylesheet" type="text/css" />  <!-- index file css -->
    <link href="css/selectordie.css" rel="stylesheet" type="text/css"> <!-- selector decoration css -->

    <script type="text/javascript" src="js/jquery-1.11.3.min.js"></script> <!-- jquery library -->
    <script type="text/javascript" src="js/index.js"></script> <!-- index file js -->

    <script type="text/javascript" src="js/selectordie.min.js"></script> <!-- selector decoration js -->
    <script type="text/javascript" src="js/selectordie.demo.js"></script> <!-- selector decoration js -->

      <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->


    

</head>
<body id="bodyer" ondragstart="return false" onselectstart="return false">
    <!-- popup start -->
    <div class="dark_overlay"></div>

    <div class="editer_popup">
        <p>Which content will you upload?</p>
        <ul>
            <li>
                <a href="./index.php?1=editer&2=editer&3=font">
                <i class="fa fa-font"></i>
                <p>Font</p>
                </a>
            </li>
            <li>
                <a href="./index.php?1=editer&2=editer&3=vector">
                <i class="fa fa-stop"></i>
                <p>Vector</p>
                </a>
            </li>
            <li>
                <a href="./index.php?1=editer&2=editer&3=3d">
                <i class="fa fa-cube"></i>
                <p>3D</p>
                </a>
            </li>
        </ul>
        <button class="editer_popup_cancel"><i class="fa fa-times"></i></button>
    </div>

    <section id="create_account_area">
        <p id="account_title">Create An Account</p>
        <div id="account_box">
            <form id="account_idpass" name=form action="./php/registration.php" method="post">
                <label>E-mail</label><input type="text" name="email" id="email_id"/><i></i>
                <p id="email_check" class="form_check"></p>
                <label>Password</label><input type="password" name="pass" id="pass_id" /><i></i>
                <p id="pass_check" class="form_check"></p>
                <label>Repeat Password</label><input type="password" name="repass" id="re_pass_id"/><i></i>
                <p id="re_pass_check" class="form_check"></p>
                <label>Nickname</label><input type="text" name="nick" id="nick_id"/><i></i>
                <p id="nick_check" class="form_check"></p>
            
            <div class="term_check_box">
                <p class="term_title">Terms of service</p>
                <p><img src="ch/img/pdf_icon.png" width="50" height="60" /></p>
                <p>I agree to terms of service</p><input type="checkbox" class="check_box" />
            </div>
            <div class="term_check_box">
                <p class="term_title">Terms of service</p>
                <p><img src="ch/img/pdf_icon.png" width="50" height="60" /></p>
                <p>I agree to terms of service</p><input type="checkbox" class="check_box"  />
            </div>
            <p id="account_email_sendcheck"> would like to receive newsletter by e-mail<input type="checkbox" class="email_resive" /></p>
            
            <input type="submit" class="account_submit" value="Submit" disabled/>
            </form>
        </div>
    </section>
    <!-- popup end -->
    <!---------------- common parts start ---------------->
    <!---------------- header start ---------------->
    <header id="main_header">
        <h1><a href="./index.php"><img src="CH/img/logo/lubycon_logo.svg" width="176" height="40" alt="main_logo" /></a></h1>
        <nav id="main_gnb">
            <ul id="gnb">
                <li class="bigsub">
                    Contents
                    <ul class="sub">
                        <li>
                            <a href="./index.php?1=contents&2=contents_page&3=font"><i class="fa fa-font fa-1x"></i><p>Font</p></a>
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
                        <li>
                            <a href="./index.php?1=community&2=community_page"><i class="fa fa-comments-o fa-1x"></i><p>Board</p></a>
                        </li>
                        <li>
                            <a href="./index.php?1=community&2=tutorial"><i class="fa fa-book fa-1x"></i><p>Tutorial</p></a>
                        </li>
                        <li>
                            <a href="./index.php?1=community&2=qna"><i class="fa fa-question fa-1x"></i><p>Q&amp;A</p></a>
                        </li>
                        <li>
                            <a href="./index.php?1=designers_page&2=designers_page"><i class="fa fa-star fa-1x"></i><p class="long_text">Designers Page</p></a>
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
                <div id="login_box">
                    <div id="login_box_header">SIGN IN</div>
                    <div id="login_input">
                        <input type="text" id="login_id" value="E-mail" /><i id="email_icon" class="fa fa-user"></i>
                        <input type="text" id="login_pass" value="Password" /><i id="pass_icon" class="fa fa-unlock-alt"></i>
                    </div>  <!-- end login_input div -->
                    <div id="login_submit">
                        <button id="login_facebook"><i class="fa fa-facebook"></i>Facebook</button>
                        <button id="login_google"><i class="fa fa-google-plus"></i>Google</button>
                    </div>     <!-- end login_submit div -->
                    <a href="./html/account/forgot_password.html" target="_self"><p id="forgot_pass">Forgot your password?</p></a>  
                    <p id="create_acc">Create An Account</p>          
                </div>  <!-- end login_box div -->
        </div>
        <!-- before sign in -->


        <!-- after sign in -->
        <div id="after_signin">
            <span class="partition">|</span>
            <figure><img src="ch/img/designer_img.png" /></figure>
            <span id="user_id">Daniel_zeppppp</span>
            <i class="fa fa-angle-down"></i>
            <ul>
                <li><a href="./index.php?1=personal_page&2=personal_page">Profile</a></li>
                <li><a href="./index.php?1=personal_page&2=message">Message</a></li>
                <li><a href="./index.php?1=personal_page&2=account_setting">Account Setting</a></li>
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
                <option value="Desinger">Desinger</option>
                <option value="Community">Community</option>
            </select>
        </div>
        <!-- end select_box -->
    </div>
    <!---------------- search bar end ---------------->
    <!---------------- common parts end ---------------->

    <?php
    if( empty($_GET['1']) == false ) 
    {
        include("php/".$_GET['1']."/".$_GET['2'].".php");
        //echo $_GET['1']."/".$_GET['2'].".html";
    }
    else
    {
        include("index_body.php");
    }
    ?>
    
    <footer id="footer"></footer>   <!--end footer-->
</body>


</html>