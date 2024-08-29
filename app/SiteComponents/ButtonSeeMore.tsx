import { FaArrowRightLong } from "react-icons/fa6";

export default function ButtonSeeMore() {
    return (
    <div className='see-more text-primary font-semibold font-poppins flex items-center space-x-2'>
           <p className="">See Our Projects</p> 
            <FaArrowRightLong />
        </div>
    );
}