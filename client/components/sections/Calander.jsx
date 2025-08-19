import React from "react";

const Calender = ({ className }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div
      className={`relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] bg-white backdrop-blur-sm border border-gray-100 ${className}`}
    >
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#e1e2e3] via-black to-[#e1e2e3]"></div>
      <div className="bg-gradient-to-r from-[#e1e2e3] to-[#f5f5f5] p-5 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden">
            <span className="relative text-sm font-bold">GIC</span>
          </div>
          <div>
            <div className="font-semibold text-black">Career Coaching</div>
            <div className="text-xs text-gray-600 flex items-center">
              Available today
            </div>
          </div>
        </div>
        <div className="text-lg font-bold flex flex-col items-end">
          <span className="text-black">{months[new Date().getMonth()]}</span>
          <span className="text-sm text-gray-500">
            {new Date().getFullYear()}
          </span>
        </div>
      </div>

      <div className="p-5 bg-white">
        <div className="grid grid-cols-7 mb-3 text-center text-xs font-medium text-gray-500">
          <div className="text-red-400">S</div>
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
        </div>

        <div className="grid grid-cols-7 gap-1.5 text-center">
          {[...new Array(21)].map((ele, i) => {
            const isToday = i === new Date().getDate();
            return (
              <div
                key={i}
                className={`relative aspect-square flex items-center justify-center text-xs rounded-lg ${
                  isToday ? "border border-black font-extrabold scale-110 shadow-lg" : ""
                }`}
              >
                {i + 1}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calender;
