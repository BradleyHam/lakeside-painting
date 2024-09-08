import React from 'react'
import Contact from '../HomeComponents/Contact'
import TopBanner from '../SiteComponents/TopBanner'
import ProcessSection from '../HomeComponents/ProcessSection'
import FooterBanner from '../SiteComponents/FooterBanner'
import Footer from '../SiteComponents/Footer'

function page() {
  return (
    <div>
          <TopBanner headingSmall='Contact' headingLarge="Get in touch with us" />
        <Contact />
        <Footer />
    </div>
  )
}

export default page
