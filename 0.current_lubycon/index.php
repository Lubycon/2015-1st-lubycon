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
    <link href="css/selectordie.css" rel="stylesheet" type="text/css" /> <!-- selector decoration css -->
    <link href="css/layout/animate.css" rel="stylesheet" type="text/css" />

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

    <div class="editer_popup fadeInDown animated">
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
                <label>Location</label><div class="location_option_ca">
                        <select class="basic_filter">
                            <option value="Afganistan">Afghanistan</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">American Samoa</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antigua &amp; Barbuda">Antigua &amp; Barbuda</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bonaire">Bonaire</option>
                            <option value="Bosnia &amp; Herzegovina">Bosnia &amp; Herzegovina</option>
                            <option value="Botswana">Botswana</option>
                            <option value="Brazil">Brazil</option>
                            <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                            <option value="Brunei">Brunei</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Canary Islands">Canary Islands</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Cayman Islands">Cayman Islands</option>
                            <option value="Central African Republic">Central African Republic</option>
                            <option value="Chad">Chad</option>
                            <option value="Channel Islands">Channel Islands</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Christmas Island">Christmas Island</option>
                            <option value="Cocos Island">Cocos Island</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo">Congo</option>
                            <option value="Cook Islands">Cook Islands</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Cote DIvoire">Cote D'Ivoire</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Curaco">Curacao</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">Czech Republic</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">Dominican Republic</option>
                            <option value="East Timor">East Timor</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Falkland Islands">Falkland Islands</option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="French Guiana">French Guiana</option>
                            <option value="French Polynesia">French Polynesia</option>
                            <option value="French Southern Ter">French Southern Ter</option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Great Britain">Great Britain</option>
                            <option value="Greece">Greece</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guadeloupe">Guadeloupe</option>
                            <option value="Guam">Guam</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Hawaii">Hawaii</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran">Iran</option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Isle of Man">Isle of Man</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kiribati">Kiribati</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Laos">Laos</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libya">Libya</option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Macau">Macau</option>
                            <option value="Macedonia">Macedonia</option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marshall Islands">Marshall Islands</option>
                            <option value="Martinique">Martinique</option>
                            <option value="Mauritania">Mauritania</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Midway Islands">Midway Islands</option>
                            <option value="Moldova">Moldova</option>
                            <option value="Monaco">Monaco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Nambia">Nambia</option>
                            <option value="Nauru">Nauru</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Netherland Antilles">Netherland Antilles</option>
                            <option value="Netherlands">Netherlands (Holland, Europe)</option>
                            <option value="Nevis">Nevis</option>
                            <option value="New Caledonia">New Caledonia</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Niger">Niger</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Niue">Niue</option>
                            <option value="Norfolk Island">Norfolk Island</option>
                            <option value="North Korea">North Korea</option>
                            <option value="Norway">Norway</option>
                            <option value="Oman">Oman</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palau Island">Palau Island</option>
                            <option value="Palestine">Palestine</option>
                            <option value="Panama">Panama</option>
                            <option value="Papua New Guinea">Papua New Guinea</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Phillipines">Philippines</option>
                            <option value="Pitcairn Island">Pitcairn Island</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Republic of Montenegro">Republic of Montenegro</option>
                            <option value="Republic of Serbia">Republic of Serbia</option>
                            <option value="Reunion">Reunion</option>
                            <option value="Romania">Romania</option>
                            <option value="Russia">Russia</option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="St Barthelemy">St Barthelemy</option>
                            <option value="St Eustatius">St Eustatius</option>
                            <option value="St Helena">St Helena</option>
                            <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                            <option value="St Lucia">St Lucia</option>
                            <option value="St Maarten">St Maarten</option>
                            <option value="St Pierre &amp; Miquelon">St Pierre &amp; Miquelon</option>
                            <option value="St Vincent &amp; Grenadines">St Vincent &amp; Grenadines</option>
                            <option value="Saipan">Saipan</option>
                            <option value="Samoa">Samoa</option>
                            <option value="Samoa American">Samoa American</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Sao Tome &amp; Principe">Sao Tome &amp; Principe</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra Leone">Sierra Leone</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Solomon Islands">Solomon Islands</option>
                            <option value="Somalia">Somalia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="South Korea">South Korea</option>
                            <option value="Spain">Spain</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Sudan">Sudan</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Swaziland">Swaziland</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Syria">Syria</option>
                            <option value="Tahiti">Tahiti</option>
                            <option value="Taiwan">Taiwan</option>
                            <option value="Tajikistan">Tajikistan</option>
                            <option value="Tanzania">Tanzania</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Togo">Togo</option>
                            <option value="Tokelau">Tokelau</option>
                            <option value="Tonga">Tonga</option>
                            <option value="Trinidad &amp; Tobago">Trinidad &amp; Tobago</option>
                            <option value="Tunisia">Tunisia</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Turkmenistan">Turkmenistan</option>
                            <option value="Turks &amp; Caicos Is">Turks &amp; Caicos Is</option>
                            <option value="Tuvalu">Tuvalu</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Erimates">United Arab Emirates</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="United States of America">United States of America</option>
                            <option value="Uraguay">Uruguay</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Vanuatu">Vanuatu</option>
                            <option value="Vatican City State">Vatican City State</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Vietnam">Vietnam</option>
                            <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                            <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                            <option value="Wake Island">Wake Island</option>
                            <option value="Wallis &amp; Futana Is">Wallis &amp; Futana Is</option>
                            <option value="Yemen">Yemen</option>
                            <option value="Zaire">Zaire</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                        </select>
                    </div>
            
            <div class="term_check_box">
                <p class="term_title">Terms of service</p>
                <p><img src="ch/img/pdf_icon.png" width="50" height="60" alt="terms of service" /></p>
                <p>I agree to terms of service</p><input type="checkbox" class="check_box" />
            </div>
            <div class="term_check_box">
                <p class="term_title">Terms of service</p>
                <p><img src="ch/img/pdf_icon.png" width="50" height="60" alt="terms of service" /></p>
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
        <h1><a href="./index.php"><img src="CH/img/logo/lubycon_logo.svg" width="176" height="40" alt="Lubycon logo" /></a></h1>
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
                            <a href="./index.php?1=community&2=community_page&3=forum"><i class="fa fa-comments-o fa-1x"></i><p>Forum</p></a>
                        </li>
                        <li>
                            <a href="./index.php?1=community&2=community_page&3=tutorial"><i class="fa fa-book fa-1x"></i><p>Tutorial</p></a>
                        </li>
                        <li>
                            <a href="./index.php?1=community&2=community_page&3=qna"><i class="fa fa-question fa-1x"></i><p>Q&amp;A</p></a>
                        </li>
                        <li>
                            <a href="./index.php?1=designers_page&2=designers_page&3=all"><i class="fa fa-star fa-1x"></i><p>Ranking</p></a>
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
                    <div id="login_input">
                        <input type="text" id="login_id" value="E-mail" /><i id="email_icon" class="fa fa-user"></i>
                        <input type="text" id="login_pass" value="Password" /><i id="pass_icon" class="fa fa-unlock-alt"></i>
                    </div>  <!-- end login_input div -->
                    <div id="login_submit">
                        <button id="login_facebook"><i class="fa fa-facebook"></i>Facebook</button>
                        <button id="login_google"><i class="fa fa-google-plus"></i>Google</button>
                    </div>     <!-- end login_submit div -->
                    <a href="./php/account/forgot_password.php" target="_self"><p id="forgot_pass">Forgot your password?</p></a>  
                    <p id="create_acc">Create An Account</p>          
                </div>  <!-- end login_box div -->
        </div>
        <!-- before sign in -->


        <!-- after sign in -->
        <div id="after_signin">
            <span class="partition">|</span>
            <figure><img src="ch/img/designer_img.png" alt="profile img" /></figure>
            <span id="user_id">Daniel_zeppppp</span>
            <i class="fa fa-angle-down"></i>
            <ul>
                <li><a href="./index.php?1=personal_page&2=personal_page&3=main">My Contents</a></li>
                <li><a href="./index.php?1=personal_page&2=message&3=main">Message</a></li>
                <li><a href="#">Bookmarks</a></li>
                <li><a href="./index.php?1=personal_page&2=account_setting&3=main">Account Setting</a></li>
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