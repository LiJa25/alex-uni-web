import Hero from "@/components/Hero";
import QuickLinks from "@/components/QuickLinks";
import WelcomeSection from "@/components/WelcomeSection";
import StatsSection from "@/components/StatsSection";
import LatestNews from "@/components/LatestNews";
import UpcomingEvents from '@/components/UpcomingEvents';
import ExploreOurFaculties from '@/components/ExploreOurFaculties';
import ApplyFaculty from '@/components/ApplyFaculty';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <WelcomeSection />
      <StatsSection />
      <QuickLinks />
      <LatestNews />
      <UpcomingEvents />
      <ExploreOurFaculties />
      <ApplyFaculty />
      <Footer />

      {/* Temporary spacing so you can still scroll down while we build */}
      {/* <div className="h-[500px] bg-harvest-gold-50"></div>  */}
    </main>
  );
}