import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const metrics = [
  {
    value: 40,
    prefix: "+",
    suffix: "%",
    label: "Retenção de Conhecimento",
    description: "Aumento significativo na retenção através de metodologias interativas e gamificação.",
  },
  {
    value: 60,
    prefix: "-",
    suffix: "%",
    label: "Custos Operacionais",
    description: "Redução drástica nos custos de formação em comparação com o modelo presencial.",
  },
  {
    value: 100,
    prefix: "",
    suffix: "%",
    label: "Escalabilidade",
    description: "Acesso total para equipas globais, em qualquer dispositivo, 24 horas por dia.",
  },
];

const AnimatedNumber = ({ value, prefix, suffix, triggerAnimation }: { value: number; prefix: string; suffix: string; triggerAnimation: boolean }) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (triggerAnimation && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 1500;
      const start = performance.now();

      const animate = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * value));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [triggerAnimation, value]);

  return (
    <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">
      {prefix}{count}
      {suffix}
    </div>
  );
};

const ImpactMetrics = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="impacto" className="section-padding bg-card/30" ref={ref}>
      <div className="container-narrow mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Resultados que fazem{" "}
            <span className="text-gradient">a diferença</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Métricas concretas que demonstram o impacto das nossas soluções de eLearning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`glass-card rounded-xl p-7 text-center transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: isVisible ? `${150 * (index + 1)}ms` : "0ms" }}
            >
              <AnimatedNumber value={metric.value} prefix={metric.prefix} suffix={metric.suffix} triggerAnimation={isVisible} />
              <h3 className="font-display text-sm font-semibold mt-3 mb-1">{metric.label}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
