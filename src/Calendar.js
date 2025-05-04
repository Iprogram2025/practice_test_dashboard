import React, { useState } from 'react';
import './App.css';

function Calendar() {
  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth()); // 0-indexed

  const currentDate = today.getDate();
  const isCurrentMonth = today.getFullYear() === currentYear && today.getMonth() === currentMonth;

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const calendarCells = [];

  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarCells.push(<div key={`blank-${i}`} className="calendar-cell blank"></div>);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const thisDay = new Date(currentYear, currentMonth, d);
    const isAssessmentDay = [1, 3, 5].includes(thisDay.getDay());
    const isToday = isCurrentMonth && d === currentDate;

    calendarCells.push(
      <div key={d} className="calendar-cell">
        <div>{d}</div>
        {isAssessmentDay && (
          isToday ? (
            <a href={`#test-${d}`} className="assessment-link">
              Start Test<br /><small>7:00 PM</small>
            </a>
          ) : (
            <div className="disabled-link">
              Start Test<br /><small>7:00 PM</small>
            </div>
          )
        )}
      </div>
    );
  }

  const monthLabel = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' });

  const goToPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonth(prev => prev - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(prev => prev + 1);
    } else {
      setCurrentMonth(prev => prev + 1);
    }
  };

  return (
    <div className="calendar-container">
      <div className="calendar-nav">
        <button className="arrow" onClick={goToPrevMonth}>←</button>
        <span className="month-label">{monthLabel} {currentYear}</span>
        <button className="arrow" onClick={goToNextMonth}>→</button>
      </div>
      <div className="calendar-grid">
        {daysOfWeek.map((day, i) => (
          <div key={i} className="calendar-header">{day}</div>
        ))}
        {calendarCells}
      </div>
    </div>
  );
}

export default Calendar;
