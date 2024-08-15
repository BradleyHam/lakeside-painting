import Link from "next/link";
import Image from 'next/image'
import { FaArrowRightLong } from "react-icons/fa6";

export default function ProjectCard({title, largeImage, categories, topHeavy, slug, tags, shortDesc}) {
  return (
    <div className="group h-full">
      <Link href={`/projects/${slug}`} className="w-full h-full flex flex-col">
        <div className='card-image h-[300px] relative'>
          <Image src={largeImage} alt={title} layout='fill' objectFit="cover"/>
        </div>

        <div className="card-content px-4 py-6 flex flex-col items-start flex-grow bg-light-bg">
          <h3 className="text-lg mb-4">{title}</h3>
          <div className="tags flex flex-wrap items-center mb-4 gap-2">
            {tags.map((tag, index) => (
              <div key={index} className="bg-primary/10 text-primary/70 inline-block px-[10px] py-[8px] cursor-pointer font-medium text-xs capitalize">
                {tag}
              </div>
            ))}
          </div>
          <p className="text-base mb-4 flex-grow">{shortDesc}</p>
          <button className="mt-auto flex items-center space-x-2 bg-transparent text-primary border border-primary text-sm capitalize tracking-wide px-4 py-2 rounded transition-all duration-300 ease-in-out group-hover:bg-primary group-hover:text-white">
            <span className="font-medium">see project</span> 
            <FaArrowRightLong className="transition-transform ease-in-out group-hover:translate-x-1"/>
          </button>
        </div>
      </Link>
    </div>
  )
}