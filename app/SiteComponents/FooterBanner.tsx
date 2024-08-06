'use client'
import React, {useState} from 'react'
import ButtonCta from './ButtonCta'
import {COLORS} from '@/Utils/variables'
import { LuPaintbrush } from 'react-icons/lu'
import Modal from './Modal'
// import { useModal } from '../SiteComponents/ModalClientManager';


function FooterBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="footer-banner flex flex-col justify-center w-full py-[80px]  items-center px-5 bg-white relative z-20">
          {/* <div className="subtlePattern inset-0 relative z-0"></div> */}
          <div className="z-75 flex flex-col items-center relative">
          <div className="text-center text-white ">
          <h2 className='font-bold text-2xl mb-4 text-brand-primary'>Transform your space!</h2>
            <h2 className='text-xl  font-regular text-secondary tracking-tighter text-brand-primary'>See how we can help increase the value to your property today! </h2>
          </div>
          <div onClick={() => setIsModalOpen(true)} className=" mt-[30px] cta-button space-x-2 tracking-wide group border-brand-orange text-brand-orange  p-4 px-6 flex items-center rounded-lg shadow-xl active:shadow-md hover:-translate-y-[1px] cursor-pointer active:translate-y-[1px] bg-brand-secondary">
            <button  className="my-auto uppercase font-bold font-poppins text-md text-white transition duration-300 ease-in-out flex items-center ">
              <LuPaintbrush size={25} style={{ strokeWidth: '2px' }} color={COLORS.primary} />
              <span className='ml-2 text-brand-primary'>Book a consultation</span>
            </button>
          </div>
          <Modal isOpen={isModalOpen} onClose={handleCloseModal}/>
          </div>
    </div>
  )
}

export default FooterBanner

//