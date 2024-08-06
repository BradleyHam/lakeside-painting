'use client'
import HeroTestimonial from "./HeroTestimonial";
import { useEffect, useRef } from "react";
import Image from "next/image";
import HeroTestimonials from "./HeroTestimonials";
import ButtonCta from "../SiteComponents/ButtonCta";
import gsap from 'gsap';

export default function Hero() {
    const headingRef = useRef(null);
   
    return (
    <div className="">
        <div className="hero-container lg:mx-[80px] py-[80px] lg:mt-[40px]">
            <div className="text-white px-5 flex flex-col items-start lg:items-center">
                
                <div className="heading-row flex flex-col mx-auto mt-4 text-center mb-[40px]">
                    <h1 ref={headingRef} className="text-3xl text-left lg:text-center font-bold  tracking-tight leading-normal text-white">
                        Professional Painting Services in Queenstown
                    </h1>
                    <h2 className="text-2xl text-left opacity-80 lg:text-center text-white font-medium capitalize leading-normal mt-3">
                        Increase the Value to Your Property
                    </h2>
                </div>

                <ButtonCta text='book a consultation' />
                <HeroTestimonials />
            </div>
            </div>
        </div>
    );
}
//-