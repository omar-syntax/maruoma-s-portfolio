import characterImg from "@/assets/character.png";
import { useNavigate, useLocation } from "react-router-dom";

const stats = [
  { value: "3+", label: "Projects Shipped" },
  { value: "12+", label: "Technologies" },
  { value: "1", label: "Research Paper" },
];

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="relative z-10 px-6 md:px-12 max-w-6xl mx-auto py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left — star with character */}
        <div className="flex justify-center reveal">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 star-shape bg-gradient-to-br from-primary to-secondary opacity-90" />
            <img
              src={characterImg}
              alt="Mariem Ahmed"
              className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* Right — content */}
        <div className="space-y-6 reveal">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-foreground">
              About <span className="gradient-text">Me</span>
            </h2>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            I'm Mariem Ahmed, a Software Engineering student at We School of Applied Technology. I don't wait until I'm "ready" — I ship under pressure and learn whatever technology is needed along the way. From NFC attendance systems to electromagnetic healing devices, every project I've built involved tech I'd never touched before starting.
          </p>

          <p className="text-muted-foreground text-sm leading-relaxed">
            I'm a vibe engineer — I understand the architecture, make deliberate decisions, and use AI as a precision tool, not a replacement for thinking.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="text-2xl md:text-3xl font-black gradient-text">{stat.value}</span>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => isHome ? navigate("/about") : scrollTo("skills")}
            className="btn-gradient px-6 py-3 rounded-lg text-sm font-medium mt-2"
          >
            {isHome ? "Learn More" : "View Skills"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
