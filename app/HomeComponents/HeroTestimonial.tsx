import FiveStars from "../SiteComponents/FiveStars";


export default function HeroTestimonial({text, testimonialWriter}: {text: string, testimonialWriter: string}) {
    return (
        <div className="hero-testimonial flex flex-col items-start  space-y-3 ">
           
            <FiveStars />
            {/* <p className="uppercase tracking-widest leading-tight text-sm opacity-75">{testimonialWriter}</p> */}
            <p className=" italic text-md lg:text-center">&quot;{text}&quot;</p>
            
        </div>
    )
}