import { useState, useEffect } from 'react';
import { format, parse } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { Loader2 } from "lucide-react";

interface TimeSlotSelectorProps {
  selectedTimeSlot: string | undefined;
  handleTimeSlotClick: (timeSlot: string) => void;
  selectedDate: Date;
  setShowForm: (show: boolean) => void;
}

const TimeSlotSelector: React.FC<TimeSlotSelectorProps> = ({
  selectedTimeSlot,
  handleTimeSlotClick,
  selectedDate,
  setShowForm
}) => {
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAvailableTimeSlots = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/available-slots?date=${selectedDate.toISOString().split('T')[0]}`);
        if (!response.ok) {
          throw new Error('Failed to fetch time slots');
        }
        const slots = await response.json();
        setAvailableTimeSlots(slots);
      } catch (error) {
        console.error('Error fetching time slots:', error);
        setError('Failed to load available time slots. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    if (selectedDate) {
      fetchAvailableTimeSlots();
    }
  }, [selectedDate]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center space-y-2 py-4">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-sm text-muted-foreground">Loading available time slots...</p>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  const formatTimeSlot = (slot: string) => {
    const [hours, minutes] = slot.split(':');
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));
    return format(date, 'h:mm a');
  };

  return (
    <div className='px-12'>
      <h2 className="text-lg font-bold mb-4 text-primary">Available Time Slots</h2>
      {availableTimeSlots.length === 0 ? (
        <p className="text-primary">No available time slots for the selected date.</p>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {availableTimeSlots.map(slot => {
            const formattedSlot = formatTimeSlot(slot);
            const isSelected = selectedTimeSlot === slot;
            return (
              <button
                key={slot}
                onClick={() => {
                  handleTimeSlotClick(slot);
                  setShowForm(true);
                }}
                className={`p-2 text-center rounded ${
                  isSelected
                    ? 'bg-accent text-primary font-bold'
                    : 'bg-accent/20 hover:bg-accent text-primary'
                }`}
              >
                {formattedSlot}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TimeSlotSelector;