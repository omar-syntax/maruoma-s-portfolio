import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
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
        <Contact />

        {/* Footer */}
        <footer className="relative z-10 text-center py-12 border-t border-border">
          <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-xl font-bold mb-2">
              <span className="gradient-text">Mariem Ahmed</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Software Engineering Student · We School of Applied Technology · Cairo
            </p>
            <p className="text-xs text-muted-foreground/60">
              © 2025 Mariem Ahmed. All rights reserved.
            </p>
          </div>
        </footer>
      </div>

      <BackToTop />
    </>
  );
};

export default Index;
