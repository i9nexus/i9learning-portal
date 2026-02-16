import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  const handleContactScroll = () => {
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleServices = () => {
    document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollDown = () => {
    document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background - Limpo (sem o ponto branco) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] max-w-[600px] h-[80vw] max-h-[600px] bg-primary/5 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-0 left-0 w-[60vw] max-w-[400px] h-[60vw] max-h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container-narrow mx-auto px-4 sm:px-6 md:px-8 text-center flex-1 flex flex-col items-center justify-center">
        <h1
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Transforme a sua Formação <br className="hidden sm:block" />
          com <span className="text-gradient">Tecnologia e IA</span>
        </h1>

        <p
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          Desenvolvemos soluções de formação online que transformam conteúdos em experiências eficazes e orientadas para
          resultados.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto opacity-0 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <button
            onClick={handleContactScroll}
            className="w-full sm:w-auto bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
          >
            Falar com Especialista
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={handleServices}
            className="w-full sm:w-auto border border-border/50 text-foreground hover:bg-secondary/50 transition-colors px-8 py-3.5 rounded-lg text-base font-semibold"
          >
            Conheça os Nossos Serviços
          </button>
        </div>

        <button
          onClick={handleScrollDown}
          className="relative z-10 mt-8 sm:mt-10 border border-muted-foreground/30 rounded-full p-2.5 text-muted-foreground/60 hover:text-foreground hover:border-primary/40 transition-all duration-300 opacity-0 animate-fade-up group"
          style={{ animationDelay: "0.7s" }}
          aria-label="Scroll para serviços"
        >
          <ChevronDown size={18} className="animate-bounce" />
        </button>
      </div>

      {/* Espaçador de fundo para equilibrar o layout como no Nexus */}
      <div className="h-16 sm:h-24 md:h-32 w-full" />
    </section>
  );
};

export default Hero;
