<figure id="main_figure">
    <h2>ALL CONTENTS</h2>
</figure>	<!-- end main_figure -->
<link href="css/contents_page.css" rel="stylesheet" type="text/css" />  <!-- contents page css -->
<section id="contents">
    <section id="navsel">
        <nav id="lnb_nav">
            <ul>
                <li class="all" >
                    <a href="./index.php?1=contents&2=contents_page&3=all">All</a>
                </li>
                <li class="font">
                    <a href="./index.php?1=contents&2=contents_page&3=font">Font</a>
                </li>
                <li class="vector">
                    <a href="./index.php?1=contents&2=contents_page&3=vector">Vector</a>
                </li>
                <li class="3d"> 
                    <a href="./index.php?1=contents&2=contents_page&3=3d">3D</a>
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
            for($i=0;$i<30;$i++)
            {
                include('php/layout/content_card.php');
            }
            ?>
        </ul>
    </section>  <!-- end contents box -->
    <?php
        include('php/layout/pager.php');
    ?>
</section>  <!-- end contents section -->
