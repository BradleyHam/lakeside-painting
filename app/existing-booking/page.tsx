'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Booking {
  date: string;
  timeSlot: string;
}

export default function ExistingBooking() {
  const [isLoading, setIsLoading] = useState(false);
  const [existingBooking, setExistingBooking] = useState<Booking | null>(null);
  const [pendingBooking, setPendingBooking] = useState<Booking | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch existing booking
    const fetchExistingBooking = async () => {
      const response = await fetch('/api/get-existing-booking');
      if (response.ok) {
        const data = await response.json();
        setExistingBooking(data.booking);
      }
    };

    // Get pending booking from session storage
    const pendingData = sessionStorage.getItem('pendingBooking');
    if (pendingData) {
      setPendingBooking(JSON.parse(pendingData));
    }

    fetchExistingBooking();
  }, []);

  const handleCancelAndRebook = async () => {
    setIsLoading(true);
    try {
      // Get pending booking data
      const pendingData = sessionStorage.getItem('pendingBooking');
      if (!pendingData) {
        throw new Error('No pending booking data found');
      }
      const pendingBooking = JSON.parse(pendingData);

      // Cancel existing booking
      const cancelResponse = await fetch('/api/cancel-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: pendingBooking.email, phone: pendingBooking.phone }),
      });
      if (!cancelResponse.ok) {
        const errorData = await cancelResponse.json();
        throw new Error(errorData.error || 'Failed to cancel existing booking');
      }

      // Create new booking
      const createResponse = await fetch('/api/create-calendar-event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: pendingData,
      });

      if (!createResponse.ok) {
        const errorData = await createResponse.json();
        throw new Error(errorData.error || 'Failed to create new booking');
      }

      // If both operations are successful, clear session storage and redirect to success page
      sessionStorage.removeItem('pendingBooking');
      router.push('/booking-success');
    } catch (error) {
      console.error('Error during cancel and rebook:', error);
      router.push('/booking-error?reason=cancel_rebook_error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Existing Booking Found</h1>
      {existingBooking && (
        <p className="mb-4">
          You have an existing booking on {new Date(existingBooking.date).toLocaleDateString()} at {existingBooking.timeSlot}.
        </p>
      )}
      {pendingBooking && (
        <p className="mb-4">
          You&apos;re attempting to book a new appointment on {new Date(pendingBooking.date).toLocaleDateString()} at {pendingBooking.timeSlot}.
        </p>
      )}
      <p className="mb-4">
        Would you like to cancel your existing booking and create a new one?
      </p>
      <div className="space-x-4">
        <button 
          onClick={handleCancelAndRebook} 
          className="bg-secondary text-white px-6 py-2 rounded font-semibold relative overflow-hidden"
          disabled={isLoading}
        >
          <AnimatePresence mode="wait">
            {!isLoading ? (
              <motion.span
                key="button-text"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="inline-block"
              >
                Cancel Existing and Book New
              </motion.span>
            ) : (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center space-x-2"
              >
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Processing...</span>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
        <Link href="/" className="bg-accent text-primary px-6 py-2 rounded font-semibold inline-block">
          Keep Existing Booking
        </Link>
      </div>
    </div>
  );
}
