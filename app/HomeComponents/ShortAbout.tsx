import React from 'react';
import Image from 'next/image'
import { MdArrowOutward } from "react-icons/md";

// create a short function that returns a component for each stat:   <p><span>25+</span>Experience Combined</p>

const Stat: React.FC<{ number: number }> = ({ number }) => {    
    return (
        <p className='text-primary'><span className='text-xl font-bold'>{number}+</span><span className='ml-2'>Experience Combined</span> </p>
    );

}

const ShortAbout: React.FC = () => {
    return (
        <section className="flex items-center text-primary bg-gray-100">
            <div className="container pb-[80px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5">
                    <div className=" bg-gray-200 h-[300px] w-full relative -translate-y-2 shadow-xl">
                        <Image src='/images/team-photo.jpg' alt='' layout='fill' objectFit='cover'/> 
                    </div>
                   
                        <div className=" flex flex-col space-y-8 justify-center">
                            <div className='stats flex flex-col space-y-2 items-start' >
                                <Stat number={25}/>
                                <Stat number={3}/>
                            </div>
                         <p className='text-primary/75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore officia omnis fugit ipsa, ex dolorum facere autem. In, modi perspiciatis?

                         <br /><br />
                         
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore officia omnis fugit ipsa, ex dolorum facere autem. In, modi perspiciatis

                         <br /><br />

                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore officia omnis fugit ipsa, ex dolorum facere autem. In, modi perspiciatis?
                         </p>
                         <div className=''>
                            
                            </div>
                           
                         </div>
                         <button className='text-secondary font-bold flex space-x-1 items-center'> <span>Read About Us</span> <MdArrowOutward size={22} /></button>
                        </div>
             
                </div>
       
        </section>
    );
};

export default ShortAbout;