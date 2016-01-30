<section id="main_board">
    <?php
        $current_url = $_GET["3"];
    ?>
    <div class="table_wrap">
        <div class="table_head">
            <div class="board_name">
                <?php
                    switch($current_url){
                        case "forum" : echo "Forum"; break;
                        case "tutorial" : echo "Tutorial"; break;
                        case "qna" : echo "Q & A"; break;
                        default : return false; break;
                    }
                ?>
            </div>
            <div class="table_head_wrap">                              
                <span class="table_date">Date</span>
                <span class="table_view"><i class="fa fa-eye"></i></span> <!-- eye icon -->
                <span class="table_like"><i class="fa fa-heart"></i></span>    <!-- heart icon -->
            </div>
        </div>
        <div class="table_body">
            
            <ul class="table_list_wrap">
            <?php
                $subject = "Lorem Ipsum dolor sit amet. aonsectetur adipisicing eli.";
                $comment_num = 0;
                $username = "Admin_User";
                $userimg = "./ch/img/no_img/no_img_user1.jpg";
                $like_num = 0;
                $view_num = 0;
                $content_date = "00.00.00";//yy.mm.dd
                for($i=20; $i>=1; $i--){
                    echo
                    "<li class='table_list'>
                        <div class='table_list_inner'>
                            <span class='table_blank hidden-mb-ib'><i class='fa fa-circle' id='{$current_url}_circle'></i></span>   <!-- space -->
                            <span class='table_number'>{$i}</span>   <!-- number -->
                            <span class='table_info'>
                                <span class='table_user_img'>
                                    <img src='{$userimg}'>
                                </span>
                                <span class='table_subject'>
                                    <a href='./index.php?1=community&2=community_view&3={$current_url}'>
                                        {$subject} <font size='3' color='#488ccb'>[{$comment_num}]</font>
                                    </a>
                                </span>   <!-- subject -->
                                <span class='table_writer'>{$username}</span>    <!-- writer -->
                            </span>
                            
                            <span class='table_date'>{$content_date}</span>    <!-- date -->
                            <span class='table_view'>{$view_num}</span>    <!-- view -->
                            <span class='table_like'>{$like_num}</span> <!-- like -->
                        </div>
                    </li>";
                };//for end
            ?>
            </ul>
        </div>
    </div>
</section>