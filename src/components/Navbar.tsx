import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Sobre", hash: "#o-que-fazemos" },
  { label: "Serviços", hash: "#servicos" },
  { label: "Metodologia", hash: "#como-trabalhamos" },
  { label: "Mercados", hash: "#solucoes" },
  { label: "Impacto", hash: "#impacto" },
  { label: "Benefícios", hash: "#beneficios" },
  { label: "Contactos", hash: "#contacto" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (hash: string) => {
    setSheetOpen(false);
    if (location.pathname === "/") {
      setTimeout(() => {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      navigate("/" + hash);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-white/10"
          : "bg-transparent border-white/5"
      }`}
    >
      <div className="container-narrow mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(190,95%,50%)] to-[hsl(210,90%,55%)] flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="font-display text-[18px] font-bold tracking-tight text-background leading-none">i9</span>
          </div>
          <span className="font-display text-[22px] font-bold tracking-tight text-foreground">
            Learning
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.hash}
              onClick={() => handleNavClick(link.hash)}
              className="nav-link-hover text-base text-muted-foreground hover:text-foreground transition-colors duration-200 whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Spacer */}
        <div className="hidden md:block w-[100px] flex-shrink-0" />

        {/* Mobile drawer */}
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Abrir menu"
            >
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[280px] sm:w-[320px] bg-background/95 backdrop-blur-2xl border-l border-white/10 p-0"
          >
            <div className="flex flex-col h-full pt-12 pb-8 px-6">
              {/* Logo inside drawer */}
              <div className="flex items-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(190,95%,50%)] to-[hsl(210,90%,55%)] flex items-center justify-center shadow-lg shadow-primary/20">
                  <span className="font-display text-[18px] font-bold tracking-tight text-background leading-none">i9</span>
                </div>
                <span className="font-display text-[22px] font-bold tracking-tight text-foreground">
                  Learning
                </span>
              </div>

              {/* Navigation links */}
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.hash}>
                    <button
                      onClick={() => handleNavClick(link.hash)}
                      className="text-left text-lg font-display font-medium text-muted-foreground hover:text-foreground hover:bg-white/[0.05] rounded-lg px-4 py-3 transition-all duration-200"
                    >
                      {link.label}
                    </button>
                  </SheetClose>
                ))}
              </nav>

              {/* Footer accent */}
              <div className="mt-auto pt-8 border-t border-white/[0.06]">
                <p className="text-xs text-muted-foreground/60">
                  © {new Date().getFullYear()} i9 Learning
                </p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
