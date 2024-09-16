import React from 'react'
import ProjectCard from '../projects/ProjectCard'
import { FaArrowRightLong } from 'react-icons/fa6'
import SectionHeading from '../SiteComponents/SectionHeading'; // Import the new component
import ButtonSeeMore from '../SiteComponents/ButtonSeeMore';

function ProjectsPreview({projects}) {
  return (
    <div className='flex flex-col lg:items-center px-side-spacing py-section-spacing'>
            <SectionHeading 
              subtitle="Our Work" 
              title="See some of our recent projects" 
              type={1}
            />
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 ">
                {projects.map((project, index) => (
                <div key={`${project.slug}-${index}`} className="h-full bg-white rounded-lg "> {/* Added h-full here */}
                  <ProjectCard
                    largeImage={project.largeImage}
                    title={project.title}
                    categories={project.categories}
                    topHeavy={index % 2 === 0}
                    slug={project.slug}
                    tags={project.tags}
                    shortDesc={project.shortDesc}
                  />
                </div>
              ))
              }
          </div>
          <div className='flex md:justify-center '>
            <ButtonSeeMore label='Find more projects' linkTo='/projects'/>
          </div>
   
    </div>

  )
}

export default ProjectsPreview