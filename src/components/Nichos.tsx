import { Briefcase, GraduationCap, HeartPulse, ShoppingCart } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const nichos = [
  {
    icon: Briefcase,
    title: "Corporate & Business",
    description:
      "Formação de colaboradores e onboarding digital. Programas de desenvolvimento contínuo que aceleram a produtividade e reforçam a cultura organizacional.",
  },
  {
    icon: GraduationCap,
    title: "Educação & Academia",
    description:
      "Escolas, universidades e centros de formação. Plataformas pedagógicas que potenciam o ensino híbrido e a gestão académica moderna.",
  },
  {
    icon: HeartPulse,
    title: "Saúde & Farma",
    description:
      "Atualização técnica e conformidade regulatória. Soluções de eLearning certificadas que garantem a formação contínua de profissionais de saúde.",
  },
  {
    icon: ShoppingCart,
    title: "Retalho & Serviços",
    description:
      "Treino de equipas de vendas e atendimento ao cliente. Programas interativos que melhoram a experiência do consumidor e os resultados comerciais.",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
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
