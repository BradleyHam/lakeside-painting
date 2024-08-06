import ProcessStep from "./ProcessStep";
import Image from 'next/image';

export default function ProcessSection() {
    return (
        <div className="flex flex-col lg:items-center py-24 px-side-spacing bg-light-bg">
            <div className="container mx-auto items-start flex flex-col lg:text-center ">
                <div className="flex flex-col space-y-12 lg:flex-row  items-start lg:items-center">    
                    <ProcessStep number={1} heading='contact' description='Reach out to us to discuss your needs and get initial insights.'/>
                    <div className="-translate-y-8 px-8 hidden lg:block">
                        <Image src={'/images/arrow-doodle.svg'} alt="arrow-doodle" width={150} height={49}/> 
                    </div>
                    <ProcessStep number={2} heading='schedule' description='Arrange a convenient time for us to visit and assess your space.'/>
                    <div className="-translate-y-8 px-8 hidden lg:block">
                        <Image src={'/images/arrow-doodle.svg'} alt="arrow-doodle" width={150} height={49}/> 
                    </div>
                    <ProcessStep number={3} heading='quote' description='Get a detailed, transparent quote outlining the work, materials, and timelines.'/>
                </div>
            </div>
        </div>
    )
}
