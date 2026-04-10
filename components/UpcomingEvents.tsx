"use client";

import React, { useState } from 'react';

const allEvents = [
  {
    title: "Faculty of Education Forum",
    description: "Annual gathering of educational minds discussing future pedagogy.",
    date: "Apr 12, 10:00 AM",
    location: "Alexandria",
  },
  {
    title: "Faculty of Economic and Political Science Charity Exhibition",
    description: "Supporting local initiatives through university resources.",
    date: "Apr 15, 09:00 AM",
    location: "Alexandria",
  },
  {
    title: "Integrated Scientific Activities",
    description: "Showcasing student projects across science disciplines.",
    date: "Apr 18, 11:30 AM",
    location: "Alexandria",
  },
  {
    title: "AU in 75: Faculty of Agriculture",
    description: "Celebrating 75 years of agricultural excellence and innovation.",
    date: "Apr 22, 10:00 AM",
    location: "Alexandria",
  },
  {
    title: "Medical Innovation Workshop",
    description: "Exploring advanced techniques in medical research at the Faculty of Medicine.",
    date: "Apr 28, 11:00 AM",
    location: "Alexandria",
  }
];

export default function UpcomingEvents() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = allEvents.length;
  const cardsToShow = 4;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  return (
    <section className="bg-[#F9FAFB] pt-6 pb-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-gray-100 pb-6">
          <div>
            <span className="text-[#D4AF37] font-bold uppercase tracking-[0.15em] text-[13px] mb-2 block">
              MARK YOUR CALENDAR
            </span>
            <h2 className="text-[#001A41] text-5xl font-kameron font-bold">
              Upcoming Events
            </h2>
          </div>
          <a href="#" className="text-[#3B82F6] font-semibold flex items-center gap-2 hover:opacity-80 transition-all text-lg group">
            View Calendar 
            <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="relative">
          <button 
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#4F46E5] hover:text-white hover:border-[#4F46E5] transition-all duration-300 z-20 hidden xl:flex shadow-md"
          >
             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#4F46E5] hover:text-white hover:border-[#4F46E5] transition-all duration-300 z-20 hidden xl:flex shadow-md"
          >
             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` 
              }}
            >
              {allEvents.concat(allEvents.slice(0, cardsToShow)).map((event, index) => (
                <div 
                  key={index} 
                  className="flex-none w-full md:w-1/2 lg:w-1/4 p-2"
                >
                  <div className="bg-white border border-gray-200 rounded-[28px] shadow-sm flex flex-col min-h-[460px] h-full overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="h-[8px] w-full bg-[#1E3A8A]"></div>
                    
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-6 border border-[#DBEAFE]">
                        <svg className="w-6 h-6 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 002-2v12a2 2 0 002 2z" />
                        </svg>
                      </div>

                      <h3 className="text-[#001A41] font-kameron text-[24px] font-bold mb-4 leading-tight min-h-[60px]">
                        {event.title}
                      </h3>
                      <p className="text-gray-500 text-[16px] leading-relaxed mb-6">
                        {event.description}
                      </p>

                      <a href="#" className="text-[#3B82F6] font-semibold flex items-center gap-1.5 hover:underline text-[16px] mb-8 group self-start">
                        Read More
                        <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>

                      <div className="h-[1px] w-full bg-gray-100 mb-6 mt-auto"></div>

                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-[#D4AF37] text-[15px] font-medium">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2 text-[#D4AF37] text-[15px] font-medium">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-14">
            {allEvents.map((_, dotIndex) => (
              <span 
                key={dotIndex}
                className={`h-3 rounded-full transition-all duration-500 ${
                  dotIndex === currentIndex % totalItems 
                  ? 'w-10 bg-[#D4AF37]' 
                  : 'w-3 bg-gray-300' 
                }`}
              ></span>
            ))}
        </div>
      </div>
    </section>
  );
}