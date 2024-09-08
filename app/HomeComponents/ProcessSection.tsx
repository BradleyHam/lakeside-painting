import ProcessStep from "./ProcessStep";
import Image from 'next/image';

export default function ProcessSection({ bg }: { bg: string }) {
    return (
        <div className={`flex items-center justify-center ${bg === 'light' ? 'bg-light-bg/10' : 'bg-white'}`}>
            <div className="container mx-auto px-side-spacing py-section-spacing">
                <div className="flex flex-col lg:flex-row items-stretch justify-center space-y-12 lg:space-y-0 lg:space-x-8">
                    <div className="flex-1">
                        <ProcessStep 
                            number={1} 
                            heading='Book a Consultation' 
                            description='Schedule a call with our expert team. We&apos;ll discuss your painting needs and arrange a convenient site visit.'
                        />
                    </div>
                    <div className="hidden lg:flex items-center justify-center">
                        <Image src='/images/arrow-doodle.svg' alt="arrow-doodle" width={75} height={25}/> 
                    </div>
                    <div className="flex-1">
                        <ProcessStep 
                            number={2} 
                            heading='On-Site Assessment' 
                            description='Our professional representative will visit your property, assess the project, and provide a detailed, no-obligation quote.'
                        />
                    </div>
                    <div className="hidden lg:flex items-center justify-center">
                        <Image src='/images/arrow-doodle.svg' alt="arrow-doodle" width={75} height={25}/> 
                    </div>
                    <div className="flex-1">
                        <ProcessStep 
                            number={3} 
                            heading='Schedule Your Project' 
                            description='Happy with the quote? We&apos;ll draft a contract and work with you to set the perfect start date for your transformation.'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
