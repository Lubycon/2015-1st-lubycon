<figure id="main_figure">
    <h2>INSIGHT</h2>
</figure>
<!-- end main_figure -->

<link href="css/insight.css" rel="stylesheet" type="text/css" />
<!-- personal page css -->
<script type="text/javascript" src="js/d3.min.js"></script>
<!--graph script-->

<section id="contents">
    <?php
    include("php/layout/personal_layout.php");
    include("php/layout/user_inform.php");
    ?>

    <section id="insight_box">
        <div id="graph_ul">
            <div class="graph_box">
                <div class="graph_title">UPLOAD</div>
                <svg id="graph1" width="700" height="400"></svg><!--graph1-->
            </div>

            <div class="graph_box">
                <div class="graph_title">DOWNLOAD</div>
                <svg id="graph2" width="700" height="400"></svg><!--graph2-->
            </div>

            <div class="graph_box">
                <div class="graph_title">LIKE</div>
                <svg id="graph3" width="700" height="400"></svg><!--graph3-->
            </div>

            <div id="tooltip">
                <!--tooltip start-->
                <div class="value">
                    <p class="value_text"></p>
                </div>
            </div>
        </div>
        <script type="text/javascript" src="js/insight.js"></script>
    </section>
    <!-- end contents box -->
</section>
<!-- end contents section -->

