'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/app/SiteComponents/Navbar'
import TopBanner from '@/app/SiteComponents/TopBanner'
import FooterBanner from '@/app/SiteComponents/FooterBanner'
import Footer from '@/app/SiteComponents/Footer'
import ProcessSection from '@/app/HomeComponents/ProcessSection'

const houseTypes = [
    {
      label: 'Weatherboard',
      image: '/images/services/exterior/weatherboard.jpg',
      content: (
        <>
          <p className="mb-2">Weatherboard homes are a Queenstown classic, and we&apos;ve got the expertise to make them shine:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Our team uses specialized primers designed to bond well with both old and new weatherboards</li>
            <li>We apply flexible, high-quality exterior paints that can withstand the natural expansion and contraction of the wood</li>
            <li>Extra attention is given to end-grain sealing and caulking joints to prevent moisture ingress</li>
            <li>For uneven surfaces, we employ techniques like &apos;wet-edge&apos; painting to ensure a smooth, consistent finish</li>
            <li>We&apos;re skilled in both brush and spray application, choosing the best method for your specific weatherboards</li>
          </ul>
        </>
      ),
    },
    {
      label: 'Timber',
      image: '/images/services/exterior/cedar.jpg',
      content: (
        <>
          <p className="mb-2">Timber cladding requires special care to preserve its natural beauty while protecting it from Queenstown&apos;s elements:</p>
          <ul className="list-disc list-inside mb-4">
            <li>We begin with a gentle clean using specialized wood cleaners to remove dirt without damaging the timber</li>
            <li>For weathered timber, we use restoration techniques like sanding or chemical brightening to rejuvenate the wood</li>
            <li>We&apos;re experts in applying both stains and clear sealers, enhancing the wood&apos;s natural grain</li>
            <li>For cedar, we use products specifically formulated to handle its unique properties and natural oils</li>
            <li>Our team applies UV-resistant finishes to protect against Queenstown&apos;s intense sunlight</li>
            <li>We use breathable finishes that allow the timber to naturally regulate moisture, preventing trapped dampness</li>
            <li>For a modern look, we can apply solid color paints using techniques that maintain the texture of the wood</li>
          </ul>
        </>
      ),
    },
    {
      label: 'Plaster',
      image: '/images/services/exterior/plaster.jpg',
      content: (
        <>
          <p className="mb-2">Plaster and stucco homes require a delicate touch and specialized knowledge:</p>
          <ul className="list-disc list-inside mb-4">
            <li>We start with a comprehensive inspection, identifying and repairing any cracks or damage in the plaster</li>
            <li>Our team uses elastomeric paints that can bridge hairline cracks and move with the substrate</li>
            <li>We apply masonry primers to ensure excellent adhesion and longevity of the topcoat</li>
            <li>For textured plaster, we use techniques like back-rolling to ensure even coverage in all the nooks and crannies</li>
            <li>We&apos;re skilled in both rolling and spraying applications, choosing the best method for your plaster&apos;s texture</li>
            <li>Our painters are trained in maintaining consistent texture when patching is required</li>
            <li>We use breathable paints that allow moisture to escape, preventing bubbling and peeling</li>
          </ul>
        </>
      ),
    },
    {
      label: 'Axon Panel',
      image: '/images/services/exterior/axon-panel.jpg',
      content: (
        <>
          <p className="mb-2">Axon Panels offer a modern look, and we know exactly how to make them pop:</p>
          <ul className="list-disc list-inside mb-4">
            <li>We begin with a thorough clean, ensuring all surfaces are free from construction dust and debris</li>
            <li>Our team uses specialized masking techniques to protect the crisp lines of the vertical grooves</li>
            <li>We apply high-adhesion primers designed specifically for pre-primed fiber cement panels</li>
            <li>Our painters are skilled in both brush and roller techniques to achieve a smooth, even finish on large flat surfaces</li>
            <li>We use low-sheen or satin finishes that highlight the panel&apos;s texture without emphasizing surface imperfections</li>
            <li>For the joints, we employ careful caulking and painting techniques to maintain a seamless look</li>
            <li>We can recommend and apply bold, modern colors that complement the contemporary style of Axon Panels</li>
            <li>Our team is experienced in applying durable finishes that stand up to Queenstown&apos;s varied climate</li>
          </ul>
        </>
      ),
    },
  ];

