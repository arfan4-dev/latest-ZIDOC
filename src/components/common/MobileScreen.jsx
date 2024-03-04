/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useMemo, useRef } from 'react'
import { FiAlignLeft } from 'react-icons/fi'
import Sidebar from './Sidebar'
import { AnimatePresence, motion } from 'framer-motion';
import Section from './Section';
function MobileScreen() {
  const menuRef = useRef(null);

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }
  const handleClickOutside = useMemo(
    () => (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    },
    [menuRef]
  );

  useEffect(() => {
    const handleClick = (e) => handleClickOutside(e);
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [handleClickOutside]);
  return (
    <div className=' sm:hidden' ref={menuRef}>
      <div className='w-[100%] bg-black h-[40px] flex items-center justify-between'>
        <button
          onClick={toggleDrawer}
          className="ml-4"
        >
          <FiAlignLeft color='white' className='' />
        </button>
        <img src="/assets/zi_doc_lock.svg" alt="" className='mr-4 w-[30px]' />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="overflow-y-auto customScrollbar h-screen absolute left-0 top-0 z-50">
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100, transition: { duration: 1 } }}
                  transition={{ duration: '0.2' }}
                  className=" bg-black font-bold text-[#FFFFFF]  w-[200px] h-[750px] sm:w-[205px] sm:h-[750px] md:w-[210px] md:h-[750px]  lg:h-[840px] lg:w-[250px] xl:w-[250px] xl:h-[850px] 2xl:w-[300px] 2xl:min-h-screen customScrollbar overflow-y-auto">
                  <div>
                    <p className=" text-[10px] transform -rotate-90 origin-left mt-[100px] ml-5 lg:mt-28 lg:ml-5 2xl:mt-36 2xl:ml-5 sm:text-[10px] lg:text-[14px] 2xl:text-[20px] tracking-[3px] font-normal"><span className="text-[#BE9F56] ">|</span> <span>PRODUCTS</span></p>
                    <img src="assets/zi_doc_lock.svg" alt="zi_doc_lock.svg" className="w-[100px] sm:w-[75px] lg:w-[100px] 2xl:w-[129px] -mt-[55px] ml-12 sm:-mt-[43px] sm:ml-16 lg:-mt-[58px] lg:ml-20  2xl:-mt-[75px] 2xl:ml-20" />
                  </div>

                  <p className="text-[#4d4c4c] tracking-[8px] lg:tracking-[9px] text-[22px] sm:text-[22px]  lg:text-[30px] 2xl:text-[40px] uppercase ml-3.5 lg:ml-3 mt-3 lg:mt-0">products</p>

                  <p className="text-[8px] sm:text-[7px] lg:text-[11px]  2xl:text-[14px] uppercase tracking-[3px] ml-28 lg:ml-36  2xl:ml-[165px]">signatures</p>
                  <p className="text-[8px] sm:text-[7px] lg:text-[11px] 2xl:text-[14px] uppercase tracking-[2px] mt-3 ml-4">ELECTRONIC SIGNATURE</p>
                  <p className="text-[6px] sm:text-[7px] lg:text-[9px] 2xl:text-[12px] uppercase tracking-[1.3px] font-bold text-[#4d4c4c] ml-4 mt-3 2xl:mt-4">WORLDS MOST SECURE WAY TO SIGN <br /> AND SEND</p>

                  <p className="text-[8px] sm:text-[7px] lg:text-[11px] 2xl:text-[14px] uppercase tracking-[2px] mt-3 2xl:mt-4 ml-4">E-WITNESS</p>

                  <p className="text-[6px] sm:text-[7px] lg:text-[9px] 2xl:text-[10px] uppercase tracking-[1.3px] mt-3 2xl:mt-4 ml-4 text-[#4d4c4c] ">WITNESS & SIGN CONFIDENTIAL AND <br /> HIGH VALUE AGREEMENTS/CONTRACTS
                  </p>


                  <p className="text-[8px] sm:text-[7px] lg:text-[11px] 2xl:text-[14px] uppercase tracking-[2px] mt-4 ml-4 ">IDENTITY VERIFICATION</p>
                  <p className="text-[6px] sm:text-[7px] lg:text-[9px] 2xl:text-[10px] uppercase tracking-[1.3px] text-[#4d4c4c] mt-3 2xl:mt-4 ml-4">WORKING SEAMLESSLY WITH AES <br /> 256-BIT ENCRYPTION AND ZIMO MEET
                  </p>


                  <p className="text-[8px] sm:text-[7px] lg:text-[11px] 2xl:text-[14px]  font-bold uppercase tracking-[3px] mt-4 ml-28 lg:ml-36 2xl:ml-40">contracts</p>
                  <p className="text-[8px] sm:text-[7px] lg:text-[11px] 2xl:text-[14px] uppercase tracking-[1px] mt-3 2xl:mt-4 ml-4">CONTRACT/AGREEMENT MANAGEMENT</p>
                  <p className="text-[6px] sm:text-[7px] lg:text-[9px] 2xl:text-[10px] uppercase tracking-[1px]  text-[#4d4c4c] mt-3 2xl:mt-4 ml-4">ORGANISED, AUTOMATED DUCUMENT
                  </p>
                  <p className="text-[6px] sm:text-[7px] lg:text-[9px] 2xl:text-[10px] uppercase tracking-[1px]  text-[#4d4c4c] mt-2 2xl:mt-3 ml-4"> WORKFLOWS</p>


                  <p className="text-[8px] sm:text-[7px] lg:text-[11px] 2xl:text-[14px] uppercase tracking-[1px] mt-3 2xl:mt-4 ml-4 ">DOCUMENT GENERATION</p>
                  <p className="text-[6px] sm:text-[7px] lg:text-[9px] 2xl:text-[10px] uppercase tracking-[1px] text-[#4d4c4c] mt-3 2xl:mt-4 ml-4">GENERATE DOCUMENTS SEAMLESSLY <br /> THROUGH YOUR DEDICATED PORTAL</p>

                  <p className="text-[8px] sm:text-[7px] lg:text-[11px] 2xl:text-[14px] uppercase tracking-[1px] mt-3 2xl:mt-4 ml-4">DATA SECURITY</p>
                  <p className="text-[6px] sm:text-[7px] text-justify lg:text-[9px] 2xl:text-[10px] uppercase tracking-[1px] text-[#4d4c4c] mt-3 2xl:mt-4 ml-4">ALL SIGNATURES,CONTRACTS,AGREEMENTS, <br /> DOCUMENTS AND WITNESS STATEMENTS <br /> KEPT UNDER AES 256-BITENCRYPTION FOR <br /> THE DURATION OF YOUR MEMBERSHIP</p>

                  <p className="text-[8px] sm:text-[7px] lg:text-[11px] 2xl:text-[14px] uppercase tracking-[1px]  mt-3 2xl:mt-4 ml-36 lg:ml-44 2xl:ml-[200px]">HISTORY</p>


                  <p className="text-[8px] sm:text-[7px] lg:text-[11px] 2xl:text-[14px] uppercase tracking-[1px]  mt-3 2xl:mt-4 ml-4">DOC.SAFE</p>
                  <p className="text-[6px] sm:text-[7px] lg:text-[9px] 2xl:text-[10px] uppercase tracking-[1px]  text-[#4d4c4c] mt-3 2xl:mt-4 ml-4">SEARCH, VIEW, DOWNLOAD AND SHARE <br /> EVERY SIGNATURE, CONTRACT, AGREEMENT,<br />AND DOCUMENT FROM YOUR PORTAL</p>

                  <p className="text-[8px] sm:text-[7px] lg:text-[11px] 2xl:text-[14px] uppercase tracking-[1px]  mt-3 2xl:mt-4 ml-[150px] lg:ml-[190px]  2xl:ml-[220px]">MORE</p>
                  <p className="text-[8px] sm:text-[7px] lg:text-[11px] 2xl:text-[14px] uppercase tracking-[1px] mt-3 2xl:mt-4 ml-4 ">PAYMENTS</p>

                  <p className="text-[6px] sm:text-[7px] lg:text-[9px] 2xl:text-[10px] uppercase tracking-[1px]  text-[#4d4c4c] mt-3 2xl:mt-4 ml-4">AGREE, SIGN AND MAKE PAYMENT(S) IN A<br />SINGLE CLICK</p>

                  <p className="text-[7px] lg:text-[11px] 2xl:text-[14px] uppercase tracking-[1px]  mt-3 2xl:mt-4 ml-4">CLICKWRAPS</p>
                  <p className="text-[6px] sm:text-[7px] lg:text-[9px] 2xl:text-[10px] uppercase tracking-[1px]  text-[#4d4c4c] mt-3 2xl:mt-4 ml-4">CAPTURE CONSENT WITH A SINGLE CLICK
                  </p>

                  <p className="text-[8px] sm:text-[7px] lg:text-[11px] 2xl:text-[14px] uppercase tracking-[1px] mt-3 2xl:mt-4 ml-4">WEB FORMS</p>
                  <p className="text-[6px] sm:text-[7px] lg:text-[9px] 2xl:text-[10px] uppercase tracking-[1px]  text-[#4d4c4c] mt-3 2xl:mt-4 ml-4">INCORPORATE DATA COLLECTION AND <br /> SPEED UP SIGNING</p>

                  <div className='flex'>
                    <p className='text-[8px] sm:text-[7px] lg:text-[11px] 2xl:text-[14px] uppercase tracking-[1px] mt-3 2xl:mt-4 ml-[100px] '>ALL PRODUCTS</p>
                    <img src="assets/right_arrow.svg" alt="" className='w-[15px] h-[15px] xl:w-[20px] xl:h-[20px] 2xl:w-[30px] 2xl:h-[30px] mt-3 ml-2' />
                  </div>
                </motion.div>

              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      <div>
        <img src="assets/ZIMA_AI.svg" className=' absolute right-4 top-14' alt="img" />
        <p className={`${isOpen && 'hidden'} font-lato tracking-[1px] absolute text-[10px] right-[16px]  font-bold top-28 `}>
          TRY FOR FREE
        </p>
      </div>
      <Section />


    </div>

  )
}

export default MobileScreen
