const techStack = [
  { name: "HTML5", devicon: "html5" },
  { name: "CSS3", devicon: "css3" },
  { name: "JavaScript", devicon: "javascript" },
  { name: "Python", devicon: "python" },
  { name: "Bootstrap", devicon: "bootstrap" },
  { name: "Tailwind CSS", devicon: "tailwindcss" },
  { name: "MySQL", devicon: "mysql" },
  { name: "React", devicon: "react" },
  { name: "Next.js", devicon: "nextjs" },
  { name: "Firebase", devicon: "firebase" },
  { name: "Arduino", devicon: "arduino" },
  { name: "C++", devicon: "cplusplus" },
];

const learningItems = ["DSA", "OOP"];

const softSkills = ["Problem Solving", "Critical Thinking", "Public Speaking", "AI-Augmented Engineering"];

const About = () => {
  return (
    <section id="about" className="relative z-10 px-6 md:px-12 max-w-6xl mx-auto py-24 space-y-20">
      {/* Section title */}
      <div className="reveal">
        <span className="text-xs uppercase tracking-[4px] text-primary font-medium">About</span>
        <h2 className="text-3xl md:text-4xl font-black mt-2 text-foreground">Get to know me</h2>
      </div>

      {/* Story cards */}
      <div className="grid md:grid-cols-2 gap-6 stagger">
        <div className="card-accent bg-card rounded-[20px] border border-border p-8 reveal">
          <h3 className="text-lg font-bold text-foreground mb-4">The Journey</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Mariam didn't start as a developer — she started as someone who wanted to understand how things work. From tearing apart old electronics to writing her first lines of code, her journey has always been driven by curiosity. At We School of Applied Technology, she found a place where that curiosity could become real projects with real impact.
          </p>
        </div>
        <div className="card-accent bg-card rounded-[20px] border border-border p-8 reveal">
          <h3 className="text-lg font-bold text-foreground mb-4">Learn by Shipping</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Mariam's approach is simple: pick a real problem, commit to building the solution, and learn whatever technology is needed along the way. She doesn't wait until she's "ready" — she ships under pressure and figures out the gaps in real time. Every project she's built has involved technologies she'd never touched before starting.
          </p>
        </div>
      </div>

      {/* Philosophy */}
      <div className="card-accent bg-card rounded-[20px] border border-border p-10 relative overflow-hidden reveal">
        <span className="absolute top-4 left-8 text-[120px] font-black gradient-text opacity-10 leading-none select-none pointer-events-none">"</span>
        <div className="relative z-10">
          <p className="text-xl md:text-2xl font-bold gradient-text mb-4">
            "I'm not a vibe coder. I'm a vibe engineer."
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-3xl">
            A vibe coder throws prompts at AI and hopes for the best. A vibe engineer understands the architecture, makes deliberate decisions, and uses AI as a precision tool — not a replacement for thinking. Mariam directs the machine with intent, validates every output, and takes ownership of every line that ships.
          </p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="reveal">
        <span className="text-xs uppercase tracking-[4px] text-primary font-medium">Tech Stack</span>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4 mt-8 stagger">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="bg-card border border-border rounded-2xl p-4 flex flex-col items-center gap-3 hover:border-primary/40 transition-colors duration-300 reveal"
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.devicon}/${tech.devicon}-original.svg`}
                alt={tech.name}
                className="w-9 h-9"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.devicon}/${tech.devicon}-plain.svg`;
                }}
              />
              <span className="text-xs text-muted-foreground font-medium text-center">{tech.name}</span>
            </div>
          ))}
          {learningItems.map((item) => (
            <div
              key={item}
              className="border border-dashed border-primary/30 bg-primary/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-2 reveal"
            >
              <span className="text-sm font-bold gradient-text">{item}</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Learning</span>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="reveal">
        <span className="text-xs uppercase tracking-[4px] text-primary font-medium">Soft Skills</span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 stagger">
          {softSkills.map((skill) => (
            <div
              key={skill}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/40 transition-colors duration-300 reveal"
            >
              <span className="text-sm font-semibold text-foreground">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Goals */}
      <div className="card-accent bg-card rounded-[20px] border border-border p-10 reveal">
        <h3 className="text-lg font-bold text-foreground mb-4">Where I'm Headed</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Mariam's goal is to become a software engineer who bridges hardware and software, uses emerging tools without losing her own thinking, and creates products that genuinely impact people's lives.
        </p>
      </div>
    </section>
  );
};

export default About;
