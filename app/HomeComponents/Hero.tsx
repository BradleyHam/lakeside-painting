'use client'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ButtonCta from "../SiteComponents/ButtonCta";
import HeroTestimonials from "./HeroTestimonials";
import BeforeAfterSlider from "../projects/BeforeAfterSlider";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sliderData = [
    {
        beforeImage: '/images/BeforeAfter/BerforeAfter-1-before.jpg',
        afterImage: '/images/BeforeAfter/BeforeAfter-1-after.jpg',
        beforeAlt: 'Before renovation 3',
        afterAlt: 'After renovation 3'
    },
    {
        beforeImage: '/images/BeforeAfter/BeforeAfter-2-before.jpg',
        afterImage: '/images/BeforeAfter/BeforeAfter-2-after.jpg',
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
    const [currentSlider, setCurrentSlider] = useState(0);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTooltip(true);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    const handlePrev = () => {
        setCurrentSlider((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        setCurrentSlider((prev) => (prev < sliderData.length - 1 ? prev + 1 : prev));
    };

    const fadeVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-tr from-primary to-primary/90 pt-section-spacing px-side-spacing pb-[80px] ">
            
            {/* skwewd element */}
            <div className="absolute -bottom-[24px] left-0 right-0 z-10 bg-white h-[50px] -skew-y-1   "></div>
            {/* Brush stroke background */}
            <div className="absolute left-12 lg:left-[300px] h-[600px] w-[1200px] -right-12  top-12  lg:-bottom-26 lg:w-[1400px] lg:h-[600px]">
            <Image className="" src="/images/decorative/brushStroke.svg" alt="Decorative brush stroke" layout="fill" objectFit="contain" />
            </div>
           <div className="absolute inset-20 opacity-20">
                {/* <svg className="w-full h-full -mt-20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient id="centerFade" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
                            <stop offset="0%" stopColor="white" stopOpacity="1"/>
                            <stop offset="70%" stopColor="white" stopOpacity="1"/>
                            <stop offset="100%" stopColor="white" stopOpacity="0"/>
                        </radialGradient>
                        <mask id="fadeMask">
                            <rect width="100" height="100" fill="url(#centerFade)" />
                        </mask>
                    </defs>
                    <g mask="url(#fadeMask)">
                        <line x1="0" y1="0" x2="100" y2="100" stroke="white" strokeWidth="0.3" />
                        <line x1="100" y1="0" x2="0" y2="100" stroke="white" strokeWidth="0.3" />
                    </g>
                </svg> */}
            </div>
            <div className="relative z-20">
                <div className="flex flex-col lg:flex-row items-start justify-between">
                    <motion.div 
                        className="text-white flex flex-col items-start w-full lg:w-[45%] lg:pr-6 mb-8 lg:mb-0"
                        initial="hidden"
                        animate="visible"
                        variants={fadeVariants}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h1 className="font-poppins tracking-tight text-lg xl:text-xl font-bold text-white leading-normal mb-4">
                            Transform Your Space with <br></br> <span className="text-accent">Professional Painting</span>
                        </h1>
                        <h2 className="font-poppins text-base lg:text-base text-white/80  mb-8">
                            Elevate Your Queenstown Property&apos;s Value and Appeal
                        </h2>
                        <ButtonCta text='Book a Free Consultation' type={1} className="" />
                        <div className="mt-0">
                            <HeroTestimonials />
                        </div>
                    </motion.div>
                    <motion.div 
                        className="w-full lg:w-[55%]"
                        initial="hidden"
                        animate="visible"
                        variants={fadeVariants}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="relative flex flex-col">
                            {/* Slider container */}
                            <div className="relative">
                                <div className="rounded-lg overflow-hidden aspect-[4/3] w-full max-w-[650px] max-h-[350px]">
                                    <AnimatePresence mode="wait" initial={false}>
                                        <motion.div
                                            key={currentSlider}
                                            variants={fadeVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            transition={{ duration: 0.5 }}
                                            className="absolute inset-0"
                                        >
                                            <BeforeAfterSlider  
                                                beforeImage={sliderData[currentSlider].beforeImage}
                                                afterImage={sliderData[currentSlider].afterImage}
                                                beforeAlt={sliderData[currentSlider].beforeAlt}
                                                afterAlt={sliderData[currentSlider].afterAlt}
                                                initialPosition={50}
                                                hero={true}
                                                showInitialTooltip={showTooltip}
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Desktop controls (left side) */}
                                <div className="absolute -left-28 bottom-0 hidden lg:flex flex-col items-end space-y-4">
                                    <div className="flex flex-col items-center space-y-2">
                                        {sliderData.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentSlider(index)}
                                                className={`w-3 h-3  transition-all rounded-full ${
                                                    index === currentSlider
                                                        ? 'bg-white scale-125'
                                                        : 'bg-white/50 hover:bg-white/70'
                                                }`}
                                                aria-label={`Go to slide ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                    <div className="flex space-x-2">
                                        <button 
                                            onClick={handlePrev}
                                            className="p-2 bg-white rounded-full shadow-md transition-all hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                            disabled={currentSlider === 0}
                                        >
                                            <ChevronLeft className="w-6 h-6 text-primary" />
                                        </button>
                                        <button 
                                            onClick={handleNext}
                                            className="p-2 bg-white rounded-full shadow-md transition-all hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                            disabled={currentSlider === sliderData.length - 1}
                                        >
                                            <ChevronRight className="w-6 h-6 text-primary" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile controls (below slider) */}
                            <div className="flex flex-row items-center justify-between mt-8 lg:hidden">
                                <button 
                                    onClick={handlePrev}
                                    className="p-2 bg-white rounded-full shadow-md transition-all hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={currentSlider === 0}
                                >
                                    <ChevronLeft className="w-6 h-6 text-primary" />
                                </button>
                                <div className="flex items-center space-x-2">
                                    {sliderData.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlider(index)}
                                            className={`w-3 h-3 rounded-full transition-all ${
                                                index === currentSlider
                                                    ? 'bg-white scale-125'
                                                    : 'bg-white/50 hover:bg-white/70'
                                            }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                                <button 
                                    onClick={handleNext}
                                    className="p-2 bg-white rounded-full shadow-md transition-all hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={currentSlider === sliderData.length - 1}
                                >
                                    <ChevronRight className="w-6 h-6 text-primary" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}