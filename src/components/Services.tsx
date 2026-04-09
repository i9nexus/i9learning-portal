import { Monitor, BookOpen, Brain, Wrench, Search, GraduationCap } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: Monitor,
    title: "Plataformas de eLearning",
    description:
      "Implementamos plataformas eLearning modernas e flexíveis, com desenvolvimento gráfico personalizado, acessíveis em qualquer dispositivo.",
  },
  {
    icon: BookOpen,
    title: "Criação de Cursos Online",
    description:
      "Desenvolvemos cursos desde o zero ou a partir dos materiais do cliente, enriquecidos com conteúdos multimédia, atividades interativas e gamificação.",
  },
  {
    icon: Brain,
    title: "Soluções de IA para eLearning",
    description:
      "Integramos Inteligência Artificial em plataformas e cursos para personalizar a experiência de aprendizagem e otimizar a gestão do seu eLearning.",
  },
  {
    icon: Wrench,
    title: "Suporte & Manutenção",
    description:
      "Fornecemos suporte técnico a plataformas e cursos eLearning, abrangendo a sua gestão, manutenção e otimização para garantir o melhor serviço.",
  },
  {
    icon: Search,
    title: "Consultoria Especializada",
    description:
      "Prestamos apoio estratégico e auditorias técnicas para otimizar plataformas e conteúdos, garantindo o máximo desempenho e impacto do seu eLearning.",
  },
  {
    icon: GraduationCap,
    title: "Formação Personalizada",
    description:
      "Desenvolvemos programas de formação adaptados às necessidades da sua equipa, disponíveis em videoconferência ou cursos de microlearning.",
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
            Soluções completas para cada etapa da transformação digital da sua formação.
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
