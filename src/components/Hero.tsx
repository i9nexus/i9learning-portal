import { GENERAL_WHATSAPP_URL } from "@/lib/whatsapp";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  const handleScrollToServices = () => {
    document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background - Limpo e Tecnológico */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] max-w-[600px] h-[80vw] max-h-[600px] bg-primary/5 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-0 left-0 w-[60vw] max-w-[400px] h-[60vw] max-h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      {/* Padrão de Grelha (Grid) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container-narrow mx-auto px-4 sm:px-6 md:px-8 text-center flex-1 flex flex-col items-center justify-center">
        {/* Título - 2 linhas */}
        <h1
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Transforme a sua Formação <br className="hidden sm:block" />
          com <span className="text-gradient">Tecnologia e Estratégia</span>
        </h1>

        {/* Descrição Curta - 2 linhas */}
        <p
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          Desenvolvemos soluções de formação online que transformam conteúdos em experiências eficazes e orientadas para
          resultados.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto opacity-0 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          {/* BOTÃO CONTACTOS */}
          <a
            href={GENERAL_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
          >
            Falar com um Consultor
            <ArrowRight size={18} width={18} height={18} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={handleScrollToServices}
            className="w-full sm:w-auto border border-border/50 text-foreground hover:bg-secondary/50 transition-colors px-8 py-3.5 rounded-lg text-base font-semibold"
          >
            Conheça os Nossos Serviços
          </button>
        </div>

        {/* Ícone de Scroll */}
        <button
          onClick={handleScrollToServices}
          className="relative z-10 mt-8 sm:mt-10 border border-muted-foreground/30 rounded-full p-2.5 text-muted-foreground/60 hover:text-foreground hover:border-primary/40 transition-all duration-300 opacity-0 animate-fade-up group"
          style={{ animationDelay: "0.7s" }}
          aria-label="Scroll para serviços"
        >
          <ChevronDown size={18} width={18} height={18} className="animate-bounce" />
        </button>
      </div>

      {/* Espaçador de fundo */}
      <div className="h-16 sm:h-24 md:h-32 w-full" aria-hidden="true" />

      {/* SEO: Hidden semantic content for search engine and AI indexing */}
      <div className="sr-only" aria-hidden="false">
        <h2>i9 Learning — Soluções de eLearning e Formação Online em Portugal</h2>
        <p>A i9 Learning é um portal de soluções especializado em eLearning, e-learning e formação online em Portugal, com sede em Coimbra. Desenvolvemos soluções de formação digital à medida para organizações de todos os setores.</p>
        <h3>Instalação Plataforma Moodle e LMS</h3>
        <p>Instalação de plataforma Moodle e suporte Moodle especializado em Portugal. Implementação e personalização de plataformas LMS Moodle para ambientes corporativos e académicos. Configuração completa com design responsivo, integração SSO (Single Sign-On), compatibilidade total com normas SCORM 1.2, SCORM 2004, xAPI (Experience API / Tin Can API) e LTI (Learning Tools Interoperability). Instalação Moodle em servidor dedicado ou cloud de alta disponibilidade, integração com videoconferência, gestão de inscrições, certificados digitais autenticados e conformidade com os requisitos DGERT e IEFP.</p>
        <h3>Criação de Cursos SCORM, Microlearning e Conteúdos Interativos</h3>
        <p>Criação de curso SCORM e criação de microlearning para formação profissional e corporativa. Produção de cursos eLearning interativos com recurso a ferramentas de autoria de mercado (Articulate Storyline, Rise, iSpring Suite, Adobe Captivate e H5P). Conteúdos exportáveis em SCORM 1.2 e SCORM 2004, compatíveis com qualquer Learning Management System. Produção multimédia, storytelling, desenho instrucional (instructional design), gamificação com medalhas digitais (Open Badges) e estratégias de blended learning. Conformidade WCAG de acessibilidade digital.</p>
        <h3>Inteligência Artificial Aplicada à Formação</h3>
        <p>Soluções de IA e inteligência artificial para eLearning: aprendizagem adaptativa (adaptive learning), tutores virtuais inteligentes, chatbots educativos, geração automática de conteúdos e materiais de estudo, análise preditiva de desempenho, sistemas de recomendação de conteúdos personalizados, avaliação automática com feedback contextualizado. Automação de processos pedagógicos e administrativos com IA.</p>
        <h3>Suporte Moodle, Manutenção e Alojamento LMS</h3>
        <p>Suporte Moodle contínuo e manutenção preventiva de plataformas LMS. Monitorização proativa 24/7, backups diários automatizados, atualizações de segurança do núcleo e módulos, otimização de base de dados e resolução rápida de incidentes com SLA até 99,9%.</p>
        <h3>Consultoria EdTech e Estratégia Digital</h3>
        <p>Consultoria especializada em EdTech, transformação digital da formação, auditoria de ecossistemas digitais, análise de stack tecnológica, otimização de workflows, migração entre plataformas LMS, benchmarking e melhores práticas do setor. Consultoria eLearning em Portugal.</p>
        <h3>Formação Profissional e Formação de Formadores</h3>
        <p>Programas de formação à medida: gestão avançada de LMS Moodle, criação de conteúdos com ferramentas de autoria e H5P, boas práticas pedagógicas online, microlearning, blended learning. Formação de formadores para o digital, workshops práticos, certificação interna. Formação corporativa, formação empresarial, academia corporativa, academia digital.</p>
        <h3>Setores de Atuação</h3>
        <p>Corporate e Business (academias internas, onboarding digital), Educação e Academia, Saúde e Indústria Farmacêutica, Retalho e Serviços, Formação Profissional e Consultoria, Banca e Seguros, Indústria e Engenharia, Serviços Profissionais, Restauração e Hotelaria. Soluções de eLearning para todos os setores em Portugal e PALOP.</p>
        <h3>Tecnologias, Normas e Pesquisas Frequentes</h3>
        <p>Instalação plataforma Moodle, instalação Moodle, suporte Moodle, manutenção Moodle, criação curso SCORM, criação microlearning, SCORM 1.2, SCORM 2004, xAPI, Experience API, Tin Can API, LTI, H5P, Articulate Storyline, Rise, iSpring, Adobe Captivate, Moodle LMS corporativo, SSO, Single Sign-On, eCommerce de cursos online, certificação digital, DGERT, IEFP, WCAG, acessibilidade digital. eLearning Portugal, formação online Portugal, LMS Portugal, Moodle Portugal, consultoria formação online.</p>
      </div>
    </section>
  );
};

export default Hero;
