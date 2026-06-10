"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [userType, setUserType] = useState<"student" | "staff">("student");
    const [showPassword, setShowPassword] = useState(false);

    // Form Data States
    const [email, setEmail] = useState(""); // Acts as University Email (Login) or Contact Email (Sign Up)
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [universityId, setUniversityId] = useState(""); // New state for Student/Staff ID

    // Status States
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false); // Controls the custom success window

    if (!isOpen) return null;

    const handleAuthSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg(null);

        try {
            if (isLoginMode) {
                // --- LOG IN ---
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });

                if (error) throw error;

                // Close modal immediately on successful login
                onClose();

            } else {
                // --- REGISTER / APPLY (Account Request) ---
                // Since this is a request, we insert it into a custom Supabase table 
                // instead of creating an active auth user right away.
                const { error } = await supabase.from('account_requests').insert([
                    {
                        full_name: fullName,
                        university_id: universityId,
                        contact_email: email,
                        role: userType,
                        status: 'pending'
                    }
                ]);

                if (error) throw error;

                // Show the specific popup window you requested
                setShowSuccessPopup(true);
            }
        } catch (error: any) {
            setErrorMsg(error.message || "An error occurred during authentication.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-blue-950/60 dark:bg-black/80 backdrop-blur-sm p-4 py-12 transition-all duration-300">

            <div className="relative w-full max-w-md max-h-full flex flex-col bg-gray-50 dark:bg-gray-900 rounded-3xl shadow-2xl overflow-y-auto transition-colors duration-500 animate-in fade-in zoom-in-95 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 bg-gray-200/50 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-all z-10"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                {/* --- SUCCESS POPUP WINDOW --- */}
                {showSuccessPopup ? (
                    <div className="px-8 pt-16 pb-12 flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-4">Request Received</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                            We will contact you shortly after with your email and password, check your email regularly.
                        </p>
                        <button
                            onClick={() => {
                                setShowSuccessPopup(false);
                                setIsLoginMode(true);
                            }}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg shadow-blue-600/30"
                        >
                            Return to Login
                        </button>
                    </div>
                ) : (
                    /* --- MAIN FORM CONTENT --- */
                    <>
                        <div className="px-8 pt-10 pb-8 flex flex-col items-center flex-shrink-0">

                            <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-sm mb-6 border border-harvest-gold-200 dark:border-harvest-gold-500/30 overflow-hidden p-3 bg-white dark:bg-gray-800">
                                <img
                                    src="/logos/logo2.png"
                                    alt="Alexandria University Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <h2 className="text-2xl font-kameron font-bold text-blue-900 dark:text-white mb-6 text-center">
                                {isLoginMode ? "Sign in to your account" : "Apply for Portal Access"}
                            </h2>

                            <div className="w-full flex bg-gray-200/80 dark:bg-gray-800 p-1 rounded-xl mb-6 shadow-inner">
                                <button
                                    onClick={() => setUserType("student")}
                                    className={`flex-1 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all duration-300 ${userType === "student"
                                            ? "bg-blue-600 dark:bg-blue-700 text-white shadow-md"
                                            : "text-gray-500 dark:text-gray-400 hover:text-blue-900 dark:hover:text-white"
                                        }`}
                                >
                                    STUDENT
                                </button>
                                <button
                                    onClick={() => setUserType("staff")}
                                    className={`flex-1 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all duration-300 ${userType === "staff"
                                            ? "bg-blue-600 dark:bg-blue-700 text-white shadow-md"
                                            : "text-gray-500 dark:text-gray-400 hover:text-blue-900 dark:hover:text-white"
                                        }`}
                                >
                                    STAFF
                                </button>
                            </div>

                            {errorMsg && (
                                <div className="w-full bg-red-100 text-red-700 p-3 rounded-lg text-sm mb-4 border border-red-200 text-center">
                                    {errorMsg}
                                </div>
                            )}

                            <form className="w-full space-y-4" onSubmit={handleAuthSubmit}>

                                {/* SIGN UP FIELDS ONLY */}
                                {!isLoginMode && (
                                    <>
                                        <div>
                                            <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                value={fullName}
                                                onChange={(e) => setFullName(e.target.value)}
                                                required
                                                placeholder="John Doe"
                                                className="w-full bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 mt-1.5 text-blue-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                                                {userType === "student" ? "Student ID Number" : "Employee ID Number"}
                                            </label>
                                            <input
                                                type="text"
                                                value={universityId}
                                                onChange={(e) => setUniversityId(e.target.value)}
                                                required
                                                placeholder={userType === "student" ? "e.g. 202612345" : "e.g. EMP-9876"}
                                                className="w-full bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 mt-1.5 text-blue-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                            />
                                        </div>
                                    </>
                                )}

                                {/* DYNAMIC EMAIL FIELD */}
                                <div>
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                                        {isLoginMode ? "University Email" : "Personal Contact Email"}
                                    </label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        placeholder={isLoginMode ? (userType === "student" ? "student@alexu.edu.eg" : "staff@alexu.edu.eg") : "yourname@gmail.com"}
                                        className="w-full bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 mt-1.5 text-blue-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                    />
                                </div>

                                {/* LOGIN EXCLUSIVE FIELD */}
                                {isLoginMode && (
                                    <div>
                                        <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Password</label>
                                        <div className="relative mt-1.5">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                required
                                                placeholder="Enter your password"
                                                className="w-full bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 text-blue-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition-all pr-12"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                            >
                                                {showPassword ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /><line x1="3" y1="3" x2="21" y2="21" /></svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {isLoginMode && (
                                    <div className="flex items-center justify-between pt-1">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 bg-white dark:bg-gray-900 dark:border-gray-600 cursor-pointer" />
                                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Remember me</span>
                                        </label>
                                        <a href="mailto:it-support@alexu.edu.eg" className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                                            Facing a problem? Contact IT
                                        </a>
                                    </div>
                                )}

                                <button
                                    disabled={isLoading}
                                    className={`w-full text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg mt-4 ${isLoading
                                            ? "bg-gray-400 cursor-not-allowed"
                                            : "bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 shadow-blue-600/30 dark:shadow-none"
                                        }`}
                                >
                                    {isLoading ? "PROCESSING..." : (isLoginMode ? "LOGIN" : "SUBMIT APPLICATION")}
                                </button>
                            </form>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800/50 py-6 px-8 text-center border-t border-gray-200 dark:border-gray-800 transition-colors duration-500 mt-auto flex-shrink-0">
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                {isLoginMode ? "Don't have an account? " : "Already have an account? "}
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsLoginMode(!isLoginMode);
                                        setErrorMsg(null);
                                        setFullName("");
                                        setUniversityId("");
                                    }}
                                    className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
                                >
                                    {isLoginMode ? "Sign up / Apply now" : "Sign in instead"}
                                </button>
                            </p>
                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                                {isLoginMode
                                    ? "New students and staff can register for portal access"
                                    : "Applications are currently open for the Fall semester."
                                }
                            </p>
                        </div>
                    </>
                )}
            </div> {/* <-- THIS IS THE END OF THE MODAL CARD */}

            {/* VERY BOTTOM FLOATING TEXT (Now properly outside the modal card!) */}
            {!showSuccessPopup && (
                <div className="absolute bottom-6 w-full text-center text-xs font-medium text-gray-300 dark:text-gray-500 z-10">
                    By continuing, you agree to our <a href="#" className="text-harvest-gold-400 hover:underline">Terms of Service</a> and <a href="#" className="text-harvest-gold-400 hover:underline">Privacy Policy</a>
                </div>
            )}
        </div>

    );
}