import { useState, useEffect } from "react";
import { Github, Youtube, Linkedin } from "lucide-react";
import characterImg from "@/assets/character.png";

const socialLinks = [
  { icon: Github, href: "https://github.com/Mariem-Ahmed-11", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mariem-ahmed-salah-47219139b", label: "LinkedIn" },
];

const titles = [
  "Software Engineering Student",
  "React Developer",
  "UI/UX Enthusiast",
  "Vibe Engineer",
  "Problem Solver",
];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(70);

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[titleIndex];
      if (isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        setSpeed(25);
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        setSpeed(70);
      }

      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, speed]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 md:px-12 max-w-6xl mx-auto relative z-10 -mt-10"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center w-full">
        {/* Left side */}
        <div className="space-y-6 order-2 md:order-1">
          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 active:scale-95"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Greeting */}
          <div>
            <h1
              className="font-black text-foreground leading-[1.1] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
            >
              Hi, I'm{" "}
              <span className="gradient-text">Mariem</span>
            </h1>
            <div className="h-8 mt-2">
              <p className="text-xl md:text-2xl font-bold text-foreground/80">
                <span className="pr-1 animate-pulse-cursor">{displayText}</span>
              </p>
            </div>
            <p className="text-muted-foreground mt-6 text-sm leading-relaxed max-w-lg">
              Software Engineering Student at We School of Applied Technology. I build real things — from web dashboards to electromagnetic devices — and I use AI as a tool, not a crutch.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-4 pt-2">
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
        </div>

        {/* Right side — character */}
        <div className="flex justify-center order-1 md:order-2 relative">
          <div className="relative">
            <img
              src={characterImg}
              alt="Mariem Ahmed - 3D character"
              className="w-72 md:w-96 float-animation drop-shadow-2xl"
            />
            {/* Floating tech icons */}
            <div className="absolute top-4 -left-4 w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center float-animation" style={{ animationDelay: "0.5s" }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-7 h-7" />
            </div>
            <div className="absolute top-12 -right-4 w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center float-animation" style={{ animationDelay: "1s" }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" className="w-7 h-7" />
            </div>
            <div className="absolute bottom-16 -left-8 w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center float-animation" style={{ animationDelay: "1.5s" }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" className="w-7 h-7" />
            </div>
            <div className="absolute bottom-8 -right-6 w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center float-animation" style={{ animationDelay: "2s" }}>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-7 h-7" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
