import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BookingDetailsFormProps {
  selectedDate: Date | null;
  selectedTimeSlot: string | null;
  setShowForm: (show: boolean) => void;
}

const BookingDetailsForm: React.FC<BookingDetailsFormProps> = ({ selectedDate, selectedTimeSlot, setShowForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: 'Queenstown',
    objectives: '',
    date: '',
    timeSlot: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setFormData(prevData => ({
      ...prevData,
      date: selectedDate ? selectedDate.toISOString().split('T')[0] : '',
      timeSlot: selectedTimeSlot || ''
    }));
  }, [selectedDate, selectedTimeSlot]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (validateForm()) {
      try {
        const response = await fetch('/api/create-calendar-event', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          const errorData = await response.json();
          if (errorData.error === 'existing_booking') {
            // Save current form data to session storage
            sessionStorage.setItem('pendingBooking', JSON.stringify(formData));
            router.push('/existing-booking');
          } else {
            router.push('/booking-error?reason=general_error');
          }
          return;
        }

        const result = await response.json();
        console.log('Event created:', result);
        router.push('/booking-success');
      } catch (error) {
        console.error('Error:', error);
        router.push('/booking-error?reason=general_error');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
    }
  };

  const formatTimeSlot = (slot: string) => {
    const [hours, minutes] = slot.split(':');
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));
    return format(date, 'h:mm a');
  };

  async function handleCancelAndRebook(email: string, phone: string) {
    try {
      // Step 1: Cancel existing booking
      const cancelResponse = await fetch('/api/cancel-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, phone }),
      });

      if (!cancelResponse.ok) {
        const errorData = await cancelResponse.json();
        throw new Error(errorData.error || 'Failed to cancel existing booking');
      }

      // Step 2: Create new booking
      const createResponse = await fetch('/api/create-calendar-event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!createResponse.ok) {
        const errorData = await createResponse.json();
        throw new Error(errorData.error || 'Failed to create new booking');
      }

      const result = await createResponse.json();
      console.log('New event created:', result);
      router.push('/booking-success');
    } catch (error) {
      console.error('Error during cancel and rebook:', error);
      router.push('/booking-error?reason=cancel_error');
    }
  }

  return (
    <AnimatePresence mode="wait">
      {!isSubmitting ? (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div className="bg-white shadow-lg border text-primary p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
            <p className="text-sm mb-4 text-gray-600">Note: We currently only service the Queenstown area.</p>
            {['name', 'email', 'phone', 'address'].map((field) => (
              <div key={field} className="mb-4">
                <label className="block mb-2 opacity-70 text-sm capitalize">{field} *</label>
                <input 
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleInputChange}
                  className={`w-full p-2 bg-gray-100 rounded text-sm ${errors[field] ? 'border-red-500 border' : ''}`}
                  required 
                />
                {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
              </div>
            ))}
            <div className="mb-4">
              <label className="block mb-2 opacity-70 text-sm">City</label>
              <input 
                type="text" 
                name="city"
                value={formData.city}
                className="w-full p-2 bg-gray-200 rounded text-sm" 
                disabled 
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 opacity-70 text-sm">Project details <span className='opacity-70'>(optional)</span></label>
              <textarea 
                name="objectives"
                value={formData.objectives}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-100 rounded text-sm" 
                rows={4}
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block mb-2 opacity-70 text-sm">Selected Date and Time</label>
              <input 
                type="text" 
                value={selectedDate && selectedTimeSlot
                  ? `${format(selectedDate, 'MMMM d, yyyy')} ${formatTimeSlot(selectedTimeSlot)}`
                  : 'No date and time selected'
                }
                className="w-full p-2 bg-gray-200 rounded text-sm" 
                disabled 
              />
            </div>
            <div className="flex justify-between mt-6">
              <button 
                type="button" 
                onClick={() => setShowForm(false)} 
                className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md font-semibold transition duration-300 ease-in-out hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
              >
                Back
              </button>
              <button 
                type="submit" 
                className="bg-secondary text-white px-6 py-2 rounded-md font-semibold transition duration-300 ease-in-out  "
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </motion.form>
      ) : (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col items-center justify-center space-y-4 py-8"
        >
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="text-center text-lg font-medium text-gray-800">
            Submitting your booking...
          </p>
          <p className="text-center text-sm text-gray-600">
            Please wait while we process your request.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingDetailsForm;

