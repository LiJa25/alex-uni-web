"use client";
import React, { useState } from 'react';
import { Crown, Users, UserCog, GraduationCap, FlaskConical, Leaf, Building2, CalendarDays, ArrowLeft, ArrowRight, Calendar, Clock, Globe, TrendingUp, Smartphone, Factory, Building, Copy, FileText, BookOpen, Mail, X, Sparkles, Shield, Search, ChevronDown, Play, Brain, Scale, Recycle, Target, Award, HeartHandshake, Briefcase, Microscope, Library, Phone, Download, Lock, ChevronRight, Gavel, Link as LinkIcon, ExternalLink, Lightbulb, MessageSquare, BarChart2, ChevronLeft, AlertCircle, CheckCircle } from 'lucide-react';

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

    const [gradFaculty, setGradFaculty] = useState("Faculty of Engineering");
    const [isGradFacultyOpen, setIsGradFacultyOpen] = useState(false);
    const [gradPillar, setGradPillar] = useState("International Joint Degrees");
    const [isGradPillarOpen, setIsGradPillarOpen] = useState(false);

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
        {
            title: "Transnational Campuses",
            icon: <Globe size={20} />,
            description: "Finalizing operational permits for dedicated university branches in the UAE and Malaysia."
        },
        {
            title: "Global Ranking",
            icon: <TrendingUp size={20} />,
            description: "Targeting a top-400 placement in the upcoming QS World University Rankings via increased research output."
        },
        {
            title: "Digital Transformation",
            icon: <Smartphone size={20} />,
            description: "Upgrading the internal student portal to automate registration, transcript requests, and tuition payments."
        },
        {
            title: "Industrial Alignment",
            icon: <Factory size={20} />,
            description: "Partnering with local manufacturing hubs in Alexandria to provide mandatory undergraduate internship placements."
        }
    ];

    const currentData = isLegacy ? leadershipInfo.legacy : leadershipInfo.current;

    const filterCategories = [
        "All Faculties", 
        "Medical & Health", 
        "Engineering & Tech", 
        "Science & Agriculture", 
        "Education & Sports", 
        "Law", 
        "Business & Arts"
    ];

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

    const filteredLeaders = activeFilter === "All Faculties" 
        ? leadersData 
        : leadersData.filter(leader => leader.category === activeFilter);

    const eduAffairsCards = [
        {
            title: "AU Student Life",
            icon: <Sparkles size={28} strokeWidth={1.5} />,
            desc: "Campus community, clubs, events, and social activities",
            links: ["Student Clubs", "Campus Events", "Student Union", "Sports & Recreation"]
        },
        {
            title: "Student Services",
            icon: <Shield size={28} strokeWidth={1.5} />,
            desc: "Housing, financial aid, counseling, and support systems",
            links: ["Portal Login", "Housing Services", "Scholarships", "Counseling Center"]
        },
        {
            title: "Academic Life",
            icon: <BookOpen size={28} strokeWidth={1.5} />,
            desc: "Academic resources, library services, and learning support",
            links: ["Library Portal", "Academic Calendar", "Tutoring Services", "Course Registration"]
        },
        {
            title: "International Student Services",
            icon: <Globe size={28} strokeWidth={1.5} />,
            desc: "Support for international students and exchange programs",
            links: ["Visa Support", "Language Programs", "Cultural Integration", "Study Abroad"]
        }
    ];

    const communityCardsData = [
        { title: "Sustainable Development", desc: "Egypt's Vision 2030 tracker, carbon emission monitoring, and Smart Waste Management Initiatives", icon: <Target size={32} />, badge: "VISION 2030 ACTIVE" },
        { title: "Forming the Environment Sector", desc: "Organizational blueprint and structural framework for environmental initiatives", icon: <Leaf size={32} /> },
        { title: "Government Excellence & Institutional Development", desc: "Egypt Government Excellence Award 2026 preparations and ISO certifications", icon: <Award size={32} />, badge: "ISO 9001 CERTIFIED" },
        { title: "Convoys", desc: "Medical, dental, and social caravans to remote villages (Hayah Karmah initiative)", icon: <HeartHandshake size={32} />, badge: "41,000+ ITEMS DISTRIBUTED" },
        { title: "Literacy", desc: "Community adult education programs across all faculties", icon: <BookOpen size={32} />, badge: "COMMUNITY IMPACT" },
        { title: "Community Initiatives", desc: "Tahya Misr Fund (Dukan El-Farha) and INSAT digital support platform", icon: <Users size={32} />, badge: "INSAT PLATFORM LIVE" },
        { title: "Transformative Training", desc: "Vocational workshops, R&D upskilling, and professional training seminars", icon: <Briefcase size={32} />, badge: "850+ TRAINEES/YEAR" },
        { title: "Units and Centers of a Special Nature", desc: "8 central service units including Nanotechnology, Occupational Health & Safety, African Development", icon: <Microscope size={32} />, badge: "8 CENTRAL LABS" },
        { title: "Alexandria University Museums", desc: "Cultural archives and museum treasures showcasing university heritage", icon: <Library size={32} />, badge: "5,000+ ARTIFACTS" }
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
        {
            title: "General Administration for Personnel and General Cadre",
            icon: <Building size={20} />,
            tasks: [
                "Develop the work plan and distribute it among its departments and coordinate work between them to ensure the proper functioning of the work.",
                "Holding periodic meetings with the heads of various departments to discuss work problems and work to solve them.",
                "Proposing a plan for research and studies related to planning and workforce development and supervising its implementation in accordance with the plan set in this regard.",
                "Supervising the work of organization and management, drawing conclusions, studying reports and memoranda, proposing work plans and programs, systems and instructions necessary for their implementation.",
                "Conducting studies on simplifying procedures and models used in work.",
                "Setting the necessary performance rates for the various administrative organizations.",
                "Preparing and following up the job ranking system based on duties and responsibilities.",
                "Follow up the implementation of the laws related to the settlement of workers' pensions and bonuses.",
                "Review the topics to be presented to the Standing Committee for Leadership Positions and follow up the implementation of its decisions.",
                "Follow up the application of systems and rules related to personnel affairs, their desires and health, social and cultural care in accordance with the laws and rules in force.",
                "Participate in personnel affairs committees and supervise the work of their secretariats and agendas."
            ]
        },
        {
            title: "General Administration of Purchasing and Stores",
            icon: <FileText size={20} />,
            tasks: [
                "Participate with university officials in drawing up a procurement and storage policy that ensures that the university, its faculties, and various units obtain the necessary tools, tasks, equipment, devices, and various supplies on an ongoing basis.",
                "Studying the markets from which the needs of the university can be obtained at the lowest prices, the finest varieties, and the best conditions.",
                "Follow up the work of inventorying the needs of the public administration and the faculties of the university of tools, tasks, equipment, devices, and various supplies, assembling them, preparing annual assays, developing plans and programs that lead to providing these needs in a timely manner and at the appropriate cost and quality.",
                "Carrying out all procurement contracting procedures through public tenders, direct procurement or purchase by practice.",
                "Concluding contracts and agreements for procurement and following up on the procedures for their implementation.",
                "Organization of exchange operations from warehouses.",
                "Follow up inventory operations for stored items and disposal of used items by selling them while following financial and inventory instructions.",
                "Follow up of keeping inventory books and recording them in all works related to warehouse accounts.",
                "Follow up the preparation of supply orders and preliminary invoices to implement procurement procedures, whether from the local or foreign market, receive purchased or imported items, and take storage procedures.",
                "Follow up the implementation and application of the Warehouses and Purchases Regulations and the Financial Regulations related to the work of stores and the guarantee of the owners of the covenant.",
                "Participation in committees for deciding on local tenders and committees for imported devices and items.",
                "Follow up the balances of the beneficiaries and their debts and pay their dues in conjunction with the university accounts.",
                "Prepare periodic and annual reports on procurement and warehouse activity and submit them to the direct presidency to take the necessary action."
            ]
        },
        {
            title: "General Administration for Financial and Administrative Affairs",
            icon: <Building2 size={20} />,
            tasks: [
                "Preparing a system for rationalizing the work and financial and administrative procedures at the university to guide it when carrying out financial administrative guidance on all organs and units of the university that practice financial and administrative activity.",
                "Preparing plans and programs for periodic surprise inspection of the work of financial and administrative affairs at the university, its colleges and branches, submitting inspection reports and proposals necessary for the development of work and tightening internal control over those activities.",
                "Investigate the violations referred to it by the competent authorities of a financial and administrative nature and express an opinion on the treatment of any deficiency or deficiency that may be revealed in the practice of these works.",
                "Examining and responding to tenders received from financial and administrative audit institutions in light of the results of their research.",
                "Proposing systems to avoid the repetition of violations resulting from the directive and taking measures to implement and follow them up."
            ]
        },
        {
            title: "General Administration for Budget and Accounts",
            icon: <BookOpen size={20} />,
            tasks: [
                "Monitor the implementation of the provisions of financial affairs laws and regulations.",
                "Review the expenses of the first chapter on salaries and wages, in accordance with the basics corresponding to the entitlements and in the light of the monthly additions disclosure issued by it.",
                "Reviewing pensions, subsidies and the like, as well as all types of bonuses and keeping the relevant records in accordance with what is recorded in the books of the competent agencies.",
                "Taking the procedures for opening credits for the entitlements of university employees and delegates abroad (study leaves, scientific missions, secondments with salary, etc.) and review their documents and track the status of these credits.",
                "Review all disbursement forms for general and investment expenses.",
                "Review all exchange statements whose checks are drawn to the representatives of exchange or distribution after the completion of the disbursement distribution to ensure that each beneficiary receives his dues.",
                "Carry out investigation, search and claim procedures for the settlement of each amount requested by the devices.",
                "Representing the accounts in the tender envelope committees and handing over the insurances in which they are submitted.",
                "Revenue Collection Control Review receipts vouchers, monitor the payment of cash account balances, make their adjustments, and review receipts books after completion.",
                "Reviewing bank statements and current accounts and making the necessary settlements.",
                "Making adjustments related to the deduction of expenses under settlement or addition to trusts.",
                "Follow up bookkeeping of the claims of the ministry and the General Authority for Post and make disbursements and settlement procedures for them.",
                "Follow up of keeping exchange journals and extracting the daily account, as well as all other books of account entry.",
                "Follow up of claims and entitlements and recording settlements after reviewing and approving them by the competent authorities, writing checks and making notifications about them.",
                "Follow up the preparation of responses to the observations of the Central Auditing Organization and various inspection reports.",
                "Extracting the remaining intermediate accounts monthly and notifying the competent authorities to investigate them on their settlement.",
                "Reviewing the work of extracting the monthly and quarterly account, introducing the monthly statements and settlements.",
                "Follow up the preparation of the final account.",
                "Review the files after preparing them and sending them to the Central Auditing Organization.",
                "Follow up the preservation of accounting documents and make their files from the reality of those documents.",
                "Assume all responsibility for the previous work in relation to the appropriations and funds that are placed at the disposal of the university.",
                "Follow up registration in the records of job inventory and encumbrances on the items of special appropriations.",
                "Follow up of receiving monthly data from the faculties, institutes and branches of the university.",
                "Presentation of requests for summits and additional credits in light of the financial position."
            ]
        },
        {
            title: "General Administration for Engineering Affairs",
            icon: <Building size={20} />,
            tasks: [
                "Follow-up the technical aspects of the university's devices and equipment.",
                "Participate in the preparation of engineering drawings for university buildings.",
                "Follow-up work related to construction, renovations and maintenance of university buildings.",
                "Participation in the supply committees for equipment and devices.",
                "Supervising the maintenance of buildings and gardens.",
                "Follow-up the preparation of a study on the needs of the University Land and buildings to meet the various expansions."
            ]
        },
        {
            title: "General Administration of Special Funds",
            icon: <Shield size={20} />,
            tasks: [
                "Contribute to the development of public policies related to the various areas of work on which supervision and guidance are exercised.",
                "Representing the university in various meetings, committees and conferences related to the field of work.",
                "Follow up the implementation of the executive programs related to these policies.",
                "Securing and distribute the work plan among the subordinate departments and coordinate the work between them to ensure the proper functioning of the work.",
                "Exercise of financial and administrative authorities within the limits of the mandates granted.",
                "Holding periodic meetings with heads of various departments to discuss work problems and work to solve them.",
                "Applying the laws, regulations and instructions that govern the work of its departments.",
                "Collecting funds that do not enter the university budget, such as fees, donations, concessions and other funds that enter the university budget and that belong to units of a special nature.",
                "Carrying out disbursement information from the proceeds of the accounts allocated in the concluded agreements.",
                "Prepare the draft budget of special accounts and take procedures to present it to the competent authorities for approval.",
                "Follow up the procedures for depositing the proceeds of special accounts in the bank chosen by the university.",
                "Review the records necessary to prove all deposit and exchange operations in accordance with the system and the rules established from the documents indicating these operations.",
                "Review the setting and registration of cheques, notify the bank and the beneficiaries, and take all related procedures.",
                "Taking into account the application of the university's financial regulations regarding the system of special accounts and the rules of disbursement of its proceeds.",
                "Reviewing revenues and matching them to collection lists and university books of accounts.",
                "Expressing an opinion on memoranda and various topics related to the work of private accounts.",
                "Expressing an opinion on the reports prepared by the units of a special nature on their work.",
                "Participate in the adoption of the estimated and actual budget for each of the units of a special nature of the university and present it to the Council of Special Units.",
                "Participation in the membership of the Board of Directors of units of a special nature of college's institutes and branches.",
                "Signing correspondence issued within the limits of the authorized authorities."
            ]
        }
    ];

    const secGenNews = [
        { date: { month: "Nov", day: "28" }, hits: "1,067", title: "Vice President Dr. Saeed Allam discusses with the Board of Trustees the completion of maintenance work for all facilities and buildings." },
        { date: { month: "Jul", day: "22" }, hits: "1,585", title: "Board of Trustees discusses administrative preparations for organizing entrance exams for Academic Year 2024/2025." },
        { date: { month: "Jun", day: "26" }, hits: "1,192", title: "Board of Trustees discusses mechanisms for implementing university's programs and performance budget." },
        { date: { month: "May", day: "24" }, hits: "1,275 ", title: "Board of Trustees directs necessity of optimal budget use for Fiscal Year 2024/2025." },
        { date: { month: "Apr", day: "21" }, hits: "1,297", title: "Board of Trustees Discusses Preparations for Second Semester Final Exams." },
        { date: { month: "Feb", day: "20" }, hits: "1,229", title: "Alexandria University organizes event for workers to train in occupational health and safety." },
        { date: { month: "Dec", day: "11" }, hits: "1,363", title: "Employees of Alexandria University Cast Their Votes in The 2024 Presidential Election." }
    ];

    const archiveVideos = [
        { date: "May 2026", initial: "F", category: "FACULTY OF EDUCATION | JOINT DEGREES", title: "Governance Frameworks & Senghor University Joint Diplomas Launch", color: "#3d3962" },
        { date: "December 2025", initial: "F", category: "FACULTY OF ENGINEERING | GLOBAL RANKINGS", title: "Scopus Index Celebrations: Engineering & Veterinary Medicine Journals", color: "#154f48" },
        { date: "September 2025", initial: "I", category: "INNOVATION | ARTIFICIAL INTELLIGENCE", title: "AI Strategy Session: Benchmarking Stanford, Harvard & Oxford Hubs", color: "#5b2b2b" },
        { date: "June 2024", initial: "I", category: "INTERNATIONAL PROGRAMS | DUAL DEGREES", title: "University of East London (UEL) Joint Sports Performance Protocol", color: "#4d3166" },
        { date: "March 2025", initial: "F", category: "FACULTY OF MEDICINE | INTERNATIONAL FELLOWSHIPS", title: "Medicine International Residency Program & Fellowship", color: "#174360" },
        { date: "November 2024", initial: "F", category: "FACULTY OF SCIENCE | COUNCIL CELEBRATIONS", title: "Research Excellence Awards & Faculty Recognition Ceremony", color: "#55411d" },
        { date: "July 2016", initial: "U", category: "University Council | Council Celebrations", title: "Celebration for Dr. Seddik Abdel Salam - Lifetime Achievement", color: "#584419" },
        { date: "August 2025", initial: "F", category: "Faculty of Pharmacy | Scientific Research", title: "Pharmaceutical Research Collaboration with Kuwait University", color: "#3d2b63" },
    ];

    const maxNewsIndex = Math.max(0, secGenNews.length - 3);

    return (
        <main className="min-h-screen relative bg-[#000D1A] bg-gradient-to-br from-[#000D1A] to-[#001A33] pt-32 pb-20 px-4 overflow-hidden">
            <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-screen">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <path d="M -100,200 L 300,600 L 700,200 L 1200,800 M 500,-100 L 900,400 L 1500,100 M 200,900 L 800,500 L 1400,900" stroke="#4f46e5" strokeWidth="1" fill="none" opacity="0.4" />
                    <path d="M 100,100 L 500,500 L 200,800 L -100,400 Z M 600,200 L 1000,600 L 800,800 L 400,400 Z" stroke="#3b82f6" strokeWidth="0.5" fill="none" opacity="0.3" />
                    
                    <circle cx="300" cy="600" r="3" fill="#f59e0b" className="animate-pulse" />
                    <circle cx="700" cy="200" r="2" fill="#3b82f6" />
                    <circle cx="900" cy="400" r="3.5" fill="#f59e0b" />
                    <circle cx="500" cy="500" r="2.5" fill="#fff" opacity="0.7" />
                    <circle cx="200" cy="800" r="2" fill="#4f46e5" />
                    <circle cx="800" cy="500" r="3" fill="#f59e0b" className="animate-ping" style={{ animationDuration: '3s' }} />
                    <circle cx="1000" cy="600" r="2" fill="#3b82f6" />
                </svg>
            </div>

            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-amber-500/[0.03] blur-[100px] rounded-full pointer-events-none"></div>

            <div className={`relative z-10 mx-auto ${activePage === 'secretary_general' || activePage === 'council_meetings' ? 'max-w-[1400px]' : 'max-w-7xl'}`}>
                {activePage === 'hub' ? (
                    <>
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-4">
                                Master Administration Hub
                            </h1>
                            <p className="text-slate-300 dark:text-slate-400 text-lg">
                                Command center for Alexandria University's governance and strategic initiatives
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {adminHubItems.map((item, idx) => (
                                <div 
                                    key={idx} 
                                    onClick={() => item.target && setActivePage(item.target as any)}
                                    className="h-full relative bg-white/10 backdrop-blur-md border border-white/10 dark:bg-slate-900/60 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                                >
                                    {item.isLive && (
                                        <div className="absolute top-4 right-4 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                            LIVE
                                        </div>
                                    )}
                                    <div className="mb-6 text-[#D4AF37]">
                                        {React.cloneElement(item.icon as React.ReactElement, { size: 32 } as any)}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white leading-snug">
                                        {item.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </>
                ) : activePage === 'president' ? (
                    <div className="max-w-none w-full flex flex-col items-start text-left">
                        <div className="mb-10">
                            <button 
                                onClick={() => setActivePage('hub')}
                                className="inline-flex items-center gap-2 text-slate-400 hover:text-[#D4AF37] transition-all duration-300 group cursor-pointer font-medium p-0 bg-transparent border-none"
                            >
                                <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                                <span>Back to Administration Hub</span>
                            </button>
                        </div>

                        <div className="w-full flex flex-col items-start text-left mb-16">
                            <h2 className="text-4xl md:text-5xl font-serif text-[#D4AF37] tracking-wide whitespace-nowrap">
                                Leading the Future of Alexandria University
                            </h2>
                            <p className="text-2xl md:text-3xl text-[#D4AF37] font-serif tracking-wide mt-10">
                                Strategic Continuity & Global Expansion
                            </p>
                        </div>

                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch mt-4">
                            
                            <div className="flex flex-col w-full">
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden min-h-[500px] relative group hover:bg-white/10 transition-all duration-300 flex-1">
                                    <img 
                                        src={currentData.image} 
                                        alt={currentData.name} 
                                        className="w-full h-full object-cover object-top absolute inset-0 select-none pointer-events-none"
                                    />
                                    
                                    <div className="absolute bottom-8 right-8 bg-[#0b1b4f]/90 backdrop-blur-xl border border-[#D4AF37]/30 p-6 rounded-[20px] w-72 shadow-2xl z-10">
                                        <h4 className="text-[#D4AF37] font-serif text-xl mb-2">{currentData.cardTitle}</h4>
                                        <p className="text-white text-[13px] font-medium leading-relaxed mb-4">{currentData.cardSub}</p>
                                        <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1.5 rounded-md text-[10px] font-bold border border-[#D4AF37]/20">
                                            <Calendar size={12} />
                                            {currentData.date}
                                        </div>
                                    </div>
                                </div>

                                <button 
                                    onClick={() => setIsLegacy(!isLegacy)}
                                    className="w-full mt-4 py-4 bg-transparent border border-white/10 rounded-[14px] text-slate-300 font-medium hover:border-white hover:text-white transition-all duration-300"
                                >
                                    {isLegacy ? "View Current Leadership" : "View Legacy & Achievements"}
                                </button>
                            </div>

                            <div className="flex flex-col gap-6">
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl transition-all duration-300 hover:bg-white/10 flex flex-col flex-1 min-h-[300px]">
                                    <h3 className="text-2xl font-serif text-[#D4AF37] mb-5">{currentData.name}</h3>
                                    <p className="text-slate-300 leading-relaxed font-light text-[14px] mb-8">
                                        {currentData.bio}
                                    </p>
                                    
                                    <div className="mt-auto">
                                        <div className="flex justify-between items-center py-4 border-b border-white/10">
                                            <span className="text-slate-400 text-xs">Primary Focus</span>
                                            <span className="text-white text-xs font-medium">{currentData.focus}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-4 border-b border-white/10">
                                            <span className="text-slate-400 text-xs">Current Status</span>
                                            <span className="text-white text-xs font-medium">{currentData.status}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl transition-all duration-300 hover:bg-white/10 shrink-0">
                                    <h3 className="text-xl font-serif text-[#D4AF37] mb-6">Vice President</h3>
                                    
                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] font-serif text-xl shrink-0 border border-[#D4AF37]/20">
                                            HS
                                        </div>
                                        <div className="flex flex-col">
                                            <h4 className="text-white font-medium text-base mb-1">Dr. Hesham Saeed</h4>
                                            <p className="text-slate-300 text-xs mb-3">Vice President for Graduate Studies & Research</p>
                                            <p className="text-slate-400 text-xs leading-relaxed font-light">
                                                Managing domestic research grants, supervising doctoral programs, and handling cross-border academic partnerships.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full mt-24 mb-10">
                            <h2 className="text-3xl md:text-4xl font-serif text-[#D4AF37] mb-8 tracking-wide">
                                Key Strategic Agenda
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                {strategicAgendas.map((agenda, idx) => (
                                    <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl transition-all duration-300 hover:bg-white/10 flex flex-col">
                                        <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6 border border-[#D4AF37]/20">
                                            {agenda.icon}
                                        </div>
                                        <h3 className="text-xl font-serif text-[#D4AF37] mb-4">{agenda.title}</h3>
                                        <p className="text-slate-300 leading-relaxed font-light text-[13px]">
                                            {agenda.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center mt-8">
                                <button className="px-8 py-4 bg-[#D4AF37] text-[#000D1A] font-semibold rounded-xl hover:bg-[#D4AF37]/90 transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                                    View Full Strategic Road Map
                                </button>
                            </div>
                        </div>
                    </div>
                ) : activePage === 'head_admin' ? (
                    <div className="max-w-none w-full flex flex-col items-start text-left">
                        <div className="mb-10">
                            <button 
                                onClick={() => setActivePage('hub')}
                                className="inline-flex items-center gap-2 text-slate-400 hover:text-[#D4AF37] transition-all duration-300 group cursor-pointer font-medium p-0 bg-transparent border-none"
                            >
                                <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                                <span>Back to Administration Hub</span>
                            </button>
                        </div>

                        <div className="w-full flex flex-col items-start text-left mb-10">
                            <h2 className="text-4xl md:text-5xl font-serif text-[#D4AF37] tracking-wide whitespace-nowrap mb-6">
                                Executive Governance & The University Council
                            </h2>
                            <p className="text-xl md:text-2xl text-[#D4AF37] font-serif tracking-wide">
                                Directing Academic Excellence under the Supreme Council of Universities
                            </p>
                        </div>

                        <div className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 mt-4 transition-all duration-300 hover:bg-white/10">
                            <div className="flex items-center gap-3 text-[#D4AF37] mb-10 pb-6 border-b border-white/10">
                                <Building size={20} />
                                <span className="font-medium">Founded: 06 December 2015</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-2xl font-serif text-[#D4AF37]">Governance Structure</h3>
                                    <p className="text-slate-300 leading-relaxed font-light text-[15px]">
                                        Alexandria University is administered through the University Council headed by the University President and with the membership of: four Vice-Presidents, Deans of all the Faculties and Institutes of the University, and four members with expertise on university education; appointed for two years liable to extension.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <h3 className="text-2xl font-serif text-[#D4AF37]">Presidential Authority</h3>
                                    <p className="text-slate-300 leading-relaxed font-light text-[15px]">
                                        The President runs the University academically and administratively according to the bylaws and regulations approved by the Supreme Council of Universities. He serves as the Chief Executive and Operational Officer, directly responsible for the management of all University affairs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full mt-24 relative flex flex-col items-center">
                            
                            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 relative mb-12">
                                <div className="lg:col-start-5 lg:col-span-4 bg-gradient-to-b from-[#162743] to-[#0A1323] backdrop-blur-md border border-[#D4AF37]/50 rounded-3xl p-6 flex flex-col relative shadow-2xl z-10 min-h-[580px]">
                                    <div className="absolute top-6 right-6 bg-[#D4AF37] text-[#000D1A] px-4 py-1.5 rounded-full text-[11px] font-bold tracking-wider z-20">
                                        CEO / COO
                                    </div>
                                    <div className="flex-1 w-full bg-gradient-to-b from-white/5 to-transparent rounded-2xl mb-8 flex items-center justify-center border border-white/10 overflow-hidden relative">
                                        <img src="/imgs/Ahmed Adel Abdelhakim.jpg" alt="Prof. Dr. Ahmed Adel Abdelhakim" className="w-full h-full object-cover object-top" />
                                        {!currentData.image && <span className="text-slate-500 text-sm font-light">[President Portrait]</span>}
                                    </div>
                                    <h3 className="text-2xl font-serif text-[#D4AF37] mb-2">Prof. Dr. Ahmed Adel Abdelhakim</h3>
                                    <p className="text-white text-sm mb-8 font-light">Acting President of Alexandria University</p>
                                    
                                    <div 
                                        onClick={() => handleCopy('president@alexu.edu.eg', 'pres')}
                                        className="mt-auto flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-4 py-4 group hover:bg-white/10 transition-colors cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Mail size={16} className="text-[#D4AF37] opacity-80" />
                                            <span className="text-slate-400 text-sm truncate">president@alexu.edu.eg</span>
                                        </div>
                                        {copiedId === 'pres' ? (
                                            <span className="text-emerald-400 text-xs font-medium">Copied!</span>
                                        ) : (
                                            <Copy size={16} className="text-[#D4AF37] opacity-70 group-hover:opacity-100 transition-opacity" />
                                        )}
                                    </div>
                                </div>

                                <div className="lg:col-start-10 lg:col-span-3 bg-white/5 backdrop-blur-md border border-[#D4AF37]/20 rounded-3xl p-6 flex flex-col h-fit mt-12 lg:mt-0">
                                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-5 border border-[#D4AF37]/20">
                                        <FileText size={20} />
                                    </div>
                                    <h3 className="text-xl font-serif text-[#D4AF37] mb-4">Secretary General</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed font-light mb-8">
                                        Attends all Council meetings as Secretary of these sessions and takes part in the discussions. Manages meeting minutes and official documentation.
                                    </p>
                                    <div className="flex items-center gap-2 text-slate-400 text-xs mt-auto">
                                        <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                                        Supporting All Sessions
                                    </div>
                                </div>
                            </div>

                            <div className="hidden lg:block w-px h-16 bg-gradient-to-b from-[#D4AF37]/40 to-transparent -mt-12 mb-8"></div>

                            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="flex flex-col bg-[#001A33]/30 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-[#D4AF37]/30 transition-all duration-300 min-h-[460px]">
                                    <div className="h-56 w-full bg-gradient-to-b from-white/5 to-transparent rounded-2xl mb-6 flex items-center justify-center border border-white/5 overflow-hidden">
                                        <img src="/imgs/Ahmed Adel.jpg" alt="Prof. Dr. Ahmed Adel Abdelhakim" className="w-full h-full object-cover object-top" />
                                    </div>
                                    <h4 className="text-xl font-serif text-[#D4AF37] mb-3 leading-snug">Prof. Dr. Ahmed Adel Abdelhakim</h4>
                                    <p className="text-white text-[13px] mb-8 font-light leading-relaxed">Vice President for Education and Student Affairs</p>
                                    <div 
                                        onClick={() => handleCopy('v-p.edu@alexu.edu.eg', 'vp1')}
                                        className="mt-auto flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-4 py-3 group hover:bg-white/10 transition-colors cursor-pointer"
                                    >
                                        <div className="flex items-center gap-2 overflow-hidden">
                                            <Mail size={14} className="text-[#D4AF37] opacity-80 shrink-0" />
                                            <span className="text-slate-400 text-[11px] truncate">v-p.edu@alexu...</span>
                                        </div>
                                        {copiedId === 'vp1' ? (
                                            <span className="text-emerald-400 text-[11px] font-medium shrink-0 ml-2">Copied!</span>
                                        ) : (
                                            <Copy size={14} className="text-[#D4AF37] opacity-70 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col bg-[#001A33]/30 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-[#D4AF37]/30 transition-all duration-300 min-h-[460px]">
                                    <div className="h-56 w-full bg-gradient-to-b from-white/5 to-transparent rounded-2xl mb-6 flex items-center justify-center border border-white/5 overflow-hidden">
                                        <img src="/imgs/Hesham Saeed.jpg" alt="Prof. Dr. Hesham Saeed" className="w-full h-full object-cover object-top" />
                                    </div>
                                    <h4 className="text-xl font-serif text-[#D4AF37] mb-3 leading-snug">Prof. Dr. Hesham Saeed</h4>
                                    <p className="text-white text-[13px] mb-8 font-light leading-relaxed">Vice President for Graduate Studies and Research</p>
                                    <div 
                                        onClick={() => handleCopy('v-p.grad@alexu.edu.eg', 'vp2')}
                                        className="mt-auto flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-4 py-3 group hover:bg-white/10 transition-colors cursor-pointer"
                                    >
                                        <div className="flex items-center gap-2 overflow-hidden">
                                            <Mail size={14} className="text-[#D4AF37] opacity-80 shrink-0" />
                                            <span className="text-slate-400 text-[11px] truncate">v-p.grad@alexu...</span>
                                        </div>
                                        {copiedId === 'vp2' ? (
                                            <span className="text-emerald-400 text-[11px] font-medium shrink-0 ml-2">Copied!</span>
                                        ) : (
                                            <Copy size={14} className="text-[#D4AF37] opacity-70 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col bg-[#001A33]/30 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-[#D4AF37]/30 transition-all duration-300 min-h-[460px]">
                                    <div className="h-56 w-full bg-gradient-to-b from-white/5 to-transparent rounded-2xl mb-6 flex items-center justify-center border border-white/5 overflow-hidden">
                                        <img src="/imgs/Affaf Al-Oufy.jpg" alt="Prof. Dr. Affaf Al-Oufy" className="w-full h-full object-cover object-top" />
                                    </div>
                                    <h4 className="text-xl font-serif text-[#D4AF37] mb-3 leading-snug">Prof. Dr. Affaf Al-Oufy</h4>
                                    <p className="text-white text-[13px] mb-8 font-light leading-relaxed">Vice President for Community Service and Environmental Development Affairs</p>
                                    <div 
                                        onClick={() => handleCopy('v-p.comm@alexu.edu.eg', 'vp3')}
                                        className="mt-auto flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-4 py-3 group hover:bg-white/10 transition-colors cursor-pointer"
                                    >
                                        <div className="flex items-center gap-2 overflow-hidden">
                                            <Mail size={14} className="text-[#D4AF37] opacity-80 shrink-0" />
                                            <span className="text-slate-400 text-[11px] truncate">v-p.comm@alexu...</span>
                                        </div>
                                        {copiedId === 'vp3' ? (
                                            <span className="text-emerald-400 text-[11px] font-medium shrink-0 ml-2">Copied!</span>
                                        ) : (
                                            <Copy size={14} className="text-[#D4AF37] opacity-70 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col bg-[#001A33]/30 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-[#D4AF37]/30 transition-all duration-300 min-h-[460px]">
                                    <div className="h-56 w-full bg-gradient-to-b from-white/5 to-transparent rounded-2xl mb-6 flex items-center justify-center border border-white/5 overflow-hidden">
                                        <img src="/imgs/vp_expert.jpg" alt="Expert Member" className="w-full h-full object-cover object-top" />
                                    </div>
                                    <h4 className="text-xl font-serif text-[#D4AF37] mb-3 leading-snug">Expert Member</h4>
                                    <p className="text-white text-[13px] mb-8 font-light leading-relaxed">Appointed University Education Expert</p>
                                    <div 
                                        onClick={() => handleCopy('expert@alexu.edu.eg', 'vp4')}
                                        className="mt-auto flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-4 py-3 group hover:bg-white/10 transition-colors cursor-pointer"
                                    >
                                        <div className="flex items-center gap-2 overflow-hidden">
                                            <Mail size={14} className="text-[#D4AF37] opacity-80 shrink-0" />
                                            <span className="text-slate-400 text-[11px] truncate">expert@alexu...</span>
                                        </div>
                                        {copiedId === 'vp4' ? (
                                            <span className="text-emerald-400 text-[11px] font-medium shrink-0 ml-2">Copied!</span>
                                        ) : (
                                            <Copy size={14} className="text-[#D4AF37] opacity-70 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="w-full mt-12 bg-white/5 border border-white/10 rounded-2xl py-5 px-6 flex items-center justify-center text-center hover:bg-white/10 hover:border-white/20 transition-all">
                                <p className="text-slate-300 text-sm flex items-center justify-center gap-3 font-light">
                                    <BookOpen size={16} className="text-[#D4AF37]" />
                                    Under the Academic Authority of <span className="font-medium text-white">Supreme Council of Universities</span>
                                    <span className="text-white/30 px-2 select-none">•</span>
                                    <span className="font-medium text-white">Ministry of Higher Education & Scientific Research</span>
                                </p>
                            </div>

                        </div>
                    </div>
                ) : activePage === 'edu_affairs' ? (
                    
                    <div className="max-w-none w-full flex flex-col items-center text-center pb-20">
                        <div className="w-full flex justify-start mb-10">
                            <button 
                                onClick={() => setActivePage('hub')}
                                className="inline-flex items-center gap-2 text-slate-400 hover:text-[#4FD1C5] transition-all duration-300 group cursor-pointer font-medium p-0 bg-transparent border-none"
                            >
                                <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                                <span>Back to Administration Hub</span>
                            </button>
                        </div>

                        <div className="w-full flex flex-col items-center text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-serif text-[#4FD1C5] tracking-wide whitespace-nowrap mb-6">
                                Education & Students' Affairs
                            </h2>
                            <p className="text-[15px] text-white/80 font-light max-w-2xl leading-relaxed">
                                Empowering students through comprehensive support, academic excellence, and vibrant campus life
                            </p>
                        </div>

                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {eduAffairsCards.map((card, idx) => (
                                <div 
                                    key={idx} 
                                    className="group relative bg-[#00172e]/80 backdrop-blur-md border border-white/5 rounded-[32px] p-10 flex flex-col items-center transition-all duration-500 min-h-[400px] shadow-2xl overflow-hidden"
                                >
                                    <div className="flex flex-col items-center justify-center flex-1 w-full transition-transform duration-500 group-hover:-translate-y-20">
                                        <div className="w-[72px] h-[72px] rounded-[24px] bg-[#4FD1C5]/10 flex items-center justify-center text-[#4FD1C5] mb-8 shadow-[inset_0_0_20px_rgba(79,209,197,0.1)] border border-[#4FD1C5]/20 rotate-45 transition-transform duration-500">
                                            <div className="-rotate-45 transition-transform duration-500">
                                                {card.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-[24px] font-serif text-[#4FD1C5] group-hover:text-[#ebd27c] transition-colors duration-500 mb-4">{card.title}</h3>
                                        <p className="text-white/70 text-[14px] font-light text-center px-4 leading-relaxed">{card.desc}</p>
                                    </div>

                                    <div className="absolute bottom-10 left-10 right-10 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 pointer-events-none group-hover:pointer-events-auto">
                                        <div className="w-full h-px bg-white/10 mb-6"></div>
                                        <h4 className="text-[#ebd27c] text-[11px] font-bold tracking-[0.15em] uppercase mb-5 text-center">Quick Links</h4>
                                        <div className="grid grid-cols-2 gap-3">
                                            {card.links.map((link, lIdx) => (
                                                <button key={lIdx} className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-3.5 text-[12px] text-white/80 transition-colors w-full font-medium shadow-sm hover:shadow-md">
                                                    {link}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                ) : activePage === 'council_meetings' ? (
                    <div className="max-w-[1200px] mx-auto w-full flex flex-col items-start text-left pb-20">
                        <div className="mb-10">
                            <button 
                                onClick={() => setActivePage('hub')}
                                className="inline-flex items-center gap-2 text-slate-400 hover:text-[#D4AF37] transition-all duration-300 group cursor-pointer font-medium p-0 bg-transparent border-none"
                            >
                                <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                                <span>Back to Administration Hub</span>
                            </button>
                        </div>

                        <div className="w-full flex flex-col items-start text-left mb-8">
                            <h2 className="text-4xl md:text-5xl font-serif text-white mb-3">
                                Research Intelligence Hub
                            </h2>
                            <p className="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase">
                                GRADUATE STUDIES & RESEARCH SECTOR
                            </p>
                        </div>

                        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
                            {/* Left Box */}
                            <div className="lg:col-span-8 bg-gradient-to-br from-[#c6a355] via-[#816832] to-[#252a36] rounded-[32px] p-6 lg:p-8 flex flex-col shadow-2xl relative">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-2xl font-serif text-white/90">Live Council Broadcast</h3>
                                    <div className="bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> LIVE
                                    </div>
                                </div>

                                <div className="flex-1 w-full bg-[#030b17] rounded-2xl border border-white/10 relative overflow-hidden min-h-[350px] lg:min-h-[450px] flex flex-col justify-end p-8 shadow-inner bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0a192f] to-[#030b17]">
                                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                                    
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="w-20 h-20 rounded-full border border-[#D4AF37]/50 flex items-center justify-center cursor-pointer hover:bg-[#D4AF37]/10 transition-colors pointer-events-auto group">
                                            <Play size={32} className="text-[#D4AF37] ml-2 group-hover:scale-110 transition-transform" />
                                        </div>
                                    </div>

                                    <div className="relative z-10">
                                        <p className="text-white/60 text-[10px] font-bold tracking-widest uppercase mb-2">Active Agenda:</p>
                                        <p className="text-[#D4AF37] text-lg font-serif">Global Research Protocols & Strategic Expansion</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Box */}
                            <div className="lg:col-span-4 bg-gradient-to-br from-[#c6a355] via-[#816832] to-[#252a36] rounded-[32px] p-6 lg:p-8 flex flex-col items-center text-center shadow-2xl relative overflow-hidden">
                                <p className="text-[#ffe9a6] text-[10px] font-bold tracking-widest uppercase mb-8 w-full text-left">Sector Leadership</p>
                                
                                <div className="w-24 h-24 rounded-full border-[3px] border-[#030b17]/20 mb-5 overflow-hidden shadow-xl">
                                    <img src="/imgs/Hesham Saeed.jpg" alt="Prof. Dr. Hesham Saeed" className="w-full h-full object-cover" />
                                </div>
                                
                                <h4 className="text-xl font-serif text-[#ffe9a6] mb-2">Prof. Dr. Hesham Saeed</h4>
                                <p className="text-white/90 text-xs font-light mb-8 px-2">Vice President for Graduate Studies & Research</p>

                                <div className="w-full flex flex-col gap-4 mt-auto">
                                    <div className="bg-white/10 border border-white/20 rounded-2xl p-5 text-left backdrop-blur-sm">
                                        <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider mb-1">Research Grants</p>
                                        <p className="text-white text-lg font-semibold">120+ Active Projects</p>
                                    </div>
                                    <div className="bg-white/10 border border-white/20 rounded-2xl p-5 text-left backdrop-blur-sm">
                                        <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider mb-1">Doctoral Programs</p>
                                        <p className="text-white text-lg font-semibold">850+ PhD Candidates</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Filters */}
                        <div className="w-full bg-transparent border border-[#D4AF37]/30 rounded-[28px] p-6 lg:p-8 flex flex-col mb-10">
                            <p className="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase mb-6">Archive Filters</p>
                            
                            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="relative flex items-center bg-[#00172e]/50 border border-[#D4AF37]/30 rounded-xl px-5 py-4 w-full hover:border-[#D4AF37]/60 transition-colors">
                                    <Search size={16} className="text-[#D4AF37] mr-3 opacity-70" />
                                    <input 
                                        type="text" 
                                        placeholder="Search by Faculty Name" 
                                        className="bg-transparent border-none outline-none text-white text-sm w-full font-light placeholder:text-slate-500"
                                    />
                                </div>
                                
                                <div className="relative flex items-center bg-[#00172e]/50 border border-[#D4AF37]/30 rounded-xl px-5 py-4 w-full hover:border-[#D4AF37]/60 transition-colors">
                                    <div className="mr-3 opacity-70 text-[#D4AF37]"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg></div>
                                    <input 
                                        type="text" 
                                        placeholder="Filter by Topic" 
                                        className="bg-transparent border-none outline-none text-white text-sm w-full font-light placeholder:text-slate-500"
                                    />
                                </div>

                                <div className="relative flex items-center bg-[#00172e]/50 border border-[#D4AF37]/30 rounded-xl px-5 py-4 w-full hover:border-[#D4AF37]/60 transition-colors">
                                    <Calendar size={16} className="text-[#D4AF37] mr-3 opacity-70" />
                                    <select className="bg-transparent border-none outline-none text-slate-500 text-sm w-full font-light appearance-none cursor-pointer">
                                        <option value="">Council Date Range</option>
                                        <option value="2026">2026</option>
                                        <option value="2025">2025</option>
                                        <option value="2024">2024</option>
                                        <option value="2016">2016</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Video Archive Grid */}
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                            {archiveVideos.map((video, idx) => (
                                <div key={idx} className="group relative flex flex-col bg-[#0b162c] border border-[#D4AF37]/20 rounded-2xl overflow-hidden hover:border-[#D4AF37]/60 transition-all duration-300 shadow-lg min-h-[320px]">
                                    {/* Video Placeholder Top */}
                                    <div className="h-44 w-full relative flex items-center justify-center transition-colors duration-500" style={{ backgroundColor: video.color }}>
                                        <div className="absolute top-4 right-4 bg-[#000d1a]/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-bold shadow-sm">
                                            {video.date}
                                        </div>
                                        <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center text-white/50 group-hover:bg-white/10 group-hover:text-white group-hover:border-white transition-all duration-300">
                                            <Play size={24} className="ml-1" />
                                        </div>
                                    </div>
                                    {/* Content Bottom */}
                                    <div className="p-6 flex flex-col flex-1 bg-[#101b33]">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-5 h-5 rounded bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center text-[10px] font-bold shrink-0">
                                                {video.initial}
                                            </div>
                                            <p className="text-[#D4AF37] text-[9px] font-bold tracking-widest uppercase truncate">{video.category}</p>
                                        </div>
                                        <h3 className="text-white text-sm font-medium leading-relaxed line-clamp-3 mb-2 group-hover:opacity-20 transition-opacity duration-300">{video.title}</h3>
                                        
                                        {/* Hover Button */}
                                        <div className="absolute bottom-6 left-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                            <button className="w-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] py-2 rounded-lg text-xs font-semibold hover:bg-[#D4AF37]/30 transition-colors">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : activePage === 'graduate_studies' ? (
                    
                    <div className="max-w-none w-full flex flex-col items-start text-left pb-20">
                        <div className="mb-10">
                            <button 
                                onClick={() => setActivePage('hub')}
                                className="inline-flex items-center gap-2 text-slate-400 hover:text-[#D4AF37] transition-all duration-300 group cursor-pointer font-medium p-0 bg-transparent border-none"
                            >
                                <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                                <span>Back to Administration Hub</span>
                            </button>
                        </div>

                        <div className="w-full flex flex-col items-start text-left mb-10">
                            <h2 className="text-4xl md:text-5xl font-serif text-[#D4AF37] tracking-wide whitespace-nowrap mb-4">
                                Graduate Studies & Research Council
                            </h2>
                            <p className="text-white font-light text-[13px] tracking-wide">
                                Executive Dashboard & Strategic Decision Archive
                            </p>
                        </div>

                        
                        <div className="w-full flex flex-wrap items-center gap-5 mb-8 relative z-50">
                            
                            <div className="relative flex items-center bg-[#00172e] border border-white/10 rounded-full px-5 py-3 w-full md:w-[380px] lg:w-[420px] hover:border-white/20 transition-colors">
                                <Search size={14} className="text-[#4FD1C5] mr-2" />
                                <input 
                                    type="text" 
                                    placeholder="Search Council Records..." 
                                    className="bg-transparent border-none outline-none text-white text-xs w-full font-light placeholder:text-slate-500"
                                />
                            </div>

                            
                            <div className="relative w-full md:w-[300px] lg:w-[340px]">
                                <button 
                                    onClick={() => { setIsGradFacultyOpen(!isGradFacultyOpen); setIsGradPillarOpen(false); }}
                                    className="w-full flex items-center justify-between bg-[#00172e] border border-[#D4AF37]/50 rounded-full px-5 py-3 text-[13px] text-white hover:border-[#D4AF37] transition-colors"
                                >
                                    <span>{gradFaculty}</span>
                                    <ChevronDown size={14} className="text-slate-400" />
                                </button>
                                {isGradFacultyOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-full bg-[#000b18] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50 py-2">
                                        {["All Faculties", "Faculty of Engineering", "Faculty of Medicine", "Faculty of Science", "Faculty of Arts"].map(f => (
                                            <div 
                                                key={f}
                                                onClick={() => { setGradFaculty(f); setIsGradFacultyOpen(false); }}
                                                className={`px-5 py-3 text-xs cursor-pointer hover:bg-blue-500/20 transition-colors ${gradFaculty === f ? 'bg-[#89c5ff] text-black font-medium' : 'text-white'}`}
                                            >
                                                {f}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            
                            <div className="relative w-full md:w-[300px] lg:w-[340px]">
                                <button 
                                    onClick={() => { setIsGradPillarOpen(!isGradPillarOpen); setIsGradFacultyOpen(false); }}
                                    className="w-full flex items-center justify-between bg-[#00172e] border border-white/20 rounded-full px-5 py-3 text-[13px] text-white hover:border-white/40 transition-colors"
                                >
                                    <span>{gradPillar}</span>
                                    <ChevronDown size={14} className="text-slate-400" />
                                </button>
                                {isGradPillarOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-full bg-[#000b18] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50 py-2">
                                        {["All Pillars", "International Joint Degrees", "Research Ethics", "Digital Transformation", "Industry Partnership"].map(p => (
                                            <div 
                                                key={p}
                                                onClick={() => { setGradPillar(p); setIsGradPillarOpen(false); }}
                                                className={`px-5 py-3 text-xs cursor-pointer hover:bg-blue-500/20 transition-colors ${gradPillar === p ? 'bg-[#89c5ff] text-black font-medium' : 'text-white'}`}
                                            >
                                                {p}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 relative z-10">
                            
                            
                            <div className="bg-gradient-to-br from-[#021326] to-[#010914] border border-white/10 rounded-2xl p-8 flex flex-col justify-between min-h-[300px] shadow-lg group">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                    <span className="text-red-500 text-[10px] font-bold tracking-widest uppercase">Live</span>
                                </div>
                                
                                <div className="flex items-center justify-center flex-1">
                                    <div className="w-16 h-16 rounded-full border border-[#D4AF37] flex items-center justify-center cursor-pointer hover:bg-[#D4AF37]/10 transition-colors">
                                        <Play size={20} className="text-[#D4AF37] ml-1" />
                                    </div>
                                </div>
                                
                                <div>
                                    <h3 className="text-2xl font-serif text-white mb-2">Live Council Broadcast</h3>
                                    <p className="text-white/60 text-xs font-light">Current Session: Global Research Synergies & Cross-Border Academic Funding</p>
                                </div>
                            </div>

                            
                            <div className="bg-gradient-to-br from-[#021326] to-[#010914] border border-[#D4AF37]/20 rounded-2xl p-8 flex flex-col min-h-[300px] shadow-lg group">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white mb-6 shadow-md transition-transform duration-700 group-hover:rotate-[360deg]">
                                    <Brain size={24} />
                                </div>
                                <div className="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase mb-3">
                                    April 2026 <span className="text-white/30 mx-2">|</span> <span className="text-white">AU-AI-04</span>
                                </div>
                                <h3 className="text-xl font-serif text-white mb-4 leading-snug">AI Ethics Integration in Postgraduate Programs</h3>
                                <p className="text-white/60 text-[13px] font-light leading-relaxed">
                                    Mandatory implementation of ethical AI modules and machine-learning frameworks across all Science and Engineering master's tracks.
                                </p>
                            </div>

                            
                            <div className="bg-gradient-to-br from-[#021326] to-[#010914] border border-[#D4AF37]/20 rounded-2xl p-8 flex flex-col min-h-[300px] shadow-lg group">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center text-white mb-6 shadow-md transition-transform duration-700 group-hover:rotate-[360deg]">
                                    <Scale size={24} />
                                </div>
                                <div className="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase mb-3">
                                    March 2026 <span className="text-white/30 mx-2">|</span> <span className="text-white">AU-PR-08</span>
                                </div>
                                <h3 className="text-xl font-serif text-white mb-4 leading-snug">Global Performance-Based Promotion System</h3>
                                <p className="text-white/60 text-[13px] font-light leading-relaxed">
                                    Introducing alternative tracks for faculty promotion based on patent generation, industry technology transfer, and regional economic impact metrics.
                                </p>
                            </div>

                            
                            <div className="bg-gradient-to-br from-[#021326] to-[#010914] border border-[#D4AF37]/20 rounded-2xl p-8 flex flex-col min-h-[300px] shadow-lg group">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white mb-6 shadow-md transition-transform duration-700 group-hover:rotate-[360deg]">
                                    <BookOpen size={24} />
                                </div>
                                <div className="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase mb-3">
                                    Nov 2025 <span className="text-white/30 mx-2">|</span> <span className="text-white">AU-DL-12</span>
                                </div>
                                <h3 className="text-xl font-serif text-white mb-4 leading-snug">National Digital Library Project with AI Integrity</h3>
                                <p className="text-white/60 text-[13px] font-light leading-relaxed">
                                    Full synchronization of the Alexandria University local network with the Egyptian Knowledge Bank, featuring automated, real-time plagiarism detection.
                                </p>
                            </div>

                        </div>

                        
                        <div className="w-full bg-[#00172e]/50 border border-[#D4AF37]/20 rounded-2xl p-8 mt-4 flex flex-col items-center shadow-lg">
                            <h4 className="text-[#D4AF37] font-serif text-lg mb-10">Historical Timeline</h4>
                            
                            <div className="relative w-full max-w-4xl flex justify-between items-center px-4">
                                
                                <div className="absolute top-1/2 left-8 right-8 h-[1px] bg-white/10 -translate-y-1/2"></div>
                                
                                
                                <div className="relative flex flex-col items-center gap-4 z-10">
                                    <div className="w-4 h-4 rounded-full bg-slate-400 border-[3px] border-[#00172e]"></div>
                                    <span className="text-slate-400 text-xs">2015</span>
                                </div>
                                <div className="relative flex flex-col items-center gap-4 z-10">
                                    <div className="w-4 h-4 rounded-full bg-slate-400 border-[3px] border-[#00172e]"></div>
                                    <span className="text-slate-400 text-xs">2020</span>
                                </div>
                                <div className="relative flex flex-col items-center gap-4 z-10">
                                    <div className="w-4 h-4 rounded-full bg-slate-400 border-[3px] border-[#00172e]"></div>
                                    <span className="text-slate-400 text-xs">2025</span>
                                </div>
                                <div className="relative flex flex-col items-center gap-4 z-10">
                                    <div className="w-5 h-5 rounded-full bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.6)] border-[3px] border-[#00172e]"></div>
                                    <span className="text-[#D4AF37] text-xs font-medium drop-shadow-md">May 2026</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                ) : activePage === 'community_service' ? (
                    <div className="max-w-7xl mx-auto pb-20 w-full flex flex-col items-start text-left">
                        
                        {!activeCommunityItem && (
                            <div className="w-full flex justify-start mb-10">
                                <button 
                                    onClick={() => setActivePage('hub')}
                                    className="inline-flex items-center gap-2 text-slate-400 hover:text-[#4FD1C5] transition-all duration-300 group cursor-pointer font-medium p-0 bg-transparent border-none"
                                >
                                    <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                                    <span>Back to Administration Hub</span>
                                </button>
                            </div>
                        )}

                        {!activeCommunityItem ? (
                            <>
                                <div className="w-full flex flex-col items-start mb-16">
                                    <h2 className="text-[26px] md:text-4xl lg:text-[46px] font-serif text-[#5ab8a0] tracking-wide mb-10 whitespace-nowrap">
                                        Community Service & Environmental Development
                                    </h2>
                                    <div className="w-full flex flex-col md:flex-row md:items-end">
                                        <div className="shrink-0 pr-6">
                                            <p className="text-slate-400 text-sm font-medium mb-2">Sector Leadership</p>
                                            <p className="text-xl md:text-[22px] text-[#5ab8a0] font-serif tracking-wide">Prof. Dr. Affaf Al-Oufy</p>
                                        </div>
                                        <div className="flex-1 border-b border-[#5ab8a0]/30 mb-2 mt-4 md:mt-0"></div>
                                        <div className="shrink-0 md:pl-6 flex items-center gap-2 text-white font-medium mb-1 mt-4 md:mt-0">
                                            <Recycle size={18} className="text-[#5ab8a0]" />
                                            <span className="whitespace-nowrap">Egypt Vision 2030</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {communityCardsData.map((item, idx) => (
                                        <div 
                                            key={idx} 
                                            onClick={() => setActiveCommunityItem(item)}
                                            className="relative overflow-hidden bg-gradient-to-br from-[#2a5a52]/40 to-[#132d28]/60 backdrop-blur-md border border-[#5ab8a0]/20 rounded-2xl p-8 transition-all duration-300 group shadow-lg min-h-[220px] flex flex-col justify-start cursor-pointer hover:border-[#5ab8a0]/50 hover:-translate-y-1"
                                        >
                                            <div className="absolute top-0 right-0 p-6 z-10 flex justify-end w-full">
                                                {idx !== 1 && (
                                                    <div className="text-[#5ab8a0]/60 text-[10px] font-bold uppercase tracking-widest bg-[#5ab8a0]/10 px-3 py-1 rounded-full border border-[#5ab8a0]/20">
                                                        Strategic
                                                    </div>
                                                )}
                                            </div>
                                            
                                            <div className="absolute top-8 left-8 text-[#5ab8a0] opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none">
                                                {item.icon}
                                            </div>
                                            
                                            <div className="relative z-20 mt-6">
                                                <h3 className="text-[19px] font-serif text-white mb-3 group-hover:text-[#5ab8a0] transition-colors">{item.title}</h3>
                                                <p className="text-slate-300 text-[13px] font-light leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="w-full bg-[#05231c] rounded-[32px] p-12 relative border border-[#5ab8a0]/20 shadow-2xl min-h-[600px] animate-in fade-in zoom-in duration-300 flex flex-col items-start text-left">
                                <button 
                                    onClick={() => setActiveCommunityItem(null)} 
                                    className="absolute top-8 right-8 border border-[#5ab8a0]/30 text-[#5ab8a0] hover:text-white px-6 py-2 rounded-xl text-sm hover:bg-[#5ab8a0]/10 transition-colors font-medium"
                                >
                                    Close
                                </button>
                                
                                <div className="w-16 h-16 bg-[#123d33] rounded-2xl flex items-center justify-center text-[#5ab8a0] mb-8 shadow-inner border border-[#5ab8a0]/10">
                                    {activeCommunityItem.icon}
                                </div>
                                
                                <h2 className="text-4xl md:text-5xl font-serif text-[#5ab8a0] mb-6">{activeCommunityItem.title}</h2>
                                <p className="text-white font-medium text-[15px] mb-8 max-w-3xl leading-relaxed">
                                    {activeCommunityItem.desc}
                                </p>
                                
                                {activeCommunityItem.badge && (
                                    <div className="inline-flex items-center gap-2 bg-[#123d33] text-[#5ab8a0] px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider mb-12 shadow-sm border border-[#5ab8a0]/10">
                                        <TrendingUp size={16} /> {activeCommunityItem.badge}
                                    </div>
                                )}
                                
                                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[1, 2, 3, 4].map((num) => (
                                        <div key={num} className="border border-[#5ab8a0]/20 bg-[#0d362d] rounded-2xl p-8 hover:border-[#5ab8a0]/40 transition-colors">
                                            <h4 className="text-[#5ab8a0] font-medium mb-3 text-[15px]">Key Initiative {num}</h4>
                                            <p className="text-slate-300 text-[13px] leading-relaxed font-light">
                                                Detailed information about this specific program or initiative within the {activeCommunityItem.title.toLowerCase()} sector.
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ) : activePage === 'secretary_general' ? (
                    <div className="max-w-[1400px] mx-auto w-full flex flex-col items-start text-left pb-20">
                        
                        {!activeDeptItem && (
                            <div className="mb-6 w-full">
                                <button 
                                    onClick={() => setActivePage('hub')}
                                    className="inline-flex items-center gap-2 text-slate-400 hover:text-[#D4AF37] transition-all duration-300 group cursor-pointer font-medium p-0 bg-transparent border-none"
                                >
                                    <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                                    <span>Back to Dashboard</span>
                                </button>
                            </div>
                        )}

                        {!activeDeptItem ? (
                            <>
                                <div className="w-full bg-[#001124] border border-[#D4AF37]/30 rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row justify-between mb-8 shadow-2xl relative overflow-hidden">
                                    <div className="flex flex-col z-10 w-full lg:w-2/3">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-1 h-4 bg-[#D4AF37]"></div>
                                            <span className="text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase">University Secretary General Sector</span>
                                        </div>
                                        <h1 className="text-4xl lg:text-5xl font-serif text-[#D4AF37] mb-8">Office of the Secretary General</h1>
                                        
                                        <div className="flex flex-col gap-6 mb-10">
                                            <div className="flex items-start gap-4">
                                                <div className="mt-1 w-6 h-6 rounded bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/20 shrink-0">
                                                    <UserCog size={12} />
                                                </div>
                                                <div>
                                                    <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-1">University General Secretary</p>
                                                    <p className="text-white text-base">Mr. Mohamed Fathi Abu Al-Nassar</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="mt-1 w-6 h-6 rounded bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/20 shrink-0">
                                                    <UserCog size={12} />
                                                </div>
                                                <div>
                                                    <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-1">Acting Assistant Secretary for Financial Affairs</p>
                                                    <p className="text-white text-base">Mr. Mohamed Desouky Hassan Desouky</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="mt-1 w-6 h-6 rounded bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/20 shrink-0">
                                                    <UserCog size={12} />
                                                </div>
                                                <div>
                                                    <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-1">University's Assistant Secretary for Administrative Affairs</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-wrap items-center gap-6 border-t border-white/10 pt-6">
                                            <div className="flex items-center gap-2 text-slate-300 text-sm">
                                                <Mail size={16} className="text-[#D4AF37]" />
                                                <span>Gen.Secret@alexu.edu.eg</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-slate-300 text-sm">
                                                <Phone size={16} className="text-[#D4AF37]" />
                                                <span>03 5921676 / 5921677 / 5921678</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 lg:mt-0 flex flex-col items-end lg:items-center z-10 shrink-0">
                                        <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] px-4 py-1.5 rounded-md text-[10px] font-bold tracking-widest uppercase mb-4 shadow-sm backdrop-blur-sm flex items-center gap-2">
                                            <Award size={12} /> ISO 9001:2015 Certified Quality
                                        </div>
                                        <div className="w-40 h-48 border border-[#D4AF37]/30 rounded-xl overflow-hidden mb-4 bg-gradient-to-b from-white/5 to-transparent flex items-center justify-center">
                                            <img src="/imgs/Mohamed Fathy.jpg" alt="Secretary General" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="border border-[#D4AF37]/40 text-[#D4AF37] px-6 py-2 rounded-full text-xs font-medium tracking-wide uppercase">
                                            Secretary General
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full bg-[#001124] border border-[#D4AF37]/30 rounded-xl p-5 flex items-center justify-between mb-10 cursor-pointer hover:bg-white/5 transition-colors group shadow-lg">
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/20 group-hover:bg-[#D4AF37]/20 transition-colors">
                                            <Lock size={16} />
                                        </div>
                                        <div>
                                            <p className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest mb-0.5">SECOND</p>
                                            <h3 className="text-white font-medium text-lg">Organizational Structure</h3>
                                        </div>
                                    </div>
                                    <ChevronDown size={20} className="text-slate-400 group-hover:text-white transition-colors" />
                                </div>

                                <h3 className="text-[#D4AF37] font-semibold text-lg mb-4">Affiliated Departments</h3>
                                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                                    {secGenDepts.map((dept, idx) => (
                                        <div 
                                            key={idx} 
                                            onClick={() => setActiveDeptItem(dept)}
                                            className="bg-[#001124] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 rounded-xl p-5 flex flex-col justify-between min-h-[100px] group transition-colors cursor-pointer shadow-md"
                                        >
                                            <div className="flex items-start gap-3 mb-4">
                                                <div className="text-[#D4AF37] shrink-0 mt-0.5 opacity-70 group-hover:opacity-100">{dept.icon}</div>
                                                <p className="text-white text-sm font-medium leading-snug">{dept.title}</p>
                                            </div>
                                            <div className="text-[#D4AF37] text-xs font-semibold flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                                                View Tasks <ArrowRight size={12} />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="w-full flex items-center justify-between mb-6">
                                    <h3 className="text-[#D4AF37] font-semibold text-xl">Latest News</h3>
                                    <div className="flex items-center gap-3">
                                        <button 
                                            onClick={() => setNewsIndex(Math.max(0, newsIndex - 1))}
                                            disabled={newsIndex === 0}
                                            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${newsIndex === 0 ? 'border-white/10 text-white/30 cursor-not-allowed' : 'border-[#D4AF37]/50 text-white hover:bg-white/10 cursor-pointer'}`}
                                        >
                                            <ChevronLeft size={16} />
                                        </button>
                                        <button 
                                            onClick={() => setNewsIndex(Math.min(maxNewsIndex, newsIndex + 1))}
                                            disabled={newsIndex >= maxNewsIndex}
                                            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${newsIndex >= maxNewsIndex ? 'border-white/10 text-white/30 cursor-not-allowed' : 'border-white/40 text-white hover:bg-white/10 cursor-pointer'}`}
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
                                                <div className="bg-[#001124] border border-white/5 hover:border-[#D4AF37]/30 rounded-2xl p-6 h-full flex flex-col cursor-pointer transition-colors group min-h-[160px]">
                                                    <div className="flex items-center gap-4 mb-6">
                                                        <div className="border border-[#D4AF37]/40 rounded-2xl px-4 py-2 bg-[#001A33]/50 text-center min-w-[60px]">
                                                            <span className="text-[#D4AF37] text-[10px] font-bold block mb-0.5 uppercase">{news.date.month}</span>
                                                            <span className="text-[#D4AF37] text-2xl font-black leading-none">{news.date.day}</span>
                                                        </div>
                                                        <div className="text-slate-500 text-xs flex items-center gap-1.5 font-medium">
                                                            <BarChart2 size={14} className="text-slate-600" /> {news.hits} hits
                                                        </div>
                                                    </div>
                                                    <p className="text-white text-[15px] leading-relaxed font-medium mb-8 flex-1 group-hover:text-[#D4AF37] transition-colors">{news.title}</p>
                                                    <div className="text-[#3b82f6] text-sm font-semibold flex items-center gap-1.5 w-fit hover:underline">
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
                                            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${idx === newsIndex ? 'w-10 bg-[#D4AF37]' : 'w-2.5 bg-[#D4AF37]/40 hover:bg-[#D4AF37]/70'}`} 
                                        />
                                    ))}
                                </div>

                                <h3 className="text-[#D4AF37] font-semibold text-lg mb-6">Human Resources Electronic Forms</h3>
                                <div className="flex gap-2 mb-6">
                                    <button 
                                        onClick={() => setActiveFormsTab('faculty')}
                                        className={`px-6 py-2 rounded-lg text-xs font-semibold tracking-wide transition-colors ${activeFormsTab === 'faculty' ? 'bg-[#D4AF37]/10 border border-[#D4AF37] text-[#D4AF37]' : 'bg-transparent border border-white/20 text-slate-300 hover:text-white hover:bg-white/5'}`}
                                    >
                                        Faculty Members
                                    </button>
                                    <button 
                                        onClick={() => setActiveFormsTab('employees')}
                                        className={`px-6 py-2 rounded-lg text-xs font-semibold tracking-wide transition-colors ${activeFormsTab === 'employees' ? 'bg-[#D4AF37]/10 border border-[#D4AF37] text-[#D4AF37]' : 'bg-transparent border border-white/20 text-slate-300 hover:text-white hover:bg-white/5'}`}
                                    >
                                        Employees
                                    </button>
                                </div>
                                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                                    {(activeFormsTab === 'faculty' ? facultyForms : employeeForms).map((form, idx) => (
                                        <div key={idx} className="bg-[#001124] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 rounded-xl p-5 flex flex-col group transition-colors cursor-pointer shadow-sm min-h-[120px]">
                                            <FileText size={16} className="text-[#D4AF37] mb-3 opacity-70 group-hover:opacity-100" />
                                            <p className="text-white text-xs font-medium leading-snug mb-4 flex-1">{form}</p>
                                            <div className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                                                <Download size={12} /> Download
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <h3 className="text-[#D4AF37] font-semibold text-lg mb-6">Governance, Training & Awards</h3>
                                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    
                                    <div className="flex flex-col gap-6">
                                        <div className="bg-[#001124] border border-white/5 rounded-2xl p-6 shadow-lg h-full flex flex-col">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-10 h-10 rounded-full bg-[#89c5ff]/10 flex items-center justify-center text-[#89c5ff]">
                                                    <GraduationCap size={20} />
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-bold text-lg leading-tight">Training Department</h4>
                                                    <span className="text-[#89c5ff] text-[10px] font-medium">Professional Development</span>
                                                </div>
                                            </div>
                                            <p className="text-slate-400 text-xs leading-relaxed mb-6">
                                                Providing quality, cost-effective training to increase individual and organizational productivity. We enhance staff and faculty knowledge with high-quality, accessible professional development opportunities to support AU's vision of becoming the best public university dedicated to undergraduate education and research.
                                            </p>
                                            <div className="flex flex-col gap-3 mt-auto">
                                                <div className="bg-[#001A33]/50 border border-white/5 rounded-xl p-4 flex flex-col gap-2">
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-red-400"><AlertCircle size={14} /></div>
                                                        <span className="text-white text-sm font-bold">"Anti-Corruption and Governance"</span>
                                                    </div>
                                                    <span className="text-slate-400 text-[10px] ml-6">13–14 Nov 2022</span>
                                                    <span className="bg-red-500/10 text-red-400 px-3 py-1 rounded-full text-[10px] font-bold w-fit border border-red-500/20 ml-6">Registration Closed</span>
                                                </div>
                                                <div className="bg-[#001A33]/50 border border-white/5 rounded-xl p-4 flex flex-col gap-2">
                                                    <div className="flex items-center gap-2">
                                                        <div className="text-emerald-400"><CheckCircle size={14} /></div>
                                                        <span className="text-white text-sm font-bold">"Competitive Neutrality in Competition Policy"</span>
                                                    </div>
                                                    <span className="text-slate-400 text-[10px] ml-6">29–30 Aug 2022 - In cooperation with the Authority for the Protection of Competition</span>
                                                    <span className="bg-emerald-500/10 text-emerald-400 px-4 py-1 rounded-full text-[10px] font-bold w-fit border border-emerald-500/20 ml-6">Open</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-6">
                                        <div className="bg-[#001124] border border-white/5 rounded-2xl p-6 shadow-lg h-full">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-10 h-10 rounded-xl bg-[#8b5cf6]/10 flex items-center justify-center text-[#8b5cf6] border border-[#8b5cf6]/20">
                                                    <BookOpen size={20} />
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-bold text-lg leading-tight">Laws & Regulations Library</h4>
                                                    <span className="text-[#8b5cf6] text-[10px] font-medium">Legal Framework</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <a 
                                                    href="https://www.alexu.edu.eg/images/%D9%85%D8%AF%D9%88%D9%86%D8%A9-%D8%B3%D9%84%D9%88%D9%83-%D9%88%D8%A7%D8%AE%D9%84%D8%A7%D9%82%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D9%88%D8%B8%D9%8A%D9%81%D8%A9-%D8%A7%D9%84%D8%B9%D8%A7%D9%85%D8%A9-.pdf" 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="bg-[#001A33]/50 border-2 border-white rounded-xl p-4 flex items-center justify-between transition-all hover:bg-white/5 group"
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-8 h-8 rounded-full bg-[#89c5ff]/10 flex items-center justify-center text-[#89c5ff]">
                                                            <Shield size={16} />
                                                        </div>
                                                        <span className="text-white text-sm font-medium">Employee Code of Conduct</span>
                                                    </div>
                                                    <ExternalLink size={14} className="text-slate-400 group-hover:text-white transition-colors" />
                                                </a>
                                                <div className="bg-[#001A33]/50 border border-white/5 rounded-xl p-4 flex items-center justify-between transition-colors cursor-pointer hover:bg-white/5 group">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-8 h-8 rounded-full bg-[#8b5cf6]/10 flex items-center justify-center text-[#8b5cf6]">
                                                            <BookOpen size={16} />
                                                        </div>
                                                        <span className="text-white text-sm font-medium">Civil Service Law</span>
                                                    </div>
                                                    <ExternalLink size={14} className="text-slate-500 group-hover:text-white transition-colors" />
                                                </div>
                                                <div className="bg-[#001A33]/50 border border-white/5 rounded-xl p-4 flex items-center justify-between transition-colors cursor-pointer hover:bg-white/5 group">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-8 h-8 rounded-full bg-[#10b981]/10 flex items-center justify-center text-[#10b981]">
                                                            <FileText size={16} />
                                                        </div>
                                                        <span className="text-white text-sm font-medium">Public Contracts Law No. 182 of 2018</span>
                                                    </div>
                                                    <ExternalLink size={14} className="text-slate-500 group-hover:text-white transition-colors" />
                                                </div>
                                                <div className="bg-[#001A33]/50 border border-white/5 rounded-xl p-4 flex items-center justify-between transition-colors cursor-pointer hover:bg-white/5 group">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-8 h-8 rounded-full bg-[#f97316]/10 flex items-center justify-center text-[#f97316]">
                                                            <FileText size={16} />
                                                        </div>
                                                        <span className="text-white text-sm font-medium">The New Public Contracts Law No. 182 of 2018</span>
                                                    </div>
                                                    <ExternalLink size={14} className="text-slate-500 group-hover:text-white transition-colors" />
                                                </div>
                                                <div className="bg-[#001A33]/50 border border-white/5 rounded-xl p-4 flex items-center justify-between transition-colors cursor-pointer hover:bg-white/5 group">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-8 h-8 rounded-full bg-[#f59e0b]/10 flex items-center justify-center text-[#f59e0b]">
                                                            <Target size={16} />
                                                        </div>
                                                        <span className="text-white text-sm font-medium">Egyptian National Anti-Corruption Strategy</span>
                                                    </div>
                                                    <ExternalLink size={14} className="text-slate-500 group-hover:text-white transition-colors" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-6">
                                        <div className="bg-gradient-to-br from-[#1a1500] to-[#001124] border border-[#D4AF37]/50 rounded-2xl p-6 shadow-[0_0_20px_rgba(212,175,55,0.05)] h-full flex flex-col">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/40 shadow-inner">
                                                    <Award size={20} />
                                                </div>
                                                <div>
                                                    <h4 className="text-[#D4AF37] font-serif text-xl">Government Excellence Award</h4>
                                                    <span className="text-[#D4AF37] text-[10px] tracking-widest font-medium">Egypt Vision 2030 - Second Session 2020</span>
                                                </div>
                                            </div>
                                            <div className="bg-white/5 border border-[#D4AF37]/20 rounded-xl p-6 relative overflow-hidden group hover:border-[#D4AF37]/50 transition-colors flex-1">
                                                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                <div className="relative z-10">
                                                    <div className="flex items-center gap-2 mb-4">
                                                        <span className="bg-[#D4AF37] text-[#000D1A] px-3 py-1 rounded-full text-[10px] font-bold">3rd Place</span>
                                                        <span className="text-slate-300 text-xs">Leadership Excellence - General Manager Category</span>
                                                    </div>
                                                    <h5 className="text-white text-xl font-serif mb-1">Dr. Nadira Sobhy Mohamed</h5>
                                                    <p className="text-slate-400 text-xs mb-5">Director General of Information, Documentation & Decision Support Center</p>
                                                    <div className="flex flex-col gap-3 text-[11px] text-slate-300">
                                                        <div className="flex items-start gap-2"><Lightbulb size={14} className="text-[#D4AF37] shrink-0" /><span>In light of Egypt's sustainable development plan "Egypt Vision 2030"</span></div>
                                                        <div className="flex items-start gap-2"><Award size={14} className="text-[#D4AF37] shrink-0" /><span>Ideal Employee Category also available for all government positions</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col gap-6">
                                        <div className="bg-[#001124] border border-[#4FD1C5]/30 rounded-2xl p-6 shadow-lg h-full flex flex-col">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-10 h-10 rounded-lg bg-[#4FD1C5]/10 flex items-center justify-center text-[#4FD1C5] border border-[#4FD1C5]/20">
                                                    <Globe size={20} />
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-serif text-xl">Civic Gateway & Utility Links</h4>
                                                    <span className="text-[#4FD1C5] text-[10px] uppercase tracking-widest font-medium">Important Links & Services</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-3 mb-6">
                                                {["E-Publishing System (Public Contracts Portal)", "Egypt's Government Services Portal", "Unified Government Complaints Portal", "Opinion Polls"].map((link, idx) => (
                                                    <div key={idx} className="bg-[#001A33]/50 border border-white/5 hover:border-[#4FD1C5]/30 rounded-xl p-4 flex items-center justify-between transition-colors cursor-pointer group">
                                                        <div className="flex items-center gap-3">
                                                            {idx === 0 && <Globe size={14} className="text-[#4FD1C5]" />}
                                                            {idx === 1 && <Smartphone size={14} className="text-[#4FD1C5]" />}
                                                            {idx === 2 && <MessageSquare size={14} className="text-[#4FD1C5]" />}
                                                            {idx === 3 && <BarChart2 size={14} className="text-[#4FD1C5]" />}
                                                            <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">{link}</span>
                                                        </div>
                                                        <ExternalLink size={14} className="text-slate-500 group-hover:text-[#4FD1C5] opacity-0 group-hover:opacity-100 transition-all" />
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="bg-transparent rounded-xl pt-2 border-t border-white/10 mt-auto">
                                                <span className="text-[#D4AF37] text-[10px] uppercase font-bold tracking-widest mb-3 block">Quick Contact</span>
                                                <div className="flex flex-col gap-2">
                                                    <div className="flex items-center gap-2 text-slate-300 text-xs"><Mail size={12} className="text-[#D4AF37]" /> Gen.Secret@alexu.edu.eg</div>
                                                    <div className="flex items-center gap-2 text-slate-300 text-xs"><Phone size={12} className="text-[#D4AF37]" /> 03 5921676</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="w-full bg-[#001124] border border-[#D4AF37]/30 rounded-2xl p-8 animate-in fade-in zoom-in duration-300 shadow-2xl">
                                <div className="w-full flex justify-start mb-10">
                                    <button 
                                        onClick={() => setActiveDeptItem(null)}
                                        className="inline-flex items-center gap-2 text-slate-400 hover:text-[#D4AF37] transition-all duration-300 group cursor-pointer font-medium p-0 bg-transparent border-none"
                                    >
                                        <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                                        <span>Back to Secretary General Sector</span>
                                    </button>
                                </div>

                                <div className="flex items-center gap-4 mb-8 border-b border-[#D4AF37]/20 pb-6">
                                    <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] border border-[#D4AF37]/30 shrink-0">
                                        <Building2 size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[#89c5ff] text-[10px] font-bold tracking-widest uppercase mb-1">Tasks & Competencies</p>
                                        <h2 className="text-2xl font-serif text-[#D4AF37] leading-snug">{activeDeptItem.title}</h2>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    {activeDeptItem.tasks.map((task: string, i: number) => (
                                        <div key={i} className="flex items-center gap-4 bg-[#001A33]/30 border border-[#D4AF37]/20 rounded-xl p-4 hover:border-[#D4AF37]/50 transition-colors">
                                            <div className="w-6 h-6 rounded-full border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] text-xs font-bold shrink-0 shadow-[inset_0_0_8px_rgba(212,175,55,0.2)]">
                                                {i + 1}
                                            </div>
                                            <p className="text-slate-300 text-sm leading-relaxed">{task}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    
                    <div className="max-w-none w-full flex flex-col items-start text-left pb-20">
                        <div className="mb-10">
                            <button 
                                onClick={() => setActivePage('hub')}
                                className="inline-flex items-center gap-2 text-slate-400 hover:text-[#D4AF37] transition-all duration-300 group cursor-pointer font-medium p-0 bg-transparent border-none"
                            >
                                <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                                <span>Back to Administration Hub</span>
                            </button>
                        </div>

                        <div className="w-full flex flex-col items-start text-left mb-10">
                            <h2 className="text-4xl md:text-5xl font-serif text-[#D4AF37] tracking-wide whitespace-nowrap mb-4">
                                University Leaders Directory
                            </h2>
                            <p className="text-slate-300 font-light text-sm">
                                Created: 20 May 2021
                            </p>
                        </div>

                        <div className="w-full bg-[#001A33]/40 backdrop-blur-md border border-[#D4AF37]/20 rounded-2xl p-6 mb-12 flex flex-wrap gap-4 items-center">
                            {filterCategories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveFilter(category)}
                                    className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                                        activeFilter === category 
                                        ? 'bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]' 
                                        : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10 hover:border-white/20'
                                    }`}
                                >
                                    {category}
                                    {activeFilter === category && <X size={14} className="text-[#D4AF37]" />}
                                </button>
                            ))}
                        </div>

                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {filteredLeaders.map((leader, idx) => (
                                <div 
                                    key={idx} 
                                    className="relative bg-gradient-to-br from-[#c8a14b] via-[#8c6a28] to-[#292621] rounded-[32px] p-6 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:-translate-y-1 transition-transform duration-300 min-h-[350px]"
                                >
                                    {leader.isActing && (
                                        <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#000D1A] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest shadow-md">
                                            ACTING
                                        </div>
                                    )}
                                    
                                    <div className="w-[90px] h-[90px] rounded-full bg-[#202c3b] mt-2 mb-5 flex items-center justify-center shrink-0 shadow-[inset_0_4px_10px_rgba(0,0,0,0.4)]">
                                        <span className="text-white/40 text-[11px] font-light">[Photo]</span>
                                    </div>
                                    
                                    <div className="flex-1 w-full flex flex-col justify-start">
                                        <h4 className="text-[18px] font-serif text-[#ebd27c] mb-1.5 leading-snug font-medium">
                                            {leader.name}
                                        </h4>
                                        <p className="text-white/80 text-[12px] font-light leading-relaxed px-2">
                                            {leader.faculty}
                                        </p>
                                    </div>
                                    
                                    <div className="w-full flex justify-center gap-3 pt-6 mt-auto">
                                        <button className="flex-1 h-11 rounded-[14px] bg-[#D4AF37]/10 border border-[#ebd27c]/30 flex items-center justify-center text-[#ebd27c] hover:bg-[#D4AF37]/20 transition-colors">
                                            <GraduationCap size={18} strokeWidth={1.5} />
                                        </button>
                                        <button className="flex-1 h-11 rounded-[14px] bg-[#D4AF37]/10 border border-[#ebd27c]/30 flex items-center justify-center text-[#ebd27c] hover:bg-[#D4AF37]/20 transition-colors">
                                            <FlaskConical size={18} strokeWidth={1.5} />
                                        </button>
                                        <button className="flex-1 h-11 rounded-[14px] bg-[#D4AF37]/10 border border-[#ebd27c]/30 flex items-center justify-center text-[#ebd27c] hover:bg-[#D4AF37]/20 transition-colors">
                                            <UserCog size={18} strokeWidth={1.5} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {filteredLeaders.length === 0 && (
                            <div className="w-full text-center py-20 text-slate-400">
                                No leaders found in this category.
                            </div>
                        )}
                        
                    </div>
                    
                )}
            </div>
            
            {activePage === 'secretary_general' && (
                <div className="w-full text-center mt-12 text-slate-500 text-[10px] pb-8 relative z-10">
                    © 2026 Alexandria University - University Secretary General Sector - Excellence in Administration Since 1942
                </div>
            )}
        </main>
    );
}