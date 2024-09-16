'use client'
import React from "react";
import Footer from "@/app/SiteComponents/Footer";
import Navbar from "@/app/SiteComponents/Navbar";
import ModalClientManager from "@/app/SiteComponents/ModalClientManager";
import FooterBanner from "@/app/SiteComponents/FooterBanner";
import { IoCaretBack } from "react-icons/io5";
import Link from "next/link";
import Image from 'next/image'
import projects from '../../../Utils/mockProjects'
import { FaArrowRightLong } from "react-icons/fa6";
import BeforeAfterSlider from "../BeforeAfterSlider";
import ProjectCard from '@/app/projects/ProjectCard';
import ProcessSection from "@/app/HomeComponents/ProcessSection";
import { Metadata, ResolvingMetadata } from 'next'
import LightboxGallery from '@/app/projects/LightboxGallery';
import { Project as ProjectType } from '../../../types/Project'; // Assuming you have a Project type defined

type Props = {
  params: { project: string }
}

// export async function generateMetadata(
//   { params }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const slug = params.project.replace('%20', '-')
//   const project = projects.find((p) => p.slug === slug)

//   if (!project) {
//     return {
//       title: 'Project Not Found | Lakeside Painting',
//       description: 'The requested project could not be found. Explore our other painting and decorating projects in Queenstown, New Zealand.',
//     }
//   }

//   const { title, shortDesc, tags } = project

//   return {
//     title: `${title} | Lakeside Painting Projects`,
//     description: shortDesc || `Explore our ${title} project. Professional painting and decorating services in Queenstown, NZ by Lakeside Painting.`,
//     keywords: [...tags, 'painting', 'decorating', 'Queenstown', 'New Zealand'],
//     openGraph: {
//       title: `${title} - Lakeside Painting Project`,
//       description: shortDesc,
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: `${title} - Lakeside Painting Project`,
//       description: shortDesc,
//     },
//   }
// }

export default function Project({ params }: { params: { project: string } }) {
  const [projectData, setProjectData] = React.useState<ProjectType | null>(null);
  const [lightboxIsOpen, setLightboxIsOpen] = React.useState(false);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const slug = params.project.replace('%20', '-');
    const foundProject = projects.find((p) => p.slug === slug);
    setProjectData(foundProject || null);
  }, [params]);

  const openLightbox = (index: number, isAfterImage = false) => {
    if (!projectData) return;

    const flattenedIndex = projectData.imageShowcase.slice(0, index).reduce((acc, image) => {
      return acc + (image.before && image.after ? 2 : 1);
    }, 0);
  
    const adjustedIndex = isAfterImage ? flattenedIndex + 1 : flattenedIndex;
  
    setCurrentImageIndex(adjustedIndex);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {  
    setLightboxIsOpen(false);
  };

  if (!projectData) {
    return <div>Loading...</div>;
  }

  const { title, largeImage, tags, content, imageShowcase } = projectData;
  const contentParagraphs = content.split('\n\n');

  const lightboxImages = imageShowcase.flatMap(image => {
    if (image.before && image.after) {
      return [
        { src: image.before.image, alt: image.before.alt },
        { src: image.after.image, alt: image.after.alt }
      ];
    } else {
      return [{ 
        src: image.before?.image || image.after?.image || '', 
        alt: image.before?.alt || image.after?.alt || ''
      }];
    }
  });

  const otherProjects = projects
    .filter(p => p.slug !== params.project)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
  
    <div className=''>
      <ModalClientManager>
        <Navbar />
        <div className="top-banner h-[220px] lg:h-[300px] relative flex items-center mt-[var(--navbar-height-mobile)] lg:mt-[var(--navbar-height-desktop)]">
          <Image src={largeImage} alt={title} layout='fill' objectFit="cover"/>
          <div className="absolute inset-0 bg-primary opacity-50"></div>
        </div>
        <div className="">
          <div className="px-side-spacing py-section-spacing">
            <Link href='/projects'>
              <div className="projects-sub-navigation flex items-center text-primary cursor-pointer">
                <IoCaretBack />
                <h2 className="text-base font-normal text-left tracking-tight font-poppins">Projects</h2>
              </div>
            </Link>
            <div className="mt-4 lg:grid lg:grid-cols-2 items-start">
              <div>
                <h1 className="text-lg font-semibold text-primary">{title}</h1>
                <div className="tags flex flex-wrap space-x-2 mt-6 mb-2">
                  {tags.map((tag, index) => (
                    <div key={index} className="bg-primary/10 px-[12px] py-[8px] text-primary/80 capitalize text-xs font-medium mb-2">{tag}</div>
                  ))}
                </div>
              </div>
              <div className="mt-5 lg:mt-0 leading-relaxed">
                {contentParagraphs.map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
          {imageShowcase.length > 0 && (
             <div className="image-showcase grid grid-cols-1 lg:grid-cols-2 gap-3 bg-light-bg px-side-spacing py-section-spacing">
             {imageShowcase.map((image, index) => (
               <div key={index} className="h-[250px] w-full p-2  cursor-pointer">
                 {image.before && image.after ? (
                   <BeforeAfterSlider
                     beforeImage={image.before.image}
                     afterImage={image.after.image}
                     beforeAlt={image.before.alt}
                     afterAlt={image.after.alt}
                     initialPosition={100}
                     onBeforeClick={() => openLightbox(index, false)}
                     onAfterClick={() => openLightbox(index, true)}
                   />
                 ) : (
                   <div className="relative h-full w-full bg-white shadow-xl" onClick={() => openLightbox(index, false)}>
                    <div className="absolute inset-2 ">
                     <Image
                       src={image.before?.image || image.after?.image || ''}
                       alt={image.before?.alt || image.after?.alt || ''}
                       fill
                       style={{ objectFit: "cover" }}
                       className=""
                     />
                     </div>
                     <div className="absolute bottom-4 left-0 flex items-center text-primary">
                       <div className="z-20 relative flex items-center px-4 py-2 space-x-2 text-primary">
                         <h3 className="text-primary text-sm capitalize font-semibold">
                           {image.before ? 'before' : 'after'}
                         </h3>
                       </div>   
                       <div className="bg-white/90 absolute inset-0"></div>
                     </div>
                   </div>
                 )}
               </div>
             ))}
           </div>
          )}
        </div>
        <section className="px-side-spacing py-section-spacing">
          <div className="flex flex-col items-center">
          <h2 className='text-base font-semibold mb-12'>Explore more of our projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
              {otherProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  largeImage={project.largeImage}
                  categories={project.categories}
                  topHeavy={false}
                  slug={project.slug}
                  tags={project.tags}
                  shortDesc={project.shortDesc}
                />
              ))}
            </div>
            <div className="text-center">
              <Link href="/projects" className="mt-[48px] font-semibold flex items-center space-x-4 px-6 py-4 text-primary rounded-lg group">
                <span className='transition-all duration-300 group-hover:translate-x-1 '>See all projects</span>    
                <FaArrowRightLong className='transition-all duration-300 group-hover:-translate-x-1' />
              </Link>
            </div>
          </div>
        </section>
        <ProcessSection bg="light" />
        <FooterBanner />
        <Footer />
        {lightboxIsOpen && lightboxImages.length > 0 && (
          <LightboxGallery
            images={lightboxImages}
            currentIndex={currentImageIndex}
            onClose={closeLightbox}
          />
        )}
      </ModalClientManager>
    </div>
  );
}