const journey = [
  {
    title: "Python & Networking",
    description: "Started with Python fundamentals and Network basics",
    date: "2023",
    tech: [
      { name: "Python", icon: "python" },
    ],
  },
  {
    title: "The Web Foundation",
    description: "Mastered the core building blocks of the web",
    date: "2023",
    tech: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
    ],
  },
  {
    title: "Modern Styling",
    description: "Explored utility-first CSS and responsive frameworks",
    date: "2024",
    tech: [
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "Bootstrap", icon: "bootstrap" },
    ],
  },
  {
    title: "Frontend Mastery",
    description: "Started building complex real-world projects",
    date: "2024",
    tech: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
    ],
  },
  {
    title: "Database Management",
    description: "Deep dive into relational databases and SQL",
    date: "2024",
    tech: [
      { name: "MySQL", icon: "mysql" },
    ],
  },
  {
    title: "Computer Science Core",
    description: "Currently mastering algorithms and architectural patterns",
    date: "2025",
    tech: [
      { name: "C++", icon: "cplusplus" },
      { name: "Python", icon: "python" },
    ],
  },
];

const Timeline = () => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto overflow-x-hidden">
      <div className="text-center mb-16 reveal">
        <h2 className="text-3xl md:text-4xl font-black text-foreground">
          Mariam's <span className="gradient-text">Journey</span>
        </h2>
        <p className="text-muted-foreground text-sm mt-3">A chronological look at her technical evolution</p>
      </div>

      <div className="relative">
        {/* Central Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:-translate-x-1/2" />

        <div className="space-y-12">
          {journey.map((item, index) => (
            <div key={index} className="relative flex items-center md:justify-between group">
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background shadow-[0_0_15px_rgba(var(--primary),0.5)] z-10 md:-translate-x-1/2 transition-transform duration-300 group-hover:scale-150" />

              {/* Side (empty on one side) */}
              <div className="hidden md:block w-[45%]" />

              {/* Card */}
              <div className={`ml-10 md:ml-0 md:w-[45%] reveal ${index % 2 === 0 ? 'md:order-first' : ''}`}>
                <div className="bg-card border border-border p-6 rounded-3xl hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group/card relative overflow-hidden">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                    <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded-full mb-3 w-fit">
                      {item.date}
                    </span>
                    
                    <h4 className={`text-lg font-bold text-foreground mb-2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {item.title}
                    </h4>
                    
                    <p className={`text-sm text-muted-foreground leading-relaxed mb-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {item.description}
                    </p>

                    {/* Tech Icons */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      {item.tech.map((t) => (
                        <div key={t.name} className="flex items-center gap-1.5 bg-muted/50 rounded-lg px-2 py-1 border border-border/50 group/icon hover:border-primary/30 transition-colors">
                          <img
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${t.icon}/${t.icon}-original.svg`}
                            alt={t.name}
                            className="w-4 h-4 grayscale group-hover/icon:grayscale-0 transition-all"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${t.icon}/${t.icon}-plain.svg`;
                            }}
                          />
                          <span className="text-[10px] font-medium text-muted-foreground group-hover/icon:text-foreground transition-colors">{t.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
