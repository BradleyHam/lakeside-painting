import { LuPaintbrush } from 'react-icons/lu';
import Link from 'next/link';

interface ButtonCtaProps {
    text: string;
    type: number;
    className?: string; // Add this line
}

export default function ButtonCta({ text, type, className }: ButtonCtaProps) {
    return (
        <Link href="/bookingPage" className={`my-auto uppercase shadow-xl rounded font-bold tracking-wider text-xs transition duration-300 ease-in-out flex items-center py-4 px-6 ${type === 1 ? 'text-primary bg-accent-1' : 'bg-primary text-white'} ${className || ''}`}>
            <LuPaintbrush size={20} style={{ strokeWidth: '2px' }} />
            <span className='ml-2'>{text}</span>
        </Link>
    );
};
