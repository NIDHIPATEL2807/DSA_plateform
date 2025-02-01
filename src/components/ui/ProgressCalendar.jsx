import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

// Separate ActivityCalendar component
const ActivityCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [submissions] = useState(new Set(['2025-02-01', '2025-02-03'])); // Example dates

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    return { daysInMonth, firstDay };
  };

  const formatDate = (year, month, day) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const { daysInMonth, firstDay } = getDaysInMonth(currentMonth);

  return (
    <div className="bg-gray-900 p-4 rounded-lg border border-violet-700/30">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-violet-300 font-semibold">Activity Calendar</h3>
        <div className="flex gap-2">
          <button 
            onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
            className="p-1 hover:bg-violet-800/20 rounded"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-gray-300">
            {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </span>
          <button 
            onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
            className="p-1 hover:bg-violet-800/20 rounded"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-xs text-gray-400 py-1">{day}</div>
        ))}
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} className="aspect-square" />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const date = formatDate(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1);
          const hasSubmission = submissions.has(date);
          return (
            <div 
              key={i} 
              className={`aspect-square rounded-sm ${
                hasSubmission ? 'bg-violet-500' : 'bg-gray-800'
              } hover:bg-violet-600 transition-colors cursor-pointer`}
              title={date}
            />
          );
        })}
      </div>
    </div>
  );
};

// Main ProgressCalendar component
export default function ProgressCalendar() {
  return (
    <div className="space-y-6">
      <ActivityCalendar />

      {/* Stats Card */}
      <div className="bg-gray-900 p-4 rounded-lg border border-violet-700/30">
        <h3 className="text-violet-300 font-semibold mb-4">Your Progress</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400">Problems Solved</span>
              <span className="text-violet-300">45/450</span>
            </div>
            <div className="w-full bg-gray-800 h-2 rounded-full">
              <div className="bg-violet-500 h-2 rounded-full" style={{ width: '10%' }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-400">Topics Covered</span>
              <span className="text-violet-300">8/36</span>
            </div>
            <div className="w-full bg-gray-800 h-2 rounded-full">
              <div className="bg-violet-500 h-2 rounded-full" style={{ width: '22%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}