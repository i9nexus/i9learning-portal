import { ShoppingCart, HeartPulse, Building2, GraduationCap, Factory, Briefcase, Sparkles, UtensilsCrossed, Store } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const nichos = [
  {
    icon: ShoppingCart,
    title: "E-commerce e Retalho",
    description:
      "Lojas online otimizadas, integrações com gateways de pagamento e automação de inventário para maximizar vendas.",
  },
  {
    icon: HeartPulse,
    title: "Saúde e Clínicas",
    description:
      "Sistemas de agendamento, gestão de pacientes e portais de saúde com foco em segurança e conformidade.",
  },
  {
    icon: Building2,
    title: "Imobiliárias",
    description:
      "Plataformas de listagem de imóveis, CRM integrado e ferramentas de geração de leads para o setor imobiliário.",
  },
  {
    icon: GraduationCap,
    title: "Educação",
    description:
      "Plataformas de e-learning, gestão académica e soluções digitais para instituições de ensino modernas.",
  },
  {
    icon: Factory,
    title: "Indústria",
    description:
      "Automação industrial, monitorização de processos e dashboards de produção para otimizar a eficiência operacional.",
  },
  {
    icon: Briefcase,
    title: "Serviços Profissionais",
    description:
      "Sistemas de gestão, portais de clientes e automação de workflows para escritórios e prestadores de serviços.",
  },
  {
    icon: Sparkles,
    title: "Bem-estar e Estética",
    description:
      "Automação de agendamentos e gestão de clientes para cabeleireiros, spas e centros de estética.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restauração e Hotelaria",
    description:
      "Soluções de pedidos digitais, gestão de reservas e otimização de stocks para o setor do turismo.",
  },
  {
    icon: Store,
    title: "Serviços e Comércio Local",
    description:
      "Digitalização de processos para escritórios (advogados/contabilidade) e automação de vendas para o comércio tradicional.",
  },
];

const Nichos = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="solucoes" className="section-padding" ref={ref}>
      <div className="container-narrow mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Soluções para diferentes{" "}
            <span className="text-gradient">nichos</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Experiência comprovada em diversos setores, com soluções adaptadas às necessidades específicas de cada indústria.
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
