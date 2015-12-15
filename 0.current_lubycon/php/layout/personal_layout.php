<section id="navsel">
    <nav id="lnb_nav">
        <ul>
            <li class="nav_menu" id="main">
                <a href="./index.php?1=personal_page&2=personal_page&3=main&4=my_contents">Contents</a>
            </li>
            <li class="nav_menu" id="insight">
                <a href="./index.php?1=personal_page&2=insight&3=insight">Insight</a>
            </li>
            <li class="nav_menu" id="followers">
                <a href="./index.php?1=personal_page&2=followers&3=followers">Followers</a>
            </li>
        </ul>
    </nav>
    <!-- end lnb nav -->
</section>
<!-- end section -->
<section id="nav_guide">
    <div class="subnav_box">
        <?php
            if($_GET['2']=='personal_page')
            include("php/sub_nav/personal_nav.php");
        ?>
    </div>
</section>

<!-- end category -->
