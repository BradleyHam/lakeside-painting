// components/LightboxGallery.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from './Lightbox';

interface LightboxGalleryProps {
  imageUrls: string[];
}

const LightboxGallery: React.FC<LightboxGalleryProps> = ({ imageUrls }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  return (
    <div>
      <div className="images-container flex flex-col space-y-[20px] py-[80px] pt-[40px] lg:grid grid-cols-3 lg:space-y-0 gap-6">
        {imageUrls.map((image, index) => (
          <div  key={index} className="p-2 bg-gray-200">
          <div
            className=" image-container w-full bg-gray-200 h-[300px] relative cursor-pointer"
           
            onClick={() => {
              setCurrentIndex(index);
              setIsOpen(true);
            }}
          >
            <Image src={image} alt={`Project Image ${index + 1}`} layout="fill" objectFit="cover" />
          </div>
          </div>
        ))}
      </div>

      <Lightbox
        imageUrls={imageUrls}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
};

export default LightboxGallery;
