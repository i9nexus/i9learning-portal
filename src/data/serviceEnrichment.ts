import {
  Layers,
  ShieldCheck,
  Gauge,
  Palette,
  Server,
  RefreshCw,
  Target,
  Accessibility,
  FileCheck2,
  Smartphone,
  PenTool,
  BarChart3,
  Plug,
  Code2,
  Workflow,
  Lock,
  GitBranch,
  Boxes,
  Headphones,
  History,
  Stethoscope,
  ClipboardList,
  Activity,
  MessagesSquare,
  Compass,
  Scale,
  FileSearch,
  Map,
  Handshake,
  Lightbulb,
  Users,
  Presentation,
  BookMarked,
  UserCog,
  LifeBuoy,
  Award,
} from "lucide-react";

/**
 * Conteúdo adicional por serviço, fundido em ServiceLanding com os dados base de services.ts.
 * Mantém o conteúdo original intacto e acrescenta apenas o que foi pedido.
 */
export interface ServiceEnrichment {
  challengeIntro: string;
  solutionExtra: string;
  extraPossibilities: string[];
  extraBenefits: { title: string; description: string }[];
  keyFeatures: { title: string; description: string; icon: React.ElementType }[];
  extraAudience: string[];
  extraFaq: { question: string; answer: string }[];
  ctaText: string;
}

