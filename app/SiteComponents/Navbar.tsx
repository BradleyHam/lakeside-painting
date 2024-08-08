'use client'
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import ButtonCta from "./ButtonCta";
import { IoClose, IoMenu } from 'react-icons/io5';
import Image from 'next/image';
import MobileNav from './MobileNav';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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

    return (
        <div className={``}>
            <div className="flex justify-between items-center px-5 py-4 lg:px-[80px]">
                <div onClick={handleToggle} className="order-2 lg:hidden">
                    {open ? <IoClose size={25} /> : <IoMenu size={35} />}
                </div>
                <div className="logo order-1 lg:order-2 scale-2">
                    <Image src={'/images/logo.png'} alt="logo" height={150} width={150} /> 
                </div>
    
                {renderMobileNav && (
                    <MobileNav open={open} onClose={handleAnimationEnd} handleToggle={handleToggle} />
                )}
    
                <ul className="flex-row space-x-8 items-center hidden lg:flex order-2 text-primary font-bold">
                    <Link href="/">
                        <li className='font-bold'>Home</li>
                    </Link>
                    <Link href="/about">
                        <li>About</li>
                    </Link>
                    <Link href="/projects">
                        <li>Projects</li>
                    </Link>
                    <ButtonCta text='Book a consultation' type={2}/>
                </ul>
            </div>
        </div>
    );
}