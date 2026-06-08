export type Language = "en" | "ar";

export interface TranslationStruct {
  hero: {
    navLinks: string[];
    applyNow: string;
    heroHeading: string;
    heroDescription: string;
    languageLabel: string;
    mobileLanguageLabel: string;
  };
  quickLinks: {
    tabs: string[];
    cards: { title: string }[];
  };
  welcomeSection: {
    titleLines: string[];
    description: string;
  };
  statsSection: { id: string; value: string; hasPlus: boolean; label: string }[];
  latestNews: {
    preTitle: string;
    heading: string;
    viewAll: string;
    showLess: string;
    readMore: string;
    articles: { id: number; title: string; day: string; month: string; image: string }[];
  };
  upcomingEvents: {
    badge: string;
    heading: string;
    viewCalendar: string;
    events: { title: string; description: string; date: string; location: string }[];
    readMore: string;
  };
  exploreFaculties: {
    badge: string;
    heading: string;
    faculties: { title: string; students: string; courses: string }[];
  };
  applyFaculty: {
    heading: string;
    actionText: string;
    description: string;
    buttonPrimary: string;
    buttonSecondary: string;
  };
  footer: {
    brandTitle: string;
    brandDescription: string;
    quickLinksHeading: string;
    quickLinks: string[];
    topFacultiesHeading: string;
    faculties: string[];
    contactUsHeading: string;
    address: string;
    phone: string;
    email: string;
    copyright: string;
    privacy: string;
    terms: string;
    accessibility: string;
  };
about: {
    headingLines: string[];
    description: string;
    statsRow: { value: string; label: string }[];
    cards: { title: string; subtitle: string; color: string }[]; 
    navItems: string[];
    panels: { title: string; description: string; list?: string[] }[];
    history: {
      timeline: { year: string; title: string; desc: string }[];
      facultyExpansion: { year: string; name: string }[];
      regionalExpansion: { name: string; desc: string }[];
      globalImpact: { year?: string; location?: string; title: string; subtitle: string }[];
    };
    rankings: { heading: string; cards: { val: string; label: string }[]; };
    campusOverview: { heading: string; items: string[]; };
    sections: { 
      students: string; postgrad: string; faculty: string; 
      facilities: string; achievements: string; financial: string; 
      establishment: string; hallOfFame: string; sidebarTitle: string; 
    };
hallOfFame: {
      mainTitle: string;
      description: string;
      title: string;
      tabs: string[];
      presidents: { name: string; period: string }[];
    };
  };
}

