import React from "react";
import Footer from "@/app/SiteComponents/Footer";
import Navbar from "@/app/SiteComponents/Navbar";
import getProject from "@/sanity/utils/getProject";
import ContentRenderer from "@/app/SiteComponents/ContentRenderer";
import ExpandableContent from "@/app/projects/[project]/ExpandableContent";
import dynamic from "next/dynamic";
import ModalClientManager from "@/app/SiteComponents/ModalClientManager";
import FooterBanner from "@/app/SiteComponents/FooterBanner";
import { IoCaretBack } from "react-icons/io5";
import Link from "next/link";
import Image from 'next/image'

// Dynamically import the LightboxGallery component to ensure it is only used on the client side
const LightboxGallery = dynamic(() => import("../LightboxGallery"), { ssr: false });

export default async function Project({ params }: { params: { project: string } }) {
  const { project } = params;
  console.log(project)
  const projectData = await getProject(project);

  const { title, categories, content, largeImage, smallImage, mediumImage, imageUrls } = projectData;

  return (
    <div>
      <ModalClientManager>
      <Navbar />
        <div className="top-banner bg-gray-50 h-[220px] lg:h-[300px] relative flex  items-center">
                <Image src={largeImage} alt='something' layout='fill' objectFit="cover"/>
                <div className="absolute inset-0 bg-brand-primary opacity-60"></div>
        </div>
      <div className="bg-gray-50 sm:mx-auto">
        <div className="container mx-auto max-w-5xl py-[80px] px-[20px]">
          <Link href='/projects'>
          <div className="projects-sub-navigation flex items-center text-primary cursor-pointer">
            <IoCaretBack color=''/>
            <h2 className="text-lg font-semibold  text-left tracking-tight font-poppins ">Projects</h2>
          </div>
        </Link>
        <div className="mt-4">
        <h2 className="text-2xl font-semibold text-left tracking-tight font-poppins  text-brand-primary mx-auto ">{title}</h2>
        </div>
        {/* <ExpandableContent> */}
          <ContentRenderer blocks={content} />
        {/* </ExpandableContent> */}
        {imageUrls ? <LightboxGallery imageUrls={imageUrls} /> : <p className="italic text-sm text-red-900">No Images Yet..</p>}
      </div>
      </div>
      <FooterBanner />
      <Footer />
      </ModalClientManager>
    </div>
  );
}
