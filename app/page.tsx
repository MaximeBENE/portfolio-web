import { Maxime } from "@/components/sections/Maxime";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Timeline } from "@/components/sections/Timeline";

export default function Home() {
  return (
    <>
      <Maxime />
      <Skills />
      <Projects />
      <Timeline />
    </>
  );
}