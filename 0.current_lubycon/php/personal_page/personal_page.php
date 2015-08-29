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
                include('php/layout/content_card.php');
            }
            ?>
        </ul>
    </section>
    <!-- end contents box -->
    <?php
        include('php/layout/pager.php');
    ?>
</section>
<!-- end contents section -->
