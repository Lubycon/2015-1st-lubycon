<figure id="main_figure">
    <h2>COMMUNITY</h2>
</figure>	<!-- end main_figure -->

<link href="css/community_write.css" rel="stylesheet" type="text/css" />  <!-- community_view css -->
<link href="css/community.css" rel="stylesheet" type="text/css" />  <!-- community css -->
<script type="text/javascript" src="js/community.js"></script>


<section id="contents">
    <section id="navsel">
        <nav id="lnb_nav">
            <ul>
                <li class="forum">
                    <a href="./index.php?1=community&2=community_page&3=forum">Forum</a>
                </li>
                <li class="tutorial">
                    <a href="./index.php?1=community&2=community_page&3=tutorial">Tutorial</a>
                </li>
                <li class="qna">
                    <a href="./index.php?1=community&2=community_page&3=qna">Q&amp;A</a>
                </li>
            </ul>
        </nav>
        <div class="search_option">
            <i class="fa fa-filter"></i>
            <select class="basic_filter">
                <option value="English">English</option>
                <option value="Korean">Korean</option>
                <option value="Japanese">Japanese</option>
                <option value="Chinese">Chinese</option>
                <option value="French">French</option>
            </select>
        </div>  <!-- end select box -->
    </section>

    <section id="nav_guide"></section>  <!-- end nav_guide -->

    <section id="work_space">
        <div class="properties_box">
            <p class="work_title">Title</p>
            <input type="text" class="write_box_com" id="write_box_title" />
        </div><!--title end-->
        
        <div class="properties_box">
            <p class="work_title">Contents</p>
            
            <div id="main_work_space">
                <div id="write_tool_box">
                    <span class="tool_set_com" id="font_prop_com">
                        <span class="tool_com" id="font_fam_com">
                            <select class="basic_filter">
                                <option value="Gulim">Gulim</option>
                                <option value="Dotum">Dotum</option>
                            </select>
                            <span class="tooltip_bt" id="ff_com_tip">Font</span><!--tooltip-->
                        </span><!--font famaily-->
                        <span class="tool_com" id="font_size_com">
                            <select class="basic_filter">
                                <option value="14pt">14pt</option>
                                <option value="18pt">18pt</option>
                                <option value="24pt">24pt</option>
                                <option value="30pt">30pt</option>
                                <option value="36pt">36pt</option>
                                <option value="48pt">48pt</option>
                                <option value="60pt">60pt</option>
                                <option value="72pt">72pt</option>
                            </select>
                            <span class="tooltip_bt" id="fs_com_tip">Font Size</span><!--tooltip-->
                        </span><!--font size-->
                    </span>
                    <span class="tool_set_com" id="font_deco_com">
                        <span class="tool_com">
                            <i class="fa fa-bold"></i>
                            <span class="tooltip_bt" id="bold_com_tip">Bold</span><!--tooltip-->
                        </span><!--bold-->
                        <span class="tool_com">
                            <i class="fa fa-italic"></i>
                            <span class="tooltip_bt" id="italic_com_tip">Italic</span><!--tooltip-->
                        </span><!--italic-->
                        <span class="tool_com">
                            <i class="fa fa-underline"></i>
                            <span class="tooltip_bt" id="underline_com_tip">Underline</span><!--tooltip-->
                        </span><!--underline-->
                        <span class="tool_com">
                            <i class="fa fa-strikethrough"></i>
                            <span class="tooltip_bt" id="strike_com_tip">Strike</span><!--tooltip-->
                        </span><!--strike-->
                    </span>
                    <span class="tool_set_com" id="text_align_com">
                        <span class="tool_com">
                            <i class="fa fa-align-left"></i>
                            <span class="tooltip_bt" id="left_com_tip">Left</span><!--tooltip-->
                        </span><!--left-->
                        <span class="tool_com">
                            <i class="fa fa-align-center"></i>
                            <span class="tooltip_bt" id="center_com_tip">Center</span><!--tooltip-->
                        </span><!--center-->
                        <span class="tool_com">
                            <i class="fa fa-align-right"></i>
                            <span class="tooltip_bt" id="right_com_tip">Right</span><!--tooltip-->
                        </span><!--right-->
                    </span>
                    <span class="tool_set_com" id="font_color_com">
                        <span class="tool_com">
                            <i class="fa fa-square"></i>
                            <span class="tooltip_bt" id="fc_com_tip">Text Color</span><!--tooltip-->
                        </span><!--color-->
                        <span class="tool_com">
                            <i class="fa fa-square"></i>
                            <span class="tooltip_bt" id="fbg_com_tip">Text Background</span><!--tooltip-->
                        </span><!--text background-->
                    </span>
                    <span class="tool_set_com" id="list_com">
                        <span class="tool_com">
                            <i class="fa fa-list-ul"></i>
                            <span class="tooltip_bt" id="ul_com_tip">Ul</span><!--tooltip-->
                        </span><!--ul-->
                        <span class="tool_com">
                            <i class="fa fa-list-ol"></i>
                            <span class="tooltip_bt" id="ol_com_tip">Ol</span><!--tooltip-->
                        </span><!--ol-->
                    </span>
                    <span class="tool_set_com" id="table_com">
                        <span class="tool_com">
                            <i class="fa fa-table"></i>
                            <span class="tooltip_bt" id="table_com_tip">Insert Table</span><!--tooltip-->
                        </span><!--table-->
                    </span>
                    <span class="tool_set_com" id="embed_com">
                        <span class="tool_com">
                            <i class="fa fa-picture-o"></i>
                            <span class="tooltip_bt" id="img_com_tip">Embed Image</span><!--tooltip-->
                        </span><!--insert img-->
                        <span class="tool_com">
                            <i class="fa fa-link"></i>
                            <span class="tooltip_bt" id="link_com_tip">Embed Link</span><!--tooltip-->
                        </span><!--embed media-->
                        <span class="tool_com">
                            <i class="fa fa-unlink"></i>
                            <span class="tooltip_bt" id="unlink_com_tip">Unlink</span><!--tooltip-->
                        </span><!--unlink-->
                    </span>
                </div><!--write_tool_box_end-->
                <textarea id="insert_text_window"></textarea><!--insert text window-->
            </div><!--main_work_space end-->
        </div><!--main textbox end-->
        
        <div class="properties_box">
            <p class="work_title">Link1</p>
            <input type="text" class="write_box_com" id="write_box_title" />
        </div><!--link1 end-->
        <div class="properties_box">
            <p class="work_title">Link2</p>
            <input type="text" class="write_box_com" id="write_box_title" />
        </div><!--link2 end-->
        <div class="properties_box">
            <p class="work_title">File Upload</p>
            <span id="file_import_bt">Find the file</span>
            <input type="file" id="file_import_com" />
            <input type="text" id="file_text_com" val="please select file..." readonly />
        </div><!--link2 end-->
    </section><!--work_space end-->        
</section>  <!-- end contents section -->