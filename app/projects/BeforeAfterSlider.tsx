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
  onBeforeClick: () => void;
  onAfterClick: () => void;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  onBeforeClick,
  onAfterClick
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const lastTooltipTimestamp = useRef(0);

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

  const handleMouseEnter = useCallback(() => {
    const currentTime = Date.now();
    if (currentTime - lastTooltipTimestamp.current > 5000) {
      setShowTooltip(true);
      lastTooltipTimestamp.current = currentTime;
      // Start the animation cycle
      setTimeout(() => setShowTooltip(false), 4000); // 4 seconds for 2 animations
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mouseenter', handleMouseEnter);

      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
      };
    }
  }, [handleMouseEnter]);

  useEffect(() => {
    if (showTooltip) {
      const timer = setTimeout(() => setShowTooltip(false), 4000); // 4 seconds for 2 animations
      return () => clearTimeout(timer);
    }
  }, [showTooltip]);

  const tagStyle = "absolute bottom-4 bg-white bg-opacity-90 text-primary text-sm capitalize font-semibold px-4 py-2";

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0" onClick={onBeforeClick}>
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
        onClick={onAfterClick}
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
      <CustomTooltip show={showTooltip} position={sliderPosition} />
    </div>
  );
};

const CustomTooltip: React.FC<{ show: boolean; position: number }> = ({ show, position }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ duration: 0.5, repeat: 1, repeatType: "reverse" }}
          className="absolute text-white text-opacity-80 text-xs px-2 flex items-center whitespace-nowrap pointer-events-none z-20 -mt-1"
          style={{ 
            left: `calc(${position}% + 16px)`,
            top: '50%',
            transform: 'translateY(-50%)'
          }}
        >
          <svg className="w-4 h-4 mr-1 transform rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Click and drag</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BeforeAfterSlider;