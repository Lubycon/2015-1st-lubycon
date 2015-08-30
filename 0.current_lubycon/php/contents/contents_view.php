<div id="pop_up">
    <link rel="stylesheet" type="text/css" href="css/contents_view.css" />
    <script type="text/javascript" src="js/slider.js"></script>
    <script>
    jQuery(document).ready(function ($) {

        var _SlideshowTransitions = [
        //Fade
        { $Duration: 1200, $Opacity: 2 }
        ];

        var options = {
            $AutoPlay: false,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
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

        var jssor_slider1 = new $JssorSlider$("contents_view_slider", options);

        //responsive code begin
        //you can remove responsive code if you don't want the slider scales while window resizes
        function ScaleSlider() {
            var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
            if (parentWidth)
                jssor_slider1.$ScaleWidth(Math.min(parentWidth, 610));
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

    <section class="contents_view">
        <header>
            <h3>Vans flower Shoes</h3>
            <h4>Free</h4>
            <div id="bookmark">
                <i id="bookmark_inner_bt" class="fa fa-star"></i>
            </div>
        </header>
        <section id="con_left">
            <figure class="contents_img">
               <img src="ch/img/contents/contents.jpg" width="630"/>
            </figure>


            <section id="contens_slide">
                <div id="contents_view_slider">
                    <div class="slides" u="slides">
                        <div>
                            <ul>
                                <li><img src="ch/img/slider/slider1/1.png" alt="썸네일02"></li>
                                <li><img src="ch/img/slider/slider1/2.png" alt="썸네일02"></li>
                                <li><img src="ch/img/slider/slider1/3.png" alt="썸네일02"></li>
                                <li><img src="ch/img/slider/slider1/4.png" alt="썸네일04"></li>
                                <li><img src="ch/img/slider/slider1/5.png" alt="썸네일05"></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><img src="ch/img/slider/slider1/1.png" alt="썸네일02"></li>
                                <li><img src="ch/img/slider/slider1/2.png" alt="썸네일02"></li>
                                <li><img src="ch/img/slider/slider1/3.png" alt="썸네일02"></li>
                                <li><img src="ch/img/slider/slider1/4.png" alt="썸네일04"></li>
                                <li><img src="ch/img/slider/slider1/5.png" alt="썸네일05"></li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li><img src="ch/img/slider/slider1/1.png" alt="썸네일02"></li>
                                <li><img src="ch/img/slider/slider1/2.png" alt="썸네일02"></li>
                                <li><img src="ch/img/slider/slider1/3.png" alt="썸네일02"></li>
                                <li><img src="ch/img/slider/slider1/4.png" alt="썸네일04"></li>
                                <li><img src="ch/img/slider/slider1/5.png" alt="썸네일05"></li>
                            </ul>
                        </div>
                    </div>
                    <span u="arrowleft" class="slider_arrow_left">
                        <i class="fa fa-angle-left"></i>
                    </span>
                    <span u="arrowright" class="slider_arrow_right">
                        <i class="fa fa-angle-right"></i>
                    </span>
                </div>  <!-- end contents slider-->
                <article id="comment_box">
                    <p id="comment_count">12 Comments</p>
                    <textarea id="comment_text">You Must Sign in First</textarea>
                    <button id="comment_bt"><i class="fa fa-comments"></i></button>
                    <div id="comment_list">
                        <div class="comment_div">
                            <figure class="comment_pic">
                                <img src="ch/img/designer_img.png">
                            </figure>
                            <h4>Pretty Woman</h4>
                            <p class="comment_contents">what the funk? kkk nice pic zepp</p>
                            <p class="comment_time">5 minute ago</p>
                        </div>
                        <div class="comment_div">
                            <figure class="comment_pic">
                                <img src="ch/img/designer_img.png">
                            </figure>
                            <h4>ABC MART</h4>
                            <p class="comment_contents">i love vans daniel thanx upload photo</p>
                            <p class="comment_time">10 minute ago</p>
                        </div>
                        <div class="comment_div">
                            <figure class="comment_pic">
                                <img src="ch/img/designer_img.png">
                            </figure>
                            <h4>idiot ZEPOT</h4>
                            <p class="comment_contents">what the fucking shoes ruber smell?? piss off</p>
                            <p class="comment_time">13 minute ago</p>
                        </div>
                        <div class="comment_div">
                            <figure class="comment_pic">
                                <img src="ch/img/designer_img.png">
                            </figure>
                            <h4>Genius DART</h4>
                            <p class="comment_contents">what the fucking shoes ruber smell?? piss off</p>
                            <p class="comment_time">13 minute ago</p>
                        </div>
                        <div class="comment_div">
                            <figure class="comment_pic">
                                <img src="ch/img/designer_img.png">
                            </figure>
                            <h4>idiot ZEPOT</h4>
                            <p class="comment_contents">what the fucking shoes ruber smell?? piss off</p>
                            <p class="comment_time">13 minute ago</p>
                        </div>
                    </div>
                </article>
            </section>
    </section>

    <aside class="con_right">
        <p id="designer_tap">Information</p>

        <div class="designer_info">
            <figure>
                <img src="ch/img/designer_img.png">
            </figure>
            <h4>Daniel ZEPP</h4>
            <h5><i class="fa fa-home"></i>Seoul, South Korea</h5>
        </div>
        <button id="designer_chat"><i class="fa fa-envelope-o"></i>Message</button>
        <button id="follow_designer"><i class="fa fa-user-plus"></i>Follow</button>
        <button id="content_down"><i class="fa fa-download"></i></button>
        <div id="file_info">
            <header id="info_header">File info<i class="fa fa-angle-down" id="info_toggle"></i></header>
            <section id="files">
                <article id="file_name"><i class="fa fa-circle-o"></i><p><i class="fa fa-folder"></i>Lorem ipsum.zip</p></article>
                <ul>
                    <li><i class="fa fa-file"></i>ipsum.psd</li>
                    <li><i class="fa fa-file"></i>ipsum.ai</li>
                    <li><i class="fa fa-file"></i>ipsum.html</li>
                    <li><i class="fa fa-file"></i>ipsum.css</li>
                    <li><i class="fa fa-circle"></i><i class="fa fa-file"></i>ipsum.js</li>
                </ul>
            </section>
            <footer id="storage"><p>1.2 MB</p></footer>
        </div>

        <button id="con_like_bt"><i class="fa fa-heart"></i></button>
        <p id="con_like_score">1232</p>
        <article id="file_disc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </article>
        <div id="contents_score">
            <ul>
                <li><i class="fa fa-eye"></i></li>
                <li>Views</li>
                <li class="contents_view_score">29312</li>
            </ul>
            <ul>
                <li><i class="fa fa-download"></i></li>
                <li>downloads</li>
                <li class="contents_view_score">1234</li>
            </ul>
        </div>

        <button class="share_sns share_face">
            <i class="fa fa-facebook"></i>Sharing on Facebook
        </button>
        <button class="share_sns share_twit">
            <i class="fa fa-twitter"></i>Sharing on twitter
        </button>
        
        <ul id="contents_tag">
            <li><span>shoes</span><i class="fa fa-times"></i></li>
            <li><span>vansM</span><i class="fa fa-times"></i></li>
            <li><span>flower</span><i class="fa fa-times"></i></li>
            <li><span>red</span><i class="fa fa-times"></i></li>
            <li><span>love</span><i class="fa fa-times"></i></li>
        </ul>
    </aside>
        </section>
</div>