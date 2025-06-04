
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, CheckCircle, Users } from "lucide-react";

interface DateSchedulerProps {
  onDateSelect: (date: string, time: string) => void;
  selectedDate?: string;
  selectedTime?: string;
}

const DateScheduler = ({ onDateSelect, selectedDate, selectedTime }: DateSchedulerProps) => {
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date());

  // Mock data for demo submissions per day (in real app, fetch from Firebase)
  const dailySubmissions: { [key: string]: number } = {
    '2024-06-05': 8,
    '2024-06-06': 10, // Full day
    '2024-06-07': 5,
    '2024-06-08': 3,
    '2024-06-09': 7,
    '2024-06-10': 9,
    '2024-06-11': 2,
  };

  const timeSlots = [
    "9:00 AM EAT",
    "10:00 AM EAT", 
    "11:00 AM EAT",
    "2:00 PM EAT",
    "3:00 PM EAT",
    "4:00 PM EAT"
  ];

  const generateWeekDays = (startDate: Date) => {
    const days = [];
    const current = new Date(startDate);
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(current);
      date.setDate(current.getDate() + i);
      
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        const dateString = date.toISOString().split('T')[0];
        const submissions = dailySubmissions[dateString] || 0;
        const isAvailable = submissions < 10;
        const isToday = date.toDateString() === new Date().toDateString();
        const isPast = date < new Date() && !isToday;
        
        days.push({
          date: dateString,
          dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
          dayNumber: date.getDate(),
          monthName: date.toLocaleDateString('en-US', { month: 'short' }),
          submissions,
          isAvailable: isAvailable && !isPast,
          isFull: submissions >= 10,
          isPast
        });
      }
    }
    return days;
  };

  const weekDays = generateWeekDays(currentWeekStart);

  const nextWeek = () => {
    const nextWeekStart = new Date(currentWeekStart);
    nextWeekStart.setDate(currentWeekStart.getDate() + 7);
    setCurrentWeekStart(nextWeekStart);
  };

  const prevWeek = () => {
    const prevWeekStart = new Date(currentWeekStart);
    prevWeekStart.setDate(currentWeekStart.getDate() - 7);
    setCurrentWeekStart(prevWeekStart);
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Select Available Date</h3>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={prevWeek}>
              Previous
            </Button>
            <Button variant="outline" size="sm" onClick={nextWeek}>
              Next
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {weekDays.map((day) => (
            <Card 
              key={day.date}
              className={`cursor-pointer transition-all duration-200 ${
                selectedDate === day.date 
                  ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-950' 
                  : day.isAvailable 
                    ? 'hover:shadow-md hover:bg-blue-50/50 dark:hover:bg-blue-950/30' 
                    : 'opacity-50 cursor-not-allowed'
              }`}
              onClick={() => day.isAvailable && onDateSelect(day.date, '')}
            >
              <CardContent className="p-4 text-center">
                <div className="text-sm text-muted-foreground mb-1">{day.dayName}</div>
                <div className="text-xl font-bold text-foreground mb-1">{day.dayNumber}</div>
                <div className="text-sm text-muted-foreground mb-2">{day.monthName}</div>
                
                {day.isPast ? (
                  <Badge variant="secondary" className="text-xs">Past</Badge>
                ) : day.isFull ? (
                  <Badge variant="destructive" className="text-xs">Full</Badge>
                ) : (
                  <div className="space-y-1">
                    <Badge variant="outline" className="text-xs bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-400">
                      Available
                    </Badge>
                    <div className="flex items-center justify-center text-xs text-muted-foreground">
                      <Users className="h-3 w-3 mr-1" />
                      {day.submissions}/10
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedDate && (
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Select Time Slot</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {timeSlots.map((time) => (
              <Button
                key={time}
                variant={selectedTime === time ? "default" : "outline"}
                className={`p-3 h-auto ${
                  selectedTime === time 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'hover:bg-blue-50 dark:hover:bg-blue-950'
                }`}
                onClick={() => onDateSelect(selectedDate, time)}
              >
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{time}</span>
                  {selectedTime === time && <CheckCircle className="h-4 w-4" />}
                </div>
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DateScheduler;
