<div id="pop_up">
    <link rel="stylesheet" type="text/css" href="css/contents_view.css" />
    <script>
        jQuery(document).ready(function ($) {
            var options = {
                $DragOrientation: 0,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
                $ArrowNavigatorOptions: {                       //[Optional] Options to specify and enable arrow navigator or not
                    $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
                    $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                    $AutoCenter: 0,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                    $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
                }
            };

            var jssor_slider1 = new $JssorSlider$("slider1_container", options);
        });
    </script>
    <section class="contents_view">
        <div class="contents_box_total">
            <div class="con_left">
                <header>
                    <h3 id="contents_title">Lolem Ipsum</h3>
                    <h4 id="contents_price">Free</h4>
                    <div id="bookmark">
                        <i id="bookmark_inner_bt" class="fa fa-star"></i>
                    </div>
                </header>
                <figure class="contents_img">
                    <img class="inner_img" src="ch/img/contents/contents.jpg" />
                </figure>
                <div id="slider1_bg">
                    <div id="slider1_container">
                        <!-- Slides Container -->
                        <div class="slider1_showbox" u="slides" style="cursor: default; position: absolute; left: 0px; top: 0px; width: 630px; height: 100px; overflow: hidden;">
                            <div>
                                <ul class="slider_img_box">
                                    <li class="slider_img"><img u="image" src="CH/img/slider/slider1/1.png" /></li>
                                    <li class="slider_img"><img u="image" src="CH/img/slider/slider1/2.png" /></li>
                                    <li class="slider_img"><img u="image" src="CH/img/slider/slider1/3.png" /></li>
                                    <li class="slider_img"><img u="image" src="CH/img/slider/slider1/4.png" /></li>
                                    <li class="slider_img"><img u="image" src="CH/img/slider/slider1/5.png" /></li>
                                </ul>
                            </div>
                            <div>
                                <ul class="slider_img_box">
                                    <li class="slider_img"><img u="image" src="CH/img/slider/slider2/1.png" /></li>
                                    <li class="slider_img"><img u="image" src="CH/img/slider/slider2/2.png" /></li>
                                    <li class="slider_img"><img u="image" src="CH/img/slider/slider2/3.png" /></li>
                                    <li class="slider_img"><img u="image" src="CH/img/slider/slider2/4.png" /></li>
                                    <li class="slider_img"><img u="image" src="CH/img/slider/slider2/5.png" /></li>
                                </ul>
                            </div>
                            <div>
                                <ul class="slider_img_box">
                                    <li class="slider_img"><img u="image" src="CH/img/slider/slider3/1.png" /></li>
                                    <li class="slider_img"><img u="image" src="CH/img/slider/slider3/2.png" /></li>
                                    <li class="slider_img"><img u="image" src="CH/img/slider/slider3/3.png" /></li>
                                    <li class="slider_img"><img u="image" src="CH/img/slider/slider3/4.png" /></li>
                                    <li class="slider_img"><img u="image" src="CH/img/slider/slider3/5.png" /></li>
                                </ul>
                            </div>
                        </div>
                        <!-- Arrow Left -->
                        <span u="arrowleft" class="arrow_left">
                            <i class="fa fa-angle-left"></i>
                        </span>
                        <!-- Arrow Right -->
                        <span u="arrowright" class="arrow_right">
                            <i class="fa fa-angle-right"></i>
                        </span>
                    </div>
                </div><!-- end contents slider-->
                
                <article id="comment_box">
                    <div id="comment_writer">
                        <div id="comment_text_box">
                            <textarea id="comment_text">You Must Sign in First</textarea>
                            <button id="comment_bt">
                                <i class="fa fa-comments"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div id="comment_list">
                        <p id="comment_count"><span class="comment_counter">12</span> Comments</p>
                        <div class="comment_div">
                            <figure class="comment_pic">
                                <img src="ch/img/no_img/no_img_user1.jpg">
                            </figure>
                            <h4>Admin_User</h4>
                            <p class="comment_contents">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p class="comment_time"><span class="comment_time_counter">5</span> minute ago</p>
                        </div>
                        <div class="comment_div">
                            <figure class="comment_pic">
                                <img src="ch/img//no_img/no_img_user1.jpg">
                            </figure>
                            <h4>Admin_User</h4>
                            <p class="comment_contents">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p class="comment_time"><span class="comment_time_counter">10</span> minute ago</p>
                        </div>
                        <div class="comment_div">
                            <figure class="comment_pic">
                                <img src="ch/img//no_img/no_img_user1.jpg">
                            </figure>
                            <h4>Admin_User</h4>
                            <p class="comment_contents">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p class="comment_time"><span class="comment_time_counter">13</span> minute ago</p>
                        </div>
                        <div class="comment_div">
                            <figure class="comment_pic">
                                <img src="ch/img//no_img/no_img_user1.jpg">
                            </figure>
                            <h4>Admin_User</h4>
                            <p class="comment_contents">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p class="comment_time"><span class="comment_time_counter">13</span> minute ago</p>
                        </div>
                        <div class="comment_div">
                            <figure class="comment_pic">
                                <img src="ch/img//no_img/no_img_user1.jpg">
                            </figure>
                            <h4>Admin_User</h4>
                            <p class="comment_contents">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p class="comment_time"><span class="comment_time_counter">13</span> minute ago</p>
                        </div>
                    </div><!--end comment_list-->
                </article>
            </div><!--end con_left-->

            <div class="con_right">
                <p id="designer_tap">Information</p>

                <div class="designer_info">
                    <figure>
                        <img src="ch/img/no_img/no_img_user1.jpg">
                    </figure>
                    <h4>Admin_User</h4>
                    <h5><i class="fa fa-home"></i>Seoul, South Korea</h5>
                </div>
                <button id="designer_chat"><i class="fa fa-envelope-o"></i>Message</button>
                <button id="follow_designer"><i class="fa fa-user-plus"></i>Follow</button>
                <button id="content_down"><i class="fa fa-download"></i></button>
                <div id="file_info">
                    <header id="info_header">File info<i class="fa fa-angle-down" id="info_toggle"></i></header>
                    <section id="files">
                        <article id="file_name"><i class="fa fa-chevron-circle-down"></i>
                            <p><i class="fa fa-folder"></i>Lorem ipsum.zip</p>
                        </article>
                        <ul>
                            <li><i class="fa fa-file"></i>ipsum.psd</li>
                            <li><i class="fa fa-file"></i>ipsum.ai</li>
                            <li><i class="fa fa-file"></i>ipsum.html</li>
                            <li><i class="fa fa-file"></i>ipsum.css</li>
                            <li><i class="fa fa-circle"></i><i class="fa fa-file"></i>ipsum.js</li>
                        </ul>
                    </section>
                    <footer id="storage">
                        <p>1.2 MB</p>
                    </footer>
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
            </div><!--end con_right-->
        </div><!--end content_box_total-->
    </section><!--end content_view-->
</div><!--end pop_up-->
