
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
    <main className="relative text-brand-blue ">
      
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
          {/* <BookingForm /> */}
          <div className='map-view h-[350px] relative'>
                  <div className="inset-0 bg-primary z-0 absolute opacity-60"></div>

                    <iframe
                    width="100%"
                    height="100%"
                    style={{border:0}}

                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90284.49043269485!2d168.61739859040918!3d-44.99669492981708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9d51df1d7a8de5f%3A0x500ef868479a600!2sQueenstown!5e0!3m2!1sen!2snz!4v1711249838039!5m2!1sen!2snz">
                    </iframe>
                </div>
          <Footer />
      
    </main>
  );
}
