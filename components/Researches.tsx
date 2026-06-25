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
            icon: <Globe size={22} className="text-[#0284c7] dark:text-[#38bdf8]" />,
            color: "border-[#0284c7]/30 dark:border-[#38bdf8]/50 bg-[#0284c7]/5 dark:bg-[#38bdf8]/10",
            colorHex: "#0284c7",
            darkColorHex: "#38bdf8",
            number: "01",
            id: "publishing"
        },
        {
            title: "University Research Plan",
            subtitle: "Alignment with Egypt's Vision 2030",
            icon: <BookOpen size={22} className="text-[#9333ea] dark:text-[#a855f7]" />,
            color: "border-[#9333ea]/30 dark:border-[#a855f7]/50 bg-[#9333ea]/5 dark:bg-[#a855f7]/10",
            colorHex: "#9333ea",
            darkColorHex: "#a855f7",
            number: "02",
            id: "plan"
        },
        {
            title: "Scientific Awards & Awards\nRegulation",
            subtitle: "Faculty Recognition & Eligibility Criteria",
            icon: <Trophy size={22} className="text-[#D4AF37] dark:text-[#eab308]" />,
            color: "border-[#D4AF37]/30 dark:border-[#eab308]/50 bg-[#D4AF37]/5 dark:bg-[#eab308]/10",
            colorHex: "#D4AF37",
            darkColorHex: "#eab308",
            number: "03",
            id: "awards"
        },
        {
            title: "Research Projects",
            subtitle: "Institutional Portfolio & STDF Active Grants",
            icon: <FlaskConical size={22} className="text-[#16a34a] dark:text-[#22c55e]" />,
            color: "border-[#16a34a]/30 dark:border-[#22c55e]/50 bg-[#16a34a]/5 dark:bg-[#22c55e]/10",
            colorHex: "#16a34a",
            darkColorHex: "#22c55e",
            number: "04",
            id: "projects"
        },
        {
            title: "Scientific Journals of AU",
            subtitle: "Alexandria Engineering Journal & Academic R...",
            icon: <BookMarked size={22} className="text-[#c026d3] dark:text-[#d946ef]" />,
            color: "border-[#c026d3]/30 dark:border-[#d946ef]/50 bg-[#c026d3]/5 dark:bg-[#d946ef]/10",
            colorHex: "#c026d3",
            darkColorHex: "#d946ef",
            number: "05",
            id: "journals"
        },
        {
            title: "University Research Conference",
            subtitle: "Annual Innovation Summit & Itineraries",
            icon: <UsersIcon size={22} className="text-[#ea580c] dark:text-[#f97316]" />,
            color: "border-[#ea580c]/30 dark:border-[#f97316]/50 bg-[#ea580c]/5 dark:bg-[#f97316]/10",
            colorHex: "#ea580c",
            darkColorHex: "#f97316",
            number: "06",
            id: "conference"
        },
        {
            title: "Patents Hub",
            subtitle: "Intellectual Property Protection & Commercial...",
            icon: <Lightbulb size={22} className="text-[#D4AF37] dark:text-[#eab308]" />,
            color: "border-[#D4AF37]/30 dark:border-[#eab308]/50 bg-[#D4AF37]/5 dark:bg-[#eab308]/10",
            colorHex: "#D4AF37",
            darkColorHex: "#eab308",
            number: "07",
            id: "patents"
        },
        {
            title: "Strategic Projects & Studies for\nScience",
            subtitle: "Industrial Optimization & Environmental Fram...",
            icon: <Layers size={22} className="text-[#0d9488] dark:text-[#14b8a6]" />,
            color: "border-[#0d9488]/30 dark:border-[#14b8a6]/50 bg-[#0d9488]/5 dark:bg-[#14b8a6]/10",
            colorHex: "#0d9488",
            darkColorHex: "#14b8a6",
            number: "08",
            id: "strategic"
        },
        {
            title: "Digital Library",
            subtitle: "Egyptian Knowledge Bank API Gateway Pass-...",
            icon: <Library size={22} className="text-[#0891b2] dark:text-[#06b6d4]" />,
            color: "border-[#0891b2]/30 dark:border-[#06b6d4]/50 bg-[#0891b2]/5 dark:bg-[#06b6d4]/10",
            colorHex: "#0891b2",
            darkColorHex: "#06b6d4",
            number: "09",
            id: "digital-library"
        }
    ];

    const renderInteractivePreview = (lightColor: string, darkColor: string) => (
        <div className="lg:col-span-2 flex flex-col">
            <div className="relative bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 shadow-sm rounded-xl overflow-hidden min-h-[350px] flex items-center justify-center w-full group hover:shadow-lg transition-shadow">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 dark:from-slate-800/40 via-white dark:via-[#091527] to-white dark:to-[#091527]"></div>
                <div className="absolute top-0 left-0 w-[150%] h-[150%] bg-gradient-to-br from-transparent via-slate-50 dark:via-slate-800/20 to-transparent -translate-x-1/4 -translate-y-1/4 transform rotate-[-15deg]"></div>
                
                <div className="relative z-10 flex items-center justify-center translate-x-8">
                    <div className="absolute w-20 h-20 rounded-full border border-slate-300 dark:border-slate-700 animate-pulse-ring translate-x-12" style={{ borderColor: `${lightColor}40` }}></div>
                    <div className="w-10 h-10 rounded-full text-white flex items-center justify-center z-20 shadow-lg cursor-pointer hover:scale-110 transition-transform" style={{ backgroundColor: lightColor }}>
                        <Play size={16} className="fill-white ml-1" />
                    </div>
                </div>

                <div className="absolute bottom-4 left-4">
                    <div className="bg-slate-50 dark:bg-[#0b1c3a] border border-slate-200 dark:border-[#1e3a5f] px-3 py-1.5 rounded text-[10px] text-slate-500 dark:text-white font-bold tracking-widest w-fit">
                        INTERACTIVE PREVIEW
                    </div>
                </div>
            </div>
            <p className="text-slate-400 dark:text-slate-500 text-[11px] text-center mt-3">High-resolution tech visualization loop - 10s cycle</p>
        </div>
    );

    const renderResourcesActions = (lightColor: string, darkColor: string) => (
        <div className="lg:col-span-1 flex flex-col justify-start pt-4">
            <h4 className="text-[#001A41] dark:text-[#eab308] text-sm font-bold tracking-widest uppercase mb-6">RESOURCES & ACTIONS</h4>
            <div className="flex flex-col gap-4">
                <button className="w-full flex items-center gap-3 p-4 border border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-800/30 shadow-sm rounded-lg text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-sm font-medium">
                    <ExternalLink size={18} style={{ color: lightColor }} className="dark:hidden" />
                    <ExternalLink size={18} style={{ color: darkColor }} className="hidden dark:block" />
                    Launch Interactive Showcase
                </button>
                <button className="w-full flex items-center gap-3 p-4 border border-slate-200 dark:border-[#eab308]/40 bg-white dark:bg-[#eab308]/5 shadow-sm rounded-lg text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-[#eab308]/20 hover:bg-slate-50 dark:hover:bg-[#eab308]/10 transition-all text-sm font-medium">
                    <Download size={18} className="text-[#D4AF37] dark:text-[#eab308]" />
                    Download Brief PDF
                </button>
            </div>
        </div>
    );

    return (
        <div className="relative min-h-screen bg-[#F8FAFC] dark:bg-[#040B16] font-sans flex flex-col transition-colors duration-500 selection:bg-[#D4AF37]/30">
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

            <nav className={`fixed top-0 w-full z-50 px-4 md:px-8 flex justify-between items-center transition-all duration-300 ease-in-out ${isScrolled ? "bg-white/95 dark:bg-[#0B3C5D]/95 backdrop-blur-md shadow-sm dark:shadow-lg py-2 md:py-3 border-b border-slate-200 dark:border-white/5" : "bg-transparent py-4 md:py-6"}`}>
                <div className="flex items-center gap-2 md:gap-4 cursor-pointer z-50" onClick={() => router.push('/')}>
                    <div className="h-10 md:h-12 flex items-center justify-center transition-all duration-300">
                        <img src="/logos/logo2.png" alt="Alexandria University Logo" className="h-full w-auto object-contain" />
                    </div>
                    <div className="text-[#001A41] dark:text-white font-semibold leading-tight tracking-widest text-xs md:text-sm">
                        ALEXANDRIA<br />UNIVERSITY
                    </div>
                </div>

                <button className="md:hidden z-50 text-[#001A41] dark:text-white hover:text-[#D4AF37] transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line></svg>
                    )}
                </button>

                <div className="hidden md:flex items-center gap-8 text-[#001A41] dark:text-white text-lg font-medium">
                    <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
                    <Link href="/about" className="hover:text-[#D4AF37] transition-colors">About</Link>
                    <Link href="/students" className="hover:text-[#D4AF37] transition-colors">Students</Link>
                    <Link href="/academics" className="hover:text-[#D4AF37] transition-colors">Academics</Link>
                    <Link href="/collaboration" className="hover:text-[#D4AF37] transition-colors">Collaboration</Link>
                    <Link href="/alumni" className="hover:text-[#D4AF37] transition-colors">Alumni</Link>
                    <Link href="/administration" className="hover:text-[#D4AF37] transition-colors">Administration</Link>
                    <button onClick={() => setActiveDivision(null)} className="text-[#D4AF37] transition-colors font-bold">Researches</button>
                </div>

                <div className="hidden md:flex items-center gap-4 z-50">
                    {isLoggedIn ? (
                        <div className="flex items-center gap-3 animate-in fade-in duration-300">
                            <button onClick={() => router.push('/dashboard')} className="p-2 rounded-full bg-[#0B3C5D]/5 dark:bg-white/10 text-[#0B3C5D] dark:text-[#D4AF37] border border-[#0B3C5D]/10 dark:border-[#D4AF37]/30 hover:scale-110 transition-transform shadow-sm dark:shadow-md" title="Go to Academic Student Dashboard">
                                <User size={18} />
                            </button>
                            <button onClick={handleSignOut} className="flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-5 py-2 rounded-full font-semibold transition-transform hover:scale-105 shadow-md text-sm">
                                <LogOut size={14} />
                                Sign Out
                            </button>
                        </div>
                    ) : (
                        <button onClick={() => setIsAuthModalOpen(true)} className="bg-[#0B3C5D] dark:bg-[#D4AF37] hover:bg-[#D4AF37] dark:hover:bg-[#A67F1F] text-white dark:hover:text-white dark:text-[#0B3C5D] px-6 py-2 rounded-full font-semibold transition-transform hover:scale-105 shadow-md flex items-center gap-2">
                            <LogIn size={14} />
                            Sign In
                        </button>
                    )}
                    <ThemeToggle />
                </div>
            </nav>

            {activeDivision === null ? (
                <main className="flex-1 relative overflow-hidden flex flex-col pt-32 md:pt-40">
                    <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-60 z-0">
                        <div className="absolute top-[20%] left-[10%] w-[4px] dark:w-[2px] h-[4px] dark:h-[2px] bg-[#D4AF37] dark:bg-[#eab308] rounded-full"></div>
                        <div className="absolute top-[15%] left-[30%] w-[3px] dark:w-[1px] h-[3px] dark:h-[1px] bg-slate-300 dark:bg-white rounded-full"></div>
                        <div className="absolute top-[40%] left-[5%] w-[5px] dark:w-[3px] h-[5px] dark:h-[3px] bg-[#0284c7] dark:bg-[#38bdf8] rounded-full opacity-50"></div>
                        <div className="absolute top-[60%] left-[20%] w-[4px] dark:w-[2px] h-[4px] dark:h-[2px] bg-[#D4AF37] dark:bg-[#eab308] rounded-full"></div>
                        <div className="absolute top-[80%] left-[8%] w-[3px] dark:w-[1px] h-[3px] dark:h-[1px] bg-slate-300 dark:bg-white rounded-full"></div>
                        <div className="absolute top-[25%] right-[20%] w-[4px] dark:w-[2px] h-[4px] dark:h-[2px] bg-[#0284c7] dark:bg-[#38bdf8] rounded-full"></div>
                        <div className="absolute top-[50%] right-[5%] w-[5px] dark:w-[3px] h-[5px] dark:h-[3px] bg-[#D4AF37] dark:bg-[#eab308] rounded-full opacity-50"></div>
                        <div className="absolute top-[75%] right-[15%] w-[3.5px] dark:w-[1.5px] h-[3.5px] dark:h-[1.5px] bg-slate-300 dark:bg-white rounded-full"></div>
                    </div>

                    <div className="w-full max-w-[1300px] mx-auto px-4 relative z-10 flex flex-col mb-4">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
                            <div className="flex items-center gap-5">
                                <div className="w-[52px] h-[52px] rounded-[14px] border-[1.5px] border-[#D4AF37]/30 dark:border-[#eab308]/40 bg-[#D4AF37]/5 dark:bg-[#091527] flex items-center justify-center shrink-0">
                                    <Atom size={26} className="text-[#D4AF37] dark:text-[#eab308] animate-[spin_6s_linear_infinite]" />
                                </div>
                                <div className="flex flex-col pt-1">
                                    <h1 className="text-[#001A41] dark:text-white text-3xl md:text-4xl font-serif font-bold tracking-tight leading-tight">Alexandria University</h1>
                                    <h2 className="text-[#0B3C5D] dark:text-[#38bdf8] text-xs font-bold uppercase tracking-[0.2em] mt-1 dark:tracking-wide dark:normal-case">Research & Innovation Sector<span className="hidden dark:inline"> · Command Gateway</span></h2>
                                </div>
                            </div>
                            
                            <div className="hidden md:flex items-center gap-4 mt-4 md:mt-0">
                                <div className="flex items-center gap-2">
                                    <span className="w-[6px] h-[6px] rounded-full bg-[#0284c7] dark:bg-[#38bdf8]"></span>
                                    <span className="text-slate-500 dark:text-slate-400 text-xs font-bold dark:font-medium tracking-wide">9 Research Divisions · Active</span>
                                </div>
                                <div className="h-4 w-[1px] bg-slate-300 dark:bg-slate-700/80 mx-1"></div>
                                <div className="text-[#D4AF37] dark:text-[#eab308] text-xs font-bold tracking-widest bg-amber-50 dark:bg-transparent px-3 py-1 rounded-full border border-amber-100 dark:border-none dark:p-0">
                                    AY 2025-2026
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center mt-6 dark:mt-2">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t-[1.5px] border-slate-200 dark:border-slate-700/40"></div>
                            </div>
                            <div className="relative bg-[#F8FAFC] dark:bg-[#040B16] px-6">
                                <span className="text-slate-400 text-[10px] font-bold dark:font-medium tracking-[0.2em] uppercase">
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
                                    className="group relative bg-white dark:bg-[#091527] border border-slate-200 dark:border-[#eab308] hover:border-[#D4AF37]/50 rounded-2xl dark:rounded-xl p-6 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col min-h-[200px] overflow-hidden shadow-sm dark:shadow-lg hover:shadow-xl"
                                >
                                    <div className="absolute top-0 right-0 w-[60%] h-[80%] bg-gradient-to-bl from-slate-50 dark:from-slate-700/20 to-transparent pointer-events-none" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}></div>

                                    <div className="flex items-start gap-4 mb-6 relative z-10">
                                        <div className={`w-[52px] h-[52px] rounded-[14px] border border-dashed ${division.color} flex items-center justify-center shrink-0`}>
                                            <div className="animate-float-icon" style={{ animationDelay: `${idx * 0.15}s` }}>
                                                {division.icon}
                                            </div>
                                        </div>
                                        <div className="flex flex-col pt-1">
                                            <h3 className="text-[#001A41] dark:text-white text-[15px] dark:text-[14px] font-bold leading-tight mb-1.5 whitespace-pre-line group-hover:text-[#0B3C5D] dark:group-hover:text-white transition-colors">{division.title}</h3>
                                            <p className="text-slate-500 dark:text-[#38bdf8] text-[11px] dark:text-[10px] font-medium leading-relaxed dark:opacity-80 mb-8">{division.subtitle}</p>
                                        </div>
                                    </div>

                                    <div className="mt-auto relative z-10 w-full">
                                        <div className="w-full h-[1px] bg-slate-100 dark:bg-slate-700/60 mb-4 dark:mb-3"></div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-400 text-[10px] dark:text-[9px] font-medium tracking-wide">Research Sector Gateway</span>
                                            <div className="flex items-center gap-1.5">
                                                <span className="text-[#0B3C5D] dark:text-[#38bdf8] text-[11px] font-bold flex items-center gap-0.5 group-hover:mr-1 transition-all">
                                                    Explore <ChevronRight size={12} strokeWidth={3} />
                                                </span>
                                                <span className="text-slate-400 dark:text-slate-500 text-[10px] font-mono tracking-wider ml-1">{division.number} / 09</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            ) : activeDivision === 'digital-library' ? (
                <main className="flex-1 relative font-sans text-slate-800 dark:text-white px-4 md:px-8 lg:px-12 pt-28 md:pt-36 dark:pt-20 z-10 animate-in fade-in zoom-in-95 duration-300 pb-16">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="flex flex-wrap items-center justify-between mb-8 dark:mb-6 gap-4 border-b border-slate-200 dark:border-white/5 pb-6 dark:pb-4">
                            <div className="flex items-center gap-4">
                                <button 
                                    onClick={() => setActiveDivision(null)}
                                    className="flex items-center gap-2 bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 px-4 py-2 dark:py-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 hover:text-[#001A41] dark:hover:text-white text-xs font-bold dark:font-normal shadow-sm dark:shadow-none"
                                >
                                    <ArrowLeft size={14} /> Back to Overview
                                </button>
                                <div className="h-5 dark:h-4 w-[1px] bg-slate-300 dark:bg-slate-700"></div>
                                <div className="flex items-center gap-2">
                                    <Library size={18} className="text-[#0891b2] dark:text-[#06b6d4]" />
                                    <h1 className="text-lg dark:text-sm font-bold text-[#001A41] dark:text-white">Digital Library</h1>
                                    <span className="bg-[#0891b2]/10 dark:bg-[#06b6d4]/10 text-[#0891b2] dark:text-[#06b6d4] border border-[#0891b2]/20 dark:border-[#06b6d4]/20 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ml-2">
                                        EKB API PASS-THROUGH
                                    </span>
                                </div>
                            </div>
                            <div className="relative w-full md:w-72 md:dark:w-64 shadow-sm dark:shadow-none">
                                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                                <input 
                                    type="text" 
                                    placeholder="Search scholarly resources..." 
                                    className="w-full bg-white dark:bg-[#040B16] border border-slate-200 dark:border-slate-800 rounded-full dark:rounded-lg py-2.5 dark:py-1.5 pl-10 pr-4 text-sm dark:text-xs focus:border-[#0891b2] dark:focus:border-[#06b6d4] outline-none transition-colors" 
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 dark:gap-6 items-start">
                            <div className="lg:col-span-1 flex flex-col gap-6 dark:gap-5 sticky top-28 dark:top-24">
                                <div className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl dark:rounded-xl p-5 dark:p-4 shadow-sm dark:shadow-xl">
                                    <h3 className="text-slate-500 text-[10px] dark:text-[9px] font-bold tracking-[0.2em] uppercase mb-4 dark:mb-3">API GATEWAY HUBS</h3>
                                    <div className="flex flex-col gap-4 dark:gap-3">
                                        <div className={`p-4 border rounded-xl transition-all relative ${ekbActive ? 'border-[#0891b2]/30 dark:border-[#06b6d4]/40 bg-[#0891b2]/5 dark:bg-[#06b6d4]/5 shadow-sm dark:shadow-[0_0_15px_rgba(6,182,212,0.15)] dark:bg-gradient-to-b dark:from-[#06b6d4]/10 dark:to-transparent' : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#091527]'}`}>
                                            <div className="flex items-start justify-between gap-3 mb-2">
                                                <p className="text-[#001A41] dark:text-white text-xs font-bold leading-tight">Egyptian Knowledge Bank (EKB)</p>
                                                <button 
                                                    onClick={() => setEkbActive(!ekbActive)}
                                                    className={`w-10 h-5 rounded-full p-0.5 transition-colors duration-300 shrink-0 relative shadow-inner dark:shadow-none ${ekbActive ? 'bg-[#0891b2] dark:bg-[#06b6d4]' : 'bg-slate-300 dark:bg-slate-800'}`}
                                                >
                                                    <div className={`w-4 h-4 bg-white rounded-full shadow transition-all duration-300 absolute top-0.5 ${ekbActive ? 'right-0.5' : 'left-0.5'}`}></div>
                                                </button>
                                            </div>
                                            <p className="text-slate-500 dark:text-slate-400 text-[11px] dark:text-[10px] leading-relaxed dark:leading-normal mb-3 dark:mb-2">Full access to Springer, Wiley, and Nature journals via academic bypass.</p>
                                            <p className={`text-[10px] dark:text-[9px] font-bold dark:font-semibold flex items-center gap-1.5 ${ekbActive ? 'text-[#0891b2] dark:text-[#06b6d4]' : 'text-slate-400 dark:text-slate-500'}`}>
                                                <span className={`w-1.5 dark:w-1 h-1.5 dark:h-1 rounded-full ${ekbActive ? 'bg-[#0891b2] dark:bg-current animate-pulse dark:animate-none' : 'bg-slate-400 dark:bg-current'}`}></span>
                                                {ekbActive ? 'Connected & Authenticated' : 'Offline / Inactive'}
                                            </p>
                                        </div>

                                        <div className={`p-4 border rounded-xl transition-all relative ${thesisActive ? 'border-[#0891b2]/30 dark:border-[#06b6d4]/40 bg-[#0891b2]/5 dark:bg-[#06b6d4]/5 shadow-sm dark:shadow-[0_0_15px_rgba(6,182,212,0.15)] dark:bg-gradient-to-b dark:from-[#06b6d4]/10 dark:to-transparent' : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#091527]'}`}>
                                            <div className="flex items-start justify-between gap-3 mb-2">
                                                <p className="text-[#001A41] dark:text-white text-xs font-bold leading-tight">AU Dissertations Repository</p>
                                                <button 
                                                    onClick={() => setThesisActive(!thesisActive)}
                                                    className={`w-10 h-5 rounded-full p-0.5 transition-colors duration-300 shrink-0 relative shadow-inner dark:shadow-none ${thesisActive ? 'bg-[#0891b2] dark:bg-[#06b6d4]' : 'bg-slate-300 dark:bg-slate-800'}`}
                                                >
                                                    <div className={`w-4 h-4 bg-white rounded-full shadow transition-all duration-300 absolute top-0.5 ${thesisActive ? 'right-0.5' : 'left-0.5'}`}></div>
                                                </button>
                                            </div>
                                            <p className="text-slate-500 dark:text-slate-400 text-[11px] dark:text-[10px] leading-relaxed dark:leading-normal mb-3 dark:mb-2">42,150+ local Master & Ph.D. theses indexed.</p>
                                            <p className={`text-[10px] dark:text-[9px] font-bold dark:font-semibold flex items-center gap-1.5 ${thesisActive ? 'text-[#0891b2] dark:text-[#06b6d4]' : 'text-slate-400 dark:text-slate-500'}`}>
                                                <span className={`w-1.5 dark:w-1 h-1.5 dark:h-1 rounded-full ${thesisActive ? 'bg-[#0891b2] dark:bg-current' : 'bg-slate-400 dark:bg-current'}`}></span>
                                                {thesisActive ? 'Live & Searchable' : 'Offline / Inactive'}
                                            </p>
                                        </div>
                                    </div>

                                    <h3 className="text-slate-500 text-[10px] dark:text-[9px] font-bold tracking-[0.2em] uppercase mt-8 dark:mt-6 mb-4 dark:mb-3">THESIS QUICK FILTER</h3>
                                    <div className="flex flex-col gap-3 dark:gap-2.5">
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
                                                <div className={`w-4 dark:w-3.5 h-4 dark:h-3.5 border rounded flex items-center justify-center transition-all duration-200 ${filters[f.key as keyof typeof filters] ? 'border-[#0891b2] dark:border-[#06b6d4] bg-[#0891b2] dark:bg-[#06b6d4]/10' : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-[#040B16] group-hover:border-slate-400'}`}>
                                                    {filters[f.key as keyof typeof filters] && <svg className="dark:hidden" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                                                    {filters[f.key as keyof typeof filters] && <div className="hidden dark:block w-1.5 h-1.5 bg-[#06b6d4] rounded-sm animate-in zoom-in-50 duration-150"></div>}
                                                </div>
                                                <span className={`text-xs font-semibold dark:font-medium transition-colors ${filters[f.key as keyof typeof filters] ? 'text-[#001A41] dark:text-white' : 'text-slate-500 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300'}`}>{f.label}</span>
                                            </label>
                                        ))}
                                    </div>

                                    <div className="mt-8 dark:mt-6 pt-6 dark:pt-4 border-t border-slate-100 dark:border-slate-800">
                                        <h3 className="text-slate-500 text-[10px] dark:text-[9px] font-bold tracking-[0.2em] uppercase mb-4 dark:mb-3">LIVE STATISTICS</h3>
                                        <div className="grid grid-cols-2 gap-x-2 gap-y-5 dark:gap-y-3 font-mono">
                                            <div><p className="text-[#0891b2] dark:text-[#06b6d4] text-sm dark:text-xs font-bold">42,150+</p><p className="text-slate-500 dark:text-slate-600 text-[9px] dark:text-[8px] uppercase font-bold tracking-wide mt-1 dark:mt-0.5">Theses Indexed</p></div>
                                            <div><p className="text-[#001A41] dark:text-white text-sm dark:text-xs font-bold">6,200+</p><p className="text-slate-500 dark:text-slate-600 text-[9px] dark:text-[8px] uppercase font-bold tracking-wide mt-1 dark:mt-0.5">E-Books Available</p></div>
                                            <div><p className="text-[#001A41] dark:text-white text-sm dark:text-xs font-bold">18 TB</p><p className="text-slate-500 dark:text-slate-600 text-[9px] dark:text-[8px] uppercase font-bold tracking-wide mt-1 dark:mt-0.5">Digital Archive</p></div>
                                            <div><p className="text-emerald-600 dark:text-emerald-500 text-sm dark:text-xs font-bold">99.4%</p><p className="text-slate-500 dark:text-slate-600 text-[9px] dark:text-[8px] uppercase font-bold tracking-wide mt-1 dark:mt-0.5">Uptime (30d)</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-4 flex flex-col gap-8">
                                {[
                                    { id: "medicine", title: "Medicine & Life Sciences", icon: <Layers size={14} className="text-[#0891b2] dark:text-[#06b6d4]"/>, color: "#0891b2", darkColor: "#06b6d4", bgImageGlow: "from-[#012d4a] via-[#041d30] to-[#091527]", items: [
                                        { t: "Principles of Internal Medicine & Clinical Practices (11th Ed.)", f: "Alexandria University Faculty Board Panel", s: "PDF · 14.2 MB · Scopus Medical", p: 67, b2: "Download PDF" },
                                        { t: "Advanced Biomaterials & Dental Engineering Fundamentals", f: "Faculty of Dentistry Research Core", s: "E-Pub · 8.7 MB · AU Repository", p: 41, b2: "Save to Workspace" }
                                    ]},
                                    { id: "engineering", title: "Engineering & Technology", icon: <Atom size={14} className="text-[#16a34a] dark:text-[#22c55e]"/>, color: "#16a34a", darkColor: "#22c55e", bgImageGlow: "from-[#053d1b] via-[#03240f] to-[#091527]", items: [
                                        { t: "Structural Optimization and Nanotechnology Applications", f: "Center for Support of Scientific Excellence", s: "PDF · 22.1 MB · AEJ Reprint", p: 93, b2: "Download PDF" },
                                        { t: "Algorithms for Machine Learning and Big Data Analytics", f: "Faculty of Computer Science & Data Reference", s: "PDF · 18.5 MB · IEEE Indexed", p: 55, b2: "Remote Proxy" }
                                    ]},
                                    { id: "humanities", title: "Humanities & Social Sciences", icon: <BookOpen size={14} className="text-[#ea580c] dark:text-[#f97316]"/>, color: "#ea580c", darkColor: "#f97316", bgImageGlow: "from-[#471d02] via-[#240e01] to-[#091527]", items: [
                                        { t: "Lexicology, Morphemic Structures, and Modern Arabic Linguistics", f: "Dept. of English Language & Linguistics, Faculty of Arts", s: "PDF · 6.4 MB · Peer-Reviewed", p: 29, b2: "Download PDF" },
                                        { t: "Egyptian Civil Service Law & Public Contracts Legislation Manual", f: "Faculty of Law Jurisprudence Library", s: "PDF · 4.1 MB · Law Repository", p: 17, b2: "Download PDF" }
                                    ]}
                                ].map((cat) => {
                                    const isSectionOpen = openSections[cat.id as keyof typeof openSections];
                                    return (
                                        <div key={cat.id} className="flex flex-col gap-5 dark:gap-4">
                                            <div className="flex items-center gap-3">
                                                <button 
                                                    onClick={() => setOpenSections({ ...openSections, [cat.id]: !isSectionOpen })}
                                                    className="p-1.5 dark:p-1 border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#091527] rounded-md dark:rounded text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:text-white dark:hover:border-slate-700 transition-colors shadow-sm dark:shadow-none"
                                                >
                                                    {cat.icon}
                                                </button>
                                                <h3 className="text-[#001A41] dark:text-white text-[13px] dark:text-xs font-bold uppercase tracking-wider">{cat.title}</h3>
                                                <div className="h-[1px] flex-1 bg-slate-200 dark:bg-slate-800/60"></div>
                                                <span className="text-slate-400 dark:text-slate-600 text-[11px] dark:text-[10px] font-mono font-bold dark:font-normal bg-slate-50 dark:bg-transparent px-2 py-0.5 rounded border border-slate-100 dark:border-none">2 resources</span>
                                            </div>

                                            {isSectionOpen && (
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 dark:gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
                                                    {cat.items.map((item, j) => (
                                                        <div key={j} className="group relative bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl dark:rounded-xl overflow-hidden hover:border-slate-300 dark:hover:border-slate-700/60 transition-all shadow-sm dark:shadow-xl hover:shadow-lg">
                                                            <div className={`hidden dark:block absolute inset-0 bg-gradient-to-b ${cat.bgImageGlow} opacity-60 group-hover:opacity-80 transition-opacity pointer-events-none`}></div>
                                                            <div className="absolute top-0 left-0 w-[4px] dark:w-[3px] h-full dark:hidden" style={{ backgroundColor: cat.color }}></div>
                                                            <div className="hidden dark:block absolute top-0 left-0 w-[3px] h-full" style={{ backgroundColor: cat.darkColor }}></div>
                                                            
                                                            <div className="p-6 dark:p-5 flex flex-col h-full justify-between relative z-10 pl-7 dark:pl-5">
                                                                <div>
                                                                    <h4 className="text-[#001A41] dark:text-white text-[14px] dark:text-[12.5px] font-bold mb-2.5 leading-snug group-hover:text-[#0B3C5D] dark:group-hover:text-[#06b6d4] transition-colors">{item.t}</h4>
                                                                    <p className="text-slate-500 dark:text-slate-400 text-[11px] dark:text-[10px] mb-1 dark:mb-0.5 font-medium dark:font-normal">{item.f}</p>
                                                                    <p className="text-[11px] dark:text-[#06b6d4] dark:text-[10px] mb-3 dark:mb-2 font-mono dark:font-mono" style={{ color: cat.color }}><span className="dark:hidden">{item.s}</span><span className="hidden dark:inline text-[#06b6d4]">{item.s}</span></p>
                                                                    
                                                                    <div className="w-full h-1.5 dark:h-1 bg-slate-100 dark:bg-slate-800 rounded-full mb-2 relative overflow-hidden">
                                                                        <div className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 dark:hidden" style={{ width: `${item.p}%`, backgroundColor: cat.color }}></div>
                                                                        <div className="hidden dark:block absolute top-0 left-0 h-full rounded-full transition-all duration-1000" style={{ width: `${item.p}%`, backgroundColor: cat.darkColor }}></div>
                                                                    </div>
                                                                    <p className="text-slate-400 dark:text-slate-500 text-[10px] dark:text-[9px] font-bold dark:font-normal mb-5 dark:mb-4">{item.p}% accessed this month</p>
                                                                </div>

                                                                <div className="flex gap-3 dark:gap-2 mt-auto">
                                                                    <button className="flex-1 bg-slate-50 dark:bg-[#040B16]/90 border border-slate-200 dark:border-slate-800/80 py-2.5 dark:py-2 rounded-xl dark:rounded-lg text-[#001A41] dark:text-slate-300 text-[11px] dark:text-[10px] font-bold dark:font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shadow-sm dark:shadow-none">Read Online</button>
                                                                    <button className="flex-1 bg-[#0B3C5D] dark:bg-white/5 border border-transparent dark:border-slate-800/80 py-2.5 dark:py-2 rounded-xl dark:rounded-lg text-white dark:text-slate-300 text-[11px] dark:text-[10px] font-bold dark:font-semibold hover:bg-[#D4AF37] hover:text-[#001A41] dark:hover:bg-white/10 dark:hover:text-slate-300 transition-all shadow-sm dark:shadow-none">{item.b2}</button>
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

                        <div className="w-full border-t border-slate-200 dark:border-slate-800/80 mt-16 dark:mt-12 pt-6 dark:pt-5 flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-2 text-slate-500 text-[10px] dark:text-[9px] uppercase font-bold tracking-widest">
                                <MapPin size={14} className="text-[#0891b2] dark:text-[#06b6d4] dark:w-3 dark:h-3" />
                                Central University Library, Shatby Campus
                            </div>
                            <div className="flex items-center gap-2 text-slate-500 text-[10px] dark:text-[9px] uppercase font-bold tracking-widest">
                                <Phone size={14} className="text-[#0891b2] dark:text-[#06b6d4] dark:w-3 dark:h-3" />
                                +20 3 5921878
                            </div>
                            <div className="flex items-center gap-2 text-slate-500 text-[10px] dark:text-[9px] uppercase font-bold tracking-widest">
                                <Mail size={14} className="text-[#0891b2] dark:text-[#06b6d4] dark:w-3 dark:h-3" />
                                Digital-Lib@alexu.edu.eg
                            </div>
                        </div>
                    </div>
                </main>
            ) : (
                <main className="flex-1 relative font-sans text-slate-800 dark:text-white p-6 md:p-10 lg:p-16 pt-36 md:pt-40 z-10 animate-in fade-in zoom-in-95 duration-300">
                    <div className="max-w-[1300px] mx-auto w-full mt-6">
                        <div className="flex flex-wrap items-center gap-3 text-sm mb-12 border-b border-slate-200 dark:border-none pb-6 dark:pb-0">
                            <button 
                                onClick={() => setActiveDivision(null)}
                                className="flex items-center gap-2 bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-700/50 px-4 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 hover:text-[#001A41] dark:hover:text-white font-bold dark:font-normal shadow-sm dark:shadow-none text-xs dark:text-sm"
                            >
                                <ArrowLeft size={14} className="dark:w-4 dark:h-4" /> Back to Overview
                            </button>
                            <div className="hidden sm:block h-5 w-[1px] bg-slate-300 dark:bg-slate-700"></div>
                            <div className="flex items-center gap-2 text-xs dark:text-sm">
                                <span className="text-slate-500 dark:text-slate-400 font-bold dark:font-normal">Research & Innovation Sector</span>
                                <ChevronRight size={14} className="text-slate-400 dark:text-slate-500" />
                                <span className="font-bold dark:font-medium dark:hidden" style={{ color: researchDivisions.find(d => d.id === activeDivision)?.colorHex }}>
                                    {researchDivisions.find(d => d.id === activeDivision)?.title.replace('\n', ' ')}
                                </span>
                                <span className="font-bold dark:font-medium hidden dark:inline" style={{ color: researchDivisions.find(d => d.id === activeDivision)?.darkColorHex }}>
                                    {researchDivisions.find(d => d.id === activeDivision)?.title.replace('\n', ' ')}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 mb-12">
                            <div className={`w-[80px] h-[80px] dark:w-[72px] dark:h-[72px] rounded-[20px] dark:rounded-[16px] border border-slate-200 dark:border-[1.5px] bg-white shadow-sm flex items-center justify-center shrink-0 dark:bg-opacity-10 dark:border-opacity-50`} style={{ borderColor: document.documentElement.classList.contains('dark') ? researchDivisions.find(d => d.id === activeDivision)?.darkColorHex : '', backgroundColor: document.documentElement.classList.contains('dark') ? `${researchDivisions.find(d => d.id === activeDivision)?.darkColorHex}1A` : '' }}>
                                {researchDivisions.find(d => d.id === activeDivision)?.icon}
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-3xl md:text-4xl dark:md:text-3xl font-serif dark:font-sans font-bold tracking-tight dark:tracking-wide text-[#001A41] dark:text-white leading-tight mb-2">
                                    {researchDivisions.find(d => d.id === activeDivision)?.title.replace('\n', ' ')}
                                </h1>
                                <h2 className="text-[14px] dark:text-[15px] font-bold dark:font-medium tracking-wide uppercase dark:normal-case dark:hidden" style={{ color: researchDivisions.find(d => d.id === activeDivision)?.colorHex }}>
                                    {researchDivisions.find(d => d.id === activeDivision)?.subtitle}
                                </h2>
                                <h2 className="text-[14px] dark:text-[15px] font-bold dark:font-medium tracking-wide uppercase dark:normal-case hidden dark:block" style={{ color: researchDivisions.find(d => d.id === activeDivision)?.darkColorHex }}>
                                    {researchDivisions.find(d => d.id === activeDivision)?.subtitle}
                                </h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 items-start mt-16 dark:mt-0">
                            <div className="lg:col-span-2 space-y-6">
                                <h3 className="text-xl font-bold text-[#001A41] dark:text-[#eab308] mb-6 dark:underline dark:underline-offset-[12px] dark:decoration-slate-700/70 inline-block">Sector Operations & Analytics</h3>
                                <div className="bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-700/50 rounded-2xl dark:rounded-xl p-8 shadow-sm dark:shadow-none hover:shadow-md dark:hover:border-slate-600 transition-all">
                                    <h4 className="text-base font-bold mb-4 dark:hidden" style={{ color: researchDivisions.find(d => d.id === activeDivision)?.colorHex }}>Departmental Overview</h4>
                                    <h4 className="text-base font-bold mb-4 hidden dark:block" style={{ color: researchDivisions.find(d => d.id === activeDivision)?.darkColorHex }}>Departmental Overview</h4>
                                    <p className="text-slate-600 dark:text-slate-300 text-[15px] leading-relaxed">
                                        This sector coordinates advanced research methodologies, tracks citation matrices, and structures the digital integration of Alexandria University's foundational academic output. Select the interactive preview terminal or download the standard operational PDF to view structural KPIs and compliance documentation.
                                    </p>
                                </div>
                                {renderInteractivePreview(researchDivisions.find(d => d.id === activeDivision)?.colorHex || "#0B3C5D", researchDivisions.find(d => d.id === activeDivision)?.darkColorHex || "#38bdf8")} 
                            </div>
                            <div className="lg:col-span-1">
                                {renderResourcesActions(researchDivisions.find(d => d.id === activeDivision)?.colorHex || "#0B3C5D", researchDivisions.find(d => d.id === activeDivision)?.darkColorHex || "#38bdf8")}
                            </div>
                        </div>
                    </div>
                </main>
            )}

            <footer className="w-full flex flex-col md:flex-row items-center justify-between px-8 py-6 dark:py-5 z-10 border-t border-slate-200 dark:border-slate-800/50 text-slate-500 dark:text-slate-600 text-[11px] dark:text-[10px] font-bold dark:font-medium tracking-wide bg-white dark:bg-[#040B16] mt-auto">
                <span>© 2026 Alexandria University - All Rights Reserved</span>
                <span className="mt-2 md:mt-0">Research Sector Portal v3.2 - Powered by AU Knowledge Infrastructure</span>
            </footer>
        </div>
    );
}