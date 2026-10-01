import type { LucideIcon } from "lucide-react";
import {
  Package, Activity, Plug, KeyRound, Video, CalendarDays, UserPlus, Award, BarChart3, ShoppingCart,
  Languages, Puzzle, FileArchive, FileCog, MousePointerClick, MonitorPlay, Film, Music, BookOpen,
  Trophy, TrendingUp, Zap, ClipboardCheck, FolderOpen, Link2, RefreshCw, Workflow, Lock, Globe,
  Wrench, Cpu, Sparkles, LifeBuoy, Settings, Users, LayoutList, Bug, Gauge, MessageCircleQuestion,
  Rocket, ArrowUpCircle, DatabaseBackup, Radar, ShieldCheck, Compass, Flag, LineChart, Scale,
  Lightbulb, Layers, Milestone, Map, GitCompare, ArrowRightLeft, Accessibility, ListChecks,
  GraduationCap, UsersRound, FileText, Headphones, PenLine, Megaphone, CalendarCheck, Library,
  Presentation, UserCog,
} from "lucide-react";

/** Possibilidades removidas para manter exatamente 12 por serviço. */
export const removedPossibilities: Record<string, string[]> = {
  "plataformas-elearning": ["Integrações"],
};

/** Possibilidades adicionais (título + descrição) para completar 12 por serviço. */
export const morePossibilities: Record<string, { title: string; description: string }[]> = {
  "suporte-manutencao": [
    {
      title: "Revisão periódica de segurança",
      description:
        "Verificação regular de permissões, extensões e acessos administrativos, para reduzir riscos e manter a plataforma protegida ao longo do tempo.",
    },
  ],
  "consultoria-estrategia": [
    {
      title: "Quando é preciso definir indicadores de sucesso",
      description:
        "Escolha de métricas claras — conclusão, participação, satisfação ou impacto — para medir o retorno da formação de forma objetiva.",
    },
    {
      title: "Quando a acessibilidade e a inclusão são prioridade",
      description:
        "Análise da plataforma e dos conteúdos face a boas práticas de acessibilidade, com recomendações para chegar a todos os formandos.",
    },
  ],
  "formacao-capacitacao": [
    {
      title: "Gestão de calendário e sessões",
      description:
        "Utilização do calendário da plataforma para planear sessões, datas de entrega e eventos, mantendo formandos e formadores alinhados.",
    },
  ],
};

/** Problemas resolvidos adicionais (para 9 por serviço). */
export const moreBenefits: Record<string, { title: string; description: string }[]> = {
  "plataformas-elearning": [
    { title: "Formandos que não encontram os cursos", description: "Uma navegação clara e um painel inicial organizado acabam com a procura por cursos e materiais dispersos." },
    { title: "Plataforma lenta em picos de utilização", description: "Alojamento dimensionado e afinado evita quebras quando muitos formandos acedem ao mesmo tempo." },
    { title: "Certificados emitidos à mão", description: "A emissão passa a ser automática após a conclusão, com verificação de autenticidade incluída." },
  ],
  "cursos-conteudos-elearning": [
    { title: "Cursos que ninguém termina", description: "Conteúdos interativos e bem ritmados aumentam o envolvimento e reduzem o abandono a meio do percurso." },
    { title: "Materiais presenciais difíceis de converter", description: "Transformamos apresentações e manuais em experiências digitais pensadas para aprender sozinho." },
    { title: "Progresso que não fica registado", description: "Pacotes SCORM testados garantem que conclusões e pontuações chegam corretamente à plataforma." },
  ],
  "integracoes-desenvolvimento": [
    { title: "Dados duplicados em vários sistemas", description: "A informação passa a circular automaticamente entre sistemas, sem introduções repetidas nem erros." },
    { title: "Processos que dependem de uma só pessoa", description: "Automatizações documentadas tiram tarefas críticas das mãos de quem as fazia manualmente." },
    { title: "Funcionalidade em falta na plataforma", description: "Desenvolvemos o que o sistema padrão não oferece, sem comprometer futuras atualizações." },
  ],
  "suporte-manutencao": [
    { title: "Versões desatualizadas e vulneráveis", description: "Atualizações planeadas mantêm a plataforma segura sem interromper cursos em curso." },
    { title: "Pedidos de ajuda sem resposta", description: "Um ponto de contacto técnico conhecedor da plataforma responde e resolve com rapidez." },
    { title: "Medo de perder dados num incidente", description: "Cópias de segurança verificadas asseguram a recuperação de cursos e histórico." },
  ],
  "consultoria-estrategia": [
    { title: "Investimento em ferramentas sem retorno", description: "Uma análise prévia evita comprar soluções que não respondem às necessidades reais." },
    { title: "Projeto sem prioridades definidas", description: "Um plano por fases organiza decisões e recursos, evitando dispersão e atrasos." },
    { title: "Direção que pede justificações", description: "Fundamentação objetiva facilita a aprovação de decisões e orçamentos de formação digital." },
  ],
  "formacao-capacitacao": [
    { title: "Equipa dependente de apoio externo", description: "Gestores e formadores ganham autonomia para as tarefas diárias da plataforma." },
    { title: "Relatórios que ninguém sabe ler", description: "A equipa aprende a interpretar dados de progresso e a agir a partir deles." },
    { title: "Formandos sem acompanhamento", description: "Práticas de tutoria online mantêm os formandos envolvidos e reduzem desistências." },
  ],
};

