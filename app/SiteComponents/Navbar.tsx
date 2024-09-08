'use client'
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ButtonCta from "./ButtonCta";
import { IoClose, IoMenu } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa'; // Import the chevron icon
import Image from 'next/image';
import MobileNav from './MobileNav';
import { motion, AnimatePresence } from 'framer-motion'; // Add this import

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const handleToggle = useCallback(() => {
        if (open) {
            setIsAnimating(true);
            setOpen(false);
        } else {
            setOpen(true);
        }
    }, [open]);

    const handleAnimationEnd = useCallback(() => {
        setIsAnimating(false);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const renderMobileNav = open || isAnimating;

    const isServicesActive = pathname.includes('/services/');

    return (
        <div className={`
            bg-white/90 
            backdrop-blur-md 
            supports-[backdrop-filter]:bg-white/60
            fixed top-0 left-0 right-0 
            transition-all duration-300 
            z-50
            shadow-sm
        `}>
            <div className="flex justify-between items-center px-5 py-4 lg:px-[80px] h-full">
                <div className="flex items-center lg:hidden">
                    <div onClick={handleToggle} className="cursor-pointer text-primary">
                        {open ? <IoClose size={25} /> : <IoMenu size={35} />}
                    </div>
                </div>

                <Link href={'/'} className="lg:order-first">
                    <div className="logo scale-2">
                        <Image src={'/images/logo.png'} alt="logo" height={150} width={150} /> 
                    </div>
                </Link>
                
                {renderMobileNav && (
                    <MobileNav open={open} onClose={handleAnimationEnd} handleToggle={handleToggle} />
                )}
                
                <ul className="flex-row space-x-6 items-center hidden xl:flex text-primary text-[13px] uppercase  tracking-wider">
                    <Link href="/">
                        <li className={pathname === '/' ? 'font-bold' : ''}>Home</li>
                    </Link>
                    <Link href="/about">
                        <li className={pathname === '/about' ? 'font-bold' : ''}>About</li>
                    </Link>
                    <li 
                        className={`relative group ${isServicesActive ? 'font-bold' : ''}`}
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <span className="cursor-pointer flex items-center">
                            Services
                        </span>
                        <AnimatePresence>
                            {isServicesOpen && (
                                <>
                                    <div className="absolute top-full left-0 w-full h-4"></div>
                                    <motion.ul
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-0 mt-4 py-2 w-48 bg-white shadow-lg rounded-sm overflow-hidden z-50"
                                    >
                                        <li>
                                            <Link href="/services/interior" className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200 font-normal">
                                                Interior
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services/exterior" className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200 font-normal">
                                                Exterior
                                            </Link>
                                        </li>
                                    </motion.ul>
                                </>
                            )}
                        </AnimatePresence>
                    </li>
                    <Link href="/projects">
                        <li className={pathname.startsWith('/projects') ? 'font-bold' : ''}>Projects</li>
                    </Link>
                    <Link href="/cost-calculator">
                        <li className={pathname === '/cost-calculator' ? 'font-bold' : ''}>Cost Calculator</li>
                    </Link>
                    <Link href="/testimonials">
                        <li className={pathname === '/testimonials' ? 'font-bold' : ''}>Testimonials</li>
                    </Link>
                    <Link href="/contact">
                        <li className={pathname === '/contact' ? 'font-bold' : ''}>Contact</li>
                    </Link>
                </ul>
                
                <div className="hidden lg:block">
                    <Link rel="stylesheet" href="/bookingPage" >
                    <ButtonCta text='Book a consultation' type={2}/>
                    </Link>
                </div>
            </div>
        </div>
    );
}