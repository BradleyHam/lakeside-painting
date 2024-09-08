import Image from 'next/image';

export default function AboutSection() {
    return (
        <section className="bg-white px-side-spacing py-section-spacing">
            <div className="container mx-auto lg:max-w-[70%]">
                <h1 className="text-3xl font-bold mb-6">Queenstown&apos;s Trusted Painting Experts</h1>
                <div className="lg:flex lg:items-center lg:space-x-8">
                    <div className="lg:w-1/2 mb-6 lg:mb-0">
                        <Image 
                            src="/images/lakeside-painting-team.jpg" 
                            alt="Lakeside Painting&apos;s expert team of professional painters in Queenstown, NZ - Delivering quality interior and exterior painting services since 2010" 
                            width={600} 
                            height={400} 
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <p className="mb-4">
                            Welcome to Lakeside Painting, Queenstown&apos;s premier painting and decorating service. Since our establishment in 2010, we&apos;ve been transforming homes and businesses across the region with our expert craftsmanship and attention to detail.
                        </p>
                        <p className="mb-4">
                            Our team of skilled professionals brings over 25 years of combined experience to every project. We pride ourselves on using eco-friendly, high-quality paints and materials to ensure lasting beauty and protection for your property.
                        </p>
                        <p>
                            At Lakeside Painting, we&apos;re not just about applying paint – we&apos;re about creating spaces that inspire and delight. From historic restorations to modern makeovers, we approach each project with creativity, precision, and a commitment to exceeding our clients&apos; expectations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}