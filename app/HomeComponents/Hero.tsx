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
        <div className="hero-container lg:mx-[80px] py-[100px] lg:mt-[20px]">
            <div className="text-white px-5 flex flex-col items-start lg:ml-6">
                
                <div className="flex flex-col mt-4  mb-[40px] ">
                    <h1 ref={headingRef} className="text-2xl text-left  font-bold  tracking-tight leading-normal text-white">
                        Professional Painting in Queenstown
                    </h1>
                    <h2 className="text-xl text-left opacity-80  text-white font-medium capitalize leading-normal mt-3">
                        Increase the Value to Your Property
                    </h2>
                </div>

                <ButtonCta text='book a consultation' type={1}/>
                <HeroTestimonials />
            </div>
            </div>
        </div>
    );
}
//-