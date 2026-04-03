export default function WelcomeSection() {
    return (
        <section className="w-full bg-white py-20 md:py-32 px-6">
            {/* FIX 1: Changed items-start to items-center to perfectly middle-align the left and right sides */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                
                {/* Left Side: Heading */}
                <div className="w-full lg:w-5/12">
                    <h2 className="text-5xl md:text-6xl font-kameron text-blue-900 font-bold leading-tight">
                        Welcome to <br/>
                        <span className="text-harvest-gold-500">Alexandria</span><br/>
                        University
                    </h2>
                    {/* The blue horizontal accent line */}
                    <div className="h-1 w-24 bg-smart-blue-600 mt-8 rounded-full"></div>
                </div>

                {/* Right Side: Quote with Vertical Bar */}
                <div className="w-full lg:w-7/12 flex items-center">
                    <div className=" w-1.5 bg-harvest-gold-500 flex-shrink-0 mr-6 md:mr-8 rounded-full self-stretch mt-1 mb-1"></div>
                    <div className="text-justify text-blue-900 text-lg leading-relaxed columns-1 md:columns-2 gap-8">
                        <p>
                            "The University of Alexandria is building the leaders Egypt needs—students are admitted on merit alone, trained in the Great Books and through apprenticeship, free from the debt that cripples ambition."
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}