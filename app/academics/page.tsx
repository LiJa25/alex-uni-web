"use client";

import React, { useEffect } from 'react';
import Hero from "@/components/Hero";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'; // الاستيراد الجديد لالتقاط الرابط
import {
    Star,
    MapPin,
    Phone,
    Video,
    Activity,
    Scale,
    Smile,
    Atom,
    ScrollText,
    Palette,
    TrendingUp,
    Flame
} from 'lucide-react';

const faculties = [
    {
        id: "medicine",
        name: "FACULTY OF MEDICINE",
        subtitle: "Medical Excellence Since 1942",
        description: "World-class hospital training, advanced clinical research labs, and pioneering healthcare initiatives.",
        bullets: ["Surgery", "Pediatrics", "Neuroscience"],
        location: "ElKhartoom Square, El-Azarita...",
        phone: "+20 3 4862506 / 012 740 8435",
        glowColor: "border-[#4A1525] hover:border-[#9D174D] shadow-[inset_0_0_30px_rgba(74,21,37,0.3)] hover:shadow-[0_0_20px_rgba(157,23,77,0.4)]",
        icon: <Activity size={32} className="text-[#D4AF37]" />,
    },
    {
        id: "law",
        name: "FACULTY OF LAW",
        subtitle: "Legal Leadership & Advocacy",
        description: "Comprehensive legal education, competitive moot court halls, and international human rights frameworks.",
        bullets: ["Corporate Law", "Human Rights", "International Arbitration"],
        location: "Sooter Street, Al Shatebi / Al Azaritah, Bab...",
        phone: "+20 3 4876611",
        glowColor: "border-[#1A365D] hover:border-[#2563EB] shadow-[inset_0_0_30px_rgba(26,54,93,0.3)] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]",
        icon: <Scale size={32} className="text-[#D4AF37]" />,
    },
    {
        id: "dentistry",
        name: "FACULTY OF DENTISTRY",
        subtitle: "Innovative Oral Care & Surgery",
        description: "State-of-the-art dental clinics, modern phantom labs, and advanced biomaterials research.",
        bullets: ["Orthodontics", "Endodontics", "Oral & Maxillofacial Surgery"],
        location: "Champollion Street, Azarita (In front of Ale...",
        phone: "+20 3 4868308",
        glowColor: "border-[#0F4C5C] hover:border-[#06B6D4] shadow-[inset_0_0_30px_rgba(15,76,92,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]",
        icon: <Smile size={32} className="text-[#D4AF37]" />,
    },
    {
        id: "science",
        name: "FACULTY OF SCIENCE",
        subtitle: "Discovery, Research & Innovation",
        description: "Advanced nanotechnology centers, specialized chemical analysis, and international scientific publication hubs.",
        bullets: ["Physics", "Molecular Biology", "Pure Mathematics"],
        location: "Baghdad Street, Moharam Be...",
        phone: "+20 3 3921595 / +20 3 3922919",
        glowColor: "border-[#714E15] hover:border-[#EAB308] shadow-[inset_0_0_30px_rgba(113,78,21,0.3)] hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]",
        icon: <Atom size={32} className="text-[#D4AF37]" />,
    },
    {
        id: "arts",
        name: "FACULTY OF ARTS",
        subtitle: "Preserving Culture & Human Thought",
        description: "Advanced linguistic studies, historical research archives, and deep philosophical exploration.",
        bullets: ["Lexicology & Linguistics", "Archeology", "Philosophy"],
        location: "Sooter Street, El-Shatby, Alexandria.",
        phone: "+20 3 5921676",
        glowColor: "border-[#3B1C5E] hover:border-[#8B5CF6] shadow-[inset_0_0_30px_rgba(59,28,94,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]",
        icon: <ScrollText size={32} className="text-[#D4AF37]" />,
    },
    {
        id: "fine-arts",
        name: "FACULTY OF FINE ARTS",
        subtitle: "Creativity, Architecture & Expression",
        description: "Specialized design studios, open-concept art galleries, and architectural heritage modeling projects.",
        bullets: ["Architecture", "Painting", "Sculpture", "Visual Communication"],
        location: "16 El-Gortay Street, Mazloum, El-Raml,...",
        phone: "+20 3 5829154",
        glowColor: "border-[#5E3219] hover:border-[#D97706] shadow-[inset_0_0_30px_rgba(94,50,25,0.3)] hover:shadow-[0_0_20px_rgba(217,119,6,0.4)]",
        icon: <Palette size={32} className="text-[#D4AF37]" />,
    },
    {
        id: "business",
        name: "FACULTY OF BUSINESS",
        subtitle: "Shaping Global Markets & Leaders",
        description: "High-tech business analytics platforms, incubator startup hubs, and international corporate partnerships.",
        bullets: ["Fintech", "Data Analytics", "Strategic Management"],
        location: "El-Guesh Road, El-Shatby, Alexandria.",
        phone: "+20 3 5910164",
        glowColor: "border-[#064E3B] hover:border-[#10B981] shadow-[inset_0_0_30px_rgba(6,78,59,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]",
        icon: <TrendingUp size={32} className="text-[#D4AF37]" />,
    },
    {
        id: "education",
        name: "FACULTY OF EDUCATION",
        subtitle: "Empowering Future Educators",
        description: "Advanced psychological training modules, modern e-learning curriculum centers, and community teaching initiatives.",
        bullets: ["Educational Psychology", "Curriculum Design", "Instructional Technology"],
        location: "El-Guesh Road, Al Shatebi, Alexandria.",
        phone: "+20 3 5926315",
        glowColor: "border-[#1E3A8A] hover:border-[#3B82F6] shadow-[inset_0_0_30px_rgba(30,58,138,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]",
        icon: <Flame size={32} className="text-[#D4AF37]" />,
    }
];

