import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactForm from "./ContactForm";

export default function Contact(){
    return (

      
        <div className="contact bg-light-bg/10 text-primary px-side-spacing py-section-spacing">
            <div className=" ">
            <div className="flex flex-col lg:flex-row lg:space-y-0 space-y-6 ">
                <div className="text-side lg:w-1/2 ">
                    <h2 className=" font-semibold tracking-tight text-lg">Contact Us</h2>
                    <h3 className="text-base font-medium mb-[24px] mt-[4px]">For some free advice or to book a consultation</h3>
                    <div className="contact-method mb-2 flex items-center space-x-2 text-accent-2">
                        <FaPhoneAlt />
                        <p className=" opacity-80 text-sm text-primary">+22 613 2936</p>
                    </div>
                    <div className="contact-method text-accent-2 flex items-center space-x-2 ">
                         <MdEmail size={20} /> 
                        <p className=" opacity-80 text-sm text-primary">littedogdecorating@gmail.com</p>
                    </div>
                </div>
                <div className="form-side lg:w-1/2 bg-accent-2/20 ">
                   
                    <ContactForm/>
                </div>
            </div>
              
            </div>
        </div>

        
    )
}