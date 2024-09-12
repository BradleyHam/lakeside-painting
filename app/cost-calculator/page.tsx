import { Metadata } from 'next';
import PaintingCostCalculator from './PaintingCostCalculator';

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
  return <PaintingCostCalculator />;
}