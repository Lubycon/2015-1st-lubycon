<figure id="main_figure">
    <h2>CONTENTS</h2>
</figure>	<!-- end main_figure -->
<link href="css/contents_view.css" rel="stylesheet" type="text/css" /><!-- contents view css -->
<section id="contents">
    <section id="navsel">
        <nav id="lnb_nav">
            <ul>
                <li class="all" >
                    <a href="./index.php?1=contents&2=contents_page&3=all">All</a>
                </li>
                <li class="artwork">
                    <a href="./index.php?1=contents&2=contents_page&3=artwork">Artwork</a>
                </li>
                <li class="vector">
                    <a href="./index.php?1=contents&2=contents_page&3=vector">Vector</a>
                </li>
                <li class="3d"> 
                    <a href="./index.php?1=contents&2=contents_page&3=3d">3D</a>
                </li>
            </ul>
        </nav>  <!-- end lnb nav -->
    </section>  <!-- end section -->


    <section id="nav_guide">
        <div class="subnav_box">
            <?php
                $current_url = $_GET["3"];
                switch($current_url){
                    case "artwork" : include_once("php/sub_nav/category_artwork.php"); break;
                    case "vector" : include_once("php/sub_nav/category_vector.php"); break;
                    case "3d" : include_once("php/sub_nav/category_3d.php"); break;
                }
            ?>
            <span id="contents_subject">
                <h3 id="contents_title">Lorem Ipsum</h3>
                <h4 id="contents_price">Free</h4>
            </span>
            
            <div class="contents_bt">
                <span class="global_icon"><i class="fa fa-usd"></i></span>
                <span class="subnav_selected">All</span>
                <span class="subnav_arrow"><i class="fa fa-caret-down"></i></span>
                <ul class="subnav_list">
                    <li class="selected_li">All</li>
                    <li>Free</li>
                    <li>Free for personal</li>
                    <li>Paid</li>
                </ul>
            </div><!--pay selector end-->

            <div id="sub_search_bar">
                <div class="select_box">
                    <select class="basic">
                        <option value="Title">Title</option>
                        <option value="Designer">Designer</option>
                        <option value="Tag">Tag</option>
                    </select>
                </div>
                <input type="text" id="sub_search_text" value="Enter the Keyword" />
                <button id="sub_search_btn">
                    <i class="fa fa-search"></i>
                </button>
            </div>
            <div id="sharing_bt_box">
                <button class="share_sns share_face">
                    <i class="fa fa-facebook"></i>
                </button>
                <button class="share_sns share_twit">
                    <i class="fa fa-twitter"></i>
                </button>
            </div>
        </div><!--subnav_box end-->
    </section>

    <section id="contents_box">
        <section class="contents_view">
            <div class="contents_box_total">
                <div class="con_left">
                    <div id="floating_bt">
                        <div id="bookmark"><i id="bookmark_inner_bt" class="fa fa-star"></i></div>
                        <div id="con_like_bt"><i class="fa fa-heart"></i></div>
                    </div>
                    <figure class="contents_img">
                        <img class="inner_img" src="ch/img/contents/contents.jpg" />
                    </figure>
                    
                    <article id="comment_box">
                        <div id="comment_writer">
                            <div id="comment_text_box">
                                <textarea id="comment_text">hello world</textarea>
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
                    <div class="designer_info">
                        <figure>
                            <img src="ch/img/no_img/no_img_user1.jpg">
                        </figure>
                        <h4>Admin_User</h4>
                        <h5><i class="fa fa-home"></i>Seoul, South Korea</h5>
                    </div>
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

                    <div id="contents_score">
                        <ul>
                            <li><i class="fa fa-eye"></i></li>
                            <li>Views</li>
                            <li class="contents_view_score">0000</li>
                        </ul>
                        <ul>
                            <li><i class="fa fa-download"></i></li>
                            <li>Downloads</li>
                            <li class="contents_view_score">0000</li>
                        </ul>
                        <ul>
                            <li><i class="fa fa-heart"></i></li>
                            <li>Likes</li>
                            <li class="contents_view_score">0000</li>
                        </ul>
                    </div>

                    <ul id="contents_tag">
                        <li><span>#lorem</span></li>
                        <li><span>#lorem</span></li>
                        <li><span>#lorem</span></li>
                        <li><span>#lorem</span></li>
                        <li><span>#lorem</span></li>                       
                    </ul>

                    <article id="file_descript">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </article>
                </div><!--end con_right-->
            </div><!--end content_box_total-->
        </section><!--end content_view-->
    </section>  <!-- end contents box -->
</section>  <!-- end contents section -->
