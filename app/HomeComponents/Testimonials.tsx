import TestimonialCard from "./TestimonialCard";

const testimonials = [
    {
        name: 'Kate Wilkins',
        occupation: 'Aroha Wellness',
        testimonial: `Bradley went above and beyond for the painting of my tiny house. From the initial consult to the finer details and even coming out of his way to paint an extra panel that I wanted after the job was done, he made the effort to get it done when I was ready. Would highly recommend to anyone who is eco minded and wants attention to detail. Love the all natural paint`
    },
    {
        name: 'Claire Hampson',
        occupation: 'Avis Car Rental',
        testimonial: `Brad did an amazing job of painting a bathroom renovation. Great attention to detail and even went the extra mile to fill a sizeable hole we found behind a mirror. Great communication and would definitely recommend.`

    },
    {
        name: 'Joe Drummond',
        occupation: 'Harcouts',
        testimonial: `Lakeside Painting transformed our home beautifully. The team was professional, punctual, and paid great attention to detail. They used high-quality paints and finished the job ahead of schedule. Our walls look flawless, and the color advice they provided was spot-on. Cleanup was thorough, and they were respectful of our property throughout. Highly recommend for any painting needs!`
    }
]

export default function Testimonials() {
    return (
        <div className="testimonials bg-light-bg/10 flex flex-col items-center mx-auto px-side-spacing py-section-spacing">
             <h2 className='mb-[60px] text-lg font-medium'>We like to let our clients do the talking ...</h2>
            <div className='container  flex flex-col lg:flex-row items-stretch space-y-6  lg:space-y-0 lg:space-x-4'>
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