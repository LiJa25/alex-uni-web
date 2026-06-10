"use client";

import { useState, useEffect } from "react";
import AuthModal from "./AuthModal";
import ThemeToggle from "./ThemeToggle";
import { useLanguage } from "@/components/LanguageProvider";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

export default function Hero({ showFullHero = true }: { showFullHero?: boolean }) {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    
    // We keep useLanguage just for the RTL layout flipping
    const { language, toggleLanguage } = useLanguage();
    const isRTL = language === "ar";

    // --- SEARCH STATE ---
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const backgroundImages = [
        "/imgs/alexUni.png",
        "/imgs/alexUni2.webp",
        "/imgs/alexUni3.jpg"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);
        return () => clearInterval(interval);
    }, [backgroundImages.length]);

    useEffect(() => {
        if (isMobileMenuOpen || isAuthModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMobileMenuOpen, isAuthModalOpen]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // --- SEARCH HANDLER ---
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
        }
    };

    return (
        <section dir={isRTL ? "rtl" : "ltr"} className={`relative w-full ${showFullHero ? "h-screen min-h-[800px]" : ""} flex flex-col items-center justify-center overflow-hidden`}>

            {showFullHero && backgroundImages.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100 z-0" : "opacity-0 z-0"}`}
                    style={{
                        backgroundImage: `url(${src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
            ))}

            {showFullHero && <div className="absolute inset-0 bg-smart-blue-800/50 dark:bg-gray-950/70 z-10 transition-colors duration-500"></div>}

            <nav className={`fixed top-0 w-full z-50 px-4 md:px-8 flex justify-between items-center transition-all duration-300 ease-in-out ${isScrolled
                    ? "bg-blue-900/95 dark:bg-gray-950/95 backdrop-blur-md shadow-lg py-2 md:py-3"
                    : "bg-gradient-to-b from-smart-blue-950/80 dark:from-gray-950/90 to-transparent py-4 md:py-6"
                }`}>

                <div className="flex items-center gap-2 md:gap-4 cursor-pointer z-50">
                    <div className="h-10 md:h-12 flex items-center justify-center transition-all duration-300">
                        <img
                            src="/logos/logo2.png"
                            alt="Alexandria University Logo"
                            className="h-full w-auto object-contain"
                        />
                    </div>
                    <div className="text-harvest-gold-50 font-semibold leading-tight tracking-widest text-xs md:text-sm">
                        ALEXANDRIA<br />UNIVERSITY
                    </div>
                </div>

                <button
                    className="md:hidden z-50 text-harvest-gold-50 hover:text-harvest-gold-300 transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    )}
                </button>

                <div className="hidden md:flex items-center gap-8 text-harvest-gold-50 text-lg font-medium">
                    <Link href="/" className="hover:text-harvest-gold-300 transition-colors">Home</Link>
                    <Link href="/about" className="hover:text-harvest-gold-300 transition-colors">About</Link>
                    <Link href="/students" className="hover:text-harvest-gold-300 transition-colors">Students</Link>
                    <Link href="/academics" className="hover:text-harvest-gold-300 transition-colors">Academics</Link>
                    <Link href="/collaboration" className="hover:text-harvest-gold-300 transition-colors">Collaboration</Link>
                    <Link href="/alumni" className="hover:text-harvest-gold-300 transition-colors">Alumni</Link>
                    <Link href="/administration" className="hover:text-harvest-gold-300 transition-colors">Administration</Link>
                    <Link href="/researches" className="hover:text-harvest-gold-300 transition-colors">Researches</Link>
                </div>

                <div className="hidden md:flex items-center gap-4 z-50">
                    <button onClick={toggleLanguage} className="flex items-center gap-1 text-harvest-gold-50 hover:text-harvest-gold-300 transition-colors text-sm font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" x2="22" y1="12" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                        EN | AR
                    </button>
                    <button
                        onClick={() => setIsAuthModalOpen(true)}
                        className="bg-[#D4AF37] hover:bg-[#A67F1F] hover:text-white text-[#0B3C5D] px-6 py-2 rounded-full font-semibold transition-transform hover:scale-105 shadow-lg"
                    >
                        Sign In
                    </button>
                    <ThemeToggle />
                </div>
            </nav>

            {/* Mobile Menu logic */}
            <div className={`fixed inset-0 bg-blue-900/95 dark:bg-gray-950/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
                <div className="flex flex-col items-center gap-6 text-harvest-gold-50 text-xl font-medium w-full px-6 overflow-y-auto max-h-screen py-10 pt-24">
                    <Link href="/" className="hover:text-harvest-gold-300 transition-colors border-b border-smart-blue-800 dark:border-gray-800 pb-2 w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link href="/about" className="hover:text-harvest-gold-300 transition-colors border-b border-smart-blue-800 dark:border-gray-800 pb-2 w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                    <Link href="/students" className="hover:text-harvest-gold-300 transition-colors border-b border-smart-blue-800 dark:border-gray-800 pb-2 w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>Students</Link>
                    <Link href="/academics" className="hover:text-harvest-gold-300 transition-colors border-b border-smart-blue-800 dark:border-gray-800 pb-2 w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>Academics</Link>
                    <Link href="/collaboration" className="hover:text-harvest-gold-300 transition-colors border-b border-smart-blue-800 dark:border-gray-800 pb-2 w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>Collaboration</Link>
                    <Link href="/alumni" className="hover:text-harvest-gold-300 transition-colors border-b border-smart-blue-800 dark:border-gray-800 pb-2 w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>Alumni</Link>
                    <Link href="/administration" className="hover:text-harvest-gold-300 transition-colors border-b border-smart-blue-800 dark:border-gray-800 pb-2 w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>Administration</Link>
                    <Link href="/researches" className="hover:text-harvest-gold-300 transition-colors border-b border-smart-blue-800 dark:border-gray-800 pb-2 w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>Researches</Link>

                    <button
                        className="mt-4 bg-[#D4AF37] text-[#0B3C5D] px-8 py-3 rounded-full font-bold w-full max-w-xs shadow-lg"
                        onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsAuthModalOpen(true);
                        }}
                    >
                        Apply Now
                    </button>
                    <div className="mt-6">
                        <ThemeToggle />
                    </div>
                    <button onClick={toggleLanguage} className="mt-2 flex items-center justify-center gap-2 text-harvest-gold-300 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" x2="22" y1="12" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                        Language
                    </button>
                </div>
            </div>

            {/* ---content SEARCH BAR --- */}
            {showFullHero && (
                <div className="relative z-20 flex flex-col items-center text-center px-4 mt-8 md:mt-16 w-full max-w-6xl pt-16 md:pt-0">
                    <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif text-white mb-4 md:mb-6 drop-shadow-xl tracking-wide leading-tight">
                        Alexandria University
                    </h1>
                    <p className="text-lg md:text-2xl text-[#D4AF37] font-medium tracking-wide drop-shadow-md px-2">
                        Find your future in Alexandria University
                    </p>

                    {/* THE SEARCH BAR */}
                    <form
                        onSubmit={handleSearch}
                        className="w-full max-w-3xl mt-10 md:mt-12 relative group transition-all duration-300 hover:scale-[1.02]"
                    >
                        <div className="relative flex items-center w-full shadow-2xl rounded-full">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search for faculties, programs, news, or professors..."
                                className="w-full py-4 md:py-5 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-2 border-transparent focus:border-[#D4AF37] text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-base md:text-lg outline-none transition-all duration-300"
                                style={{
                                    paddingRight: isRTL ? '1.5rem' : '4.5rem',
                                    paddingLeft: isRTL ? '4.5rem' : '1.5rem'
                                }}
                            />
                            <button
                                type="submit"
                                className={`absolute ${isRTL ? 'left-2' : 'right-2'} p-3 md:p-4 bg-[#0B3C5D] hover:bg-[#D4AF37] text-white rounded-full transition-colors duration-300 flex items-center justify-center`}
                                aria-label="Search"
                            >
                                <Search size={24} />
                            </button>
                        </div>

                        {/* Quick links below search */}
                        <div className="mt-5 flex flex-wrap justify-center gap-3 text-sm md:text-base text-white/90 font-medium">
                            <span className="opacity-70">Popular:</span>
                            <button type="button" onClick={() => setSearchQuery('Medicine')} className="hover:text-[#D4AF37] hover:underline transition-colors">Medicine</button>
                            <span className="opacity-50">•</span>
                            <button type="button" onClick={() => setSearchQuery('Engineering')} className="hover:text-[#D4AF37] hover:underline transition-colors">Engineering</button>
                            <span className="opacity-50">•</span>
                            <button type="button" onClick={() => setSearchQuery('Admissions')} className="hover:text-[#D4AF37] hover:underline transition-colors">Admissions</button>
                        </div>
                    </form>
                </div>
            )}

            {showFullHero && (
                <div className="absolute bottom-16 md:bottom-30 z-20 flex flex-col items-center animate-bounce opacity-80">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-8 md:h-8">
                        <rect x="5" y="2" width="14" height="20" rx="7" />
                        <path d="M12 6v4" />
                    </svg>
                </div>
            )}

            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
            />
        </section>
    );
}