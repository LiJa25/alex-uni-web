"use client";

import React, { useEffect, Suspense } from 'react';
import Hero from "@/components/Hero";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
    Star, MapPin, Phone, Video, Activity, Scale, Smile,
    Atom, ScrollText, Palette, TrendingUp, Flame, 
    Microscope, Cpu, Stethoscope, Sprout, ExternalLink,
    Dog, Map, Dumbbell, HeartPulse, Shapes, Landmark, 
    Database, Puzzle, HeartHandshake, GraduationCap, Dna, Leaf
} from 'lucide-react';

const faculties = [
    {
        id: "medicine",
        name: "FACULTY OF MEDICINE",
        subtitle: "Medical Excellence Since 1942",
        description: "World-class hospital training, advanced clinical research labs, and pioneering healthcare initiatives.",
        bullets: ["Surgery", "Pediatrics", "Neuroscience"],
        location: "ElKhartoom Square, El-Azarita",
        phone: "+20 3 4862506",
        icon: <Activity size={32} />,
        colorTheme: "text-rose-600 dark:text-rose-400",
        borderTheme: "hover:border-rose-500 dark:hover:border-rose-400",
        shadowTheme: "hover:shadow-[0_8px_30px_rgba(225,29,72,0.15)] dark:hover:shadow-[0_0_20px_rgba(225,29,72,0.3)]",
        link: "https://med.alexu.edu.eg/walexmed/",
        isExternal: true
    },
    {
        id: "law",
        name: "FACULTY OF LAW",
        subtitle: "Legal Leadership & Advocacy",
        description: "Comprehensive legal education, competitive moot court halls, and international human rights frameworks.",
        bullets: ["Corporate Law", "Human Rights", "International Arbitration"],
        location: "Sooter Street, Al Shatebi",
        phone: "+20 3 4876611",
        icon: <Scale size={32} />,
        colorTheme: "text-blue-600 dark:text-blue-400",
        borderTheme: "hover:border-blue-500 dark:hover:border-blue-400",
        shadowTheme: "hover:shadow-[0_8px_30px_rgba(37,99,235,0.15)] dark:hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]",
        link: "https://law.alexu.edu.eg/index.php/en/",
        isExternal: true
    },
    {
        id: "dentistry",
        name: "FACULTY OF DENTISTRY",
        subtitle: "Innovative Oral Care & Surgery",
        description: "State-of-the-art dental clinics, modern phantom labs, and advanced biomaterials research.",
        bullets: ["Orthodontics", "Endodontics", "Maxillofacial Surgery"],
        location: "Champollion Street, Azarita",
        phone: "+20 3 4868308",
        icon: <Smile size={32} />,
        colorTheme: "text-cyan-600 dark:text-cyan-400",
        borderTheme: "hover:border-cyan-500 dark:hover:border-cyan-400",
        shadowTheme: "hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]",
        link: "https://dent.alexu.edu.eg/index.php/ar/",
        isExternal: true
    },
    {
        id: "science",
        name: "FACULTY OF SCIENCE",
        subtitle: "Discovery, Research & Innovation",
        description: "Advanced nanotechnology centers, specialized chemical analysis, and international scientific publication hubs.",
        bullets: ["Physics", "Molecular Biology", "Mathematics"],
        location: "Baghdad Street, Moharam Bek",
        phone: "+20 3 3921595",
        icon: <Atom size={32} />,
        colorTheme: "text-amber-500 dark:text-amber-400",
        borderTheme: "hover:border-amber-500 dark:hover:border-amber-400",
        shadowTheme: "hover:shadow-[0_8px_30px_rgba(245,158,11,0.15)] dark:hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]",
        link: "https://sci.alexu.edu.eg/index.php/en/",
        isExternal: true
    },
    {
        id: "arts",
        name: "FACULTY OF ARTS",
        subtitle: "Preserving Culture & Human Thought",
        description: "Advanced linguistic studies, historical research archives, and deep philosophical exploration.",
        bullets: ["Lexicology & Linguistics", "Archeology", "Philosophy"],
        location: "Sooter Street, El-Shatby",
        phone: "+20 3 5921676",
        icon: <ScrollText size={32} />,
        colorTheme: "text-purple-600 dark:text-purple-400",
        borderTheme: "hover:border-purple-500 dark:hover:border-purple-400",
        shadowTheme: "hover:shadow-[0_8px_30px_rgba(147,51,234,0.15)] dark:hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]",
        link: "/academics/arts",
        isExternal: false
    },
    {
        id: "fine-arts",
        name: "FACULTY OF FINE ARTS",
        subtitle: "Creativity, Architecture & Expression",
        description: "Specialized design studios, open-concept art galleries, and architectural heritage modeling projects.",
        bullets: ["Architecture", "Painting", "Visual Communication"],
        location: "16 El-Gortay Street, Mazloum",
        phone: "+20 3 5829154",
        icon: <Palette size={32} />,
        colorTheme: "text-orange-600 dark:text-orange-400",
        borderTheme: "hover:border-orange-500 dark:hover:border-orange-400",
        shadowTheme: "hover:shadow-[0_8px_30px_rgba(234,88,12,0.15)] dark:hover:shadow-[0_0_20px_rgba(234,88,12,0.3)]",
        link: "https://www.alexu.edu.eg/index.php/en/?option=com_content&view=article&id=451",
        isExternal: true
    },
    {
        id: "business",
        name: "FACULTY OF BUSINESS",
        subtitle: "Shaping Global Markets & Leaders",
        description: "High-tech business analytics platforms, incubator startup hubs, and international corporate partnerships.",
        bullets: ["Fintech", "Data Analytics", "Strategic Management"],
        location: "El-Guesh Road, El-Shatby",
        phone: "+20 3 5910164",
        icon: <TrendingUp size={32} />,
        colorTheme: "text-emerald-600 dark:text-emerald-400",
        borderTheme: "hover:border-emerald-500 dark:hover:border-emerald-400",
        shadowTheme: "hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)] dark:hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]",
        link: "https://com.alexu.edu.eg/index.php/en/",
        isExternal: true
    },
    {
        id: "engineering",
        name: "FACULTY OF ENGINEERING",
        subtitle: "Building the Future Infrastructure",
        description: "Cutting-edge robotics labs, structural testing facilities, and renewable energy engineering protocols.",
        bullets: ["Civil Engineering", "Mechatronics", "Architecture"],
        location: "Lotfy El-Sied Street, Alexandria",
        phone: "+20 3 5925505",
        icon: <Cpu size={32} />,
        colorTheme: "text-sky-600 dark:text-sky-400",
        borderTheme: "hover:border-sky-500 dark:hover:border-sky-400",
        shadowTheme: "hover:shadow-[0_8px_30px_rgba(14,165,233,0.15)] dark:hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]",
        link: "https://eng.alexu.edu.eg/index.php/en/",
        isExternal: true
    },
    {
        id: "pharmacy",
        name: "FACULTY OF PHARMACY",
        subtitle: "Advancing Clinical Therapeutics",
        description: "Formulation laboratories, clinical trials centers, and advanced pharmacology research institutes.",
        bullets: ["Clinical Pharmacy", "Pharmaceutics", "Toxicology"],
        location: "1 El-Khartoom Square, Azarita",
        phone: "+20 3 4871317",
        icon: <Microscope size={32} />,
        colorTheme: "text-teal-600 dark:text-teal-400",
        borderTheme: "hover:border-teal-500 dark:hover:border-teal-400",
        shadowTheme: "hover:shadow-[0_8px_30px_rgba(20,184,166,0.15)] dark:hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]",
        link: "https://pharmacy.alexu.edu.eg/index.php/en/",
        isExternal: true
    },
    {
        id: "agriculture",
        name: "FACULTY OF AGRICULTURE",
        subtitle: "Sustainable Food & Eco-Systems",
        description: "Experimental farming grounds, food technology processing units, and environmental sustainability labs.",
        bullets: ["Agribusiness", "Food Science", "Plant Pathology"],
        location: "Aflaton Street, El-Shatby",
        phone: "+20 3 5921960",
        icon: <Sprout size={32} />,
        colorTheme: "text-lime-600 dark:text-lime-400",
        borderTheme: "hover:border-lime-500 dark:hover:border-lime-400",
        shadowTheme: "hover:shadow-[0_8px_30px_rgba(132,204,22,0.15)] dark:hover:shadow-[0_0_20px_rgba(132,204,22,0.3)]",
        link: "https://agr.alexu.edu.eg/index.php/en/",
        isExternal: true
    },
    {
        id: "nursing",
        name: "FACULTY OF NURSING",
        subtitle: "Compassionate Clinical Care",
        description: "High-fidelity simulation centers for acute care, pediatric health, and psychiatric nursing practice.",
        bullets: ["Critical Care", "Pediatrics", "Psychiatric Nursing"],
        location: "Smouha, Alexandria",
        phone: "+20 3 4296496",
        icon: <Stethoscope size={32} />,
        colorTheme: "text-pink-600 dark:text-pink-400",
        borderTheme: "hover:border-pink-500 dark:hover:border-pink-400",
        shadowTheme: "hover:shadow-[0_8px_30px_rgba(219,39,119,0.15)] dark:hover:shadow-[0_0_20px_rgba(219,39,119,0.3)]",
        link: "https://nursing.alexu.edu.eg/index.php/en/",
        isExternal: true
    },
    {
        id: "education",
        name: "FACULTY OF EDUCATION",
        subtitle: "Empowering Future Educators",
        description: "Advanced psychological training modules, modern e-learning curriculum centers, and community teaching initiatives.",
        bullets: ["Educational Psychology", "Curriculum Design", "Special Ed"],
        location: "El-Guesh Road, Al Shatebi",
        phone: "+20 3 5926315",
        icon: <Flame size={32} />,
        colorTheme: "text-indigo-600 dark:text-indigo-400",
        borderTheme: "hover:border-indigo-500 dark:hover:border-indigo-400",
        shadowTheme: "hover:shadow-[0_8px_30px_rgba(79,70,229,0.15)] dark:hover:shadow-[0_0_20px_rgba(79,70,229,0.3)]",
        link: "https://edu.alexu.edu.eg/index.php/ar/",
        isExternal: true
    },
    {
        id: "veterinary",
        name: "FACULTY OF VETERINARY MEDICINE",
        subtitle: "Animal Health & Ecosystems",
        description: "Advanced veterinary clinics, animal disease control, and agricultural ecosystem health.",
        bullets: ["Veterinary Surgery", "Animal Hygiene", "Pathology"],
        location: "Edfina, Beheira",
        phone: "+20 45 2960450",
        icon: <Dog size={32} />,
        colorTheme: "text-fuchsia-600 dark:text-fuchsia-400",
        borderTheme: "hover:border-fuchsia-500 dark:hover:border-fuchsia-400",
        shadowTheme: "hover:shadow-[0_8px_30px_rgba(192,38,211,0.15)] dark:hover:shadow-[0_0_20px_rgba(192,38,211,0.3)]",
        link: "https://vet.alexu.edu.eg/index.php/en/",
        isExternal: true
    },
    {
        id: "tourism",
        name: "FACULTY OF TOURISM & HOTELS",
        subtitle: "Hospitality & Heritage Management",
        description: "Premium hospitality training, tourism guidance, and cultural heritage preservation.",
        bullets: ["Hotel Management", "Tourism Studies", "Tour Guidance"],
        location: "Azarita, Alexandria",
        phone: "+20 3 4843649",
        icon: <Map size={32} />,
        colorTheme: "text-yellow-600 dark:text-yellow-400",
        borderTheme: "hover:border-yellow-500 dark:hover:border-yellow-400",
        shadowTheme: "hover:shadow-[0_8px_30px_rgba(234,179,8,0.15)] dark:hover:shadow-[0_0_20px_rgba(234,179,8,0.3)]",
        link: "https://tourism.alexu.edu.eg/index.php/en/",
        isExternal: true
    },
    {
        id: "physical-ed-men",
        name: "FACULTY OF PHYSICAL ED (MEN)",
        subtitle: "Athletic Excellence & Sports Science",
        description: "High-performance athletic training, sports psychology, and kinetic sciences.",
        bullets: ["Sports Training", "Kinesiology", "Sports Management"],
        location: "Abu Qir, Alexandria",
        phone: "+20 3 5622833",
        icon: <Dumbbell size={32} />,
        colorTheme: "text-zinc-600 dark:text-zinc-400",
        borderTheme: "hover:border-zinc-500 dark:hover:border-zinc-400",
        shadowTheme: "hover:shadow-[0_8px_30px_rgba(82,82,91,0.15)] dark:hover:shadow-[0_0_20px_rgba(113,113,122,0.3)]",
        link: "https://sea.alexu.edu.eg/en/home-en/",
        isExternal: true
    },
    {
        id: "physical-ed-women",
        name: "FACULTY OF PHYSICAL ED (WOMEN)",
        subtitle: "Women's Sports & Health Sciences",
        description: "Specialized fitness programs, health rehabilitation, and athletic education for women.",
        bullets: ["Health Fitness", "Gymnastics", "Physical Rehabilitation"],
        location: "Fleming, Alexandria",
        phone: "+20 3 5824533",
        icon: <HeartPulse size={32} />,
        colorTheme: "text-red-600 dark:text-red-400",
        borderTheme: "hover:border-red-500 dark:hover:border-red-400",
        shadowTheme: "hover:shadow-[0_8px_30px_rgba(220,38,38,0.15)] dark:hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]",
        link: "https://alexu.edu.eg/index.php/en/university-laboratories/58-academics/448-faculty-of-physical-education-for-girls",
        isExternal: true
    },
    {
        id: "specific-education",
        name: "FACULTY OF SPECIFIC EDUCATION",
        subtitle: "Applied Arts & Specialized Pedagogy",
        description: "Musical education, home economics, and specialized educational technology.",
        bullets: ["Art Education", "Music Education", "Home Economics"],
        location: "Glim, Alexandria",
        phone: "+20 3 5840250",
        icon: <Shapes size={32} />,
        colorTheme: "text-violet-600 dark:text-violet-400",
        borderTheme: "hover:border-violet-500 dark:hover:border-violet-400",
        shadowTheme: "hover:shadow-[0_8px_30px_rgba(139,92,246,0.15)] dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]",
        link: "https://sp-edu.alexu.edu.eg/index.php/ar/",
        isExternal: true
    },
    {
        id: "economics",
        name: "ECONOMIC & POLITICAL SCIENCE",
        subtitle: "Policy, Governance & Markets",
        description: "Diplomatic studies, macroeconomic analysis, and international relations.",
        bullets: ["Political Science", "Economics", "Public Administration"],
        location: "Smouha, Alexandria",
        phone: "+20 3 4243555",
        icon: <Landmark size={32} />,
        colorTheme: "text-stone-600 dark:text-stone-400",
        borderTheme: "hover:border-stone-500 dark:hover:border-stone-400",
        shadowTheme: "hover:shadow-[0_8px_30px_rgba(87,83,78,0.15)] dark:hover:shadow-[0_0_20px_rgba(120,113,108,0.3)]",
        link: "https://esps.alexu.edu.eg/index.php/en/",
        isExternal: true
    },
    {
        id: "computing",
        name: "COMPUTING & DATA SCIENCE",
        subtitle: "AI & Information Systems",
        description: "Advanced machine learning labs, cybersecurity frameworks, and software engineering.",
        bullets: ["Data Science", "Artificial Intelligence", "Cybersecurity"],
        location: "Smouha, Alexandria",
        phone: "+20 3 4280555",
        icon: <Database size={32} />,
        colorTheme: "text-slate-600 dark:text-slate-400",
        borderTheme: "hover:border-slate-500 dark:hover:border-slate-400",
        shadowTheme: "hover:shadow-[0_8px_30px_rgba(71,85,105,0.15)] dark:hover:shadow-[0_0_20px_rgba(100,116,139,0.3)]",
        link: "https://fcds.alexu.edu.eg/",
        isExternal: true
    },
    {
        id: "early-childhood",
        name: "EARLY CHILDHOOD EDUCATION",
        subtitle: "Child Development & Psychology",
        description: "Foundational pedagogical training for early years, child psychology, and developmental care.",
        bullets: ["Child Psychology", "Special Needs", "Educational Media"],
        location: "Miami, Alexandria",
        phone: "+20 3 5506044",
        icon: <Puzzle size={32} />,
        colorTheme: "text-green-600 dark:text-green-400",
        borderTheme: "hover:border-green-500 dark:hover:border-green-400",
        shadowTheme: "hover:shadow-[0_8px_30px_rgba(34,197,94,0.15)] dark:hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]",
        link: "https://www.alexu.edu.eg/index.php/en/facnews/10229-faculty-of-early-childhood-education-celebrates-the-graduation-of-a-new-class",
        isExternal: true
    },
    {
        id: "public-health",
        name: "HIGH INSTITUTE OF PUBLIC HEALTH",
        subtitle: "Epidemiology & Community Medicine",
        description: "Global health initiatives, disease prevention research, and public health policy administration.",
        bullets: ["Epidemiology", "Nutrition", "Environmental Health"],
        location: "165 El-Horreya Ave, Hadara",
        phone: "+20 3 4285575",
        icon: <HeartHandshake size={32} />,
        colorTheme: "text-neutral-600 dark:text-neutral-400",
        borderTheme: "hover:border-neutral-500 dark:hover:border-neutral-400",
        shadowTheme: "hover:shadow-[0_8px_30px_rgba(82,82,82,0.15)] dark:hover:shadow-[0_0_20px_rgba(115,115,115,0.3)]",
        link: "https://hiph.alexu.edu.eg/index.php/en/",
        isExternal: true
    },
    {
        id: "graduate-studies",
        name: "GRADUATE STUDIES & RESEARCH",
        subtitle: "Advanced Interdisciplinary Science",
        description: "Postgraduate master's and doctoral degrees focusing on applied sciences and global research.",
        bullets: ["Biotechnology", "Materials Science", "Environmental Studies"],
        location: "163 El-Horreya Ave, Shatby",
        phone: "+20 3 4295007",
        icon: <GraduationCap size={32} />,
        colorTheme: "text-gray-600 dark:text-gray-400",
        borderTheme: "hover:border-gray-500 dark:hover:border-gray-400",
        shadowTheme: "hover:shadow-[0_8px_30px_rgba(75,85,99,0.15)] dark:hover:shadow-[0_0_20px_rgba(107,114,128,0.3)]",
        link: "https://igsr.alexu.edu.eg/index.php/en/",
        isExternal: true
    },
    {
        id: "medical-research",
        name: "MEDICAL RESEARCH INSTITUTE",
        subtitle: "Clinical & Experimental Pathology",
        description: "Cutting-edge biomedical investigations, tumor biology, and experimental therapeutic trials.",
        bullets: ["Cancer Research", "Immunology", "Molecular Genetics"],
        location: "Smouha, Alexandria",
        phone: "+20 3 4282331",
        icon: <Dna size={32} />,
        colorTheme: "text-rose-700 dark:text-rose-500",
        borderTheme: "hover:border-rose-600 dark:hover:border-rose-500",
        shadowTheme: "hover:shadow-[0_8px_30px_rgba(190,18,60,0.15)] dark:hover:shadow-[0_0_20px_rgba(244,63,94,0.3)]",
        link: "https://mri.alexu.edu.eg/index.php/en/",
        isExternal: true
    },
    {
        id: "agriculture-saba",
        name: "AGRICULTURE (SABA BASHA)",
        subtitle: "Advanced Agronomy & Bio-Systems",
        description: "Specialized agricultural sciences, plant breeding, and sustainable crop production technologies.",
        bullets: ["Plant Production", "Soil Science", "Agricultural Economics"],
        location: "Saba Basha, Alexandria",
        phone: "+20 3 5832073",
        icon: <Leaf size={32} />,
        colorTheme: "text-lime-700 dark:text-lime-500",
        borderTheme: "hover:border-lime-600 dark:hover:border-lime-500",
        shadowTheme: "hover:shadow-[0_8px_30px_rgba(101,163,13,0.15)] dark:hover:shadow-[0_0_20px_rgba(132,204,22,0.3)]",
        link: "https://www.alexu.edu.eg/index.php/en/?option=com_content&view=article&id=452",
        isExternal: true
    }
];

