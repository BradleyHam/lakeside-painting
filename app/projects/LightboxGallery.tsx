'use client'
import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxGalleryProps {
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
}

const LightboxGallery: React.FC<LightboxGalleryProps> = ({ images, currentIndex: initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  }, [images.length]);

  const handleBackgroundClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  if (images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
      onClick={handleBackgroundClick}
    >
      <div className="relative w-full h-full max-w-4xl max-h-[90vh] m-auto">
        <button 
          onClick={onClose} 
          className="absolute z-50 top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition duration-300"
        >
          <IoClose size={24} />
        </button>
        <div className="relative w-full h-full" onClick={(e) => e.stopPropagation()}>
          {currentImage && (
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
            />
          )}
        </div>
        <button 
          onClick={handlePrevious} 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-3 rounded-full hover:bg-black/70 transition duration-300 group"
        >
          <FaChevronLeft size={24} className="group-hover:-translate-x-1 transition duration-300" />
        </button>
        <button 
          onClick={handleNext} 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-3 rounded-full hover:bg-black/70 transition duration-300 group"
        >
          <FaChevronRight size={24} className="group-hover:translate-x-1 transition duration-300" />
        </button>
      </div>
    </div>
  );
};

export default LightboxGallery;