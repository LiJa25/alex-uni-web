"use client";

import { useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

interface Article {
    id: number;
    title: string;
    day: string;
    month: string;
    image: string;
    fullContent: {
        en: string;
        ar: string;
    };
}

export default function LatestNews() {
    const { strings, language } = useLanguage();
    const isRTL = language === "ar";
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showAll, setShowAll] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            let scrollAmount = direction === "left" ? -400 : 400;
            if (isRTL) {
                scrollAmount = direction === "left" ? 400 : -400;
            }
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    const newsArticles: Article[] = [
        {
            id: 1,
            title: strings.latestNews.articles[0]?.title || "Vice President Dr. Saeed Allam discusses with the Board of Trustees the completion of maintenance work for all facilities and buildings.",
            day: "28",
            month: "NOV",
            image: "/imgs/Article photo 1.jpg",
            fullContent: {
                en: "Vice President Dr. Saeed Allam held an extensive meeting with the Board of Trustees to review the comprehensive operational roadmap. The discussions focused heavily on the absolute completion of structural maintenance work across all university facilities, historical campuses, and administrative buildings before the upcoming academic cycle. The board emphasized optimizing resources to ensure safety and infrastructure excellence.",
                ar: "عقد نائب رئيس الجامعة الدكتور سعيد علام اجتماعاً موسعاً مع مجلس الأمناء لمراجعة خطة العمل التشغيلية الشاملة. ركزت المناقشات بشكل مكثف على الإتمام الكامل لأعمال الصيانة الهيكلية في جميع مرافق الجامعة، الحرم الجامعي التاريخي، والمباني الإدارية قبل بدء الدورة الأكاديمية القادمة. وشدد المجلس على تحسين استخدام الموارد لضمان السلامة والتميز في البنية التحتية."
            }
        },
        {
            id: 2,
            title: strings.latestNews.articles[1]?.title || "Board of Trustees discusses administrative preparations for organizing entrance exams for Academic Year 2024/2025.",
            day: "22",
            month: "JUL",
            image: "/imgs/Article photo 5.jpg",
            fullContent: {
                en: "The Board of Trustees convened to establish the dynamic framework for the Academic Year 2024/2025 admissions cycle. The session detailed advanced administrative and logistical preparations required for organizing undergraduate and postgraduate entrance examinations. New digital validation systems and automated student sitting distributions were approved to streamline the evaluation process seamlessly.",
                ar: "اجتمع مجلس الأمناء لإنشاء الإطار الديناميكي لدورة القبول للعام الأكاديمي 2024/2025. وفصلت الجلسة الاستعدادات الإدارية واللوجستية المتقدمة اللازمة لتنظيم امتحانات القبول لمرحلتي البكالوريوس والدراسات العليا. تم اعتماد أنظمة التحقق الرقمية الجديدة وتوزيعات جلوس الطلاب المؤتمتة لتبسيط عملية التقييم بسلاسة."
            }
        },
        {
            id: 3,
            title: strings.latestNews.articles[2]?.title || "Board of Trustees discusses mechanisms for implementing university's programs and performance budget.",
            day: "26",
            month: "JUN",
            image: "/imgs/Article photo 3.jpg",
            fullContent: {
                en: "During its structural strategic review, the Board of Trustees explored modern analytical mechanisms for executing the university's targeted academic programs aligned with the annual performance budget. Financial controllers and faculty deans coordinated to establish structural key performance indicators (KPIs), tracking research output spend allocations and department resource deployment.",
                ar: "خلال مراجعته الاستراتيجية الهيكلية، بحث مجلس الأمناء الآليات التحليلية الحديثة لتنفيذ برامج الجامعة الأكاديمية المستهدفة بما يتماشى مع ميزانية الأداء السنوية. نسق المراقبون الماليون وعمداء الكليات لوضع مؤشرات الأداء الرئيسية الهيكلية (KPIs)، وتتبع مخصصات الإنفاق على المخرجات البحثية ونشر موارد الأقسام."
            }
        },
        {
            id: 4,
            title: strings.latestNews.articles[3]?.title || "Board of Trustees directs necessity of optimal budget use for Fiscal Year 2024/2025.",
            day: "24",
            month: "MAY",
            image: "/imgs/Article photo 6.jpg",
            fullContent: {
                en: "The executive committee of the Board of Trustees issued a binding institutional directive enforcing the optimal management of the financial budget allocated for Fiscal Year 2024/2025. The guidelines strictly mandate prioritizing expenditure on advanced technological infrastructure, digital library subscriptions, laboratory material procurements, and strategic sustainable campus upgrades.",
                ar: "أصدرت اللجنة التنفيذية لمجلس الأمناء توجيهاً مؤسسياً ملزماً يقضي بالإدارة المثلى للموازنة المالية المخصصة للسنة المالية 2024/2025. وتفرض المبادئ التوجيهية بصرامة إعطاء الأولوية للإنفاق على البنية التحتية التكنولوجية المتقدمة، واشتراكات المكتبة الرقمية، والمشتريات من المواد المختبرية، والتحديثات الاستراتيجية المستدامة للحرم الجامعي."
            }
        },
        {
            id: 5,
            title: strings.latestNews.articles[4]?.title || "Board of Trustees Discusses Preparations for Second Semester Final Exams.",
            day: "21",
            month: "APR",
            image: "/imgs/Article photo 7.jpg",
            fullContent: {
                en: "The Board of Trustees held a security and scheduling conference regarding the upcoming second semester final examinations. Comprehensive monitoring schedules, proctor assignments, and secure question paper bank distribution protocols were systematically finalized. The board also verified that the internal institutional networks and power backups are fully redundant to prevent any testing delays.",
                ar: "عقد مجلس الأمناء مؤتمراً للأمن والجدولة بخصوص امتحانات نهاية الفصل الدراسي الثاني القادمة. تم بشكل منهجي وضع اللمسات الأخيرة على جداول المراقبة الشاملة، وتكليفات المراقبين، وبروتوكولات توزيع بنك أوراق الأسئلة الآمنة. كما تحقق المجلس من أن الشبكات المؤسسية الداخلية والنسخ الاحتياطية للطاقة جاهزة بالكامل لمنع أي تأخير في الاختبارات."
            }
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
                        <div 
                            key={article.id}
                            onClick={() => setSelectedArticle(article)}
                            className={`bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-gray-100 dark:border-gray-800 cursor-pointer ${
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
                                <h3 className="font-kameron text-[22px] font-bold text-blue-900 dark:text-gray-100 leading-snug mb-8 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-3">
                                    {article.title}
                                </h3>
                                
                                <div className="mt-auto flex items-center gap-2 text-harvest-gold-500 font-bold text-xs uppercase tracking-widest transition-colors">
                                    {strings.latestNews.readMore}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transform transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {selectedArticle && (
                <div 
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
                    onClick={() => setSelectedArticle(null)}
                >
                    <div 
                        className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative border border-gray-100 dark:border-gray-800"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            onClick={() => setSelectedArticle(null)}
                            className={`absolute top-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-20 ${isRTL ? 'left-4' : 'right-4'}`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>

                        <div className="relative h-72 w-full">
                            <img 
                                src={selectedArticle.image} 
                                alt={selectedArticle.title} 
                                className="w-full h-full object-cover"
                            />
                            <div className={`absolute bottom-4 bg-harvest-gold-500 text-blue-900 flex flex-col items-center justify-center w-14 h-16 rounded-lg shadow-md z-10 ${isRTL ? 'right-6' : 'left-6'}`}>
                                <span className="text-xl font-bold leading-none mb-0.5">{selectedArticle.day}</span>
                                <span className="text-[10px] font-bold uppercase tracking-wider">{selectedArticle.month}</span>
                            </div>
                        </div>

                        <div className="p-8 max-h-[240px] overflow-y-auto">
                            <h3 className="font-kameron text-2xl font-bold text-blue-900 dark:text-gray-100 leading-snug mb-4">
                                {selectedArticle.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                                {isRTL ? selectedArticle.fullContent.ar : selectedArticle.fullContent.en}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}