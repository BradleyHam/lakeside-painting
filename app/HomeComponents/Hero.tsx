'use client'
import { useState, useRef } from "react";
import ButtonCta from "../SiteComponents/ButtonCta";
import HeroTestimonials from "./HeroTestimonials";
import BeforeAfterSlider from "../projects/BeforeAfterSlider";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sliderData = [
    {
        beforeImage: '/images/mock-exterior-1/mock-exterior-image-1--before.jpg',
        afterImage: '/images/mock-exterior-1/mock-exterior-image-1--after.jpg',
        beforeAlt: 'Before renovation 3',
        afterAlt: 'After renovation 3'
    },
    {
        beforeImage: '/images/arthurs-point/ap-wallpaper-before.jpg',
        afterImage: '/images/arthurs-point/ap-wallpaper-after.jpeg',
        beforeAlt: 'Before renovation 1',
        afterAlt: 'After renovation 1'
    },
    {
        beforeImage: '/images/arthurs-point/ap-featureWall-before.jpg',
        afterImage: '/images/arthurs-point/ap-featureWall-after.jpeg',
        beforeAlt: 'Before renovation 2',
        afterAlt: 'After renovation 2'
    }
];

export default function Hero() {
    const headingRef = useRef(null);
    const [currentSlider, setCurrentSlider] = useState(0);

    const handlePrev = () => setCurrentSlider((prev) => (prev > 0 ? prev - 1 : prev));
    const handleNext = () => setCurrentSlider((prev) => (prev < sliderData.length - 1 ? prev + 1 : prev));

    return (
        <div className="">
            <div className="hero-container flex flex-col lg:flex-row items-center px-side-spacing py-section-spacing lg:mt-[0] relative">
                <div className="text-white flex flex-col items-start  w-full lg:w-1/2">
                    <div className="flex flex-col  mb-[32px]">
                        <h1 ref={headingRef} className="font-bold leading-tight text-white text-xl">
                            Professional Painting in Queenstown
                        </h1>
                        <h2 className="opacity-80 text-white font-medium capitalize leading-normal mt-[16px] text-lg">
                            Increase the Value of Your Property
                        </h2>
                    </div>
                    <ButtonCta text='book a consultation' type={1}/>
                    <HeroTestimonials />
                </div>
                <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex flex-col lg:flex-row items-end">
                    <div className="w-full lg:w-auto  order-2 lg:order-1 mt-4 lg:mt-0">
                        <div className="flex items-center justify-between lg:flex-col lg:items-end">
                            <div className="text-sm font-medium text-white/80 px-3 py-1 rounded-full mb-2">
                                {currentSlider + 1} / {sliderData.length}
                            </div>
                            <div className="flex items-center ">
                                <button 
                                    onClick={handlePrev}
                                    className={`p-3  bg-white shadow-md transition-all ${currentSlider === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 active:bg-gray-200'}`}
                                    disabled={currentSlider === 0}
                                >
                                    <ChevronLeft className="w-6 h-6 lg:w-4 lg:h-4 text-gray-800" />
                                </button>
                                <button 
                                    onClick={handleNext}
                                    className={`p-3   bg-white shadow-md transition-all ${currentSlider === sliderData.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 active:bg-gray-200'}`}
                                    disabled={currentSlider === sliderData.length - 1}
                                >
                                    <ChevronRight className="w-6 h-6 lg:w-4 lg:h-4 text-gray-800" />
                                </button>
                            </div>
                         
                        </div>
                    </div>
                    <div className="w-full order-1 lg:order-2">
                        <div className="bg-white shadow-xl p-2 h-[300px] w-full">
                            <BeforeAfterSlider  
                                beforeImage={sliderData[currentSlider].beforeImage}
                                afterImage={sliderData[currentSlider].afterImage}
                                beforeAlt={sliderData[currentSlider].beforeAlt}
                                afterAlt={sliderData[currentSlider].afterAlt}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}