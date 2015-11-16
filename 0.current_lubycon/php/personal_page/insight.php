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
    include_once("php/layout/personal_layout.php");
    include_once("php/layout/user_inform.php");
    ?>

    <section id="insight_box">
        <div id="graph_ul">
            <div class="graph_box">
                <div class="graph_title">
                    <i class="fa fa-upload" id="upload_icon"></i>
                    <p class="graph_title_text">UPLOAD</p>
                </div>
                <svg id="graph1" width="500" height="200"></svg><!--graph1-->
            </div>

            <div class="graph_box">
                <div class="graph_title">
                    <i class="fa fa-download" id="down_icon"></i>
                    <p class="graph_title_text">DOWNLOAD</p>
                </div>
                <svg id="graph2" width="500" height="200"></svg><!--graph2-->
            </div>

            <div class="graph_box">
                <div class="graph_title">
                    <i class="fa fa-heart" id="like_icon"></i>
                    <p class="graph_title_text">LIKE</p>      
                </div>
                <svg id="graph3" width="500" height="200"></svg><!--graph3-->
            </div>

            <div class="graph_box">
                <div class="graph_title">
                    <i class="fa fa-users" id="follow_icon"></i>
                    <p class="graph_title_text">FOLLOW</p>      
                </div>
                <svg id="graph4" width="500" height="200"></svg><!--graph3-->
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

