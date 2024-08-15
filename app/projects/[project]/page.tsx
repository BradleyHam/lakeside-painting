import React from "react";
import Footer from "@/app/SiteComponents/Footer";
import Navbar from "@/app/SiteComponents/Navbar";
import dynamic from "next/dynamic";
import ModalClientManager from "@/app/SiteComponents/ModalClientManager";
import FooterBanner from "@/app/SiteComponents/FooterBanner";
import { IoCaretBack } from "react-icons/io5";
import Link from "next/link";
import Image from 'next/image'
import projects from '../../../Utils/mockProjects'
import { Divide } from "lucide-react";
import { FaArrowRightLong } from "react-icons/fa6";

// Dynamically import the LightboxGallery component to ensure it is only used on the client side
const LightboxGallery = dynamic(() => import("../LightboxGallery"), { ssr: false });

export default async function Project({ params }: { params: { project: string } }) {
  const { project } = params;
  const slug = project.replace('%20', '-')
  const projectData = projects.find((p) => p.slug === slug);
  const { title, largeImage, tags, content } = projectData;

  // Split content into paragraphs
  const contentParagraphs = content.split('\n\n');

  return (
    <div>
      <ModalClientManager>
        <Navbar />
        <div className="top-banner h-[220px] lg:h-[300px] relative flex items-center">
          <Image src={largeImage} alt={title} layout='fill' objectFit="cover"/>
          <div className="absolute inset-0 bg-primary opacity-50"></div>
        </div>
        <div className="sm:mx-auto">
          <div className="px-5 lg:px-[80px] py-[40px]">
            <Link href='/projects'>
              <div className="projects-sub-navigation flex items-center text-primary cursor-pointer">
                <IoCaretBack />
                <h2 className="text-lg font-semibold text-left tracking-tight font-poppins">Projects</h2>
              </div>
            </Link>
            <div className="mt-4 lg:grid lg:grid-cols-2 items-start">
              <div>
                <h2 className="text-2xl font-semibold text-left tracking-tight font-poppins text-brand-primary mx-auto">{title}</h2>
                <div className="tags flex flex-wrap space-x-2  py-4 mb-2">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 gap-5 bg-light-bg py-[80px] lg:px-[80px] px-0">
            {projectData.imageShowcase.map((image, index) => (
              <div key={index} className={`h-[250px] w-full grid gap-2 p-2 shadow-lg bg-white ${image.before && image.after ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {image.before && (
                  <div className="bg-gray-200 h-full w-full relative">
                    <Image src={image.before.image} alt={image.before.alt} layout={'fill'} objectFit="cover"/>
                    <div className="absolute bottom-4 left-0 flex items-center text-primary">
                      <div className="z-20 relative flex items-center px-4 py-2 space-x-2 text-primary">
                        <h3 className="text-primary text-sm capitalize font-semibold">before</h3>
                      </div>   
                      <div className="bg-white/95 absolute inset-0 opacity-90"></div>
                    </div>
                  </div>
                )}
                {image.after && (
                  <div className="bg-gray-200 h-full w-full relative">
                    <Image src={image.after.image} alt={image.after.alt} layout={'fill'} objectFit="cover"/>
                    <div className="absolute bottom-4 left-0 flex items-center text-primary">
                      <div className="z-20 relative flex items-center px-4 py-2 space-x-2 text-primary">
                        <h3 className="text-primary text-sm capitalize font-semibold">after</h3>
                      </div>   
                      <div className="bg-white/90 absolute inset-0"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <FooterBanner />
        <Footer />
      </ModalClientManager>
    </div>
  );
}