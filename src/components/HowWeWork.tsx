import { Search, PenTool, Rocket, HeadphonesIcon } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico",
    description: "Análise detalhada das necessidades formativas, do público-alvo e dos objetivos estratégicos da organização.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Desenho",
    description: "Definição da estratégia pedagógica e arquitetura da solução, com prazos claros e resultados mensuráveis.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Produção",
    description: "Desenvolvimento tecnológico e criação de conteúdos interativos, com validação técnica e pedagógica em cada fase.",
  },
  {
    number: "04",
    icon: HeadphonesIcon,
    title: "Entrega e Evolução",
    description: "Entrega final da solução com início do suporte opcional, garantindo acompanhamento e melhorias futuras conforme necessário.",
  },
];

const HowWeWork = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="como-trabalhamos" className="section-padding" ref={ref} aria-label="Metodologia de trabalho da i9 Learning">
      <div className="container-narrow mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Como{" "}
            <span className="text-gradient">trabalhamos</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Do primeiro contacto ao lançamento — acompanhamos cada etapa com total transparência.
          </p>
        </div>

        <div className="relative">
          {/* Desktop: horizontal dashed line behind cards */}
          <div
            className={`hidden lg:block absolute top-[140px] left-[12%] right-[12%] h-px border-t border-dashed border-primary/15 z-0 pointer-events-none transition-all duration-1000 ease-out ${isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
            style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
            aria-hidden="true"
          />

          {/* Mobile/Tablet: vertical dashed line behind cards */}
          <div
            className={`lg:hidden absolute top-8 bottom-8 left-1/2 -translate-x-px w-px border-l border-dashed border-primary/15 z-0 pointer-events-none transition-all duration-1000 ease-out ${isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}
            style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative glass-card rounded-xl p-7 text-center group hover:border-primary/30 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: isVisible ? `${150 * (index + 1)}ms` : "0ms" }}
              >
                {/* Sequence dot */}
                <div
                  className={`absolute -top-2.5 left-1/2 -translate-x-1/2 lg:top-[calc(140px-4px)] lg:-left-2.5 lg:translate-x-0 w-2 h-2 rounded-full bg-primary/30 shadow-[0_0_6px_hsl(var(--primary)/0.2)] z-20 transition-all duration-500 ease-out ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"} ${index === 0 ? "hidden" : "hidden lg:block"}`}
                  style={{ transitionDelay: isVisible ? `${200 * (index + 1)}ms` : "0ms" }}
                />

                {/* Number with high contrast */}
                <div className="relative z-20 font-display text-5xl font-bold text-gradient mb-3">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <step.icon size={22} className="text-primary" />
                </div>

                <h3 className="font-display text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
