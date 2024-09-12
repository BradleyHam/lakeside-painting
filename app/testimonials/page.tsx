import React from 'react';
import { Metadata } from 'next';
import { format } from 'date-fns';
import Navbar from '@/app/SiteComponents/Navbar';
import TestimonialCard from '@/app/HomeComponents/TestimonialCard';
import TopBanner from '@/app/SiteComponents/TopBanner';
import FooterBanner from '../SiteComponents/FooterBanner';
import ProcessSection from '../HomeComponents/ProcessSection';
import Footer from '../SiteComponents/Footer';

export const metadata: Metadata = {
  title: 'Client Testimonials | Lakeside Painting Queenstown',
  description: 'Read what our satisfied clients say about Lakeside Painting\'s professional house painting and decorating services in Queenstown, New Zealand.',
  keywords: 'testimonials, client reviews, Lakeside Painting, house painters, Queenstown, New Zealand',
  openGraph: {
    title: 'Client Testimonials | Lakeside Painting Queenstown',
    description: 'Read what our satisfied clients say about Lakeside Painting\'s professional house painting and decorating services in Queenstown, New Zealand.',
    url: 'https://www.lakesidepainting.co.nz/testimonials',
    type: 'website',
    locale: 'en_NZ',
    siteName: 'Lakeside Painting',
  },
}

interface Testimonial {
  id: number;
  author: string;
  content: string;
  date: Date;
  rating: number;
}

const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    author: "Sarah Thompson",
    content: "Lakeside Painting transformed our home! Their attention to detail and professionalism were outstanding. Our walls have never looked better!",
    date: new Date("2023-05-15"),
    rating: 5
  },
  {
    id: 2,
    author: "Mike Johnson",
    content: "I was impressed by how quickly and efficiently the Lakeside team worked. They completed our exterior painting job ahead of schedule and the results are fantastic.",
    date: new Date("2023-06-22"),
    rating: 5
  },
  {
    id: 3,
    author: "Emily Chen",
    content: "The team at Lakeside Painting was incredibly helpful in choosing the perfect colors for our living room. Their expertise made all the difference!",
    date: new Date("2023-07-10"),
    rating: 4
  },
  {
    id: 4,
    author: "David Wilson",
    content: "We hired Lakeside for a commercial painting job and were thoroughly impressed. They worked around our business hours and left everything spotless.",
    date: new Date("2023-08-05"),
    rating: 5
  },
  {
    id: 5,
    author: "Lisa Anderson",
    content: "The quality of work from Lakeside Painting is unmatched. They repainted our entire house interior and it looks brand new. Highly recommend!",
    date: new Date("2023-09-18"),
    rating: 5
  }
];

export default function TestimonialPage() {
  const sortedTestimonials = [...mockTestimonials].sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <>
      <Navbar />
      <TopBanner 
        headingSmall='Testimonials'
        headingLarge="Queenstown's Trusted Painters: See What Our Clients Say"
      />
      
      <main className="mx-auto p-4 bg-light-bg/10 py-[80px] lg:pb-[120px] lg:pt-[120px]">
        <div className="relative">
          {/* Vertical timeline line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />
          
          {sortedTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`flex flex-col space-y-[40px] lg:space-y-0 md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline elements - hidden on mobile */}
              <div className="hidden md:flex flex-col items-center w-full md:w-1/2 relative">
                <div className={`absolute top-1/2 transform -translate-y-1/2 w-full flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  {/* Horizontal line */}
                  <div 
                    className={`h-0.5 bg-gray-200 flex-grow max-w-[calc(20%-0.5rem)] ${index % 2 === 0 ? 'order-1' : 'order-3'}`}
                  />
                  
                  {/* Timeline dot */}
                  <div className="w-4 h-4 bg-primary rounded-full z-10 flex-shrink-0 order-2" />
                  
                  {/* Date */}
                  <div className={`whitespace-nowrap text-sm text-gray-500 ${index % 2 === 0 ? 'order-3 pl-4' : 'order-1 pr-4'}`}>
                    {format(testimonial.date, 'MMM d, yyyy')}
                  </div>
                </div>
              </div>
              
              {/* Card wrapper */}
              <div className="w-full md:w-1/2 px-4 md:px-8">
                {/* Date for mobile */}
                <div className="md:hidden text-sm text-gray-500 mb-2 text-center">
                  {format(testimonial.date, 'MMM d, yyyy')}
                </div>
                <TestimonialCard
                  name={testimonial.author}
                  testimonial={testimonial.content}
                />
              </div>
            </div>
          ))}
        </div>
      </main>
      <ProcessSection bg='white'/>
      <FooterBanner />
      <Footer />
    </>
  );
}