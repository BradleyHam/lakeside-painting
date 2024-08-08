import Image from 'next/image';

const LogoGrid = () => {
  return (
    <div  className="container mx-auto px-4">
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 items-center">
        {[
          '/images/trustedBy/harcourts.png',
          '/images/trustedBy/master-painters.jpg',
          '/images/trustedBy/professionals.webp',
          '/images/trustedBy/harcourts.png',
          '/images/trustedBy/master-painters.jpg',
          '/images/trustedBy/professionals.webp'
        ].map((src, index) => (
          <div key={index} className={`aspect-w-16 aspect-h-9 relative ${index % 3 === 1 ? 'opacity-80' : 'opacity-60'}`}>
            <Image
              src={src}
              alt={`Logo ${index + 1}`}
              layout="fill"
              objectFit="contain"
              className="transition-transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoGrid;