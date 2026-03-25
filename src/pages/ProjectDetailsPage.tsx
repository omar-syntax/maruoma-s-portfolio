import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === Number(id));
  const [activeImage, setActiveImage] = useState(0);

  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!project) {
      navigate("/404");
    }
  }, [project, navigate]);

  if (!project) return null;

  const nextImage = () => setActiveImage((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setActiveImage((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-glow" />
      <div className="bg-grid" />

      <div className="relative z-10">
        <Navbar />

        <main className="pt-24 pb-20 px-6 max-w-6xl mx-auto">
          {/* Back button */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Gallery */}
            <div className="space-y-4 reveal">
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-border group bg-muted">
                <img 
                  src={project.images[activeImage]} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {project.images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 overflow-x-auto pb-2 custom-scrollbar">
                {project.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative w-24 aspect-video rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      activeImage === index ? "border-primary scale-95" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Info */}
            <div className="space-y-8 reveal">
              <div>
                <span className="text-xs font-mono text-primary uppercase tracking-widest">
                  0{project.id} — {project.type}
                </span>
                <h1 className="text-4xl md:text-5xl font-black text-foreground mt-2 leading-tight">
                  {project.title}
                </h1>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-3">
                {project.techIcons.map((t) => (
                  <div key={t.name} className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-2 shadow-sm">
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${t.devicon}/${t.devicon}-original.svg`}
                      alt={t.name}
                      className="w-5 h-5"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${t.devicon}/${t.devicon}-plain.svg`;
                      }}
                    />
                    <span className="text-sm font-medium text-foreground">{t.name}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.overview}
                </p>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-4">What Mariam Built</h3>
                    <ul className="space-y-3">
                      {project.built.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-4">Challenges & Growth</h3>
                    <ul className="space-y-3">
                      {project.challenges.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-2xl">
                  <h3 className="text-lg font-bold text-foreground mb-2">Key Takeaway</h3>
                  <p className="text-muted-foreground leading-relaxed italic">"{project.takeaway}"</p>
                </div>

                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95"
                  >
                    View Deployed Project
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Live Preview Iframe */}
          {project.liveUrl && (
            <div className="mt-20 reveal">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">Live Preview</h2>
                <span className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-green-500 pulse-dot" />
                  Interactive Preview
                </span>
              </div>
              <div className="rounded-3xl overflow-hidden border border-border bg-card shadow-2xl">
                <iframe
                  src={project.liveUrl}
                  title={`${project.title} Live Preview`}
                  className="w-full h-[600px] md:h-[80vh]"
                  allow="fullscreen"
                />
              </div>
            </div>
          )}
        </main>

        <footer className="relative z-10 text-center py-12 border-t border-border mt-20">
          <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-xl font-bold mb-2">
              <span className="gradient-text">Mariem Ahmed</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Software Engineering Student · We School of Applied Technology · Cairo
            </p>
            <Link to="/" className="text-xs text-primary hover:underline">Back to Landing Page</Link>
          </div>
        </footer>
      </div>

      <BackToTop />
    </div>
  );
};

export default ProjectDetailsPage;
