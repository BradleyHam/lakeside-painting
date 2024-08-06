import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactForm from '@/app/HomeComponents/ContactForm';
import { IoClose } from 'react-icons/io5';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
            <div className="bg-white rounded-lg overflow-hidden w-screen lg:w-[80%] mx-4 lg:mx-0 max-w-lg lg:max-w-none relative  z-[80]">
                <div className="flex flex-col lg:flex-row lg:space-y-0 bg-white border-2 rounded-lg">
                    <div className="text-side lg:w-1/2 py-[40px] lg:pl-[40px] pl-[20px]">
                        <h3 className="mb-4 font-bold tracking-tighter text-[#0F122F] hidden lg:block">
                            Contact us for a <span className="">free consultation</span>
                        </h3>
                        <div className="contact-method mb-2 flex items-center space-x-2">
                            <FaPhoneAlt color='#0F122F'/>
                            <p className="opacity-70 tex    t-lg text-[#0F122F]">+22 613 2936</p>
                        </div>
                        <div className="contact-method flex items-center space-x-2">
                            <MdEmail size={20} color='#0F122F'/>
                            <p className="opacity-70 text-lg text-[#0F122F]">littedogdecorating@gmail.com</p>
                        </div>
                    </div>
                    <div className="form-side lg:w-1/2 py-[40px] bg-gray-50 lg:px-[40px] px-[20px]">
                        <ContactForm />
                    </div>
                </div>
            <button onClick={onClose} className="absolute top-4 bg-brand-primary right-4 text-white p-1 rounded-full"><IoClose size={25}/></button>
            </div>
        </div>
    );
};

export default Modal;
