'use client'
import React, { useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

// Updated array of FAQs
const faqData = [
  {
    question: "Do you offer free quotes or estimates?",
    answer: "Yes, we offer free, no-obligation quotes for all our painting and decorating services. We can provide an estimate based on the information you give us over the phone or email, but for the most accurate quote, we prefer to visit your property and assess the job in person."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely. We are fully licensed and carry comprehensive insurance, including general liability and workers' compensation. We're happy to provide proof of insurance upon request. This ensures that both you and our team are protected throughout the duration of the project."
  },
  {
    question: "How do you protect furniture and floors during the painting process?",
    answer: "We take great care to protect your belongings during the painting process. For furniture, we either move it to the center of the room and cover it with plastic sheeting, or if possible, we move it out of the room entirely. For floors, we use drop cloths and protective plastic sheeting. We also use painter's tape to protect trim, windows, and any areas not being painted."
  },
  {
    question: "What brands of paint do you use? Can I supply my own paint?",
    answer: "We primarily use high-quality paints from reputable brands such as Resene and Dulux. These brands offer excellent coverage and durability. However, we're flexible and can work with other brands if you have a preference. If you'd like to supply your own paint, that's absolutely fine - just let us know in advance."
  },
  {
    question: "Do you offer color consultation services?",
    answer: "Yes, we do offer color consultation services. Our experienced team can help you choose colors that complement your space and reflect your personal style. We can provide color swatches and even do small test patches on your walls to help you visualize the final result. This service is often included as part of our overall painting package."
  },
  {
    question: "What kind of prep work do you do before painting?",
    answer: "Proper preparation is crucial for a high-quality, long-lasting paint job. Our prep work typically includes cleaning the surfaces, repairing cracks or holes, sanding rough areas, removing old paint, applying primer where necessary, and protecting non-paintable surfaces. The exact prep work can vary depending on the condition of the surfaces and the specific requirements of each job. We always discuss our preparation process with clients before starting the work."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="p-5 py-[80px] ">
      <div className="lg:max-w-[70%] container mx-auto flex flex-col space-y-3">

        {faqData.map((faq, index) => (
          <div onClick={() => toggleFAQ(index)} key={index} className=" cursor-pointer border-1 border px-5 lg:px-8 py-5 lg:py-7 rounded hover:bg-gray-50 ">
            <div className="flex space-x-4 justify-between items-center">
              <h3 className="text-base lg:text-lg font-semibold text-brand-blue">
                {faq.question}
              </h3>
             <div className='w-[50px] flex justify-end text-primary'>
              <FaChevronUp size={17} className={`${activeIndex === index ? 'rotate-0' : 'rotate-180'} transition-all duration-300 ease-in-out`}/>
              </div>
            </div>
            <div className={`${activeIndex === index ? 'block' : 'hidden'} text-primary/60 mt-4`}>
              {faq.answer}
            </div>
          </div>
        ))}
       
      </div>
    </div>
  );
};

export default FAQ;