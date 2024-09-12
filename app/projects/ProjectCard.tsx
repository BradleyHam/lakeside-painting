import Link from "next/link";
import Image from 'next/image'
import { FaArrowRight } from "react-icons/fa6";

interface ProjectCardProps {
  title: string;
  largeImage: string;
  categories: string[];
  topHeavy: boolean;
  slug: string;
  tags: string[];
  shortDesc: string;
}

export default function ProjectCard({ title, largeImage, categories, topHeavy, slug, tags, shortDesc }: ProjectCardProps) {
  return (
    <div className="group h-full overflow-hidden shadow-[0_20px_25px_-5px_rgba(0,0,0,0.08),0_10px_10px_-5px_rgba(0,0,0,0.08)]">
      <Link href={`/projects/${slug}`} className="w-full h-full flex flex-col">
        <div className="bg-white">
          <div className='card-image h-[250px] relative overflow-hidden'>
            <Image 
              src={largeImage} 
              alt={title} 
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3D4D5C]/80 to-[#3D4D5C]/10 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
            <div className="absolute bottom-4 left-4 flex items-center space-x-2 opacity-0 translate-x-[-20px] transition-all duration-300 ease-in-out delay-150 group-hover:opacity-100 group-hover:translate-x-0">
              <span className="text-white font-semibold">See Project</span>
              <FaArrowRight className="text-white" />
            </div>
          </div>
        </div>

        <div className="card-content px-4 py-8 flex flex-col items-start bg-white text-primary space-y-4 lg:space-y-3">
          <h3 className="text-[16px] font-semibold">{title}</h3>
          <div className="tags flex flex-wrap items-center gap-2">
            {tags.map((tag, index) => (
              <div key={index} className="bg-primary/10 text-primary/70 inline-block px-[10px] py-[6px] cursor-pointer font-semibold text-xs capitalize rounded">
                {tag}
              </div>
            ))}
          </div>
          <p className="text-sm opacity-70">{shortDesc}</p>
        </div>
      </Link>
    </div>
  );
}