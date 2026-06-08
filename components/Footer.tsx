"use client";

import React from 'react';
import { useLanguage } from "@/components/LanguageProvider";
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
              {/* AU Logo Placeholder */}
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center font-bold text-[#001A41] text-2xl">
                AU
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
              <div className="w-10 h-10 rounded-full border border-slate-300 dark:border-white/20 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/40 cursor-pointer transition-all">
                <svg className="w-4 h-4 text-slate-500 dark:text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </div>
              {/* Twitter */}
              <div className="w-10 h-10 rounded-full border border-slate-300 dark:border-white/20 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/40 cursor-pointer transition-all">
                <svg className="w-4 h-4 text-slate-500 dark:text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </div>
              {/* Instagram */}
              <div className="w-10 h-10 rounded-full border border-slate-300 dark:border-white/20 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/40 cursor-pointer transition-all">
                <svg className="w-4 h-4 text-slate-500 dark:text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </div>
              {/* Linkedin */}
              <div className="w-10 h-10 rounded-full border border-slate-300 dark:border-white/20 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/40 cursor-pointer transition-all">
                <svg className="w-4 h-4 text-slate-500 dark:text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              {/* Youtube */}
              <div className="w-10 h-10 rounded-full border border-slate-300 dark:border-white/20 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/40 cursor-pointer transition-all">
                <svg className="w-4 h-4 text-slate-500 dark:text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><polygon points="10 15 15 12 10 9"/></svg>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="flex items-center gap-2 text-xl font-bold mb-8 text-slate-900 dark:text-white">
              <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span> {isRTL ? "روابط سريعة" : "Quick Links"}
            </h4>
            <ul className="flex flex-col gap-4 text-slate-600 dark:text-white/60 text-sm">
              <li className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">{isRTL ? "عن الجامعة" : "About University"}</li>
              <li className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">{isRTL ? "التقويم الأكاديمي" : "Academic Calendar"}</li>
              <li className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">{isRTL ? "الوظائف" : "Careers"}</li>
              <li className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">{isRTL ? "الطلاب الوافدون" : "International Students"}</li>
              <li className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">{isRTL ? "المكتبة" : "Library"}</li>
              <li className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">{isRTL ? "الحياة الجامعية" : "Campus Life"}</li>
            </ul>
          </div>

          {/* Column 3: Top Faculties */}
          <div>
            <h4 className="flex items-center gap-2 text-xl font-bold mb-8 text-slate-900 dark:text-white">
              <span className="w-2 h-2 bg-[#60A5FA] rounded-full"></span> {isRTL ? "أبرز الكليات" : "Top Faculties"}
            </h4>
            <ul className="flex flex-col gap-4 text-slate-600 dark:text-white/60 text-sm">
              <li className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">{isRTL ? "كلية الهندسة" : "Faculty of Engineering"}</li>
              <li className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">{isRTL ? "كلية الطب" : "Faculty of Medicine"}</li>
              <li className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">{isRTL ? "كلية العلوم" : "Faculty of Science"}</li>
              <li className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">{isRTL ? "كلية الآداب" : "Faculty of Arts"}</li>
              <li className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">{isRTL ? "كلية التجارة" : "Faculty of Commerce"}</li>
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
          <div className="flex gap-8 text-slate-500 dark:text-white/40 text-sm">
            <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer">{isRTL ? "سياسة الخصوصية" : "Privacy Policy"}</span>
            <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer">{isRTL ? "شروط الخدمة" : "Terms of Service"}</span>
            <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer">{isRTL ? "إمكانية الوصول" : "Accessibility"}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}