import { Smartphone, Sparkles, BarChart3, Lightbulb } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const benefits = [
  {
    icon: Smartphone,
    title: "Flexibilidade Total",
    description: "Aprendizagem ao ritmo do utilizador, em qualquer dispositivo e a qualquer hora — sem limitações geográficas ou de horário.",
  },
  {
    icon: Sparkles,
    title: "Engajamento Superior",
    description: "Conteúdos que cativam através de interatividade, storytelling e gamificação, maximizando a motivação dos formandos.",
  },
  {
    icon: BarChart3,
    title: "Dados em Tempo Real",
    description: "Relatórios detalhados de progresso, análise de resultados e insights acionáveis para otimizar continuamente a formação.",
  },
  {
    icon: Lightbulb,
    title: "Inovação Contínua",
    description: "Acesso permanente às últimas tendências de EdTech e Inteligência Artificial aplicada à aprendizagem.",
  },
];

const Benefits = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="beneficios" className="section-padding" ref={ref}>
      <div className="container-narrow mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Porquê a{" "}
            <span className="text-gradient">i9 Learning</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Os diferenciais que nos tornam o parceiro ideal para a transformação da sua formação.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`glass-card rounded-xl p-7 hover:border-primary/30 transition-all duration-700 ease-out group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: isVisible ? `${100 * (index + 1)}ms` : "0ms" }}
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
