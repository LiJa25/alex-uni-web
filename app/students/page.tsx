// app/students/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Hero from "@/components/Hero";
import { supabase } from "@/lib/supabase";
import {
    BookOpen,
    Flame,
    Home,
    Trophy,
    Video,
    ChevronRight,
    Lock,
    Loader2,
    Eye,
    EyeOff,
    ArrowLeft,
    Calendar,
    History,
    Users,
    Settings,
    Mic,
    MicOff,
    Camera,
    VideoOff,
    Monitor,
    MessageSquare,
    Send,
    Radio,
    Play,
    AlertTriangle,
    Maximize,
    Minimize,
    X
} from 'lucide-react';

type ClassroomTab = "schedule" | "assignments" | "history" | "groups" | "boardroom";

export default function StudentsPage() {
    // Layout & Streaming View States
    const [activeView, setActiveView] = useState<"portal" | "classroom">("portal");
    const [classroomTab, setClassroomTab] = useState<ClassroomTab>("schedule");
    const [isStreaming, setIsStreaming] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);

    // Pre-Join Modal States
    const [showJoinModal, setShowJoinModal] = useState(false);
    const [micEnabled, setMicEnabled] = useState(false);
    const [camEnabled, setCamEnabled] = useState(false);

    // Auth State Tracking
    const [user, setUser] = useState<any>(null);
    const [checkingAuth, setCheckingAuth] = useState(true);

    // Login Form State
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [authLoading, setAuthLoading] = useState(false);
    const [authError, setAuthError] = useState<string | null>(null);

    // Live Q&A Chat Interactive Mock State (Arts/Info-Com Context)
    const [chatMessages, setChatMessages] = useState([
        { name: "Sara K.", text: "Can we use NLTK instead of spaCy for this script?", time: "10:12", isProf: false },
        { name: "Ahmed M.", text: "Is the syntax tree diagram required for part 2?", time: "10:14", isProf: false },
        { name: "Prof. Dr. Nabil", text: "Yes Ahmed, the syntax tree is mandatory. I am demonstrating it on screen now.", time: "10:15", isProf: true },
        { name: "Nour F.", text: "Thank you professor!", time: "10:16", isProf: false },
        { name: "Omar H.", text: "Will this be recorded for review before the 2026 midterms?", time: "10:17", isProf: false }
    ]);
    const [newMsg, setNewMsg] = useState("");

    // Sync session token metrics on mount
    useEffect(() => {
        async function checkUserSession() {
            try {
                const { data: { user } } = await supabase.auth.getUser();
                setUser(user);
            } catch (err) {
                console.error("Auth verification failed:", err);
            } finally {
                setCheckingAuth(false);
            }
        }
        checkUserSession();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    const handleInlineLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setAuthLoading(true);
        setAuthError(null);
        try {
            const { data, error } = await supabase.auth.signInWithPassword({ email, password });
            if (error) throw error;
            setUser(data.user);
        } catch (err: any) {
            setAuthError(err.message || "Invalid credentials.");
        } finally {
            setAuthLoading(false);
        }
    };

    const handleSendChat = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newMsg.trim()) return;
        setChatMessages([...chatMessages, {
            name: "Lujain Mesbah (You)",
            text: newMsg,
            time: "10:20",
            isProf: false
        }]);
        setNewMsg("");
    };

    const confirmJoinMeeting = () => {
        setShowJoinModal(false);
        setIsStreaming(true);
    };

    if (checkingAuth) {
        return (
            <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center text-slate-500 gap-3">
                <Loader2 className="animate-spin text-[#0B3C5D]" size={32} />
                <p className="text-sm font-medium animate-pulse">Verifying secure student identity path...</p>
            </div>
        );
    }

    // --- ENTRANCE BOUNDARY GATEWAY SHIELD ---
    if (!user) {
        return (
            <div className="bg-[#F8FAFC] min-h-screen text-[#001A41] font-sans antialiased">
                <Hero showFullHero={false} />
                <main className="pt-36 pb-24 px-4 flex justify-center items-center">
                    <div className="bg-white border border-slate-200 shadow-xl rounded-3xl p-8 max-w-md w-full space-y-6 relative overflow-hidden animate-fadeIn">
                        <div className="absolute top-0 left-0 w-full h-2 bg-[#D4AF37]"></div>
                        <div className="text-center space-y-2">
                            <div className="w-12 h-12 rounded-full bg-amber-50 text-[#D4AF37] flex items-center justify-center mx-auto border border-amber-100"><Lock size={22} /></div>
                            <h2 className="text-2xl font-serif font-bold text-[#001A41]">Please log in first</h2>
                            <p className="text-xs text-slate-500 max-w-xs mx-auto">Access to the Alexandria University Student Life & Academic Path Gateway requires verified student authentication.</p>
                        </div>
                        {authError && <div className="bg-rose-50 border border-rose-100 text-rose-600 rounded-xl p-3 text-xs font-medium text-center">{authError}</div>}
                        <form onSubmit={handleInlineLogin} className="space-y-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Academic Email</label>
                                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your university email" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-transparent text-slate-800 outline-none text-sm focus:border-[#D4AF37]" />
                            </div>
                            <div className="flex flex-col gap-1 relative">
                                <label className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">Portal Password</label>
                                <div className="relative">
                                    <input type={showPassword ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-transparent text-slate-800 outline-none text-sm focus:border-[#D4AF37]" />
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                    </button>
                                </div>
                            </div>
                            <button type="submit" disabled={authLoading} className="w-full bg-[#0B3C5D] hover:bg-[#D4AF37] text-white hover:text-[#001A41] font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 mt-2">
                                {authLoading && <Loader2 className="animate-spin" size={14} />}
                                <span>{authLoading ? "Verifying Credentials..." : "Sign In to Portal"}</span>
                            </button>
                        </form>
                    </div>
                </main>
            </div>
        );
    }

    // --- VIEW A: MAIN STUDENT LIFE INDEX DASHBOARD HUB ---
    if (activeView === "portal") {
        return (
            <div className="bg-[#F8FAFC] min-h-screen text-[#001A41] font-sans antialiased selection:bg-[#D4AF37]/30 transition-colors duration-500">
                <Hero showFullHero={false} />
                <main className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
                    <div className="text-center space-y-4 max-w-2xl mx-auto">
                        <div className="w-14 h-14 bg-[#0B3C5D]/5 text-[#0B3C5D] rounded-full flex items-center justify-center mx-auto border border-[#0B3C5D]/10 shadow-sm">
                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" /></svg>
                        </div>
                        <div className="space-y-1">
                            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#001A41]">Alexandria University</h1>
                            <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#0B3C5D]">Student Life & Academic Path Gateway</p>
                        </div>
                        <div className="w-12 h-[2px] bg-[#D4AF37] mx-auto mt-2"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1: Study @ AU */}
                        <div className="group bg-white border border-slate-200 hover:border-[#D4AF37]/40 rounded-2xl p-6 flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-lg cursor-pointer">
                            <div className="space-y-4">
                                <div className="flex items-start justify-between">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0B3C5D]"><BookOpen size={18} /></div>
                                    <div className="text-right">
                                        <span className="text-lg font-bold text-[#0B3C5D] block">21 Faculties</span>
                                        <span className="text-[10px] text-slate-400 font-medium tracking-wide block -mt-1">Active Programs</span>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-lg font-bold text-[#001A41]">Study @ AU</h3>
                                    <span className="inline-block text-[11px] bg-slate-50 text-slate-500 px-2.5 py-0.5 rounded-md font-medium border border-slate-100">Academic Tracks</span>
                                </div>
                                <p className="text-slate-500 text-xs font-light leading-relaxed">Explore comprehensive academic programs across Medical, Scientific, Educational, and Humanities faculties with world-class faculty.</p>
                            </div>
                            <div className="border-t border-slate-100 pt-4 mt-5 flex items-center justify-between text-[11px] text-slate-400 font-medium group-hover:text-[#D4AF37] transition-colors">
                                <span>Click to explore</span><ChevronRight size={14} />
                            </div>
                        </div>

                        {/* Card 2: Student Activities Central */}
                        <div className="group bg-white border border-slate-200 hover:border-[#D4AF37]/40 rounded-2xl p-6 flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-lg cursor-pointer">
                            <div className="space-y-4">
                                <div className="flex items-start justify-between">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0B3C5D]"><Flame size={18} /></div>
                                    <div className="text-right">
                                        <span className="text-lg font-bold text-[#0B3C5D] block">47 Clubs</span>
                                        <span className="text-[10px] text-slate-400 font-medium tracking-wide block -mt-1">Active This Semester</span>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-lg font-bold text-[#001A41]">Student Activities Central</h3>
                                    <span className="inline-block text-[11px] bg-amber-50 text-[#bda032] px-2.5 py-0.5 rounded-md font-semibold border border-amber-100/50">Sports · Arts · Volunteering</span>
                                </div>
                                <p className="text-slate-500 text-xs font-light leading-relaxed">Join dynamic sports teams, vibrant arts collectives, and impactful volunteer programs at Alexandria University.</p>
                            </div>
                            <div className="border-t border-slate-100 pt-4 mt-5 flex items-center justify-between text-[11px] text-slate-400 font-medium group-hover:text-[#D4AF37] transition-colors">
                                <span>Click to explore</span><ChevronRight size={14} />
                            </div>
                        </div>

                        {/* Card 3: Student Accommodation Gateway */}
                        <div className="group bg-white border border-slate-200 hover:border-[#D4AF37]/40 rounded-2xl p-6 flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-lg cursor-pointer">
                            <div className="space-y-4">
                                <div className="flex items-start justify-between">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0B3C5D]"><Home size={18} /></div>
                                    <div className="text-right">
                                        <span className="text-lg font-bold text-[#0B3C5D] block">2,400 Beds</span>
                                        <span className="text-[10px] text-slate-400 font-medium tracking-wide block -mt-1">Available Units</span>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-lg font-bold text-[#001A41]">Student Accommodation Gateway</h3>
                                    <span className="inline-block text-[11px] bg-slate-50 text-slate-500 px-2.5 py-0.5 rounded-md font-medium border border-slate-100">Campus Housing Portal</span>
                                </div>
                                <p className="text-slate-500 text-xs font-light leading-relaxed">Apply for university housing, manage contracts, and download official regulations through our fully automated portal.</p>
                            </div>
                            <div className="border-t border-slate-100 pt-4 mt-5 flex items-center justify-between text-[11px] text-slate-400 font-medium group-hover:text-[#D4AF37] transition-colors">
                                <span>Click to explore</span><ChevronRight size={14} />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {/* Card 4: Scientific Laureates & Awards */}
                        <div className="md:col-span-2 group bg-white border border-slate-200 hover:border-[#D4AF37]/40 rounded-2xl p-6 flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-lg cursor-pointer">
                            <div className="space-y-4">
                                <div className="flex items-start justify-between">
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0B3C5D]"><Trophy size={18} /></div>
                                    <div className="text-right">
                                        <span className="text-lg font-bold text-[#D4AF37] block">38 Patents</span>
                                        <span className="text-[10px] text-slate-400 font-medium tracking-wide block -mt-1">Active This Year</span>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-lg font-bold text-[#001A41]">Scientific Laureates & Awards</h3>
                                    <span className="inline-block text-[11px] bg-amber-50 text-[#bda032] px-2.5 py-0.5 rounded-md font-medium border border-amber-100/40">Innovation Showcase</span>
                                </div>
                                <p className="text-slate-500 text-xs font-light leading-relaxed">Celebrating Alexandria University's brightest innovators, active patent holders, and international research award recipients.</p>
                            </div>
                            <div className="border-t border-slate-100 pt-4 mt-5 flex items-center justify-between text-[11px] text-slate-400 font-medium group-hover:text-[#D4AF37] transition-colors">
                                <span>Click to explore</span><ChevronRight size={14} />
                            </div>
                        </div>

                        {/* CARD 5: PRIMARY CLASSROOM INTERFACE ACTUATOR TILE */}
                        <div
                            onClick={() => {
                                setActiveView("classroom");
                                setClassroomTab("schedule");
                                setIsStreaming(false);
                            }}
                            className="md:col-span-3 group bg-gradient-to-br from-white via-white to-slate-50 border-2 border-[#0B3C5D] shadow-md rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:shadow-xl cursor-pointer relative ring-4 ring-[#0B3C5D]/5"
                        >
                            <span className="absolute -top-2.5 left-6 bg-[#0B3C5D] text-white font-mono text-[9px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                                <span>Primary Student Hub Link</span>
                            </span>
                            <div className="space-y-4">
                                <div className="flex items-start justify-between">
                                    <div className="w-11 h-11 rounded-xl bg-[#0B3C5D] text-white flex items-center justify-center shadow-md"><Video size={20} /></div>
                                    <div className="text-right">
                                        <span className="text-lg font-extrabold text-[#0B3C5D] tracking-tight block animate-pulse">1 Live Now</span>
                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block -mt-1">Active Sessions</span>
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-black text-[#001A41] tracking-tight group-hover:text-[#0B3C5D] transition-colors">Live meeting hub</h3>
                                    <span className="inline-block text-[11px] bg-[#0B3C5D]/10 text-[#0B3C5D] font-bold px-2.5 py-0.5 rounded-md border border-[#0B3C5D]/10">Built-in AU Pipeline</span>
                                </div>
                                <p className="text-slate-600 text-xs font-normal leading-relaxed max-w-lg">Access live lectures, join virtual study groups, and participate in real-time digital classrooms directly via your university SSO.</p>
                            </div>
                            <div className="border-t border-slate-200/80 pt-4 mt-5 flex items-center justify-between text-xs text-[#0B3C5D] font-bold group-hover:text-[#D4AF37] transition-colors">
                                <span>Enter Active Communications Hub</span>
                                <div className="flex items-center gap-0.5 transform group-hover:translate-x-1 transition-transform">
                                    <span>Connect Now</span><ChevronRight size={14} strokeWidth={2.5} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="pt-8 border-t border-slate-200 text-center text-[11px] text-slate-400 font-medium tracking-wide">El Guish Road, El Shatby · Alexandria 21526, Egypt · +20 3 5921676</footer>
                </main>
            </div>
        );
    }

    // --- VIEW B: LIGHT-THEMED VIRTUAL INTEGRATION ENVIRONMENT CLASSROOM HUB ---
    return (
        <div className={`bg-[#F1F5F9] min-h-screen text-slate-800 font-sans antialiased flex flex-col transition-all duration-500 selection:bg-[#D4AF37]/20 ${isFullScreen ? 'overflow-hidden' : ''}`}>
            
            {/* PRE-JOIN MODAL */}
            {showJoinModal && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[250] flex items-center justify-center p-4 animate-fadeIn">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden">
                        <div className="p-6 text-center space-y-2 border-b border-slate-100">
                            <h2 className="text-xl font-bold text-[#001A41]">Ready to join?</h2>
                            <p className="text-xs text-slate-500">Computational Linguistics & Python<br/>Prof. Dr. Nabil</p>
                        </div>
                        <div className="p-8 flex items-center justify-center gap-6 bg-slate-50">
                            {/* Mic Toggle */}
                            <button 
                                onClick={() => setMicEnabled(!micEnabled)}
                                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all shadow-sm ${micEnabled ? 'bg-[#0B3C5D] text-white border-2 border-[#0B3C5D]' : 'bg-white text-rose-500 border-2 border-rose-100 hover:bg-rose-50'}`}
                            >
                                {micEnabled ? <Mic size={24} /> : <MicOff size={24} />}
                            </button>
                            {/* Camera Toggle */}
                            <button 
                                onClick={() => setCamEnabled(!camEnabled)}
                                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all shadow-sm ${camEnabled ? 'bg-[#0B3C5D] text-white border-2 border-[#0B3C5D]' : 'bg-white text-rose-500 border-2 border-rose-100 hover:bg-rose-50'}`}
                            >
                                {camEnabled ? <Camera size={24} /> : <VideoOff size={24} />}
                            </button>
                        </div>
                        <div className="p-4 flex items-center gap-3 bg-white">
                            <button onClick={() => setShowJoinModal(false)} className="flex-1 py-3 text-xs font-bold text-slate-500 hover:bg-slate-100 rounded-xl transition-colors">Cancel</button>
                            <button onClick={confirmJoinMeeting} className="flex-1 py-3 text-xs font-bold bg-[#D4AF37] hover:bg-[#bda032] text-[#001A41] rounded-xl shadow-md transition-colors">Join Meeting</button>
                        </div>
                    </div>
                </div>
            )}

            {/* PLATFORM NAVIGATION BAR */}
            <header className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between sticky top-0 z-40 shadow-sm">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => { setActiveView("portal"); setIsStreaming(false); setIsFullScreen(false); }}
                        className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-[#0B3C5D] border border-slate-200 rounded-lg px-2.5 py-1.5 transition-colors bg-slate-50 shadow-sm"
                    >
                        <ArrowLeft size={14} />
                        <span>Gateway</span>
                    </button>
                    <div className="h-4 w-[1px] bg-slate-200"></div>
                    <h2 className="text-sm font-bold text-[#001A41] flex items-center gap-1.5 tracking-tight">
                        <span>AU Live Meeting Hub</span>
                        <span className="text-[10px] text-slate-400 font-normal hidden sm:inline">· Faculty of Arts</span>
                    </h2>
                </div>

                <div className="flex items-center gap-3">
                    <div className="hidden md:flex flex-col text-right">
                        <span className="text-[11px] text-[#0B3C5D] font-bold">Applied Languages · Info-Com</span>
                        <span className="text-[10px] text-slate-400 font-medium -mt-0.5">Logged in</span>
                        <span className="text-xs font-bold text-slate-700 -mt-1">{user?.email}</span>
                    </div>
                    <div className="h-8 w-[1px] bg-slate-200 hidden md:block"></div>
                    <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-3 py-1 rounded-full border border-emerald-200/60 shadow-sm flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                        <span>Student Access: Verified</span>
                    </span>
                </div>
            </header>

            {/* PLATFORM MULTI-PANEL VIEWPORT */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden w-full mx-auto p-4 md:p-6 gap-6 max-w-[1600px]">
                
                {/* INTERACTIVE LEFT SIDEBAR CONTROLS */}
                <aside className="lg:col-span-3 flex flex-col gap-5">
                    <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-sm space-y-1">
                        <button 
                            onClick={() => { setClassroomTab("schedule"); setIsStreaming(false); setIsFullScreen(false); }}
                            className={`w-full flex items-center justify-between text-left text-xs font-bold p-2.5 rounded-xl transition-all ${classroomTab === "schedule" && !isStreaming ? 'bg-[#0B3C5D] text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}
                        >
                            <span className="flex items-center gap-2"><Calendar size={15} /> Schedule</span>
                            <span className="bg-rose-500 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">Live Now</span>
                        </button>
                        <button 
                            onClick={() => { setClassroomTab("assignments"); setIsStreaming(false); setIsFullScreen(false); }}
                            className={`w-full flex items-center justify-between text-left text-xs p-2.5 rounded-xl transition-all ${classroomTab === "assignments" ? 'bg-[#0B3C5D] text-white font-bold shadow-sm' : 'text-slate-600 font-medium hover:bg-slate-50'}`}
                        >
                            <span className="flex items-center gap-2"><BookOpen size={15} /> Assignments</span>
                            <span className={`text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center ${classroomTab === "assignments" ? 'bg-white/20 text-white' : 'bg-rose-100 text-rose-600'}`}>3</span>
                        </button>
                        <button 
                            onClick={() => { setClassroomTab("history"); setIsStreaming(false); setIsFullScreen(false); }}
                            className={`w-full flex items-center text-left text-xs p-2.5 rounded-xl transition-all gap-2 ${classroomTab === "history" ? 'bg-[#0B3C5D] text-white font-bold shadow-sm' : 'text-slate-600 font-medium hover:bg-slate-50'}`}
                        >
                            <History size={15} /> <span>History</span>
                        </button>
                        <button 
                            onClick={() => { setClassroomTab("groups"); setIsStreaming(false); setIsFullScreen(false); }}
                            className={`w-full flex items-center text-left text-xs p-2.5 rounded-xl transition-all gap-2 ${classroomTab === "groups" ? 'bg-[#0B3C5D] text-white font-bold shadow-sm' : 'text-slate-600 font-medium hover:bg-slate-50'}`}
                        >
                            <Users size={15} /> <span>Study Groups</span>
                        </button>
                        <button 
                            onClick={() => { setClassroomTab("boardroom"); setIsStreaming(false); setIsFullScreen(false); }}
                            className={`w-full flex items-center justify-between text-left text-xs p-2.5 rounded-xl transition-all ${classroomTab === "boardroom" ? 'bg-[#0B3C5D] text-white font-bold shadow-sm' : 'text-slate-600 font-medium hover:bg-slate-50'}`}
                        >
                            <span className="flex items-center gap-2"><Settings size={15} /> Faculty Board Room</span>
                            <span className="text-slate-400 font-mono text-[11px]">0</span>
                        </button>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm space-y-3">
                        <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold text-[#001A41] uppercase tracking-wider">Active Workspace</h4>
                            {isStreaming && <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>}
                        </div>
                        <p className="text-xs text-slate-500 font-light leading-relaxed">
                            {isStreaming ? "Currently connected into Computational Linguistics live session." : "Select an option from the navigation sidebar above to get started."}
                        </p>
                        {isStreaming && (
                            <button onClick={() => {setIsStreaming(false); setIsFullScreen(false);}} className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-2 rounded-xl transition-colors">
                                Close Media Stream Player
                            </button>
                        )}
                    </div>
                </aside>

                {/* CENTRAL REGION SCREEN SCHEDULER SWITCH MANAGER */}
                <main className="lg:col-span-9 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    
                    {isStreaming ? (
                        <>
                            {/* THEATER VIDEO STREAM FEED */}
                            <section className={isFullScreen ? "fixed inset-0 z-[200] bg-slate-900 flex flex-col p-4 animate-fadeIn" : "lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-4 shadow-sm relative flex flex-col justify-between min-h-[550px] animate-fadeIn"}>
                                
                                <div className={`flex items-center justify-between pb-3 ${isFullScreen ? 'border-b border-slate-800 text-white' : 'border-b border-slate-100'}`}>
                                    <div>
                                        <h1 className={`text-base font-bold leading-tight ${isFullScreen ? 'text-white' : 'text-[#001A41]'}`}>Computational Linguistics & Python</h1>
                                        <p className={`text-xs font-medium ${isFullScreen ? 'text-slate-400' : 'text-slate-500'}`}>Prof. Dr. Nabil · Faculty of Arts</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="bg-rose-500 text-white text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm">
                                            <Radio size={10} className="animate-pulse" /> <span>Live Now</span>
                                        </span>
                                        <button 
                                            onClick={() => setIsFullScreen(!isFullScreen)}
                                            className={`p-1.5 rounded-lg transition-colors ${isFullScreen ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'}`}
                                            title="Toggle Full Screen"
                                        >
                                            {isFullScreen ? <Minimize size={16} /> : <Maximize size={16} />}
                                        </button>
                                        {isFullScreen && (
                                            <button onClick={() => { setIsFullScreen(false); setIsStreaming(false); }} className="p-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white transition-colors">
                                                <X size={16} />
                                            </button>
                                        )}
                                    </div>
                                </div>

                                <div className={`flex-1 my-4 rounded-2xl overflow-hidden relative group shadow-inner flex items-center justify-center ${isFullScreen ? 'bg-black min-h-[70vh]' : 'bg-slate-900 border border-slate-950 min-h-[360px]'}`}>
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
                                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white border border-white/10 rounded-xl p-3 text-left">
                                        <span className="text-[10px] font-bold text-[#D4AF37] block tracking-wide">Slide 14 of 42</span>
                                        <span className="text-xs font-medium block text-slate-200">Syntax Trees in Python</span>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-rose-600 text-white text-[10px] font-mono font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-rose-500">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span> <span>REC 01:24:15</span>
                                    </div>
                                    <div className="relative text-center space-y-2 z-10 text-white">
                                        <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto shadow-xl backdrop-blur-sm"><Video size={28} className="text-[#D4AF37]" /></div>
                                        <p className="text-xs font-medium tracking-wide text-slate-300 drop-shadow">Live Meeting Active</p>
                                    </div>
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 flex items-center gap-3 shadow-2xl">
                                        <button 
                                            onClick={() => setMicEnabled(!micEnabled)}
                                            className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${micEnabled ? 'bg-white/20 text-white' : 'bg-rose-500/20 text-rose-500 hover:bg-rose-500/40'}`}
                                        >
                                            {micEnabled ? <Mic size={14} /> : <MicOff size={14} />}
                                        </button>
                                        <button 
                                            onClick={() => setCamEnabled(!camEnabled)}
                                            className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${camEnabled ? 'bg-white/20 text-white' : 'bg-rose-500/20 text-rose-500 hover:bg-rose-500/40'}`}
                                        >
                                            {camEnabled ? <Camera size={14} /> : <VideoOff size={14} />}
                                        </button>
                                        <button className="w-8 h-8 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"><Monitor size={14} /></button>
                                        <div className="h-4 w-[1px] bg-white/20 mx-0.5"></div>
                                        <button onClick={() => { setIsStreaming(false); setIsFullScreen(false); }} className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs px-3 py-1.5 rounded-xl transition-colors shadow-sm">Leave</button>
                                    </div>
                                </div>

                                {!isFullScreen && (
                                    <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 font-medium pt-1 border-t border-slate-100">
                                        <p>Faculty of Arts · Applied Languages</p>
                                        <p className="font-mono text-[#0B3C5D]">SSO Pass-Through Session Active</p>
                                    </div>
                                )}
                            </section>

                            {/* CHAT CONTAINER BAR MODULE */}
                            {!isFullScreen && (
                                <aside className="lg:col-span-4 bg-white border border-slate-200 rounded-3xl p-4 flex flex-col justify-between shadow-sm h-full min-h-[550px] animate-fadeIn">
                                    <div className="flex flex-col h-full justify-between flex-1 overflow-hidden">
                                        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3 flex-shrink-0">
                                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                                                <MessageSquare size={14} className="text-[#0B3C5D]" /> <span>Live Q&A Chat</span>
                                            </h3>
                                            <span className="bg-[#0B3C5D]/10 text-[#0B3C5D] text-[10px] font-extrabold px-2 py-0.5 rounded-full font-mono">{chatMessages.length}</span>
                                        </div>
                                        <div className="flex-1 overflow-y-auto space-y-3 pr-1 text-xs max-h-[420px]">
                                            {chatMessages.map((msg, idx) => (
                                                <div key={idx} className={`space-y-1 animate-fadeIn ${msg.name.includes("You") ? "text-right" : "text-left"}`}>
                                                    <div className="flex items-center gap-1.5 justify-between px-1">
                                                        <span className={`font-bold ${msg.isProf ? 'text-[#bda032]' : 'text-slate-700'}`}>{msg.name} {msg.isProf && "👑"}</span>
                                                        <span className="text-[9px] text-slate-400 font-mono">{msg.time}</span>
                                                    </div>
                                                    <div className={`p-3 rounded-2xl leading-relaxed text-slate-700 ${msg.isProf ? 'bg-amber-50/70 border border-amber-200/40 font-medium' : msg.name.includes("You") ? 'bg-[#0B3C5D]/5 border border-[#0B3C5D]/10 text-left' : 'bg-slate-50 border border-slate-100'}`}>{msg.text}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <form onSubmit={handleSendChat} className="border-t border-slate-100 pt-4 mt-4 flex items-center gap-2 flex-shrink-0">
                                        <input type="text" value={newMsg} onChange={(e) => setNewMsg(e.target.value)} placeholder="Ask a question..." className="flex-1 px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 outline-none text-xs text-slate-800 focus:border-[#0B3C5D]" />
                                        <button type="submit" className="w-9 h-9 bg-[#0B3C5D] hover:bg-[#D4AF37] text-white hover:text-[#001A41] rounded-xl flex items-center justify-center shadow-sm"><Send size={14} /></button>
                                    </form>
                                </aside>
                            )}
                        </>
                    ) : (
                        /* STATIC SUB-TAB INTERFACE ROUTER SWITCH SHEETS */
                        <div className="lg:col-span-12 w-full animate-fadeIn">
                            
                            {/* VIEW ROUTER 1: Schedule Tab Viewport */}
                            {classroomTab === "schedule" && (
                                <div className="space-y-4">
                                    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
                                        <div className="border-b border-slate-100 pb-3">
                                            <h2 className="text-xl font-serif font-bold text-[#001A41]">University Lecture Schedule</h2>
                                            <p className="text-xs text-slate-400 font-medium">Select an active lecture row panel module to launch the live meeting hub.</p>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {/* LIVE LECTURE */}
                                            <div className="border border-slate-200 rounded-2xl p-5 bg-gradient-to-br from-white to-slate-50/50 space-y-4 relative overflow-hidden">
                                                <div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <h3 className="text-base font-bold text-[#001A41]">Computational Linguistics & Python</h3>
                                                        <p className="text-xs text-slate-400 font-medium">Prof. Dr. Nabil · Faculty of Arts</p>
                                                    </div>
                                                    <span className="bg-rose-100 text-rose-700 font-mono text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider animate-pulse border border-rose-200">Live Now</span>
                                                </div>
                                                <p className="text-xs text-slate-600 font-light">Natural Language Processing techniques, syntax trees, and semantics in Python. Interactive code terminal synced live.</p>
                                                <button onClick={() => setShowJoinModal(true)} className="w-full bg-[#0B3C5D] hover:bg-[#D4AF37] text-white hover:text-[#001A41] font-bold text-xs py-3 rounded-xl transition-all shadow-md">
                                                    Join meeting
                                                </button>
                                            </div>

                                            {/* ENDED LECTURE */}
                                            <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50 opacity-80 space-y-4 relative">
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <h3 className="text-base font-bold text-slate-700">Digital Media Production — Studio</h3>
                                                        <p className="text-xs text-slate-400 font-medium">Dr. Amina · Info-Com English</p>
                                                    </div>
                                                    <span className="bg-slate-200 text-slate-600 font-mono text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-slate-300">Ended</span>
                                                </div>
                                                <p className="text-xs text-slate-500 font-light">Audio-visual editing workflows and digital broadcasting fundamentals. Practical editing lab closed.</p>
                                                <button disabled className="w-full bg-slate-200 text-slate-400 font-bold text-xs py-3 rounded-xl cursor-not-allowed">
                                                    Session Concluded
                                                </button>
                                            </div>

                                            {/* SCHEDULED LECTURE */}
                                            <div className="border border-slate-200 rounded-2xl p-5 bg-white space-y-4 relative">
                                                <div className="absolute top-0 left-0 w-1 h-full bg-[#D4AF37]"></div>
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <h3 className="text-base font-bold text-[#001A41]">Syntax & Semantics Seminar</h3>
                                                        <p className="text-xs text-slate-400 font-medium">Dr. Youssef · Applied Languages</p>
                                                    </div>
                                                    <span className="bg-amber-50 text-amber-700 font-mono text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-amber-200">11:00 AM</span>
                                                </div>
                                                <p className="text-xs text-slate-600 font-light">Deep dive into Chomskyan syntax and semantic structures. Reading material required before entry.</p>
                                                <button onClick={() => alert("Reminder set for 11:00 AM EEST.")} className="w-full bg-slate-100 hover:bg-slate-200 text-[#001A41] font-bold text-xs py-3 rounded-xl transition-all">
                                                    Set Reminder
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* VIEW ROUTER 2: Pending Assignments */}
                            {classroomTab === "assignments" && (
                                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-6">
                                    <div className="border-b border-slate-100 pb-3">
                                        <h2 className="text-xl font-serif font-bold text-[#001A41]">Pending Assignments</h2>
                                        <p className="text-xs text-slate-400 font-medium">Track your upcoming semester coursework checkpoints and documentation deadlines.</p>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        <div className="border border-slate-200 rounded-2xl p-5 flex items-center justify-between hover:border-slate-300 transition-colors bg-white shadow-sm">
                                            <div className="space-y-1.5">
                                                <div className="flex items-center gap-2">
                                                    <h3 className="text-sm font-bold text-[#001A41]">Python NLP Script — Part 2</h3>
                                                    <span className="bg-amber-100 text-amber-800 text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider">High</span>
                                                </div>
                                                <p className="text-xs text-slate-400 font-medium">Computational Linguistics · <span className="font-mono text-slate-500 font-semibold">Due: march 14, 2026</span></p>
                                            </div>
                                            <button onClick={() => alert("Launching secure document terminal upload portal...")} className="text-xs font-bold text-[#0B3C5D] hover:text-[#D4AF37] transition-colors flex items-center gap-0.5">
                                                <span>Submit Now</span> <ChevronRight size={14} />
                                            </button>
                                        </div>

                                        <div className="border border-slate-200 rounded-2xl p-5 flex items-center justify-between hover:border-slate-300 transition-colors bg-white shadow-sm">
                                            <div className="space-y-1.5">
                                                <div className="flex items-center gap-2">
                                                    <h3 className="text-sm font-bold text-[#001A41]">Digital Media Project File</h3>
                                                    <span className="bg-rose-100 text-rose-700 text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider">Urgent</span>
                                                </div>
                                                <p className="text-xs text-slate-400 font-medium">Media Production · <span className="font-mono text-slate-500 font-semibold">Due: march 12, 2026</span></p>
                                            </div>
                                            <button onClick={() => alert("Launching secure document terminal upload portal...")} className="text-xs font-bold text-[#0B3C5D] hover:text-[#D4AF37] transition-colors flex items-center gap-0.5">
                                                <span>Submit Now</span> <ChevronRight size={14} />
                                            </button>
                                        </div>

                                        <div className="border border-slate-200 rounded-2xl p-5 flex items-center justify-between hover:border-slate-300 transition-colors bg-white shadow-sm">
                                            <div className="space-y-1.5">
                                                <div className="flex items-center gap-2">
                                                    <h3 className="text-sm font-bold text-[#001A41]">Syntax Essay — Generative Grammar</h3>
                                                    <span className="bg-blue-50 text-blue-700 text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider">Medium</span>
                                                </div>
                                                <p className="text-xs text-slate-400 font-medium">Syntax & Semantics · <span className="font-mono text-slate-500 font-semibold">Due: Dec 18, 2026</span></p>
                                            </div>
                                            <button onClick={() => alert("Launching secure document terminal upload portal...")} className="text-xs font-bold text-[#0B3C5D] hover:text-[#D4AF37] transition-colors flex items-center gap-0.5">
                                                <span>Submit Now</span> <ChevronRight size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* VIEW ROUTER 3: Video Vault History */}
                            {classroomTab === "history" && (
                                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-6">
                                    <div className="border-b border-slate-100 pb-3">
                                        <h2 className="text-xl font-serif font-bold text-[#001A41]">Video Vault — Recorded Sessions</h2>
                                        <p className="text-xs text-slate-400 font-medium">Review on-demand archival high-definition recordings of completed curriculum sessions.</p>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="border border-slate-200 hover:border-[#D4AF37]/30 rounded-2xl p-4 flex items-center justify-between transition-all bg-white shadow-sm group cursor-pointer">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-[#0B3C5D] group-hover:text-white flex items-center justify-center text-[#0B3C5D] transition-colors">
                                                    <Play size={14} className="fill-current" />
                                                </div>
                                                <div>
                                                    <h3 className="text-sm font-bold text-[#001A41] group-hover:text-[#0B3C5D] transition-colors">Introduction to NLTK Libraries</h3>
                                                    <p className="text-xs text-slate-400 font-medium">Computational Linguistics · <span className="font-mono text-slate-400">Dec 5, 2026</span></p>
                                                </div>
                                            </div>
                                            <span className="font-mono text-xs font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg">1:28:42</span>
                                        </div>

                                        <div className="border border-slate-200 hover:border-[#D4AF37]/30 rounded-2xl p-4 flex items-center justify-between transition-all bg-white shadow-sm group cursor-pointer">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-[#0B3C5D] group-hover:text-white flex items-center justify-center text-[#0B3C5D] transition-colors">
                                                    <Play size={14} className="fill-current" />
                                                </div>
                                                <div>
                                                    <h3 className="text-sm font-bold text-slate-700 group-hover:text-[#0B3C5D] transition-colors">Video Editing Basics (Premiere)</h3>
                                                    <p className="text-xs text-slate-400 font-medium">Digital Media · <span className="font-mono text-slate-400">Dec 4, 2026</span></p>
                                                </div>
                                            </div>
                                            <span className="font-mono text-xs font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg">1:12:15</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* VIEW ROUTER 4: Study Groups */}
                            {classroomTab === "groups" && (
                                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-6">
                                    <div className="border-b border-slate-100 pb-3">
                                        <h2 className="text-xl font-serif font-bold text-[#001A41]">Study Groups — Peer Lounge</h2>
                                        <p className="text-xs text-slate-400 font-medium">Connect directly into dynamic collaborative research panels and exam prep rooms organized by peers.</p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="border border-slate-200 rounded-2xl p-5 flex items-center justify-between bg-white shadow-sm">
                                            <div className="space-y-1">
                                                <h3 className="text-sm font-bold text-[#001A41]">NLP Python Study Circle</h3>
                                                <p className="text-xs text-slate-400 font-medium">Linguistics · <span className="font-semibold text-[#0B3C5D]">12 members</span></p>
                                                <p className="text-[11px] font-medium text-amber-600 bg-amber-50 inline-block px-2 py-0.5 rounded border border-amber-100">Next session: Today 4:00 PM</p>
                                            </div>
                                            <button onClick={() => alert("Joining AU meeting channel...")} className="bg-[#0B3C5D] hover:bg-[#D4AF37] text-white hover:text-[#001A41] font-bold text-xs py-2 px-5 rounded-xl shadow-sm transition-colors">
                                                Join Group
                                            </button>
                                        </div>

                                        <div className="border border-slate-200 rounded-2xl p-5 flex items-center justify-between bg-white shadow-sm">
                                            <div className="space-y-1">
                                                <h3 className="text-sm font-bold text-[#001A41]">Phonetics Exam Revision</h3>
                                                <p className="text-xs text-slate-400 font-medium">Applied Languages · <span className="font-semibold text-[#0B3C5D]">8 members</span></p>
                                                <p className="text-[11px] font-medium text-slate-500 bg-slate-50 inline-block px-2 py-0.5 rounded border border-slate-100">Next session: Tomorrow 3:00 PM</p>
                                            </div>
                                            <button onClick={() => alert("Joining AU meeting channel...")} className="bg-[#0B3C5D] hover:bg-[#D4AF37] text-white hover:text-[#001A41] font-bold text-xs py-2 px-5 rounded-xl shadow-sm transition-colors">
                                                Join Group
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* VIEW ROUTER 5: Faculty Board Room Security Lock */}
                            {classroomTab === "boardroom" && (
                                <div className="bg-white border border-slate-200 rounded-3xl p-12 shadow-sm max-w-xl mx-auto text-center space-y-6 relative overflow-hidden my-6">
                                    <div className="absolute top-0 left-0 w-full h-2 bg-rose-500"></div>
                                    <div className="w-16 h-16 rounded-full bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center mx-auto shadow-sm">
                                        <AlertTriangle size={28} />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-serif font-bold text-[#001A41]">Faculty Board Room</h2>
                                        <p className="text-sm text-slate-500 leading-relaxed max-w-md mx-auto font-light">
                                            This area requires <span className="font-bold text-slate-800">Professor-level security clearance</span>. Access requires verified Faculty ID verification and two-factor cryptographic token authentication.
                                        </p>
                                    </div>
                                    <button onClick={() => alert("Faculty exception request forwarded to the Dean of Students registry.")} className="bg-[#D4AF37] hover:bg-[#bda032] text-[#001A41] font-bold text-xs py-3.5 px-8 rounded-full shadow-md shadow-[#D4AF37]/10 tracking-wide transition-all transform hover:scale-105 active:scale-95">
                                        Request Faculty Access
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}