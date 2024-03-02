/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useMemo, useRef } from 'react'
import { FiAlignLeft } from 'react-icons/fi'
import Sidebar from './Sidebar'
import { AnimatePresence, motion } from 'framer-motion';
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
    <div className='sm:hidden' ref={menuRef}>
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
            <Sidebar />
          </motion.div>
        )}
      </AnimatePresence>


      <div>
        <img src="assets/ZIMA_AI.svg" className=' absolute right-4 top-14' alt="img" />
        <p className={`${isOpen && 'hidden'} font-lato tracking-[1px] absolute text-[10px] right-[16px]  font-bold top-28 `}>
          TRY FOR FREE
        </p>
      </div>
      <div className="bg-[#000000] w-[300px] h-[385px]  absolute top-[140px] right-0 rounded-bl-[20px] rounded-tl-[20px]">
        <img
          src="/assets/arrow.svg"
          className="w-[35px] h-[50px] ml-3 mt-5 "
          alt=""
        />
        <img
          src="/assets/signature.svg"
          alt=""
          className="absolute left-14 top-11   w-[150px] h-[50px] "
        />
        <hr className="ml-3 mr-3" />
      </div>

    </div>

  )
}

export default MobileScreen
