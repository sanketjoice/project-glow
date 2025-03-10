import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../components/Project Glow - Design Assets/Project Glow Logo/PG-Skin logo-dark.svg";
import leftArrow from "./Project Glow - Design Assets/Icons/chevron-left.png";
import closeIcon from "./Project Glow - Design Assets/Icons/close.png";
import profileIcon from "./Project Glow - Design Assets/Icons/SVG/info.svg";
import gem from "./Project Glow - Design Assets/SVG Selected/gem-green.svg";
import { GenderContext } from "./GenderContext";
import { useContext } from "react";

export default function QuestionnaireComponent() {
  const { gender, setGender } = useContext(GenderContext);

  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [location, setLocation] = useState("");
  const [showGender, setShowGender] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  const navigate = useNavigate();

  const handleMonthChange = (e) => {
    const value = e.target.value;

    // Allow only digits up to 2 characters
    if (/^\d{0,2}$/.test(value)) {
      // Check for valid range: 1-12, including leading zeros (e.g., 01, 02)
      if (value === "" || /^(0?[1-9]|1[0-2])$/.test(value)) {
        setMonth(value);
        checkShowGender(value, year);
      }
    }
  };

  const handleYearChange = (e) => {
    const value = e.target.value;
    const currentYear = new Date().getFullYear();

    if (/^\d{0,4}$/.test(value)) {
      // Allows up to 4 digits
      setYear(value); // Allow input while typing

      if (
        value.length === 4 &&
        parseInt(value) >= 1900 &&
        parseInt(value) <= currentYear
      ) {
        checkShowGender(month, value);
      } else if (value.length === 4) {
        // Invalid year entered
        setShowGender(false);
        setShowLocation(false);
      }
    }
  };

  const handleGenderChange = (e) => {
    const value = e.target.value; // Get the selected value
    setGender(value); // Update the GenderContext value

    checkShowLocation(month, year, value);
  };

  const checkShowGender = (monthValue, yearValue) => {
    if (monthValue && yearValue && yearValue.length === 4) {
      setShowGender(true);
    } else {
      setShowGender(false);
      setShowLocation(false); // Reset location if gender is hidden
    }
  };

  const checkShowLocation = (monthValue, yearValue, genderValue) => {
    if (monthValue && yearValue && genderValue && yearValue.length === 4) {
      setShowLocation(true);
    } else {
      setShowLocation(false);
    }
  };

  const handleNextClick = () => {
    navigate("/project-glow/skin-type");
  };

  const isButtonDisabled = !month || !year || !gender || !location;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-[390px] h-[680px] overflow-auto rounded-xl shadow-lg flex flex-col bg-[#F4F7F2]">
        <div className="flex items-center justify-between px-4 py-4">
          <img
            src={leftArrow}
            className="text-gray-700 w-[24px] h-[24px] cursor-pointer"
            alt="Left Arrow"
          />
          <img src={logo} alt="GlowSkin Logo" className="w-[110px] h-[28px]" />
          <img
            src={closeIcon}
            className="text-gray-700 w-[24px] h-[24px] cursor-pointer"
            alt="Close Icon"
          />
        </div>

        <div className="flex justify-center items-center mt-4 space-x-2">
          {[1, 2, 3].map((step, index) => (
            <div
              key={index}
              className={`w-[24px] h-[24px] text-white rounded-full py-[2px] 
                px-[7px] text-[14px] leading-[22px] justify-center text-center border ${
                  step === 1 ? "bg-black" : "bg-gray-300"
                }`}
            >
              {step}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center mt-6 px-6 text-center">
          <div className="flex">
            <div className="bg-[#F0F7EF] rounded-full p-4">
              <img
                src={profileIcon}
                alt="Info Icon"
                className="w-[70px] h-[70px]"
              />
            </div>
            <h1 className="mt-4 w-[240px] h-[120px] text-[24px] leading-[30px] text-start font-semibold">
              Tell us a bit about yourself to get a personalized analysis
            </h1>
          </div>

          <div className="flex justify-between mt-6 w-full max-w-xs">
            <div className="h-[107px] w-[159px] gap-[5px] flex flex-col items-start">
              <p className="text-[14px] leading-[22px] w-[96px] h-[22px]">
                Month of Birth
              </p>
              <input
                type="text"
                placeholder="MM"
                value={month}
                onChange={handleMonthChange}
                className="w-[159px] h-[50px] border border-gray-300 rounded-[6px] text-center text-gray-700 
                placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black placeholder:text-start
                 px-[16px] py-[16px]"
              />
              <p className="text-[#4B5563] text-[12px] leading-5 w-[196px] h-[20px] mt-2 text-start">
                You'll get a more accurate analysis
              </p>
            </div>
            <div className="h-[107px] w-[159px] gap-[5px] flex flex-col items-start">
              <p className="text-[14px] leading-[22px] w-[96px] h-[22px]">
                Year of Birth
              </p>
              <input
                type="text"
                placeholder="YYYY"
                value={year}
                onChange={handleYearChange}
                className="w-[159px] h-[50px] border border-gray-300 rounded-[6px] text-center text-gray-700 
                placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black 
                placeholder:text-start px-[16px] py-[16px]"
              />
            </div>
          </div>

          {showGender && (
            <div className="w-full mt-6">
              <div className="flex flex-col items-start">
                <p className="text-[14px] leading-[22px] mb-2">
                  What is your gender?
                </p>
                <select
                  value={gender}
                  onChange={handleGenderChange}
                  className="w-[330px] h-[48px] border border-gray-300 rounded-[6px] 
                    px-[16px] py-[12px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-black
                    bg-white"
                >
                  <option value="">Please select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non-Binary / Other</option>
                  <option value="prefer-not-to-say">Prefer Not to Say</option>
                </select>
                <p className="text-[#4B5563] text-[12px] leading-[20px] mt-2 text-start">
                  We ask about gender to better tailor skincare recommendations
                  based on hormonal and biological differences.
                </p>
              </div>
            </div>
          )}

          {showLocation && (
            <div className="w-full mt-6">
              <div className="flex flex-col items-start">
                <p className="text-[14px] leading-[22px] mb-2">
                  Where is your location?
                </p>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-[330px] h-[48px] border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2
                   focus:ring-black px-4 mb-2"
                >
                  <option value="">Select Location</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Anguilla">Anguilla</option>
                  <option value="Antartica">Antarctica</option>
                  <option value="Antigua and Barbuda">
                    Antigua and Barbuda
                  </option>
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
                  <option value="Bosnia and Herzegowina">
                    Bosnia and Herzegowina
                  </option>
                  <option value="Botswana">Botswana</option>
                  <option value="Bouvet Island">Bouvet Island</option>
                  <option value="Brazil">Brazil</option>
                  <option value="British Indian Ocean Territory">
                    British Indian Ocean Territory
                  </option>
                  <option value="Brunei Darussalam">Brunei Darussalam</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Cape Verde">Cape Verde</option>
                  <option value="Cayman Islands">Cayman Islands</option>
                  <option value="Central African Republic">
                    Central African Republic
                  </option>
                  <option value="Chad">Chad</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Christmas Island">Christmas Island</option>
                  <option value="Cocos Islands">Cocos (Keeling) Islands</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">Congo</option>
                  <option value="Congo">
                    Congo, the Democratic Republic of the
                  </option>
                  <option value="Cook Islands">Cook Islands</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                  <option value="Croatia">Croatia (Hrvatska)</option>
                  <option value="Cuba">Cuba</option>
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
                  <option value="Falkland Islands">
                    Falkland Islands (Malvinas)
                  </option>
                  <option value="Faroe Islands">Faroe Islands</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="France Metropolitan">
                    France, Metropolitan
                  </option>
                  <option value="French Guiana">French Guiana</option>
                  <option value="French Polynesia">French Polynesia</option>
                  <option value="French Southern Territories">
                    French Southern Territories
                  </option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Gibraltar">Gibraltar</option>
                  <option value="Greece">Greece</option>
                  <option value="Greenland">Greenland</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guadeloupe">Guadeloupe</option>
                  <option value="Guam">Guam</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-Bissau">Guinea-Bissau</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Heard and McDonald Islands">
                    Heard and Mc Donald Islands
                  </option>
                  <option value="Holy See">
                    Holy See (Vatican City State)
                  </option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="India">India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran">Iran (Islamic Republic of)</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Democratic People's Republic of Korea">
                    Korea, Democratic People's Republic of
                  </option>
                  <option value="Korea">Korea, Republic of</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Lao">Lao People's Democratic Republic</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libyan Arab Jamahiriya">
                    Libyan Arab Jamahiriya
                  </option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Macau">Macau</option>
                  <option value="Macedonia">
                    Macedonia, The Former Yugoslav Republic of
                  </option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Martinique">Martinique</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mayotte">Mayotte</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Micronesia">
                    Micronesia, Federated States of
                  </option>
                  <option value="Moldova">Moldova, Republic of</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Netherlands Antilles">
                    Netherlands Antilles
                  </option>
                  <option value="New Caledonia">New Caledonia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Niue">Niue</option>
                  <option value="Norfolk Island">Norfolk Island</option>
                  <option value="Northern Mariana Islands">
                    Northern Mariana Islands
                  </option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau">Palau</option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Pitcairn">Pitcairn</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Reunion">Reunion</option>
                  <option value="Romania">Romania</option>
                  <option value="Russia">Russian Federation</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Saint Kitts and Nevis">
                    Saint Kitts and Nevis
                  </option>
                  <option value="Saint Lucia">Saint LUCIA</option>
                  <option value="Saint Vincent">
                    Saint Vincent and the Grenadines
                  </option>
                  <option value="Samoa">Samoa</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome and Principe">
                    Sao Tome and Principe
                  </option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia (Slovak Republic)</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="South Georgia">
                    South Georgia and the South Sandwich Islands
                  </option>
                  <option value="Span">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="St. Helena">St. Helena</option>
                  <option value="St. Pierre and Miguelon">
                    St. Pierre and Miquelon
                  </option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Svalbard">
                    Svalbard and Jan Mayen Islands
                  </option>
                  <option value="Swaziland">Swaziland</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syria">Syrian Arab Republic</option>
                  <option value="Taiwan">Taiwan, Province of China</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania">Tanzania, United Republic of</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Togo">Togo</option>
                  <option value="Tokelau">Tokelau</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad and Tobago">
                    Trinidad and Tobago
                  </option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Turks and Caicos">
                    Turks and Caicos Islands
                  </option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">
                    United Arab Emirates
                  </option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States Minor Outlying Islands">
                    United States Minor Outlying Islands
                  </option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Vietnam">Viet Nam</option>
                  <option value="Virgin Islands (British)">
                    Virgin Islands (British)
                  </option>
                  <option value="Virgin Islands (U.S)">
                    Virgin Islands (U.S.)
                  </option>
                  <option value="Wallis and Futana Islands">
                    Wallis and Futuna Islands
                  </option>
                  <option value="Western Sahara">Western Sahara</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Serbia">Serbia</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
                <p className="text-[#4B5563] text-[12px] leading-[20px] text-start">
                  We collect environmental data that reveal how external factors
                  impact your skin health.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-auto mb-6 flex justify-center">
          <button
            className={`w-[188px] py-[12px] px-[50px] h-[48px] rounded-[6px] shadow-lg flex items-center justify-center gap-1 text-[16px] mt-8 ${
              isButtonDisabled
                ? "bg-[#E5E7EB] text-[#6C6C6C]"
                : "bg-black text-white"
            }`}
            onClick={handleNextClick}
            disabled={isButtonDisabled}
          >
            Earn 1 x <img src={gem} alt="" className="w-[20px] h-[20px] ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
