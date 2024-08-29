'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiFillInstagram } from 'react-icons/ai'
import { RiFacebookFill } from 'react-icons/ri'

export default function Footer(){
    const pathname = usePathname()

    return (  
        <footer className="grid lg:grid-cols-4 gap-8 lg:gap-8 mx-5 lg:mx-20 py-14 text-primary">
            <div className="flex lg:justify-center">
                <Image className='scale-90' src={'/images/logo.png'} alt='Logo' width={200} height={200}/> 
            </div>
            <div className="flex lg:justify-center">
                <div className="flex flex-col space-y-2">
                    <div className="text-base font-semibold">Queenstown, New Zealand</div>
                    <div className='text-sm'>Phone: 123-456-7890</div>
                    <div className='text-sm whitespace-nowrap'>Email: bradleyjamesham@gmail.com</div>
                </div>
            </div>
            <div className="flex lg:justify-center">
                <div className="flex flex-col space-y-2">
                    <Link href="/">
                        <div className={`text-sm ${pathname === '/' ? 'font-bold' : ''}`}>Home</div>
                    </Link>
                    <Link href="/projects">
                        <div className={`text-sm ${pathname.startsWith('/projects') ? 'font-bold' : ''}`}>Projects</div>
                    </Link>
                </div>
            </div>
            <div className="flex justify-start">
                <div className="flex space-x-2 ">
                    <AiFillInstagram size={30}/>
                    <RiFacebookFill size={30}/>
                </div>
            </div>
        </footer>
    )
}