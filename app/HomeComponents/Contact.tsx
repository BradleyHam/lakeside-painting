import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactForm from "./ContactForm";

export default function Contact(){
    return (

      
        <div className="contact py-[80px] bg-light-bg text-primary">
            <div className="container lg:mx-auto ">
            <div className="flex flex-col lg:flex-row lg:space-y-0 lg:w-[80%] lg:mx-auto">
                <div className="text-side lg:w-1/2 lg:py-[40px] lg:pl-[40px] pl-[20px]">
                    <h3 className=" mb-4 font-bold tracking-tighter text-xl lg:text-2xl">Contact us for a  <span className="  "> free consultation</span></h3>
                    <div className="contact-method mb-2 flex items-center space-x-2 text-accent-2">
                        <FaPhoneAlt />
                        <p className=" opacity-80 text-lg text-primary">+22 613 2936</p>
                    </div>
                    <div className="contact-method text-accent-2 flex items-center space-x-2 ">
                         <MdEmail size={20} /> 
                        <p className=" opacity-80 text-lg text-primary">littedogdecorating@gmail.com</p>
                    </div>
                </div>
                <div className="form-side lg:w-1/2 py-[40px] bg-accent-2/20 lg:px-[40px] px-[20px] ">
                    <ContactForm/>
                </div>
            </div>
              
            </div>
        </div>

        
    )
}