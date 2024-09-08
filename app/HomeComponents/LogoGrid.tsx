import Image from 'next/image';

interface LogoItem {
  src: string;
  alt: string;
  companyName: string;
  industry: string;
}

const logoItems: LogoItem[] = [
  {
    src: '/images/trustedBy/harcourts.webp',
    alt: 'Harcourts Real Estate - Trusted client of Lakeside Painting in Queenstown',
    companyName: 'Harcourts',
    industry: 'Real Estate'
  },
  {
    src: '/images/trustedBy/professionals.webp',
    alt: 'Professionals Real Estate - Partnered with Lakeside Painting for property improvements',
    companyName: 'Professionals',
    industry: 'Real Estate'
  },
  {
    src: '/images/trustedBy/master-painters.jpg',
    alt: 'Master Painters NZ - Lakeside Painting is a certified member, ensuring quality standards',
    companyName: 'Master Painters NZ',
    industry: 'Painting Certification'
  },
  {
    src: '/images/trustedBy/elleAndRiley.png',
    alt: 'Elle & Riley - Commercial painting project by Lakeside Painting in Queenstown',
    companyName: 'Elle & Riley',
    industry: 'Retail'
  },
  {
    src: '/images/trustedBy/rg-logo.svg',
    alt: 'RG Logo - Another satisfied commercial client of Lakeside Painting',
    companyName: 'RG',
    industry: 'Business'
  },
];

const LogoGrid = () => {
  return (
    <div className="flex flex-col items-center container mx-auto px-side-spacing py-section-spacing">
      <h4 className='mr-10 text-primary pb-8 uppercase'>Trusted By</h4>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-12 lg:gap-x-12 gap-y-8 lg:gap-y-4 items-center">
        {logoItems.map((item, index) => (
          <div key={index} className={`trusted-brand-icons lg:h-14 lg:w-32 h-16 w-32 relative ${index % 3 === 1 ? 'opacity-80' : 'opacity-60'}`}>
            <Image
              src={item.src}
              alt={item.alt}
              layout="fill"
              objectFit="contain"
              className={`transition-transform ${
                item.companyName.toLowerCase().includes('harcourts') ? 'scale-[.8]' : ''
              } ${
                item.companyName.toLowerCase().includes('master-painters') ? 'scale-[1.2]' : ''
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoGrid;