<figure id="main_figure">
    <h2>DESIGNERS</h2>
</figure>
<!-- end main_figure -->

<link href="css/designers_page.css" rel="stylesheet" type="text/css" />
<!-- contents page css -->
<section id="contents">
    <section id="navsel">
        <div class="search_option">
            <i class="fa fa-filter"></i>
            <select class="basic_filter">
                <option value="all">All</option>
                <option value="mostDownload">Most Download</option>
                <option value="mostFollow">Most Follow</option>
                <option value="mostLike">Most Like</option>
            </select>
        </div>
        <!-- end lnb nav -->
    </section>
    <section id="nav_guide">
        <div class="subnav_box">
            <div class="contents_bt">
                <span class="global_icon">
                    <img src="ch/img/grobal_icon.png" width="24" height="24" /></span>
                <span class="subnav_selected">All Continents</span>
                <span class="subnav_arrow"><i class="fa fa-caret-down"></i></span>
                <ul class="subnav_list">
                    <li>All Continents</li>
                    <li>Africa</li>
                    <li>Asia</li>
                    <li>Europe</li>
                    <li>North America</li>
                    <li>South America</li>
                    <li>Oceania</li>
                </ul>
            </div>
        </div>

    </section>
    <!-- end nav_guide -->
    <section>
        <table id="designers_rank_table">
            <thead>
                <th class="rank_number"></th>
                <th class="rank_updown"></th>
                <th class="rank_contry"></th>
                <th class="rank_photo"></th>
                <th class="rank_name"></th>
                <th class="rank_like"><i class="fa fa-heart"></i></th>
                <th class="rank_art"><i class="fa fa-user-plus"></i></th>
            </thead>
            <tbody>
                <tr id="top_rank">
                    <td><i class="fa fa-trophy"></i></td>
                    <td></td>
                    <td>Country</td>
                    <td>
                        <img src="ch/img/no_img/no_img_user1.jpg" /></td>
                    <td class="rank_name">
                        <a href="./index.php?1=personal_page&2=personal_page&3=main&4=my_contents">Admin_User</a>
                    </td>
                    <td class="rank_like">00000</td>
                    <td class="rank_art">00000</td>
                </tr>
                
                <?php
                    for($i=1; $i<=20; $i++){
                        if($i%2!=0){
                            echo 
                            "<tr id='rankers'>
                                <td>{$i}</td>
                                <td><i class='fa fa-caret-up rankup'></i></td>
                                <td>Country</td>
                                <td>
                                    <img src='ch/img/no_img/no_img_user1.jpg' /></td>
                                <td class='rank_name'>
                                    <a href='./index.php?1=personal_page&2=personal_page&3=main&4=my_contents'>Admin_User</a>
                                </td>
                                <td class='rank_like'>00000</td>
                                <td class='rank_art'>00000</td>
                            </tr>";
                        }//if end
                        elseif($i%2==0){
                            echo 
                            "<tr id='rankers'>
                                <td>{$i}</td>
                                <td><i class='fa fa-caret-down rankdown'></i></td>
                                <td>Country</td>
                                <td>
                                    <img src='ch/img/no_img/no_img_user1.jpg' /></td>
                                <td class='rank_name'>
                                    <a href='./index.php?1=personal_page&2=personal_page&3=main&4=my_contents'>Admin_User</a>
                                </td>
                                <td class='rank_like'>00000</td>
                                <td class='rank_art'>00000</td>
                            </tr>";
                        }//elseif end
                    }//for end
                ?>
            </tbody>
        </table>
        <?php
            include_once('php/layout/pager.php');
        ?>
    </section>
</section>
<!-- end contents section -->
