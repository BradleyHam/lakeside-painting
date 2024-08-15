'use client'
import React, {useState} from 'react'
import ButtonCta from './ButtonCta'
import {COLORS} from '@/Utils/variables'
import { LuPaintbrush } from 'react-icons/lu'
import Modal from './Modal'
import Image from 'next/image'
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
    <div className="footer-banner px-5 lg:px-[120px] py-[80px] flex flex-col space-y-4 items-start relative">
      <div className="z-20 flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:justify-between w-full items-start ">
      <div className='flex flex-col space-y-4 text-white '>
        <h3 className='text-xs uppercase tracking-widest text-white font-medium'>Increase the value to your property</h3>
        <h2 className='text-xl lg:text-2xl font-semibold leading-relaxed tracking-tight'>Get a free consultation from one of our experts</h2>
      </div>
    
     <button className='bg-accent-1 text-primary text-xs px-5 py-4 font-bold uppercase tracking-wide'>
        Book a consultation
     </button>
     
     </div>
 
 

    </div>
  )
}

export default FooterBanner

//