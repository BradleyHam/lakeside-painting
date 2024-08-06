import Footer from "../SiteComponents/Footer"
import Navbar from "../SiteComponents/Navbar"
import ProjectCard from "./ProjectCard"
import Image from 'next/image'
import FilterBar from "./FilterBar"
import TopBanner from "@/app/SiteComponents/TopBanner"
import ProjectSection from "./ProjectSection"
import getProjects from "@/sanity/utils/getProjects"
import ModalClientManager from "../SiteComponents/ModalClientManager"
import FooterBanner from "../SiteComponents/FooterBanner"
export default async function Projects() {
    const projects = await getProjects();
    return (
        <main className="bg-white">
            <ModalClientManager>
            <Navbar />
            <TopBanner heading={'Projects'}/>
            <div className="projects-container bg-gray-50">
        <div className="projects lg:py-[60px] px-[20px] py-[80px] 
            ]   lg:container lg:mx-auto">
            <p className="lg:mt-[20px] text-sm lg:text-base font-light leading-relaxed lg:max-w-[80%]">
                At Little Dog Decorating, we specialize in breathing new life into homes. Our passion is transforming your living spaces with fresh coats of paint and thoughtful touches that make your house feel like home again. From cozy bedrooms to inviting living rooms, we take pride in rejuvenating each corner of your residence.
                <br />
                <br />  

                Take a look at some of our recent home makeovers. Each project showcases our commitment to quality and attention to detail in residential repainting. We believe a well-painted home isn&apos;t just about colors on walls - it&apos;s about creating spaces where families can relax, entertain, and make lasting memories.
            </p>
            <ProjectSection projects={projects}/>
            </div>
            </div>
            <FooterBanner /> 
            <Footer />
            </ModalClientManager>
        </main>
    )   
}