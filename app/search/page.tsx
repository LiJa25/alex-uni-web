// app/search/page.tsx
"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Hero from '@/components/Hero';
import Link from 'next/link';
import { Search, ChevronRight, Building2, User, FileText, GraduationCap } from 'lucide-react';

// --- MOCK DATABASE ---
// Later, you will replace this with an actual API call or database query
const mockDatabase = [
    { id: 1, title: "Faculty of Medicine", type: "Faculty", description: "Top-tier medical education and research hospital integration.", link: "/academics" },
    { id: 2, title: "Faculty of Engineering", type: "Faculty", description: "Pioneering engineering programs including Civil, Mechanical, and Computer Engineering.", link: "/academics" },
    { id: 3, title: "Admissions Guidelines 2026", type: "Info", description: "Complete guide on how to apply, tuitions, and requirements for the upcoming academic year.", link: "/students" },
    { id: 4, title: "Dr. Ahmed Hassan", type: "Professor", description: "Head of the Artificial Intelligence and Software research lab.", link: "/researches" },
    { id: 5, title: "Computer Science Degree", type: "Program", description: "Bachelor of Science in CS, focusing on software engineering and AI.", link: "/academics" },
    { id: 6, title: "Alexandria University Central Library", type: "Facility", description: "Access millions of academic journals and physical books.", link: "/about" },
    { id: 7, title: "New Campus Expansion Project", type: "News", description: "University announces a massive new campus expansion to support international students.", link: "/about" },
    { id: 8, title: "International Student Affairs", type: "Administration", description: "Support sector for exchange students and global collaborations.", link: "/administration" },
];

// Helper function to pick the right icon based on the result type
const getIconForType = (type: string) => {
    switch (type) {
        case 'Faculty': return <Building2 size={20} />;
        case 'Professor': return <User size={20} />;
        case 'Program': return <GraduationCap size={20} />;
        case 'Info':
        case 'News': return <FileText size={20} />;
        default: return <Search size={20} />;
    }
};

// The component that actually reads the URL and filters the data
function SearchResults() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q')?.toLowerCase() || '';

    // Search logic: checks if the query matches the title, description, or type
    const results = mockDatabase.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query)
    );

    return (
        <div className="max-w-4xl mx-auto w-full">
            <div className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-6">
                <h1 className="text-3xl font-serif text-[#0B3C5D] dark:text-white mb-2">
                    Search Results
                </h1>
                <p className="text-slate-600 dark:text-slate-400">
                    Showing {results.length} result{results.length !== 1 ? 's' : ''} for <span className="font-semibold text-[#D4AF37]">"{query}"</span>
                </p>
            </div>

            {results.length > 0 ? (
                <div className="flex flex-col gap-4">
                    {results.map((result) => (
                        <Link href={result.link} key={result.id} className="group block bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:shadow-lg hover:border-[#D4AF37]/50 transition-all duration-300">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-grow">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#0B3C5D]/10 text-[#0B3C5D] dark:bg-[#D4AF37]/10 dark:text-[#D4AF37]">
                                            {getIconForType(result.type)}
                                        </span>
                                        <span className="text-sm font-semibold tracking-wide text-slate-500 uppercase">
                                            {result.type}
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold text-[#0B3C5D] dark:text-white group-hover:text-[#1474B4] transition-colors mb-2">
                                        {result.title}
                                    </h2>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {result.description}
                                    </p>
                                </div>
                                <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors flex-shrink-0">
                                    <ChevronRight size={20} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 mb-6">
                        <Search size={40} />
                    </div>
                    <h2 className="text-2xl font-bold text-[#0B3C5D] dark:text-white mb-2">No results found</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                        We couldn't find anything matching "{query}". Try double-checking your spelling or using different keywords.
                    </p>
                    <Link href="/" className="inline-block mt-8 text-[#1474B4] hover:text-[#D4AF37] font-semibold transition-colors">
                        &larr; Back to Homepage
                    </Link>
                </div>
            )}
        </div>
    );
}

// The main page structure
export default function SearchPage() {
    return (
        <>
            {/* Keeping showFullHero false just to use the Navbar safely */}
            <Hero showFullHero={false} />

            {/* Content padded down to clear the fixed navbar */}
            <div className="pt-32 pb-20 px-4 w-full">
                {/* Suspense is required by Next.js when using useSearchParams */}
                <Suspense fallback={
                    <div className="max-w-4xl mx-auto w-full pt-20 text-center text-slate-500 animate-pulse">
                        Loading search results...
                    </div>
                }>
                    <SearchResults />
                </Suspense>
            </div>
        </>
    );
}