import React from 'react'
import { Metadata } from 'next'
import Contact from '../HomeComponents/Contact'
import TopBanner from '../SiteComponents/TopBanner'
import Footer from '../SiteComponents/Footer'

export const metadata: Metadata = {
  title: 'Contact Lakeside Painting | Professional Painters in Queenstown, NZ',
  description: 'Get in touch with Lakeside Painting for expert house painting and decorating services in Queenstown, New Zealand. Request a free quote today!',
  keywords: 'contact, Lakeside Painting, house painters, Queenstown, New Zealand, free quote',
  openGraph: {
    title: 'Contact Lakeside Painting | Professional Painters in Queenstown, NZ',
    description: 'Get in touch with Lakeside Painting for expert house painting and decorating services in Queenstown, New Zealand. Request a free quote today!',
    url: 'https://www.lakesidepainting.co.nz/contact',
    type: 'website',
  },
}

function ContactPage() {
  return (
    <div>
      <TopBanner headingSmall='Contact' headingLarge="Get in touch with us" />
      <Contact />
      <Footer />
    </div>
  )
}

export default ContactPage
