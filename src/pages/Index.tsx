import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import BackToTop from "@/components/BackToTop";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();

  return (
    <>
      {/* Background effects */}
      <div className="bg-glow" />
      <div className="bg-grid" />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />

        {/* Footer */}
        <footer className="relative z-10 text-center py-12 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2026 Mariam Ahmed. Built with intention.
          </p>
        </footer>
      </div>

      <BackToTop />
    </>
  );
};

export default Index;
