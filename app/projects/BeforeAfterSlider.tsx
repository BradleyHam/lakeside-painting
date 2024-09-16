'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa6';

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

    // Tooltip Animation Control
    const showTooltipAnimation = useCallback(() => {
        if (canAnimate) {
            setIsTooltipVisible(true);
            setCanAnimate(false);

            // Hide tooltip after 2 seconds
            setTimeout(() => {
                setIsTooltipVisible(false);
            }, 2000);

            // Re-enable animation after 5 seconds
            setTimeout(() => {
                setCanAnimate(true);
            }, 5000);
        }
    }, [canAnimate]);

    // Show tooltip on initial render if required
    useEffect(() => {
        if (showInitialTooltip) {
            showTooltipAnimation();
        }
    }, [showInitialTooltip, showTooltipAnimation]);

    // Intersection Observer to trigger tooltip when in view
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                showTooltipAnimation();
            }
        }, { threshold: 0.1 });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [showTooltipAnimation]);

    // Function to handle slider movement
    const handleMove = (clientX: number) => {
        if (containerRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const newPosition = ((clientX - containerRect.left) / containerRect.width) * 100;
            setSliderPosition(Math.min(Math.max(newPosition, 0), 100));
            console.log(`Slider Position Updated: ${newPosition}%`); // Debugging
        }
    };

    // Mouse Event Handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Mouse Down on Handle'); // Debugging

        handleMove(e.clientX);

        const handleMouseMove = (e: MouseEvent) => {
            handleMove(e.clientX);
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
            console.log('Mouse Up'); // Debugging
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    // Touch Event Handlers
    const handleTouchStart = (e: React.TouchEvent) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Touch Start on Handle'); // Debugging

        handleMove(e.touches[0].clientX);

        const handleTouchMove = (e: TouchEvent) => {
            handleMove(e.touches[0].clientX);
        };

        const handleTouchEnd = () => {
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
            console.log('Touch End'); // Debugging
        };

        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', handleTouchEnd);
    };

    // Click Handlers for Before and After Images
    const handleBeforeClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onBeforeClick) onBeforeClick();
        console.log('Before Image Clicked'); // Debugging
    };

    const handleAfterClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onAfterClick) onAfterClick();
        console.log('After Image Clicked'); // Debugging
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
        <div className={`relative ${bgColor} p-2 h-full w-full overflow-hidden shadow-xl`} ref={containerRef}>
            <div className="relative h-full w-full overflow-hidden">
                {/* Shadow Overlay */}
                <div className="absolute inset-0 pointer-events-none z-20 shadow-[inset_0_-60px_50px_-15px_rgba(0,0,0,0.3)] rounded-lg"></div>
                
                {/* Light Gradient Overlay */}
                <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50 rounded-lg"></div>

                {/* Before Image */}
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

                {/* After Image with Clip Path */}
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

                {/* Dividing Line */}
                <div
                    className={`${bgColor} absolute top-0 bottom-0`}
                    style={{
                        left: `calc(${sliderPosition}% - 4px)`, // Centers the line
                        width: '8px', // Matches p-2 (8px) padding
                        transform: 'translateX(-50%)' // Center the line
                    }}
                />

                {/* Slider Handle */}
                <div 
                    className={`absolute top-0 bottom-0 w-8 cursor-ew-resize z-30`}
                    style={{ left: `calc(${sliderPosition}% - 4px)`, transform: 'translateX(-50%)' }} // Adjusted to align with dividing line
                >
                    <div 
                        className={`${bgColor} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center shadow-md`}
                        onMouseDown={handleMouseDown}
                        onTouchStart={handleTouchStart}
                        onClick={(e) => e.stopPropagation()} // Prevent clicks from triggering parent events
                        ref={handleRef}
                    >
                        <FaCaretLeft className="text-primary" />
                        <FaCaretRight className="text-primary" />
                    </div>

                    {/* Tooltip */}
                    <AnimatePresence>
                        {isTooltipVisible && (
                            <motion.div
                                className="absolute -mt-5 top-1/2 right-10 transform -translate-y-1/2 px-3 py-2 rounded-lg shadow-lg bg-white/80 backdrop-blur-sm border border-white/20"
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