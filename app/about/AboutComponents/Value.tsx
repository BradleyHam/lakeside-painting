import Image from 'next/image'
import { ReactElement } from 'react';

interface ValueProps {
    value: string;
    description: string;
    icon: ReactElement; // This indicates that 'icon' is a JSX element
  }
  
export default function Value ({value, description, icon}: ValueProps) {
    return (
        <div className='w-full rounded shadow-lg  bg-white p-8 flex flex-col space-y-2 lg:min-h-[300px]'> 
            {icon}
            <h3 className='text-brand-blue text-[20px] tracking-tighter opacity-80'>{value}</h3>
            <p className='opacity-80 font-poppins'>{description}</p>
        </div>
    )
} 