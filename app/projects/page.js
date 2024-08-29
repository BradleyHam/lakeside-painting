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
import BeforeAfterSlider from "./BeforeAfterSlider"

export default async function Projects() {
  
    return (
        <main className="">
            <ModalClientManager>
            <Navbar />
            <div className="projects-container">
             <div className="projects">
              <ProjectSection projects={projects}/>
            </div>
            </div>
            <FooterBanner />
            <Footer />
            </ModalClientManager>
        </main>
    )   
}