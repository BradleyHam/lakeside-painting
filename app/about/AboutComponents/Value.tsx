import Image from 'next/image'
import { ReactElement } from 'react';

interface ValueProps {
    value: string;
    description: string;
    icon: ReactElement; // This indicates that 'icon' is a JSX element
  }
  
export default function Value ({value, description, icon}: ValueProps) {
    return (
        <div className='w-full rounded   bg-light-bg/10 p-5 flex flex-col space-y-2 lg:min-h-[300px]'> 
             <div className='text-accent-1'>{icon}</div>
            <h3 className='text-primary text-base font-semibold tracking-tighter'>{value}</h3>
            <p className='opacity-80 font-poppins'>{description}</p>
        </div>
    )
} 