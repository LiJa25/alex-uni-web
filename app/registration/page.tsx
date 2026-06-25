"use client";

import React, { useState } from 'react';
import Hero from "@/components/Hero";
import { supabase } from "@/lib/supabase";
import { CheckCircle2, AlertCircle, UploadCloud } from 'lucide-react';

export default function RegistrationPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        confirmEmail: "",
        nationality: "",
        dialingCode: "+20",
        mobileNumber: "",
        isInternational: "No",
        academicLevel: "",
        facultyOfInterest: "",
        declarationConsent: "",
        documentName: ""
    });

    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Strict validation for Dialing Code: Only numbers and '+'
    const handleDialingCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let safeValue = e.target.value.replace(/[^0-9+]/g, '');
        if (safeValue.indexOf('+') > 0) {
            safeValue = safeValue.replace(/\+/g, '');
            safeValue = '+' + safeValue; 
        }
        setFormData({ ...formData, dialingCode: safeValue });
    };

    // Strict validation for Mobile Number: Only numbers
    const handleMobileNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const safeValue = e.target.value.replace(/[^0-9]/g, '');
        setFormData({ ...formData, mobileNumber: safeValue });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            if (file.type !== "application/pdf") {
                setError("Please upload a valid PDF document.");
                return;
            }
            if (file.size > 5 * 1024 * 1024) { // 5MB limit
                setError("File size must be less than 5MB.");
                return;
            }
            setSelectedFile(file);
            setFormData({ ...formData, documentName: file.name });
            setError("");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        if (!formData.firstName || !formData.email || !formData.confirmEmail || !formData.nationality || !formData.academicLevel || !formData.declarationConsent) {
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
            const { error: dbError } = await supabase
                .from('registration_applications')
                .insert([
                    {
                        first_name: formData.firstName,
                        last_name: formData.lastName,
                        email: formData.email,
                        nationality: formData.nationality,
                        dialing_code: formData.dialingCode,
                        mobile_number: formData.mobileNumber,
                        is_international: formData.isInternational,
                        academic_level: formData.academicLevel,
                        faculty_of_interest: formData.facultyOfInterest,
                        document_url: formData.documentName, 
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
                            Thank you for your interest in Alexandria University. Your academic profile and documents have been securely logged inside our admissions database. Our sector will contact you via your provided email shortly.
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
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Nationality *</label>
                                        <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} placeholder="e.g. Egyptian, Saudi, French..." className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-slate-800 dark:text-white outline-none focus:border-[#D4AF37] transition-all" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Are you an International Student?</label>
                                        <select name="isInternational" value={formData.isInternational} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-white outline-none focus:border-[#D4AF37] transition-all">
                                            <option value="No">No, I am a domestic student</option>
                                            <option value="Yes">Yes, I am an international student</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                                    <div className="flex flex-col gap-2 md:col-span-4">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Dialing Code</label>
                                        <input 
                                            type="text" 
                                            name="dialingCode" 
                                            value={formData.dialingCode} 
                                            onChange={handleDialingCodeChange} 
                                            placeholder="+20" 
                                            maxLength={5} 
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-slate-800 dark:text-white outline-none focus:border-[#D4AF37] transition-all" 
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 md:col-span-8">
                                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Mobile Number</label>
                                        <input 
                                            type="text" 
                                            name="mobileNumber" 
                                            value={formData.mobileNumber} 
                                            onChange={handleMobileNumberChange} 
                                            placeholder="100 123 4567" 
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent text-slate-800 dark:text-white outline-none focus:border-[#D4AF37] transition-all" 
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 pt-2">
                                <h2 className="text-xl font-bold text-[#0B3C5D] dark:text-[#D4AF37] border-b border-slate-100 dark:border-slate-800 pb-3">
                                    Academic Profile
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
                                            <option value="Law">Faculty of Law</option>
                                            <option value="Dentistry">Faculty of Dentistry</option>
                                            <option value="Science">Faculty of Science</option>
                                            <option value="Arts">Faculty of Arts</option>
                                            <option value="FineArts">Faculty of Fine Arts</option>
                                            <option value="Business">Faculty of Business</option>
                                            <option value="Engineering">Faculty of Engineering</option>
                                            <option value="Pharmacy">Faculty of Pharmacy</option>
                                            <option value="Agriculture">Faculty of Agriculture</option>
                                            <option value="Nursing">Faculty of Nursing</option>
                                            <option value="Education">Faculty of Education</option>
                                            <option value="VeterinaryMedicine">Faculty of Veterinary Medicine</option>
                                            <option value="TourismAndHotels">Faculty of Tourism & Hotels</option>
                                            <option value="PhysicalEdMen">Faculty of Physical Ed (Men)</option>
                                            <option value="PhysicalEdWomen">Faculty of Physical Ed (Women)</option>
                                            <option value="SpecificEducation">Faculty of Specific Education</option>
                                            <option value="EconomicsAndPoliticalScience">Faculty of Economics & Political Science</option>
                                            <option value="ComputingAndDataScience">Faculty of Computing & Data Science</option>
                                            <option value="EarlyChildhoodEducation">Faculty of Early Childhood Education</option>
                                            <option value="PublicHealth">High Institute of Public Health</option>
                                            <option value="GraduateStudies">Institute of Graduate Studies & Research</option>
                                            <option value="MedicalResearch">Medical Research Institute</option>
                                            <option value="AgricultureSabaBasha">Faculty of Agriculture (Saba Basha)</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 pt-2">
                                <h2 className="text-xl font-bold text-[#0B3C5D] dark:text-[#D4AF37] border-b border-slate-100 dark:border-slate-800 pb-3">
                                    Document Attachment
                                </h2>
                                
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Upload Transcript / ID (PDF Only)</label>
                                    <label className={`w-full flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-6 transition-all cursor-pointer ${selectedFile ? 'border-[#D4AF37] bg-[#D4AF37]/5' : 'border-slate-300 dark:border-slate-700 hover:border-[#D4AF37] hover:bg-slate-50 dark:hover:bg-slate-800/50'}`}>
                                        <UploadCloud size={32} className={`mb-3 ${selectedFile ? 'text-[#D4AF37]' : 'text-slate-400'}`} />
                                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300 text-center">
                                            {selectedFile ? selectedFile.name : "Click to browse or drag and drop your PDF here"}
                                        </p>
                                        <p className="text-xs text-slate-500 mt-1">Maximum file size: 5MB</p>
                                        <input type="file" accept="application/pdf" className="hidden" onChange={handleFileChange} />
                                    </label>
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