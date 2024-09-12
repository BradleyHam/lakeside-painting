import React from 'react'
import Image from 'next/image'
import Navbar from '@/app/SiteComponents/Navbar'
import TopBanner from '@/app/SiteComponents/TopBanner'
import FooterBanner from '@/app/SiteComponents/FooterBanner'
import Footer from '@/app/SiteComponents/Footer'
import ProcessSection from '@/app/HomeComponents/ProcessSection'
import InteractiveSection from './InteractiveSection'
import SectionHeading from '@/app/SiteComponents/SectionHeading';

const applyCoatingOptions = [
  {
    label: 'Brush and Roll',
    image: '/images/services/interior/roller.jpg',
    content: (
      <>
        <p className="mb-2">When it&apos;s a good shout: If you&apos;re still living in the house or have lots of fiddly bits to work around.</p>
        <p className="font-semibold mb-1">Why you might like it:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Easy to touch up later if the kids decide to play cricket inside</li>
          <li>We don&apos;t waste much paint</li>
          <li>Less time spent covering everything in sight</li>
        </ul>
        <p className="font-semibold mb-1">But keep in mind:</p>
        <ul className="list-disc list-inside">
          <li>Might see a few brush marks here and there</li>
          <li>Takes a bit longer to dry evenly</li>
          <li>Can sometimes leave darker edges (we call it &quot;picture framing&quot;)</li>
        </ul>
      </>
    ),
  },
  {
    label: 'Spray Painting',
    image: '/images/services/interior/spraying.jpg',
    content: (
      <>
        <p className="mb-2">When it&apos;s a good shout: Perfect for new builds or big open spaces.</p>
        <p className="font-semibold mb-1">Why you might like it:</p>
        <ul className="list-disc list-inside mb-4">
          <li>We&apos;ll be in and out before you know it</li>
          <li>Dries nice and even</li>
          <li>Looks smooth as</li>
        </ul>
        <p className="font-semibold mb-1">But keep in mind:</p>
        <ul className="list-disc list-inside">
          <li>We&apos;ll need to cover more stuff up</li>
          <li>Touching up later might be a bit trickier</li>
          <li>Paint hangs about in the air a bit longer</li>
        </ul>
      </>
    ),
  },
  {
    label: 'Wallpaper',
    image: '/images/services/interior/wallpaper.jpg',
    content: (
      <>
        <p className="mb-2">When it&apos;s a good shout: Want to really make your Queenstown pad stand out? Wallpaper&apos;s your ticket to something special.</p>
        <p className="font-semibold mb-1">Why you might like it:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Create a feature wall that&apos;ll have your mates buzzing</li>
          <li>So many choices - from subtle textures to wild patterns</li>
          <li>Adds a bit of depth to your rooms</li>
          <li>Lasts yonks if you treat it right</li>
          <li>Great for hiding those not-so-perfect walls</li>
        </ul>
        <p className="font-semibold mb-1">Why trust us with your wallpaper:</p>
        <ul className="list-disc list-inside">
          <li>We&apos;ve got access to some choice wallpaper collections</li>
          <li>We know how to line up those patterns just right</li>
          <li>We&apos;ll help you pick something that suits your style and your life</li>
          <li>Fancy a mix of paint and wallpaper? We&apos;ve got you covered</li>
        </ul>
      </>
    ),
  },
];

export default function InteriorPage() {
  return (
    <div className="text-primary mt-[var(--navbar-height-mobile)] lg:mt-[var(--navbar-height-desktop)]">
      <Navbar />
      <TopBanner headingSmall='Top-Notch Interior Painting' headingLarge='Bring Your Queenstown Home to Life' />
      
      <main className="">
        <section className=" px-side-spacing py-section-spacing bg-light-bg/10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1">
              <div className="p-3 bg-white shadow-xl">
                <div className="relative h-[350px] shadow-lg">
                  <Image 
                    src="/images/services/interior/floor-protection.jpg" 
                    alt="Surrounding Prep" 
                    fill
                    className="object-cover" 
                  />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 flex flex-col ">
              <SectionHeading 
                subtitle='First Things First' 
                title='Keeping Your Stuff Safe' 
                type={2} 
              />
              <p className="mb-4 text-sm">Look, we know your home isn&apos;t just a bunch of walls - it&apos;s where you live! That&apos;s why before we even think about cracking open a paint tin, we make sure everything&apos;s ship-shape:</p>
              <ul className="mb-4 list-disc list-inside text-sm">
                <li>We&apos;ll carefully shift the small stuff out of the way</li>
                <li>Big furniture? We&apos;ll pop it in the middle and wrap it up snug</li>
                <li> Anything that might take a tumble gets secured</li>
              </ul>
              <p>
              It&apos;s all about making sure your place is as tidy when we leave as it was when we arrived. No stress, no mess - that&apos;s our promise.
              </p>
              
            </div>
          </div>
        </section>

        <section className="px-side-spacing py-section-spacing">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="order-2 md:order-2">
              <div className="p-3 bg-white shadow-xl">
                <div className="relative h-[350px] shadow-lg">
                  <Image 
                    src="/images/services/interior/sanding.jpg" 
                    alt="Surface Prep" 
                    fill
                    className="object-cover" 
                  />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-1">
              <SectionHeading 
                subtitle='Getting Your Walls Ready' 
                title='The Not-So-Glamorous (But Super Important) Bit' 
                type={2} 
              />
              <p className="mb-4 text-sm">Alright, this is where the magic starts to happen. Before we make your walls look mint, we need to sort out any issues:</p>
              <ul className="list-disc list-inside text-sm">
                <li>Filling in those pesky cracks? You bet.</li>
                <li> Smoothing out dings and dents? Absolutely.</li>
                <li>Scraping off old, flaky paint? Consider it done.</li>
                <li>Slapping on some primer if needed? No worries.</li>
                <li>Sanding everything down? Smooth as a baby&apos;s bum, mate.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className='application px-4 sm:px-side-spacing py-section-spacing bg-light-bg/10'>
          <div className='mx-auto'>
            <SectionHeading 
              subtitle='Interior Coatings' 
              title='Choose Your Coating Method' 
              type={1} 
            />
            <InteractiveSection applyCoatingOptions={applyCoatingOptions} />
          </div>
        </section>

        <section className='cleaning-up px-side-spacing py-section-spacing'>
          <div className='lg:grid lg:grid-cols-2 lg:gap-8 items-center'>
            <div className='order-1 lg:order-1 mb-8 lg:mb-0'>
              <SectionHeading 
                subtitle='Cleaning Up' 
                title='We&apos;ll Leave Your Place Spick and Span' 
                type={2} 
              />
              <p className="text-sm mb-6">We reckon a job&apos;s not done until everything&apos;s back to normal - or better! Here&apos;s what we do before we head off:</p>
              <ul className="list-disc list-inside text-sm mb-8">
                <li className=''>Peel off all that protective gear</li>
                <li>Give everything a good dust and vac</li>
                <li>Put all your bits and bobs back where they belong</li>
                <li>One last look around to make sure you&apos;re happy as Larry</li>
              </ul>
              <p className="text-sm mb-6">Ready to give your Queenstown home a fresh new look? Give us a bell and we&apos;ll sort you out with a free quote. Whether it&apos;s a quick spruce-up or a total transformation, we&apos;ve got the skills to make your place look choice.</p>
            </div>
            <div className='order-2 lg:order-2'>
              <div className="p-3 bg-white shadow-xl">
                <div className="relative h-[350px] shadow-lg">
                  <Image 
                    src="/images/services/interior/cleanup.jpg" 
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
