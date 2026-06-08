"use client";

import React from 'react';
import { useLanguage } from "@/components/LanguageProvider";

export default function ApplyCTA() {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <section dir={isRTL ? "rtl" : "ltr"} className="relative w-full py-16 px-6 overflow-hidden bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-[#001A41] dark:via-[#1E3A8A] dark:to-[#6D28D9] transition-colors duration-300">
      
      <div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-20 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-400 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        
        <h2 className="text-slate-900 dark:text-white text-4xl md:text-6xl font-kameron font-bold leading-tight mb-8">
          {isRTL ? (
            <>قدم في كليتك المفضلة في <br /><span className="text-[#D4AF37]">5 دقائق</span></>
          ) : (
            <>Apply in your favorite faculty in <br /><span className="text-[#D4AF37]">5 minutes</span></>
          )}
        </h2>

        <p className="text-slate-600 dark:text-white/85 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {isRTL ? (
            "انضم إلى آلاف الطلاب الطموحين الذين يبنون مستقبلهم في جامعة الإسكندرية. عملية تقديم سريعة، بسيطة، وقائمة على الجدارة."
          ) : (
            "Join thousands of ambitious students building their future at Alexandria University. Fast, simple, and merit-based application process."
          )}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          
          <button className="group bg-[#D4AF37] hover:bg-[#C5A02E] text-[#001A41] font-bold py-4 px-10 rounded-full text-base md:text-lg flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg">
            {isRTL ? "قدم الآن" : "Apply Now"}
            <svg className={`w-5 h-5 transition-transform ${isRTL ? "group-hover:-translate-x-1 rotate-180" : "group-hover:translate-x-1"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          <button className="group border-2 border-slate-300 dark:border-white/30 hover:border-slate-400 dark:hover:border-white text-slate-800 dark:text-white font-bold py-4 px-10 rounded-full text-base md:text-lg flex items-center gap-2 transition-all bg-slate-500/5 dark:bg-white/5 hover:bg-slate-500/10 dark:hover:bg-white/10">
            <svg className="w-5 h-5 text-slate-600 dark:text-white/70 group-hover:text-slate-800 group-hover:dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            {isRTL ? "ابدأ التسجيل" : "Start Registration"}
          </button>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#D4AF37]"></div>
    </section>
  );
}