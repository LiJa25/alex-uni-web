"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense, useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Link from 'next/link';
import { Search, ChevronRight, Building2, User, FileText,  GraduationCap, Globe, Library, FlaskConical, Stethoscope, Briefcase, CalendarDays, Laptop } from 'lucide-react';

const searchDatabase = [
    { id: 1, title: "Faculty of Medicine", type: "Faculty", description: "Top-tier medical education, hospital training, and advanced clinical research labs.", link: "/academics?faculty=medicine", tags: ["health", "doctor", "surgery", "hospital", "mbbch"] },
    { id: 2, title: "Faculty of Engineering", type: "Faculty", description: "Pioneering engineering programs including Civil, Mechanical, and Mechatronics.", link: "/academics?faculty=engineering", tags: ["tech", "civil", "architecture", "mechanics"] },
    { id: 3, title: "Faculty of Arts", type: "Faculty", description: "Advanced linguistic studies, historical research archives, and philosophy.", link: "/academics/arts", tags: ["humanities", "languages", "literature", "history"] },
    { id: 4, title: "Faculty of Science", type: "Faculty", description: "Discovery, Research & Innovation in physics, mathematics, and molecular biology.", link: "/academics?faculty=science", tags: ["math", "physics", "biology", "chemistry"] },
    { id: 5, title: "Faculty of Dentistry", type: "Faculty", description: "Innovative oral care, surgery, phantom labs, and biomaterials research.", link: "/academics?faculty=dentistry", tags: ["health", "tooth", "oral", "orthodontics"] },
    { id: 6, title: "University President", type: "Administration", description: "Prof. Dr. Ahmed Adel Abdel Hakim - Leading the future of Alexandria University.", link: "/administration?page=president", tags: ["leadership", "chancellor", "executive", "head"] },
    { id: 7, title: "Secretary General Sector", type: "Administration", description: "Office of the Secretary General, Financial Affairs, and Organizational Structure.", link: "/administration?page=secretary_general", tags: ["finance", "admin", "hr", "purchasing"] },
    { id: 8, title: "University Council Meetings", type: "Administration", description: "Live broadcast and archive of Graduate Studies & Research Council sessions.", link: "/administration?page=council_meetings", tags: ["video", "live", "decisions", "board"] },
    { id: 9, title: "Student Accommodation Gateway", type: "Student Services", description: "Automated Housing Management Portal. Apply for on-campus residence and dorms.", link: "/students", tags: ["dorms", "housing", "bed", "living", "campus"] },
    { id: 10, title: "Student Activities Central", type: "Student Services", description: "Join dynamic sports teams, vibrant arts collectives, and volunteer programs.", link: "/students", tags: ["clubs", "sports", "football", "events"] },
    { id: 11, title: "Live Meeting Hub", type: "E-Learning", description: "Access live lectures, virtual study groups, and real-time digital classrooms via SSO.", link: "/students", tags: ["online", "classes", "video", "chat", "zoom"] },
    { id: 12, title: "Digital Library (EKB API)", type: "Research", description: "Egyptian Knowledge Bank gateway. Access Springer, Wiley, and Nature journals.", link: "/researches", tags: ["books", "journals", "publications", "reading"] },
    { id: 13, title: "AU Dissertations Repository", type: "Research", description: "42,150+ local Master & Ph.D. theses indexed and available for academic review.", link: "/researches", tags: ["thesis", "phd", "masters", "archive"] },
    { id: 14, title: "Scientific Journals of AU", type: "Research", description: "Alexandria Engineering Journal & Academic Reprints.", link: "/researches", tags: ["publishing", "articles", "peer review"] },
    { id: 15, title: "International Partnerships", type: "Collaboration", description: "Erasmus+ KA171 agreements, MoUs, and joint-degree pipelines.", link: "/collaboration", tags: ["global", "erasmus", "abroad", "europe"] },
    { id: 16, title: "Student Exchange Programs", type: "Collaboration", description: "Track study-abroad GPA, open exchange vacancies, and submit language certs.", link: "/collaboration", tags: ["travel", "semester abroad", "international"] },
    { id: 17, title: "Undergraduate Registration", type: "Admissions", description: "Apply and register your interest for Bachelor degrees at Alexandria University.", link: "/registration", tags: ["apply", "enroll", "join", "application", "freshman"] },
    { id: 18, title: "International Student Registration", type: "Admissions", description: "Dedicated admission pathways for international and expatriate students.", link: "/registration", tags: ["foreign", "apply", "visa", "global"] },
    { id: 19, title: "Postgraduate Registration", type: "Admissions", description: "Enrollment for Master's and Doctoral (Ph.D.) research programs.", link: "/registration", tags: ["masters", "doctorate", "apply", "advanced"] },
    { id: 20, title: "Faculty of Pharmacy", type: "Faculty", description: "Advancing clinical therapeutics, pharmacology, and drug formulation.", link: "/academics?faculty=pharmacy", tags: ["drugs", "health", "medicine", "clinical"] },
    { id: 21, title: "Faculty of Business", type: "Faculty", description: "Shaping global markets with fintech, analytics, and strategic management.", link: "/academics?faculty=business", tags: ["commerce", "accounting", "finance", "management"] },
    { id: 22, title: "Community Service Sector", type: "Administration", description: "Environmental development, Egypt Vision 2030 tracker, and literacy programs.", link: "/administration?page=community_service", tags: ["environment", "society", "help", "vision 2030"] },
    { id: 23, title: "Scientific Laureates & Awards", type: "Awards", description: "Celebrating AU's innovators, patent holders, and international award recipients.", link: "/students", tags: ["prize", "innovation", "patent", "winner"] },
    { id: 24, title: "Human Resources Electronic Forms", type: "Administration", description: "Download official faculty and employee forms (leave, assignment, etc.).", link: "/administration?page=secretary_general", tags: ["hr", "forms", "paperwork", "vacation"] },
    { id: 25, title: "High Institute of Public Health", type: "Faculty", description: "Epidemiology, community medicine, and global health initiatives.", link: "/academics?faculty=public-health", tags: ["health", "virus", "community", "institute"] },
    { id: 26, title: "Computing & Data Science", type: "Faculty", description: "Advanced machine learning labs, cybersecurity frameworks, and software.", link: "/academics?faculty=computing", tags: ["ai", "programming", "software", "tech"] },
    { id: 27, title: "Faculty of Law", type: "Faculty", description: "Comprehensive legal education, moot court halls, and human rights.", link: "/academics?faculty=law", tags: ["justice", "court", "legal", "attorney"] },
    { id: 28, title: "Faculty of Fine Arts", type: "Faculty", description: "Creativity, architectural modeling, design studios, and expression.", link: "/academics?faculty=fine-arts", tags: ["painting", "drawing", "architecture", "design"] },
    { id: 29, title: "Prof. Dr. Hesham Saeed", type: "Professor", description: "Vice President for Graduate Studies and Research.", link: "/administration?page=head_admin", tags: ["leadership", "vp", "research"] },
    { id: 30, title: "Prof. Dr. Affaf Al-Oufy", type: "Professor", description: "Vice President for Community Service and Environmental Development Affairs.", link: "/administration?page=head_admin", tags: ["leadership", "vp", "community"] }
];

