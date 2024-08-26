import React, { useState } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { setSocialPopup } from "@/store/slices/popupSlice";
import { IoClose } from "react-icons/io5";
import { BiLinkExternal } from "react-icons/bi";
import { SiBinance } from "react-icons/si";
import { FaEthereum } from "react-icons/fa6";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";

const SocialPopup = ({ setselectedSocial,GetDatas }) => {

  const dispatch = useDispatch();

  const socialPopup = useSelector((state) => state.popup.socialPopup);
  const socialSelected = useSelector((state) => state.popup.socialSelected);
  const [progressBar, setProgressBar] = useState(60);
  const [isLoading, setisLoading] = useState(false)
  const [isLoading2, setisLoading2] = useState(false)
  const [userEnteredUserName, setUserEnteredUserName] = useState("")
  const [showFollowButton, setshowFollowButton] = useState(false)


  const onModalRequestClose = () => {
    dispatch(setSocialPopup(false));
  };


  const CreateRecord = () => {

    setisLoading(true)


    const getData = localStorage.getItem("jwt")

    if (getData) {
      var parseIt = JSON.parse(getData)
    }

    try {

      axios.post("/api/SocialEntries", {
        userName: userEnteredUserName,
        UserId: parseIt.data._id,
        SocialType: setselectedSocial
      })
        .then((acc) => {

          onModalRequestClose()

          setisLoading(false)

          GetDatas()

          // console.log(acc.data)

          // // console.log(props)

          toast.success("Got Entries")

          setTimeout(() => {
            window.location.reload();
          }, 500);


        })
        .catch((err) => {
          setisLoading(false)

          // console.log(err)
        })

    } catch (error) {
      setisLoading(false)

      // console.log(error)
    }


  }

  const handleOpen = () =>{
    
    var linsk = ""

    switch (socialSelected) {

      case "Twitter":
        linsk  = "https://x.com/dreamgamezcoin"
        break;

      case "Instagram":
        linsk  = "https://www.instagram.com/dreamgamezcoin"
        break;
      case "Telegram":
        linsk  = "https://www.telegram.org/dreamgamezcoin"
        break;
      case "Discord":
        linsk  = "https://www.discord.com/dreamgamezcoin"
        break;
    
      default:
        break;
    }

    setshowFollowButton(false)
    window.open(linsk, '_blank');





  }

  return (
    <Modal
    onAfterOpen={()=>setshowFollowButton(true)}
    onAfterClose={()=>setshowFollowButton(false)}
      isOpen={socialPopup}
      onRequestClose={onModalRequestClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      className="flex flex-col justify-center items-center outline-none"
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.6)",
          width: "100%",
          height: "100vh",
          padding: "10vh 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 100,
        },
      }}
    >
      <div className="flex h-[80vh] lg:h-auto items-center justify-center">
        {/* <div className="flex-1 h-full bg-primary-dark flex flex-col overflow-y-scroll p-5 outline-none md:rounded-lg"> */}
        <div className="flex h-[70vh] msx-h-[90vh] lg:h-fit justify-center items-center">
          <div className="h-full bg-left bg-no-repeat p-4 lg:py-5 w-full rounded-md flex items-center justify-center flex-col lg:flex-row  shadow-md relative bg-neutral-950">
            <button
              className="absolute top-2 right-2 hover:bg-[#353535] rounded-full p-1 text-white/70 hover:text-white transition-all ease-in-out font-bold"
              onClick={onModalRequestClose}
            >
              <IoClose size={24} />
            </button>
            <div className="w-[100%] md:w-[500px] py-5 pb-3 px-10">
              <h2 className="text-center text-white text-xl font-semibold ">

                Get One Free entry

              </h2>
              <p className="text-gray-600 text-center mb-4 text-sm">
                Follow us on {socialSelected} @dreamgamez
              </p>
              {
                !showFollowButton &&
                <input
                  onChange={(e) => setUserEnteredUserName(e.target.value)}
                  type="text"
                  placeholder="Enter your username"
                  className="outline-none px-3 font-normal py-2 mt-4"
                />
              }

              {
                showFollowButton ?
                <div className="flex justify-center gap-4 mt-8">
                  <button onClick={handleOpen} className="py-8 register w-full ">Follow Now</button>
                
              </div>

                :

              <div className="flex justify-center gap-4 mt-8">
                {
                  isLoading ?
                  
                  <button disabled className="py-8 register w-full ">Please Wait...</button>

                  :

                  <button onClick={CreateRecord} className="py-8 register w-full ">Claim</button>
                  
                }
              </div>
                
              }
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SocialPopup;
