import Image from 'next/image';

const LogoGrid = () => {
  return (
    <div className="flex flex-col items-center container mx-auto px-side-spacing pt-[40px] pb-[80px]">
      <h4 className='mr-10 text-primary pb-8  uppercase text-sm'>Trusted By</h4>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-12 lg:gap-x-12 gap-y-8 lg:gap-y-4 items-center">
        {[
          '/images/trustedBy/harcourts.webp',
          '/images/trustedBy/professionals.webp',
          '/images/trustedBy/master-painters.jpg',
          '/images/trustedBy/elleAndRiley.png',
          '/images/trustedBy/rg-logo.svg',
       
       
        
        ].map((src, index) => (
          <div key={index} className={`trusted-brand-icons lg:h-14 lg:w-32 h-16 w-32 relative ${index % 3 === 1 ? 'opacity-80' : 'opacity-60'}`}>
            <Image
              src={src}
              alt={`Logo ${index + 1}`}
              layout="fill"
              objectFit="contain"
              className={`transition-transform  ${
                src.includes('harcourts') ? 'scale-[.8]' : ''
              } ${
                src.includes('master-painters') ? 'scale-[1.2]' : ''
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoGrid;