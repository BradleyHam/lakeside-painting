import Footer from "../SiteComponents/Footer";
import Navbar from "../SiteComponents/Navbar";
import TopBanner from "../SiteComponents/TopBanner";
import AboutSection from "./AboutComponents/AboutSection";
import Values from "./AboutComponents/Values";
import TeamSection from "./AboutComponents/TeamSection";
import ProcessSection from "../HomeComponents/ProcessSection";
import FooterBanner from "../SiteComponents/FooterBanner";
import { Metadata } from 'next';
import ShortAbout from '../HomeComponents/ShortAbout';

export const metadata: Metadata = {
  title: 'About Lakeside Painting | Expert Painters in Queenstown',
  description: 'Learn about Lakeside Painting, Queenstown\'s trusted painting experts. Discover our values, meet our team, and see how we transform spaces with quality and care.',
  keywords: 'Lakeside Painting, Queenstown painters, professional painting services, about us, painting experts',
};

export default function About() {
  return (
    <main className="text-brand-primary mt-[var(--navbar-height-mobile)] lg:mt-[var(--navbar-height-desktop)]">
      <Navbar />
      <TopBanner 
        headingSmall="Queenstown's Trusted Painters" 
        headingLarge="Our Painting Journey"
      />
      <ShortAbout />
      <Values />
      <TeamSection />
      <ProcessSection bg='white'/>
      <FooterBanner />
      <Footer />
    </main>
  );
}