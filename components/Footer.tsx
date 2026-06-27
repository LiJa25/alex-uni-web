"use client";

import React from 'react';
import { useLanguage } from "@/components/LanguageProvider";
import Link from "next/link";
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const { language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <footer dir={isRTL ? "rtl" : "ltr"} className="bg-white dark:bg-[#010114] text-slate-800 dark:text-white pt-20 pb-10 px-6 md:px-12 border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto container">

        {/* --- Grid Layout (4 Columns) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

          {/* Column 1: Branding & Description */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              {/* AU Logo */}
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="/logos/logo2.png"
                  alt="Alexandria University Logo"
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
              <div className="flex flex-col text-slate-900 dark:text-white">
                <span className="text-xl font-kameron font-bold tracking-wider uppercase">
                  {isRTL ? "جامعة" : "Alexandria"}
                </span>
                <span className="text-xl font-kameron font-bold tracking-wider uppercase">
                  {isRTL ? "الإسكندرية" : "University"}
                </span>
              </div>
            </div>
            <p className="text-slate-600 dark:text-white/60 text-sm leading-relaxed max-w-xs">
              {isRTL ? (
                "تبني جامعة الإسكندرية القادة الذين تحتاجهم مصر - حيث يُقبل الطلاب بناءً على الجدارة فقط، ويتدربون من خلال التدريب العملي، بعيداً عن أعباء الديون."
              ) : (
                "Building the leaders Egypt needs—admitted on merit, trained in the Great Books and through apprenticeship, free from the debt that cripples ambition."
              )}
            </p>
            {/* Social Icons (Circular) */}
            <div className="flex gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/AlexandriauniOfficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-300 dark:border-white/20 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/40 cursor-pointer transition-all group"
              >
                <svg className="w-4 h-4 text-slate-500 dark:text-white/60 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://x.com/AlexU_Edu_Eg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-300 dark:border-white/20 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/40 cursor-pointer transition-all group"
              >
                <svg className="w-4 h-4 text-slate-500 dark:text-white/60 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/alexandria_university_official/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-300 dark:border-white/20 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/40 cursor-pointer transition-all group"
              >
                <svg className="w-4 h-4 text-slate-500 dark:text-white/60 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Linkedin */}
              <a
                href="https://eg.linkedin.com/school/alexandria-university/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-300 dark:border-white/20 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/40 cursor-pointer transition-all group"
              >
                <svg className="w-4 h-4 text-slate-500 dark:text-white/60 group-hover:text-blue-700 dark:group-hover:text-blue-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* Youtube */}
              <a
                href="https://www.youtube.com/user/AUPortal"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-300 dark:border-white/20 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/40 cursor-pointer transition-all group"
              >
                <svg className="w-4 h-4 text-slate-500 dark:text-white/60 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
                  <polygon points="10 15 15 12 10 9" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="flex items-center gap-2 text-xl font-bold mb-8 text-slate-900 dark:text-white">
              <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span> {isRTL ? "روابط سريعة" : "Quick Links"}
            </h4>
            <ul className="flex flex-col gap-4 text-slate-600 dark:text-white/60 text-sm">
              <li><Link href="/about" className="hover:text-slate-900 dark:hover:text-white transition-colors">{isRTL ? "عن الجامعة" : "About University"}</Link></li>
              <li><Link href="/students" className="hover:text-slate-900 dark:hover:text-white transition-colors">{isRTL ? "التقويم الأكاديمي" : "Academic Calendar"}</Link></li>

              <li><Link href="/registration" className="hover:text-slate-900 dark:hover:text-white transition-colors">{isRTL ? "الطلاب الوافدون" : "International Students"}</Link></li>
              <li><Link href="/researches" className="hover:text-slate-900 dark:hover:text-white transition-colors">{isRTL ? "المكتبة" : "Library"}</Link></li>
              <li><Link href="/students" className="hover:text-slate-900 dark:hover:text-white transition-colors">{isRTL ? "الحياة الجامعية" : "Campus Life"}</Link></li>
            </ul>
          </div>

          {/* Column 3: Top Faculties */}
          <div>
            <h4 className="flex items-center gap-2 text-xl font-bold mb-8 text-slate-900 dark:text-white">
              <span className="w-2 h-2 bg-[#60A5FA] rounded-full"></span> {isRTL ? "أبرز الكليات" : "Top Faculties"}
            </h4>
            <ul className="flex flex-col gap-4 text-slate-600 dark:text-white/60 text-sm">
              <li><Link href="/academics?faculty=engineering" className="hover:text-slate-900 dark:hover:text-white transition-colors">{isRTL ? "كلية الهندسة" : "Faculty of Engineering"}</Link></li>
              <li><Link href="/academics?faculty=medicine" className="hover:text-slate-900 dark:hover:text-white transition-colors">{isRTL ? "كلية الطب" : "Faculty of Medicine"}</Link></li>
              <li><Link href="/academics?faculty=science" className="hover:text-slate-900 dark:hover:text-white transition-colors">{isRTL ? "كلية العلوم" : "Faculty of Science"}</Link></li>
              <li><Link href="/academics/arts" className="hover:text-slate-900 dark:hover:text-white transition-colors">{isRTL ? "كلية الآداب" : "Faculty of Arts"}</Link></li>
              <li><Link href="/academics?faculty=business" className="hover:text-slate-900 dark:hover:text-white transition-colors">{isRTL ? "كلية التجارة" : "Faculty of Business"}</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="flex items-center gap-2 text-xl font-bold mb-8 text-slate-900 dark:text-white">
              <span className="w-2 h-2 bg-[#22D3EE] rounded-full"></span> {isRTL ? "اتصل بنا" : "Contact Us"}
            </h4>
            <div className="flex flex-col gap-6 text-slate-600 dark:text-white/60 text-sm">
              <div className="flex gap-4">
                <div className="text-[#D4AF37] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <p>{isRTL ? "الشاطبي، ص.ب 21526 الإسكندرية، مصر" : "Al-Shatby, P.O. Box 21526 Alexandria, Egypt"}</p>
              </div>
              <div className="flex gap-4">
                <div className="text-[#D4AF37] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <p>+20 3 592-1675</p>
              </div>
              <div className="flex gap-4">
                <div className="text-[#D4AF37] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <p>info@alexu.edu.eg</p>
              </div>
            </div>
          </div>

        </div>

        {/* --- Footer Bottom Bar --- */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 dark:text-white/40 text-sm">
            {isRTL ? "© 2026 جامعة الإسكندرية. جميع الحقوق محفوظة." : "© 2026 Alexandria University. All rights reserved."}
          </p>
          <div className="flex flex-wrap gap-8 text-slate-500 dark:text-white/40 text-sm">
            <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">{isRTL ? "سياسة الخصوصية" : "Privacy Policy"}</Link>
            <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">{isRTL ? "شروط الخدمة" : "Terms of Service"}</Link>
            <Link href="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">{isRTL ? "إمكانية الوصول" : "Accessibility"}</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}