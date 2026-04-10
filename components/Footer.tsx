"use client";

import React from 'react';

export default function Footer() {
  return (
    // الخلفية كحلي داكن جداً (#010114) لضمان الاتصال بسكشن الـ CTA
    <footer className="bg-[#010114] text-white pt-20 pb-10 px-6 md:px-12 border-t border-white/5">
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
              <div className="flex flex-col">
                <span className="text-xl font-kameron font-bold tracking-wider uppercase">Alexandria</span>
                <span className="text-xl font-kameron font-bold tracking-wider uppercase">University</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Building the leaders Egypt needs—admitted on merit, trained in the Great Books and through apprenticeship, free from the debt that cripples ambition.
            </p>
            {/* Social Icons (Circular) */}
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 cursor-pointer transition-all">
                  <div className="w-4 h-4 bg-white/60 rounded-sm"></div> {/* Placeholder for actual icons */}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="flex items-center gap-2 text-xl font-bold mb-8">
              <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span> Quick Links
            </h4>
            <ul className="flex flex-col gap-4 text-white/60 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">About University</li>
              <li className="hover:text-white cursor-pointer transition-colors">Academic Calendar</li>
              <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-white cursor-pointer transition-colors">International Students</li>
              <li className="hover:text-white cursor-pointer transition-colors">Library</li>
              <li className="hover:text-white cursor-pointer transition-colors">Campus Life</li>
            </ul>
          </div>

          {/* Column 3: Top Faculties */}
          <div>
            <h4 className="flex items-center gap-2 text-xl font-bold mb-8">
              <span className="w-2 h-2 bg-[#60A5FA] rounded-full"></span> Top Faculties
            </h4>
            <ul className="flex flex-col gap-4 text-white/60 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Faculty of Engineering</li>
              <li className="hover:text-white cursor-pointer transition-colors">Faculty of Medicine</li>
              <li className="hover:text-white cursor-pointer transition-colors">Faculty of Science</li>
              <li className="hover:text-white cursor-pointer transition-colors">Faculty of Arts</li>
              <li className="hover:text-white cursor-pointer transition-colors">Faculty of Commerce</li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="flex items-center gap-2 text-xl font-bold mb-8">
              <span className="w-2 h-2 bg-[#22D3EE] rounded-full"></span> Contact Us
            </h4>
            <div className="flex flex-col gap-6 text-white/60 text-sm">
              <div className="flex gap-4">
                <div className="text-[#D4AF37]">📍</div>
                <p>Al-Shatby, P.O. Box 21526<br/>Alexandria, Egypt</p>
              </div>
              <div className="flex gap-4">
                <div className="text-[#D4AF37]">📞</div>
                <p>+20 3 592-1675</p>
              </div>
              <div className="flex gap-4">
                <div className="text-[#D4AF37]">✉️</div>
                <p>info@alexu.edu.eg</p>
              </div>
            </div>
          </div>

        </div>

        {/* --- Footer Bottom Bar --- */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">
            © 2026 Alexandria University. All rights reserved.
          </p>
          <div className="flex gap-8 text-white/40 text-sm">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Accessibility</span>
          </div>
        </div>

      </div>
    </footer>
  );
}