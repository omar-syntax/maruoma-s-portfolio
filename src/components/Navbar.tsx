const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="w-full py-6 px-6 md:px-12 flex items-center justify-between relative z-10">
      <div className="text-xl font-black gradient-text tracking-tight cursor-default">
        Portfolio
      </div>
      <div className="flex items-center gap-8">
        {["Home", "About", "Projects", "Skills"].map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link.toLowerCase())}
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium tracking-wide hidden md:block"
          >
            {link}
          </button>
        ))}
        <button
          onClick={() => scrollTo("projects")}
          className="btn-gradient px-5 py-2 rounded-lg text-sm font-medium"
        >
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
