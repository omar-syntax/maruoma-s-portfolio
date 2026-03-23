import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ project, onSelect }: { project: any, onSelect: (p: Project) => void }) => {
  if (project.isPlaceholder) {
    return (
      <div className="relative rounded-[20px] border border-dashed border-primary/30 overflow-hidden flex items-center justify-center w-[300px] md:w-[400px] aspect-[3/2] bg-primary/5 flex-shrink-0">
        <div className="text-center">
          <span className="text-2xl font-black gradient-text">Coming Soon</span>
          <p className="text-xs text-muted-foreground mt-2">More projects on the way</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="project-card relative rounded-[20px] border border-border overflow-hidden cursor-pointer group flex-shrink-0 w-[300px] md:w-[400px]"
    >
      <img
        src={project.images[0]}
        alt={project.title}
        className="w-full aspect-[3/2] object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Overlay */}
      <div className="project-overlay absolute inset-0 glass flex flex-col items-center justify-center text-center p-6 gap-4">
        <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
        <p className="text-sm text-muted-foreground max-w-xs">{project.shortDesc}</p>
        <button
          onClick={() => onSelect(project)}
          className="btn-gradient px-5 py-2.5 rounded-lg text-sm font-medium mt-2"
        >
          Show Details →
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  const allProjects = [...projects, { id: 'placeholder', isPlaceholder: true }];

  return (
    <>
      <section id="projects" className="relative z-10 py-24 overflow-hidden">
        <div className="reveal px-6 md:px-12 max-w-6xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[4px] text-primary font-medium">Projects</span>
          <h2 className="text-3xl md:text-4xl font-black mt-2 text-foreground">Things I've built</h2>
        </div>

        <div className="scroll-container">
          <div className="fade-edge-left"></div>
          <div className="fade-edge-right"></div>
          
          <div className="scroll-content">
            {/* First set of projects */}
            {allProjects.map((project, index) => (
              <ProjectCard key={`first-${project.id}-${index}`} project={project} onSelect={setSelected} />
            ))}
            {/* Second set for seamless loop */}
            {allProjects.map((project, index) => (
              <ProjectCard key={`second-${project.id}-${index}`} project={project} onSelect={setSelected} />
            ))}
          </div>
        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
};

export default Projects;
