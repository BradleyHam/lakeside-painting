import Footer from "../SiteComponents/Footer"
import Navbar from "../SiteComponents/Navbar"
import ProjectCard from "./ProjectCard"
import Image from 'next/image'
import FilterBar from "./FilterBar"
import TopBanner from "@/app/SiteComponents/TopBanner"
import ProjectSection from "./ProjectSection"
import ModalClientManager from "../SiteComponents/ModalClientManager"
import FooterBanner from "../SiteComponents/FooterBanner"
import projects from '../../Utils/mockProjects'
import ProcessSection from "../HomeComponents/ProcessSection"
import BeforeAfterSlider from "./BeforeAfterSlider"

export default async function Projects() {
  
    return (
        <main className="mt-[var(--navbar-height-mobile)] lg:mt-[var(--navbar-height-desktop)]">
            <ModalClientManager>
            <Navbar />
            <TopBanner 
          headingSmall="Lakeside Painting Portfolio" 
          headingLarge="Transforming Queenstown Homes with Expert Painting"
        />
            <div className="projects-container bg-light-bg/10">
             <div className="projects">
              <ProjectSection projects={projects}/>
            </div>
            </div>
            <ProcessSection bg="white" />
            <FooterBanner />
            <Footer />
            </ModalClientManager>
        </main>
    )   
}