export const translations: Record<Language, TranslationStruct> = {
  en: {
    hero: {
      navLinks: ["HOME", "ABOUT", "STUDENTS", "ACADEMICS", "COLLABORATION", "ALUMNI"],
      applyNow: "Apply Now",
      heroHeading: "Alexandria University",
      heroDescription: "Find your future in Alexandria University",
      languageLabel: "EN | AR",
      mobileLanguageLabel: "EN | AR",
    },
    quickLinks: {
      tabs: ["Undergraduates", "Visitors", "Staff & Employees", "Postgraduates"],
      cards: [{ title: "Events Calendar" }, { title: "Sustainable Development" }, { title: "International Ranking" }, { title: "Electronic System" }],
    },
    welcomeSection: {
      titleLines: ["Welcome to", "Alexandria", "University"],
      description: "The University of Alexandria is building the leaders Egypt needs—students are admitted on merit alone, trained in the Great Books and through apprenticeship, free from the debt that cripples ambition.",
    },
    statsSection: [
      { id: "1", value: "24", hasPlus: false, label: "FACULTY" },
      { id: "2", value: "8k", hasPlus: true, label: "PROFESSORS" },
      { id: "3", value: "750", hasPlus: true, label: "PROGRAMS" },
      { id: "4", value: "217k", hasPlus: false, label: "STUDENTS" },
    ],
    latestNews: {
      preTitle: "Stay Updated",
      heading: "Latest News & Announcements",
      viewAll: "View All News",
      showLess: "Show Less",
      readMore: "Read More",
articles: [
        { id: 1, title: "In a Yearly Tradition... Alexandria University Brings Together Its International Students for a Ramadan Iftar", day: "10", month: "MAR", image: "https://images.unsplash.com/photo-1772457677598-2dc68bb6f4c8?auto=format&fit=crop&q=80&w=600" },
        { id: 2, title: "On the Occasion of International Women's Day.. Women of Alexandria University: Inspiring Models of Giving and Leadership", day: "10", month: "MAR", image: "https://hilarycorna.com/wp-content/uploads/2021/09/cowomen-NOURi1g8szw-unsplash.jpg" },
        { id: 3, title: "Alexandria University Hosts Seminar to Promote Volunteering and Child Protection in Cooperation with the National...", day: "09", month: "MAR", image: "https://images.unsplash.com/photo-1761666508658-381c63e409fb?auto=format&fit=crop&q=80&w=600" },
        { id: 4, title: "Admission Open for a Joint Master's Program with the University of Louisville in Production and Manufacturing...", day: "07", month: "MAR", image: "https://images.unsplash.com/photo-1733426509854-10931d84009a?auto=format&fit=crop&q=80&w=600" }
      ],
        },
upcomingEvents: {
      badge: "MARK YOUR CALENDAR",
      heading: "Upcoming Events",
      viewCalendar: "View Calendar",
      events: [
        { title: "AU in 75: Faculty of Agriculture", description: "Celebrating 75 years of agricultural excellence and continuous research.", date: "Apr 22, 10:00 AM", location: "Alexandria" },
        { title: "Diamond Jubilee Celebrations: Faculty of Commerce", description: "Marking a milestone in business education and student development.", date: "May 05, 05:00 PM", location: "Alexandria" },
        { title: "Faculty of Education Forum", description: "Annual gathering of educational minds discussing future pedagogy.", date: "Apr 12, 10:00 AM", location: "Alexandria" },
        { title: "Faculty of Economic & Political Science Charity Exhibition", description: "Supporting local initiatives through university resources.", date: "Apr 15, 09:00 AM", location: "Alexandria" },
        { title: "Integrated Scientific Activities", description: "Showcasing student projects across science disciplines.", date: "Apr 18, 11:30 AM", location: "Alexandria" }
      ],
      readMore: "Read More"
    },
    exploreFaculties: {
      badge: "ACADEMIC EXCELLENCE",
      heading: "Explore Our Faculties",
      faculties: [
        { title: "Faculty of Engineering", students: "12,500", courses: "85" },
        { title: "Faculty of Medicine", students: "8,200", courses: "45" },
        { title: "Faculty of Arts", students: "15,000", courses: "60" },
        { title: "Faculty of Science", students: "9,800", courses: "42" },
        { title: "Faculty of Fine Arts", students: "5,100", courses: "38" },
        { title: "Faculty of Law", students: "10,900", courses: "55" },
      ],
    },
    applyFaculty: {
      heading: "Apply in your favorite faculty",
      actionText: "5 minutes",
      description: "Join thousands of ambitious students.",
      buttonPrimary: "Apply Now",
      buttonSecondary: "Start Registration",
    },
    footer: {
      brandTitle: "Alexandria University",
      brandDescription: "Building leaders.",
      quickLinksHeading: "Quick Links",
      quickLinks: ["About University", "Careers"],
      topFacultiesHeading: "Top Faculties",
      faculties: ["Engineering", "Medicine"],
      contactUsHeading: "Contact Us",
      address: "Al-Shatby, Alexandria, Egypt",
      phone: "+20 3 592-1675",
      email: "info@alexu.edu.eg",
      copyright: "© 2026 Alexandria University. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      accessibility: "Accessibility",
    },
   about: {
      headingLines: ["A Legacy of Knowledge,", "A Future of Innovation"],
      description: "Since 1942, Alexandria University has stood as a beacon of academic excellence, bridging Egypt's rich heritage with cutting-edge research and global leadership.",
      statsRow: [{ value: "158,000+", label: "Students" }, { value: "17,000+", label: "Graduates" }, { value: "6,000+", label: "Faculty" }],
      cards: [
        { title: "Our Goals", subtitle: "Vision & Mission", color: "bg-[#2b73a3]" },
        { title: "AU History", subtitle: "Eight decades", color: "bg-[#ce983b]" },
        { title: "Prominent Figures", subtitle: "Celebrating members", color: "bg-[#5a9ec6]" },
        { title: "Statistics", subtitle: "Achievements", color: "bg-[#6279a1]" }
      ],
      navItems: ["Vision | Mission | Goals", "AU History", "Prominent Figures", "Statistics & Data"],
      panels: [
        { title: "Vision", description: "Alexandria University aspires to restore its historic status and achieve a comprehensive qualitative leap in knowledge while maintaining noble human values and global leadership." },
        { title: "Mission", description: "Alexandria University is a national institution focused on education, research, and development, contributing to knowledge production and building a modern society capable of leadership." },
        { title: "Values", description: "", list: ["Creativity & Innovation", "Quality & Excellence", "Team Spirit", "Belief & Commitment", "Freedom of Thought", "Justice & Equal Opportunities", "Transparency"] }
      ],
      history: {
       timeline: [
  { year: "1938", title: "Foundation", desc: "Established within Fouad I University with Faculties of Arts & Law" },
  { year: "1941", title: "Engineering Faculty", desc: "Engineering programs established, expanding technical education" },
  { year: "1942", title: "Independence", desc: "Became independent university with Science, Commerce, Medicine, and Agriculture faculties" },
  { year: "1952", title: "Official Name", desc: "Officially named Alexandria University" }
],
facultyExpansion: [
  { year: "1954", name: "Nursing" },
  { year: "1956", name: "Pharmacy" },
  { year: "1963", name: "Public Health" },
  { year: "1969", name: "Education" },
  { year: "1971", name: "Dentistry" },
  { year: "1971", name: "Medical Research Institute" },
  { year: "1974", name: "Veterinary Medicine" },
  { year: "1983", name: "Graduate Studies" },
  { year: "1983", name: "Tourism & Hotels" },
  { year: "2019", name: "Computer & Artificial Intelligence" }
],
        regionalExpansion: [{ name: "Tanta", desc: "Regional campus expansion" }, { name: "Kafr El-Sheikh", desc: "Regional campus expansion" }, { name: "Damanhour", desc: "Regional campus expansion" }, { name: "Marsa Matrouh", desc: "Expansion 1991-1998" }],
        globalImpact: [{ year: "1960", title: "Beirut Arab University", subtitle: "International partnership" },
{ year: "1989", title: "Helwan faculties joined", subtitle: "" },
{ year: "Juba", title: "Future branch", subtitle: "" },
{ year: "N'Djamena", title: "Future branch", subtitle: "" }
        ],
        
      },
      rankings: {
        heading: "AU Rankings",
        cards: [
          { val: "#1", label: "Top University in Alexandria" }, { val: "#2", label: "Among Egyptian Universities" }, 
          { val: "Top 500", label: "QS World Rankings (Africa)" }, { val: "85+", label: "Years of Academic Excellence" }
        ]
      },
      campusOverview: {
        heading: "Campus Overview",
        items: ["Medical Complex", "Engineering Complex", "Theoretical Complex", "Scientific Complex", "Research Institutes", "Veterinary Medicine", "Agriculture (Saba Pasha)", "Specific Education", "Kindergarten", "Nursing", "Physical Education (Boys)", "Physical Education (Girls)", "Chad Campus"]
      },
      sections: {
        students: "Students", postgrad: "Postgraduate Studies", faculty: "Faculty & Staff", facilities: "Facilities",
        achievements: "Achievements (2015)", financial: "Financial Overview", establishment: "Year of Establishment",
        hallOfFame: "Aura Hall of Fame", sidebarTitle: "About Us"
      },
      hallOfFame: {
        mainTitle: "Aura Hall of Fame",
        description: "Alexandria University celebrates prominent personalities...",
  title: "埃及 Abroad", 
  tabs: ['CONFERENCES', 'SEMINARS', 'AWARDS'],
  presidents: [
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
    { name: "Prof. Hassan Nadir", period: "2006–2009" }
  ]
}
      
    },
    
  },
  ar: {
    hero: {
      navLinks: ["الرئيسية", "من نحن", "الطلاب", "الأكاديميا", "التعاون", "الخريجون"],
      applyNow: "قدِّم الآن",
      heroHeading: "جامعة الإسكندرية",
      heroDescription: "ابحث عن مستقبلك في جامعة الإسكندرية",
      languageLabel: "ع | EN",
      mobileLanguageLabel: "ع | EN",
    },
    quickLinks: {
      tabs: ["الطلاب", "الزوار", "الموظفون", "الدراسات العليا"],
      cards: [{ title: "التقويم" }, { title: "التنمية" }, { title: "التصنيف" }, { title: "النظام" }],
    },
    welcomeSection: {
      titleLines: ["مرحبًا بكم في", "جامعة", "الإسكندرية"],
      description: "تبني جامعة الإسكندرية القادة الذين تحتاجهم مصر - حيث يُقبل الطلاب بناءً على الجدارة فقط، ويتدربون من خلال المناهج الرصينة والتدريب العملي، بعيداً عن أعباء الديون التي تعيق الطموح.",
    },
    statsSection: [
      { id: "1", value: "24", hasPlus: false, label: "كُلية" },
      { id: "2", value: "8 آلاف", hasPlus: true, label: "أستاذ" },
      { id: "3", value: "750", hasPlus: true, label: "برنامج" },
      { id: "4", value: "217 ألف", hasPlus: false, label: "طلاب" },
    ],
    latestNews: {
  preTitle: "ابقَ على اطلاع",
  heading: "آخر الأخبار والإعلانات",
  viewAll: "عرض الكل",
  showLess: "عرض أقل",
  readMore: "اقرأ المزيد",
  articles: [
        { id: 1, title: "في تقليد سنوي.. جامعة الإسكندرية تجمع طلابها الوافدين على مائدة إفطار رمضان", day: "10", month: "مارس", image: "https://images.unsplash.com/photo-1772457677598-2dc68bb6f4c8?auto=format&fit=crop&q=80&w=600" },
        { id: 2, title: "بمناسبة اليوم العالمي للمرأة.. سيدات جامعة الإسكندرية: نماذج ملهمة في العطاء والقيادة", day: "10", month: "مارس", image: "https://hilarycorna.com/wp-content/uploads/2021/09/cowomen-NOURi1g8szw-unsplash.jpg" },
        { id: 3, title: "جامعة الإسكندرية تستضيف ندوة لتعزيز التطوع وحماية الطفل بالتعاون مع المجلس القومي...", day: "09", month: "مارس", image: "https://images.unsplash.com/photo-1761666508658-381c63e409fb?auto=format&fit=crop&q=80&w=600" },
        { id: 4, title: "فتح باب القبول لبرنامج ماجستير مشترك مع جامعة لويفيل في الإنتاج والتصنيع...", day: "07", month: "مارس", image: "https://images.unsplash.com/photo-1733426509854-10931d84009a?auto=format&fit=crop&q=80&w=600" }
      ],
},
upcomingEvents: {
      badge: "فعاليات",
      heading: "الفعاليات القادمة",
      viewCalendar: "عرض الأجندة",
      events: [
        { title: "جامعة الإسكندرية في 75 عاماً: كلية الزراعة", description: "الاحتفال بمرور 75 عاماً من التميز الزراعي والبحث العلمي المستمر.", date: "22 أبريل، 10:00 ص", location: "الإسكندرية" },
        { title: "احتفالات اليوبيل الماسي: كلية التجارة", description: "تحديد علامة فارقة في تعليم إدارة الأعمال وتطوير مهارات الطلاب.", date: "05 مايو، 05:00 م", location: "الإسكندرية" },
        { title: "منتدى كلية التربية", description: "تجمع سنوي للعقول التربوية لمناقشة طرق التدريس والوسائل الحديثة.", date: "12 أبريل، 10:00 ص", location: "الإسكندرية" },
        { title: "معرض خيري بكلية الدراسات الاقتصادية", description: "دعم المبادرات المحلية وتنمية المجتمع من خلال موارد الجامعة.", date: "15 أبريل، 09:00 ص", location: "الإسكندرية" },
        { title: "الأنشطة العلمية المتكاملة", description: "عرض مشاريع الطلاب المبتكرة عبر التخصصات العلمية المختلفة.", date: "18 أبريل، 11:30 ص", location: "الإسكندرية" }
      ],
      readMore: "المزيد"
    },
    exploreFaculties: {
      badge: "تميز",
      heading: "استكشف كلياتنا",
      faculties: [
        { title: "كلية الهندسة", students: "12,500", courses: "85" },
        { title: "كلية الطب", students: "8,200", courses: "45" },
        { title: "كلية الآداب", students: "15,000", courses: "60" },
        { title: "كلية العلوم", students: "9,800", courses: "42" },
        { title: "كلية الفنون الجميلة", students: "5,100", courses: "38" },
        { title: "كلية الحقوق", students: "10,900", courses: "55" },
      ],
    },
    applyFaculty: {
      heading: "قدم في كليتك",
      actionText: "5 دقائق",
      description: "انضم إلينا.",
      buttonPrimary: "قدم الآن",
      buttonSecondary: "التسجيل",
    },
    footer: {
      brandTitle: "جامعة الإسكندرية",
      brandDescription: "بناء القادة.",
      quickLinksHeading: "روابط",
      quickLinks: ["عن الجامعة"],
      topFacultiesHeading: "الكليات",
      faculties: ["الهندسة"],
      contactUsHeading: "اتصل بنا",
      address: "الشاطبي، الإسكندرية",
      phone: "+20 3 592-1675",
      email: "info@alexu.edu.eg",
      copyright: "© 2026 جامعة الإسكندرية. جميع الحقوق محفوظة.",
      privacy: "الخصوصية",
      terms: "الشروط",
      accessibility: "الوصول",
    },
  about: {
      headingLines: ["إرث من المعرفة،", "مستقبل من الابتكار"],
      description: "منذ عام 1942، وقفت جامعة الإسكندرية كمنارة للتميز الأكاديمي، حيث جسرت الفجوة بين تراث مصر العريق والأبحاث المتطورة والريادة العالمية.",
      statsRow: [{ value: "158,000+", label: "طالب" }, { value: "17,000+", label: "خريج" }, { value: "6,000+", label: "هيئة تدريس" }],
      cards: [
        { title: "أهدافنا", subtitle: "الرؤية والرسالة", color: "bg-[#2b73a3]" },
        { title: "تاريخ الجامعة", subtitle: "8 عقود", color: "bg-[#ce983b]" },
        { title: "شخصيات بارزة", subtitle: "احتفاء بالأعضاء", color: "bg-[#5a9ec6]" },
        { title: "إحصائيات", subtitle: "إنجازات", color: "bg-[#6279a1]" }
      ],
      navItems: ["الرؤية والرسالة", "تاريخ الجامعة", "شخصيات بارزة", "الإحصائيات والبيانات"],
      panels: [
        { title: "الرؤية", description: "تطمح جامعة الإسكندرية لاستعادة مكانتها التاريخية وتحقيق قفزة نوعية شاملة في المعرفة." },
        { title: "الرسالة", description: "جامعة الإسكندرية مؤسسة وطنية تركز على التعليم والبحث والتطوير والمساهمة في بناء المجتمع." },
        { title: "القيم", description: "القيم الجوهرية:", list: ["الإبداع والابتكار", "الجودة والتميز", "روح الفريق", "العدالة وتكافؤ الفرص", "الشفافية"] }
      ],
     // داخل سيكشن ar -> about -> history
history: {
  timeline: [
    { year: "1938", title: "التأسيس", desc: "تأسست داخل جامعة فؤاد الأول بكليتي الآداب والحقوق" },
    { year: "1941", title: "كلية الهندسة", desc: "تأسيس البرامج الهندسية وتوسيع التعليم الفني" },
    { year: "1942", title: "الاستقلال", desc: "أصبحت جامعة مستقلة تضم كليات العلوم والتجارة والطب والزراعة" },
    { year: "1952", title: "الاسم الرسمي", desc: "تمت تسميتها رسمياً بجامعة الإسكندرية" }
  ],
  facultyExpansion: [
    { year: "1954", name: "التمريض" },
    { year: "1956", name: "الصيدلة" },
    { year: "1963", name: "الصحة العامة" },
    { year: "1969", name: "التربية" },
    { year: "1971", name: "طب الأسنان" },
    { year: "1971", name: "معهد البحوث الطبية" },
    { year: "1974", name: "الطب البيطري" },
    { year: "1983", name: "الدراسات العليا" },
    { year: "1983", name: "السياحة والفنادق" },
    { year: "2019", name: "الحاسبات والذكاء الاصطناعي" }
  ],
  regionalExpansion: [
    { name: "طنطا", desc: "توسع إقليمي للحرم الجامعي" },
    { name: "كفر الشيخ", desc: "توسع إقليمي للحرم الجامعي" },
    { name: "دمنهور", desc: "توسع إقليمي للحرم الجامعي" },
    { name: "مرسى مطروح", desc: "توسع إقليمي (1991-1998)" }
  ],
  globalImpact: [
    { year: "1960", title: "جامعة بيروت العربية", subtitle: "شراكة دولية" },
    { year: "1989", title: "انضمام كليات حلوان", subtitle: "" },
    { location: "جوبا", title: "فرع السودان", subtitle: "فرع مستقبلي" },
    { location: "إنجامينا", title: "فرع تشاد", subtitle: "فرع مستقبلي" }
  ]
},
      rankings: {
        heading: "تصنيفات الجامعة",
        cards: [
          { val: "#1", label: "أفضل جامعة في الإسكندرية" }, { val: "#2", label: "بين الجامعات المصرية" },
          { val: "أفضل 500", label: "تصنيف QS العالمي (أفريقيا)" }, { val: "85+", label: "عاماً من التميز الأكاديمي" }
        ]
      },
      campusOverview: {
        heading: "نظرة على الحرم الجامعي",
        items: ["المجمع الطبي", "مجمع الهندسة", "المجمع النظري", "المجمع العلمي", "المعاهد البحثية", "الطب البيطري", "الزراعة (سابا باشا)", "التربية النوعية", "رياض الأطفال", "التمريض", "التربية الرياضية (بنين)", "التربية الرياضية (بنات)", "فرع تشاد"]
      },
      sections: {
        students: "الطلاب", postgrad: "الدراسات العليا", faculty: "أعضاء هيئة التدريس والموظفين", facilities: "المنشآت",
        achievements: "الإنجازات (2015)", financial: "الملخص المالي", establishment: "سنة التأسيس",
        hallOfFame: "قاعة المشاهير", sidebarTitle: "عن الجامعة"
      },
 // استبدل قسم hallOfFame الموجود داخل الـ ar بـ هذا الكود:
hallOfFame: {
  mainTitle: "قاعة مشاهير أورا",
  description: "تحتفي جامعة الإسكندرية بالشخصيات البارزة...",
  title: "مصر بالخارج", 
  tabs: ['مؤتمرات', 'ندوات', 'جوائز'],
  presidents: [
    { name: "أ.د. طه حسين", period: "1942–1944" },
    { name: "أ.د. منصور فهمي", period: "1944–1946" },
    { name: "أ.د. محمد صادق جوهر", period: "1946–1950" },
    { name: "أ.د. مصطفى عامر", period: "1950–1953" },
    { name: "أ.د. محمد عوض محمد", period: "1953–1954" },
    { name: "أ.د. السيد مصطفى", period: "1954–1958" },
    { name: "أ.د. محمود سامي", period: "1958" },
    { name: "أ.د. عبد العزيز السيد", period: "1958–1961" },
    { name: "أ.د. علي محمد الشايب", period: "1961–1963" },
    { name: "أ.د. محمد نجيب حشاد", period: "1963–1964" },
    { name: "أ.د. حسن بغدادي", period: "1964–1971" },
    { name: "أ.د. محمد لطفي دويدار", period: "1971–1976" },
    { name: "أ.د. علي رضا الهنيدي", period: "1976–1980" },
    { name: "أ.د. محمود الحضري", period: "1980–1984" },
    { name: "أ.د. فريد مصطفى", period: "1984–1987" },
    { name: "أ.د. عبد العزيز أبو خضر", period: "1987–1988" },
    { name: "أ.د. سيد عبد الفتاح", period: "1988–1992" },
    { name: "أ.د. عصام سالم", period: "1992–1999" },
    { name: "أ.د. نصر الدين دمير", period: "1999–2003" },
    { name: "أ.د. محمد عبد الله", period: "2003–2006" },
    { name: "أ.د. حسن نادر", period: "2006–2009" },
    { name: "أ.د. هند حنفي", period: "2009–2011" },
    { name: "أ.د. أسامة إبراهيم", period: "2011–2014" },
    { name: "أ.د. رشدي زهران", period: "2014–2016" }
  ]
}
    
    },
  },
  
};