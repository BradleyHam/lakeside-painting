import React from 'react';
import { format, setHours, setMinutes } from 'date-fns';

const TimeSlotSelector = ({ selectedTimeSlot, handleTimeSlotClick, selectedDate, setShowForm }) => {
  const generateTimeSlots = () => {
    const slots = [];
    for (let i = 9; i < 18; i++) {
      for (let j = 0; j < 60; j += 30) {
        const time = setMinutes(setHours(new Date(), i), j);
        slots.push(format(time, 'HH:mm'));
      }
    }
    return slots;
  };
 
  const timeSlots = generateTimeSlots();

  const bothSelected = selectedDate && selectedTimeSlot;

  return (
    <div>
    <div className="mt-4 overflow-y-auto max-h-[50vh]">
      <div className="grid gap-2">
        {timeSlots.map((timeSlot) => (
          <button
            key={timeSlot}
            onClick={() => handleTimeSlotClick(timeSlot)}
            className={`p-2 text-center rounded ${
              selectedTimeSlot === timeSlot ? 'bg-accent text-primary font-bold' : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {timeSlot}
          </button>
        ))}
      </div>
     
    </div>
    {
        bothSelected && (
          <button type="submit" onClick={() => setShowForm(true)} className=" mt-6 bg-secondary text-white px-4 py-2 rounded font-semibold">Proceed to book</button>
        )
    }
  
    
     </div>
  );
};

export default TimeSlotSelector;