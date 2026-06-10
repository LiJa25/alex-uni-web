"use client";
import React from 'react';
import { Crown, Users, UserCog, GraduationCap, FlaskConical, Leaf, Building2, CalendarDays } from 'lucide-react';

export default function Administration() {
    const adminHubItems = [
        { title: "University President", icon: <Crown /> },
        { title: "AU Head Administration", icon: <Users /> },
        { title: "University Leaders", icon: <UserCog /> },
        { title: "Educational & Students' Affairs Search Sector", icon: <GraduationCap /> },
        { title: "Graduate Studies & Research Sector", icon: <FlaskConical /> },
        { title: "Community Service & Environmental Development Sector", icon: <Leaf /> },
        { title: "University Secretary General Sector", icon: <Building2 /> },
        { title: "University Council Meetings", icon: <CalendarDays />, isLive: true },
    ];

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif text-smart-blue-900 dark:text-harvest-gold-50 mb-4">
                        Master Administration Hub
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Command center for Alexandria University's governance and strategic initiatives
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {adminHubItems.map((item, idx) => (
                        <div key={idx} className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            {item.isLive && (
                                <div className="absolute top-4 right-4 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                    LIVE
                                </div>
                            )}
                            <div className="mb-6 text-harvest-gold-500">
                                {React.cloneElement(item.icon as React.ReactElement, { size: 32 } as any)}
                            </div>
                            <h3 className="text-xl font-semibold text-smart-blue-950 dark:text-white leading-snug">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}