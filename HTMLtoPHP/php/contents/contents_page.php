<figure id="main_figure">
    <h2>ALL CONTENTS</h2>
</figure>	<!-- end main_figure -->
<link href="css/contents_page.css" rel="stylesheet" type="text/css" />  <!-- contents page css -->
<section id="contents">
    <section id="navsel">
        <nav id="lnb_nav">
            <ul>
                <li class="selected_nav">
                    <a href="http://localhost/htmltophp/index.php?1=contents&2=contents_page&3=all">All</a>
                </li>
                <li>
                    <a href="http://localhost/htmltophp/index.php?1=contents&2=contents_page&3=font">Font</a>
                </li>
                <li>
                    <a href="http://localhost/htmltophp/index.php?1=contents&2=contents_page&3=vector">Vector</a>
                </li>
                <li>
                    <a href="http://localhost/htmltophp/index.php?1=contents&2=contents_page&3=3d">3D</a>
                </li>
            </ul>
        </nav>  <!-- end lnb nav -->

        <div class="search_option">
            <i class="fa fa-filter"></i>
            <select class="basic_filter">
                <option value="Extension">Extension</option>
                <option value="Free">Free</option>
                <option value="Not Free">Not Free</option>
            </select>
        </div>  <!-- end select box -->
        <div class="search_option">
            <i class="fa fa-filter"></i>
            <select class="basic_filter">
                <option value="Featured">Featured</option>
                <option value="Recent">Recent</option>
                <option value="Most Like">Most Like</option>
                <option value="Most Download">Most Download</option>
                <option value="Most Coment">Most Comment</option>
            </select>

        </div>  <!-- end select box -->
    </section>  <!-- end section -->

    <section id="category">
        <div id="cate_bt">
            <h3>CATEGORY</h3>
            <p id="down_arrow"><i class="fa fa-angle-down"></i></p>
        </div>
        <div id="open_cate">
            <div id="open_cate_inner">
                <ul>
                    <li>All</li>
                    <li>Hollyday</li>
                    <li>Animal</li>
                    <li>Car</li>
                    <li>Box</li>
                    <li>Nature</li>
                    <li>Mecanic</li>
                    <li>Phone</li>
                    <li>Bottle</li>
                    <li>Calinder</li>
                    <li>Book</li>
                    <li>Simbol / Sign</li>
                </ul>
            </div>  <!-- end open cate inner -->
        </div>  <!-- end open cate -->
    </section>  <!-- end category -->
    <section id="contents_box">
        <ul>
            <?php
            for($i=0;$i<10;$i++)
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
                        <i class="fa fa-heart"></i>
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
</section>  <!-- end contents section -->