const getIconForType = (type: string) => {
    switch (type) {
        case 'Faculty': return <Building2 size={18} />;
        case 'Professor': return <User size={18} />;
        case 'Admissions': return <GraduationCap size={18} />;
        case 'Research': return <FlaskConical size={18} />;
        case 'Administration': return <Briefcase size={18} />;
        case 'Student Services': return <Library size={18} />;
        case 'E-Learning': return <Laptop size={18} />;
        case 'Collaboration': return <Globe size={18} />;
        case 'Awards': return <Trophy size={18} />;
        default: return <FileText size={18} />;
    }
};

function SearchResults() {
    const searchParams = useSearchParams();
    const [query, setQuery] = useState('');
    const [isSearching, setIsSearching] = useState(true);

    useEffect(() => {
        const q = searchParams.get('q');
        if (q) {
            setQuery(q.toLowerCase());
        }
        setIsSearching(false);
    }, [searchParams]);

    const results = query
        ? searchDatabase.filter(item =>
            item.title.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.type.toLowerCase().includes(query) ||
            item.tags.some(tag => tag.toLowerCase().includes(query))
        )
        : [];

    if (isSearching) {
        return (
            <div className="max-w-4xl mx-auto w-full text-center py-20 animate-pulse">
                <div className="w-12 h-12 rounded-full border-4 border-slate-200 border-t-[#D4AF37] animate-spin mx-auto mb-4"></div>
                <p className="text-slate-500 dark:text-slate-400 font-medium">Scanning Alexandria University databases...</p>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto w-full animate-in fade-in duration-500">
            <div className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-6">
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#001A41] dark:text-white mb-2 tracking-tight">
                    Search Gateway
                </h1>
                {query ? (
                    <p className="text-slate-600 dark:text-slate-400 font-medium">
                        Showing <span className="font-bold text-[#001A41] dark:text-white">{results.length}</span> result{results.length !== 1 ? 's' : ''} for <span className="font-bold text-[#0B3C5D] dark:text-[#D4AF37]">"{query}"</span>
                    </p>
                ) : (
                    <p className="text-slate-600 dark:text-slate-400 font-medium">
                        Please enter a search term in the navigation bar to begin exploring the university.
                    </p>
                )}
            </div>

            {query && results.length > 0 ? (
                <div className="flex flex-col gap-4">
                    {results.map((result, idx) => (
                        <Link href={result.link} key={result.id} className="group block bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:shadow-lg dark:hover:shadow-2xl hover:border-[#0B3C5D]/30 dark:hover:border-[#D4AF37]/50 transition-all duration-300 transform hover:-translate-y-0.5">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-grow">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 text-[#0B3C5D] dark:text-[#D4AF37] group-hover:bg-[#0B3C5D] group-hover:text-white dark:group-hover:bg-[#D4AF37] dark:group-hover:text-[#001A41] transition-colors">
                                            {getIconForType(result.type)}
                                        </span>
                                        <span className="text-[11px] font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase">
                                            {result.type}
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold text-[#001A41] dark:text-white group-hover:text-[#0B3C5D] dark:group-hover:text-[#D4AF37] transition-colors mb-2 leading-tight">
                                        {result.title}
                                    </h2>
                                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium dark:font-light">
                                        {result.description}
                                    </p>
                                </div>
                                <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 text-slate-400 dark:text-slate-500 group-hover:bg-[#001A41] group-hover:border-transparent dark:group-hover:bg-[#D4AF37] group-hover:text-white dark:group-hover:text-[#001A41] transition-all duration-300 flex-shrink-0 group-hover:translate-x-1">
                                    <ChevronRight size={20} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : query && results.length === 0 ? (
                <div className="text-center py-20 bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm dark:shadow-md">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 text-slate-400 dark:text-slate-500 mb-6">
                        <Search size={40} />
                    </div>
                    <h2 className="text-2xl font-bold text-[#001A41] dark:text-white mb-3">No matching records found</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto font-medium dark:font-light leading-relaxed">
                        The registry couldn't locate any items matching <span className="font-bold text-[#001A41] dark:text-white">"{query}"</span>. Try using broader terms like "Medicine", "Registration", or "Library".
                    </p>
                    <Link href="/" className="inline-block mt-8 text-[#0B3C5D] dark:text-[#D4AF37] font-bold hover:underline transition-colors">
                        &larr; Return to Home Gateway
                    </Link>
                </div>
            ) : null}

            {!query && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                    <div className="col-span-full mb-2">
                        <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Popular Destinations</h3>
                    </div>
                    {[
                        { title: "Undergraduate Admissions", link: "/registration", icon: <GraduationCap size={16} /> },
                        { title: "Student Housing Portal", link: "/students", icon: <Home size={16} /> },
                        { title: "Digital Library Access", link: "/researches", icon: <Library size={16} /> },
                        { title: "Faculty of Engineering", link: "/academics?faculty=engineering", icon: <Building2 size={16} /> },
                        { title: "Live Meeting Hub", link: "/students", icon: <Laptop size={16} /> },
                        { title: "Academic Calendar", link: "/students", icon: <CalendarDays size={16} /> }
                    ].map((item, i) => (
                        <Link key={i} href={item.link} className="flex items-center gap-3 p-4 bg-white dark:bg-[#091527] border border-slate-200 dark:border-slate-800 rounded-xl hover:border-[#0B3C5D] dark:hover:border-[#D4AF37] hover:shadow-md transition-all group">
                            <div className="text-slate-400 dark:text-slate-500 group-hover:text-[#0B3C5D] dark:group-hover:text-[#D4AF37] transition-colors">
                                {item.icon}
                            </div>
                            <span className="text-sm font-bold dark:font-medium text-[#001A41] dark:text-slate-200 group-hover:text-[#0B3C5D] dark:group-hover:text-white transition-colors">
                                {item.title}
                            </span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}

export default function SearchPage() {
    return (
        <div className="bg-[#F8FAFC] dark:bg-[#040B16] min-h-screen transition-colors duration-500">
            <Hero showFullHero={false} />
            <div className="pt-36 pb-20 px-4 w-full">
                <Suspense fallback={
                    <div className="max-w-4xl mx-auto w-full pt-20 text-center animate-pulse">
                        <div className="w-12 h-12 rounded-full border-4 border-slate-200 dark:border-slate-800 border-t-[#0B3C5D] dark:border-t-[#D4AF37] animate-spin mx-auto mb-4"></div>
                        <p className="text-slate-500 dark:text-slate-400 font-medium">Loading search interface...</p>
                    </div>
                }>
                    <SearchResults />
                </Suspense>
            </div>
        </div>
    );
}