export const serviceEnrichment: Record<string, ServiceEnrichment> = {
  "plataformas-elearning": {
    challengeIntro:
      "Escolher, instalar e manter uma plataforma de aprendizagem exige decisões técnicas e pedagógicas que raramente são evidentes à partida — e que, mal tomadas, se traduzem em custos, retrabalho e formandos desmotivados.",
    solutionExtra:
      "Cada plataforma é entregue com a estrutura de cursos, perfis e permissões já definida, testada em computador, tablet e telemóvel, e documentada para que a equipa saiba exatamente como está organizada e como pode crescer.",
    extraPossibilities: [],
    extraBenefits: [
      {
        title: "Fim da dependência de folhas de cálculo",
        description:
          "Inscrições, presenças, avaliações e certificados deixam de ser geridos manualmente em ficheiros dispersos e passam a estar centralizados na plataforma.",
      },
      {
        title: "Plataforma antiga sem margem para crescer",
        description:
          "Migramos cursos, utilizadores e histórico de uma solução desatualizada para um Moodle atual, sem perder a informação acumulada.",
      },
    ],
    keyFeatures: [
      {
        title: "Base Moodle sólida e comprovada",
        description:
          "Assentamos cada projeto num LMS de código aberto amplamente adotado, sem licenças por utilizador e com evolução assegurada por uma comunidade global.",
        icon: Layers,
      },
      {
        title: "Arquitetura pensada para crescer",
        description:
          "A estrutura de categorias, cursos e perfis é desenhada para acomodar novos públicos, entidades ou ofertas sem refazer a plataforma.",
        icon: GitBranch,
      },
      {
        title: "Identidade visual integral",
        description:
          "Da página de entrada ao certificado, toda a experiência reflete a marca da organização e não um ambiente genérico.",
        icon: Palette,
      },
      {
        title: "Alojamento e desempenho afinados",
        description:
          "Servidor dimensionado ao número de utilizadores, com cache, cópias de segurança e tempos de carregamento acompanhados.",
        icon: Server,
      },
      {
        title: "Segurança e privacidade",
        description:
          "Ligações cifradas, perfis com permissões controladas e configuração alinhada com as boas práticas de proteção de dados.",
        icon: ShieldCheck,
      },
      {
        title: "Experiência em qualquer dispositivo",
        description:
          "Navegação adaptada a computador, tablet e telemóvel, para que o formando aprenda onde e quando lhe for mais conveniente.",
        icon: Smartphone,
      },
    ],
    extraAudience: [
      "Associações e ordens profissionais com formação contínua para membros",
      "Organizações com várias delegações ou unidades que partilham a mesma formação",
      "Entidades que precisam de vender cursos online ao público",
    ],
    extraFaq: [
      {
        question: "Quanto tempo demora a colocar uma plataforma em funcionamento?",
        answer:
          "Depende da complexidade: uma plataforma com configuração e tema próprio pode estar operacional em poucas semanas; projetos com migrações ou integrações exigem mais tempo. Definimos o calendário consigo após a análise inicial.",
      },
      {
        question: "Onde fica alojada a plataforma?",
        answer:
          "Podemos tratar do alojamento num servidor dimensionado para o projeto ou instalar a plataforma na infraestrutura da organização, se essa for a preferência.",
      },
    ],
    ctaText:
      "Numa conversa inicial percebemos se precisa de uma plataforma nova, de melhorar a que já tem ou de migrar a partir de outra solução. Analisamos o número de utilizadores, a estrutura da formação e as integrações necessárias, e indicamos-lhe o caminho mais adequado para o seu Moodle.",
  },

  "cursos-conteudos-elearning": {
    challengeIntro:
      "Converter conhecimento interno em formação digital eficaz é um trabalho de conceção, não de formatação: exige estrutura pedagógica, ritmo, interação e avaliação pensadas para quem aprende sozinho, ao ecrã.",
    solutionExtra:
      "Cada curso é entregue em pacote SCORM testado, pronto a carregar no LMS, com registo de progresso, conclusão e classificação — e com os ficheiros organizados para futuras atualizações de conteúdo.",
    extraPossibilities: [],
    extraBenefits: [
      {
        title: "Manuais extensos que ninguém termina",
        description:
          "Reorganizamos documentos longos em módulos curtos, com interação e pontos de verificação, que o formando consegue concluir.",
      },
      {
        title: "Conhecimento preso a poucas pessoas",
        description:
          "Transformamos o saber de especialistas internos em cursos reutilizáveis, reduzindo a dependência de sessões presenciais repetidas.",
      },
    ],
    keyFeatures: [
      {
        title: "Desenho instrucional antes da produção",
        description:
          "Objetivos de aprendizagem, sequência e avaliação são definidos primeiro; só depois se produz, para que cada ecrã tenha uma função.",
        icon: Target,
      },
      {
        title: "Ferramentas de autor de altíssima qualidade",
        description:
          "Produzimos com ferramentas profissionais reconhecidas internacionalmente, que permitem interatividade rica e resultados consistentes.",
        icon: PenTool,
      },
      {
        title: "Normas SCORM validadas",
        description:
          "Cada pacote é testado em ambiente LMS antes da entrega, garantindo registo correto de progresso, conclusão e pontuação.",
        icon: FileCheck2,
      },
      {
        title: "Design responsivo e acessível",
        description:
          "Conteúdos legíveis e utilizáveis em diferentes ecrãs, com contraste, navegação e textos pensados para todos os formandos.",
        icon: Accessibility,
      },
      {
        title: "Linguagem e exemplos do seu contexto",
        description:
          "Cenários, casos e terminologia são construídos a partir da realidade da organização, não de modelos genéricos.",
        icon: MessagesSquare,
      },
      {
        title: "Conteúdos fáceis de atualizar",
        description:
          "A estrutura modular permite rever um tema ou substituir um módulo sem refazer o curso inteiro.",
        icon: RefreshCw,
      },
    ],
    extraAudience: [
      "Equipas comerciais que precisam de formação rápida sobre produtos e serviços",
      "Organizações com formação obrigatória recorrente (segurança, qualidade, compliance)",
      "Especialistas e formadores com conhecimento a transformar em cursos digitais",
    ],
    extraFaq: [
      {
        question: "Quanto tempo demora a produzir um curso?",
        answer:
          "Depende da duração, do nível de interatividade e da maturidade dos materiais de base. Após analisarmos os conteúdos, apresentamos um plano de produção com as fases de validação.",
      },
      {
        question: "Podemos rever o curso antes da versão final?",
        answer:
          "Sim. O processo inclui momentos de validação do guião e de versões intermédias, para que os ajustes sejam feitos antes da entrega final.",
      },
    ],
    ctaText:
      "Se tem manuais, apresentações ou conhecimento interno que quer transformar em formação online, falamos consigo sobre os objetivos, o público e o nível de interatividade pretendido, e propomos uma estrutura de curso SCORM adequada à sua plataforma.",
  },

  "integracoes-desenvolvimento": {
    challengeIntro:
      "Quando a plataforma de formação não comunica com o resto da organização, cada inscrição, matrícula ou relatório passa a depender de trabalho manual — e o potencial da tecnologia fica por explorar.",
    solutionExtra:
      "Cada desenvolvimento é documentado, testado num ambiente separado antes de chegar à produção e pensado para resistir às atualizações da plataforma, evitando soluções frágeis que deixam de funcionar ao fim de meses.",
    extraPossibilities: [],
    extraBenefits: [
      {
        title: "Dados duplicados em vários sistemas",
        description:
          "Sincronizamos utilizadores, cursos e resultados entre plataformas, eliminando registos inconsistentes e reintrodução de informação.",
      },
      {
        title: "Processo de venda de cursos fragmentado",
        description:
          "Ligamos pagamento, inscrição e acesso ao curso num único fluxo, sem intervenção manual da equipa.",
      },
    ],
    keyFeatures: [
      {
        title: "Análise técnica antes de programar",
        description:
          "Mapeamos sistemas, fluxos e dados envolvidos para escolher a forma de integração mais simples e sustentável.",
        icon: FileSearch,
      },
      {
        title: "Integrações por API e normas abertas",
        description:
          "Privilegiamos ligações documentadas e normas reconhecidas, que facilitam a manutenção e a troca futura de sistemas.",
        icon: Plug,
      },
      {
        title: "Código limpo e documentado",
        description:
          "Desenvolvimentos organizados e descritos, para que possam ser mantidos e evoluídos sem depender de uma só pessoa.",
        icon: Code2,
      },
      {
        title: "Compatibilidade com atualizações",
        description:
          "Funcionalidades construídas segundo as práticas da plataforma, reduzindo o risco de falhas após novas versões.",
        icon: RefreshCw,
      },
      {
        title: "Ambiente de testes separado",
        description:
          "Validação em ambiente próprio antes da passagem à produção, sem afetar formandos nem dados reais.",
        icon: Boxes,
      },
      {
        title: "Proteção dos dados trocados",
        description:
          "Comunicação cifrada entre sistemas e acessos limitados ao estritamente necessário para cada integração.",
        icon: Lock,
      },
    ],
    extraAudience: [
      "Organizações com ERP, CRM ou sistema de RH que deve alimentar a plataforma",
      "Entidades que gerem formação para clientes ou parceiros externos",
      "Equipas que precisam de relatórios combinados de vários sistemas",
    ],
    extraFaq: [
      {
        question: "As integrações continuam a funcionar quando a plataforma é atualizada?",
        answer:
          "Desenvolvemos seguindo as práticas recomendadas da plataforma e testamos antes de cada atualização relevante, para minimizar o risco de incompatibilidades.",
      },
      {
        question: "Como garantem a segurança dos dados trocados entre sistemas?",
        answer:
          "As ligações são cifradas e cada integração tem apenas as permissões necessárias para a sua função, limitando a exposição de informação.",
      },
    ],
    ctaText:
      "Descreva-nos os sistemas que utiliza e as tarefas que hoje são feitas manualmente. Avaliamos a viabilidade técnica, indicamos a abordagem de integração ou desenvolvimento mais adequada e o impacto esperado no dia a dia da sua equipa.",
  },

  "suporte-manutencao": {
    challengeIntro:
      "Depois do lançamento, a plataforma passa a ser um serviço diário para formandos e equipa — e cada falha, lentidão ou dúvida sem resposta tem impacto direto na formação em curso.",
    solutionExtra:
      "Cada pedido é registado, analisado e acompanhado até à resolução, com histórico das intervenções, para que exista sempre conhecimento sobre o estado da plataforma e as decisões tomadas.",
    extraPossibilities: [
      "Planeamento e aplicação de atualizações de versão",
      "Verificação de cópias de segurança e recuperação",
      "Monitorização de desempenho e tempos de resposta",
    ],
    extraBenefits: [
      {
        title: "Atualizações sempre adiadas",
        description:
          "Planeamos e aplicamos as atualizações da plataforma com testes prévios, evitando versões desatualizadas e vulneráveis.",
      },
      {
        title: "Lentidão em períodos de maior utilização",
        description:
          "Identificamos a origem dos estrangulamentos e ajustamos a configuração para que a plataforma responda nos momentos críticos.",
      },
    ],
    keyFeatures: [
      {
        title: "Interlocutores que conhecem o Moodle",
        description:
          "Os pedidos são tratados por quem trabalha diariamente com a plataforma, sem triagens genéricas nem respostas padronizadas.",
        icon: Headphones,
      },
      {
        title: "Diagnóstico da causa e não do sintoma",
        description:
          "Investigamos a origem de cada problema para evitar que a mesma situação volte a acontecer.",
        icon: Stethoscope,
      },
      {
        title: "Histórico de intervenções",
        description:
          "Registo das alterações e correções efetuadas, que dá à organização visibilidade e memória técnica sobre a plataforma.",
        icon: History,
      },
      {
        title: "Manutenção preventiva",
        description:
          "Atualizações, verificações e ajustes realizados de forma planeada, antes de os problemas chegarem aos formandos.",
        icon: Activity,
      },
      {
        title: "Modalidade ajustada à necessidade",
        description:
          "Acompanhamento continuado ou apoio pontual, consoante a utilização e a autonomia da equipa.",
        icon: Scale,
      },
      {
        title: "Comunicação clara",
        description:
          "Explicamos o que aconteceu, o que foi feito e o que recomendamos, numa linguagem que a equipa de formação compreende.",
        icon: ClipboardList,
      },
    ],
    extraAudience: [
      "Organizações cujo fornecedor anterior deixou de prestar apoio",
      "Equipas de TI internas que precisam de reforço especializado em Moodle",
      "Entidades com épocas de maior utilização que exigem a plataforma estável",
    ],
    extraFaq: [
      {
        question: "Fazem as atualizações de versão do Moodle?",
        answer:
          "Sim. Planeamos a atualização, testamos o impacto em temas, plugins e conteúdos e aplicamo-la de forma controlada, para reduzir riscos e tempo de indisponibilidade.",
      },
      {
        question: "Como fazemos um pedido de suporte?",
        answer:
          "Combinamos consigo o canal mais prático para a sua equipa. Cada pedido é registado e acompanhado até estar resolvido.",
      },
    ],
    ctaText:
      "Conte-nos como está a sua plataforma hoje, que tipo de pedidos surgem com mais frequência e se tem equipa técnica interna. Com essa informação propomos o modelo de acompanhamento mais adequado — continuado ou pontual — para manter a formação a funcionar sem interrupções.",
  },

  "consultoria-estrategia": {
    challengeIntro:
      "Os projetos de eLearning falham mais por decisões iniciais mal fundamentadas do que por limitações técnicas — e corrigir o rumo depois de investir é sempre mais caro do que analisar antes.",
    solutionExtra:
      "Cada análise termina com um documento de conclusões e recomendações priorizadas, que a organização pode utilizar internamente para decidir, orçamentar e planear — com ou sem a i9 Learning na execução.",
    extraPossibilities: [
      "Quando é necessário comparar alternativas tecnológicas",
      "Antes de migrar de uma plataforma para outra",
    ],
    extraBenefits: [
      {
        title: "Escolha de plataforma por impulso",
        description:
          "Comparamos alternativas à luz das necessidades reais, evitando decisões baseadas apenas em demonstrações comerciais.",
      },
      {
        title: "Projeto sem métricas de sucesso",
        description:
          "Ajudamos a definir indicadores claros para perceber se a formação online está a cumprir os objetivos.",
      },
    ],
    keyFeatures: [
      {
        title: "Visão independente",
        description:
          "A análise centra-se nas necessidades da organização; a consultoria não obriga à contratação de outros serviços.",
        icon: Compass,
      },
      {
        title: "Experiência prática de implementação",
        description:
          "As recomendações vêm de quem instala, desenvolve e mantém plataformas, e por isso são exequíveis.",
        icon: Lightbulb,
      },
      {
        title: "Recomendações priorizadas",
        description:
          "Distinguimos o essencial do acessório, para que a organização saiba por onde começar.",
        icon: BarChart3,
      },
      {
        title: "Roteiro de implementação",
        description:
          "Fases, dependências e decisões a tomar organizadas num plano claro e acionável.",
        icon: Map,
      },
      {
        title: "Equilíbrio entre técnica e pedagogia",
        description:
          "Avaliamos a tecnologia sem perder de vista a experiência de quem aprende e de quem gere a formação.",
        icon: Workflow,
      },
      {
        title: "Acompanhamento opcional",
        description:
          "Após a análise, podemos apoiar a execução ou validar decisões ao longo do projeto, se a organização o pretender.",
        icon: Handshake,
      },
    ],
    extraAudience: [
      "Direções que precisam de suporte para aprovar investimento em formação digital",
      "Organizações a preparar a migração para uma nova plataforma",
      "Entidades com projetos financiados que exigem planeamento estruturado",
    ],
    extraFaq: [
      {
        question: "O que recebemos no final da consultoria?",
        answer:
          "Um documento com o diagnóstico, as conclusões e as recomendações priorizadas, apresentado e discutido com a equipa responsável.",
      },
      {
        question: "Quanto tempo demora uma análise?",
        answer:
          "Depende do âmbito: avaliar uma plataforma existente é diferente de planear um projeto de raiz. Definimos o âmbito e o calendário na conversa inicial.",
      },
    ],
    ctaText:
      "Antes de investir numa plataforma, num curso ou numa reformulação, vale a pena uma leitura especializada. Falamos consigo sobre o ponto em que está o projeto, as dúvidas que tem e as decisões a tomar, e indicamos que tipo de análise faz sentido.",
  },

  "formacao-capacitacao": {
    challengeIntro:
      "Quando a equipa não domina a plataforma, a formação online depende de apoio externo para tarefas diárias — inscrever formandos, acompanhar o progresso, emitir certificados ou extrair relatórios.",
    solutionExtra:
      "As sessões decorrem na plataforma que a organização utiliza, com os cursos e utilizadores reais (ou num ambiente de teste equivalente), para que a equipa aplique de imediato o que aprende no seu trabalho diário.",
    extraPossibilities: [
      "Gestão de inscrições e grupos",
      "Comunicação com formandos",
      "Acompanhamento de atividades e prazos",
    ],
    extraBenefits: [
      {
        title: "Relatórios pedidos sempre a terceiros",
        description:
          "A equipa passa a extrair sozinha dados de progresso, conclusão e avaliação quando precisa deles.",
      },
      {
        title: "Formandos sem acompanhamento",
        description:
          "Formadores e tutores aprendem a usar as ferramentas de comunicação e seguimento para apoiar quem está a aprender.",
      },
    ],
    keyFeatures: [
      {
        title: "Sessões na sua própria plataforma",
        description:
          "A formação decorre no ambiente que a equipa vai usar, com os seus cursos e perfis, e não numa demonstração genérica.",
        icon: Presentation,
      },
      {
        title: "Programa ajustado a cada perfil",
        description:
          "Administradores, gestores de formação e tutores recebem conteúdos diferentes, focados nas suas tarefas.",
        icon: UserCog,
      },
      {
        title: "Aprender fazendo",
        description:
          "Exercícios práticos sobre situações reais da organização, para consolidar a autonomia desde a primeira sessão.",
        icon: Users,
      },
      {
        title: "Materiais de apoio para consulta",
        description:
          "Guias e registos das sessões que a equipa pode rever sempre que precisar de relembrar um procedimento.",
        icon: BookMarked,
      },
      {
        title: "Apoio após a formação",
        description:
          "Esclarecimento de dúvidas no período seguinte às sessões, enquanto a equipa ganha confiança na utilização.",
        icon: LifeBuoy,
      },
      {
        title: "Boas práticas de gestão da formação",
        description:
          "Recomendações para organizar cursos, acompanhar formandos e manter a plataforma arrumada ao longo do tempo.",
        icon: Award,
      },
    ],
    extraAudience: [
      "Tutores e dinamizadores de cursos online",
      "Equipas administrativas que gerem inscrições e certificados",
      "Novos colaboradores que assumem a gestão da plataforma",
    ],
    extraFaq: [
      {
        question: "A formação inclui a criação de cursos ou conteúdos SCORM?",
        answer:
          "Não. A formação foca-se na utilização e gestão da plataforma e dos conteúdos já disponibilizados. A conceção e produção de cursos é um serviço especializado da i9 Learning.",
      },
      {
        question: "Recebemos materiais de apoio?",
        answer:
          "Sim. Disponibilizamos guias de consulta adaptados às tarefas abordadas, para que a equipa possa rever os procedimentos depois das sessões.",
      },
    ],
    ctaText:
      "Diga-nos quem vai utilizar a plataforma e em que tarefas sente mais dificuldade — gestão de formandos, relatórios, certificados ou tutoria. Desenhamos um programa de capacitação à medida dos perfis da sua equipa, para que ganhe autonomia na gestão da formação online.",
  },
};
