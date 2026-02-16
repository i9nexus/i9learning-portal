import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-background">
      <div className="relative z-10 container-narrow mx-auto px-4 sm:px-6 md:px-8 text-center flex-1 flex flex-col items-center justify-center">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 opacity-0 animate-fade-up max-w-4xl mx-auto"
            style={{ animationDelay: "0.2s" }}>
          Transforme a sua Formação com <br className="hidden md:block" />
          <span className="text-gradient">Tecnologia e IA</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-10 opacity-0 animate-fade-up max-w-3xl mx-auto leading-relaxed"
           style={{ animationDelay: "0.4s" }}>
          Desenvolvemos soluções de formação online personalizadas que transformam conteúdos em experiências digitais eficazes e orientadas para resultados.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
             style={{ animationDelay: "0.6s" }}>
          <Button size="lg" className="rounded-full px-8 text-base group">
            Solicitar Demonstração
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 text-base">
            Ver Soluções
          </Button>
        </div>
      </div>
      
      {/* Background Decorativo - Mantém a estética original */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
      </div>
    </section>
  );
};

export default Hero;
