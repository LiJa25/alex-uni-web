import About from "@/components/AboutPage";
import Hero from "@/components/Hero"; 

export default function AboutRoute() {
  return (
    <main>
<Hero showFullHero={false} />
      
      <About />
    </main>
  );
}