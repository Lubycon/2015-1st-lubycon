<?php
$subject = "Lorem Ipsum dolor sit amet. aonsectetur adipisicing eli.";
$comment_num = 0;
$username = "Admin_User";
$userimg = "./ch/img/no_img/no_img_user1.jpg";
$like_num = 0;
$view_num = 0;
$content_date = "00.00.00";//yy.mm.dd
$current_url = $third_param;

echo "<li class='table_list'>
    <div class='table_list_inner'>
        <span class='table_blank hidden-mb-ib'><i class='fa fa-circle' id='{$current_url}_circle'></i></span>   <!-- space -->
        <span class='table_number hidden-mb-ib'>{$j}</span>   <!-- number -->
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
?>