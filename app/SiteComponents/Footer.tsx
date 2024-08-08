import Image from 'next/image'
import { AiFillInstagram } from 'react-icons/ai'
import { RiFacebookFill } from 'react-icons/ri'

export default function Footer(){
    return (  
        <div className="grid lg:grid-cols-4 gap-8 lg:gap-8 mx-[20px] lg:mx-[80px] py-14 text-primary">
        <div className="flex lg:justify-center">
            <Image className='scale-[.9]' src={'/images/logo.png'} alt='' width={200} height={200}/> 
        </div>
        <div className="flex lg:justify-center">
            <div className="flex flex-col space-y-2">
                <div className="text-lg font-semibold">Queenstown, New Zealand</div>
                <div className='text-sm'>Phone: 123-456-7890</div>
                <div className='text-sm'>Email:bradleyjamesham@gmail.com</div>
            </div>
        </div>
        <div className="flex lg:justify-center">
            <div className="flex flex-col space-y-2">
                <div className='text-sm'>Home</div>
                <div className='text-sm'>About</div>
                <div className='text-sm'>Contact</div>
            </div>
        </div>
        <div className="flex justify-start">
            <div className="flex space-x-2 ">
                <AiFillInstagram size={30}/>
                <RiFacebookFill size={30}/>
            </div>
        </div>
    </div>
    )
}