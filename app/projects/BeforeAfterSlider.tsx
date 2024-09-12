'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeAlt: string;
    afterAlt: string;
    hero?: boolean;
    initialPosition?: number;
    showInitialTooltip?: boolean;
    onBeforeClick?: () => void;
    onAfterClick?: () => void;
}

export default function BeforeAfterSlider({ 
    beforeImage, 
    afterImage, 
    beforeAlt, 
    afterAlt,
    hero,
    initialPosition = 50,
    showInitialTooltip = false,
    onBeforeClick,
    onAfterClick
}: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(initialPosition);
    const [isTooltipVisible, setIsTooltipVisible] = useState(showInitialTooltip);
    const [canAnimate, setCanAnimate] = useState(true);
    const containerRef = useRef<HTMLDivElement>(null);
    const handleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setSliderPosition(initialPosition);
    }, [initialPosition]);

    useEffect(() => {
        if (showInitialTooltip) {
            showTooltipAnimation();
        }
    }, [showInitialTooltip]);

    const showTooltipAnimation = useCallback(() => {
        if (canAnimate) {
            setIsTooltipVisible(true);
            setCanAnimate(false);
            
            // Animate out after 2 seconds (adjust as needed)
            setTimeout(() => {
                setIsTooltipVisible(false);
            }, 2000);

            // Allow next animation after 5 seconds
            setTimeout(() => {
                setCanAnimate(true);
            }, 5000);
        }
    }, [canAnimate]);

    const handleMouseEnter = useCallback(() => {
        showTooltipAnimation();
    }, [showTooltipAnimation]);

    const handleMove = (clientX: number) => {
        if (containerRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const newPosition = ((clientX - containerRect.left) / containerRect.width) * 100;
            setSliderPosition(Math.min(Math.max(newPosition, 0), 100));
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        handleMove(e.clientX);

        const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        e.preventDefault();
        handleMove(e.touches[0].clientX);

        const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);
        const handleTouchEnd = () => {
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };

        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);
    };

    const handleBeforeClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onBeforeClick) onBeforeClick();
    };

    const handleAfterClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onAfterClick) onAfterClick();
    };

    const tagStyle = "absolute bottom-4 bg-white bg-opacity-90 text-primary text-sm capitalize font-semibold px-4 py-2";

    const tooltipVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 },
        wiggle: {
            x: [0, -3, 0, -3, 0],
            transition: {
                duration: 0.5,
                times: [0, 0.25, 0.5, 0.75, 1],
                repeat: 1,
                repeatDelay: 0.5
            }
        }
    };


    const bgColor = hero ? "bg-gray-200" : "bg-white";


    return (
        <div className={`relative ${bgColor} p-2 h-full w-full  overflow-hidden shadow-xl`}>
            <div 
                ref={containerRef} 
                className="relative h-full w-full overflow-hidden "
                onMouseEnter={handleMouseEnter}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
            >
                {/* Add shadow overlay */}
                <div className="absolute inset-0 pointer-events-none z-20 shadow-[inset_0_-60px_50px_-15px_rgba(0,0,0,0.3)] rounded-lg"></div>
                
                {/* Add light effect */}
                <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50 rounded-lg"></div>

                {/* Existing before image div */}
                <div className="absolute inset-0" onClick={handleBeforeClick}>
                    <Image 
                        src={beforeImage} 
                        alt={beforeAlt} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: "cover" }} 
                    />
                    <div className={`${tagStyle} left-4`}>Before</div>
                </div>

                {/* Existing after image div */}
                <div 
                    className="absolute inset-0" 
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    onClick={handleAfterClick}
                >
                    <Image 
                        src={afterImage} 
                        alt={afterAlt} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: "cover" }} 
                    />
                    <div className={`${tagStyle} right-4`}>After</div>
                </div>

                {/* Updated slider handle with tooltip */}
                <div 
                    ref={handleRef}
                    className={`${bgColor} absolute top-0 bottom-0 w-1 cursor-ew-resize z-50`}
                    style={{ left: `calc(${sliderPosition}% - 2px)` }}
                >
                    <div className={`${bgColor} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center shadow-md`}>
                        <FaCaretLeft className="text-primary" />
                        <FaCaretRight className="text-primary" />
                    </div>
                    <AnimatePresence>
                        {isTooltipVisible && (
                            <motion.div
                                className="absolute -mt-5 top-1/2 right-8 transform -translate-y-1/2 px-3 py-2 rounded-lg shadow-lg bg-white/80 backdrop-blur-sm border border-white/20"
                                initial="hidden"
                                animate={["visible", "wiggle"]}
                                exit="hidden"
                                variants={tooltipVariants}
                            >
                                <div className="flex items-center space-x-2">
                                    <span className="text-xs text-primary whitespace-nowrap">Drag To Compare</span>
                                </div>
                                <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-r-0 border-transparent border-l-white/80"></div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}