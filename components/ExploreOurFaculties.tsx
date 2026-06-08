"use client";

import React from 'react';
import { useLanguage } from "@/components/LanguageProvider"; 
import Image from 'next/image';
import { BookOpen, FlaskConical, Palette, Stethoscope, Scale, Building2 } from 'lucide-react';

export default function ExploreFaculties() {
  const { language } = useLanguage(); 
  const isRTL = language === "ar";

  const faculties = [
    { title: isRTL ? "كلية الهندسة" : "Faculty of Engineering", icon: Building2, img: "/imgs/eng.jpg" },
    { title: isRTL ? "كلية العلوم" : "Faculty of Science", icon: FlaskConical, img: "/imgs/sci.jpg" },
    { title: isRTL ? "كلية الآداب" : "Faculty of Arts", icon: BookOpen, img: "/imgs/arts.jpg" },
    { title: isRTL ? "كلية الفنون الجميلة" : "Faculty of Fine Arts", icon: Palette, img: "/imgs/fine.jpg" },
    { title: isRTL ? "كلية التمريض" : "Faculty of Nursing", icon: Stethoscope, img: "/imgs/med.jpg" },
    { title: isRTL ? "كلية الحقوق" : "Faculty of Law", icon: Scale, img: "/imgs/law.jpg" },
  ];

  const hoverColors = ["#10B981", "#8B5CF6", "#3B82F6"];

  return (
    <section dir={isRTL ? "rtl" : "ltr"} className="bg-slate-50 dark:bg-[#0B1D33] py-20 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        
        <div className="mb-16">
          <p className="text-[#C9A227] font-medium tracking-[0.2em] uppercase text-sm mb-3">
            {isRTL ? "التميز الأكاديمي" : "Academic Excellence"}
          </p>
          <h2 className="text-slate-900 dark:text-white text-5xl md:text-6xl" style={{ fontFamily: isRTL ? 'unset' : 'Italiana, serif' }}>
            {isRTL ? "استكشف كلياتنا" : "Explore Our Faculties"}
          </h2>
          <div className="w-24 h-[2px] bg-[#C9A227] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculties.map((faculty, index) => {
            const color = hoverColors[Math.floor(index / 2)];
            
            return (
              <div 
                key={index} 
                style={{ '--hover-color': color } as React.CSSProperties}
                className="group relative h-[350px] rounded-2xl overflow-hidden cursor-pointer border-2 border-transparent transition-all duration-300 shadow-md dark:shadow-none"
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = color; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'transparent'; }}
              >
                <div className="absolute inset-0">
                  <Image 
                    src={faculty.img} 
                    alt={faculty.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-w-6xl) 33vw, 50vw, 100vw"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-slate-900/40 dark:bg-[#0B1D33]/70 group-hover:bg-slate-900/30 group-hover:dark:bg-[#0B1D33]/50 transition-colors duration-300"></div>
                </div>
                
                <div className="absolute top-8 left-8 right-8 z-10 text-white dark:text-white/80 border border-white/20 p-3 rounded-full transition-all duration-300 group-hover:border-[var(--hover-color)] group-hover:text-[var(--hover-color)] w-fit bg-slate-900/20 dark:bg-transparent">
                  <faculty.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>

                <div className="absolute bottom-8 left-8 right-8 text-start z-10">
                  <h3 className="text-white text-2xl font-semibold mb-3 drop-shadow-sm">
                    {faculty.title}
                  </h3>
                  <a href="#" className="text-white text-sm font-medium uppercase tracking-wider flex items-center gap-2 transition-all group-hover:gap-3 group-hover:text-[var(--hover-color)] drop-shadow-sm">
                    {isRTL ? "اعرف المزيد ←" : "Learn More →"}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}