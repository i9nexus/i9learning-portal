import { useState, useEffect } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Sobre", href: "/#o-que-fazemos" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Metodologia", href: "/#como-trabalhamos" },
  { label: "Setores", href: "/#solucoes" },
  { label: "Impacto", href: "/#impacto" },
  { label: "Benefícios", href: "/#beneficios" },
  { label: "Contactos", href: "/#contacto" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.replace("/#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // pick the one closest to the top
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

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
            <a
              key={link.href}
              href={link.href}
              className="nav-link-hover text-base text-muted-foreground hover:text-foreground transition-colors duration-200 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Theme toggle */}
        <div className="hidden md:flex items-center w-[100px] flex-shrink-0 justify-end">
          <button
            onClick={() => document.documentElement.classList.toggle("light")}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-colors"
            aria-label="Alternar tema"
          >
            <Sun size={18} />
          </button>
        </div>

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
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="text-left text-lg font-display font-medium text-muted-foreground hover:text-foreground hover:bg-white/[0.05] rounded-lg px-4 py-3 transition-all duration-200"
                    >
                      {link.label}
                    </a>
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