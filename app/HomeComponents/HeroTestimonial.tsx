import FiveStars from "../SiteComponents/FiveStars";


export default function HeroTestimonial({text, testimonialWriter}: {text: string, testimonialWriter: string}) {
    return (
        <div className=" flex flex-col items-start  space-y-[16px]  ">
           
            <FiveStars />
            {/* <p className="uppercase tracking-widest leading-tight text-sm opacity-75">{testimonialWriter}</p> */}
            <p className=" italic lg:text-center text-white text-sm">&quot;{text}&quot;</p>
            
        </div>
    )
}