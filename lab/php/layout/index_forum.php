<li class="forum_card">
    <?php
        $card_title = "Lorem Ipsum";
        $comment_num = 0;
        $like_num = 0;
        $card_content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Cras commodo lacus at lacus bibendum imperdiet.<br />
                    Quisque in accumsan turpis. Nullam non lacus nec enim convallis iaculis.
                            Vivamus a sodales sapien. Curabitur suscipit ullamcorper enim, quis hendrerit nunc tempus eu.
                            Nunc porttitor mauris sapien, quis molestie quam placerat sit amet.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Cras commodo lacus at lacus bibendum imperdiet.
                            Quisque in accumsan turpis. Nullam non lacus nec enim convallis iaculis.
                            Vivamus a sodales sapien. Curabitur suscipit ullamcorper enim, quis hendrerit nunc tempus eu.
                            Nunc porttitor mauris sapien, quis molestie quam placerat sit amet.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    ?>
<!-- card list start-->
    <div class="f_card_body">
        <!--card start-->
        <a href="./index.php?1=community&2=community_view">
            <!--link start-->
            <aside class="side_bar"><i class="fa fa-circle"></i></aside>
            <div class="f_card_header">
                <article class="f_card_title"><?=$card_title?></article>
                <div class="f_card_counters">
                    <div class="forum_comment"><i class="fa fa-comment"></i><?=$comment_num?></div>
                    <div class="forum_like"><i class="fa fa-heart"></i><?=$like_num?></div>
                </div>
            </div>
            <article class="f_card_content">
                <p><?=$card_content?></p>
            </article>
        </a>
        <!--link end-->
    </div>
    <!--card end-->
</li>
<!--card list end-->