import { Metadata } from 'next';
import PaintingCostCalculator from './PaintingCostCalculator';
import Navbar from '@/app/SiteComponents/Navbar';
import TopBanner from '@/app/SiteComponents/TopBanner';
import ProcessSection from '@/app/HomeComponents/ProcessSection';
import FooterBanner from '@/app/SiteComponents/FooterBanner';
import Footer from '@/app/SiteComponents/Footer';

export const metadata: Metadata = {
  title: 'Painting Cost Calculator | Lakeside Painting Queenstown',
  description: 'Estimate the cost of your painting project in Queenstown with our easy-to-use calculator. Get accurate pricing for interior and exterior painting services.',
  keywords: 'painting cost calculator, Queenstown painters, house painting estimate, Lakeside Painting',
  openGraph: {
    title: 'Painting Cost Calculator | Lakeside Painting Queenstown',
    description: 'Estimate the cost of your painting project in Queenstown with our easy-to-use calculator. Get accurate pricing for interior and exterior painting services.',
    url: 'https://www.lakesidepainting.co.nz/cost-calculator',
    type: 'website',
    locale: 'en_NZ',
    siteName: 'Lakeside Painting',
  },
}

export default function CostCalculatorPage() {
  return (
  <div>
  <Navbar />
  <TopBanner 
        headingSmall="Cost Calculator" 
        headingLarge="Get an idea of what your painting project will cost"
      />
  <PaintingCostCalculator />
 
  <ProcessSection bg='white'/>
  <FooterBanner />
  <Footer />
  </div>
  )
}