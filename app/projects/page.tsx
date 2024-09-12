
import { Metadata } from 'next'
import Footer from "../SiteComponents/Footer"
import Navbar from "../SiteComponents/Navbar"
import TopBanner from "@/app/SiteComponents/TopBanner"
import ProjectSection from "./ProjectSection"
import ModalClientManager from "../SiteComponents/ModalClientManager"
import FooterBanner from "../SiteComponents/FooterBanner"
import { Project } from '../../types/Project'; // Ensure this import exists
import projects from '../../Utils/mockProjects';
import ProcessSection from "../HomeComponents/ProcessSection"

export const metadata: Metadata = {
  title: 'Lakeside Painting Portfolio | Professional House Painters in Queenstown',
  description: 'Explore our stunning portfolio of house painting projects in Queenstown. See how Lakeside Painting transforms homes with expert craftsmanship and attention to detail.',
  keywords: 'house painting, Queenstown painters, home renovation, painting portfolio, exterior painting, interior painting',
  openGraph: {
    title: 'Lakeside Painting Portfolio | Expert House Painters in Queenstown',
    description: 'Discover how Lakeside Painting transforms Queenstown homes. View our portfolio of stunning painting projects.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lakeside Painting Portfolio | Expert House Painters in Queenstown',
    description: 'Discover how Lakeside Painting transforms Queenstown homes. View our portfolio of stunning painting projects.'
  },
}

export default function Projects() {
  return (
    <main className="mt-[var(--navbar-height-mobile)] lg:mt-[var(--navbar-height-desktop)]">
      <ModalClientManager>
        <Navbar />
        <TopBanner 
          headingSmall="Lakeside Painting Portfolio" 
          headingLarge="Transforming Queenstown Homes with Expert Painting"
        />
        <div className="projects-container ">
          <div className="projects">
            <ProjectSection projects={projects} />
          </div>
        </div>
        <ProcessSection bg="white" />
        <FooterBanner />
        <Footer />
      </ModalClientManager>
    </main>
  )   
}