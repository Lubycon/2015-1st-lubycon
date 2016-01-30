<section id="main_board">
    <div class="table_wrap">
        <div class="table_head">
            <div class="table_head_wrap">
                <span class="table_blank hidden-mb-ib"></span>	<!-- space -->
                <span class="table_number">No.</span>
                <span class="table_subject">Title</span>                               
                <span class="table_date">Date</span>
                <span class="table_view"><i class="fa fa-eye"></i></span> <!-- eye icon -->
                <span class="table_like"><i class="fa fa-heart"></i></span>    <!-- heart icon -->
                <span class="table_writer">Creator</span>
            </div>
        </div>
        <div class="table_body">
            <?php
                $subject = "Lorem Ipsum dolor sit amet. aonsectetur adipisicing eli.";
                $comment_num = 0;
                $username = "Admin_User";
                $like_num = "52.2k";
                $view_num = "32.2k";
                $content_date = "00.00.00";//yy.mm.dd

                $current_url = $_GET["3"];
                ?>
            <ul class="table_list_wrap">
            <?php
                for($i=20; $i>=1; $i--){
                    echo
                    "<li class='table_list'>
                        <div class='table_list_inner'>
                            <span class='table_blank hidden-mb-ib'><i class='fa fa-circle' id='{$current_url}_circle'></i></span>   <!-- space -->
                            <span class='table_number'>{$i}</span>   <!-- number -->
                            <span class='table_subject'>
                                <a href='./index.php?1=community&2=community_view&3={$current_url}'>
                                    {$subject} [{$comment_num}]
                                </a>
                            </span>   <!-- subject -->
                            <span class='table_date'>{$content_date}</span>    <!-- date -->
                            <span class='table_view'>{$view_num}</span>    <!-- view -->
                            <span class='table_like'>{$like_num}</span> <!-- like -->
                            <span class='table_writer'>{$username}</span>    <!-- writer -->
                        </div>
                    </li>";
                };//for end
            ?>
            </ul>
        </div>
    </div>
</section>