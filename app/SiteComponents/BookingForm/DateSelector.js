import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isBefore, isSameMonth as isSameMonthFns } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DateSelector = ({ currentDate, setCurrentDate, selectedDate, handleDateClick, today, tomorrow }) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    if (!isBefore(endOfMonth(newDate), today)) {
      setCurrentDate(newDate);
    }
  };

  const handleNextMonth = () => {
    setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };
 
  return (
    <div className='border-x-2 px-12'>
      <div className="flex justify-between items-center mb-4 text-primary">
        <h2 className="text-2xl font-bold ">
          {format(currentDate, 'MMMM yyyy')}
        </h2>
        <div>
          <button 
            onClick={handlePrevMonth} 
            className="p-2" 
            disabled={isSameMonthFns(currentDate, today) && isBefore(currentDate, today)}
          >
            <ChevronLeft className={`h-6 w-6 ${isSameMonthFns(currentDate, today) && isBefore(currentDate, today) ? 'text-primary/50' : 'text-primary/50'}`} />
          </button>
          <button onClick={handleNextMonth} className="p-2">
            <ChevronRight className="h-6 w-6 text-primary/50" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-bold text-primary">{day}</div>
        ))}
        {monthDays.map(day => {
          const isSelectable = !isBefore(day, tomorrow);
          const isSelected = selectedDate && day.toDateString() === selectedDate.toDateString();
          
          return (
            <button
              key={day.toString()}
              onClick={() => handleDateClick(day)}
              disabled={!isSelectable}
              className={`p-2 text-center rounded ${
                !isSameMonth(day, currentDate) ? 'text-primary' :
                !isSelectable ? 'text-primary/50' :
                isToday(day) ? 'bg-accent text-white' :
                isSelected ? 'bg-accent text-primary font-bold' :
                isSelectable ? 'bg-accent/20 hover:bg-accent' :
                ''
              }`}
            >
              {format(day, 'd')}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DateSelector;