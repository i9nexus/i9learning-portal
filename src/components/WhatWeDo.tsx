import { BookOpen, Zap, TrendingUp } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const pillars = [
  {
    icon: BookOpen,
    title: "Plataformas de Formação",
    description:
      "Implementamos e personalizamos ecossistemas LMS completos que centralizam toda a experiência formativa da sua organização.",
  },
  {
    icon: Zap,
    title: "Conteúdos Interativos",
    description:
      "Produzimos conteúdos multimédia envolventes — vídeo, gamificação e storytelling — que maximizam a retenção de conhecimento.",
  },
  {
    icon: TrendingUp,
    title: "Estratégia Pedagógica",
    description:
      "Desenhamos percursos de aprendizagem baseados em dados e IA, alinhados com os objetivos de crescimento da sua organização.",
  },
];

const WhatWeDo = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="o-que-fazemos" className="section-padding" ref={ref} aria-label="Pilares de formação online da i9 Learning">
      <div className="container-narrow mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Três pilares para o seu{" "}
            <span className="text-gradient">sucesso formativo</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Combinamos tecnologia, pedagogia e estratégia para entregar experiências de aprendizagem transformadoras.
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
