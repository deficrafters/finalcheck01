"use client";
import Link from "next/link";
import React, { useState, useEffect, useContext } from "react";
import { FaEye, FaEyeSlash, FaRegCircleDot } from "react-icons/fa6";
import GlobalContext from "../context/global/GlobalContext";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setprofileUserData } from "@/store/slices/popupSlice";
import toast from "react-hot-toast";
import { setSelectedCountry } from "@/store/slices/popupSlice";

const CustomDropdown = ({ options, onSelect, countries, setCountries,defaultValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  const handleOptionClick = (option) => {

  //  console.log(option)

    dispatch(setSelectedCountry(option));

    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-3 relative bg-cool-20 rounded-radius-sm">
    <div
      className="flex items-center select-none text-[14px]"
      onClick={() => setIsOpen(!isOpen)}
    >
      {!selectedOption ? defaultValue : selectedOption || "Select a country"}
    </div>
    {isOpen && (
      <div className="countryBox p-3 absolute left-0 top-[45px] bg-cool-10 h-fit">
        <input
          type="text"
          style={{color:"black"}}
          className="w-full p-2 mb-2 border rounded-radius-sm"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <ul
          className={`w-[100%] text-blue-100 overflow-y-auto scrollBarCtrl ${
            isOpen ? `max-h-40` : `max-h-0`
          }`}
        >
          {filteredOptions.map((option) => (
            <li
              key={option}
              className="bg-transparent hover:bg-cool-50 px-3 py-2 rounded-radius-sm select-none text-[14px]"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
  );
};

function getDialCode(countryName) {
  switch (countryName) {
    case "Afghanistan":
      return "+93";
    case "Albania":
      return "+355";
    case "Algeria":
      return "+213";
    case "American Samoa":
      return "+1 684";
    case "Andorra":
      return "+376";
    case "Angola":
      return "+244";
    case "Anguilla":
      return "+1 264";
    case "Antarctica":
      return "+672";
    case "Antigua and Barbuda":
      return "+1268";
    case "Argentina":
      return "+54";
    case "Armenia":
      return "+374";
    case "Aruba":
      return "+297";
    case "Australia":
      return "+61";
    case "Austria":
      return "+43";
    case "Azerbaijan":
      return "+994";
    case "Bahamas":
      return "+1 242";
    case "Bahrain":
      return "+973";
    case "Bangladesh":
      return "+880";
    case "Barbados":
      return "+1 246";
    case "Belarus":
      return "+375";
    case "Belgium":
      return "+32";
    case "Belize":
      return "+501";
    case "Benin":
      return "+229";
    case "Bermuda":
      return "+1 441";
    case "Bhutan":
      return "+975";
    case "Bolivia":
      return "+591";
    case "Bosnia and Herzegovina":
      return "+387";
    case "Botswana":
      return "+267";
    case "Brazil":
      return "+55";
    case "British Indian Ocean Territory":
      return "+246";
    case "British Virgin Islands":
      return "+1 284";
    case "Brunei":
      return "+673";
    case "Bulgaria":
      return "+359";
    case "Burkina Faso":
      return "+226";
    case "Burundi":
      return "+257";
    case "Cambodia":
      return "+855";
    case "Cameroon":
      return "+237";
    case "Canada":
      return "+1";
    case "Cape Verde":
      return "+238";
    case "Cayman Islands":
      return "+1 345";
    case "Central African Republic":
      return "+236";
    case "Chad":
      return "+235";
    case "Chile":
      return "+56";
    case "China":
      return "+86";
    case "Christmas Island":
      return "+61";
    case "Cocos Islands":
      return "+61";
    case "Colombia":
      return "+57";
    case "Comoros":
      return "+269";
    case "Cook Islands":
      return "+682";
    case "Costa Rica":
      return "+506";
    case "Croatia":
      return "+385";
    case "Cuba":
      return "+53";
    case "Curacao":
      return "+599";
    case "Cyprus":
      return "+357";
    case "Czech Republic":
      return "+420";
    case "Democratic Republic of the Congo":
      return "+243";
    case "Denmark":
      return "+45";
    case "Djibouti":
      return "+253";
    case "Dominica":
      return "+1 767";
    case "Dominican Republic":
      return "+1 809";
    case "East Timor":
      return "+670";
    case "Ecuador":
      return "+593";
    case "Egypt":
      return "+20";
    case "El Salvador":
      return "+503";
    case "Equatorial Guinea":
      return "+240";
    case "Eritrea":
      return "+291";
    case "Estonia":
      return "+372";
    case "Ethiopia":
      return "+251";
    case "Falkland Islands":
      return "+500";
    case "Faroe Islands":
      return "+298";
    case "Fiji":
      return "+679";
    case "Finland":
      return "+358";
    case "France":
      return "+33";
    case "French Polynesia":
      return "+689";
    case "Gabon":
      return "+241";
    case "Gambia":
      return "+220";
    case "Georgia":
      return "+995";
    case "Germany":
      return "+49";
    case "Ghana":
      return "+233";
    case "Gibraltar":
      return "+350";
    case "Greece":
      return "+30";
    case "Greenland":
      return "+299";
    case "Grenada":
      return "+1 473";
    case "Guam":
      return "+1 671";
    case "Guatemala":
      return "+502";
    case "Guernsey":
      return "+44";
    case "Guinea":
      return "+224";
    case "Guinea-Bissau":
      return "+245";
    case "Guyana":
      return "+592";
    case "Haiti":
      return "+509";
    case "Honduras":
      return "+504";
    case "Hong Kong":
      return "+852";
    case "Hungary":
      return "+36";
    case "Iceland":
      return "+354";
    case "India":
      return "+91";
    case "Indonesia":
      return "+62";
    case "Iran":
      return "+98";
    case "Iraq":
      return "+964";
    case "Ireland":
      return "+353";
    case "Isle of Man":
      return "+44";
    case "Israel":
      return "+972";
    case "Italy":
      return "+39";
    case "Ivory Coast":
      return "+225";
    case "Jamaica":
      return "+1 876";
    case "Japan":
      return "+81";
    case "Jersey":
      return "+44";
    case "Jordan":
      return "+962";
    case "Kazakhstan":
      return "+7";
    case "Kenya":
      return "+254";
    case "Kiribati":
      return "+686";
    case "Kosovo":
      return "+383";
    case "Kuwait":
      return "+965";
    case "Kyrgyzstan":
      return "+996";
    case "Laos":
      return "+856";
    case "Latvia":
      return "+371";
    case "Lebanon":
      return "+961";
    case "Lesotho":
      return "+266";
    case "Liberia":
      return "+231";
    case "Libya":
      return "+218";
    case "Liechtenstein":
      return "+423";
    case "Lithuania":
      return "+370";
    case "Luxembourg":
      return "+352";
    case "Macau":
      return "+853";
    case "Macedonia":
      return "+389";
    case "Madagascar":
      return "+261";
    case "Malawi":
      return "+265";
    case "Malaysia":
      return "+60";
    case "Maldives":
      return "+960";
    case "Mali":
      return "+223";
    case "Malta":
      return "+356";
    case "Marshall Islands":
      return "+692";
    case "Mauritania":
      return "+222";
    case "Mauritius":
      return "+230";
    case "Mayotte":
      return "+262";
    case "Mexico":
      return "+52";
    case "Micronesia":
      return "+691";
    case "Moldova":
      return "+373";
    case "Monaco":
      return "+377";
    case "Mongolia":
      return "+976";
    case "Montenegro":
      return "+382";
    case "Montserrat":
      return "+1 664";
    case "Morocco":
      return "+212";
    case "Mozambique":
      return "+258";
    case "Myanmar":
      return "+95";
    case "Namibia":
      return "+264";
    case "Nauru":
      return "+674";
    case "Nepal":
      return "+977";
    case "Netherlands":
      return "+31";
    case "Netherlands Antilles":
      return "+599";
    case "New Caledonia":
      return "+687";
    case "New Zealand":
      return "+64";
    case "Nicaragua":
      return "+505";
    case "Niger":
      return "+227";
    case "Nigeria":
      return "+234";
    case "Niue":
      return "+683";
    case "Norfolk Island":
      return "+672";
    case "North Korea":
      return "+850";
    case "Northern Mariana Islands":
      return "+1 670";
    case "Norway":
      return "+47";
    case "Oman":
      return "+968";
    case "Pakistan":
      return "+92";
    case "Palau":
      return "+680";
    case "Palestine":
      return "+970";
    case "Panama":
      return "+507";
    case "Papua New Guinea":
      return "+675";
    case "Paraguay":
      return "+595";
    case "Peru":
      return "+51";
    case "Philippines":
      return "+63";
    case "Pitcairn":
      return "+64";
    case "Poland":
      return "+48";
    case "Portugal":
      return "+351";
    case "Puerto Rico":
      return "+1 787";
    case "Qatar":
      return "+974";
    case "Republic of the Congo":
      return "+242";
    case "Reunion":
      return "+262";
    case "Romania":
      return "+40";
    case "Russia":
      return "+7";
    case "Rwanda":
      return "+250";
    case "Saint Barthelemy":
      return "+590";
    case "Saint Helena":
      return "+290";
    case "Saint Kitts and Nevis":
      return "+1 869";
    case "Saint Lucia":
      return "+1 758";
    case "Saint Martin":
      return "+590";
    case "Saint Pierre and Miquelon":
      return "+508";
    case "Saint Vincent and the Grenadines":
      return "+1 784";
    case "Samoa":
      return "+685";
    case "San Marino":
      return "+378";
    case "Sao Tome and Principe":
      return "+239";
    case "Saudi Arabia":
      return "+966";
    case "Senegal":
      return "+221";
    case "Serbia":
      return "+381";
    case "Seychelles":
      return "+248";
    case "Sierra Leone":
      return "+232";
    case "Singapore":
      return "+65";
    case "Sint Maarten":
      return "+1 721";
    case "Slovakia":
      return "+421";
    case "Slovenia":
      return "+386";
    case "Solomon Islands":
      return "+677";
    case "Somalia":
      return "+252";
    case "South Africa":
      return "+27";
    case "South Korea":
      return "+82";
    case "South Sudan":
      return "+211";
    case "Spain":
      return "+34";
    case "Sri Lanka":
      return "+94";
    case "Sudan":
      return "+249";
    case "Suriname":
      return "+597";
    case "Svalbard and Jan Mayen":
      return "+47";
    case "Swaziland":
      return "+268";
    case "Sweden":
      return "+46";
    case "Switzerland":
      return "+41";
    case "Syria":
      return "+963";
    case "Taiwan":
      return "+886";
    case "Tajikistan":
      return "+992";
    case "Tanzania":
      return "+255";
    case "Thailand":
      return "+66";
    case "Togo":
      return "+228";
    case "Tokelau":
      return "+690";
    case "Tonga":
      return "+676";
    case "Trinidad and Tobago":
      return "+1 868";
    case "Tunisia":
      return "+216";
    case "Turkey":
      return "+90";
    case "Turkmenistan":
      return "+993";
    case "Turks and Caicos Islands":
      return "+1 649";
    case "Tuvalu":
      return "+688";
    case "U.S. Virgin Islands":
      return "+1 340";
    case "Uganda":
      return "+256";
    case "Ukraine":
      return "+380";
    case "United Arab Emirates":
      return "+971";
    case "United Kingdom":
      return "+44";
    case "United States":
      return "+1";
    case "Uruguay":
      return "+598";
    case "Uzbekistan":
      return "+998";
    case "Vanuatu":
      return "+678";
    case "Vatican":
      return "+379";
    case "Venezuela":
      return "+58";
    case "Vietnam":
      return "+84";
    case "Wallis and Futuna":
      return "+681";
    case "Western Sahara":
      return "+212";
    case "Yemen":
      return "+967";
    case "Bolivia, Plurinational State of Bolivia":
      return "+591";
    case "Zambia":
      return "+260";
    case "Zimbabwe":
      return "+263";
    default:
      return "Select Country Code";
  }
}


export default function SignUpForm() {
  
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    pinCode: "",
    dialCode: "",
    country: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    terms: false,
  };

  const [formData, setFormData] = useState(initialFormState);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [countries, setCountries] = useState([]);
  const [errors, setErrors] = useState({});
  const { selectedCountey, setselectedCountey } = useContext(GlobalContext);
  const [allowTyping, setallowTyping] = useState(null)

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setnumber] = useState("")
  const [country, setCountry] = useState("")
  const [pinCode, setPinCode] = useState("")
  const [dialCode, setDialCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const SelectedCountry = useSelector((state) => state.popup.SelectedCountry);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/codes")
      .then((response) => response.json())
      .then((data) => setCountries(data.data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));

    if (name === "country") {
      const selectedCountry = countries.find(
        (country) => country.name === value
      );
      setFormData((prevData) => ({
        ...prevData,
        dialCode: selectedCountry ? selectedCountry.dial_code : "",
      }));
    }
  };

  const handleCustomDropdownSelect = (selectedCountry) => {
    setFormData((prevData) => ({
      ...prevData,
      country: selectedCountry,
    }));

    const selectedCountryData = countries.find(
      (country) => country.name === selectedCountry
    );
    setFormData((prevData) => ({
      ...prevData,
      dialCode: selectedCountryData ? selectedCountryData.dial_code : "",
    }));
  };

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = (e) => {
    e.preventDefault();
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validateForm = () => {
    const newErrors = {};

    // Add your validation logic here
    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First name is required";
    }

    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last name is required";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select a gender";
    }

    if (formData.pinCode.trim() === "") {
      newErrors.pinCode = "Provide PIN";
    }

    if (!formData.country) {
      newErrors.country = "Please select a country";
    }

    if (formData.mobileNumber.trim() === "") {
      newErrors.mobileNumber = "Mobile number is required";
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
    }

    if (formData.confirmPassword.trim() === "") {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.terms) {
      newErrors.terms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);

    // Return true if there are no errors, otherwise false
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {

    getUserBasicInformation()

  }, [])

  const getUserBasicInformation = () => {

    let getdata = localStorage.getItem("jwt")
    let parseIUt = JSON.parse(getdata)

    try {

      axios.post("/api/BasicInformation", {
        ids: parseIUt.data._id
      })
        .then((acc) => {

        //  console.log(acc.data)

          setFirstName(acc.data.Fname)
          setLastName(acc.data.Lname)
          setEmail(acc.data.Email)
          setnumber(acc.data.ContactNumber)
          setCountry(acc.data.Country)
          setPinCode(acc.data.PinCode)
          setDialCode(acc.data.DialCode)

        })
        .catch((err) => {
        //  console.log(err)
        })

    } catch (error) {
    //  console.log(error)
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true)

    let data = localStorage.getItem("jwt")
    let parseIt = JSON.parse(data)


  //  console.log({country:SelectedCountry?SelectedCountry:country})


    try {

      axios.post("/api/UpdateProfile", {
        firstName,
        lastName,
        email,
        number,
        country:SelectedCountry?SelectedCountry:country,
        pinCode,
        dialCode,
        id: parseIt.data._id
      })
        .then((acc) => {
          setIsLoading(false)


          toast.success("Profile Updated")

          getUserBasicInformation()

        })
        .catch((err) => {
          setIsLoading(false)

        //  console.log(err)
        })

    } catch (error) {
      setIsLoading(false)

    //  console.log(error)
    }





  };

  const handleSelected = () => {



  }

  if (country && !SelectedCountry) {
    dispatch(setSelectedCountry(country));
  }

  let Arr = getDialCode(SelectedCountry)

  return (
    <form onSubmit={isLoading ? () => { } : handleSubmit} className="w-full text-white p-4">
      <div className="mb-4 text-cool-90 flex items-center gap-2">
        <FaRegCircleDot />

        Personal Info

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-2">
        <div className="mb-4">
          <input
            type="text"
            value={firstName !== "null" ? firstName : null}
            name="firstName"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            className="signupInputStyles"
          />
    
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName !== "null" ? lastName : null}
            onChange={(e) => setLastName(e.target.value)}
            className="signupInputStyles"
          />
 
        </div>
      </div>

      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email !== "null" ? email : null}
          // disabled={email == "null" || email == null || allowTyping !== null ? false: true}
          // onChange={(e)=>setEmail(e.target.value)}
          onChange={(e) => { email == "null" || email == null || allowTyping !== null ? [setEmail(e.target.value), setallowTyping(true)] : toast.error("For Now You Can Not Change Email.") }}
          className="signupInputStyles"
        />

      </div>

      <hr className="h-px bg-cool-80/30 border-0 mt-4 mb-6" />

      <div className="mb-4 text-cool-90 flex items-center gap-2">
        <FaRegCircleDot />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-0 sm:gap-2">
        <div className="col-span-1 mb-4">
          <input
            type="text"
            name="pinCode"
            value={pinCode !== "null" ? pinCode : null}
            placeholder="Pincode"
            onChange={(e) => setPinCode(e.target.value)}
            className="signupInputStyles"
          />
        </div>

        <div className="h-fit col-span-1 sm:col-span-3 order-first rounded-radius-sm mb-4 sm:mb-0">

          <CustomDropdown
        
          defaultValue={country!=="null"?country:"Select Country"}
            countries={countries ? countries : null}
            setCountries={setCountries}
            options={countries.map((country) => country.name)}
            onSelect={() => handleSelected(countries ? countries : null)}
          />

          {/* {errors.country && <div className="error">{errors.country}</div>} */}
        </div>
      </div>

      {/* MOBILE NUMBER & DIAL CODE */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-0 sm:gap-2">
        <div className="col-span-1">
          <input
            type="text"
            id="dialCode"
            name="dialCode"
            value={Arr ? Arr : ""}
            placeholder="Dial Code"
            readOnly
            className="signupInputStyles mb-4 focus:outline-none"
          />
          {errors.dialCode && <div className="error">{errors.dialCode}</div>}
        </div>


        <div className="col-span-1 sm:col-span-3">
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={number !== "null" ? number == 0 ? null : number : null}
            placeholder="Mobile Number"
            onChange={(e) => setnumber(e.target.value)}
            // onChange={(e)=>typeof(e.target.value) !== "number" || e.target.value !== undefined ?toast.error("Please Enter Valid Number."): setnumber(e.target.value)}
            className="signupInputStyles !mb-0"
          />
          {errors.mobileNumber && (
            <div className="error">{errors.mobileNumber}</div>
          )}
          
        </div>
      </div>

      {

        isLoading ?

          <button
            style={{ cursor: "no-drop", fontWeight: "bolder" }}
            type="submit"
            disabled
            className="button-rect bg-cool-40 w-[100%] !text-[14px] !rounded-radius-sm uppercase"
          >
            PLEASE WAIT...
          </button>

          :

          <button
            style={{ fontWeight: "bolder" }}
            type="submit"
            className="button-rect bg-cool-40 w-[100%] !text-[14px] !rounded-radius-sm uppercase"
          >
            UPDATE
          </button>

      }
    </form>
  );
}