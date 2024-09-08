import React from 'react';
import { format } from 'date-fns';
import Image from 'next/image';
import { IoMdTime } from "react-icons/io";
import { BsCalendarDate } from "react-icons/bs";

const LeftSide = ({ selectedDate, selectedTimeSlot, showForm }) => {
  const bothSelected = selectedDate && selectedTimeSlot;

  return (
    <div className='text-primary'>
      <div className="mb-4">
        
        <Image src='/images/logo.png' alt='logo' height={100} width={150}/>
        {bothSelected && (
          <div className=" mt-4 flex flex-col space-y-2">
          
            <p className="text-sm font-semibold flex space-x-2 items-center"><IoMdTime /><span>{format(selectedDate, 'dd MMMM yyyy')}</span></p>
            <p className="text-sm font-semibold flex space-x-2 items-center"><BsCalendarDate /><span>{selectedTimeSlot}</span></p>
          </div>
        )}
        {!bothSelected && (
          <>
            <h2 className="text-lg font-bold mb-4 mt-4">Welcome to Our Booking System</h2>
            <p>Please select a convenient date and time for a phone consultation with one of our experts. We&apos;ll discuss your painting needs and provide personalized service recommendations.</p>
            </>
        )}
      </div>
    
    </div>
  );
};

export default LeftSide;
