import { BarChart3, Target, Bot, Cpu, Eye, HeartHandshake } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const benefits = [
  {
    icon: BarChart3,
    title: "Resultados Mensuráveis",
    description: "Cada projeto é acompanhado com métricas claras para garantir retorno real sobre o investimento.",
  },
  {
    icon: Target,
    title: "Soluções à Medida",
    description: "Cada projeto é único. Desenhamos soluções personalizadas que se ajustam ao seu contexto.",
  },
  {
    icon: Bot,
    title: "Automação Inteligente",
    description: "Processos automáticos que eliminam tarefas repetitivas e libertam a sua equipa para o essencial.",
  },
  {
    icon: Cpu,
    title: "Tecnologia Aplicada",
    description: "Utilizamos as tecnologias mais atuais e comprovadas para garantir soluções robustas e escaláveis.",
  },
  {
    icon: Eye,
    title: "Visão Estratégica",
    description: "Não nos limitamos à execução técnica — pensamos estrategicamente no crescimento do seu negócio.",
  },
  {
    icon: HeartHandshake,
    title: "Parceria Contínua",
    description: "Mais do que fornecedores, somos parceiros que crescem consigo e com o seu negócio.",
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
            <span className="text-gradient">i9 Nexus</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Os nossos diferenciais que nos tornam o parceiro ideal para a sua transformação digital.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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
