import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import FiveStars from "../SiteComponents/FiveStars";

export default function TestimonialCard({name, testimonial}: {name: string, testimonial: string}) {
    return (
        <div className="flex flex-col  h-full bg-white shadow-lg lg:p-10 p-7">
            <div className="testionial-card-heading flex space-x-3">
                <div className="flex space-x-3 items-start justify-between w-full">
                    <FiveStars />
                    <div className="text-primary/30 -translate-y-3 translate-x-1">
                         <BiSolidQuoteAltRight size={40} color='' />
                    </div>    
                </div>
            </div>
            <p className="text-sm font-light leading-normal text-primary/70 py-[10px]">
                {testimonial}
            </p>
            <div className="text-primary flex flex-col mt-auto space-y-1 pt-[20px]">
                <h3 className="text-sm lg:text-base font-semibold">{name}</h3>
               
            </div>
        </div>
    )
}
 