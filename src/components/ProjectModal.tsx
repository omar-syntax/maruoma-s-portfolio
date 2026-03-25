import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

interface Props {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: Props) => {
  const [slide, setSlide] = useState(0);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setSlide(0);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  const prevSlide = () => setSlide((s) => (s === 0 ? project.images.length - 1 : s - 1));
  const nextSlide = () => setSlide((s) => (s === project.images.length - 1 ? 0 : s + 1));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-card border border-border rounded-[20px] w-full max-w-3xl max-h-[90vh] overflow-y-auto custom-scrollbar modal-enter"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
        >
          ✕
        </button>

        {/* Image slider */}
        <div className="relative w-full aspect-video overflow-hidden rounded-t-[20px]">
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${project.title} slide ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              style={{ opacity: i === slide ? 1 : 0 }}
            />
          ))}
          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full glass flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full glass flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
          >
            ›
          </button>
          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === slide ? "bg-primary w-5" : "bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Badge + Title */}
          <div>
            <span className="text-xs font-mono text-primary">
              0{project.id} — {project.type}
            </span>
            <h3 className="text-2xl font-black text-foreground mt-1">{project.title}</h3>
          </div>

          {/* Tech icons */}
          <div className="flex gap-3">
            {project.techIcons.map((t) => (
              <div key={t.name} className="flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-1.5">
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${t.devicon}/${t.devicon}-original.svg`}
                  alt={t.name}
                  className="w-4 h-4"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${t.devicon}/${t.devicon}-plain.svg`;
                  }}
                />
                <span className="text-xs text-muted-foreground">{t.name}</span>
              </div>
            ))}
          </div>

          {/* Overview */}
          <p className="text-muted-foreground text-sm leading-relaxed">{project.overview}</p>

          {/* Built */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-3">What she built</h4>
            <ul className="space-y-2">
              {project.built.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-primary shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-3">Challenges & Growth</h4>
            <ul className="space-y-2">
              {project.challenges.map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground flex gap-2">
                  <span className="text-primary shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Takeaway */}
          <div className="border-l-2 border-primary bg-primary/5 rounded-r-lg p-5">
            <h4 className="text-sm font-bold text-foreground mb-2">Key Takeaway</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.takeaway}</p>
          </div>

          {/* Live Preview */}
          {project.liveUrl && (
            <div className="pt-4">
              <h4 className="text-sm font-bold text-foreground mb-3">Live Preview</h4>
              <iframe
                src={project.liveUrl}
                title={`${project.title} Live Preview`}
                className="w-full h-[500px] md:h-[60vh] border border-border rounded-xl bg-card"
                allow="fullscreen"
              />
            </div>
          )}

          {/* Full Page Button */}
          <div className="pt-6 border-t border-border flex justify-end">
            <Link
              to={`/projects/${project.id}`}
              onClick={onClose}
              className="btn-gradient px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 hover:scale-105 transition-transform"
            >
              View Full Page →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
