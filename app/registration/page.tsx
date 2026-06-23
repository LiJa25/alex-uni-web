// app/registration/page.tsx
"use client";

import React, { useState } from 'react';
import Hero from "@/components/Hero";
import { supabase } from "@/lib/supabase";
import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function RegistrationPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
        dialingCode: "+20",
        mobileNumber: "",
        isInternational: "No",
        academicLevel: "",
        facultyOfInterest: "",
        declarationConsent: ""
    });

    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        if (!formData.firstName || !formData.email || !formData.confirmEmail || !formData.academicLevel || !formData.declarationConsent) {
            setError("Please fill in all fields marked with an asterisk (*).");
            setIsLoading(false);
            return;
        }

        if (formData.email !== formData.confirmEmail) {
            setError("Email addresses do not match.");
            setIsLoading(false);
            return;
        }

        try {
            // Live Insert to Supabase Table
            const { error: dbError } = await supabase
                .from('registration_applications')
                .insert([
                    {
                        first_name: formData.firstName,
                        last_name: formData.lastName,
                        email: formData.email,
                        dialing_code: formData.dialingCode,
                        mobile_number: formData.mobileNumber,
                        is_international: formData.isInternational,
                        academic_level: formData.academicLevel,
                        faculty_of_interest: formData.facultyOfInterest,
                        status: 'pending'
                    }
                ]);

            if (dbError) throw dbError;

            setSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (err: any) {
            setError(err.message || "Failed to submit application to database framework.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-[#F8FAFC] dark:bg-[#07121F] min-h-screen transition-colors duration-500">
            <Hero showFullHero={false} />

            <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                {submitted ? (
                    <div className="bg-white dark:bg-slate-900 border border-emerald-500/30 rounded-3xl p-8 md:p-12 text-center shadow-2xl mt-10">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 mb-6">
                            <CheckCircle2 size={44} />
                        </div>
                        <h1 className="text-3xl font-serif font-bold text-[#0B3C5D] dark:text-white mb-4">
                            Application Successfully Received
                        </h1>
                        <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                            Thank you for your interest in Alexandria University. Your academic profile has been logged inside our admissions database framework. Our admissions sector will contact you via your provided email shortly.
                        </p>
                    </div>
                ) : (
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#001A41] dark:text-white mb-2">
                                Register your interest
                            </h1>
                            <div className="h-[3px] w-12 bg-[#D4AF37] mb-4"></div>
                            <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                                Fill in the form below and our admissions committee will get in touch with you. Learn more about enrollment tracks, entry terms, and degree qualifications at Alexandria University as a domestic or international student.
                            </p>
                        </div>

                        {error && (
                            <div className="flex items-center gap-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 rounded-2xl p-4 text-red-700 dark:text-red-400 text-sm">
                                <AlertCircle size={18} className="flex-shrink-0" />
                                <span>{error}</span>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-3xl p-6 md:p-10 shadow-xl space-y-8 transition-colors duration-500">

                            <div className="space-y-6">
                                <h2 className="text-xl font-bold text-[#0B3C5D] dark:text-[#D4AF37] border-b border-slate-100 dark:border-slate-800 pb-3">
                                    Contact Information
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">First Name *</label>
                                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-slate-800 dark:text-white outline-none focus:border-[#D4AF37] transition-all" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Last Name</label>
                                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-slate-800 dark:text-white outline-none focus:border-[#D4AF37] transition-all" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address *</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-slate-800 dark:text-white outline-none focus:border-[#D4AF37] transition-all" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Confirm Email Address *</label>
                                        <input type="email" name="confirmEmail" value={formData.confirmEmail} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-slate-800 dark:text-white outline-none focus:border-[#D4AF37] transition-all" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Mobile Dialling Code</label>
                                        <select name="dialingCode" value={formData.dialingCode} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-white outline-none focus:border-[#D4AF37] transition-all">
                                            <option value="+20">Egypt (+20)</option>
                                            <option value="+1">USA/Canada (+1)</option>
                                            <option value="+44">UK (+44)</option>
                                            <option value="+966">Saudi Arabia (+966)</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Mobile Number</label>
                                        <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-slate-800 dark:text-white outline-none focus:border-[#D4AF37] transition-all" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2 max-w-md">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Are you an International Student?</label>
                                    <select name="isInternational" value={formData.isInternational} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-white outline-none focus:border-[#D4AF37] transition-all">
                                        <option value="No">No, I am a domestic student</option>
                                        <option value="Yes">Yes, I am an international student</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-6 pt-2">
                                <h2 className="text-xl font-bold text-[#0B3C5D] dark:text-[#D4AF37] border-b border-slate-100 dark:border-slate-800 pb-3">
                                    Area of Interest
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Academic Level *</label>
                                        <select name="academicLevel" value={formData.academicLevel} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-white outline-none focus:border-[#D4AF37] transition-all">
                                            <option value="">-- Select Academic Level --</option>
                                            <option value="Undergraduate">Undergraduate (Bachelor Degree)</option>
                                            <option value="Postgraduate">Postgraduate (Master / PhD)</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Faculty of Interest</label>
                                        <select name="facultyOfInterest" value={formData.facultyOfInterest} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-white outline-none focus:border-[#D4AF37] transition-all">
                                            <option value="">-- Select Faculty --</option>
                                            <option value="Medicine">Faculty of Medicine</option>
                                            <option value="Engineering">Faculty of Engineering</option>
                                            <option value="Arts">Faculty of Arts</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 pt-2">
                                <h2 className="text-xl font-bold text-[#0B3C5D] dark:text-[#D4AF37] border-b border-slate-100 dark:border-slate-800 pb-3">
                                    Declaration
                                </h2>
                                <div className="flex flex-col gap-2 max-w-xl">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Confirm Confirmation Statement *</label>
                                    <select name="declarationConsent" value={formData.declarationConsent} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-white outline-none focus:border-[#D4AF37] transition-all">
                                        <option value="">-- Select Confirmation Option --</option>
                                        <option value="Confirmed">Yes, I read and confirm the data guidelines statement</option>
                                    </select>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit" disabled={isLoading}
                                    className="w-full md:w-auto bg-[#0B3C5D] hover:bg-[#D4AF37] text-white hover:text-[#001A41] font-bold py-4 px-12 rounded-full text-base tracking-wide shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50"
                                >
                                    {isLoading ? "SUBMITTING..." : "Submit your application"}
                                </button>
                            </div>

                        </form>
                    </div>
                )}
            </main>
        </div>
    );
}