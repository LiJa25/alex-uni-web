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

    // Form Data States for Supabase
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    
    // Status States
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [successMsg, setSuccessMsg] = useState<string | null>(null);

    if (!isOpen) return null;

    //  Handles both Sign Up and Log In
    const handleAuthSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg(null);
        setSuccessMsg(null);

        try {
            if (isLoginMode) {
                // --- LOG IN ---
                const { data, error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                });

                if (error) throw error;
                
                setSuccessMsg("Logged in successfully! Redirecting...");
                setTimeout(() => onClose(), 1500); 

            } else {
                // --- REGISTER / APPLY ---
                const { data, error } = await supabase.auth.signUp({
                    email,
                    password,
                    options: {
                        data: {
                            full_name: fullName,
                            role: userType
                        }
                    }
                });

                if (error) throw error;
                setSuccessMsg("Application received! Please check your email to verify your account.");
            }
        } catch (error: any) {
            setErrorMsg(error.message || "An error occurred during authentication.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        // The overlay now has py-12 (padding-y) to force space on top and bottom
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-blue-950/60 dark:bg-black/80 backdrop-blur-sm p-4 py-12 transition-all duration-300">
            
    
            <div className="relative w-full max-w-md max-h-full flex flex-col bg-gray-50 dark:bg-gray-900 rounded-3xl shadow-2xl overflow-y-auto transition-colors duration-500 animate-in fade-in zoom-in-95 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-300 bg-gray-200/50 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-all z-10"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>

                {/* Content Wrapper (flex-shrink-0 ensures it doesn't squish) */}
                <div className="px-8 pt-10 pb-8 flex flex-col items-center flex-shrink-0">
                    
                    {/* Your newly updated Top Logo Circle! */}
                    <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-sm mb-6 border border-harvest-gold-200 dark:border-harvest-gold-500/30 overflow-hidden p-3 bg-white dark:bg-gray-800">
                        <img 
                            src="/logos/logo2.png" 
                            alt="Alexandria University Logo" 
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <h2 className="text-2xl font-kameron font-bold text-blue-900 dark:text-white mb-6 text-center">
                        {isLoginMode ? "Sign in to your account" : "Apply for Admission"}
                    </h2>

                    <div className="w-full flex bg-gray-200/80 dark:bg-gray-800 p-1 rounded-xl mb-6 shadow-inner">
                        <button 
                            onClick={() => setUserType("student")}
                            className={`flex-1 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all duration-300 ${
                                userType === "student" 
                                ? "bg-blue-600 dark:bg-blue-700 text-white shadow-md" 
                                : "text-gray-500 dark:text-gray-400 hover:text-blue-900 dark:hover:text-white"
                            }`}
                        >
                            STUDENT
                        </button>
                        <button 
                            onClick={() => setUserType("staff")}
                            className={`flex-1 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all duration-300 ${
                                userType === "staff" 
                                ? "bg-blue-600 dark:bg-blue-700 text-white shadow-md" 
                                : "text-gray-500 dark:text-gray-400 hover:text-blue-900 dark:hover:text-white"
                            }`}
                        >
                            STAFF
                        </button>
                    </div>

                    {/* Show Errors or Success Messages */}
                    {errorMsg && (
                        <div className="w-full bg-red-100 text-red-700 p-3 rounded-lg text-sm mb-4 border border-red-200 text-center">
                            {errorMsg}
                        </div>
                    )}
                    {successMsg && (
                        <div className="w-full bg-green-100 text-green-800 p-3 rounded-lg text-sm mb-4 border border-green-200 text-center font-medium">
                            {successMsg}
                        </div>
                    )}

                    <form className="w-full space-y-4" onSubmit={handleAuthSubmit}>
                        
                        {!isLoginMode && (
                            <div>
                                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Full Name</label>
                                <input 
                                    type="text" 
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    required={!isLoginMode}
                                    placeholder="John Doe"
                                    className="w-full bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 mt-1.5 text-blue-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                                />
                            </div>
                        )}

                        <div>
                            <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                                {userType === "student" ? "University Email" : "Staff Email"}
                            </label>
                            <input 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder={userType === "student" ? "student@alexu.edu.eg" : "staff@alexu.edu.eg"}
                                className="w-full bg-white dark:bg-gray-950 border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 mt-1.5 text-blue-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            />
                        </div>

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

                        {isLoginMode && (
                            <div className="flex items-center justify-between pt-1">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 bg-white dark:bg-gray-900 dark:border-gray-600 cursor-pointer" />
                                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Remember me</span>
                                </label>
                                <a href="#" className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                                    Forgot Password?
                                </a>
                            </div>
                        )}

                        <button 
                            disabled={isLoading}
                            className={`w-full text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg mt-4 ${
                                isLoading 
                                ? "bg-gray-400 cursor-not-allowed" 
                                : "bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 shadow-blue-600/30 dark:shadow-none"
                            }`}
                        >
                            {isLoading ? "PROCESSING..." : (isLoginMode ? "LOGIN" : "SUBMIT APPLICATION")}
                        </button>
                    </form>

                    <a href="#" className="flex items-center gap-2 text-sm font-medium text-blue-500 dark:text-blue-400 hover:underline mt-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                        IT Support
                    </a>
                </div>

                {/* Bottom Footer Area */}
                <div className="bg-gray-100 dark:bg-gray-800/50 py-6 px-8 text-center border-t border-gray-200 dark:border-gray-800 transition-colors duration-500 mt-auto flex-shrink-0">
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {isLoginMode ? "Don't have an account? " : "Already have an account? "}
                        <button
                            type="button"
                            onClick={() => {
                                setIsLoginMode(!isLoginMode);
                                setErrorMsg(null);
                                setSuccessMsg(null);
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

            </div>

            {/* Very Bottom floating text */}
            <div className="absolute bottom-6 text-center text-xs font-medium text-gray-300 dark:text-gray-500">
                By continuing, you agree to our <a href="#" className="text-harvest-gold-400 hover:underline">Terms of Service</a> and <a href="#" className="text-harvest-gold-400 hover:underline">Privacy Policy</a>
            </div>
        </div>
    );
}