import { ThemeToggle } from "./ThemeToggle";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleNavClick = (id: string) => {
    const sectionId = id.toLowerCase();
    const isAboutPage = location.pathname === "/about";
    
    if (id === "About") {
      if (isAboutPage) window.scrollTo({ top: 0, behavior: "smooth" });
      else navigate("/about");
    } else if (id === "Projects") {
      if (location.pathname === "/projects") window.scrollTo({ top: 0, behavior: "smooth" });
      else navigate("/projects");
    } else if (isHome) {
      if (id === "Home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }
    } else if (isAboutPage && id === "Skills") {
      document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
    } else {
      if (id === "Home") {
        navigate("/");
      } else {
        navigate(`/#${sectionId}`);
      }
    }
  };

  return (
    <nav className="w-full py-6 px-6 md:px-12 flex items-center justify-between relative z-50">
      <Link to="/" className="text-xl font-black gradient-text tracking-tight hover:opacity-80 transition-opacity">
        Portfolio
      </Link>
      <div className="flex items-center gap-4 md:gap-8">
        <div className="flex items-center gap-6">
          {["Home", "About", "Projects", "Skills"].map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium tracking-wide hidden md:block"
            >
              {link}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => isHome ? handleNavClick("Projects") : navigate("/projects")}
            className="btn-gradient px-5 py-2 rounded-lg text-sm font-medium"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
