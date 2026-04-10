

"use client";

import React from 'react';
import Image from 'next/image';

const facultiesData = [
  { id: 1, title: "Faculty of Engineering", color: "bg-[#001A41]/90", img: "/imgs/eng.jpg", students: "12,500", courses: "85" },
  { id: 2, title: "Faculty of Medicine", color: "bg-[#2563EB]/85", img: "/imgs/med.jpg", students: "8,200", courses: "45" },
  { id: 3, title: "Faculty of Arts", color: "bg-[#6D28D9]/85", img: "/imgs/arts.jpg", students: "15,000", courses: "60" },
  { id: 4, title: "Faculty of Science", color: "bg-[#3B82F6]/85", img: "/imgs/sci.jpg", students: "9,800", courses: "42" },
  { id: 5, title: "Faculty of Fine Arts", color: "bg-[#60A5FA]/85", img: "/imgs/fine.jpg", students: "5,100", courses: "38" },
  { id: 6, title: "Faculty of Law", color: "bg-[#1E3A8A]/90", img: "/imgs/law.jpg", students: "10,900", courses: "55" },
];

export default function ExploreFaculties() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-20 max-w-2xl mx-auto flex flex-col items-center">
          <span className="text-[#D4AF37] font-bold uppercase tracking-[0.18em] text-[13px] mb-3 block">
            ACADEMIC EXCELLENCE
          </span>
          <h2 className="text-[#001A41] text-5xl font-kameron font-bold leading-tight">
            Explore Our Faculties
          </h2>
          <div className="w-16 h-[2.5px] bg-[#2563EB] mt-5 rounded-full"></div>
        </div>

        {/* --- Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 px-4">
          {facultiesData.map((faculty) => (
            <div 
              key={faculty.id} 
              className="relative overflow-hidden p-10 rounded-[28px] shadow-sm flex flex-col items-start min-h-[480px] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group -skew-x-12 cursor-pointer bg-slate-100"
            >
              
              {/* Background Image Layer */}
              <div className="absolute inset-0 skew-x-12 scale-110 object-cover origin-center bg-gray-200">
                  <Image 
                    src={faculty.img} 
                    alt={faculty.title}
                    fill
                    className="object-cover"
                    sizes="(max-w-7xl) 33vw, 50vw, 100vw"
                  />
              </div>

              {/* Colored Scrim Overlay */}
              <div className={`absolute inset-0 ${faculty.color} transition-all duration-300 group-hover:opacity-100 z-10`}></div>
              
              {/* Content Layer (Shifted up more on hover) */}
              <div className="relative z-20 h-full flex flex-col justify-end p-10 skew-x-12 transition-transform duration-300 group-hover:-translate-y-24">
                {/* Bigger Title: text-4xl */}
                <h3 className="text-white font-kameron text-4xl font-bold leading-tight mb-6 drop-shadow-md">
                  {faculty.title}
                </h3>
                
                {/* Thicker Animated Gold Line: h-[5px] */}
                <div className="h-[5px] bg-[#D4AF37] w-14 transition-all duration-500 ease-out group-hover:w-full"></div>
              </div>

              {/* Bigger Hover Statistics Section: h-24 */}
              <div className="absolute bottom-0 left-0 w-full h-24 bg-[#001A41]/95 z-30 skew-x-12 px-10 flex items-center justify-start gap-12 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                
                {/* Student Count - Bigger Icons & Text */}
                <div className="flex items-center gap-3 text-white/90">
                  <svg className="w-7 h-7 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-2xl font-bold font-serif">{faculty.students}</span>
                </div>
                
                {/* Course Count - Bigger Icons & Text */}
                <div className="flex items-center gap-3 text-white/90">
                  <svg className="w-7 h-7 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="text-2xl font-bold font-serif">{faculty.courses}</span>
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}