export default function AcademicsPage() {
    const searchParams = useSearchParams();

    // التمرير التلقائي وتسليط الضوء على الكلية
    useEffect(() => {
        const facultyId = searchParams.get('faculty');
        if (facultyId) {
            setTimeout(() => {
                const element = document.getElementById(facultyId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    
                    // تأثير لمعان بسيط لتوضيح الكلية المطلوبة لمدة ثانية
                    element.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease';
                    element.style.transform = 'scale(1.02)';
                    element.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.4)';
                    
                    setTimeout(() => {
                        element.style.transform = 'none';
                        element.style.boxShadow = '';
                    }, 1500);
                }
            }, 500);
        }
    }, [searchParams]);

    return (
        <div className="bg-[#050B14] min-h-screen relative overflow-hidden font-sans selection:bg-[#D4AF37] selection:text-[#001A33]">

            {/* Background Grid Pattern */}
            <div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #1e293b 1px, transparent 1px),
            linear-gradient(to bottom, #1e293b 1px, transparent 1px)
          `,
                    backgroundSize: '4rem 4rem'
                }}
            ></div>

            <div className="z-50 relative">
                <Hero showFullHero={false} />
            </div>

            <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">

                {/* Header Section */}
                <div className="text-center mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-3 text-[#D4AF37] font-medium tracking-widest text-sm uppercase mb-6">
                        <span className="w-12 h-[1px] bg-[#D4AF37]/50"></span>
                        <Star size={14} className="fill-current" />
                        <span>EST. 1938 • ALEXANDRIA, EGYPT</span>
                        <span className="w-12 h-[1px] bg-[#D4AF37]/50"></span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider uppercase drop-shadow-lg">
                        Alexandria University
                    </h1>

                    <h2 className="text-xl md:text-2xl text-[#D4AF37] font-semibold tracking-widest uppercase">
                        Academics Hub
                    </h2>

                    <p className="max-w-2xl mx-auto text-slate-400 mt-6 text-sm md:text-base leading-relaxed">
                        Explore eight world-class faculties united by a tradition of scholarship,
                        innovation, and excellence across every discipline.
                    </p>
                </div>

                {/* Faculties Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {faculties.map((faculty) => (
                        <div
                            key={faculty.id}
                            id={faculty.id} // تم إضافة id هنا لكي يتمكن المتصفح من العثور على الكلية
                            className={`bg-[#0B1320]/80 backdrop-blur-sm border rounded-2xl p-6 flex flex-col h-full transition-all duration-500 group ${faculty.glowColor}`}
                        >

                            {/* Icon & Title */}
                            <div className="mb-6">
                                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300 origin-left">
                                    {faculty.icon}
                                </div>
                                <h3 className="text-lg font-bold text-[#D4AF37] tracking-widest uppercase mb-1">
                                    {faculty.name}
                                </h3>
                                <p className="text-slate-400 text-xs font-medium tracking-wide">
                                    {faculty.subtitle}
                                </p>
                            </div>

                            {/* Description & Bullets */}
                            <div className="flex-grow">
                                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                    {faculty.description}
                                </p>
                                <ul className="space-y-2 mb-8">
                                    {faculty.bullets.map((bullet, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-slate-400 text-sm">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3 mb-6">
                                <button className="w-full py-3 rounded-lg border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-bold tracking-widest uppercase hover:bg-[#D4AF37] hover:text-[#001A33] transition-colors duration-300">
                                    Visit {faculty.name.split(' ')[2]} Portal →
                                </button>
                                <button className="w-full py-3 rounded-lg border border-cyan-700/50 text-cyan-500 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-cyan-900/30 transition-colors duration-300">
                                    <Video size={14} />
                                    Virtual Video Tour & Gallery
                                </button>
                            </div>

                            {/* Footer Divider */}
                            <div className="h-[1px] w-full bg-slate-800 my-4"></div>

                            {/* Location & Phone Grid */}
                            <div className="grid grid-cols-2 gap-4 text-slate-400 text-xs mb-6 flex-grow-0">
                                <div className="flex items-start gap-2 border-r border-slate-800 pr-2">
                                    <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#D4AF37]" />
                                    <span className="leading-snug line-clamp-3" title={faculty.location}>
                                        {faculty.location}
                                    </span>
                                </div>
                                <div className="flex items-start gap-2 pl-2">
                                    <Phone size={14} className="flex-shrink-0 mt-0.5 text-[#D4AF37]" />
                                    <span className="leading-snug">{faculty.phone}</span>
                                </div>
                            </div>

                            {/* Custom Custom Inline Social SVGs */}
                            <div className="flex items-center gap-4 text-slate-600 mt-auto pt-2 border-t border-slate-800/50">
                                <Link href="#" className="hover:text-[#D4AF37] transition-colors" aria-label="Facebook">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                </Link>
                                <Link href="#" className="hover:text-[#D4AF37] transition-colors" aria-label="Twitter">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                                </Link>
                                <Link href="#" className="hover:text-[#D4AF37] transition-colors" aria-label="Instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>

            </main>
        </div>
    );
}