function ExteriorPage() {
  const [selectedHouseType, setSelectedHouseType] = useState(houseTypes[0].label)

  return (
    <div className="text-primary mt-[var(--navbar-height-mobile)] lg:mt-[var(--navbar-height-desktop)]">
      <Navbar />
      <TopBanner headingSmall='Weather-Proof Your Queenstown Home' headingLarge='Expert Exterior Painting' />
      
      <main className="">
        <section className="mb-12 px-side-spacing py-section-spacing bg-light-bg/10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1">
              <div className="p-3 bg-white shadow-xl">
                <div className="relative h-[350px] shadow-lg">
                  <Image 
                    src="/images/services/exterior/surrounding-prep.webp" 
                    alt="Protecting Your Outdoor Space" 
                    fill
                    className="object-cover" 
                  />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h4 className='text-xs uppercase tracking-widest text-primary font-medium mb-2'>First Up</h4>
              <h2 className='text-base font-semibold mb-4'>Protecting Your Outdoor Space</h2>
              <p className='text-sm mb-4'>Your home&apos;s exterior is its first line of defense against Queenstown&apos;s four seasons. Before we break out the brushes, we&apos;ll make sure everything&apos;s sorted:</p>
              
              <ul className="mb-4 list-disc list-inside text-sm">
                <li>We&apos;ll shift your outdoor furniture to a safe spot</li>
                <li>Those prized plants? We&apos;ll cover them up nice and cozy</li>
                <li>Anything attached to the walls gets a protective wrap</li>
              </ul>
              <p className="text-sm">
                It&apos;s all about keeping your outdoor area as pristine as those Wakatipu views. No worries, no hassles - that&apos;s how we roll.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12 px-side-spacing py-section-spacing">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="order-2 md:order-2">
              <div className="p-3 bg-white shadow-xl">
                <div className="relative h-[350px] shadow-lg">
                  <Image 
                    src="/images/services/exterior/surface-prep.jpg" 
                    alt="Prepping Your Walls" 
                    fill
                    className="object-cover" 
                  />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-1">
              <h4 className='text-xs uppercase tracking-widest text-primary font-medium mb-2'>Prepping Your Walls </h4>
            <h2 className='text-base font-semibold mb-4'>The Crucial Bit Most Folks Forget</h2>
             
              <p className='mb-4' >Right, let&apos;s get your walls ready for their new look. Queenstown weather can be tough on exteriors, so we&apos;ll:</p>
              <ul className="list-disc list-inside text-sm">
                <li>Give everything a good clean - no grime left behind</li>
                <li>Scrape off any peeling paint - it&apos;s got to go</li>
                <li>Replace any rotted wood - can&apos;t paint over problems</li>
                <li>Fill up those cracks and gaps - smooth as</li>
                <li>Sand it all down - for that perfect finish</li>
                <li>Chuck on some quality primer - it&apos;s the key to long-lasting color</li>
              </ul>
            </div>
          </div>
        </section>

        <section className='application px-4 sm:px-side-spacing py-section-spacing bg-light-bg/10'>
          <div className='lg:flex lg:flex-col lg:items-center'>
            <h4 className='text-xs uppercase tracking-widest text-primary font-medium mb-2'>Queenstown Homes</h4>
            <h2 className='text-base font-semibold mb-6'>We Know Your Cladding</h2>
            
            <div className="pt-6 pb-12 w-full max-w-full overflow-x-hidden">
              <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:space-x-2 relative">
                {houseTypes.map((type) => (
                  <motion.button
                    key={type.label}
                    onClick={() => setSelectedHouseType(type.label)}
                    className={`w-full sm:w-auto px-4 py-3 sm:py-2 min-h-[48px] sm:min-h-0 rounded text-xs uppercase font-semibold tracking-wider relative overflow-hidden transition-colors duration-300 ease-in-out ${
                      selectedHouseType === type.label
                        ? 'bg-primary text-white'
                        : 'bg-light-bg text-primary hover:bg-primary/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {type.label}
                    {selectedHouseType === type.label && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 bg-accent-1"
                        layoutId="underline"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </motion.button>
                ))}
                <div className="absolute -top-10 lg:-top-7 left-0 right-0 text-center text-xs text-primary/70 italic">
                  Toggle options to explore
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="mb-6 md:mb-0">
              <div className="p-3 bg-white shadow-xl">
                <div className="relative h-[350px] shadow-lg">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedHouseType}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={houseTypes.find(o => o.label === selectedHouseType)?.image || ''}
                        alt={selectedHouseType}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedHouseType}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-sm"
                >
                  {houseTypes.find(o => o.label === selectedHouseType)?.content}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        <section className='cleaning-up px-side-spacing py-section-spacing'>
          <div className='lg:grid lg:grid-cols-2 lg:gap-8 items-center'>
            <div className='order-1 lg:order-1 mb-8 lg:mb-0'>
              <h4 className='text-xs uppercase tracking-widest text-primary font-medium mb-2'>The Clean-Up</h4>
              <h2 className='text-base font-semibold mb-4'>Leaving Your Place Better Than We Found It</h2>
              <p className='text-sm mb-4'>We reckon the job&apos;s not done until everything&apos;s spick and span. Here&apos;s our post-paint routine:</p>
              <ul className="list-disc list-inside text-sm mb-8">
                <li>Pack up all our gear and any leftover materials</li>
                <li>Give your outdoor area a good sweep and tidy</li>
                <li>Put all your outdoor bits and bobs back where they belong</li>
                <li>One last walk around to make sure you&apos;re chuffed with the result</li>
              </ul>
              <p className="text-sm mb-6">Ready to give your Queenstown home a facelift? Give us a bell for a free quote. Whether it&apos;s a quick refresh or a complete color change, we&apos;ll make your place the talk of the town (in a good way, of course).</p>
            </div>
            <div className='order-2 lg:order-2'>
              <div className="p-3 bg-white shadow-xl">
                <div className="relative h-[350px] shadow-lg">
                  <Image 
                    src="/images/services/exterior/sweeping.jpg" 
                    alt="Cleaning up after painting" 
                    fill
                    className="object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProcessSection bg='light' />
        <FooterBanner />
        <Footer />
      </main>
    </div>
  )
}

export default ExteriorPage
