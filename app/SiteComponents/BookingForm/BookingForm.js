'use client'
import React, { useState, useEffect } from 'react';
import { startOfDay, addDays } from 'date-fns';
import DateSelector from './DateSelector';
import TimeSlotSelector from './TimeSlotSelector';
import BookingDetailsForm from './BookingDetailsForm';
import LeftSide from './LeftSide';

const BookingForm = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const today = startOfDay(new Date());
  const tomorrow = addDays(today, 1);

  useEffect(() => {
    setSelectedDate(tomorrow);
  }, []);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
    setShowForm(false);
  };

  const handleTimeSlotClick = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
    setShowForm(true);
  };

  return (
    <div className="mx-auto bg-white md:max-w-6xl min-h-[100vh] flex flex-col justify-center ">
      <div className={`border p-8 grid ${showForm ? 'grid-cols-[1fr_2fr]' : 'grid-cols-[1fr_2fr_1fr]'} gap-[40px] min-h-[70vh] rounded-xl shadow-md`}>
        <LeftSide 
          selectedDate={selectedDate} 
          selectedTimeSlot={selectedTimeSlot} 
          showForm={showForm}
        />
        {showForm ? (
          <BookingDetailsForm
            selectedDate={selectedDate}
            selectedTimeSlot={selectedTimeSlot}
            setShowForm={setShowForm}
          />
        ) : (
          <>
            <DateSelector
              currentDate={currentDate}
              setCurrentDate={setCurrentDate}
              selectedDate={selectedDate}
              handleDateClick={handleDateClick}
              today={today}
              tomorrow={tomorrow}
            />
            <TimeSlotSelector
              selectedTimeSlot={selectedTimeSlot}
              selectedDate={selectedDate}
              handleTimeSlotClick={handleTimeSlotClick}
              setShowForm
            />
          </>
        )}
      </div>
    </div>
  );
};

export default BookingForm;