'use client'
import { useState } from 'react'
import DateSelector from './DateSelector'
import TimeSlotSelector from './TimeSlotSelector'
import LeftSide from './LeftSide'
import BookingDetailsForm from './BookingDetailsForm'

export default function BookingForm() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)

  const handleDateClick = (date: Date) => {
    setSelectedDate(date)
    setSelectedTimeSlot(null)
  }

  const handleTimeSlotClick = (timeSlot: string) => {
    setSelectedTimeSlot(timeSlot)
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/3">
        <LeftSide 
          selectedDate={selectedDate} 
          selectedTimeSlot={selectedTimeSlot} 
          showForm={showForm}
        />
      </div>
      {!showForm ? (
        <>
          <div className="md:w-1/3">
            <DateSelector
              currentDate={currentDate}
              setCurrentDate={setCurrentDate}
              selectedDate={selectedDate}
              handleDateClick={handleDateClick}
              today={new Date()}
              tomorrow={new Date(new Date().setDate(new Date().getDate() + 1))}
            />
          </div>
          <div className="md:w-1/3">
            {selectedDate && (
              <TimeSlotSelector
                selectedTimeSlot={selectedTimeSlot || undefined}
                handleTimeSlotClick={handleTimeSlotClick}
                selectedDate={selectedDate}
                setShowForm={setShowForm}
              />
            )}
          </div>
        </>
      ) : (
        <div className="md:w-2/3">
          <BookingDetailsForm
            selectedDate={selectedDate}
            selectedTimeSlot={selectedTimeSlot}
            setShowForm={setShowForm}
          />
        </div>
      )}
    </div>
  )
}