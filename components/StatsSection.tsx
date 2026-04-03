export default function StatsSection() {
    // We store the data here so it's easy to update later!
    const stats = [
        {
            id: 1,
            value: "24",
            hasPlus: false,
            label: "FACULTY",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                    <path d="M9 22v-4h6v4"></path>
                    <path d="M8 6h.01"></path>
                    <path d="M16 6h.01"></path>
                    <path d="M12 6h.01"></path>
                    <path d="M12 10h.01"></path>
                    <path d="M12 14h.01"></path>
                    <path d="M16 10h.01"></path>
                    <path d="M16 14h.01"></path>
                    <path d="M8 10h.01"></path>
                    <path d="M8 14h.01"></path>
                </svg>
            )
        },
        {
            id: 2,
            value: "8k",
            hasPlus: true,
            label: "PROFESSORS",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
            )
        },
        {
            id: 3,
            value: "750",
            hasPlus: true,
            label: "PROGRAMS",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
            )
        },
        {
            id: 4,
            value: "217k",
            hasPlus: false,
            label: "STUDENTS",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
            )
        }
    ];

    return (
        // Deep blue background to match the design
        <section className="w-full bg-blue-900/95 py-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* CSS Grid to put them in a responsive row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    
                    {stats.map((stat) => (
                        // We add 'group' here so the hover effects trigger together!
                        <div 
                            key={stat.id} 
                            className="group bg-white rounded-3xl p-10 flex flex-col items-center justify-center text-center shadow-lg transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
                        >
                            
                            {/* Icon Circle */}
                            {/* group-hover:bg-smart-blue-700 and group-hover:text-white handle the magic */}
                            <div className="w-24 h-24 rounded-full bg-smart-blue-50 text-blue-900 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-smart-blue-800 group-hover:text-white">
                                {stat.icon}
                            </div>

                            {/* Numbers (Using Kameron font!) */}
                            <div className="text-4xl md:text-5xl font-kameron font-bold text-smart-blue-950 mb-3">
                                {stat.value}
                                {/* If it has a plus, render it in a slightly lighter blue */}
                                {stat.hasPlus && (
                                    <span className="text-smart-blue-500 ml-1">+</span>
                                )}
                            </div>

                            {/* Label underneath */}
                            <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                                {stat.label}
                            </div>
                            
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}