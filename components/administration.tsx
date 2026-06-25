"use client";

import React, { useState, useEffect } from 'react';

import { Crown, Users, UserCog, GraduationCap, FlaskConical, Leaf, Building2, CalendarDays, ArrowLeft, ArrowRight, Calendar, Clock, Globe, TrendingUp, Smartphone, Factory, Building, Copy, FileText, BookOpen, Mail, X, Sparkles, Shield, Search, ChevronDown, Play, Brain, Scale, Target, Award, HeartHandshake, Briefcase, Microscope, Library, Phone, Download, Lock, ChevronRight, ExternalLink, MessageSquare, BarChart2, ChevronLeft, AlertCircle, CheckCircle, Database, Puzzle, Recycle, Lightbulb } from 'lucide-react';

import { useSearchParams, useRouter } from 'next/navigation';



export default function Administration() {

    const [activePage, setActivePage] = useState<'hub' | 'president' | 'head_admin' | 'leaders' | 'edu_affairs' | 'graduate_studies' | 'community_service' | 'secretary_general' | 'council_meetings'>('hub');

    const [isLegacy, setIsLegacy] = useState(false);

    const [copiedId, setCopiedId] = useState<string | null>(null);

    const [activeFilter, setActiveFilter] = useState("All Faculties");

    const [activeCommunityItem, setActiveCommunityItem] = useState<any | null>(null);

    const [activeFormsTab, setActiveFormsTab] = useState<'faculty' | 'employees'>('faculty');

    const [activeDeptItem, setActiveDeptItem] = useState<any | null>(null);

    const [activeNewsItem, setActiveNewsItem] = useState<any | null>(null);

    const [newsIndex, setNewsIndex] = useState(0);

    const [timelineYear, setTimelineYear] = useState<number>(2026);



    const [gradFaculty, setGradFaculty] = useState("Faculty of Engineering");

    const [isGradFacultyOpen, setIsGradFacultyOpen] = useState(false);

    const [gradPillar, setGradPillar] = useState("International Joint Degrees");

    const [isGradPillarOpen, setIsGradPillarOpen] = useState(false);

    const searchParams = useSearchParams();

    const router = useRouter();



    useEffect(() => {

        const pageParam = searchParams.get('page');

        const newsIdParam = searchParams.get('newsId');

        const itemParam = searchParams.get('item');

        if (pageParam) {

            setActivePage(pageParam as any);



            if (pageParam === 'community_service' && itemParam === 'Sustainable_Development') {

                const matchedItem = communityCardsData.find(item => item.title === "Sustainable Development");

                if (matchedItem) {

                    setActiveCommunityItem(matchedItem);

                }

            }



            if (pageParam === 'secretary_general' && newsIdParam) {

                const matchedNews = secGenNews.find(item => item.id?.toString() === newsIdParam);

                if (matchedNews) {

                    setActiveNewsItem(matchedNews);

                }

            }

        }

    }, [searchParams]);



    const handleCopy = (text: string, id: string) => {

        navigator.clipboard.writeText(text);

        setCopiedId(id);

        setTimeout(() => setCopiedId(null), 2000);

    };



    const adminHubItems = [

        { title: "University President", icon: <Crown />, target: 'president' },

        { title: "AU Head Administration", icon: <Users />, target: 'head_admin' },

        { title: "University Leaders", icon: <UserCog />, target: 'leaders' },

        { title: "Educational & Students' Affairs Search Sector", icon: <GraduationCap />, target: 'edu_affairs' },

        { title: "Graduate Studies & Research Sector", icon: <FlaskConical />, target: 'graduate_studies' },

        { title: "Community Service & Environmental Development Sector", icon: <Leaf />, target: 'community_service' },

        { title: "University Secretary General Sector", icon: <Building2 />, target: 'secretary_general' },

        { title: "University Council Meetings", icon: <CalendarDays />, target: 'council_meetings', isLive: true },

    ];



    const leadershipInfo = {

        current: {

            name: "Dr. Ahmed Adel Abdel Hakim",

            bio: "Tasked with maintaining institutional stability, overseeing faculty operations, and finalizing current international branch setups. Leading the university through a critical transition period while preserving strategic momentum.",

            focus: "Institutional Continuity",

            status: "Acting President",

            cardTitle: "Acting President",

            cardSub: "Alexandria University",

            date: "APPOINTED: FEB 11, 2026",

            image: "/imgs/Ahmed Adel Abdelhakim.jpg"

        },

        legacy: {

            name: "Dr. Abdelaziz Konsowa",

            bio: "Main architect of the university's global expansion framework and modern research centers. Under his leadership, Alexandria University initiated strategic partnerships across three continents and modernized institutional governance.",

            focus: "Global Expansion",

            status: "Minister of Higher Ed.",

            cardTitle: "President (2020-2026)",

            cardSub: "Minister of Higher Education & Scientific Research",

            date: "2020 - FEB 2026",

            image: "/imgs/konsowa.jpg"

        }

    };



    const strategicAgendas = [

        { title: "Transnational Campuses", icon: <Globe size={20} />, description: "Finalizing operational permits for dedicated university branches." },

        { title: "Global Ranking", icon: <TrendingUp size={20} />, description: "Targeting top-400 placement in QS Rankings." },

        { title: "Digital Transformation", icon: <Smartphone size={20} />, description: "Upgrading the internal student portal." },

        { title: "Industrial Alignment", icon: <Factory size={20} />, description: "Partnering with local manufacturing hubs." }

    ];



    const currentData = isLegacy ? leadershipInfo.legacy : leadershipInfo.current;



    const filterCategories = ["All Faculties", "Medical & Health", "Engineering & Tech", "Science & Agriculture", "Education & Sports", "Law", "Business & Arts"];



    const leadersData = [

        { name: "Prof. Dr. Tamer Abdullah Helmy", faculty: "Dean of Faculty of Medicine", category: "Medical & Health" },

        { name: "Prof. Dr. Hanan Elgweily", faculty: "Dean of Faculty of Pharmacy", category: "Medical & Health" },

        { name: "Prof. Dr. Riham Eldibany", faculty: "Dean of Faculty of Dentistry", category: "Medical & Health", isActing: true },

        { name: "Prof. Dr. Hanan Hosni Elsherbiny", faculty: "Dean of Faculty of Nursing", category: "Medical & Health" },

        { name: "Prof. Dr. Mahmoud El Maghraby", faculty: "Dean of Faculty of Veterinary Medicine", category: "Medical & Health" },

        { name: "Prof. Dr. Khaled Matrawy", faculty: "Dean of Medical Research Institute", category: "Medical & Health" },

        { name: "Prof. Dr. Heba Elkady", faculty: "Dean of High Institute of Public Health", category: "Medical & Health" },

        { name: "Prof. Dr. Wael El-Maghlany", faculty: "Dean of Faculty of Engineering", category: "Engineering & Tech", isActing: true },

        { name: "Prof. Dr. Magda Madbouly", faculty: "Dean of Faculty of Information Systems and Computer Science", category: "Engineering & Tech", isActing: true },

        { name: "Prof. Dr. Ahmed Abdelrehim", faculty: "Dean of Institute of Graduate Studies & Research", category: "Engineering & Tech" },

        { name: "Prof. Dr. Mohamed Essam Fayez", faculty: "Dean of Faculty of Science", category: "Science & Agriculture", isActing: true },

        { name: "Prof. Dr. Heba Sabri Salama", faculty: "Dean of Faculty of Agriculture", category: "Science & Agriculture" },

        { name: "Prof. Dr. Ahmed Abdelfatah", faculty: "Dean of Faculty of Agriculture Saba Basha", category: "Science & Agriculture" },

        { name: "Prof. Dr. Hassan Abdin", faculty: "Dean of Faculty of Education", category: "Education & Sports" },

        { name: "Prof. Dr. Nagda Ibrahim Mady", faculty: "Dean of Faculty of Specific Education", category: "Education & Sports" },

        { name: "Prof. Dr. Lamiaa Othman", faculty: "Dean of Faculty of Education for Early Childhood", category: "Education & Sports", isActing: true },

        { name: "Prof. Dr. Eslam Amin Zaky", faculty: "Dean of Faculty of Sport Sciences - Abo Qir", category: "Education & Sports" },

        { name: "Prof. Dr. Doaa El Dardery", faculty: "Dean of Faculty of Sport Sciences for Girls", category: "Education & Sports", isActing: true },

        { name: "Prof. Dr. Mohamed Elfeki", faculty: "Dean of Faculty of Law", category: "Law" },

        { name: "Prof. Dr. Ayman Shetiwy", faculty: "Dean of Faculty of Business", category: "Business & Arts" },

        { name: "Prof.Dr. Hany Kahmis", faculty: "Dean of Faculty of Arts", category: "Business & Arts" },

        { name: "Prof. Dr. Niveen Ghareeb", faculty: "Dean of Faculty of Fine Arts", category: "Business & Arts" },

        { name: "Prof. Dr. Dina Ezz El Din", faculty: "Dean of Faculty of Tourism & Hotels", category: "Business & Arts", isActing: true },

        { name: "Prof. Dr. Sherin Adel Nosier", faculty: "Dean of Faculty of Economics Studies & Political Science", category: "Business & Arts", isActing: true }

    ];



    const filteredLeaders = activeFilter === "All Faculties" ? leadersData : leadersData.filter(leader => leader.category === activeFilter);



    const eduAffairsCards = [

        { title: "AU Student Life", icon: <Sparkles size={28} strokeWidth={1.5} />, desc: "Campus community, clubs, events, and social activities", links: ["Student Clubs", "Campus Events"] },

        { title: "Student Services", icon: <Shield size={28} strokeWidth={1.5} />, desc: "Housing, financial aid, counseling, and support systems", links: ["Portal Login", "Housing Services"] },

        { title: "Academic Life", icon: <BookOpen size={28} strokeWidth={1.5} />, desc: "Academic resources, library services, and learning support", links: ["Library Portal", "Academic Calendar"] },

        { title: "International Student Services", icon: <Globe size={28} strokeWidth={1.5} />, desc: "Support for international students and exchange programs", links: ["Visa Support", "Language Programs"] }

    ];



    const communityCardsData = [

        { title: "Sustainable Development", desc: "Egypt's Vision 2030 tracker and carbon monitoring.", icon: <Target size={32} />, badge: "VISION 2030" },

        { title: "Environmental Sector", desc: "Organizational blueprint for environmental initiatives.", icon: <Leaf size={32} /> },

        { title: "Institutional Development", desc: "Egypt Government Excellence Award preparations.", icon: <Award size={32} /> },

        { title: "Convoys", desc: "Medical and social caravans to remote villages.", icon: <HeartHandshake size={32} /> },

        { title: "Literacy", desc: "Community adult education programs.", icon: <BookOpen size={32} /> },

        { title: "Community Initiatives", desc: "Tahya Misr Fund and digital platforms.", icon: <Users size={32} /> },

        { title: "Transformative Training", desc: "Vocational workshops and upskilling.", icon: <Briefcase size={32} /> },

        { title: "Units of Special Nature", desc: "Nanotechnology, Occupational Health & Safety.", icon: <Microscope size={32} /> },

        { title: "Alexandria University Museums", desc: "Cultural archives and museum treasures.", icon: <Library size={32} /> }

    ];



    const facultyForms = [

        "Salary Leave Application", "Request for Appointment of Assistant Teacher", "Request for Appointment of Teacher", "Request for Appointment of Assistant Professor / Professor",

        "Sick Leave Application", "Regular Leave Application", "Unpaid Leave for Childcare", "Unpaid Leave to Accompany Spouse",

        "Leave Return Confirmation", "Inside/Outside Permit Endorsement", "Outside Assignment Request", "Separation Request"

    ];



    const employeeForms = [

        "Special Leave Form (Full Pay)", "Study Leave Form", "Sick Leave Form", "Leave Return Form",

        "Termination Form", "Working Hours Reduction Form", "Part-time Form", "Child Care Form",

        "Spouse Escort Form", "External and Internal Assignment Form", "Return Form from Abroad", "Transfer Form (University to University)",

        "Transfer Form (Outside University)", "Permit Application Form", "Work Errand Form", "Colleague Data Form",

        "Grant / Internal Loan Renewal Form", "Foreign Loan Grant Form", "External Loan Renewal Form"

    ];



    const secGenDepts = [

        { title: "General Administration for Personnel", icon: <Building size={20} />, tasks: ["Workforce planning", "Pension follow-up"] },

        { title: "General Administration of Purchasing", icon: <FileText size={20} />, tasks: ["Procurement policy", "Inventory control"] },

        { title: "Financial Affairs", icon: <Building2 size={20} />, tasks: ["Budget monitoring", "Inspection"] }

    ];



    const secGenNews = [

        { id: 1, date: { month: "Nov", day: "28" }, hits: "1,067", title: "Vice President discusses maintenance work for university facilities.", created: "28 Nov 2024" },

        { id: 2, date: { month: "Jul", day: "22" }, hits: "1,585", title: "Board discusses preparations for Academic Year 2024/2025 entrance exams.", created: "22 Jul 2024" }

    ];



    const maxNewsIndex = Math.max(0, secGenNews.length - 3);

    const timelineYears = [2016, 2024, 2025, 2026];

    const progressWidth = `${(timelineYears.indexOf(timelineYear) / (timelineYears.length - 1)) * 100}%`;

    const filteredArchiveVideos = [{ date: "May 2026", initial: "F", category: "JOINT DEGREES", title: "Diplomas Launch", color: "#eab308" }];



    return (

        <main className="min-h-screen relative bg-[#F8FAFC] dark:bg-[#000D1A] dark:bg-gradient-to-br dark:from-[#000D1A] dark:to-[#001A33] pt-32 pb-20 px-4 overflow-hidden transition-colors duration-500">

            <div className="absolute inset-0 opacity-10 dark:opacity-40 pointer-events-none mix-blend-multiply dark:mix-blend-screen transition-opacity">

                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">

                    <path d="M -100,200 L 300,600 L 700,200 L 1200,800 M 500,-100 L 900,400 L 1500,100 M 200,900 L 800,500 L 1400,900" stroke="#4f46e5" strokeWidth="1" fill="none" opacity="0.4" />

                    <path d="M 100,100 L 500,500 L 200,800 L -100,400 Z M 600,200 L 1000,600 L 800,800 L 400,400 Z" stroke="#3b82f6" strokeWidth="0.5" fill="none" opacity="0.3" />

                    <circle cx="300" cy="600" r="3" fill="#f59e0b" className="animate-pulse" />

                    <circle cx="700" cy="200" r="2" fill="#3b82f6" />

                    <circle cx="900" cy="400" r="3.5" fill="#f59e0b" />

                    <circle cx="500" cy="500" r="2.5" fill="#001A41" className="dark:fill-white" opacity="0.7" />

                    <circle cx="200" cy="800" r="2" fill="#4f46e5" />

                    <circle cx="800" cy="500" r="3" fill="#f59e0b" className="animate-ping" style={{ animationDuration: '3s' }} />

                    <circle cx="1000" cy="600" r="2" fill="#3b82f6" />

                </svg>

            </div>



            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-200/40 dark:bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none transition-colors"></div>

            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-200/40 dark:bg-blue-600/10 blur-[150px] rounded-full pointer-events-none transition-colors"></div>

            <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-amber-200/30 dark:bg-amber-500/[0.03] blur-[100px] rounded-full pointer-events-none transition-colors"></div>



            <div className="absolute top-8 left-8 z-50">

                <button

                    onClick={() => router.push('/')}

                    className="flex items-center gap-2 bg-white/80 dark:bg-black/20 hover:bg-white dark:hover:bg-white/10 text-[#001A41] dark:text-white border border-slate-200 dark:border-white/10 px-4 py-2 rounded-lg font-bold text-sm backdrop-blur-md transition-all shadow-sm"

                >

                    <ArrowLeft size={16} /> Home Gateway

                </button>

            </div>



            <div className={`relative z-10 mx-auto ${activePage === 'secretary_general' || activePage === 'council_meetings' || activePage === 'graduate_studies' ? 'max-w-[1400px]' : 'max-w-7xl'}`}>

                {activePage === 'hub' ? (

                    <>

                        <div className="text-center mb-16">

                            <h1 className="text-4xl md:text-5xl font-serif text-[#001A41] dark:text-[#D4AF37] mb-4 font-bold tracking-tight">

                                Master Administration Hub

                            </h1>

                            <p className="text-slate-600 dark:text-slate-400 text-lg font-medium dark:font-normal">

                                Command center for Alexandria University's governance and strategic initiatives

                            </p>

                        </div>



                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                            {adminHubItems.map((item, idx) => (

                                <div

                                    key={idx}

                                    onClick={() => item.target && setActivePage(item.target as any)}

                                    className="h-full relative bg-white dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-white/10 p-8 rounded-3xl shadow-sm dark:shadow-none hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/50 cursor-pointer group"

                                >

                                    {item.isLive && (

                                        <div className="absolute top-4 right-4 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1.5 border border-emerald-200 dark:border-none">

                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>

                                            LIVE

                                        </div>

                                    )}

                                    <div className="mb-6 text-[#0B3C5D] dark:text-[#D4AF37] group-hover:scale-110 transition-transform origin-left">

                                        {React.cloneElement(item.icon as React.ReactElement, { size: 32 } as any)}

                                    </div>

                                    <h3 className="text-xl font-bold dark:font-semibold text-[#001A41] dark:text-white leading-snug group-hover:text-[#D4AF37] transition-colors">

                                        {item.title}

                                    </h3>

                                </div>

                            ))}

                        </div>

                    </>

                ) : activePage === 'president' ? (

                    <div className="max-w-none w-full flex flex-col items-start text-left animate-in fade-in slide-in-from-bottom-4 duration-500">

                        <div className="mb-10">

                            <button

                                onClick={() => setActivePage('hub')}

                                className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-[#001A41] dark:hover:text-[#D4AF37] transition-all duration-300 group cursor-pointer font-bold dark:font-medium p-0 bg-transparent border-none"

                            >

                                <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />

                                <span>Back to Administration Hub</span>

                            </button>

                        </div>



                        <div className="w-full flex flex-col items-start text-left mb-16">

                            <h2 className="text-4xl md:text-5xl font-serif font-bold dark:font-normal text-[#001A41] dark:text-[#D4AF37] tracking-tight dark:tracking-wide whitespace-normal md:whitespace-nowrap">

                                Leading the Future of Alexandria University

                            </h2>

                            <p className="text-xl md:text-3xl text-[#0B3C5D] dark:text-[#D4AF37] font-serif tracking-wide mt-6 dark:mt-10 font-medium dark:font-normal">

                                Strategic Continuity & Global Expansion

                            </p>

                        </div>



                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch mt-4">

                            <div className="flex flex-col w-full">

                                <div className="bg-white dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden min-h-[500px] relative group hover:shadow-xl dark:hover:bg-white/10 transition-all duration-300 flex-1 shadow-sm">

                                    <img

                                        src={currentData.image}

                                        alt={currentData.name}

                                        className="w-full h-full object-cover object-top absolute inset-0 select-none pointer-events-none"

                                    />

                                    <div className="absolute bottom-8 right-8 bg-white/95 dark:bg-[#0b1b4f]/90 backdrop-blur-xl border border-slate-200 dark:border-[#D4AF37]/30 p-6 rounded-[20px] w-72 shadow-2xl z-10">

                                        <h4 className="text-[#001A41] dark:text-[#D4AF37] font-serif font-bold dark:font-normal text-xl mb-2">{currentData.cardTitle}</h4>

                                        <p className="text-slate-600 dark:text-white text-[13px] font-bold dark:font-medium leading-relaxed mb-4">{currentData.cardSub}</p>

                                        <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-[#D4AF37]/10 text-slate-700 dark:text-[#D4AF37] px-3 py-1.5 rounded-md text-[10px] font-bold border border-slate-200 dark:border-[#D4AF37]/20">

                                            <Calendar size={12} />

                                            {currentData.date}

                                        </div>

                                    </div>

                                </div>



                                <button

                                    onClick={() => setIsLegacy(!isLegacy)}

                                    className="w-full mt-4 py-4 bg-white dark:bg-transparent border border-slate-200 dark:border-white/10 rounded-[14px] text-[#001A41] dark:text-slate-300 font-bold dark:font-medium hover:border-[#001A41] dark:hover:border-white dark:hover:text-white hover:shadow-md transition-all duration-300 shadow-sm dark:shadow-none"

                                >

                                    {isLegacy ? "View Current Leadership" : "View Legacy & Achievements"}

                                </button>

                            </div>



                            <div className="flex flex-col gap-6">

                                <div className="bg-white dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 p-8 rounded-3xl shadow-sm dark:shadow-none transition-all duration-300 hover:shadow-md dark:hover:bg-white/10 flex flex-col flex-1 min-h-[300px]">

                                    <h3 className="text-2xl font-serif font-bold dark:font-normal text-[#001A41] dark:text-[#D4AF37] mb-5">{currentData.name}</h3>

                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium dark:font-light text-[14px] mb-8">

                                        {currentData.bio}

                                    </p>

                                    <div className="mt-auto">

                                        <div className="flex justify-between items-center py-4 border-b border-slate-100 dark:border-white/10">

                                            <span className="text-slate-500 dark:text-slate-400 text-xs font-bold dark:font-normal uppercase tracking-wider dark:tracking-normal dark:capitalize">Primary Focus</span>

                                            <span className="text-[#001A41] dark:text-white text-xs font-bold dark:font-medium">{currentData.focus}</span>

                                        </div>

                                        <div className="flex justify-between items-center py-4 border-b border-slate-100 dark:border-white/10">

                                            <span className="text-slate-500 dark:text-slate-400 text-xs font-bold dark:font-normal uppercase tracking-wider dark:tracking-normal dark:capitalize">Current Status</span>

                                            <span className="text-[#001A41] dark:text-white text-xs font-bold dark:font-medium">{currentData.status}</span>

                                        </div>

                                    </div>

                                </div>



                                <div className="bg-white dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 p-8 rounded-3xl shadow-sm dark:shadow-none transition-all duration-300 hover:shadow-md dark:hover:bg-white/10 shrink-0">

                                    <h3 className="text-xl font-serif font-bold dark:font-normal text-[#001A41] dark:text-[#D4AF37] mb-6">Vice President</h3>

                                    <div className="flex items-start gap-5">

                                        <div className="w-14 h-14 rounded-full bg-slate-50 dark:bg-[#D4AF37]/10 flex items-center justify-center text-[#0B3C5D] dark:text-[#D4AF37] font-serif text-xl shrink-0 border border-slate-200 dark:border-[#D4AF37]/20">

                                            HS

                                        </div>

                                        <div className="flex flex-col">

                                            <h4 className="text-[#001A41] dark:text-white font-bold dark:font-medium text-base mb-1">Dr. Hesham Saeed</h4>

                                            <p className="text-slate-500 dark:text-slate-300 text-xs mb-3 font-semibold dark:font-normal">Vice President for Graduate Studies & Research</p>

                                            <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed font-medium dark:font-light">

                                                Managing domestic research grants, supervising doctoral programs, and handling cross-border academic partnerships.

                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>



                        <div className="w-full mt-24 mb-10">

                            <h2 className="text-3xl md:text-4xl font-serif font-bold dark:font-normal text-[#001A41] dark:text-[#D4AF37] mb-8 tracking-wide">

                                Key Strategic Agenda

                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

                                {strategicAgendas.map((agenda, idx) => (

                                    <div key={idx} className="bg-white dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 p-8 rounded-3xl shadow-sm dark:shadow-none transition-all duration-300 hover:shadow-lg dark:hover:bg-white/10 flex flex-col">

                                        <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-[#D4AF37]/10 flex items-center justify-center text-[#0B3C5D] dark:text-[#D4AF37] mb-6 border border-slate-200 dark:border-[#D4AF37]/20">

                                            {agenda.icon}

                                        </div>

                                        <h3 className="text-xl font-serif font-bold dark:font-normal text-[#001A41] dark:text-[#D4AF37] mb-4">{agenda.title}</h3>

                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium dark:font-light text-[13px]">

                                            {agenda.description}

                                        </p>

                                    </div>

                                ))}

                            </div>

                            <div className="flex justify-center mt-8">

                                <button className="px-8 py-4 bg-[#001A41] dark:bg-[#D4AF37] text-white dark:text-[#000D1A] font-bold dark:font-semibold rounded-xl hover:bg-[#0B3C5D] dark:hover:bg-[#D4AF37]/90 transition-all duration-300 shadow-md dark:shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-xl">

                                    View Full Strategic Road Map

                                </button>

                            </div>

                        </div>

                    </div>

                ) : activePage === 'head_admin' ? (

                    <div className="max-w-none w-full flex flex-col items-start text-left animate-in fade-in slide-in-from-bottom-4 duration-500">

                        <div className="mb-10">

                            <button

                                onClick={() => setActivePage('hub')}

                                className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-[#001A41] dark:hover:text-[#D4AF37] transition-all duration-300 group cursor-pointer font-bold dark:font-medium p-0 bg-transparent border-none"

                            >

                                <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />

                                <span>Back to Administration Hub</span>

                            </button>

                        </div>



                        <div className="w-full flex flex-col items-start text-left mb-10">

                            <h2 className="text-4xl md:text-5xl font-serif font-bold dark:font-normal text-[#001A41] dark:text-[#D4AF37] tracking-tight dark:tracking-wide whitespace-normal md:whitespace-nowrap mb-6">

                                Executive Governance & The University Council

                            </h2>

                            <p className="text-xl md:text-2xl text-[#0B3C5D] dark:text-[#D4AF37] font-serif tracking-wide font-medium dark:font-normal">

                                Directing Academic Excellence under the Supreme Council of Universities

                            </p>

                        </div>



                        <div className="w-full bg-white dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-3xl p-10 mt-4 shadow-sm dark:shadow-none transition-all duration-300 hover:shadow-md dark:hover:bg-white/10">

                            <div className="flex items-center gap-3 text-[#001A41] dark:text-[#D4AF37] mb-10 pb-6 border-b border-slate-200 dark:border-white/10">

                                <Building size={20} />

                                <span className="font-bold dark:font-medium">Founded: 06 December 2015</span>

                            </div>



                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                                <div className="flex flex-col gap-6">

                                    <h3 className="text-2xl font-serif font-bold dark:font-normal text-[#001A41] dark:text-[#D4AF37]">Governance Structure</h3>

                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium dark:font-light text-[15px]">

                                        Alexandria University is administered through the University Council headed by the University President and with the membership of: four Vice-Presidents, Deans of all the Faculties and Institutes of the University, and four members with expertise on university education; appointed for two years liable to extension.

                                    </p>

                                </div>



                                <div className="flex flex-col gap-6">

                                    <h3 className="text-2xl font-serif font-bold dark:font-normal text-[#001A41] dark:text-[#D4AF37]">Presidential Authority</h3>

                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium dark:font-light text-[15px]">

                                        The President runs the University academically and administratively according to the bylaws and regulations approved by the Supreme Council of Universities. He serves as the Chief Executive and Operational Officer, directly responsible for the management of all University affairs.

                                    </p>

                                </div>

                            </div>

                        </div>



                        <div className="w-full mt-24 relative flex flex-col items-center">

                            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 relative mb-12">

                                <div className="lg:col-start-5 lg:col-span-4 bg-white dark:bg-gradient-to-b dark:from-[#162743] dark:to-[#0A1323] backdrop-blur-md border border-slate-200 dark:border-[#D4AF37]/50 rounded-3xl p-6 flex flex-col relative shadow-xl dark:shadow-2xl z-10 min-h-[580px]">

                                    <div className="absolute top-6 right-6 bg-[#001A41] dark:bg-[#D4AF37] text-white dark:text-[#000D1A] px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider z-20 shadow-md">

                                        CEO / COO

                                    </div>

                                    <div className="flex-1 w-full bg-slate-50 dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent rounded-2xl mb-8 flex items-center justify-center border border-slate-200 dark:border-white/10 overflow-hidden relative shadow-inner dark:shadow-none">

                                        <img src="/imgs/Ahmed Adel Abdelhakim.jpg" alt="Prof. Dr. Ahmed Adel Abdelhakim" className="w-full h-full object-cover object-top" />

                                        {!currentData.image && <span className="text-slate-500 text-sm font-bold dark:font-light">[President Portrait]</span>}

                                    </div>

                                    <h3 className="text-2xl font-serif font-bold dark:font-normal text-[#001A41] dark:text-[#D4AF37] mb-2">Prof. Dr. Ahmed Adel Abdelhakim</h3>

                                    <p className="text-slate-600 dark:text-white text-sm mb-8 font-bold dark:font-light">Acting President of Alexandria University</p>

                                    <div

                                        onClick={() => handleCopy('president@alexu.edu.eg', 'pres')}

                                        className="mt-auto flex items-center justify-between bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-4 group hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"

                                    >

                                        <div className="flex items-center gap-3">

                                            <Mail size={16} className="text-[#0B3C5D] dark:text-[#D4AF37] opacity-80" />

                                            <span className="text-[#001A41] dark:text-slate-400 text-sm font-bold dark:font-normal truncate">president@alexu.edu.eg</span>

                                        </div>

                                        {copiedId === 'pres' ? (

                                            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold dark:font-medium">Copied!</span>

                                        ) : (

                                            <Copy size={16} className="text-[#0B3C5D] dark:text-[#D4AF37] opacity-70 group-hover:opacity-100 transition-opacity" />

                                        )}

                                    </div>

                                </div>



                                <div className="lg:col-start-10 lg:col-span-3 bg-white dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-[#D4AF37]/20 rounded-3xl p-6 flex flex-col h-fit mt-12 lg:mt-0 shadow-md dark:shadow-none">

                                    <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-[#D4AF37]/10 flex items-center justify-center text-[#0B3C5D] dark:text-[#D4AF37] mb-5 border border-slate-200 dark:border-[#D4AF37]/20">

                                        <FileText size={20} />

                                    </div>

                                    <h3 className="text-xl font-serif font-bold dark:font-normal text-[#001A41] dark:text-[#D4AF37] mb-4">Secretary General</h3>

                                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium dark:font-light mb-8">

                                        Attends all Council meetings as Secretary of these sessions and takes part in the discussions. Manages meeting minutes and official documentation.

                                    </p>

                                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs mt-auto font-bold dark:font-normal">

                                        <span className="w-2 h-2 rounded-full bg-[#0B3C5D] dark:bg-[#D4AF37]"></span>

                                        Supporting All Sessions

                                    </div>

                                </div>

                            </div>



                            <div className="hidden lg:block w-px h-16 bg-slate-300 dark:bg-gradient-to-b dark:from-[#D4AF37]/40 dark:to-transparent -mt-12 mb-8"></div>



                            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                                {[

                                    { img: "/imgs/Ahmed Adel.jpg", name: "Prof. Dr. Ahmed Adel Abdelhakim", role: "Vice President for Education and Student Affairs", email: "v-p.edu@alexu.edu.eg", emailDisplay: "v-p.edu@alexu...", id: "vp1" },

                                    { img: "/imgs/Hesham Saeed.jpg", name: "Prof. Dr. Hesham Saeed", role: "Vice President for Graduate Studies and Research", email: "v-p.grad@alexu.edu.eg", emailDisplay: "v-p.grad@alexu...", id: "vp2" },

                                    { img: "/imgs/Affaf Al-Oufy.jpg", name: "Prof. Dr. Affaf Al-Oufy", role: "Vice President for Community Service and Environmental Development Affairs", email: "v-p.comm@alexu.edu.eg", emailDisplay: "v-p.comm@alexu...", id: "vp3" },

                                    { img: "/imgs/Mohamed Fathy.jpg", name: "Expert Member", role: "Appointed University Education Expert", email: "expert@alexu.edu.eg", emailDisplay: "expert@alexu...", id: "vp4" },

                                ].map((vp) => (

                                    <div key={vp.id} className="flex flex-col bg-white dark:bg-[#001A33]/30 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-sm dark:shadow-none hover:shadow-lg dark:hover:border-[#D4AF37]/30 transition-all duration-300 min-h-[460px]">

                                        <div className="h-56 w-full bg-slate-50 dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent rounded-2xl mb-6 flex items-center justify-center border border-slate-200 dark:border-white/5 overflow-hidden shadow-inner dark:shadow-none">

                                            <img src={vp.img} alt={vp.name} className="w-full h-full object-cover object-top" />

                                        </div>

                                        <h4 className="text-xl font-serif font-bold dark:font-normal text-[#001A41] dark:text-[#D4AF37] mb-3 leading-snug">{vp.name}</h4>

                                        <p className="text-slate-600 dark:text-white text-[13px] mb-8 font-bold dark:font-light leading-relaxed">{vp.role}</p>

                                        <div

                                            onClick={() => handleCopy(vp.email, vp.id)}

                                            className="mt-auto flex items-center justify-between bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-4 py-3 group hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"

                                        >

                                            <div className="flex items-center gap-2 overflow-hidden">

                                                <Mail size={14} className="text-[#0B3C5D] dark:text-[#D4AF37] opacity-80 shrink-0" />

                                                <span className="text-[#001A41] dark:text-slate-400 text-[11px] font-bold dark:font-normal truncate">{vp.emailDisplay}</span>

                                            </div>

                                            {copiedId === vp.id ? (

                                                <span className="text-emerald-600 dark:text-emerald-400 text-[11px] font-bold dark:font-medium shrink-0 ml-2">Copied!</span>

                                            ) : (

                                                <Copy size={14} className="text-[#0B3C5D] dark:text-[#D4AF37] opacity-70 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />

                                            )}

                                        </div>

                                    </div>

                                ))}

                            </div>



                            <div className="w-full mt-12 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl py-5 px-6 flex items-center justify-center text-center shadow-sm dark:shadow-none dark:hover:bg-white/10 dark:hover:border-white/20 transition-all">

                                <p className="text-slate-600 dark:text-slate-300 text-sm flex items-center justify-center gap-3 font-bold dark:font-light">

                                    <BookOpen size={16} className="text-[#0B3C5D] dark:text-[#D4AF37]" />

                                    Under the Academic Authority of <span className="font-bold dark:font-medium text-[#001A41] dark:text-white">Supreme Council of Universities</span>

                                    <span className="text-slate-300 dark:text-white/30 px-2 select-none">•</span>

                                    <span className="font-bold dark:font-medium text-[#001A41] dark:text-white">Ministry of Higher Education & Scientific Research</span>

                                </p>

                            </div>

                        </div>

                    </div>

                ) : activePage === 'edu_affairs' ? (

                    <div className="max-w-none w-full flex flex-col items-center text-center pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">

                        <div className="w-full flex justify-start mb-10">

                            <button

                                onClick={() => setActivePage('hub')}

                                className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-[#001A41] dark:hover:text-[#4FD1C5] transition-all duration-300 group cursor-pointer font-bold dark:font-medium p-0 bg-transparent border-none"

                            >

                                <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />

                                <span>Back to Administration Hub</span>

                            </button>

                        </div>



                        <div className="w-full flex flex-col items-center text-center mb-16">

                            <h2 className="text-4xl md:text-5xl font-serif font-bold dark:font-normal text-[#001A41] dark:text-[#4FD1C5] tracking-tight dark:tracking-wide whitespace-normal md:whitespace-nowrap mb-6">

                                Education & Students' Affairs

                            </h2>

                            <p className="text-[15px] text-slate-600 dark:text-white/80 font-bold dark:font-light max-w-2xl leading-relaxed">

                                Empowering students through comprehensive support, academic excellence, and vibrant campus life

                            </p>

                        </div>



                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                            {eduAffairsCards.map((card, idx) => (

                                <div

                                    key={idx}

                                    className="group relative bg-white dark:bg-[#00172e]/80 backdrop-blur-md border border-slate-200 dark:border-white/5 rounded-[32px] p-10 flex flex-col items-center transition-all duration-500 min-h-[400px] shadow-sm dark:shadow-2xl hover:shadow-xl overflow-hidden"

                                >

                                    <div className="flex flex-col items-center justify-center flex-1 w-full transition-transform duration-500 group-hover:-translate-y-20">

                                        <div className="w-[72px] h-[72px] rounded-[24px] bg-[#001A41]/5 dark:bg-[#4FD1C5]/10 flex items-center justify-center text-[#001A41] dark:text-[#4FD1C5] mb-8 shadow-inner dark:shadow-[inset_0_0_20px_rgba(79,209,197,0.1)] border border-slate-200 dark:border-[#4FD1C5]/20 rotate-45 transition-transform duration-500">

                                            <div className="-rotate-45 transition-transform duration-500">

                                                {card.icon}

                                            </div>

                                        </div>

                                        <h3 className="text-[24px] font-serif font-bold dark:font-normal text-[#001A41] dark:text-[#4FD1C5] group-hover:text-[#0B3C5D] dark:group-hover:text-[#ebd27c] transition-colors duration-500 mb-4">{card.title}</h3>

                                        <p className="text-slate-600 dark:text-white/70 text-[14px] font-medium dark:font-light text-center px-4 leading-relaxed">{card.desc}</p>

                                    </div>



                                    <div className="absolute bottom-10 left-10 right-10 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto">

                                        <div className="w-full h-px bg-slate-200 dark:bg-white/10 mb-6"></div>

                                        <h4 className="text-[#0B3C5D] dark:text-[#ebd27c] text-[11px] font-bold tracking-[0.15em] uppercase mb-5 text-center">Quick Links</h4>

                                        <div className="grid grid-cols-2 gap-3">

                                            {card.links.map((link, lIdx) => (

                                                <button key={lIdx} className="bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 rounded-xl py-3.5 text-[12px] text-[#001A41] dark:text-white/80 transition-colors w-full font-bold dark:font-medium shadow-sm hover:shadow-md">

                                                    {link}

                                                </button>

                                            ))}

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                ) : activePage === 'graduate_studies' ? (

                    <div className="max-w-none w-full flex flex-col items-start text-left pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">

                        <div className="mb-10">

                            <button

                                onClick={() => setActivePage('hub')}

                                className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-[#001A41] dark:hover:text-[#D4AF37] transition-all duration-300 group cursor-pointer font-bold dark:font-medium p-0 bg-transparent border-none"

                            >

                                <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />

                                <span>Back to Administration Hub</span>

                            </button>

                        </div>



                        <div className="w-full flex flex-col items-start text-left mb-10">

                            <h2 className="text-4xl md:text-5xl font-serif font-bold dark:font-normal text-[#001A41] dark:text-[#D4AF37] tracking-tight dark:tracking-wide whitespace-normal md:whitespace-nowrap mb-4">

                                Graduate Studies & Research Council

                            </h2>

                            <p className="text-slate-600 dark:text-white font-bold dark:font-light text-[13px] tracking-wide">

                                Executive Dashboard & Strategic Decision Archive

                            </p>

                        </div>



                        <div className="w-full flex flex-wrap items-center gap-5 mb-8 relative z-50">

                            <div className="relative flex items-center bg-white dark:bg-[#00172e] border border-slate-200 dark:border-white/10 rounded-full px-5 py-3 w-full md:w-[380px] lg:w-[420px] hover:border-[#0B3C5D] dark:hover:border-white/20 transition-colors shadow-sm dark:shadow-none">

                                <Search size={14} className="text-[#0B3C5D] dark:text-[#4FD1C5] mr-2" />

                                <input

                                    type="text"

                                    placeholder="Search Council Records..."

                                    className="bg-transparent border-none outline-none text-[#001A41] dark:text-white text-xs w-full font-bold dark:font-light placeholder:text-slate-400 dark:placeholder:text-slate-500"

                                />

                            </div>



                            <div className="relative w-full md:w-[300px] lg:w-[340px] shadow-sm dark:shadow-none">

                                <button

                                    onClick={() => { setIsGradFacultyOpen(!isGradFacultyOpen); setIsGradPillarOpen(false); }}

                                    className="w-full flex items-center justify-between bg-white dark:bg-[#00172e] border border-slate-200 dark:border-[#D4AF37]/50 rounded-full px-5 py-3 text-[13px] text-[#001A41] dark:text-white hover:border-[#D4AF37] transition-colors font-bold dark:font-normal"

                                >

                                    <span>{gradFaculty}</span>

                                    <ChevronDown size={14} className="text-slate-400" />

                                </button>

                                {isGradFacultyOpen && (

                                    <div className="absolute top-full left-0 mt-2 w-full bg-white dark:bg-[#000b18] border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden shadow-xl dark:shadow-2xl z-50 py-2">

                                        {["All Faculties", "Faculty of Engineering", "Faculty of Medicine", "Faculty of Science", "Faculty of Arts"].map(f => (

                                            <div

                                                key={f}

                                                onClick={() => { setGradFaculty(f); setIsGradFacultyOpen(false); }}

                                                className={`px-5 py-3 text-xs cursor-pointer hover:bg-slate-50 dark:hover:bg-blue-500/20 transition-colors ${gradFaculty === f ? 'bg-slate-100 dark:bg-[#89c5ff] text-[#001A41] dark:text-black font-bold dark:font-medium' : 'text-slate-600 dark:text-white font-medium dark:font-normal'}`}

                                            >

                                                {f}

                                            </div>

                                        ))}

                                    </div>

                                )}

                            </div>



                            <div className="relative w-full md:w-[300px] lg:w-[340px] shadow-sm dark:shadow-none">

                                <button

                                    onClick={() => { setIsGradPillarOpen(!isGradPillarOpen); setIsGradFacultyOpen(false); }}

                                    className="w-full flex items-center justify-between bg-white dark:bg-[#00172e] border border-slate-200 dark:border-white/20 rounded-full px-5 py-3 text-[13px] text-[#001A41] dark:text-white hover:border-[#D4AF37] dark:hover:border-white/40 transition-colors font-bold dark:font-normal"

                                >

                                    <span>{gradPillar}</span>

                                    <ChevronDown size={14} className="text-slate-400" />

                                </button>

                                {isGradPillarOpen && (

                                    <div className="absolute top-full left-0 mt-2 w-full bg-white dark:bg-[#000b18] border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden shadow-xl dark:shadow-2xl z-50 py-2">

                                        {["All Pillars", "International Joint Degrees", "Research Ethics", "Digital Transformation", "Industry Partnership"].map(p => (

                                            <div

                                                key={p}

                                                onClick={() => { setGradPillar(p); setIsGradPillarOpen(false); }}

                                                className={`px-5 py-3 text-xs cursor-pointer hover:bg-slate-50 dark:hover:bg-blue-500/20 transition-colors ${gradPillar === p ? 'bg-slate-100 dark:bg-[#89c5ff] text-[#001A41] dark:text-black font-bold dark:font-medium' : 'text-slate-600 dark:text-white font-medium dark:font-normal'}`}

                                            >

                                                {p}

                                            </div>

                                        ))}

                                    </div>

                                )}

                            </div>

                        </div>



                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 relative z-10">

                            <div className="bg-white dark:bg-gradient-to-br dark:from-[#021326] dark:to-[#010914] border border-slate-200 dark:border-white/10 rounded-2xl p-8 flex flex-col justify-between min-h-[300px] shadow-sm dark:shadow-lg group hover:shadow-md transition-shadow">

                                <div className="flex items-center gap-2">

                                    <span className="w-2 h-2 rounded-full bg-red-600 dark:bg-red-500 animate-pulse"></span>

                                    <span className="text-red-600 dark:text-red-500 text-[10px] font-bold tracking-widest uppercase">Live</span>

                                </div>

                                <div className="flex items-center justify-center flex-1">

                                    <div className="w-16 h-16 rounded-full border border-[#0B3C5D] dark:border-[#D4AF37] flex items-center justify-center cursor-pointer bg-slate-50 hover:bg-slate-100 dark:bg-transparent dark:hover:bg-[#D4AF37]/10 transition-colors shadow-sm dark:shadow-none">

                                        <Play size={20} className="text-[#0B3C5D] dark:text-[#D4AF37] ml-1" />

                                    </div>

                                </div>

                                <div>

                                    <h3 className="text-2xl font-serif font-bold dark:font-normal text-[#001A41] dark:text-white mb-2">Live Council Broadcast</h3>

                                    <p className="text-slate-600 dark:text-white/60 text-xs font-medium dark:font-light">Current Session: Global Research Synergies & Cross-Border Academic Funding</p>

                                </div>

                            </div>



                            <div className="bg-white dark:bg-gradient-to-br dark:from-[#021326] dark:to-[#010914] border border-slate-200 dark:border-[#D4AF37]/20 rounded-2xl p-8 flex flex-col min-h-[300px] shadow-sm dark:shadow-lg group hover:shadow-md transition-shadow">

                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-700 dark:from-blue-400 dark:to-indigo-600 flex items-center justify-center text-white mb-6 shadow-md transition-transform duration-700 group-hover:rotate-[360deg]">

                                    <Brain size={24} />

                                </div>

                                <div className="text-[#0B3C5D] dark:text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase mb-3">

                                    April 2026 <span className="text-slate-300 dark:text-white/30 mx-2">|</span> <span className="text-slate-600 dark:text-white">AU-AI-04</span>

                                </div>

                                <h3 className="text-xl font-serif font-bold dark:font-normal text-[#001A41] dark:text-white mb-4 leading-snug">AI Ethics Integration in Postgraduate Programs</h3>

                                <p className="text-slate-600 dark:text-white/60 text-[13px] font-medium dark:font-light leading-relaxed">

                                    Mandatory implementation of ethical AI modules and machine-learning frameworks across all Science and Engineering master's tracks.

                                </p>

                            </div>



                            <div className="bg-white dark:bg-gradient-to-br dark:from-[#021326] dark:to-[#010914] border border-slate-200 dark:border-[#D4AF37]/20 rounded-2xl p-8 flex flex-col min-h-[300px] shadow-sm dark:shadow-lg group hover:shadow-md transition-shadow">

                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-700 dark:from-yellow-400 dark:to-amber-600 flex items-center justify-center text-white mb-6 shadow-md transition-transform duration-700 group-hover:rotate-[360deg]">

                                    <Scale size={24} />

                                </div>

                                <div className="text-[#0B3C5D] dark:text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase mb-3">

                                    March 2026 <span className="text-slate-300 dark:text-white/30 mx-2">|</span> <span className="text-slate-600 dark:text-white">AU-PR-08</span>

                                </div>

                                <h3 className="text-xl font-serif font-bold dark:font-normal text-[#001A41] dark:text-white mb-4 leading-snug">Global Performance-Based Promotion System</h3>

                                <p className="text-slate-600 dark:text-white/60 text-[13px] font-medium dark:font-light leading-relaxed">

                                    Introducing alternative tracks for faculty promotion based on patent generation, industry technology transfer, and regional economic impact metrics.

                                </p>

                            </div>



                            <div className="bg-white dark:bg-gradient-to-br dark:from-[#021326] dark:to-[#010914] border border-slate-200 dark:border-[#D4AF37]/20 rounded-2xl p-8 flex flex-col min-h-[300px] shadow-sm dark:shadow-lg group hover:shadow-md transition-shadow">

                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 dark:from-emerald-400 dark:to-teal-600 flex items-center justify-center text-white mb-6 shadow-md transition-transform duration-700 group-hover:rotate-[360deg]">

                                    <BookOpen size={24} />

                                </div>

                                <div className="text-[#0B3C5D] dark:text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase mb-3">

                                    Nov 2025 <span className="text-slate-300 dark:text-white/30 mx-2">|</span> <span className="text-slate-600 dark:text-white">AU-DL-12</span>

                                </div>

                                <h3 className="text-xl font-serif font-bold dark:font-normal text-[#001A41] dark:text-white mb-4 leading-snug">National Digital Library Project with AI Integrity</h3>

                                <p className="text-slate-600 dark:text-white/60 text-[13px] font-medium dark:font-light leading-relaxed">

                                    Full synchronization of the Alexandria University local network with the Egyptian Knowledge Bank, featuring automated, real-time plagiarism detection.

                                </p>

                            </div>

                        </div>



                        <div className="w-full bg-white dark:bg-transparent border border-slate-200 dark:border-[#D4AF37]/30 rounded-[24px] p-8 mt-4 flex flex-col items-center shadow-sm dark:shadow-lg">

                            <h4 className="text-[#001A41] dark:text-[#D4AF37] font-serif font-bold dark:font-normal text-[22px] mb-14">Historical Timeline</h4>

                            <div className="relative w-full max-w-4xl mx-auto flex justify-between items-center px-4">

                                <div className="absolute top-[7px] left-6 right-6 h-[2px] dark:h-[1px] bg-slate-200 dark:bg-slate-600 z-0"></div>

                                <div className="relative flex flex-col items-center z-10">

                                    <div className="w-[15px] h-[15px] rounded-full bg-slate-300 dark:bg-slate-500"></div>

                                    <span className="absolute top-8 text-slate-500 dark:text-slate-400 text-xs font-bold dark:font-medium">2016</span>

                                </div>

                                <div className="relative flex flex-col items-center z-10">

                                    <div className="w-[15px] h-[15px] rounded-full bg-slate-300 dark:bg-slate-500"></div>

                                    <span className="absolute top-8 text-slate-500 dark:text-slate-400 text-xs font-bold dark:font-medium">2020</span>

                                </div>

                                <div className="relative flex flex-col items-center z-10">

                                    <div className="w-[15px] h-[15px] rounded-full bg-slate-300 dark:bg-slate-500"></div>

                                    <span className="absolute top-8 text-slate-500 dark:text-slate-400 text-xs font-bold dark:font-medium">2025</span>

                                </div>

                                <div className="relative flex flex-col items-center z-10">

                                    <div className="w-4 h-4 rounded-full bg-[#0B3C5D] dark:bg-[#D4AF37] shadow-[0_0_12px_rgba(11,60,93,0.5)] dark:shadow-[0_0_12px_rgba(212,175,55,0.8)] border-2 border-white dark:border-none"></div>

                                    <span className="absolute top-8 text-[#0B3C5D] dark:text-[#D4AF37] text-xs font-black dark:font-bold whitespace-nowrap">May 2026</span>

                                </div>

                            </div>

                            <div className="h-6"></div>

                        </div>

                    </div>

                ) : activePage === 'council_meetings' ? (

                    <div className="max-w-none w-full flex flex-col items-start text-left pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">

                        <div className="mb-10">

                            <button

                                onClick={() => setActivePage('hub')}

                                className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-[#001A41] dark:hover:text-[#D4AF37] transition-all duration-300 group cursor-pointer font-bold dark:font-medium p-0 bg-transparent border-none"

                            >

                                <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />

                                <span>Back to Administration Hub</span>

                            </button>

                        </div>



                        <div className="w-full flex flex-col items-start text-left mb-8">

                            <h2 className="text-4xl md:text-5xl font-serif font-bold dark:font-normal text-[#001A41] dark:text-white mb-3">

                                Research Intelligence Hub

                            </h2>

                            <p className="text-[#0B3C5D] dark:text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase">

                                GRADUATE STUDIES & RESEARCH SECTOR

                            </p>

                        </div>



                        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">

                            <div className="lg:col-span-8 bg-white dark:bg-gradient-to-br dark:from-[#c6a355] dark:via-[#816832] dark:to-[#252a36] rounded-[32px] p-6 lg:p-8 flex flex-col shadow-sm dark:shadow-2xl relative border border-slate-200 dark:border-none">

                                <div className="flex justify-between items-center mb-6">

                                    <h3 className="text-2xl font-serif font-bold dark:font-normal text-[#001A41] dark:text-white/90">Live Council Broadcast</h3>

                                    <div className="bg-red-50 dark:bg-red-500/20 border border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider flex items-center gap-2">

                                        <span className="w-2 h-2 rounded-full bg-red-600 dark:bg-red-500 animate-pulse"></span> LIVE

                                    </div>

                                </div>



                                <div className="flex-1 w-full bg-slate-50 dark:bg-[#030b17] rounded-2xl border border-slate-200 dark:border-white/10 relative overflow-hidden min-h-[350px] lg:min-h-[450px] flex flex-col justify-end p-8 shadow-inner dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-[#0a192f] dark:to-[#030b17]">

                                    <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

                                        <div className="w-20 h-20 rounded-full border-2 border-[#0B3C5D] dark:border-[#D4AF37]/50 flex items-center justify-center cursor-pointer bg-white dark:bg-transparent hover:bg-slate-100 dark:hover:bg-[#D4AF37]/10 transition-colors pointer-events-auto group shadow-md dark:shadow-none">

                                            <Play size={32} className="text-[#0B3C5D] dark:text-[#D4AF37] ml-2 group-hover:scale-110 transition-transform" />

                                        </div>

                                    </div>

                                    <div className="relative z-10 bg-white/90 dark:bg-transparent p-4 dark:p-0 rounded-xl dark:rounded-none shadow-sm dark:shadow-none border border-slate-200 dark:border-none backdrop-blur-sm">

                                        <p className="text-slate-500 dark:text-white/60 text-[10px] font-bold tracking-widest uppercase mb-2">Active Agenda:</p>

                                        <p className="text-[#001A41] dark:text-[#D4AF37] text-lg font-serif font-bold dark:font-normal">Global Research Protocols & Strategic Expansion</p>

                                    </div>

                                </div>

                            </div>



                            <div className="lg:col-span-4 bg-white dark:bg-gradient-to-br dark:from-[#c6a355] dark:via-[#816832] dark:to-[#252a36] rounded-[32px] p-6 lg:p-8 flex flex-col items-center text-center shadow-sm dark:shadow-2xl relative overflow-hidden border border-slate-200 dark:border-none">

                                <p className="text-[#0B3C5D] dark:text-[#ffe9a6] text-[10px] font-bold tracking-widest uppercase mb-8 w-full text-left">Sector Leadership</p>

                                <div className="w-24 h-24 rounded-full border-[3px] border-slate-100 dark:border-[#030b17]/20 mb-5 overflow-hidden shadow-sm dark:shadow-xl">

                                    <img src="/imgs/Hesham Saeed.jpg" alt="Prof. Dr. Hesham Saeed" className="w-full h-full object-cover" />

                                </div>

                                <h4 className="text-xl font-serif font-bold dark:font-normal text-[#001A41] dark:text-[#ffe9a6] mb-2">Prof. Dr. Hesham Saeed</h4>

                                <p className="text-slate-600 dark:text-white/90 text-xs font-bold dark:font-light mb-8 px-2">Vice President for Graduate Studies & Research</p>

                                <div className="w-full flex flex-col gap-4 mt-auto">

                                    <div className="bg-slate-50 dark:bg-white/10 border border-slate-200 dark:border-white/20 rounded-2xl p-5 text-left backdrop-blur-sm">

                                        <p className="text-slate-500 dark:text-white/60 text-[10px] font-bold uppercase tracking-wider mb-1">Research Grants</p>

                                        <p className="text-[#001A41] dark:text-white text-lg font-black dark:font-semibold">120+ Active Projects</p>

                                    </div>

                                    <div className="bg-slate-50 dark:bg-white/10 border border-slate-200 dark:border-white/20 rounded-2xl p-5 text-left backdrop-blur-sm">

                                        <p className="text-slate-500 dark:text-white/60 text-[10px] font-bold uppercase tracking-wider mb-1">Doctoral Programs</p>

                                        <p className="text-[#001A41] dark:text-white text-lg font-black dark:font-semibold">850+ PhD Candidates</p>

                                    </div>

                                </div>

                            </div>

                        </div>



                        <div className="w-full bg-white dark:bg-transparent border border-slate-200 dark:border-[#D4AF37]/30 rounded-[28px] p-6 lg:p-8 flex flex-col mb-10 shadow-sm dark:shadow-none">

                            <p className="text-[#0B3C5D] dark:text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase mb-6">Archive Filters</p>

                            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">

                                <div className="relative flex items-center bg-slate-50 dark:bg-[#00172e]/50 border border-slate-200 dark:border-[#D4AF37]/30 rounded-xl px-5 py-4 w-full hover:border-[#0B3C5D] dark:hover:border-[#D4AF37]/60 transition-colors shadow-sm dark:shadow-none">

                                    <Search size={16} className="text-[#0B3C5D] dark:text-[#D4AF37] mr-3 opacity-70" />

                                    <input

                                        type="text"

                                        placeholder="Search by Faculty Name"

                                        className="bg-transparent border-none outline-none text-[#001A41] dark:text-white text-sm w-full font-bold dark:font-light placeholder:text-slate-400 dark:placeholder:text-slate-500"

                                    />

                                </div>

                                <div className="relative flex items-center bg-slate-50 dark:bg-[#00172e]/50 border border-slate-200 dark:border-[#D4AF37]/30 rounded-xl px-5 py-4 w-full hover:border-[#0B3C5D] dark:hover:border-[#D4AF37]/60 transition-colors shadow-sm dark:shadow-none">

                                    <div className="mr-3 opacity-70 text-[#0B3C5D] dark:text-[#D4AF37]"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg></div>

                                    <input

                                        type="text"

                                        placeholder="Filter by Topic"

                                        className="bg-transparent border-none outline-none text-[#001A41] dark:text-white text-sm w-full font-bold dark:font-light placeholder:text-slate-400 dark:placeholder:text-slate-500"

                                    />

                                </div>

                                <div className="relative flex items-center justify-between bg-slate-50 dark:bg-[#00172e]/50 border border-slate-200 dark:border-[#D4AF37]/30 rounded-xl px-5 py-4 w-full hover:border-[#0B3C5D] dark:hover:border-[#D4AF37]/60 transition-colors cursor-pointer group z-50 shadow-sm dark:shadow-none">

                                    <div className="flex items-center">

                                        <Calendar size={16} className="text-[#0B3C5D] dark:text-[#D4AF37] mr-3 opacity-70" />

                                        <span className="text-[#001A41] dark:text-white text-sm font-bold dark:font-light">{timelineYear === 2026 && activePage === 'council_meetings' ? "Council Date Range" : timelineYear}</span>

                                    </div>

                                    <ChevronDown size={16} className="text-slate-400 group-hover:text-[#001A41] dark:group-hover:text-white transition-colors" />

                                    <div className="absolute top-full left-0 mt-2 w-full bg-white border border-slate-200 dark:border-white/10 rounded-lg overflow-hidden shadow-xl dark:shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

                                        <div className="px-5 py-3 text-sm bg-slate-100 dark:bg-[#93c5fd] text-[#001A41] dark:text-black font-bold dark:font-medium transition-colors border-b border-slate-200 dark:border-none">

                                            Council Date Range

                                        </div>

                                        {["2026", "2025", "2024", "2016"].map((opt, i) => (

                                            <div

                                                key={i}

                                                onClick={() => setTimelineYear(parseInt(opt))}

                                                className="px-5 py-3 text-sm text-slate-600 dark:text-slate-800 hover:bg-slate-50 dark:hover:bg-slate-100 transition-colors font-semibold dark:font-normal"

                                            >

                                                {opt}

                                            </div>

                                        ))}

                                    </div>

                                </div>

                            </div>

                        </div>



                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

                            {filteredArchiveVideos.map((video, idx) => (

                                <div key={idx} className="group relative flex flex-col bg-white dark:bg-[#0b162c] border border-slate-200 dark:border-[#D4AF37]/20 rounded-2xl overflow-hidden hover:border-slate-300 dark:hover:border-[#D4AF37]/60 transition-all duration-300 shadow-sm dark:shadow-lg hover:shadow-lg min-h-[320px]">

                                    <div className="h-44 w-full relative flex items-center justify-center transition-colors duration-500" style={{ backgroundColor: video.color }}>

                                        <div className="absolute top-4 right-4 bg-white/90 dark:bg-[#000d1a]/60 backdrop-blur-md px-3 py-1 rounded-full text-[#001A41] dark:text-white text-[10px] font-bold shadow-sm">

                                            {video.date}

                                        </div>

                                        <div className="w-14 h-14 rounded-full border border-white/40 dark:border-white/30 flex items-center justify-center text-white/70 dark:text-white/50 group-hover:bg-white/20 dark:group-hover:bg-white/10 group-hover:text-white group-hover:border-white transition-all duration-300 shadow-md dark:shadow-none backdrop-blur-sm">

                                            <Play size={24} className="ml-1" />

                                        </div>

                                    </div>

                                    <div className="p-6 pb-16 flex flex-col flex-1 bg-white dark:bg-[#101b33] relative">

                                        <div className="flex items-center gap-2 mb-3">

                                            <div className="w-5 h-5 rounded bg-slate-100 dark:bg-[#D4AF37]/20 text-[#001A41] dark:text-[#D4AF37] flex items-center justify-center text-[10px] font-black dark:font-bold shrink-0">

                                                {video.initial}

                                            </div>

                                            <p className="text-slate-500 dark:text-[#D4AF37] text-[9px] font-bold tracking-widest uppercase truncate">{video.category}</p>

                                        </div>

                                        <h3 className="text-[#001A41] dark:text-white text-sm font-bold dark:font-medium leading-relaxed line-clamp-3 mb-2 transition-opacity duration-300 group-hover:-translate-y-2">{video.title}</h3>

                                        <div className="absolute bottom-6 left-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">

                                            <button className="w-full bg-[#001A41] dark:bg-[#464835] border border-[#001A41] dark:border-[#D4AF37]/50 text-white dark:text-[#D4AF37] py-2.5 rounded-lg text-xs font-bold dark:font-semibold hover:bg-[#0B3C5D] dark:hover:bg-[#585940] transition-colors shadow-md dark:shadow-lg">

                                                View Details

                                            </button>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>



                        <div className="w-full bg-white dark:bg-[#020b1a] border border-slate-200 dark:border-[#D4AF37]/40 rounded-xl p-6 lg:p-8 mt-4 flex flex-col shadow-sm dark:shadow-lg">

                            <div className="flex items-center gap-3 mb-14">

                                <Clock size={18} className="text-[#0B3C5D] dark:text-[#D4AF37]" />

                                <h4 className="text-[#001A41] dark:text-[#D4AF37] font-bold text-xs tracking-widest uppercase">Time-Machine Chronology</h4>

                            </div>

                            <div className="relative w-full max-w-5xl mx-auto flex justify-between items-center px-2">

                                <div className="absolute top-1/2 left-2 right-2 h-[2px] bg-slate-200 dark:bg-[#1a2b4c] -translate-y-1/2 z-0">

                                    <div

                                        className="h-full bg-[#001A41] dark:bg-[#D4AF37] transition-all duration-500"

                                        style={{ width: progressWidth }}

                                    ></div>

                                </div>

                                {timelineYears.map((year) => {

                                    const isActive = year === timelineYear;

                                    const isPast = year < timelineYear;

                                    return (

                                        <div

                                            key={year}

                                            className="relative flex flex-col items-center z-10 cursor-pointer group"

                                            onClick={() => setTimelineYear(year)}

                                        >

                                            <div className={`transition-all duration-300 rounded-full flex items-center justify-center ${

                                                isActive

                                                    ? 'w-[14px] h-[14px] bg-[#001A41] dark:bg-[#D4AF37] shadow-[0_0_12px_rgba(0,26,65,0.4)] dark:shadow-[0_0_12px_rgba(212,175,55,0.8)] border-2 border-white dark:border-none'

                                                    : isPast

                                                        ? 'w-[14px] h-[14px] border-[2px] border-[#001A41] dark:border-[#D4AF37] bg-white dark:bg-[#020b1a] group-hover:bg-slate-100 dark:group-hover:bg-[#D4AF37]/20'

                                                        : 'w-[14px] h-[14px] border-[2px] border-slate-300 dark:border-slate-600 bg-white dark:bg-[#020b1a] group-hover:border-slate-400 dark:group-hover:border-slate-500'

                                            }`}></div>

                                            <div className="absolute top-8 flex flex-col items-center w-40">

                                                <span className={`text-[13px] font-black dark:font-bold transition-colors ${isActive ? 'text-[#001A41] dark:text-[#D4AF37]' : isPast ? 'text-slate-700 dark:text-white' : 'text-slate-400 dark:text-slate-500'}`}>

                                                    {year}

                                                </span>

                                                {year === 2016 && (

                                                    <span className={`text-[10px] font-bold dark:font-medium whitespace-nowrap mt-1.5 ${isActive || isPast ? 'text-[#0B3C5D] dark:text-[#D4AF37]' : 'text-slate-400 dark:text-slate-600'}`}>

                                                        Dr. Seddik Celebration

                                                    </span>

                                                )}

                                            </div>

                                        </div>

                                    );

                                })}

                            </div>

                            <div className="h-10"></div>

                        </div>

                    </div>

                ) : activePage === 'community_service' ? (

                    <div className="max-w-7xl mx-auto pb-20 w-full flex flex-col items-start text-left animate-in fade-in slide-in-from-bottom-4 duration-500">

                        {!activeCommunityItem && (

                            <div className="w-full flex justify-start mb-10">

                                <button

                                    onClick={() => setActivePage('hub')}

                                    className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-[#001A41] dark:hover:text-[#4FD1C5] transition-all duration-300 group cursor-pointer font-bold dark:font-medium p-0 bg-transparent border-none"

                                >

                                    <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />

                                    <span>Back to Administration Hub</span>

                                </button>

                            </div>

                        )}



                        {!activeCommunityItem ? (

                            <>

                                <div className="w-full flex flex-col items-start mb-16">

                                    <h2 className="text-[26px] md:text-4xl lg:text-[46px] font-serif font-bold dark:font-normal text-[#001A41] dark:text-[#5ab8a0] tracking-tight dark:tracking-wide mb-10 whitespace-normal md:whitespace-nowrap">

                                        Community Service & Environmental Development

                                    </h2>

                                    <div className="w-full flex flex-col md:flex-row md:items-end">

                                        <div className="shrink-0 pr-6">

                                            <p className="text-slate-500 dark:text-slate-400 text-sm font-bold dark:font-medium mb-2 uppercase tracking-wider">Sector Leadership</p>

                                            <p className="text-xl md:text-[22px] text-[#0B3C5D] dark:text-[#5ab8a0] font-serif tracking-wide font-bold dark:font-normal">Prof. Dr. Affaf Al-Oufy</p>

                                        </div>

                                        <div className="flex-1 border-b border-slate-200 dark:border-[#5ab8a0]/30 mb-2 mt-4 md:mt-0"></div>

                                        <div className="shrink-0 md:pl-6 flex items-center gap-2 text-[#001A41] dark:text-white font-bold dark:font-medium mb-1 mt-4 md:mt-0 bg-slate-50 dark:bg-transparent px-3 py-1.5 dark:p-0 rounded-lg dark:rounded-none border border-slate-200 dark:border-none">

                                            <Recycle size={18} className="text-[#0B3C5D] dark:text-[#5ab8a0]" />

                                            <span className="whitespace-nowrap">Egypt Vision 2030</span>

                                        </div>

                                    </div>

                                </div>



                                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                                    {communityCardsData.map((item, idx) => (

                                        <div

                                            key={idx}

                                            onClick={() => setActiveCommunityItem(item)}

                                            className="relative overflow-hidden bg-white dark:bg-gradient-to-br dark:from-[#2a5a52]/40 dark:to-[#132d28]/60 backdrop-blur-md border border-slate-200 dark:border-[#5ab8a0]/20 rounded-2xl p-8 transition-all duration-300 group shadow-sm dark:shadow-lg min-h-[220px] flex flex-col justify-start cursor-pointer hover:border-[#0B3C5D] dark:hover:border-[#5ab8a0]/50 hover:shadow-md hover:-translate-y-1"

                                        >

                                            <div className="absolute top-0 right-0 p-6 z-10 flex justify-end w-full">

                                                {idx !== 1 && (

                                                    <div className="text-[#001A41] dark:text-[#5ab8a0]/60 text-[10px] font-black dark:font-bold uppercase tracking-widest bg-slate-100 dark:bg-[#5ab8a0]/10 px-3 py-1 rounded-full border border-slate-200 dark:border-[#5ab8a0]/20">

                                                        Strategic

                                                    </div>

                                                )}

                                            </div>

                                            <div className="absolute top-8 left-8 text-[#0B3C5D] dark:text-[#5ab8a0] opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 group-hover:scale-110 transition-all duration-500 pointer-events-none origin-top-left">

                                                {React.cloneElement(item.icon as React.ReactElement, { size: 64 } as any)}

                                            </div>

                                            <div className="relative z-20 mt-6">

                                                <h3 className="text-[19px] font-serif font-bold dark:font-normal text-[#001A41] dark:text-white mb-3 group-hover:text-[#0B3C5D] dark:group-hover:text-[#5ab8a0] transition-colors">{item.title}</h3>

                                                <p className="text-slate-600 dark:text-slate-300 text-[13px] font-medium dark:font-light leading-relaxed">{item.desc}</p>

                                            </div>

                                        </div>

                                    ))}

                                </div>

                            </>

                        ) : (

                            <div className="w-full bg-white dark:bg-[#05231c] rounded-[32px] p-8 md:p-12 relative border border-slate-200 dark:border-[#5ab8a0]/20 shadow-xl dark:shadow-2xl min-h-[600px] animate-in fade-in zoom-in duration-300 flex flex-col items-start text-left">

                                <button

                                    onClick={() => setActiveCommunityItem(null)}

                                    className="absolute top-6 right-6 md:top-8 md:right-8 border border-slate-200 dark:border-[#5ab8a0]/30 text-slate-600 dark:text-[#5ab8a0] hover:text-[#001A41] dark:hover:text-white px-4 md:px-6 py-2 rounded-xl text-sm hover:bg-slate-50 dark:hover:bg-[#5ab8a0]/10 transition-colors font-bold dark:font-medium shadow-sm dark:shadow-none"

                                >

                                    Close

                                </button>

                                <div className="w-16 h-16 bg-slate-50 dark:bg-[#123d33] rounded-2xl flex items-center justify-center text-[#0B3C5D] dark:text-[#5ab8a0] mb-8 shadow-inner border border-slate-200 dark:border-[#5ab8a0]/10 mt-8 md:mt-0">

                                    {activeCommunityItem.icon}

                                </div>

                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold dark:font-normal text-[#001A41] dark:text-[#5ab8a0] mb-6 leading-tight">{activeCommunityItem.title}</h2>

                                <p className="text-slate-600 dark:text-white font-semibold dark:font-medium text-[15px] mb-8 max-w-3xl leading-relaxed">

                                    {activeCommunityItem.desc}

                                </p>

                                {activeCommunityItem.badge && (

                                    <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-[#123d33] text-[#001A41] dark:text-[#5ab8a0] px-4 py-2.5 rounded-lg text-xs font-black dark:font-bold uppercase tracking-wider mb-12 shadow-sm border border-slate-200 dark:border-[#5ab8a0]/10">

                                        <TrendingUp size={16} /> {activeCommunityItem.badge}

                                    </div>

                                )}

                                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">

                                    {[1, 2, 3, 4].map((num) => (

                                        <div key={num} className="border border-slate-200 dark:border-[#5ab8a0]/20 bg-slate-50 dark:bg-[#0d362d] rounded-2xl p-8 hover:border-slate-300 dark:hover:border-[#5ab8a0]/40 hover:shadow-md transition-all">

                                            <h4 className="text-[#0B3C5D] dark:text-[#5ab8a0] font-bold dark:font-medium mb-3 text-[15px]">Key Initiative {num}</h4>

                                            <p className="text-slate-600 dark:text-slate-300 text-[13px] leading-relaxed font-medium dark:font-light">

                                                Detailed information about this specific program or initiative within the {activeCommunityItem.title.toLowerCase()} sector.

                                            </p>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        )}

                    </div>

                ) : activePage === 'secretary_general' ? (

                    <div className="max-w-[1400px] mx-auto w-full flex flex-col items-start text-left pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">

                        {!activeDeptItem && !activeNewsItem && (

                            <div className="mb-6 w-full">

                                <button

                                    onClick={() => setActivePage('hub')}

                                    className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-[#001A41] dark:hover:text-[#D4AF37] transition-all duration-300 group cursor-pointer font-bold dark:font-medium p-0 bg-transparent border-none"

                                >

                                    <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />

                                    <span>Back to Dashboard</span>

                                </button>

                            </div>

                        )}



                        {activeNewsItem ? (

                            <div className="w-full flex flex-col items-start text-left animate-in fade-in zoom-in duration-300">

                                <div className="w-full flex justify-start mb-10">

                                    <button

                                        onClick={() => setActiveNewsItem(null)}

                                        className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-[#001A41] dark:hover:text-[#D4AF37] transition-all duration-300 group cursor-pointer font-bold dark:font-medium p-0 bg-transparent border-none"

                                    >

                                        <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />

                                        <span>Back to Secretary General Sector</span>

                                    </button>

                                </div>

                                <div className="w-full bg-white dark:bg-transparent border border-slate-200 dark:border-[#D4AF37]/50 rounded-[24px] p-6 lg:p-8 relative overflow-hidden shadow-sm dark:shadow-none">

                                    <div className="flex items-center gap-4 mb-8">

                                        <div className="border border-slate-200 dark:border-[#D4AF37]/50 rounded-2xl px-4 py-2 bg-slate-50 dark:bg-[#001A33]/50 text-center min-w-[70px] shadow-inner">

                                            <span className="text-[#001A41] dark:text-[#D4AF37] text-[10px] font-black dark:font-bold block mb-0.5 uppercase">{activeNewsItem.date.month}</span>

                                            <span className="text-[#0B3C5D] dark:text-[#D4AF37] text-2xl font-black leading-none">{activeNewsItem.date.day}</span>

                                        </div>

                                        <div className="flex flex-col gap-1.5">

                                            <div className="text-[#0B3C5D] dark:text-[#89c5ff] text-[11px] font-bold tracking-widest flex items-center gap-1.5">

                                                Created: {activeNewsItem.created || "20 February 2024"}

                                            </div>

                                            <div className="text-slate-500 text-xs flex items-center gap-1.5 font-bold dark:font-medium">

                                                <BarChart2 size={14} className="text-slate-500" /> {activeNewsItem.hits} hits

                                            </div>

                                        </div>

                                    </div>

                                    <h2 className="text-xl md:text-2xl font-serif font-bold dark:font-normal text-[#001A41] dark:text-[#D4AF37] mb-8 leading-snug max-w-4xl">

                                        {activeNewsItem.fullTitle || activeNewsItem.title}

                                    </h2>

                                    {activeNewsItem.images && activeNewsItem.images.length > 0 && (

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 w-full">

                                            {activeNewsItem.images.map((img: string, i: number) => (

                                                <div key={i} className="rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden h-48 md:h-80 bg-slate-100 dark:bg-[#001A33]/50 shadow-md">

                                                    <img src={img} alt="News Illustration" className="w-full h-full object-cover" />

                                                </div>

                                            ))}

                                        </div>

                                    )}

                                    {activeNewsItem.fullText ? (

                                        <div className="flex flex-col gap-6 text-slate-700 dark:text-white/90 text-[13px] md:text-[14px] font-medium dark:font-light leading-relaxed">

                                            {activeNewsItem.fullText.map((paragraph: string, i: number) => (

                                                <p key={i}>{paragraph}</p>

                                            ))}

                                        </div>

                                    ) : (

                                        <p className="text-slate-600 dark:text-slate-300 text-[14px] font-medium dark:font-light leading-relaxed">The Board of Trustees of Faculties and Institutes of Alexandria University directed the necessity of optimal use of the budget for the fiscal year 2024/2025, emphasizing transparency and accountability in all financial dealings across faculties and institutes.</p>

                                    )}

                                </div>

                            </div>

                        ) : activeDeptItem ? (

                            // ── FIXED: activeDeptItem detail view (was missing, causing the build error) ──
                            <div className="w-full flex flex-col items-start text-left animate-in fade-in zoom-in duration-300">

                                <div className="w-full flex justify-start mb-10">

                                    <button

                                        onClick={() => setActiveDeptItem(null)}

                                        className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-[#001A41] dark:hover:text-[#D4AF37] transition-all duration-300 group cursor-pointer font-bold dark:font-medium p-0 bg-transparent border-none"

                                    >

                                        <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />

                                        <span>Back to Secretary General Sector</span>

                                    </button>

                                </div>

                                <div className="w-full bg-white dark:bg-transparent border border-slate-200 dark:border-[#D4AF37]/50 rounded-[24px] p-6 lg:p-8 shadow-sm dark:shadow-none">

                                    <div className="flex items-center gap-3 mb-8">

                                        <div className="text-[#0B3C5D] dark:text-[#D4AF37]">{activeDeptItem.icon}</div>

                                        <h2 className="text-2xl md:text-3xl font-serif font-bold dark:font-normal text-[#001A41] dark:text-[#D4AF37]">

                                            {activeDeptItem.title}

                                        </h2>

                                    </div>

                                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">

                                        {activeDeptItem.tasks.map((task: string, i: number) => (

                                            <div key={i} className="border border-slate-200 dark:border-[#D4AF37]/20 bg-slate-50 dark:bg-[#001A33]/50 rounded-2xl p-6 hover:border-slate-300 dark:hover:border-[#D4AF37]/40 hover:shadow-md transition-all">

                                                <h4 className="text-[#0B3C5D] dark:text-[#D4AF37] font-bold dark:font-medium mb-3 text-[15px]">{task}</h4>

                                                <p className="text-slate-600 dark:text-slate-300 text-[13px] leading-relaxed font-medium dark:font-light">

                                                    Detailed administrative responsibilities related to {task.toLowerCase()} within this department.

                                                </p>

                                            </div>

                                        ))}

                                    </div>

                                </div>

                            </div>

                        ) : (

                            <>

                                <div className="w-full bg-white dark:bg-[#001124] border border-slate-200 dark:border-[#D4AF37]/30 rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row justify-between mb-8 shadow-sm dark:shadow-2xl relative overflow-hidden">

                                    <div className="flex flex-col z-10 w-full lg:w-2/3">

                                        <div className="flex items-center gap-2 mb-4">

                                            <div className="w-1 h-4 bg-[#0B3C5D] dark:bg-[#D4AF37]"></div>

                                            <span className="text-[#0B3C5D] dark:text-[#D4AF37] text-[10px] font-black dark:font-bold tracking-widest uppercase">University Secretary General Sector</span>

                                        </div>

                                        <h1 className="text-4xl lg:text-5xl font-serif font-bold dark:font-normal text-[#001A41] dark:text-[#D4AF37] mb-8">Office of the Secretary General</h1>

                                        <div className="flex flex-col gap-6 mb-10">

                                            <div className="flex items-start gap-4">

                                                <div className="mt-1 w-6 h-6 rounded bg-slate-100 dark:bg-[#D4AF37]/10 flex items-center justify-center text-[#0B3C5D] dark:text-[#D4AF37] border border-slate-200 dark:border-[#D4AF37]/20 shrink-0">

                                                    <UserCog size={12} />

                                                </div>

                                                <div>

                                                    <p className="text-[#0B3C5D] dark:text-[#D4AF37] text-xs font-black dark:font-semibold uppercase tracking-wider mb-1">University General Secretary</p>

                                                    <p className="text-[#001A41] dark:text-white text-base font-bold dark:font-normal">Mr. Mohamed Fathi Abu Al-Nassar</p>

                                                </div>

                                            </div>

                                            <div className="flex items-start gap-4">

                                                <div className="mt-1 w-6 h-6 rounded bg-slate-100 dark:bg-[#D4AF37]/10 flex items-center justify-center text-[#0B3C5D] dark:text-[#D4AF37] border border-slate-200 dark:border-[#D4AF37]/20 shrink-0">

                                                    <UserCog size={12} />

                                                </div>

                                                <div>

                                                    <p className="text-[#0B3C5D] dark:text-[#D4AF37] text-xs font-black dark:font-semibold uppercase tracking-wider mb-1">Acting Assistant Secretary for Financial Affairs</p>

                                                    <p className="text-[#001A41] dark:text-white text-base font-bold dark:font-normal">Mr. Mohamed Desouky Hassan Desouky</p>

                                                </div>

                                            </div>

                                            <div className="flex items-start gap-4">

                                                <div className="mt-1 w-6 h-6 rounded bg-slate-100 dark:bg-[#D4AF37]/10 flex items-center justify-center text-[#0B3C5D] dark:text-[#D4AF37] border border-slate-200 dark:border-[#D4AF37]/20 shrink-0">

                                                    <UserCog size={12} />

                                                </div>

                                                <div>

                                                    <p className="text-[#0B3C5D] dark:text-[#D4AF37] text-xs font-black dark:font-semibold uppercase tracking-wider mb-1">University's Assistant Secretary for Administrative Affairs</p>

                                                </div>

                                            </div>

                                        </div>

                                        <div className="flex flex-wrap items-center gap-6 border-t border-slate-200 dark:border-white/10 pt-6">

                                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm font-semibold dark:font-normal">

                                                <Mail size={16} className="text-[#0B3C5D] dark:text-[#D4AF37]" />

                                                <span>Gen.Secret@alexu.edu.eg</span>

                                            </div>

                                            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm font-semibold dark:font-normal">

                                                <Phone size={16} className="text-[#0B3C5D] dark:text-[#D4AF37]" />

                                                <span>03 5921676 / 5921677 / 5921678</span>

                                            </div>

                                        </div>

                                    </div>



                                    <div className="mt-8 lg:mt-0 flex flex-col items-end lg:items-center z-10 shrink-0">

                                        <div className="bg-slate-50 dark:bg-[#D4AF37]/10 border border-slate-200 dark:border-[#D4AF37]/30 text-[#001A41] dark:text-[#D4AF37] px-4 py-1.5 rounded-md text-[10px] font-black dark:font-bold tracking-widest uppercase mb-4 shadow-sm backdrop-blur-sm flex items-center gap-2">

                                            <Award size={12} className="text-[#D4AF37]" /> ISO 9001:2015 Certified Quality

                                        </div>

                                        <div className="w-40 h-48 border border-slate-200 dark:border-[#D4AF37]/30 rounded-xl overflow-hidden mb-4 bg-slate-100 dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent flex items-center justify-center shadow-sm dark:shadow-none">

                                            <img src="/imgs/Mohamed Fathy.jpg" alt="Secretary General" className="w-full h-full object-cover" />

                                        </div>

                                        <div className="border border-[#001A41] dark:border-[#D4AF37]/40 text-[#001A41] dark:text-[#D4AF37] bg-white dark:bg-transparent px-6 py-2 rounded-full text-xs font-bold dark:font-medium tracking-wide uppercase shadow-sm dark:shadow-none">

                                            Secretary General

                                        </div>

                                    </div>

                                </div>



                                <div className="w-full bg-white dark:bg-[#001124] border border-slate-200 dark:border-[#D4AF37]/30 rounded-xl p-5 flex items-center justify-between mb-10 cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 transition-colors group shadow-sm dark:shadow-lg">

                                    <div className="flex items-center gap-4">

                                        <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-[#D4AF37]/10 flex items-center justify-center text-[#0B3C5D] dark:text-[#D4AF37] border border-slate-200 dark:border-[#D4AF37]/20 group-hover:bg-slate-200 dark:group-hover:bg-[#D4AF37]/20 transition-colors">

                                            <Lock size={16} />

                                        </div>

                                        <div>

                                            <p className="text-[#0B3C5D] dark:text-[#D4AF37] text-[10px] font-black dark:font-bold uppercase tracking-widest mb-0.5">SECOND</p>

                                            <h3 className="text-[#001A41] dark:text-white font-bold dark:font-medium text-lg">Organizational Structure</h3>

                                        </div>

                                    </div>

                                    <ChevronDown size={20} className="text-slate-400 group-hover:text-[#001A41] dark:group-hover:text-white transition-colors" />

                                </div>



                                <h3 className="text-[#001A41] dark:text-[#D4AF37] font-bold dark:font-semibold text-lg mb-4">Affiliated Departments</h3>

                                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">

                                    {secGenDepts.map((dept, idx) => (

                                        <div

                                            key={idx}

                                            onClick={() => setActiveDeptItem(dept)}

                                            className="bg-white dark:bg-[#001124] border border-slate-200 dark:border-[#D4AF37]/20 hover:border-[#0B3C5D] dark:hover:border-[#D4AF37]/50 rounded-xl p-5 flex flex-col justify-between min-h-[100px] group transition-colors cursor-pointer shadow-sm dark:shadow-md hover:shadow-md"

                                        >

                                            <div className="flex items-start gap-3 mb-4">

                                                <div className="text-[#0B3C5D] dark:text-[#D4AF37] shrink-0 mt-0.5 opacity-70 group-hover:opacity-100">{dept.icon}</div>

                                                <p className="text-[#001A41] dark:text-white text-sm font-bold dark:font-medium leading-snug">{dept.title}</p>

                                            </div>

                                            <div className="text-[#0B3C5D] dark:text-[#D4AF37] text-xs font-bold dark:font-semibold flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">

                                                View Tasks <ArrowRight size={12} />

                                            </div>

                                        </div>

                                    ))}

                                </div>



                                <div className="w-full flex items-center justify-between mb-6">

                                    <h3 className="text-[#001A41] dark:text-[#D4AF37] font-bold dark:font-semibold text-xl">Latest News</h3>

                                    <div className="flex items-center gap-3">

                                        <button

                                            onClick={() => setNewsIndex(Math.max(0, newsIndex - 1))}

                                            disabled={newsIndex === 0}

                                            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${newsIndex === 0 ? 'border-slate-200 dark:border-white/10 text-slate-300 dark:text-white/30 cursor-not-allowed bg-slate-50 dark:bg-transparent' : 'border-[#0B3C5D] dark:border-[#D4AF37]/50 text-[#0B3C5D] dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 cursor-pointer bg-white dark:bg-transparent'}`}

                                        >

                                            <ChevronLeft size={16} />

                                        </button>

                                        <button

                                            onClick={() => setNewsIndex(Math.min(maxNewsIndex, newsIndex + 1))}

                                            disabled={newsIndex >= maxNewsIndex}

                                            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${newsIndex >= maxNewsIndex ? 'border-slate-200 dark:border-white/10 text-slate-300 dark:text-white/30 cursor-not-allowed bg-slate-50 dark:bg-transparent' : 'border-[#001A41] dark:border-white/40 text-[#001A41] dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 cursor-pointer bg-white dark:bg-transparent'}`}

                                        >

                                            <ChevronRight size={16} />

                                        </button>

                                    </div>

                                </div>



                                <div className="w-full overflow-hidden mb-4">

                                    <div

                                        className="flex transition-transform duration-500 ease-in-out -mx-2"

                                        style={{ transform: `translateX(calc(-${newsIndex * (100 / 3)}%))` }}

                                    >

                                        {secGenNews.map((news, idx) => (

                                            <div key={idx} className="w-full md:w-1/3 shrink-0 px-2">

                                                <div className="bg-white dark:bg-[#001124] border border-slate-200 dark:border-white/5 hover:border-[#0B3C5D] dark:hover:border-[#D4AF37]/30 rounded-2xl p-6 h-full flex flex-col cursor-pointer transition-all duration-300 group min-h-[160px] shadow-sm hover:shadow-md">

                                                    <div className="flex items-center gap-4 mb-6">

                                                        <div className="border border-slate-200 dark:border-[#D4AF37]/40 rounded-2xl px-4 py-2 bg-slate-50 dark:bg-[#001A33]/50 text-center min-w-[60px] shadow-inner dark:shadow-none">

                                                            <span className="text-[#0B3C5D] dark:text-[#D4AF37] text-[10px] font-black dark:font-bold block mb-0.5 uppercase">{news.date.month}</span>

                                                            <span className="text-[#001A41] dark:text-[#D4AF37] text-2xl font-black leading-none">{news.date.day}</span>

                                                        </div>

                                                        <div className="text-slate-500 text-xs flex items-center gap-1.5 font-bold dark:font-medium">

                                                            <BarChart2 size={14} className="text-slate-500 dark:text-slate-600" /> {news.hits} hits

                                                        </div>

                                                    </div>

                                                    <p className="text-[#001A41] dark:text-white text-[15px] leading-relaxed font-bold dark:font-medium mb-8 flex-1 group-hover:text-[#0B3C5D] dark:group-hover:text-[#D4AF37] transition-colors">{news.title}</p>

                                                    <div

                                                        onClick={() => setActiveNewsItem(news)}

                                                        className="text-blue-600 dark:text-[#3b82f6] text-sm font-bold dark:font-semibold flex items-center gap-1.5 w-fit hover:underline cursor-pointer"

                                                    >

                                                        Read More <ExternalLink size={14} />

                                                    </div>

                                                </div>

                                            </div>

                                        ))}

                                    </div>

                                </div>

                                <div className="w-full flex items-center justify-center gap-3 mt-6 mb-12">

                                    {Array.from({ length: maxNewsIndex + 1 }).map((_, idx) => (

                                        <div

                                            key={idx}

                                            onClick={() => setNewsIndex(idx)}

                                            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${idx === newsIndex ? 'w-10 bg-[#001A41] dark:bg-[#D4AF37]' : 'w-2.5 bg-slate-300 dark:bg-[#D4AF37]/40 hover:bg-slate-400 dark:hover:bg-[#D4AF37]/70'}`}

                                        />

                                    ))}

                                </div>



                                <h3 className="text-[#001A41] dark:text-[#D4AF37] font-bold dark:font-semibold text-lg mb-6">Human Resources Electronic Forms</h3>

                                <div className="flex gap-2 mb-6">

                                    <button

                                        onClick={() => setActiveFormsTab('faculty')}

                                        className={`px-6 py-2 rounded-lg text-xs font-bold dark:font-semibold tracking-wide transition-colors ${activeFormsTab === 'faculty' ? 'bg-[#0B3C5D] dark:bg-[#D4AF37]/10 border border-[#0B3C5D] dark:border-[#D4AF37] text-white dark:text-[#D4AF37] shadow-sm dark:shadow-none' : 'bg-white dark:bg-transparent border border-slate-200 dark:border-white/20 text-slate-600 dark:text-slate-300 hover:text-[#001A41] dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5 shadow-sm dark:shadow-none'}`}

                                    >

                                        Faculty Members

                                    </button>

                                    <button

                                        onClick={() => setActiveFormsTab('employees')}

                                        className={`px-6 py-2 rounded-lg text-xs font-bold dark:font-semibold tracking-wide transition-colors ${activeFormsTab === 'employees' ? 'bg-[#0B3C5D] dark:bg-[#D4AF37]/10 border border-[#0B3C5D] dark:border-[#D4AF37] text-white dark:text-[#D4AF37] shadow-sm dark:shadow-none' : 'bg-white dark:bg-transparent border border-slate-200 dark:border-white/20 text-slate-600 dark:text-slate-300 hover:text-[#001A41] dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/5 shadow-sm dark:shadow-none'}`}

                                    >

                                        Employees

                                    </button>

                                </div>

                                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">

                                    {(activeFormsTab === 'faculty' ? facultyForms : employeeForms).map((form, idx) => (

                                        <div key={idx} className="bg-white dark:bg-[#001124] border border-slate-200 dark:border-[#D4AF37]/20 hover:border-[#0B3C5D] dark:hover:border-[#D4AF37]/50 rounded-xl p-5 flex flex-col group transition-colors cursor-pointer shadow-sm dark:shadow-sm min-h-[120px] hover:shadow-md">

                                            <FileText size={16} className="text-[#0B3C5D] dark:text-[#D4AF37] mb-3 opacity-70 group-hover:opacity-100" />

                                            <p className="text-[#001A41] dark:text-white text-xs font-bold dark:font-medium leading-snug mb-4 flex-1">{form}</p>

                                            <div className="text-[#0B3C5D] dark:text-[#D4AF37] text-[10px] font-black dark:font-bold uppercase tracking-widest flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">

                                                <Download size={12} /> Download

                                            </div>

                                        </div>

                                    ))}

                                </div>



                                <h3 className="text-[#001A41] dark:text-[#D4AF37] font-bold dark:font-semibold text-lg mb-6">Governance, Training & Awards</h3>

                                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">

                                    <div className="flex flex-col gap-6">

                                        <div className="bg-white dark:bg-[#001124] border border-slate-200 dark:border-white/5 rounded-2xl p-6 shadow-sm dark:shadow-lg h-full flex flex-col hover:shadow-md transition-shadow">

                                            <div className="flex items-center gap-3 mb-4">

                                                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-[#89c5ff]/10 flex items-center justify-center text-blue-600 dark:text-[#89c5ff] border border-blue-100 dark:border-transparent">

                                                    <GraduationCap size={20} />

                                                </div>

                                                <div>

                                                    <h4 className="text-[#001A41] dark:text-white font-bold text-lg leading-tight">Training Department</h4>

                                                    <span className="text-blue-600 dark:text-[#89c5ff] text-[10px] font-bold dark:font-medium uppercase tracking-wider">Professional Development</span>

                                                </div>

                                            </div>

                                            <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed mb-6 font-medium dark:font-normal">

                                                Providing quality, cost-effective training to increase individual and organizational productivity. We enhance staff and faculty knowledge with high-quality, accessible professional development opportunities to support AU's vision of becoming the best public university dedicated to undergraduate education and research.

                                            </p>

                                            <div className="flex flex-col gap-3 mt-auto">

                                                <div className="bg-slate-50 dark:bg-[#001A33]/50 border border-slate-200 dark:border-white/5 rounded-xl p-4 flex flex-col gap-2">

                                                    <div className="flex items-center gap-2">

                                                        <div className="text-red-500 dark:text-red-400"><AlertCircle size={14} /></div>

                                                        <span className="text-[#001A41] dark:text-white text-sm font-bold">"Anti-Corruption and Governance"</span>

                                                    </div>

                                                    <span className="text-slate-500 dark:text-slate-400 text-[10px] ml-6 font-bold dark:font-normal">13–14 Nov 2022</span>

                                                    <span className="bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 px-3 py-1 rounded-full text-[10px] font-black dark:font-bold w-fit border border-red-200 dark:border-red-500/20 ml-6">Registration Closed</span>

                                                </div>

                                                <div className="bg-slate-50 dark:bg-[#001A33]/50 border border-slate-200 dark:border-white/5 rounded-xl p-4 flex flex-col gap-2">

                                                    <div className="flex items-center gap-2">

                                                        <div className="text-emerald-500 dark:text-emerald-400"><CheckCircle size={14} /></div>

                                                        <span className="text-[#001A41] dark:text-white text-sm font-bold">"Competitive Neutrality in Competition Policy"</span>

                                                    </div>

                                                    <span className="text-slate-500 dark:text-slate-400 text-[10px] ml-6 font-bold dark:font-normal leading-snug">29–30 Aug 2022 - In cooperation with the Authority for the Protection of Competition</span>

                                                    <span className="bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-4 py-1 rounded-full text-[10px] font-black dark:font-bold w-fit border border-emerald-200 dark:border-emerald-500/20 ml-6">Open</span>

                                                </div>

                                            </div>

                                        </div>

                                    </div>



                                    <div className="flex flex-col gap-6">

                                        <div className="bg-white dark:bg-[#001124] border border-slate-200 dark:border-white/5 rounded-2xl p-6 shadow-sm dark:shadow-lg h-full hover:shadow-md transition-shadow">

                                            <div className="flex items-center gap-3 mb-6">

                                                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-[#8b5cf6]/10 flex items-center justify-center text-purple-600 dark:text-[#8b5cf6] border border-purple-100 dark:border-[#8b5cf6]/20">

                                                    <BookOpen size={20} />

                                                </div>

                                                <div>

                                                    <h4 className="text-[#001A41] dark:text-white font-bold text-lg leading-tight">Laws & Regulations Library</h4>

                                                    <span className="text-purple-600 dark:text-[#8b5cf6] text-[10px] font-bold dark:font-medium uppercase tracking-wider">Legal Framework</span>

                                                </div>

                                            </div>

                                            <div className="flex flex-col gap-3">

                                                <a

                                                    href="https://www.alexu.edu.eg/images/%D9%85%D8%AF%D9%88%D9%86%D8%A9-%D8%B3%D9%84%D9%88%D9%83-%D9%88%D8%A7%D8%AE%D9%84%D8%A7%D9%82%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D9%88%D8%B8%D9%8A%D9%81%D8%A9-%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9-.pdf"

                                                    target="_blank"

                                                    rel="noopener noreferrer"

                                                    className="bg-slate-50 dark:bg-[#001A33]/50 border-2 border-slate-200 dark:border-white rounded-xl p-4 flex items-center justify-between transition-all hover:bg-slate-100 dark:hover:bg-white/5 hover:border-slate-300 group shadow-sm dark:shadow-none"

                                                >

                                                    <div className="flex items-center gap-4">

                                                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-[#89c5ff]/10 flex items-center justify-center text-blue-600 dark:text-[#89c5ff]">

                                                            <Shield size={16} />

                                                        </div>

                                                        <span className="text-[#001A41] dark:text-white text-sm font-bold dark:font-medium">Employee Code of Conduct</span>

                                                    </div>

                                                    <ExternalLink size={14} className="text-slate-400 group-hover:text-[#001A41] dark:group-hover:text-white transition-colors" />

                                                </a>

                                                {[

                                                    { icon: <BookOpen size={16} />, color: "purple", label: "Civil Service Law" },

                                                    { icon: <FileText size={16} />, color: "emerald", label: "Public Contracts Law No. 182 of 2018" },

                                                    { icon: <FileText size={16} />, color: "orange", label: "The New Public Contracts Law No. 182 of 2018" },

                                                    { icon: <Target size={16} />, color: "amber", label: "Egyptian National Anti-Corruption Strategy" },

                                                ].map((item, i) => (

                                                    <div key={i} className="bg-white dark:bg-[#001A33]/50 border border-slate-200 dark:border-white/5 rounded-xl p-4 flex items-center justify-between transition-colors cursor-pointer hover:bg-slate-50 dark:hover:bg-white/5 group shadow-sm dark:shadow-none">

                                                        <div className="flex items-center gap-4">

                                                            <div className={`w-8 h-8 rounded-full bg-${item.color}-100 dark:bg-[#8b5cf6]/10 flex items-center justify-center text-${item.color}-600 dark:text-[#8b5cf6]`}>

                                                                {item.icon}

                                                            </div>

                                                            <span className="text-[#001A41] dark:text-white text-sm font-bold dark:font-medium">{item.label}</span>

                                                        </div>

                                                        <ExternalLink size={14} className="text-slate-400 dark:text-slate-500 group-hover:text-[#001A41] dark:group-hover:text-white transition-colors" />

                                                    </div>

                                                ))}

                                            </div>

                                        </div>

                                    </div>

                                </div>



                                <div className="w-full flex flex-col lg:flex-row gap-6 mt-6">

                                    <div className="bg-white dark:bg-gradient-to-br dark:from-[#1a1500] dark:to-[#001124] border border-slate-200 dark:border-[#D4AF37]/50 rounded-2xl p-6 shadow-sm dark:shadow-[0_0_20px_rgba(212,175,55,0.05)] h-full flex flex-col flex-1 hover:shadow-md transition-shadow">

                                        <div className="flex items-center gap-3 mb-6">

                                            <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] border border-amber-100 dark:border-[#D4AF37]/40 shadow-inner">

                                                <Award size={20} />

                                            </div>

                                            <div>

                                                <h4 className="text-[#001A41] dark:text-[#D4AF37] font-serif font-bold dark:font-normal text-xl">Government Excellence Award</h4>

                                                <span className="text-[#0B3C5D] dark:text-[#D4AF37] text-[10px] tracking-widest font-black dark:font-medium uppercase">Egypt Vision 2030 - Second Session 2020</span>

                                            </div>

                                        </div>

                                        <div className="bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-[#D4AF37]/20 rounded-xl p-6 relative overflow-hidden group hover:border-[#001A41] dark:hover:border-[#D4AF37]/50 transition-colors flex-1 shadow-sm dark:shadow-none">

                                            <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-transparent dark:from-[#D4AF37]/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                            <div className="relative z-10">

                                                <div className="flex items-center gap-2 mb-4">

                                                    <span className="bg-[#001A41] dark:bg-[#D4AF37] text-white dark:text-[#000D1A] px-3 py-1 rounded-full text-[10px] font-black dark:font-bold uppercase tracking-wider">3rd Place</span>

                                                    <span className="text-slate-600 dark:text-slate-300 text-xs font-bold dark:font-normal">Leadership Excellence - General Manager Category</span>

                                                </div>

                                                <h5 className="text-[#001A41] dark:text-white text-xl font-serif font-bold dark:font-normal mb-1">Dr. Nadira Sobhy Mohamed</h5>

                                                <p className="text-slate-500 dark:text-slate-400 text-xs mb-5 font-bold dark:font-normal">Director General of Information, Documentation & Decision Support Center</p>

                                                <div className="flex flex-col gap-3 text-[11px] text-slate-600 dark:text-slate-300 font-medium dark:font-normal">

                                                    <div className="flex items-start gap-2"><Lightbulb size={14} className="text-[#0B3C5D] dark:text-[#D4AF37] shrink-0" /><span>In light of Egypt's sustainable development plan "Egypt Vision 2030"</span></div>

                                                    <div className="flex items-start gap-2"><Award size={14} className="text-[#0B3C5D] dark:text-[#D4AF37] shrink-0" /><span>Ideal Employee Category also available for all government positions</span></div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>



                                    <div className="bg-white dark:bg-[#001124] border border-slate-200 dark:border-[#4FD1C5]/30 rounded-2xl p-6 shadow-sm dark:shadow-lg h-full flex flex-col flex-1 hover:shadow-md transition-shadow">

                                        <div className="flex items-center gap-3 mb-6">

                                            <div className="w-10 h-10 rounded-lg bg-cyan-50 dark:bg-[#4FD1C5]/10 flex items-center justify-center text-cyan-600 dark:text-[#4FD1C5] border border-cyan-100 dark:border-[#4FD1C5]/20">

                                                <Globe size={20} />

                                            </div>

                                            <div>

                                                <h4 className="text-[#001A41] dark:text-white font-serif font-bold dark:font-normal text-xl">Civic Gateway & Utility Links</h4>

                                                <span className="text-cyan-600 dark:text-[#4FD1C5] text-[10px] uppercase tracking-widest font-bold dark:font-medium">Important Links & Services</span>

                                            </div>

                                        </div>

                                        <div className="flex flex-col gap-3 mb-6">

                                            {["E-Publishing System (Public Contracts Portal)", "Egypt's Government Services Portal", "Unified Government Complaints Portal", "Opinion Polls"].map((link, idx) => (

                                                <div key={idx} className="bg-slate-50 dark:bg-[#001A33]/50 border border-slate-200 dark:border-white/5 hover:border-cyan-600 dark:hover:border-[#4FD1C5]/30 rounded-xl p-4 flex items-center justify-between transition-colors cursor-pointer group shadow-sm dark:shadow-none">

                                                    <div className="flex items-center gap-3">

                                                        {idx === 0 && <Globe size={14} className="text-cyan-600 dark:text-[#4FD1C5]" />}

                                                        {idx === 1 && <Smartphone size={14} className="text-cyan-600 dark:text-[#4FD1C5]" />}

                                                        {idx === 2 && <MessageSquare size={14} className="text-cyan-600 dark:text-[#4FD1C5]" />}

                                                        {idx === 3 && <BarChart2 size={14} className="text-cyan-600 dark:text-[#4FD1C5]" />}

                                                        <span className="text-[#001A41] dark:text-slate-300 text-sm font-bold dark:font-medium group-hover:text-cyan-700 dark:group-hover:text-white transition-colors">{link}</span>

                                                    </div>

                                                    <ExternalLink size={14} className="text-slate-400 dark:text-slate-500 group-hover:text-cyan-600 dark:group-hover:text-[#4FD1C5] opacity-0 group-hover:opacity-100 transition-all" />

                                                </div>

                                            ))}

                                        </div>

                                        <div className="bg-transparent rounded-xl pt-2 border-t border-slate-200 dark:border-white/10 mt-auto">

                                            <span className="text-[#0B3C5D] dark:text-[#D4AF37] text-[10px] uppercase font-black dark:font-bold tracking-widest mb-3 block">Quick Contact</span>

                                            <div className="flex flex-col gap-2">

                                                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-xs font-bold dark:font-normal"><Mail size={12} className="text-[#0B3C5D] dark:text-[#D4AF37]" /> Gen.Secret@alexu.edu.eg</div>

                                                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-xs font-bold dark:font-normal"><Phone size={12} className="text-[#0B3C5D] dark:text-[#D4AF37]" /> 03 5921676</div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </>

                        )}

                    </div>

                ) : (

                    <div className="max-w-none w-full flex flex-col items-start text-left pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">

                        <div className="mb-10">

                            <button

                                onClick={() => setActivePage('hub')}

                                className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-[#001A41] dark:hover:text-[#D4AF37] transition-all duration-300 group cursor-pointer font-bold dark:font-medium p-0 bg-transparent border-none"

                            >

                                <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />

                                <span>Back to Administration Hub</span>

                            </button>

                        </div>



                        <div className="w-full flex flex-col items-start text-left mb-10">

                            <h2 className="text-4xl md:text-5xl font-serif font-bold dark:font-normal text-[#001A41] dark:text-[#D4AF37] tracking-tight dark:tracking-wide whitespace-nowrap mb-4">

                                University Leaders Directory

                            </h2>

                            <p className="text-slate-500 dark:text-slate-300 font-bold dark:font-light text-sm uppercase tracking-wider dark:tracking-normal dark:normal-case">

                                Created: 20 May 2021

                            </p>

                        </div>



                        <div className="w-full bg-white dark:bg-[#001A33]/40 backdrop-blur-md border border-slate-200 dark:border-[#D4AF37]/20 rounded-2xl p-6 mb-12 flex flex-wrap gap-4 items-center shadow-sm dark:shadow-none">

                            {filterCategories.map((category) => (

                                <button

                                    key={category}

                                    onClick={() => setActiveFilter(category)}

                                    className={`px-5 py-2.5 rounded-xl text-sm font-bold dark:font-medium transition-all flex items-center gap-2 shadow-sm dark:shadow-none ${

                                        activeFilter === category

                                            ? 'bg-[#001A41] dark:bg-[#D4AF37]/10 text-white dark:text-[#D4AF37] border border-[#001A41] dark:border-[#D4AF37]'

                                            : 'bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20'

                                    }`}

                                >

                                    {category}

                                    {activeFilter === category && <X size={14} className="text-white dark:text-[#D4AF37]" />}

                                </button>

                            ))}

                        </div>



                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                            {filteredLeaders.map((leader, idx) => (

                                <div

                                    key={idx}

                                    className="relative bg-white dark:bg-gradient-to-br dark:from-[#c8a14b] dark:via-[#8c6a28] dark:to-[#292621] border border-slate-200 dark:border-none rounded-[32px] p-6 flex flex-col items-center text-center shadow-sm dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 min-h-[350px]"

                                >

                                    {leader.isActing && (

                                        <div className="absolute top-4 right-4 bg-[#0B3C5D] dark:bg-[#D4AF37] text-white dark:text-[#000D1A] px-3 py-1 rounded-full text-[10px] font-black dark:font-bold tracking-widest uppercase shadow-md">

                                            ACTING

                                        </div>

                                    )}

                                    <div className="w-[90px] h-[90px] rounded-full bg-slate-100 dark:bg-[#202c3b] mt-2 mb-5 flex items-center justify-center shrink-0 shadow-inner dark:shadow-[inset_0_4px_10px_rgba(0,0,0,0.4)] border border-slate-200 dark:border-none">

                                        <span className="text-slate-400 dark:text-white/40 text-[11px] font-bold dark:font-light">[Photo]</span>

                                    </div>

                                    <div className="flex-1 w-full flex flex-col justify-start">

                                        <h4 className="text-[18px] font-serif font-bold dark:font-medium text-[#001A41] dark:text-[#ebd27c] mb-1.5 leading-snug">

                                            {leader.name}

                                        </h4>

                                        <p className="text-slate-500 dark:text-white/80 text-[12px] font-bold dark:font-light leading-relaxed px-2">

                                            {leader.faculty}

                                        </p>

                                    </div>

                                    <div className="w-full flex justify-center gap-3 pt-6 mt-auto">

                                        <button className="flex-1 h-11 rounded-[14px] bg-slate-50 dark:bg-[#D4AF37]/10 border border-slate-200 dark:border-[#ebd27c]/30 flex items-center justify-center text-[#0B3C5D] dark:text-[#ebd27c] hover:bg-slate-100 dark:hover:bg-[#D4AF37]/20 transition-colors shadow-sm dark:shadow-none">

                                            <GraduationCap size={18} strokeWidth={2} className="dark:stroke-[1.5]" />

                                        </button>

                                        <button className="flex-1 h-11 rounded-[14px] bg-slate-50 dark:bg-[#D4AF37]/10 border border-slate-200 dark:border-[#ebd27c]/30 flex items-center justify-center text-[#0B3C5D] dark:text-[#ebd27c] hover:bg-slate-100 dark:hover:bg-[#D4AF37]/20 transition-colors shadow-sm dark:shadow-none">

                                            <FlaskConical size={18} strokeWidth={2} className="dark:stroke-[1.5]" />

                                        </button>

                                        <button className="flex-1 h-11 rounded-[14px] bg-slate-50 dark:bg-[#D4AF37]/10 border border-slate-200 dark:border-[#ebd27c]/30 flex items-center justify-center text-[#0B3C5D] dark:text-[#ebd27c] hover:bg-slate-100 dark:hover:bg-[#D4AF37]/20 transition-colors shadow-sm dark:shadow-none">

                                            <UserCog size={18} strokeWidth={2} className="dark:stroke-[1.5]" />

                                        </button>

                                    </div>

                                </div>

                            ))}

                        </div>

                        {filteredLeaders.length === 0 && (

                            <div className="w-full text-center py-20 text-slate-500 dark:text-slate-400 font-bold dark:font-normal">

                                No leaders found in this category.

                            </div>

                        )}

                    </div>

                )}

            </div>



            {activePage === 'secretary_general' && (

                <div className="w-full text-center mt-12 text-slate-500 dark:text-slate-500 text-[10px] pb-8 relative z-10 font-bold dark:font-normal tracking-wider dark:tracking-normal">

                    © 2026 Alexandria University - University Secretary General Sector - Excellence in Administration Since 1942

                </div>

            )}

        </main>

    );

}