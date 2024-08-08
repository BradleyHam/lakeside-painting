import Image from 'next/image';

const LogoGrid = () => {
  return (
    <div className="container mx-auto px-4 py-12 lg:px-[80px]">
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-2 lg:gap-x-10 lg:gap-y-4 items-center">
        {[
          '/images/trustedBy/harcourts.webp',
          '/images/trustedBy/master-painters.jpg',
          '/images/trustedBy/professionals.webp',
          '/images/trustedBy/harcourts.webp',
          '/images/trustedBy/master-painters.jpg',
          '/images/trustedBy/professionals.webp'
        ].map((src, index) => (
          <div key={index} className={`h-20 relative ${index % 3 === 1 ? 'opacity-80' : 'opacity-60'}`}>
            <Image
              src={src}
              alt={`Logo ${index + 1}`}
              layout="fill"
              objectFit="contain"
              className={`transition-transform hover:scale-105 ${
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