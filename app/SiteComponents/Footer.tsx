import Image from 'next/image'
import { AiFillInstagram } from 'react-icons/ai'
import { RiFacebookFill } from 'react-icons/ri'

export default function Footer(){
    return (  
        <div className='footer bg-accent text-primary'>
        <div className='footer-container container mx-auto flex justify-center items-center py-[40px]'>
          
            <div className='socials flex justify-center'>
                <a className='facebook opacity-70 cursor-pointer hover:opacity-100' 
                href='https://www.instagram.com/littledogdecorating' 
                target="_blank" 
                rel="noopener noreferrer">
                    <AiFillInstagram size={30} />
                </a>
                <a className='instagram opacity-70 cursor-pointer hover:opacity-100' 
                href='https://www.facebook.com/Littledogdecorating'
                target="_blank" 
                rel="noopener noreferrer">
                    <RiFacebookFill size={30}  />
                </a>
            </div>
        </div>
        <div className='bottom-footer  lg:px-side-spacing py-4  flex justify-center bg-primary text-white'>
          <p className='opacity-80'>  &copy; 2024 Lakeside Painting </p> 
        </div>
    </div>
    )
}