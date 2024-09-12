'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import SectionHeading from '../SiteComponents/SectionHeading';

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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative px-side-spacing py-section-spacing bg-light-bg/10">
     
     
      <div className="relative z-10 flex flex-col items-center ">
        <SectionHeading 
          subtitle="FAQ" 
          title="Get answers to the questions we hear a lot" 
          type={1}
        />
        
        <div className="lg:max-w-[70%] container mx-auto flex flex-col space-y-2 lg:space-y-3">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="faq-card border border-1 px-5 lg:px-8 py-5 lg:py-7 rounded bg-white cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold text-sm pr-4">
                  {faq.question}
                </p>
                <div className='w-[20px] h-[20px] relative flex-shrink-0'>
                  <AnimatePresence initial={false} mode="wait">
                    {activeIndex === index ? (
                      <motion.div
                        key="minus"
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <FaMinus className="text-primary" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="plus"
                        initial={{ opacity: 0, rotate: 90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: -90 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <FaPlus className="text-primary" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    variants={{
                      expanded: { opacity: 1, height: 'auto' },
                      collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      variants={{
                        expanded: { opacity: 1, y: 0 },
                        collapsed: { opacity: 0, y: -10 }
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-primary/60 mt-4 text-sm">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;