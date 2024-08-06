import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactForm from "./ContactForm";

export default function Contact(){
    return (
        <div className="contact py-[80px] px-[5px] bg-white text-primary">
            <div className="container lg:mx-auto ">
            <div className="flex flex-col lg:flex-row   lg:space-y-0 bg-white  lg:w-[80%]   lg:mx-auto  border-2 rounded-lg border">
                <div className="text-side lg:w-1/2 lg: py-[40px] lg:pl-[40px] pl-[20px]">
                    <h3 className=" mb-4 font-bold tracking-tighter ">Contact us for a  <span className="  "> free consultation</span></h3>
                    <div className="contact-method mb-2 flex items-center space-x-2">
                        <FaPhoneAlt color='#373F51'/>
                        <p className=" opacity-70 text-lg ">+22 613 2936</p>
                    </div>
                    <div className="contact-method  flex items-center space-x-2 ">
                         <MdEmail size={20} color='#373F51'/> 
                        <p className=" opacity-70 text-lg ">littedogdecorating@gmail.com</p>
                    </div>
                </div>
                <div className="form-side lg:w-1/2 py-[40px] bg-accent-2/20 lg:px-[40px] px-[20px] ">
                    <ContactForm/>
                </div>
            </div>
                <div className='map-view h-[350px] mt-[80px]'>
                    <iframe
                    width="100%"
                    height="100%"
                    style={{border:0}}

                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90284.49043269485!2d168.61739859040918!3d-44.99669492981708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9d51df1d7a8de5f%3A0x500ef868479a600!2sQueenstown!5e0!3m2!1sen!2snz!4v1711249838039!5m2!1sen!2snz">
                    </iframe>
                </div>
            </div>
        </div>
    )
}