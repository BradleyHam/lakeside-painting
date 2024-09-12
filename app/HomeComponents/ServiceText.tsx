import { FaCheck } from "react-icons/fa";
import ButtonSeeMore from "../SiteComponents/ButtonSeeMore";
import Link from "next/link";

export default function ServiceText({heading, bulletPoints}: {heading: string, bulletPoints: string[]}) {
    return (
        <>
            <div className='lg:w-1/3 bg-light-bg  p-6 flex flex-col justify-between text-primary'>
            <div className='top-content mb-6'>
            <h3 className="text-base font-bold">{heading}</h3>
            <ul className='list-disc list-inside  list-none pt-2 space-y-1 font-lato'>
    
                {bulletPoints.map((point, index) =>   <li key={index} className='flex items-center space-x-2'><div className=""><FaCheck/></div><p className='opacity-90'>{point}</p></li>)}
            </ul>
            </div>

            <Link href="/projects">
             <ButtonSeeMore label="See Our Projects" />
            </Link>
        </div>    
    </>    
    )
}