function AcademicsContent() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const facultyId = searchParams.get('faculty');
        if (facultyId) {
            setTimeout(() => {
                const element = document.getElementById(facultyId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    element.classList.add('ring-4', 'ring-[#D4AF37]', 'ring-offset-4', 'dark:ring-offset-[#050B14]', 'scale-[1.02]');
                    setTimeout(() => {
                        element.classList.remove('ring-4', 'ring-[#D4AF37]', 'ring-offset-4', 'dark:ring-offset-[#050B14]', 'scale-[1.02]');
                    }, 1500);
                }
            }, 500);
        }
    }, [searchParams]);

    return (
        <div className="bg-[#F8FAFC] dark:bg-[#050B14] min-h-screen relative overflow-hidden font-sans transition-colors duration-500">
            
            <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#001A41 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            <div className="hidden dark:block absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`, backgroundSize: '4rem 4rem' }}></div>

            <div className="z-50 relative">
                <Hero showFullHero={false} />
            </div>

            <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-3 text-[#0B3C5D] dark:text-[#D4AF37] font-bold tracking-widest text-xs uppercase mb-6">
                        <span className="w-12 h-[1px] bg-[#0B3C5D]/30 dark:bg-[#D4AF37]/50"></span>
                        <Star size={14} className="fill-current" />
                        <span>EST. 1938 • ALEXANDRIA, EGYPT</span>
                        <span className="w-12 h-[1px] bg-[#0B3C5D]/30 dark:bg-[#D4AF37]/50"></span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#001A41] dark:text-white tracking-tight md:tracking-wider uppercase drop-shadow-sm dark:drop-shadow-lg">
                        Alexandria University
                    </h1>

                    <h2 className="text-xl md:text-2xl text-[#D4AF37] font-semibold tracking-widest uppercase">
                        Academics Hub
                    </h2>

                    <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 mt-6 text-sm md:text-base leading-relaxed">
                        Explore our world-class faculties and institutes united by a tradition of scholarship,
                        innovation, and excellence across every scientific and humanistic discipline.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {faculties.map((faculty) => (
                        <div
                            key={faculty.id}
                            id={faculty.id}
                            className={`bg-white dark:bg-[#0B1320]/80 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col h-full transition-all duration-500 group shadow-sm ${faculty.borderTheme} ${faculty.shadowTheme}`}
                        >
                            <div className="mb-6">
                                <div className={`mb-4 transform group-hover:scale-110 transition-transform duration-300 origin-left ${faculty.colorTheme}`}>
                                    {faculty.icon}
                                </div>
                                <h3 className={`text-lg font-bold tracking-widest uppercase mb-1 ${faculty.colorTheme}`}>
                                    {faculty.name}
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 text-[11px] font-bold tracking-wide uppercase">
                                    {faculty.subtitle}
                                </p>
                            </div>

                            <div className="flex-grow">
                                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 font-medium dark:font-normal">
                                    {faculty.description}
                                </p>
                                <ul className="space-y-2 mb-8">
                                    {faculty.bullets.map((bullet, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-semibold dark:font-medium">
                                            <span className={`w-1.5 h-1.5 rounded-full ${faculty.colorTheme.split(' ')[0].replace('text-', 'bg-')} dark:${faculty.colorTheme.split(' ')[1].replace('text-', 'bg-')}`}></span>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="space-y-3 mb-6">
                                <Link href={faculty.link} target={faculty.isExternal ? "_blank" : "_self"} rel={faculty.isExternal ? "noopener noreferrer" : ""}>
                                    <button className="w-full py-3 mb-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#050B14] text-[#001A41] dark:text-white text-xs font-bold tracking-widest uppercase hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white dark:hover:text-[#001A33] transition-all duration-300 flex items-center justify-center gap-2 shadow-sm">
                                        Visit Portal {faculty.isExternal ? <ExternalLink size={14}/> : '→'}
                                    </button>
                                </Link>
                                <button className="w-full py-3 rounded-xl border border-[#0B3C5D]/20 dark:border-cyan-900/50 text-[#0B3C5D] dark:text-cyan-500 text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#0B3C5D]/5 dark:hover:bg-cyan-900/30 transition-colors duration-300">
                                    <Video size={14} />
                                    Virtual Tour
                                </button>
                            </div>

                            <div className="h-[1px] w-full bg-slate-100 dark:bg-slate-800 my-4"></div>

                            <div className="grid grid-cols-2 gap-4 text-slate-500 dark:text-slate-400 text-[11px] mb-6 font-semibold dark:font-medium">
                                <div className="flex items-start gap-2 border-r border-slate-200 dark:border-slate-800 pr-2">
                                    <MapPin size={14} className={`flex-shrink-0 mt-0.5 ${faculty.colorTheme.split(' ')[0]} dark:${faculty.colorTheme.split(' ')[1]}`} />
                                    <span className="leading-snug line-clamp-3" title={faculty.location}>
                                        {faculty.location}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2 pl-2">
                                    <Phone size={14} className={`flex-shrink-0 ${faculty.colorTheme.split(' ')[0]} dark:${faculty.colorTheme.split(' ')[1]}`} />
                                    <span className="leading-snug">{faculty.phone}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default function Academics() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#F8FAFC] dark:bg-[#050B14] flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D4AF37]"></div></div>}>
            <AcademicsContent />
        </Suspense>
    );
}