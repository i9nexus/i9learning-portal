import { Globe, Zap, TrendingUp } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const pillars = [
  {
    icon: Globe,
    title: "Presença Digital",
    description:
      "Criamos websites e plataformas que posicionam o seu negócio no digital com design profissional e performance otimizada.",
  },
  {
    icon: Zap,
    title: "Automação Inteligente",
    description:
      "Automatizamos processos repetitivos para que a sua equipa se foque no que realmente importa: fazer crescer o negócio.",
  },
  {
    icon: TrendingUp,
    title: "Estratégia de Crescimento",
    description:
      "Desenvolvemos estratégias digitais baseadas em dados para atrair clientes e aumentar a rentabilidade.",
  },
];

const WhatWeDo = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="o-que-fazemos" className="section-padding" ref={ref}>
      <div className="container-narrow mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Três pilares para o seu{" "}
            <span className="text-gradient">sucesso digital</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Combinamos tecnologia, design e estratégia para entregar resultados concretos ao seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`glass-card rounded-xl p-8 hover:border-primary/30 transition-all duration-700 ease-out group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: isVisible ? `${150 * (index + 1)}ms` : "0ms" }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <pillar.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
