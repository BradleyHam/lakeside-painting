import TestimonialCard from "./TestimonialCard";

const testimonials = [
    {
        name: 'Michele White',
        occupation: 'Facebook',
        testimonial: `An excellent job painting the outside of our house at a very fair price. Dan and his staff are professional, tidy, friendly, excellent communicators and completed a quality job. Thanks  We will certainly use this company again!`
    },
    {
        name: 'Hannah White',
        occupation: 'Facebook',
        testimonial: `Dan did an excellent job on our house renovations - really reliable, professional and knowledgeable. Very reasonable rates. Would definitely recommend to others and wouldn't hesitate to use him again.  Griff's company was a bonus too for our dog Charlie who loved playing with him!`
    }
]

export default function Testimonials() {
    return (
        <div className="testimonials bg-light-bg lg:px-side-spacing">
            <div className='container px-5 flex flex-col lg:flex-row items-stretch space-y-12 lg:space-y-0 lg:space-x-12 mx-auto py-28'>
                {
                    testimonials.map((item, index) => (
                        <div key={index}className="lg:w-1/2">
                            <TestimonialCard  {...item}/>
                        </div>
                    ))
                    
                }
              
            </div>
        </div>
    )
}