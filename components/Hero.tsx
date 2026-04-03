"use client";

import { useState, useEffect } from "react";

export default function Hero() {
    // 1. Set up the dynamic image slideshow
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // 2. Set up the state for opening/closing the mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // 3. Set up state to track if the user has scrolled down (for the sticky nav)
    const [isScrolled, setIsScrolled] = useState(false);

    const backgroundImages = [
        "/imgs/alexUni.png",
        "/imgs/alexUni2.webp",
        "/imgs/alexUni3.jpg"
    ];
    
    // Image Slideshow Interval
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Changes image every 5 seconds
        return () => clearInterval(interval);
    }, [backgroundImages.length]);

    // Prevent scrolling when the mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMobileMenuOpen]);

    // Listen to the window scroll event to trigger the sticky navbar
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

    return (
        <section className="relative w-full h-screen min-h-[800px] flex flex-col items-center justify-center overflow-hidden">

            {/* 2. Background Slideshow Layer */}
            {backgroundImages.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100 z-0" : "opacity-0 z-0"
                        }`}
                    style={{
                        backgroundImage: `url(${src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
            ))}

            {/* 3. The Transparent Blue Overlay  */}
            <div className="absolute inset-0 bg-smart-blue-800/50 z-10"></div>

            {/* 4. Top Navigation Bar  */}
            <nav className={`fixed top-0 w-full z-50 px-4 md:px-8 flex justify-between items-center transition-all duration-300 ease-in-out ${
                isScrolled 
                ? "bg-blue-900/95 backdrop-blur-md shadow-lg py-2 md:py-3" 
                : "bg-gradient-to-b from-smart-blue-950/80 to-transparent py-4 md:py-6"
            }`}>

                {/* Logo Area */}
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

                {/* Hamburger Menu Button (Mobile Only) */}
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

                {/* Center Links (Hidden on mobile, flex on desktop) */}
                <div className="hidden md:flex items-center gap-8 text-harvest-gold-50 text-lg font-medium">
                    <a href="#" className="hover:text-harvest-gold-300 transition-colors">Home</a>
                    <a href="#" className="hover:text-harvest-gold-300 transition-colors">About</a>
                    <a href="#" className="hover:text-harvest-gold-300 transition-colors">Students</a>
                    <a href="#" className="hover:text-harvest-gold-300 transition-colors">Academics</a>
                    <a href="#" className="hover:text-harvest-gold-300 transition-colors">International Collaboration</a>
                    <a href="#" className="hover:text-harvest-gold-300 transition-colors">Alumni</a>
                </div>

                {/* Right Side: Language & Apply Button (Hidden on mobile) */}
                <div className="hidden md:flex items-center gap-6 z-50">
                    <button className="flex items-center gap-2 text-harvest-gold-50 hover:text-harvest-gold-300 transition-colors text-sm font-medium">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" x2="22" y1="12" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                        EN | AR
                    </button>
                    <button className="bg-harvest-gold-500 hover:bg-yellow-500 hover:text-white text-smart-blue-950 px-6 py-2 rounded-full font-semibold transition-transform hover:scale-105 shadow-lg">
                        Apply Now
                    </button>
                </div>
            </nav>

           {/* Mobile Full-Screen Menu Overlay */}
            <div className={`fixed inset-0 bg-blue-900/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
                <div className="flex flex-col items-center gap-6 text-harvest-gold-50 text-xl font-medium w-full px-6 overflow-y-auto max-h-screen py-10 pt-24">
                    <a href="#" className="hover:text-harvest-gold-300 transition-colors border-b border-smart-blue-800 pb-2 w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                    <a href="#" className="hover:text-harvest-gold-300 transition-colors border-b border-smart-blue-800 pb-2 w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                    <a href="#" className="hover:text-harvest-gold-300 transition-colors border-b border-smart-blue-800 pb-2 w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>Students</a>
                    <a href="#" className="hover:text-harvest-gold-300 transition-colors border-b border-smart-blue-800 pb-2 w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>Academics</a>
                    <a href="#" className="hover:text-harvest-gold-300 transition-colors border-b border-smart-blue-800 pb-2 w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>International Collaboration</a>
                    <a href="#" className="hover:text-harvest-gold-300 transition-colors border-b border-smart-blue-800 pb-2 w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>Alumni</a>
                    
                    <button className="mt-4 bg-harvest-gold-500 text-smart-blue-950 px-8 py-3 rounded-full font-bold w-full max-w-xs shadow-lg" onClick={() => setIsMobileMenuOpen(false)}>
                        Apply Now
                    </button>
                    <button className="mt-2 flex items-center justify-center gap-2 text-harvest-gold-300 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" x2="22" y1="12" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                        EN | AR
                    </button>
                </div>
            </div>

            {/* 5. Main Hero Content (Responsive Text Sizes) */}
            <div className="relative z-20 flex flex-col items-center text-center px-4 mt-8 md:mt-16 w-full max-w-6xl pt-16 md:pt-0">
                <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif text-harvest-gold-50 mb-4 md:mb-6 drop-shadow-xl tracking-wide leading-tight">
                    Alexandria university<br />جامعة الاسكندرية
                </h1>
                <p className="text-lg md:text-2xl text-harvest-gold-400 font-medium tracking-wide drop-shadow-md px-2">
                    Find your future in Alexandria University
                </p>
            </div>

            {/* 6. Animated Scroll Mouse Indicator */}
            <div className="absolute bottom-16 md:bottom-30 z-20 flex flex-col items-center animate-bounce opacity-80">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e6c07f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-8 md:h-8">
                    <rect x="5" y="2" width="14" height="20" rx="7" />
                    <path d="M12 6v4" />
                </svg>
            </div>
        </section>
    );
}