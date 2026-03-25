const skills = [
  { name: "HTML5", devicon: "html5", proficiency: 90, color: "hsl(14, 80%, 50%)" },
  { name: "CSS3", devicon: "css3", proficiency: 85, color: "hsl(205, 80%, 50%)" },
  { name: "JavaScript", devicon: "javascript", proficiency: 80, color: "hsl(50, 90%, 50%)" },
  { name: "React", devicon: "react", proficiency: 78, color: "hsl(193, 95%, 55%)" },
  { name: "Next.js", devicon: "nextjs", proficiency: 70, color: "hsl(0, 0%, 70%)" },
  { name: "Tailwind CSS", devicon: "tailwindcss", proficiency: 85, color: "hsl(189, 95%, 45%)" },
  { name: "Firebase", devicon: "firebase", proficiency: 75, color: "hsl(35, 95%, 50%)" },
  { name: "Python", devicon: "python", proficiency: 65, color: "hsl(210, 60%, 50%)" },
  { name: "Bootstrap", devicon: "bootstrap", proficiency: 80, color: "hsl(261, 50%, 55%)" },
  { name: "MySQL", devicon: "mysql", proficiency: 60, color: "hsl(200, 70%, 45%)" },
  { name: "Arduino", devicon: "arduino", proficiency: 70, color: "hsl(183, 60%, 40%)" },
  { name: "C++", devicon: "cplusplus", proficiency: 60, color: "hsl(210, 70%, 50%)" },
];

const Skills = () => {
  return (
    <section id="skills" className="relative z-10 px-6 md:px-12 max-w-6xl mx-auto py-24">
      <div className="text-center reveal">
        <h2 className="text-3xl md:text-4xl font-black text-foreground">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-muted-foreground text-sm mt-3">
          Technologies and tools I work with to create amazing experiences
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-12 stagger">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-card border border-border rounded-2xl p-5 hover:border-primary/40 transition-all duration-300 reveal group"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${skill.color}20` }}
              >
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.devicon}/${skill.devicon}-original.svg`}
                  alt={skill.name}
                  className="w-6 h-6"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.devicon}/${skill.devicon}-plain.svg`;
                  }}
                />
              </div>
              <span className="text-sm font-semibold text-foreground">{skill.name}</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                  {skill.proficiency >= 85 ? "Advanced" : skill.proficiency >= 70 ? "Intermediate" : "Learning"}
                </span>
                <span className="text-xs font-bold" style={{ color: skill.color }}>{skill.proficiency}%</span>
              </div>
              <div className="proficiency-bar bg-muted/30">
                <div
                  className="proficiency-fill relative overflow-hidden"
                  style={{ width: `${skill.proficiency}%`, background: skill.color }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
