import { Monitor, BookOpen, Brain, Wrench, Search, GraduationCap, X, CheckCircle2, Sparkles, Shield, ArrowRight, Video, Trophy, Settings } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

interface ServiceDetail {
  icon: React.ElementType;
  title: string;
  description: string;
  modal: {
    descricao: string[];
    inclui: string[];
    vantagens: string[];
  };
}

const services: ServiceDetail[] = [
  {
    icon: Monitor,
    title: "Plataformas de eLearning",
    description:
      "Implementamos plataformas eLearning modernas e flexíveis, com desenvolvimento gráfico personalizado, acessíveis em qualquer dispositivo.",
    modal: {
      descricao: [
        "Implementação e gestão de plataformas baseadas em Moodle, focadas na experiência do utilizador e nas necessidades específicas de cada organização.",
        "Cada plataforma é configurada à medida, garantindo que a interface, os fluxos de navegação e os processos de inscrição e certificação se adaptam perfeitamente ao contexto formativo do cliente.",
        "Trabalhamos com as versões mais recentes do Moodle e plugins cuidadosamente selecionados, assegurando desempenho, estabilidade e uma experiência de aprendizagem de excelência para formandos e formadores.",
      ],
      inclui: [
        "Instalação técnica em servidor dedicado ou cloud, com configuração otimizada de desempenho",
        "Parametrização essencial: inscrições, certificados, relatórios, notificações e integrações",
        "Design gráfico personalizado com identidade visual da organização (logótipo, cores, tipografia)",
        "Configuração de perfis de utilizador (administrador, formador, formando) com permissões diferenciadas",
        "Integração com sistemas externos (SSO, videoconferência, sistemas de gestão de formação)",
      ],
      vantagens: [
        "Totalmente responsivo — acesso perfeito em desktop, tablet e smartphone",
        "Sem limite de utilizadores, cursos ou conteúdos alojados na plataforma",
        "Em conformidade com as normas da DGERT, IEFP e outras entidades reguladoras de formação",
        "Atualizações contínuas e compatibilidade com os mais recentes standards do eLearning (SCORM, xAPI)",
        "Redução significativa de custos operacionais face à formação presencial tradicional",
      ],
    },
  },
  {
    icon: BookOpen,
    title: "Criação de Cursos Online",
    description:
      "Desenvolvemos cursos desde o zero ou a partir dos materiais do cliente, enriquecidos com conteúdos multimédia, atividades interativas e gamificação.",
    modal: {
      descricao: [
        "Desenvolvimento de conteúdos interativos do zero ou a partir de materiais existentes, transformando documentos estáticos em experiências de aprendizagem envolventes e eficazes.",
        "A nossa equipa de designers instrucionais e produtores multimédia trabalha em conjunto para criar cursos que maximizam a retenção de conhecimento através de narrativas visuais, interatividade e avaliações contextualizadas.",
        "Cada curso é desenhado com objetivos pedagógicos claros, garantindo que o percurso de aprendizagem é progressivo, intuitivo e alinhado com as competências que se pretende desenvolver.",
      ],
      inclui: [
        "Design instrucional completo com definição de objetivos, conteúdos e estratégias de avaliação",
        "Produção multimédia profissional: vídeo, áudio, motion graphics e animações 2D/3D",
        "Design de ambiente virtual imersivo com navegação intuitiva",
        "Atividades interativas de avaliação: quizzes, drag & drop, cenários ramificados e simulações",
        "Implementação de estratégias de gamificação: badges, leaderboards e progressão por níveis",
      ],
      vantagens: [
        "Conteúdos exportáveis em formato SCORM 1.2 e 2004, compatíveis com qualquer LMS",
        "Alta interatividade que aumenta o engagement e a taxa de conclusão dos cursos",
        "Estratégias de gamificação que motivam e promovem a competição saudável entre formandos",
        "Conteúdos acessíveis e inclusivos, seguindo normas WCAG de acessibilidade digital",
        "Possibilidade de atualização e reutilização modular dos conteúdos produzidos",
      ],
    },
  },
  {
    icon: Video,
    title: "Criação de Conteúdos Digitais",
    description:
      "Produzimos vídeos explicativos, animações e elementos multimédia de alta qualidade que transformam conceitos complexos em experiências visuais memoráveis.",
    modal: {
      descricao: [
        "Produção profissional de conteúdos digitais multimédia — desde vídeos explicativos e animações 2D/3D até infografias interativas e simulações — concebidos para maximizar a compreensão e a retenção de conhecimento.",
        "A nossa equipa criativa combina storytelling visual, design de movimento e técnicas pedagógicas avançadas para criar materiais que captam a atenção do formando desde o primeiro segundo e mantêm o envolvimento ao longo de todo o percurso.",
        "Cada conteúdo é produzido com rigor técnico e criativo, otimizado para múltiplos formatos e dispositivos, garantindo uma experiência consistente e de alta qualidade em qualquer ecrã.",
      ],
      inclui: [
        "Produção de vídeos explicativos com locução profissional, legendagem e motion graphics",
        "Criação de animações 2D e 3D para ilustrar processos, fluxos e conceitos abstratos",
        "Design de infografias interativas e elementos visuais dinâmicos para enriquecer os cursos",
        "Produção de screencasts e tutoriais passo-a-passo com anotações e destaques visuais",
        "Edição e pós-produção profissional com color grading, sound design e efeitos visuais",
      ],
      vantagens: [
        "Aumento comprovado de até 65% na retenção de conhecimento face a conteúdos apenas textuais",
        "Conteúdos reutilizáveis e modulares — atualize secções sem refazer o vídeo completo",
        "Compatibilidade total com LMS, redes sociais e plataformas de vídeo (YouTube, Vimeo)",
        "Identidade visual consistente com a marca da organização em todos os materiais produzidos",
        "Entrega em múltiplos formatos e resoluções (4K, Full HD, mobile-optimized) para máxima flexibilidade",
      ],
    },
  },
  {
    icon: Trophy,
    title: "Gamificação e Experiência do Aluno",
    description:
      "Implementamos estratégias de gamificação que transformam a aprendizagem numa experiência envolvente, com rankings, badges e dinâmicas motivacionais.",
    modal: {
      descricao: [
        "Desenvolvimento e implementação de mecânicas de gamificação cientificamente fundamentadas que aumentam o envolvimento, a motivação intrínseca e as taxas de conclusão dos programas de formação.",
        "Desenhamos experiências de aprendizagem que combinam elementos de jogo — pontos, níveis, desafios e recompensas — com objetivos pedagógicos claros, criando um equilíbrio perfeito entre diversão e eficácia formativa.",
        "A nossa abordagem vai além dos simples badges: criamos narrativas imersivas, percursos adaptativos e dinâmicas sociais que fomentam a colaboração e a competição saudável entre formandos.",
      ],
      inclui: [
        "Desenho de sistemas de pontos, níveis e progressão alinhados com os objetivos pedagógicos do curso",
        "Criação de badges e certificados digitais personalizados que validam competências adquiridas",
        "Implementação de leaderboards e rankings com filtros por equipa, departamento ou período",
        "Desenvolvimento de desafios, missões e cenários interativos com recompensas desbloqueáveis",
        "Configuração de notificações motivacionais e lembretes inteligentes para manter o engagement",
      ],
      vantagens: [
        "Aumento médio de 40% nas taxas de conclusão dos cursos com mecânicas de gamificação",
        "Maior envolvimento dos formandos — sessões mais longas e retorno mais frequente à plataforma",
        "Dados acionáveis sobre motivação e comportamento dos utilizadores para melhoria contínua",
        "Reforço positivo que promove a autonomia e a responsabilidade na aprendizagem",
        "Possibilidade de integrar recompensas reais (certificações, prémios) ao sistema de gamificação",
      ],
    },
  },
  {
    icon: Settings,
    title: "Soluções Técnicas Avançadas",
    description:
      "Desenvolvemos integrações técnicas complexas — SSO, eCommerce, sistemas multilingue e ferramentas de controlo e monitorização avançadas.",
    modal: {
      descricao: [
        "Implementação de soluções técnicas avançadas que estendem as capacidades nativas das plataformas de eLearning, permitindo integrações empresariais complexas e funcionalidades de controlo à medida das necessidades de cada organização.",
        "Especializamo-nos em projetos de elevada complexidade técnica que exigem desenvolvimento personalizado — desde autenticação federada e gateways de pagamento até sistemas de gestão multilingue e ferramentas de compliance formativo.",
        "Cada solução é arquitetada com foco na escalabilidade, segurança e manutenibilidade, seguindo as melhores práticas de desenvolvimento e integração de sistemas empresariais.",
      ],
      inclui: [
        "Integração SSO (Single Sign-On) com Active Directory, SAML 2.0, OAuth e Azure AD",
        "Configuração de eCommerce para venda de cursos com gateways de pagamento (Stripe, PayPal, MB Way)",
        "Implementação de sistemas multilingue completos com gestão de traduções e conteúdos localizados",
        "Desenvolvimento de ferramentas de registo de presenças com validação biométrica ou por código",
        "Criação de dashboards de controlo com sumários automáticos e tempos de permanência por módulo",
      ],
      vantagens: [
        "Experiência de autenticação única e segura para os utilizadores em todo o ecossistema digital",
        "Monetização direta dos conteúdos formativos com checkout otimizado e relatórios financeiros",
        "Alcance global com suporte nativo a múltiplos idiomas e adaptação cultural dos conteúdos",
        "Conformidade total com requisitos regulatórios de registo de assiduidade e carga horária",
        "Visibilidade completa sobre o progresso e envolvimento dos formandos através de analytics avançados",
      ],
    },
  },
  {
    icon: Brain,
    title: "Soluções de IA para eLearning",
    description:
      "Integramos Inteligência Artificial em plataformas e cursos para personalizar a experiência de aprendizagem e otimizar a gestão do seu eLearning.",
    modal: {
      descricao: [
        "Integração de soluções de Inteligência Artificial para potenciar a aprendizagem e automatizar processos pedagógicos e administrativos de forma inteligente.",
        "Utilizamos modelos de IA de última geração para criar experiências de aprendizagem adaptativas, onde o conteúdo se ajusta automaticamente ao ritmo, nível de conhecimento e estilo de aprendizagem de cada formando.",
        "As nossas soluções de IA permitem aos formadores focar-se no que realmente importa — ensinar — enquanto a tecnologia trata da análise de dados, geração de relatórios e personalização do percurso formativo.",
      ],
      inclui: [
        "Implementação de tutores virtuais inteligentes com processamento de linguagem natural",
        "Geração automática de sumários, resumos e materiais de estudo a partir de conteúdos existentes",
        "Análise preditiva de desempenho com identificação precoce de formandos em risco de desistência",
        "Sistemas de recomendação de conteúdos baseados no perfil e progresso de cada utilizador",
        "Ferramentas de avaliação automática com feedback contextualizado e instantâneo",
      ],
      vantagens: [
        "Personalização da aprendizagem em tempo real, adaptando-se ao ritmo de cada formando",
        "Redução drástica do trabalho administrativo do formador (até 60% menos tempo em tarefas repetitivas)",
        "Insights acionáveis sobre o desempenho individual e coletivo dos formandos",
        "Melhoria contínua dos conteúdos com base em dados reais de utilização e feedback",
        "Escalabilidade: suporte a milhares de formandos sem perda de qualidade na experiência",
      ],
    },
  },
  {
    icon: Wrench,
    title: "Suporte & Manutenção",
    description:
      "Fornecemos suporte técnico a plataformas e cursos eLearning, abrangendo a sua gestão, manutenção e otimização para garantir o melhor serviço.",
    modal: {
      descricao: [
        "Apoio especializado 24x7 para garantir a estabilidade, segurança e desempenho contínuo da sua operação digital de formação.",
        "A nossa equipa de suporte monitoriza proativamente as plataformas, identificando e resolvendo potenciais problemas antes que afetem os utilizadores finais.",
        "Oferecemos diferentes níveis de suporte (SLA) adaptados à dimensão e necessidades de cada organização, com tempos de resposta garantidos e canais de comunicação dedicados.",
      ],
      inclui: [
        "Resolução de problemas técnicos com diagnóstico especializado e tempos de resposta garantidos",
        "Gestão de backups automatizados (diários, semanais, mensais) com política de retenção configurável",
        "Atualizações de segurança e patches críticos aplicados em janelas de manutenção planeadas",
        "Instalação, configuração e atualização de plugins e módulos complementares",
        "Monitorização contínua de desempenho, uptime e alertas automáticos de anomalias",
      ],
      vantagens: [
        "Continuidade de negócio garantida com SLA de disponibilidade até 99,9%",
        "Resposta rápida a incidentes técnicos — resolução em minutos, não em dias",
        "Tranquilidade total: a sua equipa foca-se na formação, nós tratamos da tecnologia",
        "Relatórios periódicos de estado da plataforma com recomendações de melhoria",
        "Custos previsíveis com planos de suporte mensais ou anuais sem surpresas",
      ],
    },
  },
  {
    icon: Search,
    title: "Consultoria Especializada",
    description:
      "Prestamos apoio estratégico e auditorias técnicas para otimizar plataformas e conteúdos, garantindo o máximo desempenho e impacto do seu eLearning.",
    modal: {
      descricao: [
        "Estratégia e aconselhamento especializado para a transformação digital de centros de formação, empresas e instituições de ensino.",
        "Realizamos um diagnóstico profundo do ecossistema tecnológico e pedagógico existente, identificando oportunidades de melhoria e definindo um roadmap claro para a evolução digital.",
        "A nossa abordagem é pragmática e orientada a resultados, combinando conhecimento técnico profundo com experiência real em projetos de eLearning de grande escala.",
      ],
      inclui: [
        "Auditoria completa de ecossistemas digitais existentes (plataformas, conteúdos, processos)",
        "Análise e recomendação de stack tecnológica adequada aos objetivos e orçamento",
        "Otimização de workflows de formação: desde a conceção à certificação",
        "Definição de estratégia de migração e transição entre plataformas quando necessário",
        "Benchmarking com as melhores práticas do setor e análise competitiva",
      ],
      vantagens: [
        "Decisões informadas baseadas em dados concretos e análise técnica especializada",
        "Alinhamento tecnológico completo com os objetivos estratégicos de negócio",
        "Redução de riscos na adoção de novas tecnologias com validação prévia",
        "Visão independente e imparcial — recomendamos a melhor solução, não a mais cara",
        "Acompanhamento pós-consultoria para garantir a correta implementação das recomendações",
      ],
    },
  },
  {
    icon: GraduationCap,
    title: "Formação Personalizada",
    description:
      "Desenvolvemos programas de formação adaptados às necessidades da sua equipa, disponíveis em videoconferência ou cursos de microlearning.",
    modal: {
      descricao: [
        "Programas de capacitação desenhados à medida para equipas pedagógicas, técnicas e administradores de sistemas de gestão de aprendizagem.",
        "Acreditamos que a tecnologia só gera impacto quando as pessoas sabem utilizá-la. Por isso, desenvolvemos formações práticas, hands-on, que transformam utilizadores básicos em power users das plataformas.",
        "Os nossos programas combinam sessões síncronas (presenciais ou por videoconferência) com materiais assíncronos de microlearning, permitindo flexibilidade total na aprendizagem.",
      ],
      inclui: [
        "Formação de formadores para o digital: boas práticas pedagógicas em ambiente online",
        "Formação em gestão avançada de LMS (Moodle e outras plataformas)",
        "Workshops práticos de criação de conteúdos eLearning autónoma (Articulate, H5P, Canva)",
        "Programas de certificação interna com avaliação de competências adquiridas",
        "Materiais de apoio e guias de referência rápida para consulta posterior",
      ],
      vantagens: [
        "Autonomia total da sua equipa na gestão diária da plataforma e conteúdos",
        "Redução da dependência de fornecedores externos para tarefas operacionais",
        "Formação adaptada ao nível de conhecimento e ritmo de cada participante",
        "Certificação reconhecida que valoriza o currículo dos colaboradores",
        "Suporte pós-formação durante 30 dias para esclarecimento de dúvidas",
      ],
    },
  },
];
const tabIcons = {
  descricao: Sparkles,
  inclui: CheckCircle2,
  vantagens: Shield,
};

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
                {service.modal.descricao.map((t, i) => <p key={i}>{t}</p>)}
                {service.modal.inclui.map((t, i) => <p key={i}>{t}</p>)}
                {service.modal.vantagens.map((t, i) => <p key={i}>{t}</p>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modals with Framer Motion */}
      <AnimatePresence>
        {openIndex !== null && (
          <DialogPrimitive.Root open onOpenChange={(open) => !open && setOpenIndex(null)}>
            <DialogPrimitive.Portal forceMount>
              <DialogPrimitive.Overlay asChild forceMount>
                <motion.div
                  className="fixed inset-0 z-50 bg-black/60 backdrop-blur-[8px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setOpenIndex(null)}
                />
              </DialogPrimitive.Overlay>
              <DialogPrimitive.Content asChild forceMount onEscapeKeyDown={() => setOpenIndex(null)}>
                <motion.div
                  className={cn(
                    "fixed left-[50%] top-[50%] z-50 w-[95vw] max-w-2xl max-h-[90vh]",
                    "border border-primary/20 bg-background/90 backdrop-blur-2xl shadow-2xl shadow-primary/10 rounded-2xl",
                    "p-0 overflow-hidden outline-none"
                  )}
                  initial={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
                  animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                  exit={{ opacity: 0, scale: 0.95, x: "-50%", y: "-50%" }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  {(() => {
                    const service = services[openIndex];
                    return (
                      <>
                        {/* Glow effect */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

                        {/* Header */}
                        <div className="relative p-6 pb-4 flex items-start gap-4 border-b border-border/50">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                            <service.icon size={24} className="text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <DialogPrimitive.Title className="font-display text-xl font-bold">{service.title}</DialogPrimitive.Title>
                            <p className="text-muted-foreground text-sm mt-1">{service.description}</p>
                          </div>
                          <button
                            onClick={() => setOpenIndex(null)}
                            className="rounded-full p-2 hover:bg-muted transition-colors shrink-0 -mt-1 -mr-1"
                          >
                            <X size={18} className="text-muted-foreground" />
                            <span className="sr-only">Fechar</span>
                          </button>
                        </div>

                        {/* Tabs with animated content */}
                        <ModalTabs service={service} onClose={() => setOpenIndex(null)} />
                      </>
                    );
                  })()}
                </motion.div>
              </DialogPrimitive.Content>
            </DialogPrimitive.Portal>
          </DialogPrimitive.Root>
        )}
      </AnimatePresence>
    </section>
  );
};

const ModalTabs = ({ service, onClose }: { service: ServiceDetail; onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState<"descricao" | "inclui" | "vantagens">("descricao");

  const handleCTA = () => {
    onClose();
    setTimeout(() => {
      document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
    }, 350);
  };

  const tabContent = {
    descricao: (
      <div className="space-y-4">
        {service.modal.descricao.map((paragraph, i) => (
          <p key={i} className="text-muted-foreground text-sm leading-relaxed">{paragraph}</p>
        ))}
      </div>
    ),
    inclui: (
      <ul className="space-y-3">
        {service.modal.inclui.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
            <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    ),
    vantagens: (
      <ul className="space-y-3">
        {service.modal.vantagens.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
            <Shield size={16} className="text-primary shrink-0 mt-0.5" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    ),
  };

  return (
    <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as typeof activeTab)} className="w-full">
      <div className="px-6 pt-4">
        <TabsList className="w-full bg-muted/40 h-11 rounded-xl p-1">
          {(["descricao", "inclui", "vantagens"] as const).map((tab) => {
            const Icon = tabIcons[tab];
            const labels = { descricao: "Descrição", inclui: "O que inclui", vantagens: "Vantagens" };
            return (
              <TabsTrigger
                key={tab}
                value={tab}
                className="flex-1 text-xs sm:text-sm gap-1.5 rounded-lg data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all"
              >
                <Icon size={14} className="hidden sm:inline-block" />
                {labels[tab]}
              </TabsTrigger>
            );
          })}
        </TabsList>
      </div>

      <div className="p-6 pt-5 overflow-y-auto max-h-[50vh] scrollbar-hide">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {tabContent[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CTA */}
      <div className="px-6 pb-6 pt-2 border-t border-border/50">
        <button
          onClick={handleCTA}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground font-semibold py-3 text-sm hover:bg-primary/90 transition-colors"
        >
          Pedir Orçamento
          <ArrowRight size={16} />
        </button>
      </div>
    </Tabs>
  );
};

export default Services;
