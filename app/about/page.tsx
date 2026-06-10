import About from "@/components/AboutPage";
import Hero from "@/components/Hero";

export default function AboutRoute() {
  return (
    <div>
      <Hero showFullHero={false} />
      <main>
        <About />
      </main>
    </div>
  );
}