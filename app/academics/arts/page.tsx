"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ScrollText, ArrowLeft, BookOpen, Calendar, MapPin, Globe, ExternalLink, Library } from 'lucide-react';
import Hero from "@/components/Hero";

export default function FacultyOfArts() {
    const router = useRouter();

    // Converted to an array of objects to support external URLs
    const departments = [
        { name: "Arabic Language Department" },
        { name: "French Language Department" },
        { name: "English Language Department" },
        { name: "Geography and GIS Department" },
        { name: "Philosophy Department" },
        { name: "Sociology Department" },
        { name: "Psychology Department" },
        { name: "Anthropology Department" },
        { name: "Archaeology, Greek and Romanian Studies Department" },
        { name: "Archaeology Department" },
        { name: "Phonetics Department" },
        { name: "Theatre Studies Department" },
        { name: "Library and Information Department" },
        { name: "Oriental Languages Department" },
        { name: "History, Egyptian & Islamic Antiquities Department" },
        { name: "Arabic and Eastern Languages (Turkish, Persian and Hebrew)" },
        { 
            name: "Applied Languages", 
            url: "https://www.egypte.campusfrance.org/fr/filiere-des-langues-appliquees-fla" 
        },
        { name: "Diploma of Public Opinion" }
    ];

    return (
        <div className="bg-[#F8FAFC] dark:bg-[#050B14] min-h-screen relative font-sans transition-colors duration-500">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none bg-gradient-to-br from-purple-100 via-transparent to-[#F8FAFC] dark:from-purple-900/20 dark:via-transparent dark:to-[#050B14]"></div>
            
            <div className="z-50 relative">
                <Hero showFullHero={false} />
            </div>

            <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
                {/* Back Navigation */}
                <button 
                    onClick={() => router.push('/academics')}
                    className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-[#001A41] dark:hover:text-white transition-colors mb-12 font-bold text-sm bg-white dark:bg-[#0B1320] px-4 py-2 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 w-fit"
                >
                    <ArrowLeft size={16} /> Return to Academics Hub
                </button>

                {/* Faculty Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-16 bg-white dark:bg-[#0B1320] border border-slate-200 dark:border-slate-800 p-8 md:p-10 rounded-3xl shadow-sm dark:shadow-xl">
                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 rounded-2xl bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-500/30 flex items-center justify-center shrink-0">
                            <ScrollText size={40} className="text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#001A41] dark:text-white mb-2">
                                Faculty of Arts
                            </h1>
                            <div className="flex flex-wrap items-center gap-4 text-xs font-bold tracking-wide text-slate-500 dark:text-slate-400 uppercase">
                                <span className="flex items-center gap-1"><Calendar size={14} className="text-[#D4AF37]"/> Established in 1938</span>
                                <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                                <span className="flex items-center gap-1"><MapPin size={14} className="text-[#D4AF37]"/> Sooter Street, El-Shatby</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Departments Grid */}
                <div className="mb-10">
                    <h2 className="text-xl font-bold text-[#001A41] dark:text-white mb-6 flex items-center gap-3">
                        <Library className="text-[#D4AF37]" />
                        Academic Departments & Programs
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {departments.map((dept, idx) => {
                            const CardContent = (
                                <div 
                                    className={`group bg-white dark:bg-[#0B1320]/50 border border-slate-200 dark:border-slate-800 p-5 rounded-xl hover:border-purple-300 dark:hover:border-purple-500/50 hover:shadow-md dark:hover:bg-[#0B1320] transition-all duration-300 flex items-start gap-4 ${dept.url ? 'cursor-pointer' : 'cursor-default'}`}
                                >
                                    <div className="mt-1 w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center shrink-0 group-hover:bg-purple-50 dark:group-hover:bg-purple-900/30 transition-colors">
                                        <BookOpen size={14} className="text-slate-400 dark:text-slate-500 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-[#001A41] dark:text-slate-200 text-sm font-bold leading-snug group-hover:text-purple-700 dark:group-hover:text-white transition-colors flex items-center gap-2">
                                            {dept.name}
                                            {dept.url && <ExternalLink size={12} className="text-purple-400" title="External Link" />}
                                        </h3>
                                        <p className="text-slate-400 text-[10px] mt-1 font-mono uppercase tracking-wider">Undergraduate / Postgrad</p>
                                    </div>
                                </div>
                            );

                            // If the department has a URL, wrap it in a Link
                            if (dept.url) {
                                return (
                                    <Link key={idx} href={dept.url} target="_blank" rel="noopener noreferrer" className="block">
                                        {CardContent}
                                    </Link>
                                );
                            }

                            // Otherwise, render normally
                            return <div key={idx}>{CardContent}</div>;
                        })}
                    </div>
                </div>

                {/* Quick Info Banner */}
                <div className="bg-[#001A41] dark:bg-[#D4AF37]/10 border border-[#001A41] dark:border-[#D4AF37]/30 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                            <Globe className="text-[#D4AF37]" />
                        </div>
                        <div>
                            <h4 className="text-white text-sm font-bold">International Students Office</h4>
                            <p className="text-slate-300 text-xs mt-1">Dedicated support for expatriate enrollment</p>
                        </div>
                    </div>
                    <button className="bg-[#D4AF37] hover:bg-white text-[#001A41] px-6 py-2.5 rounded-lg text-xs font-bold tracking-widest uppercase transition-colors whitespace-nowrap">
                        Contact Administration
                    </button>
                </div>
            </main>
        </div>
    );
}