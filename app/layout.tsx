import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Playfair_Display, Raleway } from "next/font/google";
import ModalClientManager from "./SiteComponents/ModalClientManager";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800', '900']
});
const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Lakeside Painting | Expert Painters in Queenstown, NZ',
  description: 'Lakeside Painting offers professional interior and exterior painting services in Queenstown. Transform your home or business with our expert team.',
  keywords: 'painting services, Queenstown painters, interior painting, exterior painting, home improvement',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable} ${raleway.variable}`}>
      <body>
        <ModalClientManager>
          {children}
        </ModalClientManager>
      </body>
    </html>
  );
}
