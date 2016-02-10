<?php
     require_once '../database/database_class.php';

     $database = new DBConnect;
     $database->DBInsert();
?>

<section id="create_account_area">
     <p id="account_title">Create An Account</p>
     <div id="account_box">
          <form id="account_idpass" name="form" action="./php/account/registration.php" method="post">
               <label>E-mail</label><input type="text" name="email" id="email_id" /><i></i>
               <p id="email_id_check" class="form_check"></p>
               <label>Password</label><input type="password" name="pass" id="pass_id" /><i></i>
               <p id="pass_id_check" class="form_check"></p>
               <label>Repeat Password</label><input type="password" name="repass" id="re_pass_id" /><i></i>
               <p id="re_pass_id_check" class="form_check"></p>
               <label>Nickname</label><input type="text" name="nick" id="nick_id" /><i></i>
               <p id="nick_id_check" class="form_check"></p>
               <label>Location</label>
               
               <div class="location_option_ca">
                    <select class="basic_filter" name="country_code">
                         <?php
                              $database->query = "SELECT * FROM luby_country";
                              $database->DBQuestion();
                              while($row = mysqli_fetch_array($database->result)){
                                   echo ("<option value = ".$row['country_code'].">".$row['country_name']."</option>");
                              }
                         ?>
                    </select>
               </div>
               
               <p id="document_desc">You should read documents below before check.</p>
               <div class="term_check_box">
                    <a href="../document/Important/term_of_service.pdf" class="document" target="_blank"><!--link for document-->
                         <p>
                              <img src="./ch/img/pdf_icon.png" width="25" height="30" alt="terms of service" />
                         </p>
                         <p class="term_title">Terms of service.pdf</p>
                    </a>
                    <span class="check_zone">
                         <p>I agree</p>
                         <input type="checkbox" class="check_box" id="check1" name="terms_check"/><label class="check_label" for="check1"></label>
                    </span>
               </div>
               <div class="term_check_box">
                    <a href="../document/Important/private_policy.pdf" class="document" target="_blank"><!--link for document-->
                         <p>
                              <img src="./ch/img/pdf_icon.png" width="25" height="30" alt="terms of service" />
                         </p>
                         <p class="term_title">Private policy.pdf</p>
                    </a>
                    <span class="check_zone">
                         <p>I agree</p>
                         <input type="checkbox" class="check_box" id="check2" name="private_check"/><label for="check2"></label>
                    </span>
               </div>
               <p id="account_email_sendcheck">would like to receive newsletter by e-mail
                    <input type="checkbox" class="email_resive" id="check3" name="email_send_check"/><label for="check3"></label>
               </p>
            

               <input type="button" class="account_submit" value="Submit" disabled />
          </form>
    </div>
</section>
