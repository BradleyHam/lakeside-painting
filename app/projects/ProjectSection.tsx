'use client'
import React, { useState, useEffect } from 'react'
import FilterBar from './FilterBar';
import ProjectCard from './ProjectCard';
import { Project } from '@/types/Project'

const categories = [
  { name: 'All Categories', title: 'all categories' },
  { name: 'interior', title: 'interior' },
  { name: 'exterior', title: 'exterior' }
];

const categoryTitles = categories.map((category) => category.title);

function Projects({ projects }: { projects: Project[] }) {
  const [filteredCategory, setFilteredCategory] = useState('all categories');
  const [displayedProjects, setDisplayedProjects] = useState(projects);

  useEffect(() => {
    console.log('Projects prop:', projects);
    console.log('Filtered category:', filteredCategory);

    const filtered = filteredCategory === 'all categories'
      ? projects
      : projects.filter(project => 
          Array.isArray(project.categories) 
            ? project.categories.includes(filteredCategory)
            : project.categories === filteredCategory
        );

    console.log('Filtered projects:', filtered);
    setDisplayedProjects(filtered);
  }, [filteredCategory, projects]);

  return (
    <div className=''>
      <div className='flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:items-start  px-side-spacing py-section-spacing'>
        <p className='text-md text-primary opacity-80 lg:flex-1 lg:order-2 leading-relaxed'>
          Explore our portfolio of painting projects. From interior repaints to exterior transformations, browse our work to see how we can enhance your space. Use the filter to find projects that match your needs and inspire your next home improvement
        </p>

        <div className='flex flex-col space-y-8 lg:flex-1 lg:order-1'>
          <div className='flex flex-col space-y-4'>
            <h4 className='text-sm uppercase font-semibold text-primary'>select category</h4>
            <FilterBar categories={categoryTitles} onFilterChange={setFilteredCategory} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-side-spacing py-section-spacing bg-light-bg/20 ">
  {displayedProjects.length === 0 ? (
    <p className="col-span-full italic text-sm text-red-900">No projects match the selected filters</p>
  ) : (
    displayedProjects.map((project, index) => (
      <div key={`${project.slug}-${index}`} className="h-full"> {/* Added h-full here */}
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
  )}
</div>
    </div>
  )
}

export default Projects