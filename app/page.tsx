import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingShapes from "./components/FloatingShapes";
import TechMarquee from "./components/TechMarquee";
import { LanguageProvider } from "./context/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <>
        <FloatingShapes />
        <Navbar />
        <Hero />

        {/* Scrolling tech strip */}
        <TechMarquee />

        <About />
        <div className="section-alt">
          <Experience />
        </div>
        <Skills />
        <div className="section-alt">
          <Projects />
        </div>
        <Education />
        <div className="relative overflow-hidden">
          {/* Contact gradient background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -bottom-40 left-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500/5 blur-[100px]" />
            <div className="absolute -top-40 right-1/4 h-[350px] w-[350px] rounded-full bg-purple-500/5 blur-[100px]" />
          </div>
          <Contact />
        </div>
        <Footer />
      </>
    </LanguageProvider>
  );
}
