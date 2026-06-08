"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { 
  Users, GraduationCap, Briefcase, BarChart3, Target, 
  Lightbulb, Heart, Clock, Medal, BarChart, School, Globe, 
  Building2, ChevronLeft, ChevronRight, Trophy, Book, ArrowRight,
  FlaskConical, Building, Stethoscope, BookOpen, DollarSign, TrendingUp, Calendar, MapPin, Maximize, Bed,  Microscope, Dumbbell, Library,  Leaf, Baby, // الأيقونات الجديدة
} from "lucide-react";
import { motion } from "framer-motion";


const OrbitCard = ({ card, isRTL }: { card: any, isRTL: boolean }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const isYellowBg = card.color === "#C9A227";

  return (
    <div 
      className="relative w-full h-full perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 1.5, type: "spring", stiffness: 40, damping: 12 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {/* Global Rank Orbit Front side */}
        <div 
          className={`absolute inset-0 w-full h-full backdrop-blur-md border-2 border-white/20 rounded-[35px] p-6 flex flex-col items-center justify-center ${card.color ? '' : 'bg-[#2b73a3]/30'}`}
          style={{ 
            backfaceVisibility: "hidden",
            backgroundColor: card.color ? card.color : undefined 
          }}
        >
          <div 
            className="text-6xl font-bold text-white mb-4" 
            style={{ 
              fontFamily: 'Poppins, sans-serif', 
              textShadow: card.bgTitle === "QS" ? 'rgba(255, 255, 255, 0.718) 0px 0px 34.5151px' : 'rgba(255, 255, 255, 0.553) 0px 0px 23.5124px'
            }}
          >
            {card.bgTitle}
          </div>
          
          <div 
            className="text-white/90 text-center text-sm font-medium" 
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {card.title}
          </div>
          
          <div className="mt-4 text-[10px] text-white/60 text-center transition-colors z-20">
            Click to flip
          </div>
        </div>

        {/* Global Rank Orbit BACK SIDE */}
        <div 
          className={`absolute inset-0 w-full h-full backdrop-blur-md border-2 border-white/20 rounded-[35px] p-6 flex flex-col justify-center gap-4 ${card.color ? '' : 'bg-[#2b73a3]/30'}`}
          style={{ 
            backfaceVisibility: "hidden", 
            transform: "rotateY(180deg)",
            backgroundColor: card.color ? card.color : undefined 
          }}
        >
          <div className="text-center">
            <div className="text-white/70 text-xs mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
              🌍 World
            </div>
            <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {card.backData.world}
            </div>
          </div>
          
          <div className="text-center">
            <div className={isYellowBg ? "text-white/80 text-xs mb-1" : "text-[#C9A227] text-xs mb-1"} style={{ fontFamily: 'Inter, sans-serif' }}>
              🌍 Africa
            </div>
            <div className={isYellowBg ? "text-2xl font-bold text-white" : "text-2xl font-bold text-[#C9A227]"} style={{ fontFamily: 'Poppins, sans-serif' }}>
              {card.backData.africa}
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-white text-xs mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
              🇪🇬 Egypt
            </div>
            <div className="text-3xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {card.backData.egypt}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};    


export default function About() {
  const { strings, language } = useLanguage();
  const about = strings.about;
  const isRTL = language === "ar";
  const [activeTab, setActiveTab] = useState(0);
  const [openedRanks, setOpenedRanks] = useState<number[]>([]);
  const [isDeployed, setIsDeployed] = useState(false);

  const [showPresidents, setShowPresidents] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPresIndex, setCurrentPresIndex] = useState(0);
  const [currentLegacyIndex, setCurrentLegacyIndex] = useState(0); // للـ Legacy of Leadership carousel
  
  const facultyList = [
  isRTL ? "كلية الطب" : " Medicine",
  isRTL ? "كلية الهندسة" : "Engineering",
  isRTL ? "كلية العلوم" : "Science",
  isRTL ? "كلية الآداب" : "Arts",
  isRTL ? "كلية الحقوق" : "Law",
  isRTL ? "كلية التجارة" : "Commerce",
  isRTL ? "كلية الصيدلة" : "Pharmacy",
  isRTL ? "كلية طب الأسنان" : "Dentistry",
  isRTL ? "كلية الزراعة" : "Agriculture",
  isRTL ? "كلية التربية" : "Education",
  isRTL ? "كلية التمريض" : "Nursing",
  isRTL ? "كلية الفنون الجميلة" : "Fine Arts",
  isRTL ? "كلية السياحة والفنادق" : "Tourism & Hotels",
  isRTL ? "كلية الحاسبات والذكاء الاصطناعي" : "AI & Computers",
  isRTL ? "كلية الدراسات الاقتصادية" : "Economic Studies",
  isRTL ? "معهد البحوث الطبية" : "Medical Research Institute",
  isRTL ? "كلية التربية الرياضية" : "Physical Education",
  isRTL ? "معهد الصحة العامة" : "Public Health Institute",
  isRTL ? "كلية الدراسات العليا" : "Graduate Studies",
  isRTL ? "كلية التربية النوعية" : "Specific Education",
  isRTL ? "كلية الخدمة الاجتماعية" : "Social Work",
  isRTL ? "كلية الطفولة المبكرة" : "Childhood Education",
  isRTL ? "كلية الطب البيطري" : "Veterinary Medicine"
];

  const presidentsData = [
    { name: "Prof. Taha Hussien", period: "1942–1944" },
    { name: "Prof. Mansour Fahmy", period: "1944–1946" },
    { name: "Prof. Muhammed Sadek Gohar", period: "1946–1950" },
    { name: "Prof. Mustafa Ammer", period: "1950–1953" },
    { name: "Prof. Muhammed Awad Muhammed", period: "1953–1954" },
    { name: "Prof. Elsayed Mustafa", period: "1954–1958" },
    { name: "Prof. Mahmoud Samy", period: "1958" },
    { name: "Prof. Abdelaziz Elsayed", period: "1958–1961" },
    { name: "Prof. Aly Muhammed Shayeb", period: "1961–1963" },
    { name: "Prof. Muhammed Naguib Hashad", period: "1963–1964" },
    { name: "Prof. Hassan Baghdady", period: "1964–1971" },
    { name: "Prof. Muhammed Lotfy Dowidar", period: "1971–1976" },
    { name: "Prof. Aly Reda Elhnidy", period: "1976–1980" },
    { name: "Prof. Mahmoud Elhadary", period: "1980–1984" },
    { name: "Prof. Farid Mustafa", period: "1984–1987" },
    { name: "Prof. Abdelaziz AboKhedr", period: "1987–1988" },
    { name: "Prof. Sayed Abdelfatah", period: "1988–1992" },
    { name: "Prof. Essam Salem", period: "1992–1999" },
    { name: "Prof. Nasr Eldin Damier", period: "1999–2003" },
    { name: "Prof. Mohamed Abdellah", period: "2003–2006" },
    { name: "Prof. Hassan Nadir", period: "2006–2009" },
    { name: "Prof. Hend Hanafy", period: "2009–2011" },
    { name: "Prof. Osama Ibrahim", period: "2011–2014" },
    { name: "Prof. Roshdy Zahran", period: "2014–2016" }
  ];

  const totalPages = Math.ceil(presidentsData.length / 4);
  
const nextPres = () => {  setCurrentPresIndex((prev) => (prev + 1) % totalPages);};

const prevPres = () => {
  setCurrentPresIndex((prev) => (prev - 1 + totalPages) % totalPages);
};

  const nextSlide = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevSlide = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const nextPresident = () => setCurrentPage((prev) => (prev + 1) % presidentsData.length);
  const prevPresident = () => setCurrentPage((prev) => (prev - 1 + presidentsData.length) % presidentsData.length);

  

const [activeSubTab, setActiveSubTab] = useState("CONFERENCES");

  const icons = [
    <Users key="1" className="w-6 h-6 md:w-9 md:h-9 text-white" />,
    <GraduationCap key="2" className="w-6 h-6 md:w-9 md:h-9 text-white" />,
    <Briefcase key="3" className="w-6 h-6 md:w-9 md:h-9 text-white" />,
    <BarChart3 key="4" className="w-6 h-6 md:w-9 md:h-9 text-white" />,
  ];

  const panelIcons = [
    <Target key="p1" className="w-7 h-7 text-[#004a77]" />,
    <Lightbulb key="p2" className="w-7 h-7 text-[#c89a26]" />,
    <Heart key="p3" className="w-7 h-7 text-sky-500" />,
  ];
  const [activeCampus, setActiveCampus] = useState(0);
  const campuses = [
    { id: "01", name: isRTL ? "الإسكندرية" : "Alexandria", sub: isRTL ? "الحرم الرئيسي" : "Main Campus", year: isRTL ? "الرئيسي" : "Main", pos: "top-[30%] left-[46%]", color: "text-[#ce983b]" },
    { id: "02", name: isRTL ? "بيروت" : "Beirut", sub: isRTL ? "جامعة بيروت العربية" : "Arab University of Beirut", year: "EST. 1960", pos: "top-[38%] right-[30%]", color: "text-white" },
    { id: "03", name: isRTL ? "إنجامينا" : "N'djamena", sub: isRTL ? "فرع تشاد" : "Chad Campus", year: "EST. 1994", pos: "top-[52%] left-[32%]", color: "text-white" },
    { id: "04", name: isRTL ? "جوبا" : "Juba", sub: isRTL ? "فرع السودان" : "Sudan Campus", year: "EST. 1875", pos: "top-[62%] right-[36%]", color: "text-[#001a33]", isSpecial: true }
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCampus((prev) => (prev + 1) % campuses.length);
    }, 2000); // يلف كل ثانيتين
    return () => clearInterval(interval);
  }, [campuses.length]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLegacyIndex((prev) => (prev + 1) % presidentsData.length);
    }, 2000);
    return () => clearInterval(interval); 
  }, [presidentsData.length]);

  
  return (
    <>
<main dir={isRTL ? "rtl" : "ltr"} className={`relative w-full bg-gray-50 dark:bg-slate-950 dark:text-slate-100 ${isRTL ? "font-serif text-right" : "text-left"}`}>
        {/* 1. About us Section  */}
        <section className="relative w-full bg-[#f4f8fb] text-[#004a77] dark:bg-[#07121f] dark:text-white min-h-[70vh] py-20 md:py-32 flex items-center overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
            <img src="/logo-watermark.png" alt="watermark" className="w-[500px] md:w-[700px] object-contain" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
            <div className="text-center">
              <h1 style={{ fontFamily: 'Georgia, serif' }} className="text-4xl sm:text-5xl md:text-6xl font-light mb-8 leading-[1.1] tracking-tight">
                {about.headingLines.map((line, idx) => (
                  <div key={idx} className="block">{line}</div>
                ))}
              </h1>
              <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
                {about.description}
              </p>
            </div>
          </div>
        </section>

        {/* 2. About us cards */}
        <section className="w-full py-16 md:py-24 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
              {[
                { title: about.cards[0].title, sub: about.cards[0].subtitle, color: "bg-[#2b73a3]", icon: <Target className="w-10 h-10 text-white" />, num: "01" },
                { title: about.cards[1].title, sub: about.cards[1].subtitle, color: "bg-[#ce983b]", icon: <Clock className="w-10 h-10 text-white" />, num: "02" },
                { title: about.cards[2].title, sub: about.cards[2].subtitle, color: "bg-[#5a9ec6]", icon: <Medal className="w-10 h-10 text-white" />, num: "03" },
                { title: about.cards[3].title, sub: about.cards[3].subtitle, color: "bg-[#6279a1]", icon: <BarChart className="w-10 h-10 text-white" />, num: "04" }
              ].map((card, idx) => (
                <div key={idx} className={`${card.color} rounded-[40px] p-10 md:p-14 text-white flex flex-col items-center text-center relative shadow-xl transition-all duration-500 hover:scale-[1.03] overflow-hidden group`}>
                  <div className="absolute top-8 right-10 bg-black/10 rounded-full px-4 py-1.5 text-xs font-black backdrop-blur-md border border-white/10">{card.num}</div>
                  <div className="w-24 h-24 rounded-[28px] bg-white/20 flex items-center justify-center mb-8 shadow-inner backdrop-blur-sm border border-white/10">{card.icon}</div>
                  <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-3xl md:text-[38px] font-bold mb-4 tracking-tight leading-tight">{card.title}</h3>
                  <p className="text-sm md:text-[17px] text-white/85 font-medium max-w-[300px]">{card.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. about us content */}
        <section className="w-full bg-[#f8fafc] dark:bg-slate-950 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="flex flex-col lg:flex-row gap-10 w-full overflow-visible">
              
              <aside className="w-full lg:w-[260px] shrink-0">
                <div className="bg-white dark:bg-slate-900 dark:border-gray-800 rounded-lg overflow-hidden shadow-sm">
                  <div className="px-8 py-6"><h3 className="text-2xl font-bold text-[#004a77] dark:text-white">About Us</h3></div>
                  <nav className="flex flex-col gap-3 px-4 pb-6">
                    {about.navItems.map((item, idx) => (
                      <button key={idx} onClick={() => setActiveTab(idx)} className={`text-start px-8 py-5 text-base md:text-lg font-bold transition-all ${activeTab === idx ? "bg-[#e2e8f0] dark:bg-slate-800 text-[#000] dark:text-white border-s-[6px] border-[#c89a26] rounded-e-xl" : "text-gray-600 dark:text-slate-300 border-s-[6px] border-transparent hover:bg-gray-50 dark:hover:bg-slate-800"}`}>
                        {item}
                      </button>
                    ))}
                  </nav>
                </div>
              </aside>
            <div className="flex-1 min-w-0">
              
              {/* Vision | Mission | Goals */}
              {activeTab === 0 && (
                <div className="space-y-6 animate-in fade-in zoom-in duration-500">
                  {about.panels.map((panel, idx) => (
                    <div key={idx} className={`bg-white dark:bg-slate-900 dark:border-gray-800 rounded-xl shadow-sm border-l-4 p-8 flex items-start gap-6 transition-all hover:shadow-md ${idx === 0 ? "border-[#004a77]" : idx === 1 ? "border-[#c89a26]" : "border-sky-500"}`}>
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 border ${idx === 0 ? "bg-blue-50 border-blue-100 dark:bg-slate-800 dark:border-slate-700" : idx === 1 ? "bg-orange-50 border-orange-100 dark:bg-slate-800 dark:border-slate-700" : "bg-sky-50 border-sky-100 dark:bg-slate-800 dark:border-slate-700"}`}>
                        {panelIcons[idx]}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-[#004a77] dark:text-white mb-3">{panel.title}</h2>
                        <p className="text-gray-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">{panel.description}</p>
                        {panel.list && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-12 mt-5">
                            {panel.list.map((item, i) => (
                              <div key={i} className="flex items-center gap-3 group">
                                <span className="w-2 h-2 rounded-full bg-[#c89a26]"></span>
                                <span className="text-gray-700 dark:text-slate-200 text-sm md:text-base font-medium">{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}



        {/* AU History */}
           {activeTab === 1 && (
  <div className="space-y-20 animate-in fade-in slide-in-from-bottom-10 duration-1000 pb-20">
    <h2 style={{ fontFamily: 'Georgia, serif' }} className="text-4xl md:text-5xl font-light text-[#004a77] text-center mb-24 tracking-tight">
      {isRTL ? "تاريخ جامعة الإسكندرية" : "AU History Timeline"}
    </h2>

    <div className="relative max-w-7xl mx-auto px-4">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-[#ce983b] opacity-40 hidden md:block"></div>

      <div className="space-y-16">
        {about.history.timeline.map((event, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between w-full ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
              
              {/* Card */}
              <div className="w-full md:w-[46%] z-10">
                <div className="bg-white dark:bg-slate-900 dark:border-gray-800 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100 dark:border-gray-800 overflow-hidden transition-all hover:shadow-[0_15px_45px_rgba(0,0,0,0.08)] group">

                  {/* years box */}
                  <div className="bg-[#fcf8f1] dark:bg-slate-800 px-6 py-3 flex items-center justify-between border-b border-slate-50 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <span className="bg-[#ce983b] text-white px-3 py-1 rounded-md text-xs font-black shadow-sm">
                        {event.year}
                      </span>
                      <div className="p-1.5 bg-white dark:bg-slate-800 rounded-md shadow-sm border border-slate-100 dark:border-gray-700">
                        <Calendar className="w-4 h-4 text-[#ce983b]" />
                      </div>
                    </div>
                  </div>

                  {/* AU History Timeline cards */}
                  <div className="p-8 text-start">
                    <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-2xl font-bold text-[#004a77] dark:text-white mb-4 group-hover:text-[#ce983b] transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#ce983b] border-[6px] border-white shadow-xl z-20 items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </div>
              <div className="hidden md:block w-[46%]"></div>
            </div>
          );
        })}
      </div>
    </div>

                  {/* 2. Faculty Expansion */}
                  <div className="space-y-8">
                    <h3 className="text-3xl font-bold text-[#004a77] flex items-center gap-3 text-start px-2">
                      <GraduationCap className="w-8 h-8" /> {isRTL ? "توسع الكليات" : "Faculty Expansion"}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 px-2">
                      {about.history.facultyExpansion.map((item, i) => (
                        <div key={i} className="bg-[#2b73a3] text-white p-4 rounded-xl shadow-sm border border-white/5 text-start flex flex-col justify-between min-h-[110px] transition-transform hover:scale-105">
                          <span className="text-[10px] font-bold opacity-70 block mb-1">{item.year}</span>
                          <span style={{ fontFamily: 'Georgia, serif' }} className="font-bold text-[14px] leading-tight block">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3.   Regional Expansion */}
                  <div className="space-y-8">
                    <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-3xl font-bold text-[#004a77] flex items-center gap-3 text-start px-2">
                      <Building className="w-8 h-8 text-[#ce983b]" /> {isRTL ? "التوسع الإقليمي" : "Regional Expansion"}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
                      {about.history.regionalExpansion.map((item, i) => (
                        <div key={i} className="bg-white dark:bg-slate-900 dark:border-gray-800 border-[1.5px] border-[#ce983b] p-6 rounded-2xl shadow-sm text-start">
                          <h4 style={{ fontFamily: 'Georgia, serif' }} className="text-[#004a77] dark:text-white text-xl font-bold mb-2">{item.name}</h4>
                          <p className="text-gray-500 dark:text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 4. (Global Impact) */}
                  <div className="space-y-8">
                    <div className="flex items-center gap-3 text-start px-2">
                       <div className="p-1.5 border border-[#004a77] rounded-md shadow-sm"><Globe className="w-6 h-6 text-[#004a77]" /></div>
                       <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-3xl font-bold text-[#004a77]">{isRTL ? "التأثير العالمي" : "Global Impact"}</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
                      {about.history.globalImpact.map((item, i) => (
                        <div key={i} className="bg-[#2b73a3] text-white p-8 rounded-[30px] flex flex-col items-start justify-start min-h-[180px] shadow-lg text-start transition-transform hover:scale-105">
                          <span className="text-[12px] font-bold opacity-70 uppercase tracking-widest mb-4">{item.year || item.location}</span>
                          <h4 style={{ fontFamily: 'Georgia, serif' }} className="text-xl font-bold leading-tight mb-2">{item.title}</h4>
                          <p className="text-sm opacity-85 font-medium">{item.subtitle}</p>
                        </div>
                      ))}
                    </div>
                  </div>

              {/* 5. Previous Presidents */}
<div className="space-y-10 pt-10 text-center relative overflow-hidden">
  <button 
    onClick={() => setShowPresidents(!showPresidents)} 
    className="bg-[#c89a26] text-white px-12 py-4 rounded-full font-black shadow-xl hover:bg-[#a67f1f] transition-all transform hover:-translate-y-1 z-10 relative"
  >
    {showPresidents ? (isRTL ? "إخفاء الرؤساء" : "Hide Previous Presidents") : (isRTL ? "عرض الرؤساء السابقين" : "View Previous Presidents")}
  </button>

  {showPresidents && (
    <div className="relative group animate-in fade-in zoom-in duration-700">
      <h3 style={{ fontFamily: 'Georgia, serif' }} className="text-[#004a77] text-3xl font-bold mb-12">
        {isRTL ? "رؤساء الجامعة السابقون" : "Previous Presidents"}
      </h3>

      <div className="relative flex items-center justify-center px-4 md:px-16">
        <button 
          onClick={prevPres}
          className="absolute left-0 md:left-4 z-40 w-12 h-12 rounded-full bg-[#c89a26] text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95"
        >
          <ChevronLeft size={30} />
        </button>

        <div className="overflow-hidden w-full max-w-7xl">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(${currentPresIndex * 100 * (isRTL ? 1 : -1)}%)` }}
          >
            {Array.from({ length: totalPages }).map((_, groupIdx) => (
              <div key={groupIdx} className="flex min-w-full">
                {presidentsData.slice(groupIdx * 4, (groupIdx * 4) + 4).map((p, i) => {

             const namesAr = [
          "أ.د. طه حسين", "أ.د. منصور فهمي", "أ.د. محمد صادق جوهر", "أ.د. مصطفى عامر",
          "أ.د. محمد عوض محمد", "أ.د. السيد مصطفى", "أ.د. محمود سامي", "أ.د. عبد العزيز السيد",
          "أ.د. علي محمد الشايب", "أ.د. محمد نجيب حشاد", "أ.د. حسن بغدادي", "أ.د. محمد لطفي دويدار",
          "أ.د. علي رضا الهنيدي", "أ.د. محمود الحضري", "أ.د. فريد مصطفى", "أ.د. عبد العزيز أبو خضر",
          "أ.د. سيد عبد الفتاح", "أ.د. عصام سالم", "أ.د. نصر الدين ضامير", "أ.د. محمد عبد الله",
          "أ.د. حسن نادر", "أ.د. هند حنفي", "أ.د. أسامة إبراهيم", "أ.د. رشدي زهران"
        ];
                  
                  const presidentImages = [
                    "https://darelhilal.com/Media/News/2023/11/14/2023-638355951348714049-871.jpg", "https://www.arabicacademy.gov.eg/storage/clients/0348.jpg",
                    "https://upload.wikimedia.org/wikipedia/ar/thumb/4/48/Adeham_Saïd-Ibrahim.jpg/250px-Adeham_Saïd-Ibrahim.jpg", "https://alchetron.com/cdn/mohamed-tawfik-naseem-pasha-5c085e18-ef59-485c-84ae-107303e47d0-resize-750.jpeg",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Sérgio_Buarque_de_Holanda_(1957).tif/lossy-page1-250px-Sérgio_Buarque_de_Holanda_(1957).tif.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Robert_T._King.jpg/250px-Robert_T._King.jpg",
                    "https://upload.wikimedia.org/wikipedia/en/thumb/d/da/Ernest_Thiele_(1895-1993).jpg/250px-Ernest_Thiele_(1895-1993).jpg", "https://www.garylavergne.com/JLSWEATTiii.jpg",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/C%C3%A9sar_Diaz_Cisneros.jpg/960px-C%C3%A9sar_Diaz_Cisneros.jpg", "https://media.aldawlanews.com/img/22/01/21/16427547759368005.jpg",
                    "https://encyclopediaofalabama.org/wp-content/uploads/2023/09/Jesse-Hill-Ford-471x600.jpg", "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTWQGbcwFVem-8CIjWo88fO02gRI533djCdzAt5IguIqA86bFim",
                    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS7UhHqtNLzll6cPJLfY2a7u279J0ArMjRELN0NiSbLLYe6bKJa", "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTRT9w_rSsB3UREg791yAZqll20ZNrrS6i01YsN6mkJDqBztkJK",
                    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTzw-zyedH0RhMD26PJsi0e0ISKF1Y4WqnPGyq6EcnXOZ_vx5-B", "https://www.alexu.edu.eg/images/Photos/presidents/16.jpg",
                    "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHoeuzFdYJUqEGYBFa9SvKLilHB4mwvsckFxXTla5rN1H6fZYL", "https://www.marefa.org/w/images/8/83/عصام_سالم.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRku-pVr7901lKjuxBDOpVgDlZOmT2u4fhSEdLDT3PNtsWiiAJc", "https://www.alexu.edu.eg/images/Photos/presidents/20.jpg",
                    "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRklTDyF018VEnbqmdfPQdXJSP7fLOjGCNAWe298ASdfIaHpy3y", "https://www.abou-alhool.com/ima/48200_Untitled.jpg",
                    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRPd3n1W7JOIXrZvrtwcl4e7mTMhXiuYXKkxa4rNtxkbncrdZKL", "https://alexu.edu.eg/images/1330001963.JPG"
                  ];
                  
                  const globalIndex = (groupIdx * 4) + i;

                  return (
                    <div key={i} className="flex-1 p-2 md:p-4">
                      <div className="flex flex-col items-center p-6 bg-white/50 dark:bg-slate-900/70 backdrop-blur-sm rounded-[25px] transition-all hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-slate-100 dark:hover:border-gray-700 h-full">
                        <div className="w-24 h-24 rounded-full mb-4 shadow-md overflow-hidden border-2 border-[#2b73a3] bg-white dark:bg-slate-800 flex items-center justify-center">
                          <img 
                            src={presidentImages[globalIndex] || "/images/default-avatar.png"} 
                            alt={p.name}
                            className="w-full h-full object-cover" 
                          />
                        </div>
                        <h4 style={{ fontFamily: 'Georgia, serif' }} className="text-[#004a77] font-bold text-sm leading-tight mb-2 text-center h-12 flex items-center justify-center">
                          {isRTL ? (namesAr[globalIndex] || p.name) : p.name}
                        </h4>
                        <span className="bg-slate-100 text-[#004a77] px-3 py-1 rounded-full text-[10px] font-black">{p.period}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={nextPres}
          className="absolute right-0 md:right-4 z-40 w-12 h-12 rounded-full bg-[#c89a26] text-white flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95"
        >
          <ChevronRight size={30} />
        </button>
      </div>

      <div className="flex justify-center gap-3 mt-10">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPresIndex(i)}
            className={`h-2 rounded-full transition-all duration-500 ${currentPresIndex === i ? "w-10 bg-[#c89a26]" : "w-2 bg-slate-300"}`}
          />
        ))}
      </div>
    </div>
  )}
</div>

{/* 6. Legacy of Leadership */}
<div className="w-full bg-gradient-to-b from-[#004a77] to-[#001a33] py-16 px-4 md:px-10 text-white rounded-[40px] md:rounded-[60px] shadow-2xl mt-16 relative overflow-hidden">
  
  {/* header  */}
  <div className="relative z-10 text-center mb-10">
    <div className="flex justify-center items-center gap-3 mb-2">
      <Trophy className="text-[#ce983b] w-6 h-6 md:w-10 md:h-10" />
      <h2 style={{ fontFamily: 'Georgia, serif' }} className="text-3xl md:text-5xl font-bold tracking-tight">
        {isRTL ? "إرث القيادة" : "Legacy of Leadership"}
      </h2>
      <Trophy className="text-[#ce983b] w-6 h-6 md:w-10 md:h-10" />
    </div>
    <p className="text-[#ce983b] text-[10px] md:text-sm font-black tracking-[0.3em] uppercase opacity-80">
      {isRTL ? "تكريم 23 رئيساً متميزاً" : "Honoring 23 Distinguished Presidents"}
    </p>
  </div>

  {/* Legacy of Leadership cards */}
  <div className="relative h-[420px] flex items-center justify-center">
    <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
      {presidentsData.map((p, i) => {
        const isActive = i === currentLegacyIndex;
        const isPrev = i === (currentLegacyIndex - 1 + presidentsData.length) % presidentsData.length;
        const isNext = i === (currentLegacyIndex + 1) % presidentsData.length;

        const presidentImages = [
          "https://darelhilal.com/Media/News/2023/11/14/2023-638355951348714049-871.jpg", "https://www.arabicacademy.gov.eg/storage/clients/0348.jpg",
          "https://upload.wikimedia.org/wikipedia/ar/thumb/4/48/Adeham_Saïd-Ibrahim.jpg/250px-Adeham_Saïd-Ibrahim.jpg", "https://alchetron.com/cdn/mohamed-tawfik-naseem-pasha-5c085e18-ef59-485c-84ae-107303e47d0-resize-750.jpeg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Sérgio_Buarque_de_Holanda_(1957).tif/lossy-page1-250px-Sérgio_Buarque_de_Holanda_(1957).tif.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Robert_T._King.jpg/250px-Robert_T._King.jpg",
          "https://upload.wikimedia.org/wikipedia/en/thumb/d/da/Ernest_Thiele_(1895-1993).jpg/250px-Ernest_Thiele_(1895-1993).jpg", "https://www.garylavergne.com/JLSWEATTiii.jpg",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/C%C3%A9sar_Diaz_Cisneros.jpg/960px-C%C3%A9sar_Diaz_Cisneros.jpg", "https://media.aldawlanews.com/img/22/01/21/16427547759368005.jpg",
          "https://encyclopediaofalabama.org/wp-content/uploads/2023/09/Jesse-Hill-Ford-471x600.jpg", "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTWQGbcwFVem-8CIjWo88fO02gRI533djCdzAt5IguIqA86bFim",
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS7UhHqtNLzll6cPJLfY2a7u279J0ArMjRELN0NiSbLLYe6bKJa", "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTRT9w_rSsB3UREg791yAZqll20ZNrrS6i01YsN6mkJDqBztkJK",
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTzw-zyedH0RhMD26PJsi0e0ISKF1Y4WqnPGyq6EcnXOZ_vx5-B", "https://www.alexu.edu.eg/images/Photos/presidents/16.jpg",
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHoeuzFdYJUqEGYBFa9SvKLilHB4mwvsckFxXTla5rN1H6fZYL", "https://www.marefa.org/w/images/8/83/عصام_سالم.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRku-pVr7901lKjuxBDOpVgDlZOmT2u4fhSEdLDT3PNtsWiiAJc", "https://www.alexu.edu.eg/images/Photos/presidents/20.jpg",
          "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRklTDyF018VEnbqmdfPQdXJSP7fLOjGCNAWe298ASdfIaHpy3y", "https://www.abou-alhool.com/ima/48200_Untitled.jpg",
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRPd3n1W7JOIXrZvrtwcl4e7mTMhXiuYXKkxa4rNtxkbncrdZKL", "https://alexu.edu.eg/images/1330001963.JPG"
        ];

        const namesAr = [
          "أ.د. طه حسين", "أ.د. منصور فهمي", "أ.د. محمد صادق جوهر", "أ.د. مصطفى عامر",
          "أ.د. محمد عوض محمد", "أ.د. السيد مصطفى", "أ.د. محمود سامي", "أ.د. عبد العزيز السيد",
          "أ.د. علي محمد الشايب", "أ.د. محمد نجيب حشاد", "أ.د. حسن بغدادي", "أ.د. محمد لطفي دويدار",
          "أ.د. علي رضا الهنيدي", "أ.د. محمود الحضري", "أ.د. فريد مصطفى", "أ.د. عبد العزيز أبو خضر",
          "أ.د. سيد عبد الفتاح", "أ.د. عصام سالم", "أ.د. نصر الدين ضامير", "أ.د. محمد عبد الله",
          "أ.د. حسن نادر", "أ.د. هند حنفي", "أ.د. أسامة إبراهيم", "أ.د. رشدي زهران"
        ];

        if (!isActive && !isPrev && !isNext) return null;

        return (
          <div 
            key={i}
            className={`absolute transition-all duration-1000 ease-in-out cursor-pointer rounded-[30px] overflow-hidden border
              ${isActive 
                ? "w-[260px] md:w-[320px] h-[350px] md:h-[380px] z-30 opacity-100 scale-100 border-[#ce983b] shadow-[0_25px_60px_rgba(0,0,0,0.5)]" 
                : "w-[220px] md:w-[280px] h-[300px] md:h-[330px] z-20 opacity-40 grayscale blur-[2px] border-white/5"
              }
              ${isPrev ? (isRTL ? "translate-x-[60%] md:translate-x-[75%]" : "-translate-x-[60%] md:-translate-x-[75%]") : ""}
              ${isNext ? (isRTL ? "-translate-x-[60%] md:-translate-x-[75%]" : "translate-x-[60%] md:translate-x-[75%]") : ""}
              ${isActive ? "translate-x-0" : ""}
            `}
            onClick={() => setCurrentLegacyIndex(i)}
          >
            {/* profs image */}
            <div className="h-[70%] w-full bg-[#0a141d] relative overflow-hidden flex items-center justify-center">
               <img 
                 src={presidentImages[i] || "/images/default-avatar.png"} 
                 alt={p.name}
                 className="w-full h-full object-cover transition-opacity duration-500"
               />
            </div>

            {/* profs name */}
            <div className="h-[30%] bg-gradient-to-b from-[#1e40af] to-[#1e3a8a] flex flex-col items-center justify-center p-4 border-t border-white/10">
              <h4 style={{ fontFamily: 'Georgia, serif' }} className="text-[#ce983b] text-sm md:text-base font-bold text-center leading-tight">
                {isRTL ? (namesAr[i] || p.name) : p.name}
              </h4>
              <p className="text-white/60 text-[10px] md:text-[11px] font-black tracking-widest mt-1">
                {p.period}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>

  {/* slider under images */}
  <div className="mt-12 mb-8 flex flex-col items-center gap-6">
    <div className="flex items-center gap-2.5">
      {presidentsData.map((_, idx) => (
        <div
          key={idx}
          onClick={() => setCurrentLegacyIndex(idx)}
          className={`cursor-pointer transition-all duration-700 rounded-full ${
            idx === currentLegacyIndex
              ? "w-10 h-1.5 bg-[#ce983b] shadow-[0_0_10px_rgba(206,152,59,0.5)]" 
              : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40" 
          }`}
        />
      ))}
    </div>
    
    <div className="text-white/40 text-lg font-black tracking-[0.2em]">
      <span className="text-[#ce983b]">{currentLegacyIndex + 1}</span> / {presidentsData.length}
    </div>
  </div>
</div>

{/* 7. Regional Expansion Section*/}
<section className="w-full bg-[#001a33] py-24 px-4 md:px-10 text-white relative overflow-hidden flex flex-col items-center">
  
  {/* Header  */}
  <div className="relative z-10 text-center mb-16">
    <h2 style={{ fontFamily: 'Georgia, serif' }} className="text-4xl md:text-5xl font-light mb-4 tracking-wide">
      {isRTL ? "التوسع الإقليمي" : "Regional Expansion"}
    </h2>
    <p className="text-white/80 text-sm md:text-base font-medium tracking-wider">
      {isRTL ? "تأثير جامعة الإسكندرية العالمي عبر أفريقيا والشرق الأوسط" : "Alexandria University's Global Influence Across Africa and the Middle East"}
    </p>
  </div>


  <div className="relative w-full max-w-6xl h-[650px] border border-white/5 rounded-[50px] flex items-center justify-center bg-[#001a33]/30 backdrop-blur-sm shadow-2xl overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
      <svg width="600" height="600" viewBox="0 0 200 250" fill="none" className="filter drop-shadow-[0_0_20px_rgba(206,152,59,0.1)]">
        <path 
          d="M100 10C120 10 140 20 150 40C165 70 140 90 135 110C130 130 140 160 130 190C120 220 100 240 85 240C70 240 50 210 45 180C40 150 55 130 50 100C45 70 30 50 40 30C50 10 80 10 100 10Z" 
          stroke="#ce983b" strokeWidth="0.5" strokeDasharray="3 3"
        />
      </svg>
    </div>

    {campuses.map((campus, idx) => {
      const isHighlighted = idx === activeCampus;
      return (
        <div key={idx}>

          <div 
            className={`absolute ${campus.pos} w-2.5 h-2.5 rounded-full transition-all duration-700 z-10
              ${isHighlighted 
                ? "bg-[#ce983b] shadow-[0_0_15px_#ce983b] scale-150" 
                : "bg-sky-500/40 scale-100"}`}
          >
            {isHighlighted && <div className="absolute inset-0 rounded-full bg-[#ce983b] animate-ping opacity-75"></div>}
          </div>

          {/* Cards */}
          <div className={`absolute ${campus.pos} z-20 transition-all duration-1000 ease-in-out mt-6
              ${isHighlighted ? "scale-110 opacity-100 translate-y-[-20px]" : "scale-95 opacity-40 blur-[1px] translate-y-0"}`}>
            <div className={`relative rounded-2xl p-4 md:p-5 w-48 md:w-56 shadow-2xl transition-all duration-700
              ${campus.isSpecial 
                ? (isHighlighted ? "bg-[#ce983b] shadow-[0_0_40px_rgba(206,152,59,0.5)]" : "bg-[#ce983b]/20") 
                : (isHighlighted ? "bg-white/10 backdrop-blur-xl border border-[#ce983b]" : "bg-white/5 border border-white/10")
              }`}>
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={14} className={campus.isSpecial ? "text-[#001a33]" : "text-[#ce983b]"} />
                <span className={`text-[11px] font-bold ${campus.isSpecial ? "text-[#001a33]" : "text-white/90"}`}>{campus.name}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className={`text-sm font-black ${campus.isSpecial ? "text-[#001a33]" : "text-white"}`}>{campus.sub}</span>
                <div className={`w-8 h-[1px] my-1 ${campus.isSpecial ? "bg-[#001a33]/30" : "bg-[#ce983b]/40"}`}></div>
                <span className={`text-[10px] font-black uppercase tracking-widest ${campus.isSpecial ? "text-[#001a33]" : "text-[#ce983b]"}`}>{campus.year}</span>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>

  {/* مفتاح الخريطة  */}
  <div className="mt-12 flex items-center gap-12 bg-white/5 px-8 py-3 rounded-full border border-white/5 backdrop-blur-sm">
    <div className="flex items-center gap-2.5">
      <div className="w-2.5 h-2.5 rounded-full bg-[#ce983b]"></div>
      <span className="text-[10px] font-black uppercase tracking-widest text-white/50">{isRTL ? "الحرم الرئيسي" : "Main Campus"}</span>
    </div>
    <div className="flex items-center gap-2.5">
      <div className="w-2.5 h-2.5 rounded-full bg-sky-500"></div>
      <span className="text-[10px] font-black uppercase tracking-widest text-white/50">{isRTL ? "الحرم الإقليمي" : "Regional Campus"}</span>
    </div>
  </div>

</section>

{/* 8. Growth & Expansion section */}
<section className="w-full px-4 md:px-10 bg-white dark:bg-slate-950 rounded-[40px] md:rounded-[60px] mt-10 relative overflow-hidden">
  
  <div className="max-w-6xl mx-auto">
    
    {/* Header */}
    <div className="text-center mb-16">
      <h2 style={{ fontFamily: 'Georgia, serif' }} className="text-[#004a77] text-3xl md:text-5xl font-bold mb-4 tracking-tight">
        {isRTL ? "النمو والتوسع" : "Growth & Expansion"}
      </h2>
      <p className="text-slate-500 text-base md:text-lg font-medium">
        {isRTL ? "من بدايات متواضعة إلى جامعة شاملة" : "From humble beginnings to a comprehensive university"}
      </p>
    </div>


    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-20 relative">      
      <div className="bg-[#004a77] rounded-[35px] p-8 w-full md:w-[300px] text-center shadow-lg transition-transform hover:scale-105">
        <div className="text-7xl font-black text-[#ce983b] mb-2">02</div>
        <div className="text-sm font-bold text-white uppercase tracking-widest opacity-80">{isRTL ? "كليات" : "Faculties"}</div>
        <div className="mt-6 pt-4 border-t border-white/10">
            <span className="text-2xl font-black text-[#ce983b]">1938</span>
        </div>
      </div>


<div className="relative flex items-center justify-center group"> 
  {/* 1. Shadow of ArrowRight */}
  <div className="absolute w-20 h-20 bg-[#ce983b]/20 rounded-full animate-pulse scale-125"></div>
  
  {/* 2. ArrowRight */}
  <div className="relative z-10 flex items-center justify-center bg-[#ce983b] w-16 h-16 rounded-full shadow-lg transition-transform group-hover:scale-105 active:scale-95">
     <ArrowRight className={`text-white w-8 h-8 ${isRTL ? "rotate-180" : ""}`} />
  </div>

</div>

      <div className="bg-[#ce983b] rounded-[35px] p-8 w-full md:w-[300px] text-center shadow-lg transition-transform hover:scale-105">
        <div className="text-7xl font-black text-white mb-2">22+</div>
        <div className="text-sm font-bold text-white uppercase tracking-widest opacity-90">{isRTL ? "كليات" : "Faculties"}</div>
        <div className="mt-6 pt-4 border-t border-black/5">
            <span className="text-2xl font-black text-[#004a77] uppercase tracking-widest">{isRTL ? "اليوم" : "Today"}</span>
        </div>
      </div>
    </div>

    {/* Growth & Expansion Stats */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {[
        { val: "1100%", label: isRTL ? "معدل النمو" : "Growth Rate", color: "text-[#004a77]" },
        { val: "85+", label: isRTL ? "عاماً من التميز" : "Years of Excellence", color: "text-[#ce983b]" },
        { val: "158K+", label: isRTL ? "طالباً تم خدمتهم" : "Students Served", color: "text-sky-600" }
      ].map((stat, i) => (
        <div key={i} className="bg-[#f8fafc] dark:bg-slate-900 dark:border-gray-800 p-6 rounded-[25px] flex flex-col items-center text-center border border-slate-50 dark:border-gray-800 transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-md">
          <div className={`text-4xl font-black ${stat.color} mb-1 tracking-tighter`}>{stat.val}</div>
          <div className="text-[10px] font-black text-slate-400 dark:text-slate-300 uppercase tracking-widest">{stat.label}</div>
        </div>
      ))}
    </div>

  </div>
</section>


                </div>
                
              )}
              
              
              
{/* Aura Hall of Fame */}
{activeTab === 2 && (
  <div className="relative w-full py-24 bg-[#0B3C5D] text-white rounded-[40px] md:rounded-[60px] shadow-2xl animate-in fade-in duration-1000 overflow-hidden border border-white/5">
    
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1e3a8a]/20 via-transparent to-transparent opacity-60 pointer-events-none"></div>

    <div className="relative z-10 w-full px-4 md:px-10 text-center">
      
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-[#ce983b] mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {isRTL ? "قاعة المشاهير" : "Aura Hall of Fame"}
        </h2>
        <p className="max-w-2xl mx-auto text-white/70 text-sm md:text-base leading-relaxed">
          {isRTL ? (
            <>تحتفي جامعة الإسكندرية بـ <span className="text-[#C9A227] font-semibold">الشخصيات البارزة</span> من أعضائها ومنتسبيها، تكريماً لإنجازاتهم في البحث العلمي والتعليم، وتمثيلهم للجامعة <span className="text-[#C9A227] font-semibold"> داخل مصر وخارجها</span> من خلال المؤتمرات والجوائز والمساهمات الأكاديمية.</>
          ) : (
            <>Alexandria University <span className="text-[#C9A227] font-semibold">celebrates prominent personalities</span> from its members and affiliates, honoring their achievements in research, education, and their representation of the university <span className="text-[#C9A227] font-semibold"> inside Egypt or abroad</span> through conferences, awards, and academic contributions.</>
          )}
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 mb-10">
        <div className="flex items-center gap-3">
          <Globe className="w-5 h-5 text-[#ce983b] opacity-80" />
          <span className="text-xl md:text-2xl font-bold tracking-tight text-white uppercase">
            {isRTL ? "مصر بالخارج" : "埃及 Abroad"}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {about.hallOfFame.tabs.map((tab, idx) => (
          <button key={idx} onClick={() => setActiveSubTab(tab)} className={`px-8 py-2.5 rounded-xl font-bold tracking-wider text-[11px] md:text-xs transition-all duration-300 border ${activeSubTab === tab ? "bg-[#0f172a] text-white border-[#ce983b] shadow-[0_0_15px_rgba(206,152,59,0.2)]" : "bg-transparent text-white/60 border-white/10 hover:border-white/30"}`}>
            {tab}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-y-12 gap-x-4 md:gap-x-8 justify-items-center mb-24">
        {[
          "Prof. Ahmed Elsayed Darwish", "Prof. Muhammed Khaled Abdelkader Hamouda", "Prof. Ahmed Kamal Khalil Mourad", 
          "Prof. Sameh Mahmoud Shehata", "Prof. Ahmed Zewail", "Prof. Ossama Ibrahim", "Prof. Abdelfatah Muhammed Elsayed",
          "Prof. Mohsen Moharam Zahran", "Prof. Boshra Salem", "Prof. Mohamed Abbas Ibrahim", "Prof. Hassan Ahmed Ossman", 
          "Pope Tawadros II", "Prof. Taha Hussien", "Prof. Yehia Elmashad", "Prof. Hazem Abdelaziz Elbeblawy", 
          "Prof. Hassabla Elkafrawy", "Prof. Seddik Abdelsalam", "Prof. Roshdy Zahran", "Prof. Fathy Aboaiana", 
          "Prof. Sayed Elashry", "Prof. Abdelwahab Elmessiry"
        ].map((name, i) => {
          const namesAr = [
            "أ.د. أحمد السيد درويش", "أ.د. محمد خالد عبد القادر حمودة", "أ.د. أحمد كمال خليل مراد",
            "أ.د. سامح محمود شحاتة", "أ.د. أحمد زويل", "أ.د. أسامة إبراهيم", "أ.د. عبد الفتاح محمد السيد",
            "أ.د. محسن محرم زهران", "أ.د. بشرى سالم", "أ.د. محمد عباس إبراهيم", "أ.د. حسن أحمد عثمان",
            "البابا تواضروس الثاني", "أ.د. طه حسين", "أ.د. يحيى المشد", "أ.د. حازم عبد العزيز الببلاوي",
            "أ.د. حسب الله الكفراوي", "أ.د. صديق عبد السلام", "أ.د. رشدي زهران", "أ.د. فتحي أبو عيانة",
            "أ.د. سيد العشري", "أ.د. عبد الوهاب المسيري"
          ];
          
          const specs: Record<string, {en: string, ar: string}> = {
            "Medicine": {en: "Medicine", ar: "طب"}, "Engineering": {en: "Engineering", ar: "هندسة"},
            "Sciences": {en: "Sciences", ar: "علوم"}, "Arts": {en: "Arts", ar: "آداب"},
            "Chemistry": {en: "Chemistry", ar: "كيمياء"}, "Law": {en: "Law", ar: "حقوق"},
            "Education": {en: "Education", ar: "تربية"}, "Theology": {en: "Theology", ar: "لاهوت"},
            "Literature": {en: "Literature", ar: "أدب"}, "Nuclear Physics": {en: "Nuclear Physics", ar: "فيزياء نووية"},
            "Agriculture": {en: "Agriculture", ar: "زراعة"}, "Dentistry": {en: "Dentistry", ar: "أسنان"},
            "Archaeology": {en: "Archaeology", ar: "آثار"}
          };
          
          const specKeys = ["Medicine", "Engineering", "Sciences", "Arts", "Chemistry", "Medicine", "Law", "Engineering", "Education", "Sciences", "Medicine", "Theology", "Literature", "Nuclear Physics", "Medicine", "Agriculture", "Dentistry", "Archaeology", "Engineering", "Medicine", "Law"];
          const currentSpec = specs[specKeys[i]];
          
          const portraitUrls = [
            "https://www.alexu.edu.eg/images/dr.ahmeddrwesh.jpg", "https://www.alexu.edu.eg/images/A._Dr._Mohamed_Khaled_Abdel_Kader_Hamouda_1.jpg",
            "https://www.alexu.edu.eg/images/Ahmed_Kamal_Mourad1.jpg", "https://www.alexu.edu.eg/images/prominentfigures/dr_sameh_mahmoud_shehata.jpg",
            "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS459jSYzaGs37FaA4152OIvpfPC7iCowAEW-KJ1KE8BgztAK1u", "https://isrs.org/site/wp-content/uploads/Dr-OsamaIbrahim.png",
            "https://www.alexu.edu.eg/images/dr_abdelfatah_said.jpg", "https://www.alexu.edu.eg/images/January_Character.jpg",
            "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQMNwAzw-hngrsTtAZ3sAD-bXssMvl3-4nGSKIXMhqEtySK1ckn", "https://www.alexu.edu.eg/images/563158_141800369295730_1936949286_n.jpg",
            "https://www.alexu.edu.eg/images/prominentfigures/dr.hassan.jpg", "https://www.alexu.edu.eg/images/Papa_Tawadros_.jpg",
            "https://www.presidency.eg/media/60465/طه-حسينjpgjpg.jpg", "https://upload.wikimedia.org/wikipedia/ar/6/68/يحيى_المشد.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Hazem_Beblawy.jpg/330px-Hazem_Beblawy.jpg", "https://upload.wikimedia.org/wikipedia/ar/thumb/a/af/حسب_الله_الكفراوي.jpg/330px-حسب_الله_الكفراوي.jpg",
            "https://alexu.edu.eg/images/10614260_613369948776470_957510820975451960_n.jpg", "https://alexu.edu.eg/images/1330001963.JPG",
            "https://www.alexu.edu.eg/images/pic2.jpg", "https://www.alexu.edu.eg/images/pic_1.jpg",
            "https://www.alexu.edu.eg/images/masary.jpg"
          ];

          return (
            <div key={i} className="group relative">
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full transition-all duration-500 flex items-center justify-center border border-blue-400/20 bg-gradient-to-b from-blue-500/30 to-blue-900/60 shadow-[0_0_25px_rgba(30,58,138,0.4)] group-hover:opacity-0 group-hover:scale-50"></div>

              <div className="absolute inset-[-40px] md:inset-[-50px] opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 z-50 pointer-events-none group-hover:pointer-events-auto">
                <div className="w-full h-full rounded-[40px] overflow-hidden shadow-2xl border border-white/10 flex flex-col items-center justify-center p-6 relative" style={{ backgroundColor: '#000', backgroundImage: `linear-gradient(to bottom, rgba(242, 242, 242, 0.9) 0%, rgba(179, 179, 179, 0.5) 45%, rgba(0, 0, 0, 0.95) 100%)` }}>
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full mb-4 border-2 border-[#ce983b] overflow-hidden bg-white dark:bg-slate-800 flex items-center justify-center">
                    <img src={portraitUrls[i]} alt={name} className="object-contain w-full h-full rounded-full" />
                  </div>
                  
                  <h4 className="text-[#ce983b] font-black text-[12px] md:text-[15px] text-center leading-[1.1] mb-2 px-1">
                    {isRTL ? namesAr[i] : name}
                  </h4>
                  
                  <div className="text-white text-[10px] md:text-[12px] font-bold opacity-100 tracking-wide flex items-center justify-center gap-1">
                    {name === "Prof. Ahmed Zewail" ? (
                      <>
                        <Trophy size={12} className="text-[#C9A227]" />
                        <span>{isRTL ? "جائزة نوبل" : "Nobel Laureate"}</span>
                      </>
                    ) : (
                      <span>{isRTL ? currentSpec.ar : currentSpec.en}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center pb-6">
        <div className="bg-[#0f172a]/80 border border-white/10 px-8 py-3 rounded-full flex items-center gap-3 shadow-2xl transition-transform hover:scale-105">
          <Medal className="w-4 h-4 text-[#ce983b]" />
          <div className="flex items-center gap-1.5">
            <span className="text-[#ce983b] text-lg font-black italic">21</span>
            <span className="text-white/80 text-[11px] font-bold uppercase tracking-wider">{isRTL ? "عضو متميز" : "Distinguished Members"}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)}


{/*  Statistics & Data */}
{activeTab === 3 && (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="w-full space-y-16 font-poppins pb-10"
    style={{ fontFamily: 'Poppins, sans-serif' }}
  >
    
{/* 0. Global Rank Orbit Section */}
<section className="relative w-full bg-gradient-to-br from-[#0B3C5D] via-[#1474B4] to-[#4FA2D0] py-24 px-6 rounded-[50px] shadow-2xl overflow-hidden mb-16">
  <div className="absolute inset-0 opacity-40 pointer-events-none">
     <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#C9A227] rounded-full animate-ping"></div>
     <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#C9A227] rounded-full animate-bounce"></div>
  </div>

  <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
    <div className="text-center -mt-8 mb-24">
      <h2 style={{ fontFamily: 'Georgia, serif' }} className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Global Rank Orbit</h2>
      <p className="text-white/70 text-lg">Alexandria University's Position Among World's Leading Institutions</p>
    </div>

    <div className="relative flex items-center justify-center w-full h-[600px]">
      
      <div className="absolute w-[560px] h-[560px] rounded-full border border-dashed border-[#C9A227]/20 pointer-events-none"></div>

      {[270, 342, 54, 126, 198].map((angle, idx) => (
        <div 
          key={idx}
          className="absolute h-[2px] bg-gradient-to-r from-[#C9A227] via-[#C9A227]/60 to-transparent origin-left z-0"
          style={{
            transform: `rotate(${angle}deg)`,
            width: "280px",
            left: "50%",
            top: "50%"
          }}
        />
      ))}

      <div 
        onClick={() => setIsDeployed(!isDeployed)}
        className="relative z-40 w-32 h-32 rounded-full border-2 border-[#C9A227] flex flex-col items-center justify-center bg-[#0B3C5D] shadow-[0_0_60px_rgba(201,162,39,0.4)] cursor-pointer hover:scale-110 transition-transform duration-300"
        title="Click to Deploy/Retract Cards"
      >
        <Globe className="w-10 h-10 text-[#C9A227] mb-1 pointer-events-none" />
        <span className="text-white font-bold text-xs tracking-widest pointer-events-none">AlexU</span>
      </div>

      {[
        { 
          bgTitle: "US", 
          title: "US News", 
          angle: 270, 
          backData: { world: "790", africa: "17", egypt: "#4" }
        },
        { 
          bgTitle: "THE", 
          title: "Rankings", 
          color: "#C9A227", 
          angle: 342, 
          backData: { world: "1001+", africa: "21", egypt: "#10" }
        },
        { 
          bgTitle: "WEB", 
          title: "Webometrics", 
          color: "#5ca3c6", 
          angle: 54,  
          backData: { world: "804", africa: "7", egypt: "#2" }
        },
        { 
          bgTitle: "上海", 
          title: "Shanghai Ranking", 
          color: "#C9A227",
          angle: 126, 
          backData: { world: "701-800", africa: "24", egypt: "#2" }
        },
        { 
          bgTitle: "QS", 
          title: "QS Rankings", 
          angle: 198, 
          backData: { world: "1001-1200", africa: "12", egypt: "#4" }
        }
      ].map((card, idx) => {
        return (
          <motion.div
            key={idx}
            animate={{ 
              transform: `rotate(${card.angle}deg) translateX(${isDeployed ? "280px" : "0px"}) rotate(-${card.angle}deg) translate(${isDeployed ? "0px, 0px" : "80px, 60px"})`
            }}
            transition={{ 
              type: "spring", 
              stiffness: 30,  
              damping: 10,   
              delay: idx * 0.2 
            }}
            className="absolute z-20"
            style={{
              left: "calc(50% - 90px)", 
              top: "calc(50% - 120px)"
            }}
          >
            <div style={{ transform: "scale(0.7)" }} className="w-[180px] h-[240px] flex items-center justify-center pointer-events-auto">
               <OrbitCard card={card} isRTL={isRTL} />
            </div>
          </motion.div>
        );
      })}

    </div>
  </div>
</section>


    {/* 1. Hero Section */}
    <div className="relative w-full py-20 bg-gradient-to-r from-[#0B3C5D]/90 to-[#1474B4]/80 text-white rounded-[40px] shadow-xl text-center overflow-hidden">
      <div className="relative z-10 px-6">
        <motion.h2 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
        >
          {isRTL ? "جامعة الإسكندرية في أرقام" : "Alexandria University in Numbers"}
        </motion.h2>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl font-medium opacity-90 mb-2"
        >
          {isRTL ? "إحصائيات رئيسية تعكس النمو والتميز والتأثير" : "Key statistics reflecting growth, excellence, and impact"}
        </motion.p>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-xs font-bold opacity-60 uppercase tracking-widest"
        >
          {isRTL ? "تاريخ التحديث: 06 ديسمبر 2015" : "Created: 06 December 2015"}
        </motion.p>
      </div>
    </div>

    {/* 2. AU Rankings */}
    <div className="space-y-8">
      <div className="flex items-center gap-3 px-2 text-start">
        <Trophy className="w-8 h-8 text-[#C9A227]" />
        <h3 className="text-[#0B3C5D] text-3xl font-bold">{about.rankings.heading}</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
        {about.rankings.cards.map((card, i) => (
          <motion.div 
            key={i} 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            viewport={{ once: true }}
            className={`bg-[#FFFFFF] dark:bg-slate-900 dark:border-gray-800 p-10 rounded-2xl shadow-lg border-t-4 text-center transition-all ${i === 0 ? "border-[#C9A227]" : "border-transparent"}`}
          >
            <div className={`text-4xl md:text-5xl font-bold mb-4 ${i === 0 ? "text-[#C9A227]" : "text-[#0B3C5D]"}`}>{card.val}</div>
            <p className="text-[#526FA4] text-sm font-medium">{card.label}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* 3. Students */}
   <div className="space-y-8 px-2 text-start">
      <div className="flex items-center gap-3"><Users className="w-8 h-8 text-[#C9A227]" /><h3 className="text-[#0B3C5D] text-3xl font-bold">{about.sections.students}</h3></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { v: "158,701", l: isRTL ? "إجمالي الطلاب" : "Total Students", c: "#0B3C5D", icon: <Users className="w-6 h-6 text-[#0B3C5D] mb-1" /> }, 
          { v: "146,346", l: isRTL ? "الطلاب المقيدين" : "Enrolled Students", c: "#1474B4", icon: <GraduationCap className="w-6 h-6 text-[#1474B4] mb-1" /> }, 
          { v: "3,659", l: isRTL ? "الطلاب الوافدين" : "Foreign Students", c: "#4FA2D0", icon: <Globe className="w-6 h-6 text-[#4FA2D0] mb-1" /> }
        ].map((c, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            viewport={{ once: true }}
            className="bg-[#FFFFFF] dark:bg-slate-900 dark:border-gray-800 p-8 rounded-2xl shadow-lg flex flex-col gap-2"
          >
            {c.icon}
            <div className="text-4xl font-bold" style={{ color: c.c }}>{c.v}</div>
            <div className="text-[#526FA4] text-sm font-medium uppercase">{c.l}</div>
          </motion.div>
        ))}
      </div>
    </div>

  {/* 4. Postgraduate Studies */}
    <div className="space-y-8 px-2 text-start">
      <div className="flex items-center gap-3"><GraduationCap className="w-8 h-8 text-[#C9A227]" /><h3 className="text-[#0B3C5D] text-3xl font-bold">{about.sections.postgrad}</h3></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { v: "9,177", l: isRTL ? "طلاب الماجستير" : "MSc Students", c: "#526FA4", icon: <BookOpen className="w-6 h-6 text-[#526FA4] mb-2" /> }, 
          { v: "3,178", l: isRTL ? "طلاب الدكتوراه" : "PhD Students", c: "#D09329", icon: <Medal className="w-6 h-6 text-[#D09329] mb-2" /> }
        ].map((c, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            viewport={{ once: true }}
            className="bg-[#FFFFFF] dark:bg-slate-900 dark:border-gray-800 p-8 rounded-2xl shadow-lg flex flex-col gap-2"
          >
            {c.icon}
            <div className="text-4xl font-bold" style={{ color: c.c }}>{c.v}</div>
            <div className="text-[#526FA4] text-sm font-medium uppercase">{c.l}</div>
          </motion.div>
        ))}
      </div>
    </div>

  {/* 5. Faculty & Staff */}
    <div className="space-y-8 px-2 text-start">
      <div className="flex items-center gap-3"><Users className="w-8 h-8 text-[#C9A227]" /><h3 className="text-[#0B3C5D] text-3xl font-bold">{about.sections.faculty}</h3></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { v: "6,181", l: isRTL ? "أعضاء هيئة التدريس" : "Faculty Members", c: "#0B3C5D", icon: <Users className="w-6 h-6 text-[#0B3C5D] mb-2" /> }, 
          { v: "2,966", l: isRTL ? "باحثين فقط" : "Researchers Only", c: "#1474B4", icon: <FlaskConical className="w-6 h-6 text-[#1474B4] mb-2" /> }, 
          { v: "1,500", l: isRTL ? "الموظفين" : "Employees", c: "#526FA4", icon: <Building2 className="w-6 h-6 text-[#526FA4] mb-2" /> }
        ].map((c, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            viewport={{ once: true }}
            className="bg-[#FFFFFF] dark:bg-slate-900 dark:border-gray-800 p-8 rounded-2xl shadow-lg flex flex-col gap-2"
          >
            {c.icon}
            <div className="text-4xl font-bold" style={{ color: c.c }}>{c.v}</div>
            <div className="text-[#526FA4] text-sm font-medium uppercase">{c.l}</div>
          </motion.div>
        ))}
      </div>
    </div>

   {/* 6. (Facilities) */}
    <div className="space-y-8 px-2 text-start">
      <div className="flex items-center gap-3"><Building className="w-8 h-8 text-[#C9A227]" /><h3 className="text-[#0B3C5D] text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>{about.sections.facilities}</h3></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { v: "23", l: isRTL ? "كلية" : "Faculties", c: "#C9A227", icon: <Building2 className="w-6 h-6 text-[#C9A227] mb-2" /> }, 
          { v: "11", l: isRTL ? "مستشفيات جامعية" : "University Hospitals", c: "#0B3C5D ", icon: <Stethoscope className="w-6 h-6 text-[#0B3C5D] mb-2" /> }, 
          { v: "25", l: isRTL ? "مكتبة" : "Libraries", c: "#4FA2D0", icon: <BookOpen className="w-6 h-6 text-[#4FA2D0] mb-2" /> }, 
          { v: "1", l: isRTL ? "المكتبة المركزية" : "Central Library", c: "#4FA2D0", icon: <BookOpen className="w-6 h-6 text-[#4FA2D0] mb-2" /> }
        ].map((c, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            viewport={{ once: true }}
            className="bg-[#FFFFFF] dark:bg-slate-900 dark:border-gray-800 p-8 rounded-2xl shadow-lg flex flex-col gap-2"
          >
            {c.icon}
            <div className="text-4xl font-bold" style={{ color: c.c }}>{c.v}</div>
            <div className="text-[#526FA4] text-[10px] font-bold uppercase">{c.l}</div>
          </motion.div>
        ))}
      </div>
    </div>

   {/* 7. (Achievements) */}
    <div className="space-y-8 px-2 text-start">
      <div className="flex items-center gap-3">
        <Medal className="w-8 h-8 text-[#C9A227]" />
        <h3 className="text-[#0B3C5D] text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>{about.sections.achievements}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { v: "17,091", l: isRTL ? "خريج (2015)" : "Graduates (2015)", c: "#C9A227", icon: <GraduationCap className="w-6 h-6 text-[#C9A227] mb-2" /> }, 
          { v: "526", l: isRTL ? "دكتوراه ممنوحة" : "PhDs Awarded", c: "#D09329", icon: <Medal className="w-6 h-6 text-[#D09329] mb-2" /> }
        ].map((c, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            viewport={{ once: true }}
            className="bg-[#FFFFFF] dark:bg-slate-900 dark:border-gray-800 p-10 rounded-2xl shadow-lg flex flex-col gap-2"
          >
            {c.icon}
<div className="text-4xl font-bold" style={{ color: c.c, fontFamily: 'Poppins, sans-serif' }}>{c.v}</div>
            <div className="text-[#526FA4] text-sm font-medium">{c.l}</div>
          </motion.div>
        ))}
      </div>
    </div>

   {/* 8. Financial Overview*/}
    <div className="space-y-8 px-2 text-start">
      <div className="flex items-center gap-3"><DollarSign className="w-8 h-8 text-[#C9A227]" /><h3 className="text-[#0B3C5D] text-3xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>{about.sections.financial}</h3></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { v: "1 EGP", l: isRTL ? "الإيرادات والمصروفات" : "Income & Expenditure", p: 85, icon: <DollarSign className="w-6 h-6 text-[#C9A227] mb-4" /> }, 
          { v: "172 EGP", l: isRTL ? "دخل الأبحاث الخارجية" : "External Research Income", p: 65, icon: <TrendingUp className="w-6 h-6 text-[#C9A227] mb-4" /> }, 
{ v: "34 EGP", l: isRTL ? "دخل أبحاث الصناعة" : "Industry Research Income", p: 40, icon: <Building2 className="w-6 h-6 text-[#C9A227] mb-4" /> }
        ].map((c, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0B3C5D] to-[#1474B4] p-8 rounded-2xl text-white shadow-xl relative overflow-hidden"
          >
            {c.icon}
            <div className="text-4xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{c.v}</div>
            <div className="text-white/70 text-sm font-medium uppercase mb-6">{c.l}</div>
            <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${c.p}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-[#C9A227]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* 9. Cards hover */}
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-[#C9A227] to-[#D09329] py-16 rounded-[20px] shadow-2xl text-white text-center flex flex-col items-center gap-4 cursor-pointer"
    >
      <Calendar className="w-12 h-12" />
      <span className="text-7xl md:text-9xl font-bold">1938</span>
      <span className="text-lg md:text-2xl font-bold uppercase tracking-widest">{about.sections.establishment}</span>
    </motion.div>

    {/* 10. Campus Overview Header. */}
    <div className="flex items-center gap-3 px-2 text-start">
      <MapPin className="w-7 h-7 text-[#C9A227]" />
      <h3 className="text-[#0B3C5D] text-3xl font-bold">{about.campusOverview.heading}</h3>
    </div>

    {/* 11. Campus Overview */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2 pb-20">
      {about.campusOverview.items.map((item, i) => {
        const campusIcons = [
          <Stethoscope className="w-7 h-7 transition-colors duration-300 group-hover:text-[#C9A227] text-[#0B3C5D]" />,     
          <Building2 className="w-7 h-7 transition-colors duration-300 group-hover:text-[#C9A227] text-[#0B3C5D]" />,       
          <BookOpen className="w-7 h-7 transition-colors duration-300 group-hover:text-[#C9A227] text-[#0B3C5D]" />,        
          <FlaskConical className="w-7 h-7 transition-colors duration-300 group-hover:text-[#C9A227] text-[#0B3C5D]" />,    
          <Medal className="w-7 h-7 transition-colors duration-300 group-hover:text-[#C9A227] text-[#0B3C5D]" />,           
          <Leaf className="w-7 h-7 transition-colors duration-300 group-hover:text-[#C9A227] text-[#0B3C5D]" />,            
          <Leaf className="w-7 h-7 transition-colors duration-300 group-hover:text-[#C9A227] text-[#0B3C5D]" />,            
          <GraduationCap className="w-7 h-7 transition-colors duration-300 group-hover:text-[#C9A227] text-[#0B3C5D]" />,   
          <Baby className="w-7 h-7 transition-colors duration-300 group-hover:text-[#C9A227] text-[#0B3C5D]" />,            
          <Stethoscope className="w-7 h-7 transition-colors duration-300 group-hover:text-[#C9A227] text-[#0B3C5D]" />,     
          <Dumbbell className="w-7 h-7 transition-colors duration-300 group-hover:text-[#C9A227] text-[#0B3C5D]" />,        
          <Dumbbell className="w-7 h-7 transition-colors duration-300 group-hover:text-[#C9A227] text-[#0B3C5D]" />,        
          <MapPin className="w-7 h-7 transition-colors duration-300 group-hover:text-[#C9A227] text-[#0B3C5D]" />           
        ];

        return (
          <motion.div 
            key={i} 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
className="group bg-[#FFFFFF] dark:bg-slate-900 dark:border-gray-800 p-8 rounded-2xl shadow-lg flex flex-col gap-2 border-l-4 border-[#C9A227]"
>
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-blue-50 transition-colors">
               {campusIcons[i]}
            </div>
            <div className="text-[#0B3C5D] text-sm font-bold uppercase tracking-wide">{item}</div>
          </motion.div>
        );
      })}
    </div>

  </motion.div>
)}

            </div>
            </div>
          </div>
        </section>
        

        {/* 4. Sticky Stats Navbar */}
        <div className="sticky bottom-0 z-40 w-full bg-[#004e70] text-white border-t border-white/5 shadow-2xl py-4">
          <div className="max-w-7xl mx-auto px-4 md:px-12">
            <div className="flex flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-8 md:gap-20 lg:gap-28 overflow-x-auto no-scrollbar">
                {about.statsRow.map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-3.5 shrink-0">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#c89a26] flex items-center justify-center shrink-0 shadow-lg">{icons[idx]}</div>
                    <div className="flex flex-col">
                      <div className="text-xl md:text-3xl font-extrabold leading-none">{stat.value}</div>
                      <div className="text-[10px] md:text-xs text-gray-200 font-semibold mt-1 uppercase tracking-widest">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hidden sm:flex items-center gap-3 shrink-0">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00a651]"></span>
                </div>
                <span className="text-xs md:text-sm font-black tracking-widest uppercase">LIVE DATA</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 5. Footer Section - Fixed & Translated */}
      <footer className="w-full bg-[#47669e] dark:bg-slate-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 style={{ fontFamily: 'Georgia, serif' }} className="text-[26px] md:text-[32px] font-bold mb-3 tracking-wide">
            {language === 'ar' ? 'جامعة الإسكندرية' : 'Alexandria University'}
          </h2>
          <p className="text-base md:text-lg font-medium opacity-90 mb-4">
            {about.headingLines.join(', ')}
          </p>
          <div className="pt-2">
           <p className="text-[10px] md:text-[9px] opacity-70 uppercase tracking-[0.15em]">
  {language === 'ar' 
    ? '© 2026 جامعة الإسكندرية. جميع الحقوق محفوظة.' 
    : '© 2026 Alexandria University. All rights reserved.'}
</p>
          </div>
        </div>
      </footer>
    </>
  );
}