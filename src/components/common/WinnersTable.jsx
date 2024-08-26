import { useState } from "react";


export default function WinnersTable({ header, rows, ShowMine, sectionTitle }) {

  const [finalizedDta, setFinalizedDta] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  const openModal = (index) => {

    setFinalizedDta(rows[index].tickets)
    setIsModalOpen(true);
  };


  const closeModal = () => {

    setIsModalOpen(false);

  };

  if (sectionTitle == "All Activities") {
    var Headers = ["UserName", "Price", "Entries", "HASH", "Ticket "]

  } else {
    var Headers = [ "Price", "Entries", "HASH", "Ticket "]

  }


  const handleClick = () => {


  }



  return (

    <>
      {
        ShowMine == "Haan" ?

          <div className={`overflow-auto scroll`}>


            <Modal isOpen={isModalOpen} onClose={closeModal}>

              <div
                id="crypto-modal"
                tabIndex="-1"
                aria-hidden="true"
                className={`${isOpen ? "" : "hidden"
                  } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-sm bg-black bg-opacity-50`}
              >
                <div className="relative p-4 w-full max-w-md max-h-full">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-cool-600">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Your Tickets
                      </h3>
                      <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => setIsOpen(false)}
                      >
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 14"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 1"
                          />
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div className="p-4 md:p-5">
                    
                      <ul className="my-4 space-y-3">

                        {
                          finalizedDta.map((hit,index)=>{
                            return <li key={index}>
                            <a
                              
                              className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-cool-50 hover:bg-cool-100 group hover:shadow dark:bg-cool-600 dark:hover:bg-cool-500 dark:text-white"
                            >
                              <svg
                                aria-hidden="true"
                                className="h-4"
                                viewBox="0 0 40 38"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                {/* SVG paths for MetaMask logo */}
                              </svg>
                              <span className="flex-1 ms-3 whitespace-nowrap">
                              {hit}
                              </span>
                              {/* <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                                Popular
                              </span> */}
                            </a>
                          </li>
                          })
                        }

                        
                      
                      </ul>
                    </div>
                  </div>
                </div>
              </div>




            </Modal>

            <div className={`w-[600px] sm:w-full rounded-md mt-6 overflow-hidden`}>

              <div className={`w-full grid grid-cols-6 bg-cool-10`}>
                {Headers.map((item, index) => (
                  <h6
                    key={index}
                    className={`text-[14px] self-center justify-self-center py-6 text-slate-300`}
                    style={{ gridColumn: (index % 6) + 1 }}
                  >
                    {item}
                  </h6>
                ))}
              </div>

              <div>

                {rows.map((item, index) => (

                  <div
                    key={index}
                    className={`grid grid-cols-5 bg-cool-20 even:bg-cool-30 py-5`}
                  >
                    {
                      ShowMine == "Haan" &&
                      <p
                        className={`text-[16px] xs:text-[18px] sm:text-[20px] self-center justify-self-center tracking-tighter italic`}
                      >
                        PERSON
                      </p>
                    }

                    {/* <p
                      className={`text-[16px] xs:text-[18px] sm:text-[20px] self-center justify-self-center tracking-tighter italic`}
                    >
                      {item.game}
                    </p> */}
                    <p
                      className={`text-[16px] xs:text-[18px] sm:text-[20px] font-medium self-center justify-self-center tracking-tighter italic`}
                    >
                      {item.price}
                    </p>
                    <p
                      className={`text-[16px] xs:text-[18px] sm:text-[20px] font-medium self-center justify-self-center tracking-tighter italic`}
                    >
                      {item.entries}
                    </p>
                    <a target="__blank" href={`https://testnet.bscscan.com/tx/` + item.hash ? (item.hash).replace(/^"|"$/g, '') : ""}> <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Button
                    </button>
                    </a>

                    <a>

                      <button onClick={() => [openModal(index), setIsOpen(true)]} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Tickets
                      </button>

                    </a>

                  </div>
                ))}
              </div>
            </div>
          </div>

          :
          <div className={`overflow-auto scroll`}>
            <div className={`w-[600px] sm:w-full rounded-md mt-6 overflow-hidden`}>
              {/* HEADER */}
              <div className={`w-full grid grid-cols-4 bg-cool-10`}>
                {header.map((item, index) => (
                  <h6
                    key={index}
                    className={`text-[14px] self-center justify-self-center py-6 text-slate-300`}
                  >
                    {item}
                  </h6>
                ))}
              </div>
              {/* ROWS */}
              <div>
                {rows.map((item, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-4 bg-cool-20 even:bg-cool-30 py-4`}
                  >
                    <p
                      className={`text-[16px] xs:text-[18px] sm:text-[20px] self-center justify-self-center tracking-tighter italic`}
                    >
                      {item.Game}
                    </p>
                    <p
                      className={`text-[16px] xs:text-[18px] sm:text-[20px] font-medium self-center justify-self-center tracking-tighter italic`}
                    >
                      {item.Winner}
                    </p>
                    <p
                      className={`text-[16px] xs:text-[18px] sm:text-[20px] font-medium self-center justify-self-center tracking-tighter italic`}
                    >
                      {item.Won}
                    </p>
                    <p
                      className={`text-[16px] xs:text-[18px] sm:text-[20px] font-medium self-center justify-self-center tracking-tighter italic`}
                    >
                      {item.winningDate}
                    </p>
             
                  </div>
                ))}
              </div>
            </div>
          </div>

      }


    </>



  );
}



const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      {children}
    </>

  );
};