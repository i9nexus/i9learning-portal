import { Monitor, BookOpen, Brain, Wrench, Search, GraduationCap, X } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ServiceDetail {
  icon: React.ElementType;
  title: string;
  description: string;
  modal: {
    descricao: string;
    inclui: string;
    vantagens: string;
  };
}

const services: ServiceDetail[] = [
  {
    icon: Monitor,
    title: "Plataformas de eLearning",
    description:
      "Implementamos plataformas eLearning modernas e flexíveis, com desenvolvimento gráfico personalizado, acessíveis em qualquer dispositivo.",
    modal: {
      descricao: "Implementação e gestão de plataformas baseadas em Moodle, focadas na experiência do utilizador.",
      inclui: "Instalação técnica, parametrização essencial e design gráfico personalizado.",
      vantagens: "Totalmente responsivo, sem limite de utilizadores ou cursos, e em conformidade com as normas das entidades reguladoras de formação.",
    },
  },
  {
    icon: BookOpen,
    title: "Criação de Cursos Online",
    description:
      "Desenvolvemos cursos desde o zero ou a partir dos materiais do cliente, enriquecidos com conteúdos multimédia, atividades interativas e gamificação.",
    modal: {
      descricao: "Desenvolvimento de conteúdos interativos do zero ou a partir de materiais existentes.",
      inclui: "Design de ambiente virtual, produção multimédia (Vídeo, Áudio, Motion Graphics) e atividades de avaliação.",
      vantagens: "Conteúdos em formato SCORM, alta interatividade e estratégias de gamificação integradas.",
    },
  },
  {
    icon: Brain,
    title: "Soluções de IA para eLearning",
    description:
      "Integramos Inteligência Artificial em plataformas e cursos para personalizar a experiência de aprendizagem e otimizar a gestão do seu eLearning.",
    modal: {
      descricao: "Integração de soluções de IA para potenciar a aprendizagem e automatizar processos.",
      inclui: "Implementação de tutores virtuais inteligentes, geração automática de sumários e análise preditiva de desempenho.",
      vantagens: "Personalização da aprendizagem em tempo real e redução drástica do trabalho administrativo do formador.",
    },
  },
  {
    icon: Wrench,
    title: "Suporte & Manutenção",
    description:
      "Fornecemos suporte técnico a plataformas e cursos eLearning, abrangendo a sua gestão, manutenção e otimização para garantir o melhor serviço.",
    modal: {
      descricao: "Apoio especializado 24x7 para garantir a estabilidade da sua operação digital.",
      inclui: "Resolução de problemas, gestão de backups, atualizações de segurança e instalação de plugins.",
      vantagens: "Continuidade de negócio garantida e resposta rápida a incidentes técnicos.",
    },
  },
  {
    icon: Search,
    title: "Consultoria Especializada",
    description:
      "Prestamos apoio estratégico e auditorias técnicas para otimizar plataformas e conteúdos, garantindo o máximo desempenho e impacto do seu eLearning.",
    modal: {
      descricao: "Estratégia e aconselhamento para a transformação digital de centros de formação e empresas.",
      inclui: "Auditoria de ecossistemas digitais, escolha de stack tecnológica e otimização de workflows de formação.",
      vantagens: "Decisões baseadas em dados e alinhamento tecnológico com os objetivos de negócio.",
    },
  },
  {
    icon: GraduationCap,
    title: "Formação Personalizada",
    description:
      "Desenvolvemos programas de formação adaptados às necessidades da sua equipa, disponíveis em videoconferência ou cursos de microlearning.",
    modal: {
      descricao: "Programas de capacitação para equipas pedagógicas e administradores de sistemas.",
      inclui: "Formação de formadores para o digital, gestão avançada de LMS e criação de conteúdos autónoma.",
      vantagens: "Autonomia total da sua equipa na gestão diária da plataforma e conteúdos.",
    },
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">{service.description}</p>
              <button
                onClick={() => setOpenIndex(index)}
                className="text-primary text-sm font-medium hover:text-primary/80 transition-colors inline-flex items-center gap-1"
              >
                Saber mais →
              </button>

              {/* SEO: hidden content rendered in DOM for indexability */}
              <div className="sr-only" aria-hidden="false">
                <p>{service.modal.descricao}</p>
                <p>{service.modal.inclui}</p>
                <p>{service.modal.vantagens}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modals */}
      {services.map((service, index) => (
        <Dialog key={service.title} open={openIndex === index} onOpenChange={(open) => !open && setOpenIndex(null)}>
          <DialogContent className="sm:max-w-lg border-primary/20 bg-background/80 backdrop-blur-xl shadow-2xl shadow-primary/5 p-0 gap-0 overflow-hidden">
            <div className="p-6 pb-4 flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <service.icon size={22} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <DialogTitle className="font-display text-lg font-semibold">{service.title}</DialogTitle>
              </div>
              <DialogClose className="rounded-full p-1.5 hover:bg-muted transition-colors shrink-0 -mt-1 -mr-1">
                <X size={18} className="text-muted-foreground" />
                <span className="sr-only">Fechar</span>
              </DialogClose>
            </div>

            <Tabs defaultValue="descricao" className="w-full">
              <div className="px-6">
                <TabsList className="w-full bg-muted/50 h-10">
                  <TabsTrigger value="descricao" className="flex-1 text-xs sm:text-sm">Descrição</TabsTrigger>
                  <TabsTrigger value="inclui" className="flex-1 text-xs sm:text-sm">O que inclui</TabsTrigger>
                  <TabsTrigger value="vantagens" className="flex-1 text-xs sm:text-sm">Vantagens</TabsTrigger>
                </TabsList>
              </div>
              <div className="p-6 pt-5 min-h-[120px]">
                <TabsContent value="descricao" className="mt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.modal.descricao}</p>
                </TabsContent>
                <TabsContent value="inclui" className="mt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.modal.inclui}</p>
                </TabsContent>
                <TabsContent value="vantagens" className="mt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.modal.vantagens}</p>
                </TabsContent>
              </div>
            </Tabs>
          </DialogContent>
        </Dialog>
      ))}
    </section>
  );
};

export default Services;
