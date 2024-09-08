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
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
        wiggle: {
            x: [0, 5, 0, 5, 0],
            transition: {
                duration: 1,
                times: [0, 0.25, 0.5, 0.75, 1],
                repeat: 1,
                repeatDelay: 0.5
            }
        }
    };

    return (
        <div 
            ref={containerRef} 
            className="relative h-full w-full overflow-hidden"
            onMouseEnter={handleMouseEnter}
        >
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
            <div 
                ref={handleRef}
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
                style={{ left: `${sliderPosition}%` }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
            >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                    <div className="flex items-center" style={{ gap: '0px' }}>
                        <FaCaretLeft className="text-gray-600" />
                        <FaCaretRight className="text-gray-600" />
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {isTooltipVisible && (
                    <motion.div
                        variants={tooltipVariants}
                        initial="hidden"
                        animate={["visible", "wiggle"]}
                        exit="hidden"
                        transition={{ 
                            duration: 0.3,
                            ease: "easeInOut"
                        }}
                        className="absolute text-white text-opacity-80 text-xs px-2 flex items-center whitespace-nowrap pointer-events-none z-20 -mt-2 mr-2 rounded-md"
                        style={{ 
                            right: `calc(100% - ${sliderPosition}% + 10px)`,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <span>Drag to see before</span>
                        <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}