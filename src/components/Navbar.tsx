const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="w-full py-6 px-6 md:px-12 flex items-center justify-between relative z-10">
      <div className="text-2xl font-black gradient-text tracking-tight cursor-default">
        MA
      </div>
      <div className="flex items-center gap-8">
        {["Home", "About", "Projects"].map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link.toLowerCase())}
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium tracking-wide"
          >
            {link}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
