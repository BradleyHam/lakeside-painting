'use client'

import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Loader2 } from "lucide-react"

const BookingForm = dynamic(() => import('../SiteComponents/BookingForm/BookingForm'), {
  loading: () => null,
})

// export const metadata: Metadata = {
//   title: 'Book Your Professional Painting Service | Lakeside Painting Queenstown',
//   description: 'Schedule your home or business painting project with Lakeside Painting in Queenstown. Easy online booking, free quotes, and expert service guaranteed.',
//   keywords: 'painting service, book painter, Queenstown painter, house painting, commercial painting',
//   openGraph: {
//     title: 'Book Your Painting Project | Lakeside Painting Queenstown',
//     description: 'Transform your space with Lakeside Painting. Book online for expert painting services in Queenstown. Free quotes, flexible scheduling.',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: 'Book Your Painting Project | Lakeside Painting Queenstown',
//     description: 'Transform your space with Lakeside Painting. Book online for expert painting services in Queenstown. Free quotes, flexible scheduling.'
//   },
// }

export default function BookingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={
        <div className="flex flex-col items-center justify-center space-y-4 py-12">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="text-lg font-medium text-primary">Loading booking form...</p>
          <p className="text-sm text-muted-foreground">Please wait while we prepare your booking experience.</p>
        </div>
      }>
        <BookingForm />
      </Suspense>
    </div>
  )
}