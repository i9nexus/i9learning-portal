import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-background">
      {/* Padding superior fixo para compensar a Navbar (160px no desktop) */}
      <div className="pt-32 md:pt-44 lg:pt-52 w-full"></div>
      
      <div className="relative z-10 container-narrow mx-auto px-4 sm:px-6 text-center flex-1 flex flex-col items-center">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8 opacity-0 animate-fade-up max-w-4xl mx-auto"
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
          <Button size="lg" className="rounded-full px-8 text-base">
            Solicitar Demonstração
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 text-base">
            Ver Soluções
          </Button>
        </div>
      </div>
      
      {/* Background Decorativo */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
      </div>
    </section>
  );
};

export default Hero;
