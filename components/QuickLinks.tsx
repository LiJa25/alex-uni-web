"use client";

import { useState } from "react";

export default function QuickLinks() {
    const [activeTab, setActiveTab] = useState("Undergraduates");

    const tabs = ["Undergraduates", "Visitors", "Staff & Employees", "Postgraduates"];

    const cards = [
        {
            id: 1,
            title: "Events Calendar",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
            )
        },
        {
            id: 2,
            title: "Sustainable Development",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                </svg>
            )
        },
        {
            id: 3,
            title: "International Ranking",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M8 21h8"></path>
                    <path d="M12 17v4"></path>
                    <path d="M7 4h10"></path>
                    <path d="M17 4v8a5 5 0 0 1-10 0V4"></path>
                    <path d="M7 9H4.3A2.3 2.3 0 0 1 2 6.7v-.4A2.3 2.3 0 0 1 4.3 4H7"></path>
                    <path d="M17 4h2.7A2.3 2.3 0 0 1 22 6.3v.4A2.3 2.3 0 0 1 19.7 9H17"></path>
                </svg>
            )
        },
        {
            id: 4,
            title: "Electronic System",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
            )
        }
    ];

    return (
        <section className="w-full bg-white py-16 md:py-24 px-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                
                {/* 1. The Top Navigation Tabs */}
                <div className="bg-gray-100/80 p-1.5 rounded-full flex flex-wrap justify-center items-center gap-1 mb-16 shadow-inner">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                                activeTab === tab 
                                ? "bg-harvest-gold-500 text-white shadow-md" 
                                : "text-gray-500 hover:text-blue-900 hover:bg-gray-200/50" 
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* 2. The Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {cards.map((card) => (
                        <div 
                            key={card.id}
                            className="group relative bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center border-t-4 border-t-transparent border-b border-l border-r border-gray-100 hover:border-t-blue-900 hover:shadow-2xl transition-all duration-300 cursor-pointer h-64"
                        >
                            {/* Icon Box */}
                            {/* FIX: Removed the conflicting group-hover:scale-110 and added:
                                1. transition-transform: for smooth animation
                                2. group-hover:rotate-6: This is the slight tilt when you hover! */}
                            <div className="w-20 h-20 rounded-2xl bg-blue-900/95 flex items-center justify-center mb-6 shadow-md transition-all duration-300 transition-transform group-hover:bg-harvest-gold-500 group-hover:rotate-6">
                                {card.icon}
                            </div>

                            {/* Card Title */}
                            <h3 className="font-kameron text-xl font-bold text-blue-900 mb-6 leading-snug">
                                {card.title}
                            </h3>

                            {/* The small dash at the bottom */}
                            <div className="h-1 w-8 bg-gray-200 rounded-full transition-colors duration-300 group-hover:bg-harvest-gold-500 mt-auto"></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}