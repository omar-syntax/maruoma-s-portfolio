import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import BackToTop from "@/components/BackToTop";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AboutPage = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      {/* Background effects */}
      <div className="bg-glow" />
      <div className="bg-grid" />

      <div className="relative z-10">
        <Navbar />
        
        <div className="pt-24 px-6 max-w-6xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        <About />
        <Skills />
        <Timeline />

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
    </div>
  );
};

export default AboutPage;
