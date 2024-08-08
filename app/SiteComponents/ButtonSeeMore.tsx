import { FaArrowRightLong } from "react-icons/fa6";

export default function ButtonSeeMore() {
    return (
    <div className='see-more text-white font-poppins flex items-center space-x-2 mt-[40px]'>
           <span>See Our Projects</span> 
            <FaArrowRightLong />
        </div>
    );
}