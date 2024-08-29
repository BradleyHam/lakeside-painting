'use client'
import React, { useState, useEffect } from "react";
import Footer from "@/app/SiteComponents/Footer";
import Navbar from "@/app/SiteComponents/Navbar";
import dynamic from "next/dynamic";
import ModalClientManager from "@/app/SiteComponents/ModalClientManager";
import FooterBanner from "@/app/SiteComponents/FooterBanner";
import { IoCaretBack } from "react-icons/io5";
import Link from "next/link";
import Image from 'next/image'
import projects from '../../../Utils/mockProjects'
import { FaArrowRightLong } from "react-icons/fa6";
import BeforeAfterSlider from "../BeforeAfterSlider";

// Dynamically import the LightboxGallery component to ensure it is only used on the client side
const LightboxGallery = dynamic(() => import("../LightboxGallery"), { ssr: false });

export default function Project({ params }) {
  const [projectData, setProjectData] = useState(null);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const { project } = params;
    const slug = project.replace('%20', '-');
    const foundProject = projects.find((p) => p.slug === slug);
    setProjectData(foundProject);
  }, [params]);

  const openLightbox = (index, isAfterImage = false) => {
    const flattenedIndex = imageShowcase.slice(0, index).reduce((acc, image) => {
      return acc + (image.before && image.after ? 2 : 1);
    }, 0);
  
    // If it's an after image in a BeforeAfterSlider, add 1 to the index
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

  // Prepare lightbox images
  const lightboxImages = imageShowcase.flatMap(image => {
    if (image.before && image.after) {
      return [
        { src: image.before.image, alt: image.before.alt },
        { src: image.after.image, alt: image.after.alt }
      ];
    } else {
      return [{ 
        src: image.before?.image || image.after?.image, 
        alt: image.before?.alt || image.after?.alt
      }];
    }
  });

  return (
  
    <div>

      <ModalClientManager>
        <Navbar />
        <div className="top-banner h-[220px] lg:h-[300px] relative flex items-center">
          <Image src={largeImage} alt={title} layout='fill' objectFit="cover"/>
          <div className="absolute inset-0 bg-primary opacity-50"></div>
        </div>
        <div className="">
          <div className="px-side-spacing py-section-spacing">
            <Link href='/projects'>
              <div className="projects-sub-navigation flex items-center text-primary cursor-pointer">
                <IoCaretBack />
                <h2 className="text-lg font-semibold text-left tracking-tight font-poppins">Projects</h2>
              </div>
            </Link>
            <div className="mt-4 lg:grid lg:grid-cols-2 items-start">
              <div>
                <h1 className="text-lg font-bold text-primary">{title}</h1>
                <div className="tags flex flex-wrap space-x-2 py-4 mb-2">
                  {tags.map((tag, index) => (
                    <div key={index} className="bg-primary/10 px-[12px] py-[8px] text-primary/80 capitalize text-xs font-medium mb-2">{tag}</div>
                  ))}
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="location"><span className="font-semibold mr-2 capitalize">location:</span>Queenstown</div>
                  <div className="hours"><span className="font-semibold mr-2 capitalize">hours:</span>127</div>
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
             <div className="image-showcase grid grid-cols-1 lg:grid-cols-2 gap-5 bg-light-bg px-side-spacing py-section-spacing">
             {imageShowcase.map((image, index) => (
               <div key={index} className="h-[250px] w-full p-2 shadow-lg bg-white cursor-pointer">
                 {image.before && image.after ? (
                   <BeforeAfterSlider
                     beforeImage={image.before.image}
                     afterImage={image.after.image}
                     beforeAlt={image.before.alt}
                     afterAlt={image.after.alt}
                     onBeforeClick={() => openLightbox(index, false)}
                     onAfterClick={() => openLightbox(index, true)}
                   />
                 ) : (
                   <div className="relative h-full w-full" onClick={() => openLightbox(index, false)}>
                     <Image
                       src={image.before?.image || image.after?.image}
                       alt={image.before?.alt || image.after?.alt}
                       fill
                       style={{ objectFit: "cover" }}
                     />
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