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
    <link rel="shortcut icon" href="CH/img/lubycon.ico" />  <!-- favicon -->
    <!--<link href="http://fonts.googleapis.com/css?family=Exo+2:400" rel="stylesheet" type="text/css" />-->
    <link href='http://fonts.googleapis.com/css?family=Hind:400' rel='stylesheet' type='text/css' />	<!--google web font-->
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" /> <!--icon font-->

    <link href="css/normalize.css" rel="stylesheet" type="text/css" />  <!-- web normalize -->
    <link href="css/index.css" rel="stylesheet" type="text/css" />  <!-- index file css -->
    <link href="css/flexslider.css" rel="stylesheet" type="text/css" /> <!-- main slider css -->
    <link href="css/selectordie.css" rel="stylesheet" type="text/css">

    <script type="text/javascript" src="js/jquery-1.11.3.min.js"></script> <!-- jquery library -->
    <script type="text/javascript" src="js/index.js"></script> <!-- index file js -->
    <script type="text/javascript" src="js/jquery.flexslider.js"></script> <!-- main slider js -->

    <script type="text/javascript" src="js/selectordie.min.js"></script>
    <script type="text/javascript" src="js/selectordie.demo.js"></script>

    <!-- FlexSlider apply code -->
    <script type="text/javascript">
        $(function () {
            SyntaxHighlighter.all();
        });
        $(window).load(function () {
            $('.flexslider').flexslider({
                animation: "slide",
                start: function (slider) {
                    $('body').removeClass('loading');
                }
            });
        });
    </script>
    <!-- FlexSlider apply code -->

</head>
<body id="bodyer">
    <?php
      echo file_get_contents("php/header.php");
    ?>
	<?php
      echo file_get_contents("php/main_slider.php");
    ?>
	<?php
      echo file_get_contents("php/main_designers.php");
    ?>
	<?php
      echo file_get_contents("php/main_board.php");
    ?>
	<?php
      echo file_get_contents("php/footer.php");
    ?>
</body>
</html>