import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Menu, Sun, Moon, ChevronDown, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { services } from "@/data/services";

const middleLinks = [
  { label: "Metodologia", href: "/#como-trabalhamos" },
  { label: "Setores", href: "/#solucoes" },
  { label: "Impacto", href: "/#impacto" },
  { label: "Benefícios", href: "/#beneficios" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = useCallback((e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location.pathname]);

  const goToServicesSection = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setServicesOpen(false);
      setMobileServicesOpen(false);
      setSheetOpen(false);
      const scrollToServices = () => {
        const el = document.getElementById("servicos");
        if (el) {
          const padTop = parseFloat(window.getComputedStyle(el).paddingTop) || 0;
          const top = el.getBoundingClientRect().top + window.scrollY + padTop - 112;
          window.scrollTo({ top, behavior: "smooth" });
        }
      };
      if (location.pathname === "/") {
        scrollToServices();
      } else {
        navigate("/");
        let attempts = 0;
        const timer = window.setInterval(() => {
          attempts += 1;
          const el = document.getElementById("servicos");
          if (el) {
            window.setTimeout(scrollToServices, 180);
            window.clearInterval(timer);
          } else if (attempts > 25) {
            window.clearInterval(timer);
          }
        }, 80);
      }
    },
    [location.pathname, navigate]
  );

  const goToBlogSection = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setSheetOpen(false);
      const scrollToBlog = () => {
        const el = document.getElementById("blog");
        if (el) {
          const padTop = parseFloat(window.getComputedStyle(el).paddingTop) || 0;
          const top = el.getBoundingClientRect().top + window.scrollY + padTop - 112;
          window.scrollTo({ top, behavior: "smooth" });
        }
      };
      if (location.pathname === "/") {
        scrollToBlog();
      } else {
        navigate("/");
        let attempts = 0;
        const timer = window.setInterval(() => {
          attempts += 1;
          const el = document.getElementById("blog");
          if (el) {
            window.setTimeout(scrollToBlog, 180);
            window.clearInterval(timer);
          } else if (attempts > 25) {
            window.clearInterval(timer);
          }
        }, 80);
      }
    },
    [location.pathname, navigate]
  );

  const handleNavClick = useCallback(
    (href: string) => (e: React.MouseEvent) => {
      if (href.startsWith("/#") && location.pathname === "/") {
        const id = href.replace("/#", "");
        const el = document.getElementById(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    [location.pathname]
  );

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      root.classList.add("light");
      setIsDark(false);
    } else {
      root.classList.remove("light");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        <Link to="/" onClick={handleLogoClick} className="flex items-center gap-3 flex-shrink-0">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(190,95%,50%)] to-[hsl(210,90%,55%)] flex items-center justify-center shadow-lg shadow-primary/20">
            <span className="font-display text-[18px] font-bold tracking-tight text-background leading-none">i9</span>
          </div>
          <span className="font-display text-[22px] font-bold tracking-tight text-foreground">
            Learning
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-4 xl:gap-7">
          {/* Sobre */}
          <a
            href="/#o-que-fazemos"
            onClick={handleNavClick("/#o-que-fazemos")}
            className="nav-link-hover text-sm xl:text-base text-muted-foreground hover:text-foreground transition-colors duration-200 whitespace-nowrap"
          >
            Sobre
          </a>

          {/* Dropdown Serviços */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen((prev) => !prev)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              className="nav-link-hover flex items-center gap-1 text-sm xl:text-base text-muted-foreground hover:text-foreground transition-colors duration-200 whitespace-nowrap"
            >
              Serviços
              <ChevronDown
                size={15}
                width={15}
                height={15}
                aria-hidden="true"
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4">
                <div className="w-[330px] rounded-xl border border-white/10 bg-background/95 backdrop-blur-2xl shadow-2xl shadow-black/40 p-2">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={service.path}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-white/[0.06] transition-colors group/item"
                    >
                      <span className="font-display text-xs font-semibold text-primary/70 mt-0.5 w-5 flex-shrink-0">
                        {service.number}
                      </span>
                      <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors leading-snug">
                        {service.title}
                      </span>
                    </Link>
                  ))}
                  <div className="border-t border-white/[0.06] mt-2 pt-2">
                    <a
                      href="/#servicos"
                      onClick={goToServicesSection}
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-medium text-primary bg-primary/5 hover:bg-primary/10 transition-colors group/all"
                    >
                      Ver todos os serviços
                      <ArrowRight size={14} width={14} height={14} aria-hidden="true" className="group-hover/all:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Links intermédios */}
          {middleLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick(link.href)}
              className="nav-link-hover text-sm xl:text-base text-muted-foreground hover:text-foreground transition-colors duration-200 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}

          {/* Blog (link direto com scroll down para a secção #blog) */}
          <a
            href="/#blog"
            onClick={goToBlogSection}
            className="nav-link-hover text-sm xl:text-base text-muted-foreground hover:text-foreground transition-colors duration-200 whitespace-nowrap"
          >
            Blog
          </a>

          {/* Contactos */}
          <a
            href="/#contacto"
            onClick={handleNavClick("/#contacto")}
            className="nav-link-hover text-sm xl:text-base text-muted-foreground hover:text-foreground transition-colors duration-200 whitespace-nowrap"
          >
            Contactos
          </a>
        </div>

        {/* Spacer to balance logo width */}
        <div className="hidden lg:flex items-center w-[100px] flex-shrink-0 justify-end">
          <button
            onClick={toggleTheme}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile/Tablet drawer */}
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <button
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
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
              <nav className="flex flex-col gap-2 overflow-y-auto">
                <SheetClose asChild>
                  <a
                    href="/#o-que-fazemos"
                    onClick={handleNavClick("/#o-que-fazemos")}
                    className="text-left text-lg font-display font-medium text-muted-foreground hover:text-foreground hover:bg-white/[0.05] rounded-lg px-4 py-3 transition-all duration-200"
                  >
                    Sobre
                  </a>
                </SheetClose>

                {/* Serviços (expansível) */}
                <button
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                  aria-expanded={mobileServicesOpen}
                  className="flex items-center justify-between text-left text-lg font-display font-medium text-muted-foreground hover:text-foreground hover:bg-white/[0.05] rounded-lg px-4 py-3 transition-all duration-200"
                >
                  Serviços
                  <ChevronDown
                    size={18}
                    width={18}
                    height={18}
                    aria-hidden="true"
                    className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="flex flex-col gap-1 pl-3 border-l border-white/10 ml-4">
                    {services.map((service) => (
                      <SheetClose asChild key={service.slug}>
                        <Link
                          to={service.path}
                          className="flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/[0.05] rounded-lg px-3 py-2.5 transition-all duration-200"
                        >
                          <span className="text-primary/70 font-semibold w-5 flex-shrink-0">
                            {service.number}
                          </span>
                          <span className="leading-snug">{service.title}</span>
                        </Link>
                      </SheetClose>
                    ))}
                    <SheetClose asChild>
                      <a
                        href="/#servicos"
                        onClick={goToServicesSection}
                        className="text-sm text-muted-foreground/80 hover:text-foreground hover:bg-white/[0.05] rounded-lg px-3 py-2.5 transition-all duration-200"
                      >
                        Ver todos os serviços
                      </a>
                    </SheetClose>
                  </div>
                )}

                {/* Links intermédios */}
                {middleLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      onClick={handleNavClick(link.href)}
                      className="text-left text-lg font-display font-medium text-muted-foreground hover:text-foreground hover:bg-white/[0.05] rounded-lg px-4 py-3 transition-all duration-200"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}

                {/* Blog (link direto com scroll down para a secção #blog) */}
                <SheetClose asChild>
                  <a
                    href="/#blog"
                    onClick={goToBlogSection}
                    className="text-left text-lg font-display font-medium text-muted-foreground hover:text-foreground hover:bg-white/[0.05] rounded-lg px-4 py-3 transition-all duration-200"
                  >
                    Blog
                  </a>
                </SheetClose>

                {/* Contactos */}
                <SheetClose asChild>
                  <a
                    href="/#contacto"
                    onClick={handleNavClick("/#contacto")}
                    className="text-left text-lg font-display font-medium text-muted-foreground hover:text-foreground hover:bg-white/[0.05] rounded-lg px-4 py-3 transition-all duration-200"
                  >
                    Contactos
                  </a>
                </SheetClose>
              </nav>

              {/* Theme toggle + Footer */}
              <div className="mt-auto pt-8 border-t border-white/[0.06] flex items-center justify-between">
                <p className="text-xs text-muted-foreground/60">
                  © {new Date().getFullYear()} i9 Learning
                </p>
                <button
                  onClick={toggleTheme}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  aria-label={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;