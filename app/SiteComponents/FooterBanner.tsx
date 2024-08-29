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
    <div className="footer-banner px-side-spacing py-section-spacing flex flex-col space-y-4 items-start relative">
      <div className="z-20 flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:justify-between w-full items-start ">
      <div className='flex flex-col space-y-4 text-white '>
        <h4 className='text-xs uppercase tracking-widest text-white font-medium'>Increase the value to your property</h4>
        <h2 className='text-base font-semibold'>Get a free consultation from one of our experts</h2>
      </div>
    
      <ButtonCta text='Book a consultation' type={1}/>
     </div>
 
 

    </div>
  )
}

export default FooterBanner

//