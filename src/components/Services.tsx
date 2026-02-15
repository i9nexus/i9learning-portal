import { Monitor, Code, Bot, Brain, Puzzle, Lightbulb } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  {
    icon: Monitor,
    title: "Criação e Melhoria de Websites",
    description:
      "Websites rápidos, modernos e otimizados para conversão. Design responsivo e SEO integrado desde o primeiro dia.",
  },
  {
    icon: Code,
    title: "Desenvolvimento de Software",
    description:
      "Aplicações web e mobile à medida, desenvolvidas com as tecnologias mais atuais para escalar com o seu negócio.",
  },
  {
    icon: Bot,
    title: "Automação de Processos",
    description:
      "Integração de ferramentas e fluxos automáticos que eliminam tarefas manuais e reduzem erros operacionais.",
  },
  {
    icon: Brain,
    title: "Soluções com IA",
    description:
      "Inteligência artificial aplicada ao seu negócio: chatbots, análise preditiva, processamento de linguagem natural e muito mais.",
  },
  {
    icon: Puzzle,
    title: "Integrações entre Sistemas",
    description:
      "Conectamos as suas ferramentas e plataformas para criar um ecossistema digital integrado e eficiente.",
  },
  {
    icon: Lightbulb,
    title: "Consultoria Tecnológica",
    description:
      "Diagnóstico digital completo e roadmap personalizado para transformar a tecnologia num motor de crescimento.",
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="servicos" className="section-padding bg-card/30" ref={ref}>
      <div className="container-narrow mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Os nossos{" "}
            <span className="text-gradient">serviços</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Soluções completas para cada etapa da transformação digital do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`glass-card rounded-xl p-7 hover:border-primary/30 transition-all duration-700 ease-out group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: isVisible ? `${100 * (index + 1)}ms` : "0ms" }}
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
