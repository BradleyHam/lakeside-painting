import React from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { IoCloseSharp } from 'react-icons/io5';
import Image from 'next/image';

interface LightboxProps {
  imageUrls: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ imageUrls, currentIndex, isOpen, onClose, onNext, onPrev }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85"
      onClick={onClose}
    >
      <button className="absolute top-4 right-4 text-white" onClick={onClose}>
        <IoCloseSharp size={26} />
      </button>

      <div
        className="lightbox-image-container w-full h-[350px] lg:h-[500px] lg:max-w-[50%] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute z-50 top-[50%] -translate-y-[50%] left-4 text-white bg-gray-900 opacity-80 p-2 opacity-70 hover:opacity-90 transition ease-in-out duration-200"
          onClick={onPrev}
        >
          <FaArrowLeftLong size={22} />
        </button>
        <Image src={imageUrls[currentIndex]} alt="" layout="fill" objectFit="cover" />
        <button
          className="absolute top-[50%] -translate-y-[50%] right-4 text-white bg-gray-900 opacity-80 p-2 opacity-70 hover:opacity-90 transition ease-in-out duration-200"
          onClick={onNext}
        >
          <FaArrowRightLong size={22} />
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
