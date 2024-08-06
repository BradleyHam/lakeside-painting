// ButtonCta.js
import { LuPaintbrush } from 'react-icons/lu';
import { useModal } from '@/app/SiteComponents/ModalClientManager';
const ButtonCta = ({ text }: { text:string }) => {
  const { handleOpenModal } = useModal();

  return (
    <div onClick={handleOpenModal} className=" space-x-2 tracking-wide  p-4 px-6 flex items-center rounded-lg shadow-xl active:shadow-md hover:-translate-y-[1px] cursor-pointer active:translate-y-[1px] bg-accent text-primary">
      <button className="my-auto uppercase font-bold text-md transition duration-300 ease-in-out flex items-center ">
        <LuPaintbrush size={25} style={{ strokeWidth: '2px' }} />
        <span className='ml-2'>{text}</span>
      </button>
    </div>
  );
};

export default ButtonCta;
