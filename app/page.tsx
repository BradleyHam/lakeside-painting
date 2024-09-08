import Navbar from "./SiteComponents/Navbar";
import Footer from "./SiteComponents/Footer";
import Contact from "./HomeComponents/Contact";
import Hero from "./HomeComponents/Hero";
import ProcessSection from "./HomeComponents/ProcessSection";
import Services from "./HomeComponents/Services";
import Testimonials from "./HomeComponents/Testimonials";
import Faq from "./HomeComponents/Faq";
import Image from 'next/image'
import StatRow from './HomeComponents/StatRow'
import ModalClientManager from './SiteComponents/ModalClientManager';
import FooterBanner from './SiteComponents/FooterBanner';
import ShortAbout from './HomeComponents/ShortAbout';
import BookingForm from './SiteComponents/BookingForm/BookingForm';


import projects from '../Utils/mockProjects'
import ProjectsPreview from './HomeComponents/ProjectsPreview';

export default function Home() {



  return (
    <main className="relative text-brand-blue pt-[var(--navbar-height-mobile)] lg:pt-[var(--navbar-height-desktop)] pt-[var(--navbar-height-mobile)] md:pt-[var(--navbar-height-desktop)]">
          <Navbar />
          <Hero />
          <StatRow />
          <ShortAbout />
          <Services />
          <div className="grid grid-cols-3">
            
            
          </div>
          <Testimonials />
          <ProjectsPreview projects={projects} />
          
          <Faq />
          <ProcessSection bg='white'/>
          {/* <Contact /> */}
          {/* <FooterBanner /> */}
          {/* <BookingForm /> */}
        
          <FooterBanner />
          <Footer />
    
    </main>
  );
}
