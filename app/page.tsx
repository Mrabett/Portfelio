// app/page.tsx
import Hero from "./components/Hero";
import About from "./components/About";
import Experiences from "./Experiences";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Educations from "./components/Educations";   // AJOUTÉ ICI
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experiences />
      <Skills />
      <Projects />
      <Educations />           {/* Et utilisé ici */}
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}