    <figure id="main_figure">
        <h2>DESIGNERS</h2>
    </figure>	<!-- end main_figure -->

    <link href="css/insight.css" rel="stylesheet" type="text/css" />  <!-- personal page css -->
    <script type="text/javascript" src="js/insight.js"></script><!--graph script-->

    <section id="contents">
        <?php
        include("php/layout/personal_layout.php");
        ?>

        <section id="personal_box">
            <figure>
                <img src="ch/img/designer_img.png" alt="개새끼" />
            </figure>
            <h3>Daniel Zepp</h3>
            <h4>Pro web designer</h4>
            <p id="personal_legion"><i class="fa fa-home"></i>Seoul, Korea</p>
            <p id="personal_intro">everybody loves coding</p>

            <aside id="personal_score">
                <ul>
                    <li><i class="fa fa-eye"></i><p>123</p></li>
                    <li><i class="fa fa-heart"></i><p>111123</p></li>
                    <li><i class="fa fa-download"></i><p>123</p></li>
                    <li><i class="fa fa-user-plus"></i><p>123</p></li>
                </ul>
                <button id="personal_messeage"><i class="fa fa-envelope-o"></i><p>Messeage</p></button>
                <button id="personal_follow"><i class="fa fa-user-plus"></i><p>Follow</p></button>
            </aside>
        </section>

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
                
                <div id="tooltip"><!--tooltip start-->
                    <div class="value">
                        <p class="value_text"></p>    
                    </div>
                </div>
            </div>
        </section>  <!-- end contents box -->
    </section>  <!-- end contents section -->

    