import { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      {/* Tooltip */}
      <div className="tooltip-content">Back to top</div>

      <button
        onClick={scrollToTop}
        className={`relative w-11 h-11 rounded-full btn-gradient flex items-center justify-center text-lg transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        {/* Purple glow */}
        <div className="purple-glow" />

        {/* Arrow icon with bounce */}
        <span className="relative z-10 inline-block transition-transform duration-300 group-hover:animate-arrow-bounce">
          ↑
        </span>
      </button>
    </div>
  );
};

export default BackToTop;
