const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative z-10 -mt-20">
      {/* Badge */}
      <div className="glass rounded-full px-5 py-2.5 flex items-center gap-3 mb-10">
        <span className="w-2 h-2 rounded-full bg-primary pulse-dot inline-block" />
        <span className="text-sm text-muted-foreground font-medium">We School of Applied Technology</span>
      </div>

      {/* Name */}
      <h1
        className="font-black gradient-text leading-[0.9] tracking-tight"
        style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}
      >
        Mariam
        <br />
        Ahmed
      </h1>

      {/* Tagline */}
      <p className="italic text-muted-foreground mt-6 text-lg">
        Vibe Engineer — I don't just code, I direct the machine.
      </p>

      {/* Subtitle */}
      <p className="text-muted-foreground/70 mt-3 max-w-xl text-sm leading-relaxed">
        Software Engineering Student. I build real things — from web dashboards to electromagnetic devices — and I use AI as a tool, not a crutch.
      </p>

      {/* CTAs */}
      <div className="flex items-center gap-4 mt-10">
        <button
          onClick={() => scrollTo("projects")}
          className="btn-gradient px-7 py-3 rounded-lg font-medium text-sm"
        >
          View My Work
        </button>
        <button
          onClick={() => scrollTo("about")}
          className="btn-ghost px-7 py-3 rounded-lg font-medium text-sm"
        >
          About Me
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="mt-16 flex flex-col items-center">
        <div className="scroll-line" />
        <span className="text-[10px] uppercase tracking-[3px] text-muted-foreground/50">scroll</span>
      </div>
    </section>
  );
};

export default Hero;
