import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

export default function ButtonSeeMore({label, linkTo}: {label: string, linkTo: string}) {
    return (
      <Link href={`${linkTo}`} className=' font-semibold flex items-center space-x-4  text-primary rounded-lg group'>
        <span className='transition-all duration-300 group-hover:translate-x-1'>{label}</span>
        <FaArrowRightLong className='transition-all duration-300 group-hover:-translate-x-1' />
      </Link>
    );
}