import { Header } from "@/components/sections/Header";
import { Maxime } from "@/components/sections/Maxime";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Maxime />
        <Skills />
      </main>
    </>
  );
}