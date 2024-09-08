'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import { Loader2 } from "lucide-react"

const BookingForm = dynamic(() => import('../SiteComponents/BookingForm/BookingForm'), {
  loading: () => null,
})

export default function BookingPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center space-y-4 py-12">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="text-lg font-medium text-primary">Loading booking form...</p>
          <p className="text-sm text-muted-foreground">Please wait while we prepare your booking experience.</p>
        </div>
      ) : (
        <BookingForm />
      )}
    </div>
  )
}