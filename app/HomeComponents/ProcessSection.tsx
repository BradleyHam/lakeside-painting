import ProcessStep from "./ProcessStep";
import Image from 'next/image';

export default function ProcessSection() {
    return (
        <div className="flex items-center justify-center  bg-white">
            <div className="container mx-auto px-side-spacing py-section-spacing">
                <div className="flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 lg:space-x-8">
                    <ProcessStep number={1} heading='contact' description='Reach out to us to discuss your needs and get initial insights.'/>
                    <div className="hidden lg:block">
                        <Image src='/images/arrow-doodle.svg' alt="arrow-doodle" width={150} height={49}/> 
                    </div>
                    <ProcessStep number={2} heading='schedule' description='Arrange a convenient time for us to visit and assess your space.'/>
                    <div className="hidden lg:block">
                        <Image src='/images/arrow-doodle.svg' alt="arrow-doodle" width={150} height={49}/> 
                    </div>
                    <ProcessStep number={3} heading='quote' description='Get a detailed, transparent quote outlining the work, materials, and timelines.'/>
                </div>
            </div>
        </div>
    )
}
