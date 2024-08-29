import React from 'react'
import ProjectCard from '../projects/ProjectCard'
import { FaArrowRightLong } from 'react-icons/fa6'

function ProjectsPreview({projects}) {
  return (
    <div className='flex flex-col items-center px-side-spacing py-section-spacing'>
           <h2 className='text-lg font-medium'>Our Recent Projects</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[32px]">
                {projects.map((project, index) => (
                <div key={`${project.slug}-${index}`} className="h-full bg-white "> {/* Added h-full here */}
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
            {/* <button className='mt-[32px]  font-bold  flex items-center space-x-4'><span>Find more projects</span> <FaArrowRightLong /> </button>
    */}
    </div>

  )
}

export default ProjectsPreview