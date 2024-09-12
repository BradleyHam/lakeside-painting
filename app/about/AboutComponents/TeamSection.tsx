import Image from 'next/image';
import SectionHeading from '@/app/SiteComponents/SectionHeading';

const teamMembers = [
  {
    name: 'John Smith',
    role: 'Founder & Lead Painter',
    image: '/images/team/person-one.png',
    bio: 'With over 15 years of experience, John leads our team with passion and expertise.'
  },
  {
    name: 'Sarah Johnson',
    role: 'Color Consultant',
    image: '/images/team/person-two.jpg',
    bio: 'Sarahs eye for color helps clients find the perfect palette for their spaces.'
  },
  {
    name: 'Mike Brown',
    role: 'Senior Painter',
    image: '/images/team/person-three.jpeg',
    bio: 'Mike specializes in intricate detail work and historic restorations.'
  },
  {
    name: 'Mike Brown',
    role: 'Senior Painter',
    image: '/images/team/person-four.jpg',
    bio: 'Mike specializes in intricate detail work and historic restorations.'
  }
];

export default function TeamSection() {
  return (
    <section className="bg-light-bg/10 px-side-spacing py-section-spacing ">
      <div className="container mx-auto flex flex-col items-center">
        <SectionHeading 
          subtitle='Our Experts' 
          title='Meet Our Talented Team' 
          type={1} 
        />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-xl shadow-black/5 overflow-hidden">
              <div className="w-full h-[250px] relative">
                <Image 
                  src={member.image} 
                  alt={`team member of lakeside painting in Queenstown - ${member.name}`} 
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold">{member.name}</h3>
                <p className="text-primary text-xs mb-2 mt-0 uppercase tracking-wider font-semibold opacity-70">{member.role}</p>
                <p className="text-sm pb-4">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
