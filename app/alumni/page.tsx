"use client";

import React from 'react';
import Hero from "@/components/Hero";
import {
    BookOpen,
    BarChart3,
    Award,
    FileText,
    Users,
    Layers,
    Heart,
    ChevronRight
} from 'lucide-react';

export default function AlumniPage() {
    return (
        <div className="bg-[#F8FAFC] min-h-screen text-[#001A41] font-sans antialiased selection:bg-[#D4AF37]/30 transition-colors duration-500">
            {/* Universal Consistent Navigation Header */}
            <Hero showFullHero={false} />

            <main className="pt-36 pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">

                {/* --- DYNAMIC HEADER SECTION --- */}
                <div className="text-center space-y-3 max-w-3xl mx-auto">
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                        Welcome, Alumnus
                    </span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#001A41]">
                        Your Gateway to the <span className="text-[#0B3C5D]">Alexandria Legacy</span>
                    </h1>
                    <p className="text-slate-500 text-sm md:text-base font-light tracking-wide max-w-2xl mx-auto pt-1">
                        Est. 1942 · One of the Arab world's most distinguished public research universities
                    </p>
                    <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-4"></div>
                </div>

                {/* --- LIGHT THEME BENTO GRID CONTAINER --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">

                    {/* CARD 1: Heritage Archive (Row 1, Spans 2 Columns) */}
                    <div className="md:col-span-2 group relative bg-white border border-slate-200 hover:border-[#D4AF37]/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-xl cursor-pointer">
                        <div className="absolute top-6 right-6 text-slate-400 group-hover:text-[#D4AF37] transition-colors">
                            <ChevronRight size={18} />
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-[#0B3C5D]/5 flex items-center justify-center text-[#0B3C5D] border border-[#0B3C5D]/10">
                                <BookOpen size={20} />
                            </div>
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase block">
                                    Heritage Archive
                                </span>
                                <h3 className="text-xl font-bold text-[#001A41] group-hover:text-[#0B3C5D] transition-colors">
                                    AU Alumni Early Graduates
                                </h3>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed font-light">
                                Explore records, historical photos, and achievements of foundational classes from 1942 onwards.
                            </p>
                        </div>
                    </div>

                    {/* CARD 2: Live Analytics (Row 1, Spans 1 Column) */}
                    <div className="group relative bg-white border border-slate-200 hover:border-[#D4AF37]/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-xl cursor-pointer">
                        <div className="absolute top-6 right-6 text-slate-400 group-hover:text-[#D4AF37] transition-colors">
                            <ChevronRight size={18} />
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-[#0B3C5D]/5 flex items-center justify-center text-[#0B3C5D] border border-[#0B3C5D]/10">
                                <BarChart3 size={20} />
                            </div>
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase block">
                                    Live Analytics
                                </span>
                                <h3 className="text-xl font-bold text-[#001A41] group-hover:text-[#0B3C5D] transition-colors">
                                    Statistics of AU Graduates
                                </h3>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed font-light">
                                250,000+ alumni tracked across 87 countries on six continents.
                            </p>
                        </div>
                    </div>

                    {/* CARD 3: Hall of Fame (Row 2, Spans 1 Column) */}
                    <div className="group relative bg-white border border-slate-200 hover:border-[#D4AF37]/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-xl cursor-pointer">
                        <div className="absolute top-6 right-6 text-slate-400 group-hover:text-[#D4AF37] transition-colors">
                            <ChevronRight size={18} />
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-[#0B3C5D]/5 flex items-center justify-center text-[#0B3C5D] border border-[#0B3C5D]/10">
                                <Award size={20} />
                            </div>
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase block">
                                    Hall of Fame
                                </span>
                                <h3 className="text-xl font-bold text-[#001A41] group-hover:text-[#0B3C5D] transition-colors">
                                    Distinguished Alumni
                                </h3>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed font-light">
                                Nobel laureates, pioneering surgeons, space scientists, and global leaders.
                            </p>
                        </div>
                    </div>

                    {/* CARD 4: Digital Gateway (Row 2, Spans 1 Column) */}
                    <div className="group relative bg-white border border-slate-200 hover:border-[#D4AF37]/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-xl cursor-pointer">
                        <div className="absolute top-6 right-6 text-slate-400 group-hover:text-[#D4AF37] transition-colors">
                            <ChevronRight size={18} />
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-[#0B3C5D]/5 flex items-center justify-center text-[#0B3C5D] border border-[#0B3C5D]/10">
                                <FileText size={20} />
                            </div>
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase block">
                                    Digital Gateway
                                </span>
                                <h3 className="text-xl font-bold text-[#001A41] group-hover:text-[#0B3C5D] transition-colors">
                                    Alumni Services
                                </h3>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed font-light">
                                Transcripts, library access, health insurance, and certificate verification.
                            </p>
                        </div>
                    </div>

                    {/* CARD 5: Global Network (Row 2, Spans 1 Column) */}
                    <div className="group relative bg-white border border-slate-200 hover:border-[#D4AF37]/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-xl cursor-pointer">
                        <div className="absolute top-6 right-6 text-slate-400 group-hover:text-[#D4AF37] transition-colors">
                            <ChevronRight size={18} />
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-[#0B3C5D]/5 flex items-center justify-center text-[#0B3C5D] border border-[#0B3C5D]/10">
                                <Users size={20} />
                            </div>
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase block">
                                    Global Network
                                </span>
                                <h3 className="text-xl font-bold text-[#001A41] group-hover:text-[#0B3C5D] transition-colors">
                                    Alumni Association
                                </h3>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed font-light">
                                Regional chapters across the Arab world, Europe, Africa, and the Americas.
                            </p>
                        </div>
                    </div>

                    {/* CARD 6: Professional Registry (Row 3, Spans 1 Column) */}
                    <div className="group relative bg-white border border-slate-200 hover:border-[#D4AF37]/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-xl cursor-pointer">
                        <div className="absolute top-6 right-6 text-slate-400 group-hover:text-[#D4AF37] transition-colors">
                            <ChevronRight size={18} />
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-2xl bg-[#0B3C5D]/5 flex items-center justify-center text-[#0B3C5D] border border-[#0B3C5D]/10">
                                <Layers size={20} />
                            </div>
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase block">
                                    Professional Registry
                                </span>
                                <h3 className="text-xl font-bold text-[#001A41] group-hover:text-[#0B3C5D] transition-colors">
                                    Alumni Syndicates
                                </h3>
                            </div>
                            <p className="text-slate-600 text-sm leading-relaxed font-light">
                                Direct portals for medical, engineering, legal, and scientific professional licensing.
                            </p>
                        </div>
                    </div>

                    {/* CARD 7: Legacy Endowment Fund (Row 3, Spans 2 Columns - Integrated Support Section) */}
                    <div className="md:col-span-2 group bg-white border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm transition-all duration-300 hover:shadow-xl">
                        <div className="flex items-start gap-4 flex-1">
                            <div className="w-12 h-12 rounded-2xl border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] flex-shrink-0 bg-[#D4AF37]/5">
                                <Heart size={22} className="fill-[#D4AF37]/5 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <div className="space-y-1">
                                <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase block">
                                    Legacy Fund Endowment
                                </span>
                                <h3 className="text-2xl font-serif font-bold text-[#001A41]">
                                    Support AU
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-light max-w-xl">
                                    Invest in research, student scholarships, and smart campuses. Shape the future of education.
                                </p>
                            </div>
                        </div>

                        {/* Soft Premium Call to Action Interactive Button */}
                        <button
                            onClick={() => alert("Redirecting seamlessly to secure endowment ledger channels...")}
                            className="w-full sm:w-auto bg-[#0B3C5D] hover:bg-[#D4AF37] text-white hover:text-[#001A41] font-bold px-8 py-4 rounded-full text-sm shadow-md transition-all duration-300 transform hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2 flex-shrink-0"
                        >
                            <span>Give Now</span>
                            <ChevronRight size={14} strokeWidth={3} />
                        </button>
                    </div>

                </div>
            </main>
        </div>
    );
}