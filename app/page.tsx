import { Header } from "@/components/sections/Header";
import { Maxime } from "@/components/sections/Maxime";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Timeline } from "@/components/sections/Timeline";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Maxime />
        <Skills />
        <Projects />
        <Timeline />
      </main>
      <Footer />
    </>
  );
}