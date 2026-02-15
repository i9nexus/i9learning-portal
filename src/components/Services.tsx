import { Monitor, Film, Users, Wrench, Brain, Puzzle } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  {
    icon: Monitor,
    title: "Implementação de Plataformas eLearning",
    description:
      "Criação de ecossistemas LMS (Moodle e outros) modernos, seguros e altamente escaláveis, adaptados à realidade da sua organização.",
  },
  {
    icon: Film,
    title: "Desenvolvimento e Produção",
    description:
      "Criação de cursos do zero ou a partir dos seus materiais. Produção de conteúdos multimédia interativos e gamificação de elite.",
  },
  {
    icon: Users,
    title: "Consultoria e Formação",
    description:
      "Apoio estratégico no desenho de planos formativos e capacitação especializada para equipas e formadores.",
  },
  {
    icon: Wrench,
    title: "Suporte e Manutenção",
    description:
      "Gestão técnica proativa, monitorização constante e otimização de performance para garantir continuidade total.",
  },
  {
    icon: Brain,
    title: "Soluções de Inteligência Artificial",
    description:
      "Integração de IA para percursos de aprendizagem personalizados, tutoria inteligente e automação de gestão.",
  },
  {
    icon: Puzzle,
    title: "Integração de Recursos Avançados",
    description:
      "Implementação de SSO (Single Sign-On), eCommerce para venda de cursos, sistemas multilingue e ferramentas externas.",
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
