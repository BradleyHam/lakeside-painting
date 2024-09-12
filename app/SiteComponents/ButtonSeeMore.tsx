import { FaArrowRightLong } from "react-icons/fa6";

export default function ButtonSeeMore({label}: {label: string}) {
    return (
        <button className=' font-semibold flex items-center space-x-4  text-primary rounded-lg group'>
        <span className='transition-all duration-300 group-hover:translate-x-1'>{label}</span>
        <FaArrowRightLong className='transition-all duration-300 group-hover:-translate-x-1' />
      </button>
    );
}