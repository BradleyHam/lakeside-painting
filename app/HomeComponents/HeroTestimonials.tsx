'use client'
import React, { useState, useEffect } from 'react';
import HeroTestimonial from "./HeroTestimonial";
import test from 'node:test';

const testimonials = [
  { id: 1, text: "reliable, professional and knowledgeable", testimonialWriter: 'Hannah White' },
  { id: 2, text: "clean, tidy, efficient and very nice guys", testimonialWriter: 'Eric Beattie'  },
  { id: 3, text: "An excellent job at a very fair price", testimonialWriter: "Michele White"}
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000); // Increased from 3000 to 5000 milliseconds (5 seconds)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full mt-[32px]">
      <div className="flex transition-all duration-1000 ease-in-out">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`w-full flex-shrink-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'
            }`}
          >
            <HeroTestimonial text={testimonial.text} testimonialWriter={testimonial.testimonialWriter}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;



// import HeroTestimonial from "./HeroTestimonial";

// export default function HeroTestimonials(){
//     return (
//     <div className="hero-testimonial-row flex justify-around container mx-auto py-24">
//     <HeroTestimonial text='friendly, punctual and reliable'/>
//     <HeroTestimonial text='best painters in town'/>
//     <HeroTestimonial text='surpassed expectations'/>
// </div>
//     )
// }