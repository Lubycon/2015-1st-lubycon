<figure id="main_figure">
    <h2>DESIGNERS</h2>
</figure>
<!-- end main_figure -->
<link href="css/personal_page.css" rel="stylesheet" type="text/css" />
<!-- personal page css -->
<section id="contents">
    <?php
    include("php/layout/personal_layout.php");
    include("php/layout/user_inform.php");
    ?>
    <section id="contents_box">
        <ul>
            <?php
            for($i=0;$i<30;$i++)
            {
                echo
                '<li>
                <div class="contents_card">
                    <div class="contents_pic">
                        <img src="ch/img/slider/slider2/9.png" width="285" height="215" />
                    </div>  <!-- end contents pic -->
                    <div class="contents_disc">
                        <div class="contents_sub">
                            <h4>Holly shit</h4>
                            <h5>Free</h5>
                        </div>
                        <img src="ch/img/designer_img.png" />
                        <span class="by">by</span><span class="name">Daniel Zepp</span>
                        <i id="bookmark_bt" class="fa fa-star"></i>
                    </div>  <!-- end contents disc -->
                    <div id="contents_overlay">
                        <ul>
                            <li>
                                <i class="fa fa-eye"></i>
                                <span id="contents_view">124</span>
                            </li>
                            <li>
                                <i class="fa fa-comments-o"></i>
                                <span id="contents_comments">124</span>
                            </li>
                            <li id="contents_like_li">
                                <i class="fa fa-heart"></i>
                                <span id="contents_like">124</span>
                            </li>
                        </ul>
                    </div>
                </div>
                </li>';
            }
            ?>
        </ul>
    </section>  <!-- end contents box -->

    <nav id="contents_pager">
        <ul>
            <li class="ten_page"><i class="fa fa-angle-double-left"></i></li>
            <li class="one_page"><i class="fa fa-angle-left"></i></li>

            <li class="selected_pager">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>

            <li class="one_page"><i class="fa fa-angle-right"></i></li>
            <li class="ten_page"><i class="fa fa-angle-double-right"></i></li>
        </ul>
    </nav>
</section>
<!-- end contents section -->
