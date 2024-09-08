import React from 'react'
import ProjectCard from '../projects/ProjectCard'
import { FaArrowRightLong } from 'react-icons/fa6'

function ProjectsPreview({projects}) {
  return (
    <div className='flex flex-col items-center px-side-spacing py-section-spacing'>
            <h4 className='text-xs uppercase tracking-widest text-primary font-medium mb-2'>Our Work </h4>
            <h2 className='text-base font-semibold  text-center mb-12'>See some of our recent projects</h2>
              
         
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
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
            <button className='mt-[48px] font-semibold flex items-center space-x-4 px-6 py-4 text-primary rounded-lg group'>
              <span className='transition-all duration-300 group-hover:translate-x-1'>Find more projects</span>
              <FaArrowRightLong className='transition-all duration-300 group-hover:-translate-x-1' />
            </button>
   
    </div>

  )
}

export default ProjectsPreview