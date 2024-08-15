import React, { useRef, useEffect, useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactForm from '@/app/HomeComponents/ContactForm';
import { IoClose } from 'react-icons/io5';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            setIsAnimating(true);
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            setIsAnimating(false);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen && !isAnimating) return null;

    return (
        <div 
            className={`fixed inset-0 flex items-center justify-center bg-black z-50 transition-opacity duration-300 ease-in-out ${
                isOpen ? 'bg-opacity-50' : 'bg-opacity-0 pointer-events-none'
            }`}
        >
            <div 
                ref={modalRef} 
                className={`modal-content bg-white rounded-lg overflow-hidden w-screen lg:w-[80%] mx-4 lg:mx-0 max-w-lg lg:max-w-none relative z-[80] transition-all duration-300 ease-in-out ${
                    isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
            >
                <div className="flex flex-col lg:flex-row lg:space-y-0 bg-white border-2 rounded-lg">
                    <div className="text-side lg:w-1/2 py-[40px] lg:pl-[40px] pl-[20px]">
                        <h3 className="mb-4 text-base lg:text-xl font-bold tracking-tight text-[#0F122F]  lg:block">
                            Contact us for a <span className="">free consultation</span>
                        </h3>
                        <div className="contact-method mb-2 flex items-center space-x-2 text-primary">
                            <FaPhoneAlt color=''/>
                            <p className="opacity-70 text-[#0F122F]">+22 613 2936</p>
                        </div>
                        <div className="contact-method flex items-center space-x-2 text-primary">
                            <MdEmail size={20} color=''/>
                            <p className="opacity-70 text-[#0F122F]">littedogdecorating@gmail.com</p>
                        </div>
                    </div>
                    <div className="form-side lg:w-1/2 py-[40px] bg-light-bg lg:px-[40px] px-[20px]">
                        <ContactForm />
                    </div>
                </div>
                <button onClick={onClose} className="absolute top-2 bg-primary text-white right-2 p-1 rounded-full">
                    <IoClose size={25}/>
                </button>
            </div>
        </div>
    );
};

export default Modal;