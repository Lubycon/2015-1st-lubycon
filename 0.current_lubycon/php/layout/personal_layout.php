<section id="navsel">
    <nav id="lnb_nav">
        <ul>
            <li class="main"><a href="./index.php?1=personal_page&2=personal_page&3=main&4=my_contents">Contents</a></li>
            <li class="insight"><a href="./index.php?1=personal_page&2=insight&3=insight">Insight</a></li>
            <li class="followers"><a href="./index.php?1=personal_page&2=followers&3=followers">Followers</a></li>
        </ul>
    </nav>
    <!-- end lnb nav -->
</section>
<!-- end section -->
<section id="nav_guide">
<?php
if($_GET['3'] == 'main')
{
    echo 
'<div class="subnav_box">
        <div class="contents_bt">
            <span class="global_icon"><i class="fa fa-bars"></i></span>
            <span class="subnav_selected">My Contents</span>
            <span class="subnav_arrow"><i class="fa fa-caret-down"></i></span>
            <ul class="subnav_list">
                <li id="my_contents">My Contents</li>
                <li id="message">Message</li>
                <li id="bookmark">Bookmarks</li>
                <li id="account_setting">Account Setting</li>
            </ul>
        </div>
</div>';
};
?>
</section>

<!-- end category -->
