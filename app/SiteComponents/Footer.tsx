'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiFillInstagram } from 'react-icons/ai'
import { RiFacebookFill } from 'react-icons/ri'

export default function Footer() {
    const pathname = usePathname()

    const navItemStyle = "text-primary text-[13px] uppercase tracking-wider"

    return (
        <footer className="bg-light-bg/10">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1.5fr] gap-8 mx-5 lg:mx-20 py-14 text-primary">
                <div className="flex justify-start items-start">
                    <Image 
                        src={'/images/logo.png'} 
                        alt='Lakeside Painting - Professional Painters in Queenstown, NZ | Home and Commercial Painting Services' 
                        width={150} 
                        height={75} 
                        className="w-auto h-auto"
                    />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-base font-semibold mb-4">Quick Links</h3>
                    <nav className="flex flex-col space-y-2">
                        <Link href="/"><span className={`${navItemStyle} ${pathname === '/' ? 'font-bold' : ''}`}>Home</span></Link>
                        <Link href="/about"><span className={`${navItemStyle} ${pathname === '/about' ? 'font-bold' : ''}`}>About</span></Link>
                        <Link href="/projects"><span className={`${navItemStyle} ${pathname.startsWith('/projects') ? 'font-bold' : ''}`}>Projects</span></Link>
                        <Link href="/cost-calculator"><span className={`${navItemStyle} ${pathname === '/cost-calculator' ? 'font-bold' : ''}`}>Cost Calculator</span></Link>
                        <Link href="/testimonials"><span className={`${navItemStyle} ${pathname === '/testimonials' ? 'font-bold' : ''}`}>Testimonials</span></Link>
                        <Link href="/contact"><span className={`${navItemStyle} ${pathname === '/contact' ? 'font-bold' : ''}`}>Contact</span></Link>
                    </nav>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-base font-semibold mb-4">Services</h3>
                    <nav className="flex flex-col space-y-2">
                        <Link href="/services/interior"><span className={`${navItemStyle} ${pathname === '/services/interior' ? 'font-bold' : ''}`}>Interior</span></Link>
                        <Link href="/services/exterior"><span className={`${navItemStyle} ${pathname === '/services/exterior' ? 'font-bold' : ''}`}>Exterior</span></Link>
                    </nav>
                </div>
                <div className="flex flex-col">
                <div className="flex space-x-1 mb-4">
                        <a href="#" aria-label="Instagram"><AiFillInstagram size={24} /></a>
                        <a href="#" aria-label="Facebook"><RiFacebookFill size={24} /></a>
                    </div>
                    <div className="text-sm space-y-2">
                        <p><span className="font-semibold">Phone:</span> 0226132936</p>
                        <p className="break-words"><span className="font-semibold">Email:</span> bradleyjamesham@gmail.com</p>
                    </div>
                    {/* <div className="flex space-x-2 mt-4">
                        <a href="#" aria-label="Instagram"><AiFillInstagram size={24} /></a>
                        <a href="#" aria-label="Facebook"><RiFacebookFill size={24} /></a>
                    </div> */}
                </div>
            </div>
            <div className="border-t border-primary/10 py-4 px-5 lg:px-20">
                <p className="text-xs text-primary/70 text-center">
                    © {new Date().getFullYear()} Lakeside Painting. All rights reserved.
                </p>
            </div>
        </footer>
    )
}