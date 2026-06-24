"use client";

import { useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import Link from "next/link";

export default function LatestNews() {
    const { strings, language } = useLanguage();
    const isRTL = language === "ar";
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showAll, setShowAll] = useState(false);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            let scrollAmount = direction === "left" ? -400 : 400;
            if (isRTL) {
                scrollAmount = direction === "left" ? 400 : -400;
            }
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    const newsArticles = [
        {
            id: 1,
            title: strings.latestNews.articles[0]?.title || "In a Yearly Tradition... Alexandria University Brings Together Its International Students for a Ramadan Iftar",
            day: strings.latestNews.articles[0]?.day || "10",
            month: strings.latestNews.articles[0]?.month || "MAR",
            image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop", 
        },
        {
            id: 2,
            title: strings.latestNews.articles[1]?.title || "On the Occasion of International Women's Day.. Women of Alexandria University: Inspiring Models of Giving and Leadership",
            day: strings.latestNews.articles[1]?.day || "10",
            month: strings.latestNews.articles[1]?.month || "MAR",
            image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
        },
        {
            id: 3,
            title: strings.latestNews.articles[2]?.title || "Alexandria University Hosts Seminar to Promote Volunteering and Child Protection in Cooperation with the National...",
            day: strings.latestNews.articles[2]?.day || "09",
            month: strings.latestNews.articles[2]?.month || "MAR",
            image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop",
        },
        {
            id: 4,
            title: strings.latestNews.articles[3]?.title || "Faculty of ICT Announces New Partnership with Top Tech Companies for Summer Internships",
            day: strings.latestNews.articles[3]?.day || "05",
            month: strings.latestNews.articles[3]?.month || "MAR",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
        },
        {
            id: 5,
            title: isRTL ? "اجتماع الخريجين السنوي: الاحتفال بمرور 80 عاماً من التميز الأكاديمي والأثر العالمي" : "Annual Alumni Meetup: Celebrating 80 Years of Academic Excellence and Global Impact",
            day: "01",
            month: isRTL ? "مارس" : "MAR",
            image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
        }
    ];

    return (
        <section dir={isRTL ? "rtl" : "ltr"} className="w-full bg-white dark:bg-gray-950 py-20 px-6 overflow-hidden transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-harvest-gold-500 font-bold tracking-widest text-xs uppercase mb-3 block">
                            {strings.latestNews.preTitle}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-kameron font-bold text-blue-900 dark:text-white transition-colors duration-300">
                            {strings.latestNews.heading}
                        </h2>
                    </div>
                    
                    <div className="flex items-center gap-6 mb-2">
                        <button 
                            onClick={() => setShowAll(!showAll)}
                            className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors flex items-center gap-2"
                        >
                            {showAll ? strings.latestNews.showLess : strings.latestNews.viewAll}
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className={`transform transition-transform duration-300 ${showAll ? "-rotate-90" : ""}`}
                            >
                                <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </button>

                        {!showAll && (
                            <div className="hidden md:flex gap-3">
                                <button 
                                    onClick={() => scroll("left")}
                                    className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-blue-900 dark:text-gray-300 hover:bg-blue-900 dark:hover:bg-gray-800 hover:text-white dark:hover:text-white transition-all shadow-sm"
                                    type="button"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                                </button>
                                <button 
                                    onClick={() => scroll("right")}
                                    className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-blue-900 dark:text-gray-300 hover:bg-blue-900 dark:hover:bg-gray-800 hover:text-white dark:hover:text-white transition-all shadow-sm"
                                    type="button"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div 
                    ref={scrollContainerRef}
                    className={`transition-all duration-500 ease-in-out ${
                        showAll 
                        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
                        : "flex overflow-x-auto snap-x snap-mandatory gap-8 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                    }`}
                >
                    {newsArticles.map((article) => (
                        <Link 
                            key={article.id}
                            href={`/administration?page=secretary_general&newsId=${article.id}`}
                            className={`bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-gray-100 dark:border-gray-800 ${
                                showAll 
                                ? "w-full" 
                                : "min-w-[100%] md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.33rem)] snap-start"
                            }`}
                        >
                            <div className="relative h-60 w-full overflow-hidden">
                                <img 
                                    src={article.image} 
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className={`absolute top-0 bg-harvest-gold-500 text-blue-900 flex flex-col items-center justify-center w-14 h-16 rounded-b-lg shadow-md z-10 ${isRTL ? 'right-6' : 'left-6'}`}>
                                    <span className="text-xl font-bold leading-none mb-0.5">{article.day}</span>
                                    <span className="text-[10px] font-bold uppercase tracking-wider">{article.month}</span>
                                </div>
                            </div>
                            
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="font-kameron text-[22px] font-bold text-blue-900 dark:text-gray-100 leading-snug mb-8 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300">
                                    {article.title}
                                </h3>
                                
                                <div className="mt-auto flex items-center gap-2 text-harvest-gold-500 font-bold text-xs uppercase tracking-widest transition-colors">
                                    {strings.latestNews.readMore}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transform transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}