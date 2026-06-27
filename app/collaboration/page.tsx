"use client";

import React, { useState } from 'react';
import Hero from "@/components/Hero";
import { 
    Globe, Users, BarChart2, Building2, ChevronRight, ArrowLeft, 
    Calendar, MapPin, Phone, Mail, FileText, CheckCircle, Clock, 
    ExternalLink, BookOpen
} from 'lucide-react';

type CollabView = "hub" | "partnerships" | "professors" | "exchange" | "iro";

export default function CollaborationPage() {
    const [activeView, setActiveView] = useState<CollabView>("hub");

    const collaborationCards = [
        {
            id: "partnerships",
            title: "International Partnerships",
            icon: Globe,
            description: "Explore Alexandria University's active Erasmus+ KA171 framework agreements, bilateral MoUs, and joint-degree pipelines with leading European and international research institutions.",
            metricValue: "17",
            metricLabel: "Active Alliances"
        },
        {
            id: "professors",
            title: "Visiting Professors",
            icon: Users,
            description: "Browse distinguished international scholar profiles, access live seminar schedules, and connect with visiting faculty running specialised postgraduate workshops.",
            metricValue: "3",
            metricLabel: "Upcoming Seminars"
        },
        {
            id: "exchange",
            title: "Student Exchange",
            icon: BarChart2,
            description: "Track study-abroad GPA performance, review open exchange vacancies, check credit-hour transfer tables, and submit language certification documentation.",
            metricValue: "12",
            metricLabel: "Open Slots · Fall 2025"
        },
        {
            id: "iro",
            title: "International Relations Office",
            icon: Building2,
            description: "Access visa sponsorship assistance, foreign credential evaluations, inbound student accommodation coordination, and virtual advising appointments with IRO officers.",
            metricValue: "4",
            metricLabel: "Service Tracks"
        }
    ];

    const renderHub = () => (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center gap-4 mb-10">
                <div className="w-1 h-14 bg-[#0B3C5D] dark:bg-[#D4AF37] rounded-full"></div>
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#001A41] dark:text-white tracking-tight">
                        Student Life & Collaboration Portal Hub
                    </h1>
                    <p className="text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
                        International Academic Mobility & Relations — AY 2024–2025
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {collaborationCards.map((card, idx) => (
                    <div 
                        key={idx} 
                        onClick={() => setActiveView(card.id as CollabView)}
                        className="group flex flex-col bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 hover:border-[#0B3C5D]/40 dark:hover:border-[#D4AF37]/50 rounded-xl p-6 shadow-sm hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 cursor-pointer min-h-[320px]"
                    >
                        <div className="w-12 h-12 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-white/5 flex items-center justify-center text-[#0B3C5D] dark:text-[#D4AF37] mb-6 group-hover:scale-105 transition-transform duration-300">
                            <card.icon size={22} strokeWidth={1.5} />
                        </div>
                        
                        <h3 className="text-lg font-bold text-[#001A41] dark:text-white mb-3">
                            {card.title}
                        </h3>
                        
                        <p className="text-[13px] text-slate-600 dark:text-slate-400 leading-relaxed flex-grow font-medium dark:font-normal">
                            {card.description}
                        </p>
                        
                        <div className="w-full h-px bg-slate-100 dark:bg-slate-800/80 my-5 transition-colors group-hover:bg-slate-200 dark:group-hover:bg-slate-700"></div>
                        
                        <div className="flex items-end justify-between mt-auto">
                            <div>
                                <div className="text-3xl font-black text-[#0B3C5D] dark:text-[#D4AF37] leading-none mb-1.5">
                                    {card.metricValue}
                                </div>
                                <div className="text-[11px] text-slate-500 dark:text-slate-500 font-bold dark:font-medium tracking-wide">
                                    {card.metricLabel}
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-[13px] font-bold text-[#0B3C5D] dark:text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                                Open <ChevronRight size={14} strokeWidth={2.5} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderPartnerships = () => (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button onClick={() => setActiveView("hub")} className="mb-8 flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold hover:text-[#001A41] dark:hover:text-white transition-colors">
                <ArrowLeft size={18} /> Back to Gateway
            </button>
            
            <div className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm dark:shadow-md mb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-white/5 flex items-center justify-center text-amber-600 dark:text-[#D4AF37]">
                            <Globe size={24} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-[#001A41] dark:text-white">International Partnerships</h2>
                            <p className="text-xs font-bold text-[#0B3C5D] dark:text-slate-400">Global Academic Alliances & Shared Degree Networks</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="bg-amber-50 dark:bg-[#D4AF37]/10 text-amber-700 dark:text-[#D4AF37] border border-amber-200 dark:border-[#D4AF37]/30 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider">6 ACTIVE MOUS</span>
                        <span className="bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-[#89c5ff] border border-blue-200 dark:border-blue-500/30 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider">3 Erasmus+ KA171</span>
                    </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium dark:font-light">
                    Alexandria University maintains active strategic partnerships with top-tier international institutions to establish collaborative research initiatives, co-funded grants, and dual-degree academic pipelines. Track real-time institutional agreement statuses across European, North American, and Asian research networks.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                    { value: "17", label: "Active MoUs" },
                    { value: "3", label: "Erasmus+ KA171" },
                    { value: "4", label: "Joint Degrees" },
                    { value: "12", label: "Partner Countries" }
                ].map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-black text-[#0B3C5D] dark:text-[#D4AF37] mb-2">{stat.value}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 font-bold dark:font-medium">{stat.label}</div>
                    </div>
                ))}
            </div>

            <h3 className="text-sm font-bold text-[#001A41] dark:text-[#D4AF37] uppercase tracking-widest mb-4">Active Framework Agreements</h3>
            
            <div className="space-y-4 mb-8">
                {[
                    { country: "GB", name: "University of Manchester", loc: "United Kingdom", scope: "Research Mobility", since: "2019", type: "Erasmus+ KA171", tags: ["Material Science", "Environmental Engineering"], contact: "Prof. Sarah O'Brien — s.obrien@manchester.ac.uk" },
                    { country: "FR", name: "Sorbonne University", loc: "France", scope: "Student & Staff Exchange", since: "2021", type: "Erasmus+ KA171", tags: ["Linguistics", "Mediterranean Studies"], contact: "Dr. Marie Leclerc — m.leclerc@sorbonne.fr" },
                    { country: "IT", name: "Sapienza University of Rome", loc: "Italy", scope: "Dual-Degree Joint Masters", since: "2020", type: "Erasmus+ KA171", tags: ["Architecture", "Civil Engineering"], contact: "Prof. Marco Ferretti — m.ferretti@uniroma1.it" },
                    { country: "ES", name: "University of Barcelona", loc: "Spain", scope: "Erasmus Mobility", since: "2018", type: "Bilateral MoU", tags: ["Pharmacy", "Biomedicine"], contact: "Dr. Elena Rossi — e.rossi@ub.edu" }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:border-[#0B3C5D]/30 dark:hover:border-slate-600 transition-colors">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                            <div className="flex items-center gap-4">
                                <div className="text-lg font-black text-slate-400 dark:text-slate-500">{item.country}</div>
                                <div>
                                    <h4 className="text-base font-bold text-[#001A41] dark:text-white">{item.name}</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{item.loc} · {item.scope} · Since {item.since}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-slate-600 dark:text-[#D4AF37] border border-slate-200 dark:border-[#D4AF37]/30 bg-slate-50 dark:bg-transparent px-3 py-1 rounded-md">{item.type}</span>
                                <span className="text-[10px] font-bold text-white bg-[#0B3C5D] dark:bg-slate-700 px-3 py-1.5 rounded-md uppercase tracking-widest">Active</span>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t border-slate-100 dark:border-slate-800/80 pt-4">
                            <div className="flex flex-wrap gap-2">
                                {item.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="text-[11px] font-bold text-[#0B3C5D] dark:text-[#89c5ff] bg-blue-50 dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 px-2.5 py-1 rounded-md">{tag}</span>
                                ))}
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium text-right">{item.contact}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="flex items-center gap-4">
                <button className="bg-amber-50 dark:bg-transparent hover:bg-amber-100 dark:hover:bg-white/5 border border-amber-200 dark:border-[#D4AF37]/50 text-amber-700 dark:text-[#D4AF37] font-bold text-xs py-3 px-6 rounded-xl flex items-center gap-2 transition-colors">
                    <FileText size={16} /> Partnership Registry
                </button>
                <button className="bg-slate-50 dark:bg-transparent hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs py-3 px-6 rounded-xl flex items-center gap-2 transition-colors">
                    <ExternalLink size={16} /> MoU Database
                </button>
            </div>
        </div>
    );

    const renderProfessors = () => (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button onClick={() => setActiveView("hub")} className="mb-8 flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold hover:text-[#001A41] dark:hover:text-white transition-colors">
                <ArrowLeft size={18} /> Back to Gateway
            </button>

            <div className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm dark:shadow-md mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-white/5 flex items-center justify-center text-blue-600 dark:text-[#89c5ff]">
                        <Users size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-[#001A41] dark:text-white">Visiting Professors</h2>
                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400">Global Scholars Corridor & Distinguished Expert Lectures</p>
                    </div>
                </div>
                <span className="bg-amber-50 dark:bg-transparent text-amber-700 dark:text-[#D4AF37] border border-amber-200 dark:border-[#D4AF37]/50 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider">3 Upcoming</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 px-2 font-medium dark:font-light leading-relaxed">
                Bringing international research expertise directly to our lecture halls. The Global Scholars Portal hosts scholar profiles, lecture timetables, and synchronous webinar connection nodes for visiting faculty at Alexandria University's faculties.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-4 flex flex-col gap-3">
                    {[
                        { initials: "JD", name: "Prof. Dr. Jean-Louis Dupont", field: "Nanotechnology & Chemical Synthesis", status: "Soon", active: true },
                        { initials: "AK", name: "Prof. Dr. Amira Khalil", field: "Biomedical Engineering", status: "Soon", active: false },
                        { initials: "RA", name: "Prof. Dr. Rodrigo Alvarez", field: "Marine Environmental Science", status: "Soon", active: false },
                        { initials: "YT", name: "Prof. Dr. Yuki Tanaka", field: "Quantum Materials Physics", status: "Done", active: false }
                    ].map((prof, idx) => (
                        <div key={idx} className={`border rounded-xl p-4 flex items-center justify-between cursor-pointer transition-colors shadow-sm ${prof.active ? 'bg-slate-50 dark:bg-[#001A33]/50 border-slate-300 dark:border-blue-500/30' : 'bg-white dark:bg-[#091527] border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'}`}>
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${prof.active ? 'bg-[#0B3C5D] text-white dark:bg-blue-900/50 dark:text-[#89c5ff]' : 'bg-slate-100 text-slate-500 dark:bg-white/5 dark:text-slate-400'}`}>
                                    {prof.initials}
                                </div>
                                <div>
                                    <h4 className={`text-sm font-bold ${prof.active ? 'text-[#001A41] dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>{prof.name}</h4>
                                    <p className="text-[11px] text-slate-500 dark:text-slate-500 font-medium">{prof.field}</p>
                                </div>
                            </div>
                            <span className={`text-[10px] font-bold px-2 py-1 rounded-md border ${prof.status === 'Soon' ? 'bg-slate-50 dark:bg-transparent text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700' : 'bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-slate-600 border-slate-200 dark:border-white/10'}`}>
                                {prof.status}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="lg:col-span-8 bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm dark:shadow-md">
                    <div className="flex items-start justify-between border-b border-slate-100 dark:border-slate-800/80 pb-6 mb-6">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-xl bg-[#0B3C5D] dark:bg-white/10 flex items-center justify-center text-white dark:text-[#89c5ff] font-bold text-xl shadow-md">
                                JD
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#001A41] dark:text-white">Prof. Dr. Jean-Louis Dupont</h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1">École Polytechnique, Paris</p>
                                <p className="text-xs font-bold text-[#0B3C5D] dark:text-[#89c5ff]">Nanotechnology & Chemical Synthesis</p>
                            </div>
                        </div>
                        <span className="text-[10px] font-bold px-3 py-1.5 rounded-md border bg-slate-50 dark:bg-transparent text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 uppercase tracking-widest">
                            Upcoming
                        </span>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h4 className="text-[10px] font-bold text-amber-600 dark:text-[#D4AF37] uppercase tracking-widest mb-3">Seminar</h4>
                            <h2 className="text-lg font-bold text-[#001A41] dark:text-white mb-3">Advanced Nano-Systems Fabrication and Chemical Synthesis Tracks</h2>
                            <div className="flex items-center gap-6 text-xs font-bold dark:font-medium text-slate-500 dark:text-slate-400">
                                <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#0B3C5D] dark:text-[#89c5ff]" /> Tomorrow, 11:00 AM</span>
                                <span className="flex items-center gap-1.5"><MapPin size={14} className="text-[#0B3C5D] dark:text-[#89c5ff]" /> Faculty of Science Center, Moharram Bek</span>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-[10px] font-bold text-amber-600 dark:text-[#D4AF37] uppercase tracking-widest mb-3">Scholar Bio</h4>
                            <p className="text-sm text-slate-600 dark:text-slate-300 font-medium dark:font-light leading-relaxed">
                                Leading researcher in nano-material deposition and chemical vapour synthesis with over 140 Scopus-indexed publications across Nature and Advanced Materials journals.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="bg-slate-50 dark:bg-transparent border border-slate-200 dark:border-slate-700 rounded-xl p-4 text-center">
                                <div className="text-2xl font-black text-[#001A41] dark:text-[#D4AF37]">6</div>
                                <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Sessions</div>
                            </div>
                            <div className="bg-slate-50 dark:bg-transparent border border-slate-200 dark:border-slate-700 rounded-xl p-4 text-center">
                                <div className="text-2xl font-black text-[#001A41] dark:text-[#D4AF37]">38</div>
                                <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Enrolled</div>
                            </div>
                            <div className="bg-slate-50 dark:bg-transparent border border-slate-200 dark:border-slate-700 rounded-xl p-4 text-center">
                                <div className="text-2xl font-black text-[#001A41] dark:text-[#D4AF37]">3</div>
                                <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Topics</div>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <span className="text-[11px] font-bold text-amber-700 dark:text-[#D4AF37] bg-amber-50 dark:bg-transparent border border-amber-200 dark:border-[#D4AF37]/30 px-3 py-1.5 rounded-md">Nano-fabrication</span>
                            <span className="text-[11px] font-bold text-amber-700 dark:text-[#D4AF37] bg-amber-50 dark:bg-transparent border border-amber-200 dark:border-[#D4AF37]/30 px-3 py-1.5 rounded-md">CVD processes</span>
                            <span className="text-[11px] font-bold text-amber-700 dark:text-[#D4AF37] bg-amber-50 dark:bg-transparent border border-amber-200 dark:border-[#D4AF37]/30 px-3 py-1.5 rounded-md">Self-assembly</span>
                        </div>

                        <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                            <button className="bg-[#0B3C5D] dark:bg-transparent hover:bg-[#001A41] dark:hover:bg-white/5 border border-transparent dark:border-[#89c5ff]/50 text-white dark:text-[#89c5ff] font-bold text-xs py-3 px-6 rounded-xl flex items-center gap-2 transition-colors shadow-md dark:shadow-none">
                                <Calendar size={16} /> Reserve Seminar Seat
                            </button>
                            <button className="bg-slate-50 dark:bg-transparent hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs py-3 px-6 rounded-xl flex items-center gap-2 transition-colors shadow-sm dark:shadow-none">
                                <BookOpen size={16} /> Archived Symposia
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderExchange = () => (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button onClick={() => setActiveView("hub")} className="mb-8 flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold hover:text-[#001A41] dark:hover:text-white transition-colors">
                <ArrowLeft size={18} /> Back to Gateway
            </button>

            <div className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm dark:shadow-md mb-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-white/5 flex items-center justify-center text-amber-600 dark:text-[#D4AF37]">
                            <BarChart2 size={24} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-[#001A41] dark:text-white">Student Exchange</h2>
                            <p className="text-xs font-bold text-[#0B3C5D] dark:text-slate-400">Outbound Study Abroad & Inbound Mobility Gateway</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="bg-amber-50 dark:bg-transparent text-amber-700 dark:text-[#D4AF37] border border-amber-200 dark:border-[#D4AF37]/50 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider">12 Open Slots</span>
                        <span className="bg-blue-50 dark:bg-transparent text-blue-700 dark:text-[#89c5ff] border border-blue-200 dark:border-blue-500/30 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider">2 Active</span>
                    </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium dark:font-light">
                    Fully automated portal replacing all paperwork queues — browse funded study-abroad openings, check credit-hour transfer equivalency tables, submit language certification forms, and track real-time GPA performance across host institutions worldwide.
                </p>
            </div>

            <div className="flex gap-2 mb-6 border-b border-slate-200 dark:border-slate-800 pb-1">
                <button className="px-5 py-2.5 text-xs font-bold text-[#001A41] dark:text-[#D4AF37] border-b-2 border-[#001A41] dark:border-[#D4AF37]">GPA TRACKER</button>
                <button className="px-5 py-2.5 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-[#001A41] dark:hover:text-white transition-colors">OPEN SLOTS</button>
                <button className="px-5 py-2.5 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-[#001A41] dark:hover:text-white transition-colors">REQUIREMENTS</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { country: "ES", name: "Nour Hossam El-Din", host: "University of Barcelona", term: "Fall 2024–2025", alexGpa: 3.72, hostGpa: 3.65, cred: "18/21", status: "Active", visa: "Visa approved" },
                    { country: "FR", name: "Karim Mostafa Youssef", host: "Sorbonne University", term: "Spring 2024–2025", alexGpa: 3.84, hostGpa: 3.91, cred: "21/21", status: "Completed", visa: "Visa approved" },
                    { country: "DE", name: "Dina Ashraf Mansour", host: "Freie Universität Berlin", term: "Fall 2025–2026", alexGpa: 3.61, hostGpa: 0, cred: "0/18", status: "Pending", visa: "Visa pending" },
                    { country: "GB", name: "Omar Sayed Badr", host: "University of Manchester", term: "Fall 2024–2025", alexGpa: 3.55, hostGpa: 3.48, cred: "15/21", status: "Active", visa: "Visa approved" }
                ].map((student, idx) => (
                    <div key={idx} className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-base font-bold text-[#001A41] dark:text-white flex items-center gap-2">
                                    <span className="text-xs font-black text-slate-400 dark:text-slate-500">{student.country}</span> {student.name}
                                </h3>
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{student.host} · {student.term}</p>
                            </div>
                            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border uppercase tracking-wider ${student.status === 'Active' ? 'bg-blue-50 dark:bg-transparent text-blue-700 dark:text-[#89c5ff] border-blue-200 dark:border-[#89c5ff]/30' : student.status === 'Completed' ? 'bg-amber-50 dark:bg-transparent text-amber-700 dark:text-[#D4AF37] border-amber-200 dark:border-[#D4AF37]/30' : 'bg-slate-50 dark:bg-transparent text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'}`}>
                                {student.status}
                            </span>
                        </div>
                        
                        <div className="space-y-4 mb-6">
                            <div>
                                <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-300 mb-1.5">
                                    <span>AlexU GPA</span>
                                    <span className="text-amber-600 dark:text-[#D4AF37]">{student.alexGpa.toFixed(2)}</span>
                                </div>
                                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                                    <div className="bg-amber-500 dark:bg-[#D4AF37] h-1.5 rounded-full" style={{ width: `${(student.alexGpa/4)*100}%` }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-300 mb-1.5">
                                    <span>Host GPA</span>
                                    <span className="text-blue-600 dark:text-[#89c5ff]">{student.hostGpa > 0 ? student.hostGpa.toFixed(2) : '-.--'}</span>
                                </div>
                                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                                    <div className="bg-blue-500 dark:bg-[#89c5ff] h-1.5 rounded-full" style={{ width: `${(student.hostGpa/4)*100}%` }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center text-xs font-bold border-t border-slate-100 dark:border-slate-800 pt-4">
                            <span className="text-slate-600 dark:text-slate-400">Credits: <span className="text-amber-600 dark:text-[#D4AF37]">{student.cred} hrs</span></span>
                            <span className={`flex items-center gap-1.5 ${student.visa.includes('approved') ? 'text-blue-600 dark:text-[#89c5ff]' : 'text-amber-600 dark:text-[#D4AF37]'}`}>
                                <CheckCircle size={12} /> {student.visa}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderIRO = () => (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button onClick={() => setActiveView("hub")} className="mb-8 flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold hover:text-[#001A41] dark:hover:text-white transition-colors">
                <ArrowLeft size={18} /> Back to Gateway
            </button>

            <div className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm dark:shadow-md mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-white/5 flex items-center justify-center text-blue-600 dark:text-[#89c5ff]">
                        <Building2 size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-[#001A41] dark:text-white">International Relations Office</h2>
                        <p className="text-xs font-bold text-slate-500 dark:text-slate-400">Diplomatic Logistics, Visa Sponsorship & Welcome Desk</p>
                    </div>
                </div>
                <span className="bg-blue-50 dark:bg-transparent text-blue-700 dark:text-[#89c5ff] border border-blue-200 dark:border-blue-500/30 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider">Operational</span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 px-2 font-medium dark:font-light leading-relaxed">
                The central administrative hub managing all international mobility logistics — visa sponsorship, foreign credential evaluations, accommodation coordination for incoming international students, and diplomatic clearance protocols for outbound faculty and students.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-4 flex flex-col gap-4">
                    <div className="space-y-2">
                        <button className="w-full flex items-center justify-between text-left text-sm font-bold p-4 rounded-xl bg-slate-50 dark:bg-[#001A33]/50 border border-blue-200 dark:border-blue-500/30 text-[#001A41] dark:text-[#89c5ff] shadow-sm">
                            <span className="flex items-center gap-3"><CheckCircle size={16} /> Outbound Visa Endorsement</span>
                            <ChevronRight size={16} className="rotate-90" />
                        </button>
                        <button className="w-full flex items-center justify-between text-left text-sm font-bold p-4 rounded-xl bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-white transition-colors shadow-sm">
                            <span className="flex items-center gap-3"><Users size={16} className="text-slate-400" /> Inbound Student Liaison</span>
                            <ChevronRight size={16} className="text-slate-400" />
                        </button>
                        <button className="w-full flex items-center justify-between text-left text-sm font-bold p-4 rounded-xl bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-white transition-colors shadow-sm">
                            <span className="flex items-center gap-3"><FileText size={16} className="text-slate-400" /> Foreign Credential Evaluation</span>
                            <ChevronRight size={16} className="text-slate-400" />
                        </button>
                        <button className="w-full flex items-center justify-between text-left text-sm font-bold p-4 rounded-xl bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-white transition-colors shadow-sm">
                            <span className="flex items-center gap-3"><Calendar size={16} className="text-slate-400" /> Virtual IRO Advisory Sessions</span>
                            <ChevronRight size={16} className="text-slate-400" />
                        </button>
                    </div>

                    <div className="bg-white dark:bg-transparent border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm dark:shadow-none mt-2">
                        <h4 className="text-xs font-bold text-amber-600 dark:text-[#D4AF37] uppercase tracking-widest mb-4">IRO Direct Contact</h4>
                        <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300 font-medium">
                            <div className="flex items-center gap-3"><Phone size={14} className="text-slate-400 dark:text-slate-500" /> +20 3 5921678</div>
                            <div className="flex items-center gap-3"><Mail size={14} className="text-slate-400 dark:text-slate-500" /> iro.support@alexu.edu.eg</div>
                            <div className="flex items-center gap-3"><Clock size={14} className="text-slate-400 dark:text-slate-500" /> Sun–Thu 09:00–15:00 EET</div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-8 bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm dark:shadow-md">
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800/80">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-white/5 flex items-center justify-center text-blue-600 dark:text-[#89c5ff] border border-blue-100 dark:border-white/10">
                            <CheckCircle size={18} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-[#001A41] dark:text-white">Outbound Visa Endorsement</h3>
                            <p className="text-xs font-bold text-blue-600 dark:text-[#89c5ff]">IRO Service Track</p>
                        </div>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium dark:font-light mb-8">
                        Automated verification pipeline confirming study-abroad acceptance letters and issuing official university sponsorship credentials for embassy submission — supporting Schengen, UK, and US visa categories.
                    </p>

                    <h4 className="text-xs font-bold text-amber-600 dark:text-[#D4AF37] uppercase tracking-widest mb-4">Process Steps</h4>
                    <div className="space-y-4 relative before:absolute before:inset-0 before:ml-3.5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-800 before:to-transparent mb-10">
                        {[
                            "Upload acceptance letter (PDF)",
                            "System auto-verifies enrollment status",
                            "IRO issues signed digital sponsorship letter",
                            "Download sealed PDF within 3 working days"
                        ].map((step, i) => (
                            <div key={i} className="relative flex items-center gap-4">
                                <div className="w-7 h-7 rounded-full bg-slate-50 dark:bg-[#040B16] border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[10px] font-bold text-[#001A41] dark:text-[#89c5ff] z-10 shrink-0">
                                    {i + 1}
                                </div>
                                <p className="text-sm font-bold dark:font-medium text-slate-700 dark:text-slate-300">{step}</p>
                            </div>
                        ))}
                    </div>

                    <h4 className="text-xs font-bold text-amber-600 dark:text-[#D4AF37] uppercase tracking-widest mb-4">Embassy & Consulate Directory</h4>
                    <div className="space-y-3">
                        {[
                            { name: "Embassy of Italy (Rome)", type: "Schengen", detail: "Erasmus+ letter template accepted", phone: "+39 06 8544 1" },
                            { name: "Embassy of France (Cairo)", type: "Schengen", detail: "VFS appointment required", phone: "+20 2 3567 3200" },
                            { name: "UK Visa & Immigration (Cairo)", type: "Student Visa", detail: "CAS number required from host", phone: "+20 2 2795 7000" },
                            { name: "Embassy of Spain (Cairo)", type: "Schengen", detail: "Bank statement min. €5,000", phone: "+20 2 2735 8485" }
                        ].map((embassy, i) => (
                            <div key={i} className="bg-slate-50 dark:bg-transparent border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col md:flex-row justify-between md:items-center gap-4 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                                <div>
                                    <h5 className="text-sm font-bold text-[#001A41] dark:text-white mb-1">{embassy.name}</h5>
                                    <p className="text-xs text-slate-500 font-medium flex items-center gap-1.5"><Phone size={12} /> {embassy.phone}</p>
                                </div>
                                <div className="md:text-right">
                                    <span className="inline-block bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-[#89c5ff] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide mb-1.5">{embassy.type}</span>
                                    <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{embassy.detail}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="bg-[#F8FAFC] dark:bg-[#040B16] min-h-screen text-[#001A41] dark:text-white font-sans antialiased transition-colors duration-500 flex flex-col">
            <Hero showFullHero={false} />
            <main className="flex-1 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto w-full">
                {activeView === "hub" && renderHub()}
                {activeView === "partnerships" && renderPartnerships()}
                {activeView === "professors" && renderProfessors()}
                {activeView === "exchange" && renderExchange()}
                {activeView === "iro" && renderIRO()}
            </main>
        </div>
    );
}