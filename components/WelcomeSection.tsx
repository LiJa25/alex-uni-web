"use client";

import React from 'react';
import { useLanguage } from "@/components/LanguageProvider";

export default function WelcomeSection() {
    const { strings, language } = useLanguage();
    const isRTL = language === "ar";

    return (
        <section dir={isRTL ? "rtl" : "ltr"} className="w-full bg-white dark:bg-gray-950 transition-colors duration-500 py-20 md:py-32 px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                
                <div className="w-full lg:w-5/12">
                    <h2 className="text-5xl md:text-6xl font-kameron text-blue-900 dark:text-white font-bold leading-tight transition-colors duration-300">
                        {strings.welcomeSection.titleLines[0]} <br/>
                        <span className="text-harvest-gold-500">{strings.welcomeSection.titleLines[1]}</span><br/>
                        {strings.welcomeSection.titleLines[2]}
                    </h2>
                    <div className="h-1 w-24 bg-smart-blue-600 mt-8 rounded-full"></div>
                </div>

                <div className="w-full lg:w-7/12 flex items-center">
                    <div className={`w-1.5 bg-harvest-gold-500 flex-shrink-0 rounded-full self-stretch mt-1 mb-1 ${isRTL ? 'ml-6 md:ml-8' : 'mr-6 md:mr-8'}`}></div>
                    <div className="text-justify text-blue-900 dark:text-gray-300 text-lg leading-relaxed columns-1 md:columns-2 gap-8 transition-colors duration-300">
                        <p>
                            {strings.welcomeSection.description}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}