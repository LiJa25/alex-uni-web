import Hero from "@/components/Hero";
import Administration from "@/components/administration";

export default function AdministrationPage() {
  return (

    <div>

      <Hero showFullHero={false} />
      <main >
        <Administration />
      </main>
    </div>
  );
}