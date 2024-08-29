import Image from 'next/image';

const teamMembers = [
  {
    name: 'John Smith',
    role: 'Founder & Lead Painter',
    image: '/images/john-smith.jpg',
    bio: 'With over 15 years of experience, John leads our team with passion and expertise.'
  },
  {
    name: 'Sarah Johnson',
    role: 'Color Consultant',
    image: '/images/sarah-johnson.jpg',
    bio: 'Sarahs eye for color helps clients find the perfect palette for their spaces.'
  },
  {
    name: 'Mike Brown',
    role: 'Senior Painter',
    image: '/images/mike-brown.jpg',
    bio: 'Mike specializes in intricate detail work and historic restorations.'
  }
];

export default function TeamSection() {
  return (
    <section className="bg-light-bg px-side-spacing py-section-spacing">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <Image 
                src={member.image} 
                alt={member.name} 
                width={200} 
                height={200} 
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-center">{member.name}</h3>
              <p className="text-gray-600 mb-2 text-center">{member.role}</p>
              <p className="text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
