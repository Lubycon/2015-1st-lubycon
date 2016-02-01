<link href="css/index.css" rel="stylesheet" type="text/css" />  <!-- index file css -->
<div id="index_figure_wrap" class="main_figure_wrap hidden-mb-b">
    <figure id="index_figure">
        <h2>Connect Your Creativity With The World</h2>
    </figure>
</div>
<!-- end main_figure -->
<!--index contents page for mobile start-->
<section class="mobile_wrap visible-mb">
    <?php
        $artwork_count = 0;
        $vector_count = 0;
        $threeD_count = 0;
    ?>
    <section class="mb-contents_wrap">
        <div class="mb-contents_inner">
            <div class="mb-contents_title">
                <i class="fa fa-font"></i>
                <h1>ARTWORK</h1>
                <p class="mb-contents_count"><?=$artwork_count?>&nbsp;Contents</p>
            </div>
            <div class="mb-big_content">
                <img src="../contents_data/artworkjpg/thumb/5.jpg" alt="best_img">
            </div>
            <div class="mb-contents_contents">
                <?php
                    for( $i=1 ; $i<=4 ; $i++ ){
                        echo '<div class="mb-contents">
                                <img src="../contents_data/artworkjpg/thumb/'.$i.'.jpg" alt="artwork_thumbnail'.$i.'">
                              </div>';
                    };
                ?>   
            </div>
            <div class="mb-contents_footer">
                <div class="mb-view_more" id="mb-artwork_bt"><p>VIEW MORE</p></div>
            </div>
        </div><!--section 1 end-->
        <div class="mb-contents_inner">
            <div class="mb-contents_title">
                <i class="fa fa-square"></i>
                <h1>VECTOR</h1>
                <p class="mb-contents_count"><?=$vector_count?>&nbsp;Contents</p>
            </div>
            <div class="mb-big_content">
                <img src="../contents_data/vectorjpg/thumb/7.jpg" alt="best_img">
            </div>
            <div class="mb-contents_contents">
                <?php
                    for( $i=1 ; $i<=4 ; $i++ ){
                        echo '<div class="mb-contents">
                                <img src="../contents_data/vectorjpg/thumb/'.$i.'.jpg" alt="vector_thumbnail'.$i.'">
                              </div>';
                    };
                ?>   
            </div>
            <div class="mb-contents_footer">
                <div class="mb-view_more" id="mb-vector_bt"><p>VIEW MORE</p></div>
            </div>
        </div><!--section 2 end-->
        <div class="mb-contents_inner">
            <div class="mb-contents_title">
                <i class="fa fa-cube"></i>
                <h1>3D MODEL</h1>
                <p class="mb-contents_count"><?=$threeD_count?>&nbsp;Contents</p>
            </div>
            <div class="mb-big_content">
                <img src="../contents_data/3djpg/thumb/5.jpg" alt="best_img">
            </div>
            <div class="mb-contents_contents">
                <?php
                    /*for( $i=1 ; $i<=4 ; $i++ ){
                        echo '<div class="mb-contents">
                                <img src="../contents_data/3djpg/thumb/'.$i.'.jpg" alt="3d_thumbnail'.$i.'">
                              </div>';
                    };*/
                ?>   
            </div>
            <div class="mb-contents_footer">
                <div class="mb-view_more" id="mb-3d_bt"><p>VIEW MORE</p></div>
            </div>
        </div><!--section 3 end-->
    </section>
</section>
<!--index contents page for mobile end-->


<!-- main slider js -->
<!-- index page slider plugin -->
<script>
    jQuery(document).ready(function ($) {

        var _SlideshowTransitions = [
        //Fade
        { $Duration: 1200, $Opacity: 2 }
        ];

        var options = {
            $AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
            $AutoPlaySteps: 1,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
            $AutoPlayInterval: 3000,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
            $PauseOnHover: 1,                               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, 4 freeze for desktop, 8 freeze for touch device, 12 freeze for desktop and touch device, default value is 1
            $ArrowKeyNavigation: true,   			            //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
            $SlideDuration: 500,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
            //$SlideWidth: 600,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
            //$SlideHeight: 300,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
            $SlideSpacing: 0, 					                //[Optional] Space between each slide in pixels, default value is 0
            $DisplayPieces: 1,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
            $ParkingPosition: 0,
            $DragOrientation: 0, //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.

            $BulletNavigatorOptions: {                                //[Optional] Options to specify and enable navigator or not
                $Class: $JssorBulletNavigator$,                       //[Required] Class to create navigator instance
                $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                $AutoCenter: 1,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                $Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
                $Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
                $SpacingX: 10,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
                $SpacingY: 10,                                   //[Optional] Vertical space between each item in pixel, default value is 0
                $Orientation: 1                                 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
            },
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
                $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
            }
        };

        var jssor_slider1 = new $JssorSlider$("slider1", options);
        var jssor_slider2 = new $JssorSlider$("slider2", options);
        var jssor_slider3 = new $JssorSlider$("slider3", options);

        //responsive code begin
        //you can remove responsive code if you don't want the slider scales while window resizes
        function ScaleSlider() {
            var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
            if (parentWidth)
                jssor_slider1.$ScaleWidth(Math.min(parentWidth, 980));
            else
                window.setTimeout(ScaleSlider, 30);
        }
        ScaleSlider();

        $(window).bind("load", ScaleSlider);
        $(window).bind("resize", ScaleSlider);
        $(window).bind("orientationchange", ScaleSlider);
        //responsive code end
    });
