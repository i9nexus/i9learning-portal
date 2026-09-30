import { ShieldCheck, Sparkles, Activity } from "lucide-react";

interface Stat {
  value: string;
  label: string;
}

interface Row {
  label: string;
  status: string;
}

interface VisualConfig {
  panelTitle: string;
  panelTag: string;
  stats: Stat[];
  rows: Row[];
  footnote: string;
  badge: string;
}

const configs: Record<string, VisualConfig> = {
  "plataformas-elearning": {
    panelTitle: "Moodle LMS",
    panelTag: "Painel",
    stats: [
      { value: "1.248", label: "Formandos" },
      { value: "86", label: "Cursos" },
      { value: "99,9%", label: "Disponível" },
    ],
    rows: [
      { label: "Instalação do Moodle", status: "Concluída" },
      { label: "Tema personalizado", status: "Aplicado" },
      { label: "Conteúdos SCORM", status: "Ativos" },
      { label: "Cópias de segurança", status: "Diárias" },
    ],
    footnote: "Plataforma Moodle pronta a utilizar",
    badge: "LMS Moodle",
  },
  "cursos-conteudos-elearning": {
    panelTitle: "Curso interativo",
    panelTag: "SCORM 2004",
    stats: [
      { value: "12", label: "Módulos" },
      { value: "94%", label: "Conclusão" },
      { value: "4,8", label: "Avaliação" },
    ],
    rows: [
      { label: "Módulo 1 · Introdução", status: "Concluído" },
      { label: "Módulo 2 · Simulação", status: "Em curso" },
      { label: "Quiz de avaliação", status: "Interativo" },
      { label: "Exportação SCORM", status: "1.2 e 2004" },
    ],
    footnote: "Compatível com Moodle e qualquer LMS",
    badge: "SCORM",
  },
  "integracoes-desenvolvimento": {
    panelTitle: "Integrações",
    panelTag: "Ligações",
    stats: [
      { value: "24", label: "Ligações" },
      { value: "1,2s", label: "Resposta" },
      { value: "100%", label: "Sincronia" },
    ],
    rows: [
      { label: "Autenticação única (SSO)", status: "Ligado" },
      { label: "Sincronização de utilizadores", status: "Automática" },
      { label: "Pagamentos e inscrições", status: "Ativo" },
      { label: "Funcionalidade à medida", status: "Publicada" },
    ],
    footnote: "Sistemas a comunicar entre si",
    badge: "Integrado",
  },
  "suporte-manutencao": {
    panelTitle: "Monitorização",
    panelTag: "24/7",
    stats: [
      { value: "99,9%", label: "Disponível" },
      { value: "0", label: "Incidentes" },
      { value: "24/7", label: "Vigilância" },
    ],
    rows: [
      { label: "Estado da plataforma", status: "Estável" },
      { label: "Atualizações do Moodle", status: "Em dia" },
      { label: "Cópias de segurança", status: "Verificadas" },
      { label: "Pedidos de apoio", status: "Respondidos" },
    ],
    footnote: "Plataforma acompanhada todos os dias",
    badge: "Suporte",
  },
  "consultoria-estrategia": {
    panelTitle: "Diagnóstico",
    panelTag: "Estratégia",
    stats: [
      { value: "360º", label: "Análise" },
      { value: "6", label: "Prioridades" },
      { value: "1", label: "Plano" },
    ],
    rows: [
      { label: "Levantamento da situação", status: "Concluído" },
      { label: "Análise da plataforma", status: "Avaliada" },
      { label: "Recomendações", status: "Definidas" },
      { label: "Plano de evolução", status: "Entregue" },
    ],
    footnote: "Decisões apoiadas em dados reais",
    badge: "Consultoria",
  },
  "formacao-capacitacao": {
    panelTitle: "Programa de formação",
    panelTag: "Turma",
    stats: [
      { value: "18", label: "Participantes" },
      { value: "8", label: "Sessões" },
      { value: "97%", label: "Satisfação" },
    ],
    rows: [
      { label: "Administração de Moodle", status: "Módulo 1" },
      { label: "Criação de conteúdos SCORM", status: "Módulo 2" },
      { label: "Boas práticas pedagógicas", status: "Módulo 3" },
      { label: "Acompanhamento prático", status: "Incluído" },
    ],
    footnote: "Equipas autónomas no final do programa",
    badge: "Formação",
  },
};

const ServiceHeroVisual = ({ slug }: { slug: string }) => {
  const config = configs[slug] ?? configs["plataformas-elearning"];

  return (
    <div className="relative w-full">
      <div
        className="absolute -inset-6 bg-primary/10 blur-[80px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative glass-card rounded-2xl p-5 sm:p-6 md:p-7">
        <div className="flex items-center justify-between mb-5">
          <span className="font-display text-base font-semibold text-foreground">
            {config.panelTitle}
          </span>
          <span className="text-xs font-semibold text-primary">{config.panelTag}</span>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-5">
          {config.stats.map((stat, index) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/[0.07] bg-background/40 px-3 py-4 text-center opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.15 + index * 0.1}s` }}
            >
              <span className="block font-display text-lg sm:text-xl font-bold text-primary">
                {stat.value}
              </span>
              <span className="block text-[11px] text-muted-foreground mt-1">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="space-y-2.5">
          {config.rows.map((row, index) => (
            <div
              key={row.label}
              className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.07] bg-background/40 px-4 py-3 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.45 + index * 0.12}s` }}
            >
              <span className="text-sm text-foreground/90 truncate">{row.label}</span>
              <span className="text-xs font-semibold text-primary whitespace-nowrap">
                {row.status}
              </span>
            </div>
          ))}
        </div>

        <div
          className="mt-5 flex items-center gap-2 text-xs text-muted-foreground opacity-0 animate-fade-up"
          style={{ animationDelay: "1s" }}
        >
          <ShieldCheck
            size={14}
            width={14}
            height={14}
            className="text-primary flex-shrink-0"
            aria-hidden="true"
          />
          <span>{config.footnote}</span>
        </div>
      </div>

      <div
        className="absolute -top-3 -right-2 sm:-right-4 flex items-center gap-1.5 rounded-full border border-primary/30 bg-background/90 backdrop-blur px-3 py-1.5 shadow-lg shadow-primary/10 animate-glow-pulse"
        aria-hidden="true"
      >
        <Sparkles size={13} width={13} height={13} className="text-primary" />
        <span className="text-[11px] font-semibold text-foreground">{config.badge}</span>
      </div>

      <div
        className="absolute -bottom-3 -left-2 sm:-left-4 hidden sm:flex items-center gap-1.5 rounded-full border border-white/10 bg-background/90 backdrop-blur px-3 py-1.5 shadow-lg"
        aria-hidden="true"
      >
        <Activity size={13} width={13} height={13} className="text-primary" />
        <span className="text-[11px] font-semibold text-foreground">Em funcionamento</span>
      </div>
    </div>
  );
};

export default ServiceHeroVisual;
