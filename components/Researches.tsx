"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
    Search, User, LogOut, LogIn, Globe, BookOpen, Trophy, 
    FlaskConical, BookMarked, Users as UsersIcon, Lightbulb, 
    Layers, Library, ChevronRight, Atom, ArrowLeft, ExternalLink, Download, MapPin, Phone, Mail, Play
} from 'lucide-react';
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/components/LanguageProvider";
import ThemeToggle from "./ThemeToggle";
import AuthModal from "./AuthModal";

export default function Researches() {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const [activeDivision, setActiveDivision] = useState<string | null>(null);

    const [ekbActive, setEkbActive] = useState(true);
    const [thesisActive, setThesisActive] = useState(true);
    const [proxyActive, setProxyActive] = useState(false);

    const [filters, setFilters] = useState({
        science: true,
        medicine: true,
        engineering: true,
        arts: true
    });

    const [openSections, setOpenSections] = useState({
        medicine: true,
        engineering: true,
        humanities: true
    });

    const { toggleLanguage } = useLanguage();
    const router = useRouter();

    useEffect(() => {
        const checkUserSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                setIsLoggedIn(true);
            } else {
                const isDemoActive = localStorage.getItem('demo_session') === 'active';
                setIsLoggedIn(isDemoActive);
            }
        };

        checkUserSession();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            if (session) setIsLoggedIn(true);
            else checkUserSession();
        });

        const handleStorageUpdate = () => checkUserSession();
        window.addEventListener('storage', handleStorageUpdate);

        return () => {
            subscription.unsubscribe();
            window.removeEventListener('storage', handleStorageUpdate);
        };
    }, []);

    const handleSignOut = async () => {
        await supabase.auth.signOut();           
        localStorage.removeItem('demo_session'); 
        setIsLoggedIn(false);
        setIsMobileMenuOpen(false);
        router.push('/');                        
    };

    useEffect(() => {
        if (isMobileMenuOpen || isAuthModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMobileMenuOpen, isAuthModalOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const researchDivisions = [
        {
            title: "AU International Scientific\nPublishing Center",
            subtitle: "Scopus & Global Citations Engine",
            icon: <Globe size={22} className="text-[#38bdf8]" />,
            color: "border-[#38bdf8]/50 bg-[#38bdf8]/10",
            number: "01",
            id: "publishing"
        },
        {
            title: "University Research Plan",
            subtitle: "Alignment with Egypt's Vision 2030",
            icon: <BookOpen size={22} className="text-[#a855f7]" />,
            color: "border-[#a855f7]/50 bg-[#a855f7]/10",
            number: "02",
            id: "plan"
        },
        {
            title: "Scientific Awards & Awards\nRegulation",
            subtitle: "Faculty Recognition & Eligibility Criteria",
            icon: <Trophy size={22} className="text-[#eab308]" />,
            color: "border-[#eab308]/50 bg-[#eab308]/10",
            number: "03",
            id: "awards"
        },
        {
            title: "Research Projects",
            subtitle: "Institutional Portfolio & STDF Active Grants",
            icon: <FlaskConical size={22} className="text-[#22c55e]" />,
            color: "border-[#22c55e]/50 bg-[#22c55e]/10",
            number: "04",
            id: "projects"
        },
        {
            title: "Scientific Journals of AU",
            subtitle: "Alexandria Engineering Journal & Academic R...",
            icon: <BookMarked size={22} className="text-[#d946ef]" />,
            color: "border-[#d946ef]/50 bg-[#d946ef]/10",
            number: "05",
            id: "journals"
        },
        {
            title: "University Research Conference",
            subtitle: "Annual Innovation Summit & Itineraries",
            icon: <UsersIcon size={22} className="text-[#f97316]" />,
            color: "border-[#f97316]/50 bg-[#f97316]/10",
            number: "06",
            id: "conference"
        },
        {
            title: "Patents Hub",
            subtitle: "Intellectual Property Protection & Commercial...",
            icon: <Lightbulb size={22} className="text-[#eab308]" />,
            color: "border-[#eab308]/50 bg-[#eab308]/10",
            number: "07",
            id: "patents"
        },
        {
            title: "Strategic Projects & Studies for\nScience",
            subtitle: "Industrial Optimization & Environmental Fram...",
            icon: <Layers size={22} className="text-[#14b8a6]" />,
            color: "border-[#14b8a6]/50 bg-[#14b8a6]/10",
            number: "08",
            id: "strategic"
        },
        {
            title: "Digital Library",
            subtitle: "Egyptian Knowledge Bank API Gateway Pass-...",
            icon: <Library size={22} className="text-[#06b6d4]" />,
            color: "border-[#06b6d4]/50 bg-[#06b6d4]/10",
            number: "09",
            id: "digital-library"
        }
    ];

    const renderInteractivePreview = (colorCode: string) => (
        <div className="lg:col-span-2 flex flex-col">
            <div className={`relative bg-[#091527] border border-[${colorCode}]/30 rounded-xl overflow-hidden min-h-[350px] flex items-center justify-center w-full`}>
                <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[${colorCode}]/10 via-[#091527] to-[#091527]`}></div>
                <div className="absolute top-0 left-0 w-[150%] h-[150%] bg-gradient-to-br from-transparent via-[#eab308]/5 to-transparent -translate-x-1/4 -translate-y-1/4 transform rotate-[-15deg]"></div>
                
                <div className="relative z-10 flex items-center justify-center translate-x-8">
                    <div className={`absolute w-20 h-20 rounded-full border border-[${colorCode}]/40 animate-pulse-ring translate-x-12`}></div>
                    <div className={`w-10 h-10 rounded-full bg-[${colorCode}]/80 flex items-center justify-center backdrop-blur-md z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-[${colorCode}] cursor-pointer hover:scale-110 transition-transform`} style={{ boxShadow: `0 0 15px ${colorCode}80` }}>
                        <Play size={16} className="text-white fill-white ml-1" />
                    </div>
                </div>

                <div className="absolute bottom-4 left-4">
                    <div className="bg-[#0b1c3a] border border-[#1e3a5f] px-3 py-1.5 rounded text-[10px] text-white font-bold tracking-widest w-fit">
                        INTERACTIVE PREVIEW
                    </div>
                </div>
            </div>
            <p className="text-slate-500 text-[11px] text-center mt-3">High-resolution tech visualization loop - 10s cycle</p>
        </div>
    );

    const renderResourcesActions = (colorCode: string) => (
        <div className="lg:col-span-1 flex flex-col justify-start pt-4">
            <h4 className="text-[#eab308] text-sm font-bold tracking-widest uppercase mb-6">RESOURCES & ACTIONS</h4>
            <div className="flex flex-col gap-4">
                <button className={`w-full flex items-center gap-3 p-4 border border-[${colorCode}]/40 bg-[${colorCode}]/5 rounded-lg text-slate-300 hover:bg-[${colorCode}]/10 hover:text-white transition-colors text-sm font-medium`}>
                    <ExternalLink size={18} className={`text-[${colorCode}]`} />
                    Launch Interactive Showcase
                </button>
                <button className="w-full flex items-center gap-3 p-4 border border-[#eab308]/40 bg-[#eab308]/5 rounded-lg text-slate-300 hover:bg-[#eab308]/10 hover:text-white transition-colors text-sm font-medium">
                    <Download size={18} className="text-[#eab308]" />
                    Download Brief PDF
                </button>
            </div>
        </div>
    );

    return (
        <div className="relative min-h-screen bg-[#040B16] font-sans flex flex-col">
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes float-icon {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-6px); }
                }
                .animate-float-icon {
                    animation: float-icon 3s ease-in-out infinite;
                }
                @keyframes pulse-ring {
                    0% { transform: scale(0.8); opacity: 0.5; }
                    100% { transform: scale(2.5); opacity: 0; }
                }
                .animate-pulse-ring {
                    animation: pulse-ring 3s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
                }
            `}} />

            <nav className={`fixed top-0 w-full z-50 px-4 md:px-8 flex justify-between items-center transition-all duration-300 ease-in-out ${isScrolled ? "bg-[#0B3C5D]/95 dark:bg-[#040B16]/95 backdrop-blur-md shadow-lg py-2 md:py-3 border-b border-white/5" : "bg-transparent py-4 md:py-6"}`}>
                <div className="flex items-center gap-2 md:gap-4 cursor-pointer z-50" onClick={() => router.push('/')}>
                    <div className="h-10 md:h-12 flex items-center justify-center transition-all duration-300">
                        <img src="/logos/logo2.png" alt="Alexandria University Logo" className="h-full w-auto object-contain" />
                    </div>
                    <div className="text-white font-semibold leading-tight tracking-widest text-xs md:text-sm">
                        ALEXANDRIA<br />UNIVERSITY
                    </div>
                </div>

                <button className="md:hidden z-50 text-white hover:text-[#D4AF37] transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line></svg>
                    )}
                </button>

                <div className="hidden md:flex items-center gap-8 text-white text-lg font-medium">
                    <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
                    <Link href="/about" className="hover:text-[#D4AF37] transition-colors">About</Link>
                    <Link href="/students" className="hover:text-[#D4AF37] transition-colors">Students</Link>
                    <Link href="/academics" className="hover:text-[#D4AF37] transition-colors">Academics</Link>
                    <Link href="/collaboration" className="hover:text-[#D4AF37] transition-colors">Collaboration</Link>
                    <Link href="/alumni" className="hover:text-[#D4AF37] transition-colors">Alumni</Link>
                    <Link href="/administration" className="hover:text-[#D4AF37] transition-colors">Administration</Link>
                    <button onClick={() => setActiveDivision(null)} className="text-[#D4AF37] transition-colors">Researches</button>
                </div>

                <div className="hidden md:flex items-center gap-4 z-50">
                    {isLoggedIn ? (
                        <div className="flex items-center gap-3 animate-in fade-in duration-300">
                            <button onClick={() => router.push('/dashboard')} className="p-2 rounded-full bg-white/10 dark:bg-slate-900/50 text-white dark:text-[#D4AF37] border border-white/20 dark:border-[#D4AF37]/30 hover:scale-110 transition-transform shadow-md" title="Go to Academic Student Dashboard">
                                <User size={18} />
                            </button>
                            <button onClick={handleSignOut} className="flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-5 py-2 rounded-full font-semibold transition-transform hover:scale-105 shadow-lg text-sm">
                                <LogOut size={14} />
                                Sign Out
                            </button>
                        </div>
                    ) : (
                        <button onClick={() => setIsAuthModalOpen(true)} className="bg-[#D4AF37] hover:bg-[#A67F1F] hover:text-white text-[#0B3C5D] px-6 py-2 rounded-full font-semibold transition-transform hover:scale-105 shadow-lg flex items-center gap-2">
                            <LogIn size={14} />
                            Sign In
                        </button>
                    )}
                    <ThemeToggle />
                </div>
            </nav>

            {activeDivision === null ? (
                <main className="flex-1 relative overflow-hidden flex flex-col pt-32 md:pt-40">
                    <div className="absolute inset-0 pointer-events-none opacity-60 z-0">
                        <div className="absolute top-[20%] left-[10%] w-[2px] h-[2px] bg-[#eab308] rounded-full"></div>
                        <div className="absolute top-[15%] left-[30%] w-[1px] h-[1px] bg-white rounded-full"></div>
                        <div className="absolute top-[40%] left-[5%] w-[3px] h-[3px] bg-[#38bdf8] rounded-full opacity-50"></div>
                        <div className="absolute top-[60%] left-[20%] w-[2px] h-[2px] bg-[#eab308] rounded-full"></div>
                        <div className="absolute top-[80%] left-[8%] w-[1px] h-[1px] bg-white rounded-full"></div>
                        <div className="absolute top-[25%] right-[20%] w-[2px] h-[2px] bg-[#38bdf8] rounded-full"></div>
                        <div className="absolute top-[50%] right-[5%] w-[3px] h-[3px] bg-[#eab308] rounded-full opacity-50"></div>
                        <div className="absolute top-[75%] right-[15%] w-[1.5px] h-[1.5px] bg-white rounded-full"></div>
                    </div>

                    <div className="w-full max-w-[1300px] mx-auto px-4 relative z-10 flex flex-col mb-4">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
                            <div className="flex items-center gap-5">
                                <div className="w-[52px] h-[52px] rounded-[14px] border-[1.5px] border-[#eab308]/40 bg-[#091527] flex items-center justify-center shrink-0">
                                    <Atom size={26} className="text-[#eab308] animate-[spin_6s_linear_infinite]" />
                                </div>
                                <div className="flex flex-col pt-1">
                                    <h1 className="text-white text-2xl font-bold tracking-wide leading-tight">Alexandria University</h1>
                                    <h2 className="text-[#38bdf8] text-[13px] tracking-wide mt-1">Research & Innovation Sector · Command Gateway</h2>
                                </div>
                            </div>
                            
                            <div className="hidden md:flex items-center gap-4 mt-4 md:mt-0">
                                <div className="flex items-center gap-2">
                                    <span className="w-[6px] h-[6px] rounded-full bg-[#38bdf8]"></span>
                                    <span className="text-slate-400 text-xs font-medium tracking-wide">9 Research Divisions · Active</span>
                                </div>
                                <div className="h-4 w-[1px] bg-slate-700/80 mx-1"></div>
                                <div className="text-[#eab308] text-xs font-bold tracking-widest">
                                    AY 2024-2025
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t-[1.5px] border-slate-700/40"></div>
                            </div>
                            <div className="relative bg-[#040B16] px-6">
                                <span className="text-slate-400 text-[10px] font-medium tracking-[0.2em] uppercase">
                                    Select a Research Division to Enter
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col items-center px-4 pb-16 z-10 relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1300px] w-full mx-auto mt-2">
                            {researchDivisions.map((division, idx) => (
                                <div 
                                    key={idx} 
                                    onClick={() => { if (division.id) setActiveDivision(division.id); }}
                                    className="group relative bg-[#091527] border-[1.5px] border-[#eab308] rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col min-h-[200px] overflow-hidden shadow-lg"
                                >
                                    <div className="absolute top-0 right-0 w-[60%] h-[80%] bg-gradient-to-bl from-slate-700/20 to-transparent pointer-events-none" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}></div>

                                    <div className="flex items-start gap-4 mb-6 relative z-10">
                                        <div className={`w-[52px] h-[52px] rounded-[14px] border border-dashed ${division.color} flex items-center justify-center shrink-0`}>
                                            <div className="animate-float-icon" style={{ animationDelay: `${idx * 0.15}s` }}>
                                                {division.icon}
                                            </div>
                                        </div>
                                        <div className="flex flex-col pt-1">
                                            <h3 className="text-white text-[14px] font-bold leading-tight mb-1.5 whitespace-pre-line">{division.title}</h3>
                                            <p className="text-[#38bdf8] text-[10px] font-medium leading-relaxed opacity-80 mb-8">{division.subtitle}</p>
                                        </div>
                                    </div>

                                    <div className="mt-auto relative z-10 w-full">
                                        <div className="w-full h-[1px] bg-slate-700/60 mb-3"></div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-400 text-[9px] font-medium tracking-wide">Alexandria University · Research Sector</span>
                                            <div className="flex items-center gap-1.5">
                                                <span className="text-[#38bdf8] text-[11px] font-bold flex items-center gap-0.5 group-hover:mr-1 transition-all">
                                                    Explore <ChevronRight size={12} strokeWidth={3} />
                                                </span>
                                                <span className="text-slate-500 text-[10px] font-mono tracking-wider ml-1">{division.number} / 09</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            ) : activeDivision === 'publishing' ? (
                <main className="flex-1 relative font-sans text-white p-6 md:p-10 lg:p-16 pt-36 md:pt-48 z-10 animate-in fade-in zoom-in-95 duration-300">
                    <div className="max-w-[1300px] mx-auto w-full mt-6 md:mt-8">
                        <div className="flex flex-wrap items-center gap-3 text-sm mb-12">
                            <button 
                                onClick={() => setActiveDivision(null)}
                                className="flex items-center gap-2 bg-[#091527] border border-slate-700/50 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors text-slate-300 hover:text-white"
                            >
                                <ArrowLeft size={16} />
                                Back to Overview
                            </button>
                            
                            <div className="hidden sm:block h-5 w-[1px] bg-slate-700"></div>
                            
                            <div className="flex items-center gap-2">
                                <span className="text-slate-400">Research & Innovation Sector</span>
                                <ChevronRight size={14} className="text-slate-500" />
                                <span className="text-[#eab308] font-medium">AU International Scientific Publishing Center</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 mb-12">
                            <div className="w-[72px] h-[72px] rounded-[16px] border-[1.5px] border-[#38bdf8]/50 bg-[#38bdf8]/10 flex items-center justify-center shrink-0">
                                <Globe size={32} className="text-[#38bdf8]" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-3xl font-bold tracking-wide leading-tight mb-2">AU International Scientific Publishing Center</h1>
                                <h2 className="text-[#38bdf8] text-[15px] font-medium">Scopus & Global Citations Engine</h2>
                            </div>
                        </div>

                        <h3 className="text-[#eab308] text-xl font-bold mb-8 underline underline-offset-[12px] decoration-slate-700/70 inline-block">
                            Global Research Dissemination & Citation Impact
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            <div className="bg-[#091527] border border-slate-700/50 rounded-xl p-8 hover:border-slate-600 transition-colors">
                                <h4 className="text-[#38bdf8] text-base font-bold mb-4">Scopus Indexing & Journal Selection Strategy</h4>
                                <p className="text-slate-300 text-[15px] leading-relaxed">
                                    The AU Publishing Center provides faculty researchers with dedicated consultancy on targeting Q1 and Q2 Scopus-indexed journals. Our team maintains an active database of over 22,000 approved publication venues, with real-time impact factor updates sourced from Clarivate Analytics and Elsevier's Scopus registry. Researchers receive structured feedback on manuscript alignment, methodological rigor, and formatting compliance prior to initial journal submission.
                                </p>
                            </div>

                            <div className="bg-[#091527] border border-slate-700/50 rounded-xl p-8 hover:border-slate-600 transition-colors">
                                <h4 className="text-[#38bdf8] text-base font-bold mb-4">Citation Impact Monitoring & H-Index Tracking</h4>
                                <p className="text-slate-300 text-[15px] leading-relaxed">
                                    Institutional citation analytics are updated quarterly using Scopus and Web of Science databases. Faculty members access personalized bibliometric dashboards tracking h-index progression, citation velocity, and co-authorship network maps. The center produces an annual Citation Impact Report for all twelve faculties, feeding into QS World University Rankings and Webometrics national submissions.
                                </p>
                            </div>
                        </div>

                        <div className="w-full bg-[#091527] border border-slate-700/50 rounded-xl p-8 mb-10">
                            <h4 className="text-[#38bdf8] text-base font-bold mb-3">Open Access & Research Dissemination Framework</h4>
                            <p className="text-slate-300 text-[14px] leading-relaxed">
                                Alexandria University has committed to an Open Access expansion strategy, with dedicated APC (Article Processing Charge) support funds available to qualifying researchers through a competitive application cycle each semester. The center coordinates with the Egyptian Knowledge Bank (EKB) infrastructure to ensure full-text availability of AU-authored publications within the national repository network.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
                            {renderInteractivePreview("#38bdf8")}
                            {renderResourcesActions("#38bdf8")}
                        </div>

                        <div className="w-full border-t border-slate-800 pt-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div className="flex flex-col">
                                <h5 className="text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Administrative Contact</h5>
                                <div className="flex items-center gap-2 text-slate-400 text-xs">
                                    <MapPin size={14} className="text-[#38bdf8]" />
                                    Research Center Building, Shatby Campus, Alexandria University
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-2 text-slate-400 text-xs">
                                <Phone size={14} className="text-[#38bdf8]" />
                                +20 3 4843704
                            </div>
                            
                            <div className="flex items-center gap-2 text-slate-400 text-xs">
                                <Mail size={14} className="text-[#38bdf8]" />
                                publishing@alexu.edu.eg
                            </div>
                        </div>
                    </div>
                </main>
            ) : activeDivision === 'plan' ? (
                <main className="flex-1 relative font-sans text-white p-6 md:p-10 lg:p-16 pt-36 md:pt-48 z-10 animate-in fade-in zoom-in-95 duration-300">
                    <div className="max-w-[1300px] mx-auto w-full mt-6 md:mt-8">
                        <div className="flex flex-wrap items-center gap-3 text-sm mb-12">
                            <button 
                                onClick={() => setActiveDivision(null)}
                                className="flex items-center gap-2 bg-[#091527] border border-slate-700/50 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors text-slate-300 hover:text-white"
                            >
                                <ArrowLeft size={16} />
                                Back to Overview
                            </button>
                            
                            <div className="hidden sm:block h-5 w-[1px] bg-slate-700"></div>
                            
                            <div className="flex items-center gap-2">
                                <span className="text-slate-400">Research & Innovation Sector</span>
                                <ChevronRight size={14} className="text-slate-500" />
                                <span className="text-[#eab308] font-medium">University Research Plan</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 mb-12">
                            <div className="w-[72px] h-[72px] rounded-[16px] border-[1.5px] border-[#a855f7]/50 bg-[#a855f7]/10 flex items-center justify-center shrink-0">
                                <BookOpen size={32} className="text-[#a855f7]" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-3xl font-bold tracking-wide leading-tight mb-2">University Research Plan</h1>
                                <h2 className="text-[#a855f7] text-[15px] font-medium">Alignment with Egypt's Vision 2030</h2>
                            </div>
                        </div>

                        <h3 className="text-[#eab308] text-xl font-bold mb-8 underline underline-offset-[12px] decoration-slate-700/70 inline-block">
                            Strategic Research Roadmap 2024-2030
                        </h3>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                            <div className="lg:col-span-2 flex flex-col gap-6">
                                <div className="bg-[#091527] border border-slate-700/50 rounded-xl p-8 hover:border-slate-600 transition-colors">
                                    <h4 className="text-[#38bdf8] text-base font-bold mb-4">Vision 2030 Alignment & National Priority Research Clusters</h4>
                                    <p className="text-slate-300 text-[15px] leading-relaxed">
                                        The University Research Plan (2024-2030) is structured around six strategic pillars aligned to Egypt's Sustainable Development Strategy: Advanced Manufacturing & Nanotechnology, Climate Resilience & Water Security, Digital Transformation & Artificial Intelligence, Health Sciences & Medical Innovation, Sustainable Energy Systems, and Cultural Heritage Preservation. Each faculty submits a triennial research roadmap for accreditation.
                                    </p>
                                </div>

                                <div className="bg-[#091527] border border-slate-700/50 rounded-xl p-8 hover:border-slate-600 transition-colors">
                                    <h4 className="text-[#38bdf8] text-base font-bold mb-4">Cross-Faculty Research Consortium Development</h4>
                                    <p className="text-slate-300 text-[15px] leading-relaxed">
                                        Under the current plan, four new interdisciplinary research networks were formally established: the Advanced Coastal Resilience Network (ACRN), the Mediterranean Biomedical Innovation Hub (MBIH), the Industrial Optimization & Automation Cluster (IOAC), and the Digital Humanities & Cultural Analytics Lab (DH-CAL). Each consortium is allocated dedicated workspace and receives a baseline operational grant.
                                    </p>
                                </div>
                            </div>

                            <div className="lg:col-span-1 flex flex-col">
                                <div className="bg-[#091527] border border-slate-700/50 rounded-xl p-8 hover:border-slate-600 transition-colors h-full">
                                    <h4 className="text-[#38bdf8] text-base font-bold mb-4">Institutional Research Performance Indicators (KPIs)</h4>
                                    <p className="text-slate-300 text-[15px] leading-relaxed">
                                        Annual KPIs track publication volume in indexed journals, successful grant acquisition from STDF, USAID, EU Horizon, and bilateral funding mechanisms, patent filings, and technology transfer partnerships. The Research Sector coordinates an annual performance review with each faculty's Research Vice Dean to assess KPI adherence and identify capacity-building requirements.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
                            {renderInteractivePreview("#a855f7")}
                            {renderResourcesActions("#a855f7")}
                        </div>

                        <div className="w-full border-t border-slate-800 pt-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div className="flex flex-col">
                                <h5 className="text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Administrative Contact</h5>
                                <div className="flex items-center gap-2 text-slate-400 text-xs">
                                    <MapPin size={14} className="text-[#38bdf8]" />
                                    Research Center HQ, Main Administration Building, Alexandria University
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-2 text-slate-400 text-xs">
                                <Phone size={14} className="text-[#38bdf8]" />
                                +20 3 4843704
                            </div>
                            
                            <div className="flex items-center gap-2 text-slate-400 text-xs">
                                <Mail size={14} className="text-[#38bdf8]" />
                                research.plan@alexu.edu.eg
                            </div>
                        </div>
                    </div>
                </main>
            ) : activeDivision === 'awards' ? (
                <main className="flex-1 relative font-sans text-white p-6 md:p-10 lg:p-16 pt-36 md:pt-48 z-10 animate-in fade-in zoom-in-95 duration-300">
                    <div className="max-w-[1300px] mx-auto w-full mt-6 md:mt-8">
                        <div className="flex flex-wrap items-center gap-3 text-sm mb-12">
                            <button 
                                onClick={() => setActiveDivision(null)}
                                className="flex items-center gap-2 bg-[#091527] border border-slate-700/50 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors text-slate-300 hover:text-white"
                            >
                                <ArrowLeft size={16} />
                                Back to Overview
                            </button>
                            
                            <div className="hidden sm:block h-5 w-[1px] bg-slate-700"></div>
                            
                            <div className="flex items-center gap-2">
                                <span className="text-slate-400">Research & Innovation Sector</span>
                                <ChevronRight size={14} className="text-slate-500" />
                                <span className="text-[#eab308] font-medium">Scientific Awards & Awards Regulation</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 mb-12">
                            <div className="w-[72px] h-[72px] rounded-[16px] border-[1.5px] border-[#eab308]/50 bg-[#eab308]/10 flex items-center justify-center shrink-0">
                                <Trophy size={32} className="text-[#eab308]" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-3xl font-bold tracking-wide leading-tight mb-2">Scientific Awards & Awards Regulation</h1>
                                <h2 className="text-[#eab308] text-[15px] font-medium">Faculty Recognition & Eligibility Criteria</h2>
                            </div>
                        </div>

                        <h3 className="text-[#eab308] text-xl font-bold mb-8 underline underline-offset-[12px] decoration-slate-700/70 inline-block">
                            Faculty Recognition Program & Award Categories
                        </h3>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                            <div className="flex flex-col gap-6">
                                <div className="bg-[#091527] border border-slate-700/50 rounded-xl p-8 hover:border-slate-600 transition-colors">
                                    <h4 className="text-[#38bdf8] text-base font-bold mb-4">Award Categories & Annual Nomination Cycles</h4>
                                    <p className="text-slate-300 text-[15px] leading-relaxed">
                                        Alexandria University administers eleven formal research recognition awards annually, including the Distinguished Researcher Prize, the Young Investigator Award (for faculty within 5 years of appointment), the Applied Innovation Medal, and the Interdisciplinary Excellence Prize. Nominations open on the 1st of October each year and close on the 31st of December, with a formal committee review concluding by end of February.
                                    </p>
                                </div>

                                <div className="bg-[#091527] border border-slate-700/50 rounded-xl p-8 hover:border-slate-600 transition-colors">
                                    <h4 className="text-[#38bdf8] text-base font-bold mb-4">Awards Ceremony & Prize Allocation Structure</h4>
                                    <p className="text-slate-300 text-[15px] leading-relaxed">
                                        The annual Alexandria University Scientific Awards Ceremony is held in the Great Hall of the Main Administration Building during the first week of May. Award recipients receive a personalized medallion, a formal certificate signed by the University President, and a monetary recognition grant applied toward their next funded research cycle. Faculty with three or more award recognitions are inducted into the AU Research Hall of Excellence.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="bg-[#091527] border border-slate-700/50 rounded-xl p-8 hover:border-slate-600 transition-colors h-full">
                                    <h4 className="text-[#38bdf8] text-base font-bold mb-4">Eligibility Criteria & Documentation Requirements</h4>
                                    <p className="text-slate-300 text-[15px] leading-relaxed">
                                        Eligibility for all senior faculty research awards requires a minimum of five publications in Scopus-indexed Q1 or Q2 journals within the past three academic years, at least one active STDF or internationally co-funded research grant, and a verifiable record of graduate student supervision. Applications must include a structured CV, three letters of academic endorsement, and a one-page research impact statement.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
                            {renderInteractivePreview("#eab308")}
                            {renderResourcesActions("#eab308")}
                        </div>

                        <div className="w-full border-t border-slate-800 pt-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div className="flex flex-col">
                                <h5 className="text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Administrative Contact</h5>
                                <div className="flex items-center gap-2 text-slate-400 text-xs">
                                    <MapPin size={14} className="text-[#38bdf8]" />
                                    Research Center, Awards Committee Office, Alexandria University
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-2 text-slate-400 text-xs">
                                <Phone size={14} className="text-[#38bdf8]" />
                                +20 3 4843707
                            </div>
                            
                            <div className="flex items-center gap-2 text-slate-400 text-xs">
                                <Mail size={14} className="text-[#38bdf8]" />
                                awards@alexu.edu.eg
                            </div>
                        </div>
                    </div>
                </main>
            ) : activeDivision === 'projects' ? (
                <main className="flex-1 relative font-sans text-white p-6 md:p-10 lg:p-16 pt-36 md:pt-48 z-10 animate-in fade-in zoom-in-95 duration-300">
                    <div className="max-w-[1300px] mx-auto w-full mt-6 md:mt-8">
                        <div className="flex flex-wrap items-center gap-3 text-sm mb-12">
                            <button 
                                onClick={() => setActiveDivision(null)}
                                className="flex items-center gap-2 bg-[#091527] border border-slate-700/50 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors text-slate-300 hover:text-white"
                            >
                                <ArrowLeft size={16} />
                                Back to Overview
                            </button>
                            
                            <div className="hidden sm:block h-5 w-[1px] bg-slate-700"></div>
                            
                            <div className="flex items-center gap-2">
                                <span className="text-slate-400">Research & Innovation Sector</span>
                                <ChevronRight size={14} className="text-slate-500" />
                                <span className="text-[#eab308] font-medium">Research Projects</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 mb-12">
                            <div className="w-[72px] h-[72px] rounded-[16px] border-[1.5px] border-[#22c55e]/50 bg-[#22c55e]/10 flex items-center justify-center shrink-0">
                                <FlaskConical size={32} className="text-[#22c55e]" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-3xl font-bold tracking-wide leading-tight mb-2">Research Projects</h1>
                                <h2 className="text-[#22c55e] text-[15px] font-medium">Institutional Portfolio & STDF Active Grants</h2>
                            </div>
                        </div>

                        <h3 className="text-[#eab308] text-xl font-bold mb-8 underline underline-offset-[12px] decoration-slate-700/70 inline-block">
                            Institutional Research Portfolio & Active Grant Management
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-[#091527] border border-slate-700/50 rounded-xl p-8 hover:border-slate-600 transition-colors">
                                <h4 className="text-[#38bdf8] text-base font-bold mb-4">STDF & National Grant Portfolio ... 77 Active Grants.</h4>
                                <p className="text-slate-300 text-[15px] leading-relaxed">
                                    As of the current fiscal year, Alexandria University manages 47 active research grants through the Science and Technology Development Fund (STDF), with a combined institutional budget exceeding EGP 150 million. Active project streams include four Competitive Grants, twelve Science Up grants focused on applied science capacity building, eight USAID collaborative grants with leading European research institutions, and eleven projects under the TIEC technology commercialization track.
                                </p>
                            </div>

                            <div className="bg-[#091527] border border-slate-700/50 rounded-xl p-8 hover:border-slate-600 transition-colors">
                                <h4 className="text-[#38bdf8] text-base font-bold mb-4">International Funding & EU Horizon Partnerships.</h4>
                                <p className="text-slate-300 text-[15px] leading-relaxed">
                                    The Research Projects Office coordinates twelve internationally co-funded initiatives, including three active Horizon Europe grants, ten bilateral research agreements with German DAAD partner universities, and one USAID climate resilience project under the USAID Egypt CCAP framework. Each international project is assigned a dedicated research coordination officer and an independent financial oversight committee.
                                </p>
                            </div>
                        </div>

                        <div className="w-full bg-[#091527] border border-slate-700/50 rounded-xl p-8 mb-10 hover:border-slate-600 transition-colors">
                            <h4 className="text-[#38bdf8] text-base font-bold mb-3">Project Submission Guidelines & Reporting Cycles</h4>
                            <p className="text-slate-300 text-[14px] leading-relaxed">
                                Faculty members seeking to submit new project proposals to STDF must complete the standard eGrant portal application, attach a university endorsement letter signed by the Research Vice President, and undergo an institutional peer-review process. Mid-cycle progress reports are mandatory every six months; final technical and financial reports are due within 60 days of project closure.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
                            {renderInteractivePreview("#22c55e")}
                            {renderResourcesActions("#22c55e")}
                        </div>

                        <div className="w-full border-t border-slate-800 pt-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div className="flex flex-col">
                                <h5 className="text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Administrative Contact</h5>
                                <div className="flex items-center gap-2 text-slate-400 text-xs">
                                    <MapPin size={14} className="text-[#38bdf8]" />
                                    Research Projects Management Office, Research Center Building, Shatby Campus
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-2 text-slate-400 text-xs">
                                <Phone size={14} className="text-[#38bdf8]" />
                                +20 3 5920001
                            </div>
                            
                            <div className="flex items-center gap-2 text-slate-400 text-xs">
                                <Mail size={14} className="text-[#38bdf8]" />
                                projects@alexu.edu.eg
                            </div>
                        </div>
                    </div>
                </main>
            ) : activeDivision === 'journals' ? (
                <main className="flex-1 relative font-sans text-white p-6 md:p-10 lg:p-16 pt-36 md:pt-48 z-10 animate-in fade-in zoom-in-95 duration-300">
                    <div className="max-w-[1300px] mx-auto w-full mt-6 md:mt-8">
                        <div className="flex flex-wrap items-center gap-3 text-sm mb-12">
                            <button 
                                onClick={() => setActiveDivision(null)}
                                className="flex items-center gap-2 bg-[#091527] border border-slate-700/50 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors text-slate-300 hover:text-white"
                            >
                                <ArrowLeft size={16} />
                                Back to Overview
                            </button>
                            
                            <div className="hidden sm:block h-5 w-[1px] bg-slate-700"></div>
                            
                            <div className="flex items-center gap-2">
                                <span className="text-slate-400">Research & Innovation Sector</span>
                                <ChevronRight size={14} className="text-slate-500" />
                                <span className="text-[#eab308] font-medium">Scientific Journals of AU</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 mb-12">
                            <div className="w-[72px] h-[72px] rounded-[16px] border-[1.5px] border-[#d946ef]/50 bg-[#d946ef]/10 flex items-center justify-center shrink-0">
                                <BookMarked size={32} className="text-[#d946ef]" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-3xl font-bold tracking-wide leading-tight mb-2">Scientific Journals of AU</h1>
                                <h2 className="text-[#d946ef] text-[15px] font-medium">Alexandria Engineering Journal & Academic Registries</h2>
                            </div>
                        </div>

                        <h3 className="text-[#eab308] text-xl font-bold mb-8 underline underline-offset-[12px] decoration-slate-700/70 inline-block">
                            Alexandria University Academic Journals Portfolio
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-[#091527] border border-slate-700/50 rounded-xl p-8 hover:border-slate-600 transition-colors">
                                <h4 className="text-[#38bdf8] text-base font-bold mb-4">Alexandria Engineering Journal (AEJ) — Scopus Q1.</h4>
                                <p className="text-slate-300 text-[15px] leading-relaxed">
                                    The Alexandria Engineering Journal (AEJ) is Alexandria University's flagship peer-reviewed academic publication, holding Q1 status in the Scopus CiteScore rankings with a current Impact Factor of 6.2 (2023). Published bimonthly by Elsevier on behalf of the Faculty of Engineering, AEJ covers structural engineering, materials science, computational mechanics, renewable energy systems, and environmental engineering. Manuscripts undergo a double-blind peer review averaging 45 days to first decision.
                                </p>
                            </div>

                            <div className="bg-[#091527] border border-slate-700/50 rounded-xl p-8 hover:border-slate-600 transition-colors">
                                <h4 className="text-[#38bdf8] text-base font-bold mb-4">Faculty-Level Journals & Academic Registries.</h4>
                                <p className="text-slate-300 text-[15px] leading-relaxed">
                                    Beyond AEJ, Alexandria University publishes seven faculty-level peer-reviewed journals covering medicine, dentistry, pharmacy, sciences, commerce, arts, and law. These journals are indexed in EKB, DOAJ, and Index Copernicus. The Research Sector provides editorial infrastructure including digital archiving via DSpace, DOI registration through the EKB foundation, and manuscript tracking system licensing.
                                </p>
                            </div>
                        </div>

                        <div className="w-full bg-[#091527] border border-slate-700/50 rounded-xl p-8 mb-10 hover:border-slate-600 transition-colors">
                            <h4 className="text-[#38bdf8] text-base font-bold mb-3">Journal Submission System & Author Guidelines</h4>
                            <p className="text-slate-300 text-[14px] leading-relaxed">
                                Authors affiliated with Alexandria University receive priority processing status across all AU journals. Submission portals operate through Elsevier's Editorial Manager system for AEJ and through the AU Journal Management System (AU-JMS) for faculty journals. A structured author toolkit including manuscript templates, cover letter guides, and figure formatting standards is available through the Research Sector's publications portal.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
                            {renderInteractivePreview("#d946ef")}
                            {renderResourcesActions("#d946ef")}
                        </div>

                        <div className="w-full border-t border-slate-800 pt-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div className="flex flex-col">
                                <h5 className="text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Administrative Contact</h5>
                                <div className="flex items-center gap-2 text-slate-400 text-xs">
                                    <MapPin size={14} className="text-[#38bdf8]" />
                                    Publications & Journals Office, Faculty of Engineering, Alexandria University
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-2 text-slate-400 text-xs">
                                <Phone size={14} className="text-[#38bdf8]" />
                                +20 3 5920002
                            </div>
                            
                            <div className="flex items-center gap-2 text-slate-400 text-xs">
                                <Mail size={14} className="text-[#38bdf8]" />
                                journals@alexu.edu.eg
                            </div>
                        </div>
                    </div>
                </main>
            ) : activeDivision === 'conference' ? (
                <main className="flex-1 relative font-sans text-white p-6 md:p-10 lg:p-16 pt-36 md:pt-48 z-10 animate-in fade-in zoom-in-95 duration-300">
                    <div className="max-w-[1300px] mx-auto w-full mt-6 md:mt-8">
                        <div className="flex flex-wrap items-center gap-3 text-sm mb-12">
                            <button 
                                onClick={() => setActiveDivision(null)}
                                className="flex items-center gap-2 bg-[#091527] border border-slate-700/50 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors text-slate-300 hover:text-white"
                            >
                                <ArrowLeft size={16} />
                                Back to Overview
                            </button>
                            
                            <div className="hidden sm:block h-5 w-[1px] bg-slate-700"></div>
                            
                            <div className="flex items-center gap-2">
                                <span className="text-slate-400">Research & Innovation Sector</span>
                                <ChevronRight size={14} className="text-slate-500" />
                                <span className="text-[#eab308] font-medium">University Research Conference</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 mb-12">
                            <div className="w-[72px] h-[72px] rounded-[16px] border-[1.5px] border-[#f97316]/50 bg-[#f97316]/10 flex items-center justify-center shrink-0">
                                <UsersIcon size={32} className="text-[#f97316]" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-3xl font-bold tracking-wide leading-tight mb-2">University Research Conference</h1>
                                <h2 className="text-[#f97316] text-[15px] font-medium">Annual Innovation Summit & Itineraries</h2>
                            </div>
                        </div>

                        <h3 className="text-[#eab308] text-xl font-bold mb-8 underline underline-offset-[12px] decoration-slate-700/70 inline-block">
                            Alexandria University Annual Research Innovation Summit
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-[#091527] border border-slate-700/50 rounded-xl p-8 hover:border-slate-600 transition-colors">
                                <h4 className="text-[#38bdf8] text-base font-bold mb-4">AU-RIC 2026 Overview & Thematic Research Tracks</h4>
                                <p className="text-slate-300 text-[15px] leading-relaxed">
                                    The 2026 Alexandria University Research Innovation Summit (AU-RIC 2026) is scheduled for April 8-10, 2026 at the Faculty of Engineering Conference Complex, Shatby Campus. This year's summit features four thematic tracks: Advanced Materials & Nanotechnology, Digital Health & Biomedical Informatics, Sustainable Cities & Environmental Governance, and Cultural Heritage Preservation in the Digital Age. Over 300 research submissions have been received with a target acceptance rate of 40%.
                                </p>
                            </div>

                            <div className="bg-[#091527] border border-slate-700/50 rounded-xl p-8 hover:border-slate-600 transition-colors">
                                <h4 className="text-[#38bdf8] text-base font-bold mb-4">Itinerary, Keynote Speakers & Program Schedule</h4>
                                <p className="text-slate-300 text-[15px] leading-relaxed">
                                    Day 1 (April 8) opens with a plenary keynote from Prof. Ahmed Zewail Science City's Director of Advanced Research, followed by two parallel technical sessions. Day 2 (April 9) features the PhD Student Research Showcase, sponsored poster sessions, and the AU-Industry Partnership Forum. Day 3 (April 10) closes with the interdisciplinary roundtable, the Best Paper awards ceremony for each track, and the President's Address on the Five-Year Research Outlook.
                                </p>
                            </div>
                        </div>

                        <div className="w-full bg-[#091527] border border-slate-700/50 rounded-xl p-8 mb-10 hover:border-slate-600 transition-colors">
                            <h4 className="text-[#38bdf8] text-base font-bold mb-3">Submission Guidelines & Registration Process</h4>
                            <p className="text-slate-300 text-[14px] leading-relaxed">
                                Full paper submissions must not exceed 8,000 words in English and must adhere to the AU Conference Proceedings Template. All submissions undergo double-blind peer review by a minimum of three committee reviewers. Early bird registration for faculty members closes February 28, 2026. Graduate students presenting papers are eligible for subsidized conference fees and priority access to the networking gala dinner.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
                            {renderInteractivePreview("#f97316")}
                            {renderResourcesActions("#f97316")}
                        </div>

                        <div className="w-full border-t border-slate-800 pt-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div className="flex flex-col">
                                <h5 className="text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Administrative Contact</h5>
                                <div className="flex items-center gap-2 text-slate-400 text-xs">
                                    <MapPin size={14} className="text-[#38bdf8]" />
                                    Conference Management Office, Research Center, Faculty of Engineering Campus
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-2 text-slate-400 text-xs">
                                <Phone size={14} className="text-[#38bdf8]" />
                                +20 3 5920003
                            </div>
                            
                            <div className="flex items-center gap-2 text-slate-400 text-xs">
                                <Mail size={14} className="text-[#38bdf8]" />
                                conference@alexu.edu.eg
                            </div>
                        </div>
                    </div>
                </main>
            ) : activeDivision === 'patents' ? (
                <main className="flex-1 relative font-sans text-white p-6 md:p-10 lg:p-16 pt-36 md:pt-48 z-10 animate-in fade-in zoom-in-95 duration-300">
                    <div className="max-w-[1300px] mx-auto w-full mt-6 md:mt-8">
                        <div className="flex flex-wrap items-center gap-3 text-sm mb-12">
                            <button 
                                onClick={() => setActiveDivision(null)}
                                className="flex items-center gap-2 bg-[#091527] border border-slate-700/50 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors text-slate-300 hover:text-white"
                            >
                                <ArrowLeft size={16} />
                                Back to Overview
                            </button>
                            
                            <div className="hidden sm:block h-5 w-[1px] bg-slate-700"></div>
                            
                            <div className="flex items-center gap-2">
                                <span className="text-slate-400">Research & Innovation Sector</span>
                                <ChevronRight size={14} className="text-slate-500" />
                                <span className="text-[#eab308] font-medium">Patents Hub</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 mb-12">
                            <div className="w-[72px] h-[72px] rounded-[16px] border-[1.5px] border-[#eab308]/50 bg-[#eab308]/10 flex items-center justify-center shrink-0">
                                <Lightbulb size={32} className="text-[#eab308]" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-3xl font-bold tracking-wide leading-tight mb-2">Patents Hub</h1>
                                <h2 className="text-[#eab308] text-[15px] font-medium">Intellectual Property Protection & Commercial Inventions</h2>
                            </div>
                        </div>

                        <h3 className="text-[#eab308] text-xl font-bold mb-8 underline underline-offset-[12px] decoration-slate-700/70 inline-block">
                            Intellectual Property Registry & Patent Filing Framework
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-[#091527] border border-slate-700/50 rounded-xl p-8 hover:border-slate-600 transition-colors">
                                <h4 className="text-[#38bdf8] text-base font-bold mb-4">Patent Filing Process & IP Registry</h4>
                                <p className="text-slate-300 text-[15px] leading-relaxed">
                                    Alexandria University's Patents Hub coordinates all intellectual property filings through Egypt's Academy of Scientific Research and Technology (ASRT) and the Egyptian Patent Office (EGPO/TICO). The standard application cycle involves a prior-art search by the Hub's IP analysts, a formal disclosure submission to the Research Center, a technical review by the university's IP committee, and a formal filing supported by certified patent attorneys retained under AU's institutional IP services contract.
                                </p>
                            </div>

                            <div className="bg-[#091527] border border-slate-700/50 rounded-xl p-8 hover:border-slate-600 transition-colors">
                                <h4 className="text-[#38bdf8] text-base font-bold mb-4">Commercial Invention Licensing & Technology Transfer</h4>
                                <p className="text-slate-300 text-[15px] leading-relaxed">
                                    Commercially viable patents are referred to the Technology Transfer Office (TTO) for industry licensing negotiations. The TTO maintains active relationship frameworks with 18 regional industrial partners across petrochemical, pharmaceutical, construction materials, and electronics manufacturing sectors. Revenue-sharing agreements are structured with 40% allocated to the inventing faculty member, 30% to their department, and 30% to the university's central research endowment fund.
                                </p>
                            </div>
                        </div>

                        <div className="w-full bg-[#091527] border border-slate-700/50 rounded-xl p-8 mb-10 hover:border-slate-600 transition-colors">
                            <h4 className="text-[#38bdf8] text-base font-bold mb-3">IP Training & Innovation Incubation Support</h4>
                            <p className="text-slate-300 text-[14px] leading-relaxed">
                                The Patents Hub conducts quarterly IP literacy workshops for faculty and PhD candidates, covering domestic and international patent search strategies, prior-art assessment, freedom-to-operate analysis, and PCT international filings. An annual Innovation Pitch Night connects early-stage IP disclosures with representatives from STDF's technology commercialization program and private-sector innovation accelerators.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
                            {renderInteractivePreview("#eab308")}
                            {renderResourcesActions("#eab308")}
                        </div>

                        <div className="w-full border-t border-slate-800 pt-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div className="flex flex-col">
                                <h5 className="text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Administrative Contact</h5>
                                <div className="flex items-center gap-2 text-slate-400 text-xs">
                                    <MapPin size={14} className="text-[#38bdf8]" />
                                    Patents Hub & Technology Transfer Office, Research Center Building, Alexandria University
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-2 text-slate-400 text-xs">
                                <Phone size={14} className="text-[#38bdf8]" />
                                +20 3 5920004
                            </div>
                            
                            <div className="flex items-center gap-2 text-slate-400 text-xs">
                                <Mail size={14} className="text-[#38bdf8]" />
                                patents@alexu.edu.eg
                            </div>
                        </div>
                    </div>
                </main>
            ) : activeDivision === 'strategic' ? (
                <main className="flex-1 relative font-sans text-white p-6 md:p-10 lg:p-16 pt-36 md:pt-48 z-10 animate-in fade-in zoom-in-95 duration-300">
                    <div className="max-w-[1300px] mx-auto w-full mt-6 md:mt-8">
                        <div className="flex flex-wrap items-center gap-3 text-sm mb-12">
                            <button 
                                onClick={() => setActiveDivision(null)}
                                className="flex items-center gap-2 bg-[#091527] border border-slate-700/50 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors text-slate-300 hover:text-white"
                            >
                                <ArrowLeft size={16} />
                                Back to Overview
                            </button>
                            
                            <div className="hidden sm:block h-5 w-[1px] bg-slate-700"></div>
                            
                            <div className="flex items-center gap-2">
                                <span className="text-slate-400">Research & Innovation Sector</span>
                                <ChevronRight size={14} className="text-slate-500" />
                                <span className="text-[#eab308] font-medium">Strategic Projects & Studies for Science</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 mb-12">
                            <div className="w-[72px] h-[72px] rounded-[16px] border-[1.5px] border-[#14b8a6]/50 bg-[#14b8a6]/10 flex items-center justify-center shrink-0">
                                <Layers size={32} className="text-[#14b8a6]" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-3xl font-bold tracking-wide leading-tight mb-2">Strategic Projects & Studies for Science</h1>
                                <h2 className="text-[#14b8a6] text-[15px] font-medium">Industrial Optimization & Environmental Frameworks</h2>
                            </div>
                        </div>

                        <h3 className="text-[#eab308] text-xl font-bold mb-8 underline underline-offset-[12px] decoration-slate-700/70 inline-block">
                            Strategic Science Projects Portfolio & Industrial Partnerships
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-[#091527] border border-slate-700/50 rounded-xl p-8 hover:border-slate-600 transition-colors">
                                <h4 className="text-[#38bdf8] text-base font-bold mb-4">Industrial Optimization Research Framework</h4>
                                <p className="text-slate-300 text-[15px] leading-relaxed">
                                    The Strategic Projects Division coordinates high-impact applied research engagements with the industrial sector through the Industry-Academia Partnership Protocol (IAPP). Current active engagements include process optimization studies with five public-sector industrial authorities, raw water factory reusability feasibility projects with the Egyptian Industrial Development Authority (IDA), and a tri-university consortium on advanced logistics systems for the Suez Canal Economic Zone (SCZone).
                                </p>
                            </div>

                            <div className="bg-[#091527] border border-slate-700/50 rounded-xl p-8 hover:border-slate-600 transition-colors">
                                <h4 className="text-[#38bdf8] text-base font-bold mb-4">Environmental Governance & Sustainability Systems Studies</h4>
                                <p className="text-slate-300 text-[15px] leading-relaxed">
                                    Strategic environmental studies cover three active research tracks: coastal erosion mitigation frameworks for the Alexandrian Abu Qir basin, marine pollution monitoring systems for Alexandria's Eastern Harbor, and energy consumption optimization in the Greater Alexandria Industrial Zone. Each study is conducted in partnership with the Egyptian Environmental Affairs Agency (EEAA) and produces regulatory policy briefs for the Ministry of Environment.
                                </p>
                            </div>
                        </div>

                        <div className="w-full bg-[#091527] border border-slate-700/50 rounded-xl p-8 mb-10 hover:border-slate-600 transition-colors">
                            <h4 className="text-[#38bdf8] text-base font-bold mb-3">National Strategic Technology Assessments</h4>
                            <p className="text-slate-300 text-[14px] leading-relaxed">
                                At a national level, the division contributes to strategic technology assessment reports commissioned by the Supreme Council of Universities (SCU) and the Ministry of Higher Education and Scientific Research. Recent assessments covered quantum computing readiness in Egyptian academic infrastructure, AI governance frameworks for public administration, and a strategic audit of national STDF extraction pipeline performance.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
                            {renderInteractivePreview("#14b8a6")}
                            {renderResourcesActions("#14b8a6")}
                        </div>

                        <div className="w-full border-t border-slate-800 pt-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div className="flex flex-col">
                                <h5 className="text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">Administrative Contact</h5>
                                <div className="flex items-center gap-2 text-slate-400 text-xs">
                                    <MapPin size={14} className="text-[#38bdf8]" />
                                    Strategic Projects Division, Research Center, Alexandria University Administration Building
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-2 text-slate-400 text-xs">
                                <Phone size={14} className="text-[#38bdf8]" />
                                +20 3 4843888
                            </div>
                            
                            <div className="flex items-center gap-2 text-slate-400 text-xs">
                                <Mail size={14} className="text-[#38bdf8]" />
                                str.projects@alexu.edu.eg
                            </div>
                        </div>
                    </div>
                </main>
            ) : activeDivision === 'digital-library' ? (
                <main className="flex-1 relative font-sans text-white px-4 md:px-8 lg:px-12 pt-20 z-10 animate-in fade-in zoom-in-95 duration-300 pb-16">
                    <div className="max-w-full mx-auto">
                        <div className="flex flex-wrap items-center justify-between mb-6 gap-4 border-b border-white/5 pb-4">
                            <div className="flex items-center gap-4">
                                <button 
                                    onClick={() => setActiveDivision(null)}
                                    className="flex items-center gap-2 bg-[#091527] border border-slate-800 px-4 py-1.5 rounded-lg hover:bg-slate-800 transition-colors text-slate-300 text-xs"
                                >
                                    <ArrowLeft size={14} /> Back to Overview
                                </button>
                                <div className="h-4 w-[1px] bg-slate-700"></div>
                                <div className="flex items-center gap-2">
                                    <Library size={16} className="text-[#06b6d4]" />
                                    <h1 className="text-sm font-bold">Digital Library</h1>
                                    <span className="bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/20 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider">
                                        EGYPTIAN KNOWLEDGE BANK API PASS-THROUGH
                                    </span>
                                </div>
                            </div>
                            <div className="relative w-full md:w-64">
                                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                                <input 
                                    type="text" 
                                    placeholder="Search resources..." 
                                    className="w-full bg-[#040B16] border border-slate-800 rounded-lg py-1.5 pl-9 pr-4 text-xs focus:border-[#06b6d4] outline-none" 
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
                            {/* Library Sidebar */}
                            <div className="lg:col-span-1 flex flex-col gap-5 sticky top-24">
                                <div className="bg-[#091527] border border-slate-800 rounded-xl p-4 shadow-xl">
                                    <h3 className="text-slate-500 text-[9px] font-bold tracking-[0.2em] uppercase mb-3">API GATEWAY HUBS</h3>
                                    <div className="flex flex-col gap-3">
                                        {/* EKB Card Toggle */}
                                        <div className={`p-4 border rounded-xl transition-all relative ${ekbActive ? 'border-[#06b6d4]/40 bg-[#06b6d4]/5 shadow-[0_0_15px_rgba(6,182,212,0.15)] bg-gradient-to-b from-[#06b6d4]/10 to-transparent' : 'border-slate-800 bg-[#091527]'}`}>
                                            <div className="flex items-start justify-between gap-3 mb-2">
                                                <p className="text-white text-xs font-bold leading-tight">Egyptian Knowledge Bank (EKB)</p>
                                                <button 
                                                    onClick={() => setEkbActive(!ekbActive)}
                                                    className={`w-10 h-5 rounded-full p-0.5 transition-colors duration-200 shrink-0 relative ${ekbActive ? 'bg-[#06b6d4]' : 'bg-slate-800'}`}
                                                >
                                                    <div className={`w-4 h-4 bg-white rounded-full shadow transition-all duration-200 absolute top-0.5 ${ekbActive ? 'right-0.5' : 'left-0.5'}`}></div>
                                                </button>
                                            </div>
                                            <p className="text-slate-400 text-[10px] leading-normal mb-2">Full access to Springer, Wiley, and Nature journals via academic bypass.</p>
                                            <p className={`text-[9px] font-semibold flex items-center gap-1.5 ${ekbActive ? 'text-[#06b6d4]' : 'text-slate-500'}`}>
                                                <span className="w-1 h-1 rounded-full bg-current"></span>
                                                {ekbActive ? 'Connected & Authenticated' : 'Offline / Inactive'}
                                            </p>
                                        </div>

                                        {/* Thesis Card Toggle */}
                                        <div className={`p-4 border rounded-xl transition-all relative ${thesisActive ? 'border-[#06b6d4]/40 bg-[#06b6d4]/5 shadow-[0_0_15px_rgba(6,182,212,0.15)] bg-gradient-to-b from-[#06b6d4]/10 to-transparent' : 'border-slate-800 bg-[#091527]'}`}>
                                            <div className="flex items-start justify-between gap-3 mb-2">
                                                <p className="text-white text-xs font-bold leading-tight">AU Dissertations &amp; Thesis Repository</p>
                                                <button 
                                                    onClick={() => setThesisActive(!thesisActive)}
                                                    className={`w-10 h-5 rounded-full p-0.5 transition-colors duration-200 shrink-0 relative ${thesisActive ? 'bg-[#06b6d4]' : 'bg-slate-800'}`}
                                                >
                                                    <div className={`w-4 h-4 bg-white rounded-full shadow transition-all duration-200 absolute top-0.5 ${thesisActive ? 'right-0.5' : 'left-0.5'}`}></div>
                                                </button>
                                            </div>
                                            <p className="text-slate-400 text-[10px] leading-normal mb-2">42,150+ local Master &amp; Ph.D. theses indexed. Filter by faculty.</p>
                                            <p className={`text-[9px] font-semibold flex items-center gap-1.5 ${thesisActive ? 'text-[#06b6d4]' : 'text-slate-500'}`}>
                                                <span className="w-1 h-1 rounded-full bg-current"></span>
                                                {thesisActive ? 'Live — Indexed & Searchable' : 'Offline / Inactive'}
                                            </p>
                                        </div>

                                        {/* Global Index Card Toggle */}
                                        <div className={`p-4 border rounded-xl transition-all relative ${proxyActive ? 'border-[#06b6d4]/40 bg-[#06b6d4]/5 shadow-[0_0_15px_rgba(6,182,212,0.15)] bg-gradient-to-b from-[#06b6d4]/10 to-transparent' : 'border-slate-800 bg-[#091527]'}`}>
                                            <div className="flex items-start justify-between gap-3 mb-2">
                                                <p className="text-white text-xs font-bold leading-tight">Global Academic Index Open Proxy</p>
                                                <button 
                                                    onClick={() => setProxyActive(!proxyActive)}
                                                    className={`w-10 h-5 rounded-full p-0.5 transition-colors duration-200 shrink-0 relative ${proxyActive ? 'bg-[#06b6d4]' : 'bg-slate-800'}`}
                                                >
                                                    <div className={`w-4 h-4 bg-white rounded-full shadow transition-all duration-200 absolute top-0.5 ${proxyActive ? 'right-0.5' : 'left-0.5'}`}></div>
                                                </button>
                                            </div>
                                            <p className="text-slate-400 text-[10px] leading-normal mb-2">Scopus, PubMed, IEEE Xplore, Google Scholar via SSD.</p>
                                            <p className={`text-[9px] font-semibold flex items-center gap-1.5 ${proxyActive ? 'text-[#06b6d4]' : 'text-slate-500'}`}>
                                                <span className="w-1 h-1 rounded-full bg-current"></span>
                                                {proxyActive ? 'SSO Active for AU Students' : 'Offline / Inactive'}
                                            </p>
                                        </div>
                                    </div>

                                    <h3 className="text-slate-500 text-[9px] font-bold tracking-[0.2em] uppercase mt-6 mb-3">THESIS QUICK FILTER</h3>
                                    <div className="flex flex-col gap-2.5">
                                        {[
                                            { key: 'science', label: 'Faculty of Science' },
                                            { key: 'medicine', label: 'Faculty of Medicine' },
                                            { key: 'engineering', label: 'Faculty of Engineering' },
                                            { key: 'arts', label: 'Faculty of Arts' }
                                        ].map((f) => (
                                            <label key={f.key} className="flex items-center gap-3 cursor-pointer group select-none">
                                                <input 
                                                    type="checkbox" 
                                                    checked={filters[f.key as keyof typeof filters]} 
                                                    onChange={() => setFilters({ ...filters, [f.key]: !filters[f.key as keyof typeof filters] })}
                                                    className="hidden" 
                                                />
                                                <div className={`w-3.5 h-3.5 border rounded flex items-center justify-center transition-all duration-200 ${filters[f.key as keyof typeof filters] ? 'border-[#06b6d4] bg-[#06b6d4]/10' : 'border-slate-700 bg-[#040B16]'}`}>
                                                    {filters[f.key as keyof typeof filters] && <div className="w-1.5 h-1.5 bg-[#06b6d4] rounded-sm animate-in zoom-in-50 duration-150"></div>}
                                                </div>
                                                <span className={`text-xs font-medium transition-colors ${filters[f.key as keyof typeof filters] ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`}>{f.label}</span>
                                            </label>
                                        ))}
                                    </div>

                                    <div className="mt-6 pt-4 border-t border-slate-800">
                                        <h3 className="text-slate-500 text-[9px] font-bold tracking-[0.2em] uppercase mb-3">LIVE STATISTICS</h3>
                                        <div className="grid grid-cols-2 gap-x-2 gap-y-3 font-mono">
                                            <div><p className="text-[#06b6d4] text-xs font-bold">42,150+</p><p className="text-slate-600 text-[8px] uppercase font-bold tracking-wide mt-0.5">Theses Indexed</p></div>
                                            <div><p className="text-white text-xs font-bold">6,200+</p><p className="text-slate-600 text-[8px] uppercase font-bold tracking-wide mt-0.5">E-Books Available</p></div>
                                            <div><p className="text-white text-xs font-bold">18 TB</p><p className="text-slate-600 text-[8px] uppercase font-bold tracking-wide mt-0.5">Digital Archive</p></div>
                                            <div><p className="text-emerald-500 text-xs font-bold">99.4%</p><p className="text-slate-600 text-[8px] uppercase font-bold tracking-wide mt-0.5">Uptime (30d)</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Library Core Content Grid */}
                            <div className="lg:col-span-4 flex flex-col gap-8">
                                {[
                                    { id: "medicine", title: "Medicine & Life Sciences", icon: <Layers size={12} className="text-[#06b6d4]"/>, color: "#06b6d4", bgGlow: "from-[#06b6d4]/40", bgImageGlow: "from-[#012d4a] via-[#041d30] to-[#091527]", items: [
                                        { t: "Principles of Internal Medicine & Clinical Practices (11th Ed.)", f: "Alexandria University Faculty Board Panel", s: "PDF · 14.2 MB · Scopus Medical", p: 67, b2: "Download PDF" },
                                        { t: "Advanced Biomaterials & Dental Engineering Fundamentals", f: "Faculty of Dentistry Research Core", s: "E-Pub · 8.7 MB · AU Repository", p: 41, b2: "Save to Workspace" }
                                    ]},
                                    { id: "engineering", title: "Engineering & Technology", icon: <Atom size={12} className="text-[#22c55e]"/>, color: "#22c55e", bgGlow: "from-[#22c55e]/40", bgImageGlow: "from-[#053d1b] via-[#03240f] to-[#091527]", items: [
                                        { t: "Structural Optimization and Nanotechnology Applications", f: "Center for Support of Scientific Excellence", s: "PDF · 22.1 MB · AEJ Reprint", p: 93, b2: "Download PDF" },
                                        { t: "Algorithms for Machine Learning and Big Data Analytics", f: "Faculty of Computer Science & Data Reference", s: "PDF · 18.5 MB · IEEE Indexed", p: 55, b2: "Remote Proxy" }
                                    ]},
                                    { id: "humanities", title: "Humanities & Social Sciences", icon: <BookOpen size={12} className="text-[#f97316]"/>, color: "#f97316", bgGlow: "from-[#f97316]/40", bgImageGlow: "from-[#471d02] via-[#240e01] to-[#091527]", items: [
                                        { t: "Lexicology, Morphemic Structures, and Modern Arabic Linguistics", f: "Dept. of English Language & Linguistics, Faculty of Arts", s: "PDF · 6.4 MB · Peer-Reviewed", p: 29, b2: "Download PDF" },
                                        { t: "Egyptian Civil Service Law & Public Contracts Legislation Manual", f: "Faculty of Law Jurisprudence Library", s: "PDF · 4.1 MB · Law Repository", p: 17, b2: "Download PDF" }
                                    ]}
                                ].map((cat) => {
                                    const isSectionOpen = openSections[cat.id as keyof typeof openSections];
                                    return (
                                        <div key={cat.id} className="flex flex-col gap-4">
                                            <div className="flex items-center gap-3">
                                                <button 
                                                    onClick={() => setOpenSections({ ...openSections, [cat.id]: !isSectionOpen })}
                                                    className="p-1 border border-slate-800 bg-[#091527] rounded text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                                                >
                                                    {cat.icon}
                                                </button>
                                                <h3 className="text-white text-xs font-bold uppercase tracking-wider">{cat.title}</h3>
                                                <div className="h-[1px] flex-1 bg-slate-800/60"></div>
                                                <span className="text-slate-600 text-[10px] font-mono">2 resources</span>
                                            </div>

                                            {isSectionOpen ? (
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
                                                    {cat.items.map((item, j) => (
                                                        <div key={j} className="group relative bg-[#091527] border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700/60 transition-all shadow-xl">
                                                            <div className={`absolute inset-0 bg-gradient-to-b ${cat.bgImageGlow} opacity-60 group-hover:opacity-80 transition-opacity pointer-events-none`}></div>
                                                            <div className="absolute top-0 left-0 w-[3px] h-full" style={{ backgroundColor: cat.color }}></div>
                                                            <div className="p-5 flex flex-col h-full justify-between relative z-10">
                                                                <div>
                                                                    <h4 className="text-white text-[12.5px] font-bold mb-2.5 leading-snug group-hover:text-[#06b6d4] transition-colors">{item.t}</h4>
                                                                    <p className="text-slate-400 text-[10px] mb-0.5">{item.f}</p>
                                                                    <p className="text-[#06b6d4] text-[10px] mb-2 font-mono">{item.s}</p>
                                                                    
                                                                    <div className="w-full h-1 bg-slate-800 rounded-full mb-2 relative overflow-hidden">
                                                                        <div className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000" style={{ width: `${item.p}%`, backgroundColor: cat.color }}></div>
                                                                    </div>
                                                                    <p className="text-slate-500 text-[9px] mb-4">{item.p}% accessed this month</p>
                                                                </div>

                                                                <div className="flex gap-2 mt-2">
                                                                    <button className="flex-1 bg-[#040B16]/90 border border-slate-800/80 py-2 rounded-lg text-slate-300 text-[10px] font-semibold hover:bg-slate-800 transition-all">Read Online</button>
                                                                    <button className="flex-1 bg-white/5 border border-slate-800/80 py-2 rounded-lg text-slate-300 text-[10px] font-semibold hover:bg-white/10 transition-all">{item.b2}</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in duration-200">
                                                    {cat.items.map((item, j) => (
                                                        <div key={j} className="group relative bg-[#091527]/40 border border-slate-900/60 rounded-xl overflow-hidden opacity-50 grayscale transition-all">
                                                            <div className="absolute top-0 left-0 w-full h-[2px] bg-slate-800"></div>
                                                            <div className="p-5 flex flex-col h-full justify-between">
                                                                <div>
                                                                    <h4 className="text-slate-400 text-[12.5px] font-bold mb-2.5 leading-snug">{item.t}</h4>
                                                                    <p className="text-slate-500 text-[10px] mb-0.5">{item.f}</p>
                                                                    <p className="text-slate-700 text-[10px] mb-4 font-mono">{item.s}</p>
                                                                </div>
                                                                <div className="flex gap-2 mt-2">
                                                                    <div className="flex-1 bg-slate-900 h-8 rounded-lg"></div>
                                                                    <div className="flex-1 bg-slate-900 h-8 rounded-lg"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Library Footer Layout Info */}
                        <div className="w-full border-t border-slate-800/80 mt-12 pt-5 flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-2 text-slate-500 text-[9px] uppercase font-bold tracking-widest">
                                <MapPin size={12} className="text-[#06b6d4]" />
                                Central University Library Building, Shatby Campus, Alexandria
                            </div>
                            <div className="flex items-center gap-2 text-slate-500 text-[9px] uppercase font-bold tracking-widest">
                                <Phone size={12} className="text-[#06b6d4]" />
                                +20 3 5921878
                            </div>
                            <div className="flex items-center gap-2 text-slate-500 text-[9px] uppercase font-bold tracking-widest">
                                <Mail size={12} className="text-[#06b6d4]" />
                                Digital-Lib@alexu.edu.eg
                            </div>
                        </div>
                    </div>
                </main>
            ) : (
                <main className="flex-1 relative font-sans text-white p-6 md:p-10 lg:p-16 pt-36 md:pt-48 z-10 animate-in fade-in zoom-in-95 duration-300">
                    <div className="max-w-[1300px] mx-auto w-full mt-6 md:mt-8">
                        <div className="flex flex-wrap items-center gap-3 text-sm mb-12">
                            <button 
                                onClick={() => setActiveDivision(null)}
                                className="flex items-center gap-2 bg-[#091527] border border-slate-700/50 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors text-slate-300 hover:text-white"
                            >
                                <ArrowLeft size={16} /> Back to Overview
                            </button>
                            <div className="hidden sm:block h-5 w-[1px] bg-slate-700"></div>
                            <div className="flex items-center gap-2">
                                <span className="text-slate-400">Research & Innovation Sector</span>
                                <ChevronRight size={14} className="text-slate-500" />
                                <span className="text-[#eab308] font-medium">
                                    {researchDivisions.find(d => d.id === activeDivision)?.title.replace('\n', ' ')}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 mb-12">
                            <div className="w-[72px] h-[72px] rounded-[16px] border-[1.5px] border-white/10 bg-white/5 flex items-center justify-center shrink-0">
                                {researchDivisions.find(d => d.id === activeDivision)?.icon}
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-3xl font-bold tracking-wide leading-tight mb-2">
                                    {researchDivisions.find(d => d.id === activeDivision)?.title.replace('\n', ' ')}
                                </h1>
                                <h2 className="text-slate-400 text-[15px] font-medium">
                                    {researchDivisions.find(d => d.id === activeDivision)?.subtitle}
                                </h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 items-center">
                            <div className="lg:col-span-2">
                                {renderInteractivePreview("#38bdf8")} 
                            </div>
                            <div className="lg:col-span-1">
                                {renderResourcesActions("#38bdf8")}
                            </div>
                        </div>
                    </div>
                </main>
            )}

            <footer className="w-full flex items-center justify-between px-8 py-5 z-10 border-t border-slate-800/50 text-slate-600 text-[10px] font-medium tracking-wide bg-[#040B16] mt-auto">
                <span>© 2026 Alexandria University - All Rights Reserved</span>
                <span>Research Sector Portal v3.2 - Powered by AU Knowledge Infrastructure</span>
            </footer>
        </div>
    );
}