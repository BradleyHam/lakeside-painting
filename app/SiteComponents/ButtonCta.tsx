// ButtonCta.js
import { LuPaintbrush } from 'react-icons/lu';
import { useModal } from '@/app/SiteComponents/ModalClientManager';
const ButtonCta = ({ text, type }: { text:string, type:number}) => {
  const { handleOpenModal } = useModal();

  return (

      <button onClick={handleOpenModal}  className={`my-auto uppercase shadow-xl rounded font-bold text-md transition duration-300 ease-in-out flex items-center py-4 px-6 ${type === 1 ? 'text-primary bg-accent-1' : 'bg-primary text-white'}`}>
        <LuPaintbrush size={22} style={{ strokeWidth: '2px' }} />
        <span className='ml-2'>{text}</span>
      </button>

  );
};

export default ButtonCta;
