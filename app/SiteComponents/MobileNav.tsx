'use client'
import React, { useEffect, useRef } from 'react';
import ButtonCta from './ButtonCta';
import Link from 'next/link';
import gsap from 'gsap';

interface MobileNavProps {
    open: boolean;
    onClose: () => void;
    handleToggle: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ open, onClose, handleToggle }) => {
    const mobileNavRef = useRef<HTMLUListElement>(null);
    const listItemRefs = useRef<(HTMLLIElement | null)[]>([]);
    const buttonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ onComplete: onClose });

        if (open) {
            tl.fromTo(mobileNavRef.current, { y: -650 }, { duration: 0.5, y: 0, ease: "power1.out" })
              .to(listItemRefs.current, { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power1.out" }, "-=0.3")
              .to(buttonRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" }, "-=0.3");
        } else if (!open) {
            tl.to(buttonRef.current, { opacity: 0, y: 20, duration: 0.5, ease: "power1.out" })
              .to(listItemRefs.current, { opacity: 0, y: 20, duration: 0.5, stagger: -0.1, ease: "power1.out" }, "-=0.3")
              .fromTo(mobileNavRef.current, { y: 0 }, { duration: 0.5, y: -650, ease: "power1.out" }, '-=.3');
        }
    }, [open, onClose]);

    return (
        <ul ref={mobileNavRef} className='mobile-nav fixed bg-brand-blue h-screen flex flex-col justify-center w-screen items-center space-y-4 uppercase tracking-wider text-sm lg:hidden inset-0'>
            <Link href="/" onClick={handleToggle}>
                <li ref={(el) => { listItemRefs.current[0] = el }} style={{ opacity: 0, transform: 'translateY(20px)' }}>Home</li>
            </Link>
            <Link href="/about" onClick={handleToggle}>
                <li ref={(el) => { listItemRefs.current[1] = el }} style={{ opacity: 0, transform: 'translateY(20px)' }}>About</li>
            </Link>
            <Link href="/projects" onClick={handleToggle}>
                <li ref={(el) => { listItemRefs.current[2] = el }} style={{ opacity: 0, transform: 'translateY(20px)' }}>Projects</li>
            </Link>
            <div ref={buttonRef} className="pt-8" style={{ opacity: 0, transform: 'translateY(20px)' }}>
                <ButtonCta text='Book a consultation' />
            </div>
        </ul>
    );
};

export default React.memo(MobileNav);
