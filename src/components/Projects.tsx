import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="relative z-10 px-6 md:px-12 max-w-6xl mx-auto py-24">
        <div className="reveal">
          <span className="text-xs uppercase tracking-[4px] text-primary font-medium">Projects</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2 text-foreground">Things I've built</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12 stagger">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card relative rounded-[20px] border border-border overflow-hidden cursor-pointer group reveal"
            >
              <img
                src={`https://placehold.co/600x400/0d1520/f97316?text=${encodeURIComponent(project.title)}`}
                alt={project.title}
                className="w-full aspect-[3/2] object-cover"
              />
              {/* Overlay */}
              <div className="project-overlay absolute inset-0 glass flex flex-col items-center justify-center text-center p-6 gap-4">
                <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground max-w-xs">{project.shortDesc}</p>
                <button
                  onClick={() => setSelected(project)}
                  className="btn-gradient px-5 py-2.5 rounded-lg text-sm font-medium mt-2"
                >
                  Show Details →
                </button>
              </div>
            </div>
          ))}
          {/* 4th placeholder */}
          <div className="relative rounded-[20px] border border-dashed border-primary/30 overflow-hidden flex items-center justify-center aspect-[3/2] bg-primary/5 reveal">
            <div className="text-center">
              <span className="text-2xl font-black gradient-text">Coming Soon</span>
              <p className="text-xs text-muted-foreground mt-2">More projects on the way</p>
            </div>
          </div>
        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
};

export default Projects;
