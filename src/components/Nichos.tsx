import { Briefcase, GraduationCap, HeartPulse, ShoppingCart, Award, Landmark, Factory, UserCog, UtensilsCrossed } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const nichos = [
  {
    icon: Briefcase,
    title: "Corporate & Business",
    description:
      "Academias internas, onboarding digital e conteúdos personalizados. Integração LMS e acompanhamento técnico.",
  },
  {
    icon: GraduationCap,
    title: "Educação & Academia",
    description:
      "Plataformas intuitivas e conteúdos interativos. Digitalização de cursos e suporte a modelos híbridos.",
  },
  {
    icon: HeartPulse,
    title: "Saúde & Indústria Farmacêutica",
    description:
      "Módulos rigorosos e interativos. Estruturação pedagógica em ambientes regulados.",
  },
  {
    icon: ShoppingCart,
    title: "Retalho & Serviços",
    description:
      "Cursos dinâmicos para equipas operacionais com conteúdos adaptados a contextos práticos.",
  },
  {
    icon: Award,
    title: "Formação Profissional & Consultoria",
    description:
      "Conversão de conteúdos presenciais em percursos digitais certificados (SCORM) e apoio técnico.",
  },
  {
    icon: Landmark,
    title: "Banca & Seguros",
    description:
      "Academias digitais para produtos e compliance com avaliação de conhecimentos integrada.",
  },
  {
    icon: Factory,
    title: "Indústria & Engenharia",
    description:
      "Simulações e conteúdos técnicos interativos. Digitalização de manuais com acompanhamento dedicado.",
  },
  {
    icon: UserCog,
    title: "Serviços Profissionais",
    description:
      "Programas formativos especializados com gestão técnica da plataforma.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restauração & Hotelaria",
    description:
      "Digitalização de normas e formação operacional visual, acessível em qualquer dispositivo.",
  },
];

const Nichos = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="solucoes" className="section-padding" ref={ref}>
      <div className="container-narrow mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Mercados onde{" "}
            <span className="text-gradient">atuamos</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Experiência comprovada em setores-chave, com soluções de formação adaptadas às necessidades específicas de cada indústria.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {nichos.map((nicho, index) => (
            <div
              key={nicho.title}
              className={`glass-card rounded-xl p-7 hover:border-primary/30 transition-all duration-700 ease-out group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: isVisible ? `${100 * (index + 1)}ms` : "0ms" }}
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <nicho.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{nicho.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{nicho.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nichos;
