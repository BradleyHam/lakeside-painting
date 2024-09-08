'use client'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    const [currentSlider, setCurrentSlider] = useState(0);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTooltip(true);
        }, 300); // Reduced to 1 second delay

        return () => clearTimeout(timer);
    }, []);

    const handlePrev = () => {
        setCurrentSlider((prev) => (prev > 0 ? prev - 1 : prev));
    };

    const handleNext = () => {
        setCurrentSlider((prev) => (prev < sliderData.length - 1 ? prev + 1 : prev));
    };

    const fadeVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <div className="hero-container relative w-full">
            <div className="flex flex-col lg:flex-row items-center px-side-spacing py-[60px]">
                <div className="text-white flex flex-col items-start w-full lg:w-1/2">
                    <div className="flex flex-col mb-[32px]">
                        <h1 className="font-bold  text-white text-lg">
                            Professional Painting in Queenstown
                        </h1>
                        <h2 className="opacity-80 text-white font-medium capitalize leading-normal mt-[16px] text-base">
                            Increase the Value of Your Property
                        </h2>
                    </div>
                    <ButtonCta text='book a consultation' type={1}/>
                    <HeroTestimonials />
                </div>
                <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                    <div className="relative">
                        <div className="bg-white shadow-xl p-2 h-[350px] lg:h-[350px] w-full">
                            <div className="w-full h-full border-2 border-white relative overflow-hidden">
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
                                            initialPosition={100} // Start with "after" image fully visible
                                            showInitialTooltip={true} // Enable initial tooltip animation
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                        {/* Desktop controls */}
                        <div className="absolute bottom-0 left-0 transform -translate-x-full lg:-translate-x-[100%] hidden lg:flex flex-col items-end">
                            <div className="text-sm font-medium text-white/80 mb-4 mr-4">
                                {currentSlider + 1} / {sliderData.length}
                            </div>
                            <div className="flex items-center">
                                <button 
                                    onClick={handlePrev}
                                    className={`p-4 bg-white shadow-md transition-all ${currentSlider === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 active:bg-gray-200'}`}
                                    disabled={currentSlider === 0}
                                >
                                    <ChevronLeft className="w-4 h-4 text-gray-800" />
                                </button>
                                <button 
                                    onClick={handleNext}
                                    className={`p-4 bg-white shadow-md transition-all ${currentSlider === sliderData.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 active:bg-gray-200'}`}
                                    disabled={currentSlider === sliderData.length - 1}
                                >
                                    <ChevronRight className="w-4 h-4 text-gray-800" />
                                </button>
                            </div>
                        </div>
                        {/* Mobile controls */}
                        <div className="mt-4 flex items-center justify-between lg:hidden">
                            <div className="text-sm font-medium text-white/80">
                                {currentSlider + 1} / {sliderData.length}
                            </div>
                            <div className="flex items-center space-x-2">
                                <button 
                                    onClick={handlePrev}
                                    className={`p-3 bg-white shadow-md transition-all ${currentSlider === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 active:bg-gray-200'}`}
                                    disabled={currentSlider === 0}
                                >
                                    <ChevronLeft className="w-5 h-5 text-gray-800" />
                                </button>
                                <button 
                                    onClick={handleNext}
                                    className={`p-3 bg-white shadow-md  transition-all ${currentSlider === sliderData.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 active:bg-gray-200'}`}
                                    disabled={currentSlider === sliderData.length - 1}
                                >
                                    <ChevronRight className="w-5 h-5 text-gray-800" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}