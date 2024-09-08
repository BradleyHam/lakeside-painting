import { LuPaintbrush } from 'react-icons/lu';
import Link from 'next/link';

const ButtonCta = ({ text, type }: { text: string, type: number }) => {
  return (
    <Link href="/bookingPage" className={`my-auto uppercase shadow-xl rounded font-bold tracking-wider text-xs transition duration-300 ease-in-out flex items-center py-4 px-6 ${type === 1 ? 'text-primary bg-accent-1' : 'bg-primary text-white'}`}>
      <LuPaintbrush size={20} style={{ strokeWidth: '2px' }} />
      <span className='ml-2'>{text}</span>
    </Link>
  );
};

export default ButtonCta;
