import React, { useState } from 'react';

const MonthlyCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const prevMonth = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() - 1);
      return newDate;
    });
  };

  const nextMonth = () => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      newDate.setMonth(newDate.getMonth() + 1);
      return newDate;
    });
  };

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    const days = daysInMonth(year, month);
    const firstDay = firstDayOfMonth(year, month);
    
    const calendarDays = [];
    let dayCounter = 1;
    
    // Create 5 rows for the days
    for (let row = 0; row < 5; row++) {
      const weekRow = [];
      for (let col = 0; col < 7; col++) {
        // Skip cells before the first day of the month
        if (row === 0 && col < firstDay) {
          weekRow.push(null);
        } else if (dayCounter <= days) {
          weekRow.push(dayCounter);
          dayCounter++;
        } else {
          weekRow.push(null);
        }
      }
      calendarDays.push(weekRow);
    }
    
    return calendarDays;
  };

  const calendarDays = generateCalendarDays();
  
  return (
    <div className="flex flex-col p-4 bg-white rounded-lg shadow max-w-4xl mx-auto">
      {/* Header with month and navigation buttons */}
      <div className="flex items-center justify-between p-2 border-b mb-4">
        <button 
          onClick={prevMonth}
          className="w-8 h-8 flex items-center justify-center border rounded"
        >
          &lt;
        </button>
        
        <div className="text-center text-lg font-medium">
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </div>
        
        <button 
          onClick={nextMonth}
          className="w-8 h-8 flex items-center justify-center border rounded"
        >
          &gt;
        </button>
      </div>
      
      {/* Days of week */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <div key={index} className="text-center p-2 border rounded">
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendar grid */}
      {calendarDays.map((week, weekIndex) => (
        <div key={weekIndex} className="grid grid-cols-7 gap-2 mb-2">
          {week.map((day, dayIndex) => (
            <div 
              key={dayIndex} 
              className={`border rounded p-4 flex items-center justify-center ${
                day === null ? 'bg-gray-100' : 'hover:bg-gray-200 cursor-pointer'
              }`}
            >
              {day !== null ? day : ''}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MonthlyCalendar;