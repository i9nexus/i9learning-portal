import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const halfPage = document.documentElement.scrollHeight / 2;
      setIsVisible(window.scrollY > halfPage * 0.5);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className={`fixed bottom-6 left-6 z-40 min-w-[44px] min-h-[44px] w-11 h-11 rounded-full flex items-center justify-center
        bg-secondary/80 backdrop-blur-sm border border-border/30
        text-foreground/70 hover:text-foreground shadow-lg
        transition-all duration-300 hover:scale-110 hover:bg-secondary
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  );
};

export default ScrollToTop;
