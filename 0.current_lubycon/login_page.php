<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>LUBYCON</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="subject" content="Lubycon" />
    <meta name="description" content="free sources" />
    <meta name="author" content="Daniel ZEPOT" />
    <meta name="designer" content="Dart" />
    <meta name="robots" content="index" />
    <meta name="copyright" content="copyrights 2015 LUBYCON" />
    <meta name="keywords" content="font ,vector, 3D design, community, designers, engineer, 3D printer, Illustration, Lubycon" />
    
    <link rel="shortcut icon" href="./ch/img/logo/lubycon.ico" />  <!-- favicon -->
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
    <link href="css/layout/normalize.css" rel="stylesheet" type="text/css" />  <!-- web normalize -->
    <link href="css/layout/common.css" rel="stylesheet" type="text/css" /> 
    <link href='http://fonts.googleapis.com/css?family=Source Sans Pro:200,400' rel='stylesheet' type='text/css'>

    <script type="text/javascript" src="js/jquery-1.11.3.min.js"></script> <!-- jquery library -->
</head>
<body id="bodyer">
    <div id="login_box">
        <div id="login_box_header">SIGN IN</div>
        <form id="main_login" name="main_login" method="post">
            <div id="login_input">
                    <input type="text" id="login_id" name="login_id" value="E-mail"/><i id="email_icon" class="fa fa-user"></i>
                    <input type="password" id="login_pass" name="login_pass" value="Password" /><i id="pass_icon" class="fa fa-unlock-alt"></i>
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
</body>
</html>
