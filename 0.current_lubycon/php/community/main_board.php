<section id="main_board">
    <div class="tab_item" id="table1">
        <table>
            <thead id="table_head">
                <th class="table_blank hidden-mb-ib"></th>	<!-- space -->
                <th class="table_number">No.</th>
                <th class="table_subject">Title</th>
                <th class="table_writer">Creator</th>
                <th class="table_like"><i class="fa fa-heart"></i></th>	<!-- heart icon -->
                <th class="table_view"><i class="fa fa-eye"></i></th> <!-- eye icon -->
                <th class="table_date">Date</th>
                </thead>
            <tbody>
                <?php
                    $subject = "Lorem Ipsum";
                    $comment_num = 0;
                    $username = "Admin_User";
                    $like_num = 0;
                    $view_num = 0;
                    $content_date = "00.00.00";//yy.mm.dd

                    $current_url = $_GET["3"];

                    for($i=20; $i>=1; $i--){
                        echo
                        "<tr>
                            <td class='table_blank hidden-mb-ib'><i class='fa fa-circle' id='{$current_url}_circle'></i></td>   <!-- space -->
                            <td class='table_number'>{$i}</td>   <!-- number -->
                            <td class='table_subject'>
                                <a href='./index.php?1=community&2=community_view&3={$current_url}'>
                                    {$subject} [{$comment_num}]
                                </a>
                            </td>   <!-- subject -->
                            <td class='table_writer'>{$username}</td>    <!-- writer -->
                            <td class='table_like'>{$like_num}</td> <!-- like -->
                            <td class='table_view'>{$view_num}</td>    <!-- view -->
                            <td class='table_date'>{$content_date}</td>    <!-- date -->
                        </tr>";
                    };//for end
                ?>
            </tbody>
        </table>
    </div>	 <!-- end tap_item 2  -->
    <hr />
</section>