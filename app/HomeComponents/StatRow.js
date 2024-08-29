import Image from 'next/image';

const LogoGrid = () => {
  return (
    <div className="flex flex-col items-center container mx-auto px-side-spacing py-section-spacing">
      <h4 className='mr-10 text-primary pb-8  uppercase'>Trusted By</h4>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-12 gap-y-2 lg:gap-x-10 lg:gap-y-4 items-center">
        {[
          '/images/trustedBy/harcourts.webp',
          '/images/trustedBy/professionals.webp',
          '/images/trustedBy/elleAndRiley.png',
          '/images/trustedBy/master-painters.jpg',
        
        ].map((src, index) => (
          <div key={index} className={`lg:h-18 lg:w-36 h-14 w-32 relative ${index % 3 === 1 ? 'opacity-80' : 'opacity-60'}`}>
            <Image
              src={src}
              alt={`Logo ${index + 1}`}
              layout="fill"
              objectFit="contain"
              className={`transition-transform  ${
                src.includes('harcourts') ? 'scale-[.8]' : ''
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoGrid;