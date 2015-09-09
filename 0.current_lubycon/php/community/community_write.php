<figure id="main_figure">
    <h2>COMMUNITY</h2>
</figure>	<!-- end main_figure -->

<link href="css/community_write.css" rel="stylesheet" type="text/css" />  <!-- community_view css -->
<link href="css/community.css" rel="stylesheet" type="text/css" />  <!-- community css -->
<link href="css/quill_basic.css" rel="stylesheet" type="text/css" />


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
                <div id="content-container">
                    <div id="editor-wrapper">
                        <div id="formatting-container">
                            <select title="Font" class="ql-font basic_filter">
                                <option value="sans-serif" selected>Sans Serif</option>
                                <option value="Georgia, serif">Serif</option>
                                <option value="Monaco, 'Courier New', monospace">Monospace</option>
                            </select>
                            <select title="Size" class="ql-size basic_filter">
                                <option value="10px">Small</option>
                                <option value="13px" selected>Normal</option>
                                <option value="18px">Large</option>
                                <option value="32px">Huge</option>
                            </select>
                            <select title="Text Color" class="ql-color basic_filter">
                                <option value="rgb(255, 255, 255)">White</option>
                                <option value="rgb(0, 0, 0)" selected>Black</option>
                                <option value="rgb(255, 0, 0)">Red</option>
                                <option value="rgb(0, 0, 255)">Blue</option>
                                <option value="rgb(0, 255, 0)">Lime</option>
                                <option value="rgb(0, 128, 128)">Teal</option>
                                <option value="rgb(255, 0, 255)">Magenta</option>
                                <option value="rgb(255, 255, 0)">Yellow</option>
                            </select>
                            <select title="Background Color" class="ql-background basic_filter">
                                <option value="rgb(255, 255, 255)" selected>White</option>
                                <option value="rgb(0, 0, 0)">Black</option>
                                <option value="rgb(255, 0, 0)">Red</option>
                                <option value="rgb(0, 0, 255)">Blue</option>
                                <option value="rgb(0, 255, 0)">Lime</option>
                                <option value="rgb(0, 128, 128)">Teal</option>
                                <option value="rgb(255, 0, 255)">Magenta</option>
                                <option value="rgb(255, 255, 0)">Yellow</option>
                            </select>
                            <select title="Text Alignment" class="ql-align basic_filter">
                                <option value="left" selected>
                                    <i class="fa fa-align-left"></i>
                                    Left</option>
                                <option value="center">
                                    <i class="fa fa-align-center"></i>
                                    Center</option>
                                <option value="right">
                                    <i class="fa fa-align-right"></i>
                                    Right</option>
                                <option value="justify">
                                    <i class="fa fa-align-justice"></i>
                                    Justify</option>
                            </select>
                            <button title="Bold" class="ql-format-button ql-bold">
                                <i class="fa fa-bold"></i>                               
                            </button>
                            <span class="tooltip_bt" id="bold_com_tip">Bold</span><!--tooltip-->

                            <button title="Italic" class="ql-format-button ql-italic">
                                <i class="fa fa-italic"></i>
                            </button>
                            <span class="tooltip_bt" id="italic_com_tip">Italic</span>
                            
                            <button title="Underline" class="ql-format-button ql-underline">
                                <i class="fa fa-underline"></i>
                            </button>
                            <span class="tooltip_bt" id="underline_com_tip">Underline</span>
                            
                            <button title="Strikethrough" class="ql-format-button ql-strike">
                                <i class="fa fa-strikethrough"></i>
                            </button>
                            <span class="tooltip_bt" id="strike_com_tip">Strike</span>                           
                            
                            <button title="Link" class="ql-format-button ql-link">
                                <i class="fa fa-link"></i>
                            </button>
                            <span class="tooltip_bt" id="link_com_tip">Link</span>
                            
                            <button title="Image" class="ql-format-button ql-image">
                                <i class="fa fa-picture-o"></i>
                            </button>
                            <span class="tooltip_bt" id="img_com_tip">Embed Image</span>
                            
                            <button title="Ul" class="ql-format-button ql-bullet">
                                <i class="fa fa-list-ul"></i>
                            </button>
                            <span class="tooltip_bt" id="ul_com_tip">Ul</span>
                            
                            <button title="Ol" class="ql-format-button ql-list">
                                <i class="fa fa-list-ol"></i>
                            </button>
                            <span class="tooltip_bt" id="ol_com_tip">Ol</span>
                        
                        </div>
                        <div id="editor-container"></div><!--input window-->
                    </div><!--editor-wrapper end-->
                </div><!--content-container end-->
            </div><!--main_work_space end-->
        </div><!--textbox properties end-->
        
        <div class="properties_box">
            <p class="work_title">Link1</p>
            <input type="text" class="write_box_com" id="write_box_title" />
        </div><!--link1 end-->
        <div class="properties_box">
            <p class="work_title">Link2</p>
            <input type="text" class="write_box_com" id="write_box_title" />
        </div><!--link2 end-->
        <div class="properties_box" id="file_up_com">
            <p class="work_title">File Upload</p>
            <span id="file_import_bt">Find the file</span>
            <input type="file" id="file_import_com" />
            <input type="text" id="file_text_com" val="please select file..." readonly />
        </div><!--link2 end-->
    </section><!--work_space end-->
    
    <script type="text/javascript" src="js/quill.min.js"></script>
    <script type="text/javascript">
      var editor = new Quill('#editor-container', {
        modules: {
          'toolbar': { container: '#formatting-container' },
          'authorship': { authorId: 'galadriel', enabled: true },
          'link-tooltip': true,
          'image-tooltip': true,
          'multi-cursor': true,
        }
      });
      editor.on('selection-change', function(range) {
        console.log('selection-change', range)
      });
      editor.on('text-change', function(delta, source) {
        console.log('text-change', delta, source)
      });

        $(function(){
            $('#file_import_bt').click(function () {
                $('#file_import_com').click();
            });
        
            $('#file_import_com').change(function () {
                $('#file_text_com').val($(this).val());
            });
        });
        
        $(function () {
            $('#formatting-container button').hover(function ()
            {
                $(this).next('.tooltip_bt').stop().fadeIn(300).css("display", "inline-block");
            }, function () {
                $(this).next('.tooltip_bt').stop().fadeOut(300);
            });
        });
    </script>        
</section>  <!-- end contents section -->