/** Ícone específico por possibilidade (únicos dentro de cada serviço). */
export const possibilityIcons: Record<string, Record<string, LucideIcon>> = {
  "plataformas-elearning": {
    SCORM: Package, xAPI: Activity, LTI: Plug, "SSO / Single Sign-On": KeyRound, Videoconferência: Video,
    Agendas: CalendarDays, "Gestão de inscrições": UserPlus, Certificados: Award, Relatórios: BarChart3,
    eCommerce: ShoppingCart, "Menus multidioma": Languages, "Funcionalidades personalizadas": Puzzle,
  },
  "cursos-conteudos-elearning": {
    "SCORM 1.2": FileArchive, "SCORM 2004": FileCog, "Interatividade avançada": MousePointerClick,
    Simulações: MonitorPlay, Vídeo: Film, Multimédia: Music, Storytelling: BookOpen, Gamificação: Trophy,
    "Progressão e níveis": TrendingUp, Microlearning: Zap, Avaliações: ClipboardCheck, "Recursos personalizados": FolderOpen,
  },
  "integracoes-desenvolvimento": {
    "Integração com sistemas externos via API": Link2, "Integração entre plataformas": RefreshCw,
    Automatizações: Workflow, Videoconferência: Video, Agendas: CalendarDays, eCommerce: ShoppingCart,
    SSO: Lock, "Menus multidioma": Globe, "Funcionalidades personalizadas": Wrench, "Serviços externos": Cpu,
    "Soluções específicas": Layers, "Soluções de IA": Sparkles,
  },
  "suporte-manutencao": {
    "Resolução de problemas técnicos": LifeBuoy, "Ajustes de configuração": Settings,
    "Gestão de utilizadores e permissões": Users, "Apoio na criação e estruturação de cursos": LayoutList,
    "Correção de comportamentos inesperados": Bug, "Otimização do funcionamento": Gauge,
    "Apoio à utilização da plataforma": MessageCircleQuestion, "Apoio na evolução da solução": Rocket,
    "Planeamento e aplicação de atualizações de versão": ArrowUpCircle,
    "Verificação de cópias de segurança e recuperação": DatabaseBackup,
    "Monitorização de desempenho e tempos de resposta": Radar, "Revisão periódica de segurança": ShieldCheck,
  },
  "consultoria-estrategia": {
    "Antes de escolher uma plataforma": Compass, "Antes de iniciar um projeto eLearning": Flag,
    "Quando os resultados ficam abaixo do esperado": LineChart, "Quando é preciso justificar uma decisão tecnológica": Scale,
    "Quando a plataforma está subaproveitada": Lightbulb, "Quando há necessidade de reorganizar a oferta formativa": Layers,
    "Durante a implementação de um projeto": Milestone, "Na preparação da evolução de uma solução": Map,
    "Quando é necessário comparar alternativas tecnológicas": GitCompare, "Antes de migrar de uma plataforma para outra": ArrowRightLeft,
    "Quando é preciso definir indicadores de sucesso": ListChecks, "Quando a acessibilidade e a inclusão são prioridade": Accessibility,
  },
  "formacao-capacitacao": {
    "Utilização do Moodle": GraduationCap, "Gestão de formandos": UsersRound, "Relatórios e progresso": BarChart3,
    Certificados: Award, "Tutoria online": Headphones, "Avaliação de aprendizagens": PenLine, "Formação online": Presentation,
    "Boas práticas de eLearning": Library, "Gestão de inscrições e grupos": UserCog, "Comunicação com formandos": Megaphone,
    "Acompanhamento de atividades e prazos": FileText, "Gestão de calendário e sessões": CalendarCheck,
  },
};
