'use client'
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServiceText from './ServiceText';

gsap.registerPlugin(ScrollTrigger);

const ServiceData = {
    exteriorPainting: {
        heading: 'Exterior Painting',
        bulletPoints: [
            'Weather-resistant coatings',
            'Deck and fence staining',
            'Roof painting and restoration',
            'Cedar siding protection',
            'Pressure washing'

        ]
    },
    interiorPainting: {
        heading: 'Interior Painting',
        bulletPoints: [
            'Feature wall creation',
            'Ceiling treatments',
            'Wallpaper installation/removal',
            'Spray painting',
            'French Wash',
        ]
    }
}

export default function Services() {
    const exteriorImageRef = useRef(null);
    const interiorImageRef = useRef(null);

    useEffect(() => {
        const images = [exteriorImageRef.current, interiorImageRef.current];
        images.forEach(image => {
            gsap.fromTo(
                image,
                { scale: 1 },
                {
                    scale: 1.2,
                    scrollTrigger: {
                        trigger: image,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 3,
                    }
                }
            );
        });
    }, []);

    return (
        <div className='bg-light-bg'>
            <div className='services container py-28 space-y-12'>
                <div className='px-5 service flex flex-col lg:flex-row'>
                    <div className='lg:w-2/3 overflow-hidden'>
                        <div ref={exteriorImageRef} className='relative h-[300px]'>
                            <Image src='/images/ldd-exterior.jpg' layout='fill' objectFit='cover' alt='Exterior Painting' />
                        </div>
                    </div>
                    <ServiceText heading={ServiceData.exteriorPainting.heading} bulletPoints={ServiceData.exteriorPainting.bulletPoints} />
                </div>
                <div className='px-5 service flex flex-col lg:flex-row'>
                    <div className='lg:w-2/3 overflow-hidden lg:order-1'>
                        <div ref={interiorImageRef} className='relative h-[300px]'>
                            <Image src='/images/ldd-interior.jpg' layout='fill' objectFit='cover' alt='Interior Painting' />
                        </div>
                    </div>
                    <ServiceText heading={ServiceData.interiorPainting.heading} bulletPoints={ServiceData.interiorPainting.bulletPoints} />
                </div>
            </div>
        </div>
    );
}
