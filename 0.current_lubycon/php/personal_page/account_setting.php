<link href="css/account_setting.css" rel="stylesheet" type="text/css" />
<link href="css/croppic.css" rel="stylesheet" type="text/css" />
<!-- account_setting page css -->
<script type="text/javascript" src="js/account_setting.js"></script>
<script type="text/javascript" src="js/jquery.mousewheel.min.js"></script>

<form id="account_setting_form" enctype="multipart/form-data" method="post" action="./php/personal_page/test.php">


    <section id="account_section">
        <section id="account_setting_section" class="setting_card">
            <p class="setting_title">Account Setting</p>
                <label>E-mail</label><input type="text" value="loremIpsum@lubycon.com" disabled />
                <div class="public_option">
                    <i class="fa fa-lock"></i>
                    <select class="basic_filter" name="email_public">
                        <option value="Public">Public</option>
                        <option value="Followers">Followers</option>
                        <option value="Private">Private</option>
                    </select>
                </div>
                <!-- end select box -->
                
                <label>Nickname</label><input type="text" value="loremIpsum" disabled />
                <label>Passward</label><input type="password" name="now_pass" id="now_pass_id" disabled /><i></i><span id="change_pass">Change Passward</span><br />
                <p id="now_pass_check" class="form_check"></p>
                <label>New Passward</label><input type="password" name="pass" id="pass_id" disabled /><i></i>
                <p id="pass_check" class="form_check"></p>
                <label>Repeat Passward</label><input type="password" name="repass" id="re_pass_id" disabled /><i></i>
                <p id="re_pass_check" class="form_check"></p>
        </section>
        
        <section id="history_setting_section" class="setting_card">
            <p class="setting_title">History setting</p>
            <div class="history_cell">
                <div class="history_data">
                    <select class="history_year" name="history_year[]">
                        <?php
                            for( $i=2016 ; $i > 1899 ; $i-- )
                            {
                                echo '<option value="'.$i.'">'.$i.'</option>';
                            }
                        ?>
                    </select>
                    <select class="history_month" name="history_month[]">
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">Jun</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                    <select class="history_kind" name="history_kind[]">
                        <option value="work_expierence">Work Expierence</option>
                        <option value="studied">Studied</option>
                        <option value="contest_prized">Contest / Prized</option>
                    </select>
                    <input class="history_text" type="text" name="history_text[]"/>
                </div>
            </div>
            <div id="history_plus">
                <i class="fa fa-plus"></i>
            </div>
            <div id="history_minus">
                <i class="fa fa-minus"></i>
            </div>
        </section>
        <section id="basic_info_section" class="setting_card">
            <p class="setting_title">Basic Info</p>
                <label>Profile Photo</label>
                <div id="croppic_account"></div>
                    <span class="btn" id="cropContainerHeaderButton">Find image</span>
                    <script src="./js/croppic.min.js"></script>
                    <script>
		                var croppicHeaderOptions = {
				                uploadUrl:'./php/img_crop/img_save_to_file.php',
				                cropData:{
					                "dummyData":1,
					                "dummyData2":"asdas"
				                },
				                cropUrl:'./php/img_crop/img_crop_to_file.php',
				                customUploadButtonId:'cropContainerHeaderButton',
				                modal:false,
				                loaderHtml:'<div class="loader bubblingG"><span id="bubblingG_1"></span><span id="bubblingG_2"></span><span id="bubblingG_3"></span></div> ',
				                onBeforeImgUpload: function(){ console.log('onBeforeImgUpload') },
				                onAfterImgUpload: function(){ console.log('onAfterImgUpload') },
				                onImgDrag: function(){ console.log('onImgDrag') },
				                onImgZoom: function(){ console.log('onImgZoom') },
				                onBeforeImgCrop: function(){ console.log('onBeforeImgCrop') },
				                onAfterImgCrop:function(){ console.log('onAfterImgCrop') }
		                }	
		                var croppic = new Croppic('croppic_account', croppicHeaderOptions);
	                </script>
               
                <label>Occupation / Job</label>
                <div class="job_option">
                    <select class="basic_filter" name="job">
                        <option value="designer">Designer</option>
                        <option value="engineer">Engineer</option>
                        <option value="student">Student</option>
                    </select>
                </div>

                <label>Location</label>
                <div class="location_option">
                    <select class="basic_filter" name="location">
                        <option value="Afganistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antigua &amp; Barbuda">Antigua &amp; Barbuda</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bonaire">Bonaire</option>
                        <option value="Bosnia &amp; Herzegovina">Bosnia &amp; Herzegovina</option>
                        <option value="Botswana">Botswana</option>
                        <option value="Brazil">Brazil</option>
                        <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                        <option value="Brunei">Brunei</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Canary Islands">Canary Islands</option>
                        <option value="Cape Verde">Cape Verde</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Central African Republic">Central African Republic</option>
                        <option value="Chad">Chad</option>
                        <option value="Channel Islands">Channel Islands</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Christmas Island">Christmas Island</option>
                        <option value="Cocos Island">Cocos Island</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Cote DIvoire">Cote D'Ivoire</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Curaco">Curacao</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">Dominican Republic</option>
                        <option value="East Timor">East Timor</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands">Falkland Islands</option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">French Polynesia</option>
                        <option value="French Southern Ter">French Southern Ter</option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Great Britain">Great Britain</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Iran">Iran</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Laos">Laos</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libya">Libya</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macau">Macau</option>
                        <option value="Macedonia">Macedonia</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">Marshall Islands</option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Midway Islands">Midway Islands</option>
                        <option value="Moldova">Moldova</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Nambia">Nambia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherland Antilles">Netherland Antilles</option>
                        <option value="Netherlands">Netherlands (Holland, Europe)</option>
                        <option value="Nevis">Nevis</option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="North Korea">North Korea</option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau Island">Palau Island</option>
                        <option value="Palestine">Palestine</option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">Papua New Guinea</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Phillipines">Philippines</option>
                        <option value="Pitcairn Island">Pitcairn Island</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Republic of Montenegro">Republic of Montenegro</option>
                        <option value="Republic of Serbia">Republic of Serbia</option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Russia">Russia</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="St Barthelemy">St Barthelemy</option>
                        <option value="St Eustatius">St Eustatius</option>
                        <option value="St Helena">St Helena</option>
                        <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                        <option value="St Lucia">St Lucia</option>
                        <option value="St Maarten">St Maarten</option>
                        <option value="St Pierre &amp; Miquelon">St Pierre &amp; Miquelon</option>
                        <option value="St Vincent &amp; Grenadines">St Vincent &amp; Grenadines</option>
                        <option value="Saipan">Saipan</option>
                        <option value="Samoa">Samoa</option>
                        <option value="Samoa American">Samoa American</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome &amp; Principe">Sao Tome &amp; Principe</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="South Korea">South Korea</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syria">Syria</option>
                        <option value="Tahiti">Tahiti</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad &amp; Tobago">Trinidad &amp; Tobago</option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks &amp; Caicos Is">Turks &amp; Caicos Is</option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Erimates">United Arab Emirates</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="United States of America">United States of America</option>
                        <option value="Uraguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Vatican City State">Vatican City State</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                        <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                        <option value="Wake Island">Wake Island</option>
                        <option value="Wallis &amp; Futana Is">Wallis &amp; Futana Is</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zaire">Zaire</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                </div>
                <input type="text" id="location_text" name="location_text" />
                <label>Language</label>
                <div id="lang_option_id" class="language_option">
                    <select class="basic_filter" name="lang_ability[]">
                        <option value="Beginer">Beginer</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Fluent">Fluent</option>
                        <option value="Native">Native</option>
                    </select>
                </div>
                <input type="text" id="lang_input_id" class="language_text" name="language[]" />
                <div id="clone_div"></div>
                <div id="lang_plus">
                    <i class="fa fa-plus"></i>
                </div>
                <div id="lang_minus_id" class="lang_minus">
                    <i class="fa fa-minus"></i>
                </div>
                <label id="basic_desc_label">Description</label><textarea id="basic_desc" maxlength="1000" name="desc"></textarea><br />
        </section>

        <section id="contact_info_section" class="setting_card">
            <p class="setting_title">Contact Info</p>
                <label>Mobile</label><input type="text" name="mobile_number"/>
                <div class="public_option">
                    <i class="fa fa-lock"></i>
                    <select class="basic_filter" name="mobile_public">
                        <option value="Public">Public</option>
                        <option value="Followers">Followers</option>
                        <option value="Private">Private</option>
                    </select>
                </div>
                <!-- end select box -->
                
                <label>FAX</label><input type="text" name="fax_number"/>
                <div class="public_option">
                    <i class="fa fa-lock"></i>
                    <select class="basic_filter" name="fax_public">
                        <option value="Public">Public</option>
                        <option value="Followers">Followers</option>
                        <option value="Private">Private</option>
                    </select>
                </div>
                <!-- end select box -->
                
                <label>Website</label><input type="text" name="website_url"/>
                <div class="public_option">
                    <i class="fa fa-lock"></i>
                    <select class="basic_filter" name="website_public">
                        <option value="Public">Public</option>
                        <option value="Followers">Followers</option>
                        <option value="Private">Private</option>
                    </select>
                </div>
                <!-- end select box -->
                
        </section>
        <section id="delete_account_section" class="setting_card">
            <p class="setting_title">Delete Account</p>
                <p id="delete_desc">Deleting your account will delete all of your content and remove all data associated with it.</p>
                <span id="confirm_bt" class="lubyAlert_bt" data="confirm">I want delete my account</span>
        </section>
        <input type="submit" value="Submit" id="submit_bt" />
    </section>
</form>