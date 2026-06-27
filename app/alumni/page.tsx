"use client";

import React, { useState } from 'react';
import Hero from "@/components/Hero";
import {
    BookOpen, BarChart3, Award, FileText, Users, Layers, Heart, ChevronRight,
    ArrowLeft, Play, MapPin, Phone, Mail, Download, ShieldCheck, CheckCircle,
    ExternalLink, Globe, Star, FileBadge, Clock, Check, Building2
} from 'lucide-react';

type AlumniView = "portal" | "heritage" | "analytics" | "fame" | "services" | "network" | "syndicates" | "endowment";

export default function AlumniPage() {
    const [activeView, setActiveView] = useState<AlumniView>("portal");

    const renderPortal = () => (
        <main className="pt-36 pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 animate-in fade-in duration-500">
            <div className="text-center space-y-3 max-w-3xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                    Welcome, Alumnus
                </span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#001A41] dark:text-white">
                    Your Gateway to the <span className="text-[#0B3C5D] dark:text-[#D4AF37]">Alexandria Legacy</span>
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-light tracking-wide max-w-2xl mx-auto pt-1">
                    Est. 1942 · One of the Arab world's most distinguished public research universities
                </p>
                <div className="w-16 h-[2px] bg-[#D4AF37] mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">

                {/* CARD 1: Heritage Archive (Row 1, Spans 2 Columns) */}
                <div onClick={() => setActiveView("heritage")} className="md:col-span-2 group relative bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 hover:border-[#D4AF37]/60 dark:hover:border-[#D4AF37]/50 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm dark:shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-xl cursor-pointer">
                    <div className="absolute top-6 right-6 text-slate-400 group-hover:text-[#D4AF37] transition-colors">
                        <ChevronRight size={18} />
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#0B3C5D]/5 dark:bg-[#D4AF37]/10 flex items-center justify-center text-[#0B3C5D] dark:text-[#D4AF37] border border-[#0B3C5D]/10 dark:border-[#D4AF37]/20">
                            <BookOpen size={20} />
                        </div>
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase block">
                                Heritage Archive
                            </span>
                            <h3 className="text-xl font-bold text-[#001A41] dark:text-white group-hover:text-[#0B3C5D] dark:group-hover:text-[#D4AF37] transition-colors">
                                AU Alumni Early Graduates
                            </h3>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-light">
                            Explore records, historical photos, and achievements of foundational classes from 1942 onwards.
                        </p>
                    </div>
                </div>

                {/* CARD 2: Live Analytics (Row 1, Spans 1 Column) */}
                <div onClick={() => setActiveView("analytics")} className="group relative bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 hover:border-[#D4AF37]/60 dark:hover:border-[#D4AF37]/50 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm dark:shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-xl cursor-pointer">
                    <div className="absolute top-6 right-6 text-slate-400 group-hover:text-[#D4AF37] transition-colors">
                        <ChevronRight size={18} />
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#0B3C5D]/5 dark:bg-[#D4AF37]/10 flex items-center justify-center text-[#0B3C5D] dark:text-[#D4AF37] border border-[#0B3C5D]/10 dark:border-[#D4AF37]/20">
                            <BarChart3 size={20} />
                        </div>
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase block">
                                Live Analytics
                            </span>
                            <h3 className="text-xl font-bold text-[#001A41] dark:text-white group-hover:text-[#0B3C5D] dark:group-hover:text-[#D4AF37] transition-colors">
                                Statistics of AU Graduates
                            </h3>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-light">
                            250,000+ alumni tracked across 87 countries on six continents.
                        </p>
                    </div>
                </div>

                {/* CARD 3: Hall of Fame (Row 2, Spans 1 Column) */}
                <div onClick={() => setActiveView("fame")} className="group relative bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 hover:border-[#D4AF37]/60 dark:hover:border-[#D4AF37]/50 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm dark:shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-xl cursor-pointer">
                    <div className="absolute top-6 right-6 text-slate-400 group-hover:text-[#D4AF37] transition-colors">
                        <ChevronRight size={18} />
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#0B3C5D]/5 dark:bg-[#D4AF37]/10 flex items-center justify-center text-[#0B3C5D] dark:text-[#D4AF37] border border-[#0B3C5D]/10 dark:border-[#D4AF37]/20">
                            <Award size={20} />
                        </div>
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase block">
                                Hall of Fame
                            </span>
                            <h3 className="text-xl font-bold text-[#001A41] dark:text-white group-hover:text-[#0B3C5D] dark:group-hover:text-[#D4AF37] transition-colors">
                                Distinguished Alumni
                            </h3>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-light">
                            Nobel laureates, pioneering surgeons, space scientists, and global leaders.
                        </p>
                    </div>
                </div>

                {/* CARD 4: Digital Gateway (Row 2, Spans 1 Column) */}
                <div onClick={() => setActiveView("services")} className="group relative bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 hover:border-[#D4AF37]/60 dark:hover:border-[#D4AF37]/50 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm dark:shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-xl cursor-pointer">
                    <div className="absolute top-6 right-6 text-slate-400 group-hover:text-[#D4AF37] transition-colors">
                        <ChevronRight size={18} />
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#0B3C5D]/5 dark:bg-[#D4AF37]/10 flex items-center justify-center text-[#0B3C5D] dark:text-[#D4AF37] border border-[#0B3C5D]/10 dark:border-[#D4AF37]/20">
                            <FileText size={20} />
                        </div>
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase block">
                                Digital Gateway
                            </span>
                            <h3 className="text-xl font-bold text-[#001A41] dark:text-white group-hover:text-[#0B3C5D] dark:group-hover:text-[#D4AF37] transition-colors">
                                Alumni Services
                            </h3>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-light">
                            Transcripts, library access, health insurance, and certificate verification.
                        </p>
                    </div>
                </div>

                {/* CARD 5: Global Network (Row 2, Spans 1 Column) */}
                <div onClick={() => setActiveView("network")} className="group relative bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 hover:border-[#D4AF37]/60 dark:hover:border-[#D4AF37]/50 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm dark:shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-xl cursor-pointer">
                    <div className="absolute top-6 right-6 text-slate-400 group-hover:text-[#D4AF37] transition-colors">
                        <ChevronRight size={18} />
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#0B3C5D]/5 dark:bg-[#D4AF37]/10 flex items-center justify-center text-[#0B3C5D] dark:text-[#D4AF37] border border-[#0B3C5D]/10 dark:border-[#D4AF37]/20">
                            <Users size={20} />
                        </div>
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase block">
                                Global Network
                            </span>
                            <h3 className="text-xl font-bold text-[#001A41] dark:text-white group-hover:text-[#0B3C5D] dark:group-hover:text-[#D4AF37] transition-colors">
                                Alumni Association
                            </h3>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-light">
                            Regional chapters across the Arab world, Europe, Africa, and the Americas.
                        </p>
                    </div>
                </div>

                {/* CARD 6: Professional Registry (Row 3, Spans 1 Column) */}
                <div onClick={() => setActiveView("syndicates")} className="group relative bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 hover:border-[#D4AF37]/60 dark:hover:border-[#D4AF37]/50 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm dark:shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-xl cursor-pointer">
                    <div className="absolute top-6 right-6 text-slate-400 group-hover:text-[#D4AF37] transition-colors">
                        <ChevronRight size={18} />
                    </div>
                    <div className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#0B3C5D]/5 dark:bg-[#D4AF37]/10 flex items-center justify-center text-[#0B3C5D] dark:text-[#D4AF37] border border-[#0B3C5D]/10 dark:border-[#D4AF37]/20">
                            <Layers size={20} />
                        </div>
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase block">
                                Professional Registry
                            </span>
                            <h3 className="text-xl font-bold text-[#001A41] dark:text-white group-hover:text-[#0B3C5D] dark:group-hover:text-[#D4AF37] transition-colors">
                                Alumni Syndicates
                            </h3>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-light">
                            Direct portals for medical, engineering, legal, and scientific professional licensing.
                        </p>
                    </div>
                </div>

                {/* CARD 7: Legacy Endowment Fund (Row 3, Spans 2 Columns to finish the Bento Grid) */}
                <div onClick={() => setActiveView("endowment")} className="md:col-span-2 group bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm dark:shadow-md transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl cursor-pointer">
                    <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 rounded-2xl border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] flex-shrink-0 bg-[#D4AF37]/5 dark:bg-[#D4AF37]/10">
                            <Heart size={22} className="fill-[#D4AF37]/20 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4AF37] uppercase block">
                                Legacy Fund Endowment
                            </span>
                            <h3 className="text-2xl font-serif font-bold text-[#001A41] dark:text-white">
                                Support AU
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-light max-w-xl">
                                Invest in research, student scholarships, and smart campuses. Shape the future of education.
                            </p>
                        </div>
                    </div>
                    <button className="w-full sm:w-auto bg-[#0B3C5D] dark:bg-[#D4AF37] hover:bg-[#D4AF37] dark:hover:bg-[#bda032] text-white dark:text-[#001A41] hover:text-[#001A41] font-bold px-8 py-4 rounded-full text-sm shadow-md transition-all duration-300 transform hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2 flex-shrink-0">
                        <span>Give Now</span>
                        <ChevronRight size={14} strokeWidth={3} />
                    </button>
                </div>
            </div>
        </main>
    );

    const renderHeritage = () => (
        <main className="pt-32 pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button onClick={() => setActiveView("portal")} className="mb-8 flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold hover:text-[#001A41] dark:hover:text-white transition-colors">
                <ArrowLeft size={18} /> Back to Gateway
            </button>

            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#091527] flex items-center justify-center text-[#D4AF37] shadow-sm">
                    <BookOpen size={24} />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-[#001A41] dark:text-white tracking-tight">Historical Registry & Early Graduates</h2>
                    <p className="text-xs font-bold text-[#0B3C5D] dark:text-slate-400 uppercase tracking-widest mt-1">The Foundation of Alexandria University's Legacy (Class of 1942 Onward)</p>
                </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium dark:font-light mb-10 max-w-4xl">
                Welcome to the Living History Archive. Alexandria University honors its deeply rooted heritage by preserving the records, historical photos, and achievements of our foundational graduation classes. This portal serves as a digital bridge connecting our modern researchers to the trailblazers who built our international academic prestige.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div
                    className="h-40 rounded-2xl border border-slate-300 dark:border-slate-700 relative overflow-hidden group flex items-end p-4 bg-cover bg-center"
                    style={{ backgroundImage: "url('/imgs/graduates1.jpeg')" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001A41] via-[#001A41]/60 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>
                    <span className="relative text-[#D4AF37] font-bold text-sm tracking-wider z-10 drop-shadow-md">
                        Engineer Graduates
                    </span>
                </div>

                <div
                    className="h-40 rounded-2xl border border-slate-300 dark:border-slate-700 relative overflow-hidden group flex items-end p-4 bg-cover bg-center"
                    style={{ backgroundImage: "url('/imgs/graduates2.jpeg')" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001A41] via-[#001A41]/60 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>
                    <span className="relative text-[#D4AF37] font-bold text-sm tracking-wider z-10 drop-shadow-md">
                        Arts Graduates
                    </span>
                </div>

                <div
                    className="h-40 rounded-2xl border border-slate-300 dark:border-slate-700 relative overflow-hidden group flex items-end p-4 bg-cover bg-center"
                    style={{ backgroundImage: "url('/imgs/graduates3.jpeg')" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001A41] via-[#001A41]/60 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>
                    <span className="relative text-[#D4AF37] font-bold text-sm tracking-wider z-10 drop-shadow-md">
                        Dentistry Graduates
                    </span>
                </div>

                <div
                    className="h-40 rounded-2xl border border-slate-300 dark:border-slate-700 relative overflow-hidden group flex items-end p-4 bg-cover bg-center"
                    style={{ backgroundImage: "url('/imgs/graduates4.jpeg')" }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001A41] via-[#001A41]/60 to-transparent opacity-90 transition-opacity group-hover:opacity-100"></div>
                    <span className="relative text-[#D4AF37] font-bold text-sm tracking-wider z-10 drop-shadow-md">
                        Education Graduates
                    </span>
                </div>
            </div>

            <div className="w-full h-96 md:h-[500px] rounded-3xl bg-slate-900 border border-slate-800 relative overflow-hidden mb-6 flex flex-col items-center justify-center shadow-xl group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/90 flex items-center justify-center text-white z-20 group-hover:scale-110 transition-transform shadow-lg border border-white/20">
                    <Play size={24} className="ml-1" />
                </div>
                <div className="absolute bottom-8 left-8 z-20">
                    <h3 className="text-2xl font-bold text-white mb-2">Alexandria University: A Century of Excellence</h3>
                    <p className="text-sm text-slate-300 font-medium">10:00 min · Historical Archive Reel · El-Shatby Campus, 1942–2024</p>
                </div>
            </div>

            <div className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex flex-col md:flex-row items-center gap-6 shadow-sm">
                <div className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-400">
                    <MapPin size={16} className="text-[#0B3C5D] dark:text-[#89c5ff]" />
                    Main Administration Building, El-Shatby, Alexandria
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-400">
                    <Phone size={16} className="text-[#0B3C5D] dark:text-[#89c5ff]" />
                    +20 3 5921675
                </div>
            </div>
        </main>
    );

    const renderAnalytics = () => (
        <main className="pt-32 pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button onClick={() => setActiveView("portal")} className="mb-8 flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold hover:text-[#001A41] dark:hover:text-white transition-colors">
                <ArrowLeft size={18} /> Back to Gateway
            </button>

            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#091527] flex items-center justify-center text-[#D4AF37] shadow-sm">
                    <BarChart3 size={24} />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-[#001A41] dark:text-white tracking-tight">Global Graduate Analytics Dashboard</h2>
                    <p className="text-xs font-bold text-[#0B3C5D] dark:text-slate-400 uppercase tracking-widest mt-1">Tracking Over 250,000 Alumni Across Six Continents</p>
                </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium dark:font-light mb-10 max-w-4xl">
                The impact of Alexandria University is global. This live data module tracks employment industries, geographical presence, and career growth velocities of our global alumni network. Filter metrics by graduation year, faculty, or current country of residence.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm dark:shadow-md">
                    <p className="text-3xl font-black text-[#D4AF37] mb-2">252,000+</p>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Total Alumni</p>
                </div>
                <div className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm dark:shadow-md">
                    <p className="text-3xl font-black text-[#89c5ff] mb-2">87</p>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Countries</p>
                </div>
                <div className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm dark:shadow-md">
                    <p className="text-3xl font-black text-[#10b981] mb-2">94.7%</p>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Employment Rate</p>
                </div>
                <div className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm dark:shadow-md">
                    <p className="text-3xl font-black text-[#8b5cf6] mb-2">82</p>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Class Years</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm dark:shadow-md h-72 flex flex-col">
                    <h3 className="text-sm font-bold text-[#001A41] dark:text-white mb-6">Annual Graduates & Employment Trends</h3>
                    <div className="flex-1 relative flex items-end">
                        <div className="absolute inset-0 border-b border-l border-slate-200 dark:border-slate-700"></div>
                        {/* Placeholder CSS Chart */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#D4AF37]/10 to-[#D4AF37]/20 clip-path-polygon-[0_100%,100%_100%,100%_0,0_80%] border-t-2 border-[#D4AF37]"></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#89c5ff]/10 to-[#89c5ff]/20 clip-path-polygon-[0_100%,100%_100%,100%_20%,0_90%] border-t-2 border-[#89c5ff] opacity-80 mt-4"></div>
                    </div>
                </div>

                <div className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm dark:shadow-md h-72 flex flex-col">
                    <h3 className="text-sm font-bold text-[#001A41] dark:text-white mb-6">Global Alumni Distribution</h3>
                    <div className="flex-1 flex flex-col justify-between pt-2">
                        {[
                            { label: "Egypt", width: "w-[90%]", color: "bg-[#D4AF37]" },
                            { label: "Gulf States", width: "w-[40%]", color: "bg-[#89c5ff]" },
                            { label: "Europe", width: "w-[25%]", color: "bg-[#D4AF37]" },
                            { label: "Americas", width: "w-[15%]", color: "bg-[#89c5ff]" },
                            { label: "Africa", width: "w-[10%]", color: "bg-[#D4AF37]" },
                            { label: "Asia-Pacific", width: "w-[5%]", color: "bg-[#89c5ff]" }
                        ].map((bar, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <span className="w-20 text-xs font-bold text-slate-500 dark:text-slate-400 text-right">{bar.label}</span>
                                <div className="flex-1 h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                                    <div className={`h-full ${bar.color} ${bar.width} rounded-full`}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-[#0B3C5D] dark:bg-[#001A33] rounded-3xl p-10 flex flex-col items-center justify-center text-center shadow-inner relative overflow-hidden mb-6">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1474B4]/20 via-[#0B3C5D] to-[#0B3C5D] dark:from-[#1474B4]/10 dark:via-[#001A33] dark:to-[#001A33]"></div>
                <Globe size={32} className="text-[#89c5ff] mb-4 relative z-10" />
                <h3 className="text-2xl font-bold text-white relative z-10 mb-2">Active Career Tracking Across 87 Countries</h3>
                <p className="text-[#89c5ff] text-sm font-medium relative z-10">Real-time dataset — updated quarterly by the Decision Support Center</p>
            </div>

            <div className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex flex-col md:flex-row items-center gap-6 shadow-sm">
                <div className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-400">
                    <MapPin size={16} className="text-[#0B3C5D] dark:text-[#89c5ff]" />
                    Information, Documentation & Decision Support Center, Shatby Campus, Alexandria
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-400">
                    <Phone size={16} className="text-[#0B3C5D] dark:text-[#89c5ff]" />
                    +20 3 5910164
                </div>
            </div>
        </main>
    );

    const renderFame = () => (
        <main className="pt-32 pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button onClick={() => setActiveView("portal")} className="mb-8 flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold hover:text-[#001A41] dark:hover:text-white transition-colors">
                <ArrowLeft size={18} /> Back to Gateway
            </button>

            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#091527] flex items-center justify-center text-[#D4AF37] shadow-sm">
                    <Award size={24} />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-[#001A41] dark:text-white tracking-tight">Distinguished Alumni Hall of Fame</h2>
                    <p className="text-xs font-bold text-[#0B3C5D] dark:text-slate-400 uppercase tracking-widest mt-1">Celebrating Global Leaders, Nobel Winners, and Industry Pioneers</p>
                </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium dark:font-light mb-10 max-w-4xl">
                Explore the profiles of innovators who changed the world. From pioneering surgeons and groundbreaking scientists to international policymakers and enterprise founders, our alumni consistently spearhead global development. Read their stories, review their research publications, and explore their lifetime timelines.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[
                    { init: "AZ", name: "Dr. Ahmed Zewail", detail: "Science · 1967", active: true },
                    { init: "ME", name: "Prof. Mostafa El-Sayed", detail: "Science · 1953", active: false },
                    { init: "FE", name: "Dr. Farouk El-Baz", detail: "Science · 1958", active: false },
                    { init: "MY", name: "Dr. Magdi Yacoub", detail: "Medicine · 1957", active: false }
                ].map((alum, i) => (
                    <div key={i} className={`rounded-2xl p-5 cursor-pointer border shadow-sm transition-all ${alum.active ? 'bg-[#F8FAFC] dark:bg-[#001A33]/50 border-[#D4AF37]' : 'bg-white dark:bg-[#091527] border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600'}`}>
                        <div className="w-10 h-10 rounded-full bg-[#0B3C5D] flex items-center justify-center text-white font-bold text-sm mb-4">
                            {alum.init}
                        </div>
                        <h4 className="text-sm font-bold text-[#001A41] dark:text-white mb-1">{alum.name}</h4>
                        <p className="text-xs font-medium text-[#89c5ff]">{alum.detail}</p>
                    </div>
                ))}
            </div>

            <div className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-md mb-6 flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/3 aspect-square md:aspect-auto md:h-64 bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden shrink-0">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600" alt="Alumni" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80" />
                </div>
                <div className="flex-1 space-y-5">
                    <div>
                        <h2 className="text-3xl font-bold text-[#001A41] dark:text-[#D4AF37]">Dr. Ahmed Zewail</h2>
                        <p className="text-sm font-bold text-[#0B3C5D] dark:text-[#89c5ff] mt-1">Physical Chemistry & Ultrafast Science</p>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium dark:font-light">
                        A transformative alumnus of Alexandria University, Dr. Ahmed Zewail graduated from the Faculty of Science in 1967. Their career exemplifies the extraordinary potential cultivated at Alexandria University — from the laboratories of El-Shatby to the world stage.
                    </p>
                    <div className="bg-amber-50 dark:bg-transparent border border-amber-200 dark:border-[#D4AF37]/50 rounded-xl p-4 flex items-center gap-4">
                        <Star className="text-amber-600 dark:text-[#D4AF37]" size={20} />
                        <span className="text-sm font-bold text-amber-800 dark:text-[#D4AF37]">Nobel Prize in Chemistry, 1999 — Femtochemistry</span>
                    </div>
                    <button className="bg-slate-100 dark:bg-[#001A33]/50 hover:bg-slate-200 dark:hover:bg-[#001A33] border border-transparent dark:border-blue-500/30 text-[#001A41] dark:text-[#89c5ff] font-bold text-sm py-3 px-6 rounded-xl flex items-center gap-2 transition-colors">
                        <Play size={16} /> Watch Micro-Documentary
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex flex-col md:flex-row items-center gap-6 shadow-sm">
                <div className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-400">
                    <MapPin size={16} className="text-[#0B3C5D] dark:text-[#89c5ff]" />
                    Office of Public Relations & Alumni Affairs, Central Administration, Alexandria
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-400">
                    <Phone size={16} className="text-[#0B3C5D] dark:text-[#89c5ff]" />
                    +20 3 5921677
                </div>
            </div>
        </main>
    );

    const renderServices = () => (
        <main className="pt-32 pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button onClick={() => setActiveView("portal")} className="mb-8 flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold hover:text-[#001A41] dark:hover:text-white transition-colors">
                <ArrowLeft size={18} /> Back to Gateway
            </button>

            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#091527] flex items-center justify-center text-[#D4AF37] shadow-sm">
                    <FileText size={24} />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-[#001A41] dark:text-white tracking-tight">Lifetime Alumni Service Gateway</h2>
                    <p className="text-xs font-bold text-[#0B3C5D] dark:text-slate-400 uppercase tracking-widest mt-1">On-Demand Document Requests, Library Access, and Career Support</p>
                </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium dark:font-light mb-10 max-w-4xl">
                Your relationship with Alexandria University lasts a lifetime. Use this automated portal to fast-track your administrative tasks without visiting campus. Submit requests securely and download authenticated files instantly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {[
                    { title: "Request Official Digital Transcript (PDF)", desc: "Certified and digitally authenticated academic record, ready for institutional submission.", icon: FileText },
                    { title: "Apply for Lifetime Library & Campus Access Card", desc: "Unrestricted access to all 11 university libraries, digital archives, and campus facilities.", icon: BookOpen },
                    { title: "Activate Alumni Health Insurance Card (Usage Guide Download)", desc: "Comprehensive national healthcare coverage — activate and download full usage documentation.", icon: ShieldCheck },
                    { title: "Submit Certificate Verification & Authentication Order", desc: "Official third-party verification service recognized by government bodies and employers.", icon: FileBadge }
                ].map((svc, i) => (
                    <div key={i} className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 hover:border-[#D4AF37]/50 rounded-2xl p-6 flex items-start gap-5 shadow-sm transition-all cursor-pointer group">
                        <div className="w-12 h-12 rounded-xl border border-[#D4AF37]/30 bg-amber-50 dark:bg-transparent flex items-center justify-center text-[#D4AF37] shrink-0">
                            <svc.icon size={20} />
                        </div>
                        <div className="flex-1 pt-1 space-y-2">
                            <h3 className="text-base font-bold text-[#001A41] dark:text-white group-hover:text-[#D4AF37] transition-colors pr-8">{svc.title}</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{svc.desc}</p>
                        </div>
                        <Download size={20} className="text-slate-400 group-hover:text-[#D4AF37] transition-colors shrink-0 mt-1" />
                    </div>
                ))}
            </div>

            <div className="bg-blue-50 dark:bg-[#001A33]/30 border border-blue-200 dark:border-blue-500/30 rounded-2xl p-6 shadow-sm mb-6">
                <h4 className="flex items-center gap-2 text-sm font-bold text-blue-800 dark:text-[#89c5ff] mb-3">
                    <Globe size={18} /> Secure Online Processing — Egypt Unified Government Digital Services
                </h4>
                <p className="text-sm text-blue-700 dark:text-blue-200 font-medium dark:font-light leading-relaxed">
                    All document requests are processed through Egypt's official government digital platform. Standard processing: 3–5 business days. Express digital delivery available within 24 hours for certified electronic formats.
                </p>
            </div>

            <div className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex flex-col md:flex-row items-center gap-6 shadow-sm">
                <div className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-400">
                    <MapPin size={16} className="text-[#0B3C5D] dark:text-[#89c5ff]" />
                    General Administration for Personnel and Graduate Services, Azarita, Alexandria
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-400">
                    <Phone size={16} className="text-[#0B3C5D] dark:text-[#89c5ff]" />
                    +20 3 4862506
                </div>
            </div>
        </main>
    );

    const renderNetwork = () => (
        <main className="pt-32 pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button onClick={() => setActiveView("portal")} className="mb-8 flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold hover:text-[#001A41] dark:hover:text-white transition-colors">
                <ArrowLeft size={18} /> Back to Gateway
            </button>

            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#091527] flex items-center justify-center text-[#D4AF37] shadow-sm">
                    <Users size={24} />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-[#001A41] dark:text-white tracking-tight">International Alumni Association</h2>
                    <p className="text-xs font-bold text-[#0B3C5D] dark:text-slate-400 uppercase tracking-widest mt-1">Connecting Chapters Across the Arab World, Africa, Europe, and the Americas</p>
                </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium dark:font-light mb-10 max-w-4xl">
                Stay connected, wherever you are. The Alumni Association coordinates regional chapters, organizes networking galas, manages professional mentorship pairings, and hosts annual reunions to keep our global family structurally linked.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                    { title: "UAE Alumni Chapter", desc: "Technology & Finance", mem: "4,200+", badge: "Featured", bcol: "border-[#D4AF37] text-[#D4AF37]" },
                    { title: "Euro-Med Chapter", desc: "Research & Academia", mem: "6,800+", badge: "Featured", bcol: "border-[#D4AF37] text-[#D4AF37]" },
                    { title: "North America Chapter", desc: "Innovation & Startups", mem: "3,100+", badge: "Active", bcol: "border-blue-500/50 text-[#89c5ff] bg-blue-900/20" },
                    { title: "UK & Ireland Chapter", desc: "Medicine & Life Sciences", mem: "2,900+", badge: "Active", bcol: "border-blue-500/50 text-[#89c5ff] bg-blue-900/20" }
                ].map((chap, i) => (
                    <div key={i} className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-40 group cursor-pointer hover:border-[#D4AF37]/50 transition-colors">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-bold text-[#001A41] dark:text-white mb-1">{chap.title}</h3>
                                <p className="text-xs font-medium text-[#89c5ff]">{chap.desc}</p>
                            </div>
                            <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${chap.bcol} bg-transparent`}>{chap.badge}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400">
                            <Users size={16} /> {chap.mem} members
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full h-64 rounded-3xl bg-slate-900 border border-slate-800 relative overflow-hidden mb-6 flex flex-col items-center justify-center shadow-md group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/90 flex items-center justify-center text-white z-20 group-hover:scale-110 transition-transform shadow-lg border border-white/20 mb-4">
                    <Play size={24} className="ml-1" />
                </div>
                <h3 className="text-xl font-bold text-white relative z-20 mb-1">Annual Reunion Highlights 2024</h3>
                <p className="text-sm font-medium text-[#89c5ff] relative z-20">Cairo Grand Nile Ballroom - December 2024</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[
                    { date: "March 2025", title: "Mediterranean Networking Gala", loc: "Rome, Italy" },
                    { date: "April 2025", title: "Gulf Region Alumni Summit", loc: "Dubai, UAE" },
                    { date: "June 2025", title: "Alexandria University Day", loc: "Alexandria, Egypt" }
                ].map((ev, i) => (
                    <div key={i} className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
                        <p className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider mb-2">{ev.date}</p>
                        <h4 className="text-sm font-bold text-[#001A41] dark:text-white mb-4">{ev.title}</h4>
                        <p className="text-xs font-medium text-[#89c5ff]">{ev.loc}</p>
                    </div>
                ))}
            </div>

            <div className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex flex-col md:flex-row items-center gap-6 shadow-sm">
                <div className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-400">
                    <MapPin size={16} className="text-[#0B3C5D] dark:text-[#89c5ff]" />
                    Alumni Association Headquarters, Shatby Student Hub, Alexandria
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-400">
                    <Phone size={16} className="text-[#0B3C5D] dark:text-[#89c5ff]" />
                    +20 3 5926315
                </div>
            </div>
        </main>
    );

    const renderSyndicates = () => (
        <main className="pt-32 pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button onClick={() => setActiveView("portal")} className="mb-8 flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold hover:text-[#001A41] dark:hover:text-white transition-colors">
                <ArrowLeft size={18} /> Back to Gateway
            </button>

            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#091527] flex items-center justify-center text-[#D4AF37] shadow-sm">
                    <Layers size={24} />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-[#001A41] dark:text-white tracking-tight">National Syndicates Integration Registry</h2>
                    <p className="text-xs font-bold text-[#0B3C5D] dark:text-slate-400 uppercase tracking-widest mt-1">Direct Portals for Engineering, Medical, Legal, and Scientific Professional Licensing</p>
                </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium dark:font-light mb-10 max-w-4xl">
                Transition seamlessly from graduation to professional practice. Alexandria University coordinates directly with Egypt's leading professional syndicates to process graduation data instantly, accelerating your official licensing and professional union registrations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {[
                    { title: "Medical Syndicate Registration Track", desc: "Automated data transfer for medical graduates to the Egyptian Medical Syndicate. Includes specialty verification, internship confirmation, and license number assignment.", icon: ShieldCheck },
                    { title: "Engineers Syndicate Automated Data Verification", desc: "Real-time graduation data verification pipeline for all engineering disciplines, streamlining professional engineer membership.", icon: Layers },
                    { title: "Bar Association / Legal Syndicate Clearance Forms", desc: "Secure clearance submission for law graduates preparing to join the Egyptian Bar Association and regional judicial bodies.", icon: BookOpen },
                    { title: "Scientific Professions Syndicate Graduation Records Link", desc: "Direct data bridge for graduates in science, chemistry, physics, and mathematics to accelerate professional union enrollment.", icon: Star }
                ].map((syn, i) => (
                    <div key={i} className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm flex flex-col justify-between group cursor-pointer hover:border-[#D4AF37]/50 transition-colors">
                        <div className="flex items-start gap-5 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 flex items-center justify-center text-blue-600 dark:text-[#89c5ff] shrink-0">
                                <syn.icon size={20} />
                            </div>
                            <div className="space-y-3 pt-1">
                                <h3 className="text-base font-bold text-[#001A41] dark:text-white">{syn.title}</h3>
                                <p className="text-xs text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{syn.desc}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between text-sm font-bold text-emerald-600 dark:text-[#10b981]">
                            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Integration Active</span>
                            <ChevronRight size={16} className="text-slate-400 group-hover:text-[#D4AF37] transition-colors" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm mb-6">
                <h3 className="text-sm font-bold text-amber-600 dark:text-[#D4AF37] mb-8">Automated Registration Process</h3>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {[
                        { step: 1, label: "Graduation Confirmed" },
                        { step: 2, label: "Data Transmitted" },
                        { step: 3, label: "Syndicate Receives" },
                        { step: 4, label: "License Issued" }
                    ].map((step, i) => (
                        <React.Fragment key={i}>
                            <div className="flex flex-col items-center gap-3 text-center w-32">
                                <div className="w-10 h-10 rounded-full bg-[#0B3C5D] dark:bg-[#D4AF37]/20 border border-[#0B3C5D] dark:border-[#D4AF37]/50 flex items-center justify-center text-white dark:text-[#D4AF37] font-bold text-sm z-10">
                                    {step.step}
                                </div>
                                <p className="text-xs font-bold text-[#001A41] dark:text-white leading-tight">{step.label}</p>
                            </div>
                            {i < 3 && <div className="hidden md:block h-px bg-slate-200 dark:bg-slate-700 w-16 mx-auto"></div>}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex flex-col md:flex-row items-center gap-6 shadow-sm">
                <div className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-400">
                    <MapPin size={16} className="text-[#0B3C5D] dark:text-[#89c5ff]" />
                    Central Corporate Liaison Office, Administration Building, Alexandria
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-400">
                    <Phone size={16} className="text-[#0B3C5D] dark:text-[#89c5ff]" />
                    +20 3 4876611
                </div>
            </div>
        </main>
    );

    const renderEndowment = () => (
        <main className="pt-32 pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button onClick={() => setActiveView("portal")} className="mb-8 flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold hover:text-[#001A41] dark:hover:text-white transition-colors">
                <ArrowLeft size={18} /> Back to Gateway
            </button>

            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#091527] flex items-center justify-center text-[#D4AF37] shadow-sm">
                    <Heart size={24} className="fill-[#D4AF37]/20" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-[#001A41] dark:text-white tracking-tight">The Legacy Fund Endowment</h2>
                    <p className="text-xs font-bold text-[#0B3C5D] dark:text-slate-400 uppercase tracking-widest mt-1">Invest in Cutting-Edge Research, Student Scholarships, and Smart Campuses</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <div>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium dark:font-light mb-8">
                        Shape the future of education. Your contributions to the Alexandria University Endowment Fund directly build state-of-the-art laboratory spaces, sponsor low-income student scholarships, launch technology spin-offs, and maintain our global institutional competitiveness.
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-center shadow-sm">
                            <div className="flex justify-center text-[#D4AF37] mb-2"><BookOpen size={20} /></div>
                            <div className="text-xl font-black text-[#001A41] dark:text-[#D4AF37]">1,240</div>
                            <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 mt-1">Scholarships Funded</div>
                        </div>
                        <div className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-center shadow-sm">
                            <div className="flex justify-center text-[#D4AF37] mb-2"><Building2 size={20} /></div>
                            <div className="text-xl font-black text-[#001A41] dark:text-[#D4AF37]">38</div>
                            <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 mt-1">Labs Constructed</div>
                        </div>
                        <div className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-center shadow-sm">
                            <div className="flex justify-center text-[#D4AF37] mb-2"><Globe size={20} /></div>
                            <div className="text-xl font-black text-[#001A41] dark:text-[#D4AF37]">12</div>
                            <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 mt-1">Tech Spin-offs</div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <button className="w-full bg-[#D4AF37] hover:bg-[#bda032] text-[#001A41] font-bold text-sm p-5 rounded-2xl flex items-center justify-between transition-colors shadow-md">
                            <span className="flex items-center gap-3"><Heart size={18} /> Contribute via Unified Government Payment Gateway</span>
                            <ChevronRight size={18} />
                        </button>
                        <button className="w-full bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-[#001A41] dark:text-white font-bold text-sm p-5 rounded-2xl flex items-center justify-between transition-colors shadow-sm">
                            <span className="flex items-center gap-3 text-blue-600 dark:text-[#89c5ff]"><ShieldCheck size={18} /> Review National Anti-Corruption Strategy Compliance</span>
                            <ExternalLink size={18} className="text-slate-400" />
                        </button>
                        <button className="w-full bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-[#001A41] dark:text-white font-bold text-sm p-5 rounded-2xl flex items-center justify-between transition-colors shadow-sm">
                            <span className="flex items-center gap-3 text-amber-600 dark:text-[#D4AF37]"><Download size={18} /> Download Annual Endowment & Budget Allocation Report (PDF)</span>
                            <Download size={18} className="text-slate-400" />
                        </button>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="w-full h-48 rounded-3xl bg-slate-900 border border-slate-800 relative overflow-hidden flex flex-col justify-end p-6 shadow-md">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                        <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider relative z-10 mb-1">Endowment Fund 2024</p>
                        <h3 className="text-4xl font-black text-white relative z-10 mb-1">EGP 450M+</h3>
                        <p className="text-xs text-slate-300 font-medium relative z-10">Total assets under management</p>
                    </div>

                    <div className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
                        <h3 className="text-base font-bold text-[#001A41] dark:text-white mb-6">Fund Allocation 2024</h3>
                        <div className="space-y-5">
                            <div>
                                <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-300 mb-2">
                                    <span>Research & Laboratories</span>
                                    <span className="text-[#D4AF37]">38%</span>
                                </div>
                                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                                    <div className="bg-[#D4AF37] h-1.5 rounded-full w-[38%]"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-300 mb-2">
                                    <span>Student Scholarships</span>
                                    <span className="text-[#89c5ff]">32%</span>
                                </div>
                                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                                    <div className="bg-[#89c5ff] h-1.5 rounded-full w-[32%]"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-300 mb-2">
                                    <span>Campus Infrastructure</span>
                                    <span className="text-[#10b981]">20%</span>
                                </div>
                                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                                    <div className="bg-[#10b981] h-1.5 rounded-full w-[20%]"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-300 mb-2">
                                    <span>Technology Spin-offs</span>
                                    <span className="text-[#8b5cf6]">10%</span>
                                </div>
                                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                                    <div className="bg-[#8b5cf6] h-1.5 rounded-full w-[10%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex flex-col md:flex-row items-center gap-6 shadow-sm">
                <div className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-400">
                    <MapPin size={16} className="text-[#0B3C5D] dark:text-[#89c5ff]" />
                    General Administration for Budget, Accounts & Special Funds, Shatby, Alexandria
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-400">
                    <Phone size={16} className="text-[#0B3C5D] dark:text-[#89c5ff]" />
                    +20 3 5921676
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-600 dark:text-slate-400">
                    <Mail size={16} className="text-[#0B3C5D] dark:text-[#89c5ff]" />
                    Alumni-Giving@alexu.edu.eg
                </div>
            </div>
        </main>
    );

    return (
        <div className="bg-[#F8FAFC] dark:bg-[#040B16] min-h-screen text-[#001A41] dark:text-white font-sans antialiased transition-colors duration-500">
            <Hero showFullHero={false} />
            {activeView === "portal" && renderPortal()}
            {activeView === "heritage" && renderHeritage()}
            {activeView === "analytics" && renderAnalytics()}
            {activeView === "fame" && renderFame()}
            {activeView === "services" && renderServices()}
            {activeView === "network" && renderNetwork()}
            {activeView === "syndicates" && renderSyndicates()}
            {activeView === "endowment" && renderEndowment()}
        </div>
    );
}