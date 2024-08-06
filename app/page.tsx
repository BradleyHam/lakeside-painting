
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

export default function Home() {

  return (
    <main className="relative text-brand-blue">
      
          <Navbar />
          <Hero />
          <StatRow />
          <ShortAbout />
       
          <Services />
          {/* <ProcessSection /> */}
          <Testimonials />
          <Faq />
          <Contact />
          {/* <FooterBanner /> */}
          <BookingForm />
          <Footer />
      
    </main>
  );
}
