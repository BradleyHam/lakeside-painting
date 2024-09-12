'use client'
import React, { useEffect, useRef } from 'react';
import ButtonCta from './ButtonCta';
import Link from 'next/link';
import gsap from 'gsap';
import { IoClose } from 'react-icons/io5';
import { usePathname } from 'next/navigation';

interface MobileNavProps {
    open: boolean;
    onClose: () => void;
    handleToggle: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ open, onClose, handleToggle }) => {
    const mobileNavRef = useRef<HTMLUListElement>(null);
    const listItemRefs = useRef<(HTMLLIElement | null)[]>([]);
    const buttonRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        const tl = gsap.timeline({ onComplete: onClose });

        if (open) {
            tl.fromTo(mobileNavRef.current, { y: -650 }, { duration: 0.5, y: 0, ease: "power1.out" })
              .to(listItemRefs.current, {
                  opacity: (i) => pathname === listItemRefs.current[i]?.getAttribute('data-path') ? 1 : 0.7,
                  y: 0,
                  duration: 0.5,
                  stagger: 0.1,
                  ease: "power1.out"
              }, "-=0.3")
              .to(buttonRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" }, "-=0.3");
        } else if (!open) {
            tl.to(buttonRef.current, { opacity: 0, y: 20, duration: 0.5, ease: "power1.out" })
              .to(listItemRefs.current, { opacity: 0, y: 20, duration: 0.5, stagger: -0.1, ease: "power1.out" }, "-=0.3")
              .fromTo(mobileNavRef.current, { y: 0 }, { duration: 0.5, y: -650, ease: "power1.out" }, '-=.3');
        }
    }, [open, onClose, pathname]);

    const isActive = (path: string) => pathname === path || (path === '/projects' && pathname.startsWith('/projects'));

    return (
        <ul ref={mobileNavRef} className='mobile-nav z-40 fixed bg-primary h-screen flex flex-col justify-center w-screen items-start px-8 space-y-4 uppercase tracking-wider text-sm lg:hidden inset-0 text-white'>
            <div className="absolute top-8 right-12 cursor-pointer">
                <IoClose onClick={handleToggle} size={25} /> 
            </div>
           
            {[
                { path: '/', text: 'Home' },
                { path: '/about', text: 'About' },
                { path: '/services/interior', text: 'Interior Services' },
                { path: '/services/exterior', text: 'Exterior Services' },
                { path: '/projects', text: 'Projects' },
                { path: '/cost-calculator', text: 'Cost Calculator' },
                { path: '/testimonials', text: 'Testimonials' },
                { path: '/contact', text: 'Contact' }
            ].map((item, index) => (
                <Link key={item.path} href={item.path} onClick={handleToggle}>
                    <li 
                        className={isActive(item.path) ? 'font-bold' : ''}
                        ref={(el) => { listItemRefs.current[index] = el }}
                        data-path={item.path}
                        style={{ opacity: 0, transform: 'translateY(20px)' }}
                    >
                        {item.text}
                    </li>
                </Link>
            ))}
            <div ref={buttonRef} className="pt-8 self-start" style={{ opacity: 0, transform: 'translateY(20px)' }}>
                <ButtonCta text='Book a consultation' type={1} />
            </div>
        </ul>
    );
};

export default React.memo(MobileNav);