<section id="main_board">
    <div class="tab_item" id="table1">
        <table>
            <thead id="table_head">
                <th class="table_blank"></th>	<!-- space -->
                <th class="table_number">No.</th>
                <th class="table_subject">SUBJECT</th>
                <th class="table_writer">WRITER</th>
                <th class="table_like"><i class="fa fa-heart"></i></th>	<!-- heart icon -->
                <th class="table_view"><i class="fa fa-eye"></i></th> <!-- eye icon -->
                <th class="table_date">DATE</th>
                </thead>
            <tbody>
                <?php
                    for($i=20; $i>=1; $i--)
                    {
                        echo
                        "<tr>
                            <td class='table_blank'><i class='fa fa-circle'></i></td>   <!-- space -->
                            <td class='table_number'>{$i}</td>   <!-- number -->
                            <td class='table_subject'><a href='./index.php?1=community&2=community_view'>Lorem Ipsum [1]</a></td>   <!-- subject -->
                            <td class='table_writer'>Admin_User</td>    <!-- writer -->
                            <td class='table_like'>000</td> <!-- like -->
                            <td class='table_view'>0000</td>    <!-- view -->
                            <td class='table_date'>yy.mm.dd</td>    <!-- date -->
                        </tr>";
                    };//for end
                ?>
            </tbody>
        </table>
    </div>	 <!-- end tap_item 2  -->
    <hr />
    <?php
        include_once('php/layout/pager.php');
    ?>
</section>