</script>

<!-- index page slider plugin -->
<section id="slide_section" class="hidden-mb-b">
    <nav id="slide_lnb">
        <input id="artwork_bt" type="radio" name="tap" checked="checked" />
        <input id="vector_bt" type="radio" name="tap" />
        <input id="3d_bt" type="radio" name="tap" />
        <nav>
            <label for="artwork_bt" class="la_bt clicked">ARTWORK</label>
            <label for="vector_bt" class="la_bt">VECTOR</label>
            <label for="3d_bt" class="la_bt">3D MODEL</label>
            <p class="down_triangle .hidden-mb-b"></p>
        </nav>
        <!-- end nav -->
    </nav>
    <!--end slide lnb-->
    <?php
        for( $i=1 ; $i<4 ; $i++ ){ //loop slider making
            echo 
            '<div id="slider'.$i.'" style="width: 980px; height: 363px;">
            <div class="slides" u="slides">';
                for( $j=1 ; $j<4 ; $j++ ){ //loop slide page  
            echo'<div>
                    <ul>';
                        for( $k=1 ; $k<11 ; $k++ ){ //loop slide img call
                        echo '<li class="load_view">
                                <a href="./index.php?1=contents&2=contents_view&3=';
                                switch($i){
                                    case "1" : echo "artwork"; break;
                                    case "2" : echo "vector"; break;
                                    case "3" : echo "3d"; break;
                                    default : echo ""; break;
                                };
                                echo '">
                                <img src="./ch/img/slider/slider'.$i.'/'.$k.'.png" alt="thumbnail_photo_'.$k.'">
                                </a>
                              </li>';
                        }
                echo'</ul>
                </div>';
                }
        echo'</div>
            <div u="navigator" class="slider_pager">
                <div u="prototype"></div>
            </div>
            <span u="arrowleft" class="slider_arrow_left">
                <i class="fa fa-angle-left"></i>
            </span>
            <span u="arrowright" class="slider_arrow_right">
                <i class="fa fa-angle-right"></i>
            </span>
            </div>';
        }
    ?>
    <!-- end slider div -->
</section>
<!--slide section end-->

<!--designer of the month start-->
<section id="designer_month" class="hidden-mb-b">
    <article class="designer_title">CREATOR OF THE MONTH</article>
    <div id="designer_body">
        <div id="designer_inbody">
            <div id="designer_photo">
                <figure id="photo_frame"></figure>
                <canvas id="photo_body" width="280" height="325"></canvas>
                <ul>
                    <li id="designer_name">SsaRu</li>
                    <li id="designer_job">Engineer</li>
                    <li id="designer_location"><i class="fa fa-home"></i>Seoul, South korea</li>
                </ul>
            </div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                Cras commodo lacus at lacus bibendum imperdiet.<br />
                Quisque in accumsan turpis. Nullam non lacus nec enim convallis iaculis.<br />
                Vivamus a sodales sapien. Curabitur suscipit ullamcorper enim, quis hendrerit nunc tempus eu.<br />
                Nunc porttitor mauris sapien, quis molestie quam placerat sit amet.<br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
            </p>
            <div id="interview">Read the interview<i class="fa fa-angle-right"></i></div>
        </div>
    </div>
</section>
<!--designer of the month end-->

<section id="community_pre" class="hidden-mb-b">
    <!--community preview start-->
    <article class="designer_title">HOT TOPICS IN <font color="#48cfad">DECEMBER</font></article>
    <ul>
        <?php
            for( $i=0 ; $i<5 ; $i++ ){
                include("php/layout/index_forum.php");
            };
        ?>
    </ul>
</section>
<!--community preview end-->
