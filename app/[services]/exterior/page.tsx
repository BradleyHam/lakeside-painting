import { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/app/SiteComponents/Navbar'
import TopBanner from '@/app/SiteComponents/TopBanner'
import FooterBanner from '@/app/SiteComponents/FooterBanner'
import Footer from '@/app/SiteComponents/Footer'
import ProcessSection from '@/app/HomeComponents/ProcessSection'
import HouseTypeSelector from './HouseTypeSelector'
import SectionHeading from '@/app/SiteComponents/SectionHeading';

export const metadata: Metadata = {
  title: 'Expert Exterior Painting Services in Queenstown | Lakeside Painting',
  description: 'Transform your Queenstown home with our professional exterior painting services. Specializing in weatherboard, timber, plaster, and Axon Panel. Get a free quote today!',
  keywords: 'exterior painting, Queenstown, weatherboard, timber, plaster, Axon Panel, house painting',
  openGraph: {
    title: 'Expert Exterior Painting Services in Queenstown | Lakeside Painting',
    description: 'Transform your Queenstown home with our professional exterior painting services. Specializing in weatherboard, timber, plaster, and Axon Panel.',
    images: [
      {
        url: '/images/services/exterior/exterior-painting-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Lakeside Painting Exterior Services',
      },
    ],
  },
}

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

export default function ExteriorPage() {
  return (
    <div className="text-primary mt-[var(--navbar-height-mobile)] lg:mt-[var(--navbar-height-desktop)]">
      <Navbar />
      <TopBanner 
        headingSmall='Weather-Proof Your Queenstown Home' 
        headingLarge='Expert Exterior Painting Services'
      />
      
      <main>
        <section className=" px-side-spacing py-section-spacing bg-light-bg/10">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="order-1 md:order-2">
              <SectionHeading 
                subtitle='First Up' 
                title='Protecting Your Outdoor Space' 
                type={2} 
              />
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
          </div>
        </section>

        <section className=" px-side-spacing py-section-spacing">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="order-1 md:order-1">
              <SectionHeading 
                subtitle='Prepping Your Walls' 
                title='The Crucial Bit Most Folks Forget' 
                type={2} 
              />
              <p className='mb-4'>Right, let&apos;s get your walls ready for their new look. Queenstown weather can be tough on exteriors, so we&apos;ll:</p>
              <ul className="list-disc list-inside text-sm">
                <li>Give everything a good clean - no grime left behind</li>
                <li>Scrape off any peeling paint - it&apos;s got to go</li>
                <li>Replace any rotted wood - can&apos;t paint over problems</li>
                <li>Fill up those cracks and gaps - smooth as</li>
                <li>Sand it all down - for that perfect finish</li>
                <li>Chuck on some quality primer - it&apos;s the key to long-lasting color</li>
              </ul>
            </div>
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
          </div>
        </section>

        <section className='application px-side-spacing py-section-spacing bg-light-bg/10'>
          <div className='mx-auto'>
            <SectionHeading 
              subtitle='Queenstown homes' 
              title='We know your cladding' 
              type={1} 
            />
            
            <HouseTypeSelector houseTypes={houseTypes} />
          </div>
        </section>

        <section className='cleaning-up px-side-spacing py-section-spacing'>
          <div className='lg:grid lg:grid-cols-2 lg:gap-8 items-center'>
            <div className='order-1 lg:order-1 mb-8 lg:mb-0'>
              <SectionHeading 
                subtitle='The Clean Up' 
                title='Leaving your place better than we found it' 
                type={2} 
              />
              
              <p className='text-sm mb-4'>We reckon the job&apos;s not done until everything&apos;s spick and span. Here&apos;s our post-paint routine:</p>
              <ul className="list-disc list-inside text-sm mb-8">
                <li>Pack up all our gear and any leftover materials</li>
                <li>Give your outdoor area a good sweep and tidy</li>
                <li>Put all your outdoor bits and bobs back where they belong</li>
                <li>One last walk around to make sure you&apos;re chuffed with the result</li>
              </ul>
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
