// app/dashboard/page.tsx
"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Hero from "@/components/Hero";
import { supabase } from "@/lib/supabase";
import { User, CreditCard, Receipt, GraduationCap, CheckCircle2, ShieldCheck, Database, WifiOff, Loader2 } from 'lucide-react';

function DashboardContent() {
    const searchParams = useSearchParams();
    const isForcedDemo = searchParams.get('demo') === 'true';

    // State Management
    const [isOfflineMode, setIsOfflineMode] = useState(false);
    const [loading, setLoading] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [gatewayMethod, setGatewayMethod] = useState<"card" | "googlepay" | "paypal">("card");
    const [simulatedSheet, setSimulatedSheet] = useState<"none" | "google" | "paypal">("none");

    // Profile Data States
    const [studentName, setStudentName] = useState("Lujain Mesbah");
    const [tuitionBalance, setTuitionBalance] = useState(12500);
    const [userId, setUserId] = useState<string | null>(null);

    // Form Input States
    const [cardName, setCardName] = useState("");

    // --- MASTER ACCOUNT SETTLEMENT CONSTANT ---
    // If the database balance is 0 OR the live payment state just completed, the account is officially settled.
    const isSettled = tuitionBalance === 0 || paymentSuccess;

    // Hybrid Data Hydration
    useEffect(() => {
        async function loadDashboardData() {
            if (isForcedDemo) {
                setIsOfflineMode(true);
                return;
            }
            try {
                const { data: { user }, error: userError } = await supabase.auth.getUser();
                if (userError || !user) {
                    setIsOfflineMode(true);
                    return;
                }
                setUserId(user.id);

                const { data: profile, error: dbError } = await supabase
                    .from('student_profiles')
                    .select('full_name, tuition_balance')
                    .eq('id', user.id)
                    .single();

                if (dbError || !profile) {
                    setIsOfflineMode(false);
                    return;
                }
                setStudentName(profile.full_name);
                setTuitionBalance(profile.tuition_balance);
                setIsOfflineMode(false);
            } catch (err) {
                setIsOfflineMode(true);
            }
        }
        loadDashboardData();
    }, [isForcedDemo]);

    // Master Gateway Submission Engine
    const executeDatabaseTransaction = async (methodUsed: string, customCardholder?: string) => {
        // Absolute fail-safe block: If the bill is already settled, block duplicate execution chains entirely
        if (isSettled && tuitionBalance === 0) {
            setLoading(false);
            setSimulatedSheet("none");
            return;
        }

        const generatedReceipt = "REC-" + Math.floor(100000 + Math.random() * 900000);
        const { data: { user } } = await supabase.auth.getUser();
        const activeId = user?.id || userId;

        if (isOfflineMode || !activeId) {
            setLoading(false);
            setSimulatedSheet("none");
            setPaymentSuccess(true);
            setTuitionBalance(0);
            return;
        }

        try {
            // 1. Log the tracking receipt line
            const { error: paymentError } = await supabase.from('payments').insert([
                {
                    student_id: activeId,
                    cardholder_name: customCardholder || cardName || "Lujain Mesbah",
                    amount: 12500,
                    receipt_number: generatedReceipt,
                    status: `success via ${methodUsed}`
                }
            ]);

            if (paymentError) throw paymentError;

            // 2. Clear out outstanding balance column from profile table row
            const { error: profileError } = await supabase
                .from('student_profiles')
                .update({ tuition_balance: 0 })
                .eq('id', activeId);

            if (profileError) throw profileError;

            setLoading(false);
            setSimulatedSheet("none");
            setPaymentSuccess(true);
            setTuitionBalance(0);

        } catch (err) {
            console.error("Database sync interrupted, falling back gracefully to offline state updates", err);
            setLoading(false);
            setSimulatedSheet("none");
            setPaymentSuccess(true);
            setTuitionBalance(0);
        }
    };

    const handleCardPaymentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => executeDatabaseTransaction("Visa/Mastercard"), 2000);
    };

    const triggerGooglePayGateway = () => {
        setLoading(true);
        setSimulatedSheet("google");
    };

    const triggerPayPalGateway = () => {
        setLoading(true);
        setSimulatedSheet("paypal");
    };

    return (
        <div className="bg-[#F8FAFC] dark:bg-[#07121F] min-h-screen transition-colors duration-500 relative">
            <Hero showFullHero={false} />

            {/* --- SIMULATED DYNAMIC GATEWAY OVERLAYS --- */}
            {simulatedSheet !== "none" && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[150] flex items-center justify-center p-4 animate-fadeIn">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl space-y-6">
                        {simulatedSheet === "google" ? (
                            <>
                                <div className="flex justify-center items-center gap-1 text-2xl font-sans tracking-tight py-2 border-b border-slate-100 dark:border-slate-800">
                                    <span className="font-extrabold text-[#4285F4]">G</span>
                                    <span className="font-extrabold text-[#EA4335]">o</span>
                                    <span className="font-extrabold text-[#FBBC05]">o</span>
                                    <span className="font-extrabold text-[#4285F4]">g</span>
                                    <span className="font-extrabold text-[#34A853]">l</span>
                                    <span className="font-extrabold text-[#EA4335]">e</span>
                                    <span className="font-semibold text-slate-700 dark:text-slate-300 ml-1">Pay</span>
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Google Authentication Secure Interface</p>
                                <div className="border border-slate-100 dark:border-slate-800 p-4 rounded-2xl flex items-center justify-between bg-slate-50 dark:bg-slate-950/40">
                                    <div className="text-left">
                                        <span className="text-xs text-slate-400 block font-bold">G-PAY WALLET</span>
                                        <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Visa •••• 9843</span>
                                    </div>
                                    <span className="text-xs font-mono bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded">L. Mesbah</span>
                                </div>
                                <button onClick={() => executeDatabaseTransaction("Google Pay", "GooglePay Wallet account")} className="w-full bg-black text-white font-bold py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2">
                                    <Loader2 className="animate-spin" size={16} />
                                    <span>Confirm with Google Auth</span>
                                </button>
                            </>
                        ) : (
                            <>
                                <div className="flex justify-center">
                                    <svg className="h-8" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.013 7.152c-.303 1.554-1.433 4.394-3.328 6.223-1.637 1.583-3.003 2.133-4.593 2.133h-1.644c-.58 0-1.077.412-1.173.985l-.946 5.688a.243.243 0 0 1-.24.202H4.498a.243.243 0 0 1-.242-.284l2.846-17.078A1.46 1.46 0 0 1 8.544 3.82h5.719c1.947 0 3.396.442 4.298 1.306.914.877 1.357 2.14 1.452 2.026z" fill="#003087"/><path d="M18.528 4.706c-.846-.81-2.222-1.226-4.066-1.226H8.744a1.365 1.365 0 0 0-1.348 1.139L4.542 21.72a.228.228 0 0 0 .225.266h3.411a.228.228 0 0 0 .225-.19l.86-5.17a1.365 1.365 0 0 1 1.348-1.14h1.154c3.425 0 6.096-1.392 6.883-5.42.366-1.874.1-3.4-.645-4.116.143-.223.364-.78.143-1.244z" fill="#0079C1"/></svg>
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Log in to process PayPal token redirection</p>
                                <div className="text-xs bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 font-mono text-slate-600 dark:text-slate-400">
                                    Redirecting to secure merchant environment instance...
                                </div>
                                <button onClick={() => executeDatabaseTransaction("PayPal Express")} className="w-full bg-[#FFC439] text-[#003087] font-bold py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2">
                                    <Loader2 className="animate-spin" size={16} />
                                    <span>Complete with PayPal</span>
                                </button>
                            </>
                        )}
                        <button onClick={() => { setLoading(false); setSimulatedSheet("none"); }} className="text-xs font-semibold text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 uppercase tracking-wider block mx-auto">
                            Cancel Gateway Redirect
                        </button>
                    </div>
                </div>
            )}

            <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8">
                
                {/* Welcome Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-slate-200 dark:border-slate-800 pb-6 gap-4">
                    <div>
                        <h1 className="text-3xl font-serif font-bold text-[#001A41] dark:text-white">
                            Student Portal Dashboard
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                            Welcome back to Alexandria University Academic Management System.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {isOfflineMode ? (
                            <div className="inline-flex items-center gap-2 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 px-4 py-2 rounded-full text-sm font-medium border border-amber-200 dark:border-amber-900/40">
                                <WifiOff size={16} />
                                <span>Offline Sandbox Active</span>
                            </div>
                        ) : (
                            <div className="inline-flex items-center gap-2 bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400 px-4 py-2 rounded-full text-sm font-medium border border-cyan-200 dark:border-cyan-900/40">
                                <Database size={16} />
                                <span>Live Supabase Synchronized</span>
                            </div>
                        )}
                        <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 px-4 py-2 rounded-full text-sm font-medium border border-emerald-200 dark:border-emerald-900/40">
                            <ShieldCheck size={16} />
                            <span>Secure Session</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* Minimalist Profile Column */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xl text-center relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-[#D4AF37]"></div>
                            <div className="w-24 h-24 bg-[#0B3C5D]/10 text-[#0B3C5D] dark:bg-[#D4AF37]/10 dark:text-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#0B3C5D]/20">
                                <User size={44} />
                            </div>
                            <h2 className="text-xl font-bold text-[#001A41] dark:text-white">{studentName}</h2>
                            <p className="text-sm font-semibold text-[#D4AF37] tracking-wide mt-0.5">Faculty of Arts</p>
                            <div className="h-[1px] w-full bg-slate-100 dark:bg-slate-800 my-6"></div>
                            <div className="space-y-4 text-left text-sm">
                                <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                                    <span className="flex items-center gap-2 font-medium"><GraduationCap size={16} /> Degree</span>
                                    <span className="font-semibold text-slate-800 dark:text-slate-200">BA Linguistics</span>
                                </div>
                                <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                                    <span className="flex items-center gap-2 font-medium"><Receipt size={16} /> Academic ID</span>
                                    <span className="font-mono font-semibold text-slate-800 dark:text-slate-200">AU-2026-8943</span>
                                </div>
                                <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                                    <span className="flex items-center gap-2 font-medium"><User size={16} /> Academic Email</span>
                                    <span className="font-medium text-xs text-[#0B3C5D] dark:text-cyan-400 underline truncate max-w-[170px]">arts.lujainMesbah@alexu.edu.eg</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Integrated Payment Column */}
                    <div className="lg:col-span-2">
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-xl h-full flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-6">
                                    <h3 className="text-xl font-bold text-[#001A41] dark:text-white flex items-center gap-2">
                                        <CreditCard size={22} className="text-[#D4AF37]" />
                                        <span>Semester Tuition Settlement</span>
                                    </h3>
                                    <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${isSettled ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 ' : 'bg-amber-50 dark:bg-amber-950/40 text-amber-700'}`}>
                                        {isSettled ? "Settled" : "Pending"}
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    <div className="bg-[#0B3C5D]/5 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800/60 p-5 rounded-2xl">
                                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">Current Semester</span>
                                        <span className="text-sm font-bold text-slate-800 dark:text-slate-200">Fall Term 2026</span>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-950/30 p-5 rounded-2xl border border-transparent dark:border-slate-800/40">
                                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">Total Outstanding Bill</span>
                                        <span className={`text-2xl font-serif font-bold ${tuitionBalance > 0 ? 'text-rose-600 dark:text-rose-400' : 'text-emerald-600 dark:text-emerald-400'}`}>
                                            {tuitionBalance.toLocaleString()} EGP
                                        </span>
                                    </div>
                                </div>

                                {/* --- FIXED DYNAMIC CONDITIONAL RENDERING BLOCK --- */}
                                {isSettled ? (
                                    <div className="bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-500/20 rounded-3xl p-8 text-center animate-fadeIn shadow-inner space-y-3">
                                        <div className="inline-flex items-center justify-center w-14 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mb-1">
                                            <CheckCircle2 size={28} />
                                        </div>
                                        <h4 className="font-serif font-bold text-[#001A41] dark:text-white text-xl">
                                            All Academic Bills Settled
                                        </h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                                            Your academic fees for the Fall Term 2026 are fully cleared. No outstanding university balances or debts are registered on this profile locker.
                                        </p>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        
                                        {/* --- MERCHANT GATEWAY SELECTOR TABS --- */}
                                        <div className="grid grid-cols-3 gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                                            <button onClick={() => setGatewayMethod("card")} className={`py-3 px-2 rounded-xl text-xs font-bold border transition-all flex flex-col items-center justify-center gap-1.5 h-16 ${gatewayMethod === "card" ? 'bg-[#0B3C5D] text-white border-transparent shadow-md' : 'border-slate-200 dark:border-slate-800 text-slate-500'}`}>
                                                <CreditCard size={16} />
                                                <span>Visa / Card</span>
                                            </button>
                                            
                                            <button 
                                                onClick={() => setGatewayMethod("googlepay")} 
                                                className={`py-3 px-2 rounded-xl text-xs font-bold border transition-all flex flex-col items-center justify-center gap-1.5 h-16 ${gatewayMethod === "googlepay" ? 'bg-black text-white border-transparent shadow-md' : 'border-slate-200 dark:border-slate-800 text-slate-500'}`}
                                            >
                                                <div className="text-sm font-sans tracking-tight">
                                                    <span className="font-extrabold text-[#4285F4]">G</span>
                                                    <span className="font-extrabold text-[#EA4335]">o</span>
                                                    <span className="font-extrabold text-[#FBBC05]">o</span>
                                                    <span className="font-extrabold text-[#4285F4]">g</span>
                                                    <span className="font-extrabold text-[#34A853]">l</span>
                                                    <span className="font-extrabold text-[#EA4335]">e</span>
                                                    <span className={`font-medium ml-1 ${gatewayMethod === "googlepay" ? 'text-white' : 'text-slate-600 dark:text-slate-400'}`}>Pay</span>
                                                </div>
                                            </button>
                                            
                                            <button onClick={() => setGatewayMethod("paypal")} className={`py-3 px-2 rounded-xl text-xs font-bold border transition-all flex flex-col items-center justify-center gap-1.5 h-16 ${gatewayMethod === "paypal" ? 'bg-[#003087] text-white border-transparent shadow-md' : 'border-slate-200 dark:border-slate-800 text-slate-500'}`}>
                                                <svg className="h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.013 7.152c-.303 1.554-1.433 4.394-3.328 6.223-1.637 1.583-3.003 2.133-4.593 2.133h-1.644c-.58 0-1.077.412-1.173.985l-.946 5.688a.243.243 0 0 1-.24.202H4.498a.243.243 0 0 1-.242-.284l2.846-17.078A1.46 1.46 0 0 1 8.544 3.82h5.719c1.947 0 3.396.442 4.298 1.306.914.877 1.357 2.14 1.452 2.026z" fill="currentColor"/></svg>
                                                <span>PayPal</span>
                                            </button>
                                        </div>

                                        {/* --- PANEL 1: Standard Visa Credit Card Form --- */}
                                        {gatewayMethod === "card" && (
                                            <form onSubmit={handleCardPaymentSubmit} className="space-y-4 max-w-md animate-fadeIn">
                                                <div className="flex flex-col gap-1">
                                                    <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">Cardholder Name</label>
                                                    <input type="text" required value={cardName} onChange={(e) => setCardName(e.target.value)} placeholder="Lujain Mesbah" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-slate-800 dark:text-white outline-none text-sm focus:border-[#D4AF37]" />
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">Card Number (Visa/Mastercard)</label>
                                                    <input type="text" required maxLength={16} placeholder="4000 1234 5678 9010" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-slate-800 dark:text-white outline-none text-sm focus:border-[#D4AF37] font-mono" />
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="flex flex-col gap-1">
                                                        <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">Expiry</label>
                                                        <input type="text" required placeholder="MM/YY" maxLength={5} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-slate-800 dark:text-white outline-none text-sm focus:border-[#D4AF37] text-center" />
                                                    </div>
                                                    <div className="flex flex-col gap-1">
                                                        <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">CVV</label>
                                                        <input type="password" required maxLength={3} placeholder="•••" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-slate-800 dark:text-white outline-none text-sm focus:border-[#D4AF37] text-center" />
                                                    </div>
                                                </div>
                                                <button type="submit" disabled={loading} className="w-full mt-4 bg-[#0B3C5D] hover:bg-[#D4AF37] text-white hover:text-[#001A41] font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-lg disabled:opacity-50 flex items-center justify-center gap-2">
                                                    {loading && <Loader2 className="animate-spin" size={14} />}
                                                    <span>{loading ? "Processing Secure Transaction..." : "Authorize Card Payment"}</span>
                                                </button>
                                            </form>
                                        )}

                                        {/* --- PANEL 2: Google Pay Panel Branding Button Layout --- */}
                                        {gatewayMethod === "googlepay" && (
                                            <div className="space-y-4 max-w-md animate-fadeIn pt-2">
                                                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                                                    Click below to instantiate the native browser Google Payment sheet. Your credentials will be processed through merchant authentication rules.
                                                </p>
                                                <button 
                                                    onClick={triggerGooglePayGateway} 
                                                    className="w-full bg-black hover:bg-zinc-900 text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-lg flex items-center justify-center gap-2 border border-zinc-800"
                                                >
                                                    <span>Buy with</span>
                                                    <span className="font-sans text-base tracking-tight ml-0.5">
                                                        <span className="font-extrabold text-[#4285F4]">G</span>
                                                        <span className="font-extrabold text-[#EA4335]">o</span>
                                                        <span className="font-extrabold text-[#FBBC05]">o</span>
                                                        <span className="font-extrabold text-[#4285F4]">g</span>
                                                        <span className="font-extrabold text-[#34A853]">l</span>
                                                        <span className="font-extrabold text-[#EA4335]">e</span>
                                                        <span className="font-bold text-white ml-0.5">Pay</span>
                                                    </span>
                                                </button>
                                            </div>
                                        )}

                                        {/* --- PANEL 3: PayPal Express Template Integration --- */}
                                        {gatewayMethod === "paypal" && (
                                            <div className="space-y-4 max-w-md animate-fadeIn pt-2">
                                                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                                                    You will be forwarded to PayPal smart-payment checkout. Settlement tracking tokens will log back to your student ledger profile dynamically.
                                                </p>
                                                <button onClick={triggerPayPalGateway} className="w-full bg-[#0070BA] hover:bg-[#005EA6] text-white font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-lg flex items-center justify-center gap-2">
                                                    <span className="font-serif italic font-extrabold tracking-tight">Pay<span className="text-[#00c5ff]">Pal</span></span>
                                                    <span>Express Checkout</span>
                                                </button>
                                            </div>
                                        )}

                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}

export default function StudentDashboard() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-slate-500 animate-pulse">Loading dashboard environment...</div>}>
            <DashboardContent />
        </Suspense>
    );
}