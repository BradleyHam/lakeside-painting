import React from 'react';
import Image from 'next/image'
import { MdArrowOutward } from "react-icons/md";

// create a short function that returns a component for each stat:   <p><span>25+</span>Experience Combined</p>

const Stat: React.FC<{ number: number }> = ({ number }) => {    
    return (
        <p className='text-primary'><span className='text-xl font-bold text-primary'>{number}+</span><span className='ml-2'>Experience Combined</span> </p>
    );

}

const ShortAbout: React.FC = () => {
    return (
        <section className="flex items-center  bg-light-bg">
            <div className="container pb-[80px] lg:mx-[80px] lg:py-[120px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-5">
                    <div className="bg-white p-3 shadow-lg">
                    <div className=" bg-gray-200 h-[400px] w-full relative shadow-xl">
                        <Image src='/images/team-photo.jpg' alt='' layout='fill' objectFit='cover'/> 
                    </div>
                    </div>
                   
                        <div className=" flex flex-col space-y-8 justify-center">
                            <div className='stats flex flex-col lg:flex-row lg:space-x-6 space-y-2 lg:space-y-0 items-start' >
                                <Stat number={25}/>
                                <Stat number={3}/>
                            </div>
                         <p className='text-primary/75'>

At Lakeside Painting, we specialize in transforming homes and commercial spaces across Queenstown with high-quality painting services. With over 25 years of combined experience, our team of skilled painters is dedicated to enhancing the beauty and value of your property. From stunning exterior finishes that withstand Queenstown's weather conditions to flawless interior detailing, we offer comprehensive solutions tailored to meet your unique needs.

<br /> 
<br />

As a locally-owned and operated business, we take pride in our reputation for reliability, professionalism, and meticulous attention to detail. Whether you're looking to refresh your home's interior or elevate your business &apos; s curb appeal, Lakeside Painting is your go-to partner for exceptional results that last. Trust us to deliver a seamless painting experience that exceeds your expectations, every time. </p>

                         <div className=''>
                            
                            </div>
                       
                         </div>
                         </div>
             
                </div>
       
        </section>
    );
};

export default ShortAbout;