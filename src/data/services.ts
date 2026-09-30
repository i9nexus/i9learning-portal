import {
  Monitor,
  BookOpen,
  Puzzle,
  Wrench,
  Search,
  GraduationCap,
} from "lucide-react";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceSection {
  title: string;
  paragraphs: string[];
}

export interface ServiceDefinition {
  number: string;
  slug: string;
  path: string;
  icon: React.ElementType;
  /** Título curto usado na homepage e no menu */
  title: string;
  /** Título completo usado no hero da landing page */
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  /** Descrição curta usada no cartão da homepage */
  cardDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  navLabel: string;
  challenge: ServiceSection;
  solution: ServiceSection;
  capabilities: { title: string; description: string }[];
  possibilities: { heading: string; note: string; items: string[] };
  benefits: { title: string; description: string }[];
  audience: string[];
  process: { step: string; title: string; description: string }[];
  approach: { title: string; description: string }[];
  faq: ServiceFaq[];
  ctaMid: { title: string; text: string; button: string };
  ctaFinal: { title: string; text: string; button: string };
}

export const services: ServiceDefinition[] = [
  {
    number: "01",
    slug: "plataformas-elearning",
    path: "/servicos/plataformas-elearning",
    icon: Monitor,
    title: "Plataformas eLearning",
    heroTitle: "Plataformas",
    heroHighlight: "eLearning",
    heroSubtitle:
      "Instalamos, configuramos e personalizamos plataformas LMS Moodle, adaptadas à realidade de cada organização e prontas a utilizar.",
    cardDescription:
      "Instalação, configuração e personalização de plataformas LMS Moodle, incluindo temas à medida, integrações e migrações.",
    metaTitle: "Instalação de Plataformas Moodle | LMS eLearning à Medida | i9 Learning",
    metaDescription:
      "Instalação, configuração e personalização de plataformas Moodle (LMS). Temas à medida, integrações, migrações, SCORM e suporte especializado em Portugal.",
    keywords:
      "instalação Moodle, plataforma Moodle, configuração Moodle, personalização Moodle, tema Moodle, migração Moodle, Moodle Portugal, Moodle Workplace, plataforma LMS, LMS Moodle, SCORM, xAPI, LTI, SSO",

    navLabel: "Plataformas",
    challenge: {
      title: "O desafio",
      paragraphs: [
        "Muitas organizações querem colocar a sua formação online, mas não sabem que plataforma escolher, como a configurar ou como adaptá-la aos seus processos internos.",
        "Noutros casos, já existe uma plataforma instalada que não está a ser aproveitada: navegação confusa, imagem desalinhada da marca, funcionalidades por explorar e formandos que desistem a meio.",
        "O resultado é sempre o mesmo — tecnologia disponível, mas sem retorno real para a formação.",
      ],
    },
    solution: {
      title: "A solução",
      paragraphs: [
        "Construímos as nossas plataformas sobre o LMS Moodle, o sistema de gestão de aprendizagem mais utilizado no mundo, com milhões de utilizadores e uma comunidade global que garante evolução constante.",
        "Não nos limitamos a instalar o Moodle: analisamos o contexto, definimos a estrutura de cursos, utilizadores e permissões, configuramos o que é necessário e personalizamos por completo a experiência, para que a plataforma seja simples de usar e reconhecível como sua.",
        "Tratamos de tudo — instalação, alojamento, tema à medida, integrações, normas SCORM, cópias de segurança, atualizações e migrações a partir de plataformas antigas — para que a organização se concentre apenas na formação.",
      ],
    },
    capabilities: [
      {
        title: "Instalação de plataformas Moodle",
        description:
          "Instalação e arranque de plataformas Moodle preparadas para utilização real, com alojamento otimizado, domínio próprio, certificado de segurança e desempenho afinado.",
      },
      {
        title: "Configuração e parametrização",
        description:
          "Definição de perfis, categorias, inscrições, permissões e fluxos de utilização alinhados com o funcionamento da organização.",
      },
      {
        title: "Tema e personalização gráfica",
        description:
          "Desenvolvimento de temas Moodle à medida, com a identidade da marca aplicada a todo o ambiente: cores, tipografia, painel inicial e páginas de entrada.",
      },
      {
        title: "Compatibilidade com conteúdos SCORM",
        description:
          "Plataformas preparadas para receber conteúdos em SCORM 1.2 e SCORM 2004, com registo fiável de progresso, tempos e resultados de avaliação.",
      },
      {
        title: "Migração e melhoria de plataformas existentes",
        description:
          "Migração de plataformas antigas para versões atuais do Moodle, sem perda de cursos, utilizadores nem histórico, e otimização do que já existe.",
      },
      {
        title: "Atualizações, segurança e desempenho",
        description:
          "Atualizações regulares do Moodle, cópias de segurança automáticas, monitorização e afinação de velocidade para suportar muitos utilizadores em simultâneo.",
      },
    ],

    possibilities: {
      heading: "Possibilidades a integrar na plataforma",
      note:
        "Estas funcionalidades não estão obrigatoriamente incluídas em todos os projetos. A solução é definida de acordo com as necessidades da organização.",
      items: [
        "SCORM",
        "xAPI",
        "LTI",
        "SSO / Single Sign-On",
        "Videoconferência",
        "Agendas",
        "Gestão de inscrições",
        "Certificados",
        "Relatórios",
        "eCommerce",
        "Menus multidioma",
        "Integrações",
        "Funcionalidades personalizadas",
      ],
    },
    benefits: [
      {
        title: "Ambiente próprio",
        description: "Uma plataforma alinhada com a identidade e a linguagem da organização.",
      },
      {
        title: "Utilização mais simples",
        description: "Menos dúvidas, menos pedidos de apoio e menos abandono por parte dos formandos.",
      },
      {
        title: "Gestão organizada",
        description: "Cursos, utilizadores e inscrições estruturados de forma clara e sustentável.",
      },
      {
        title: "Evolução possível",
        description: "Uma base preparada para crescer e integrar novas funcionalidades quando forem necessárias.",
      },
    ],
    audience: [
      "Organizações que pretendem iniciar a sua formação online",
      "Entidades formadoras que precisam de um ambiente próprio",
      "Equipas que já têm uma plataforma e querem melhorá-la",
      "Departamentos de formação e recursos humanos",
      "Instituições de ensino e centros de formação",
      "Projetos que exigem integrações ou funcionalidades específicas",
    ],
    process: [
      {
        step: "01",
        title: "Análise",
        description: "Compreendemos o contexto, os destinatários da formação e os objetivos do projeto.",
      },
      {
        step: "02",
        title: "Definição",
        description: "Propomos a abordagem tecnológica e a estrutura do ambiente de aprendizagem.",
      },
      {
        step: "03",
        title: "Implementação",
        description: "Instalamos, configuramos e personalizamos a plataforma de acordo com o definido.",
      },
      {
        step: "04",
        title: "Acompanhamento",
        description: "Validamos a solução, apoiamos o arranque e acompanhamos a evolução do projeto.",
      },
    ],
    approach: [
      {
        title: "Tecnologia ao serviço da formação",
        description:
          "A plataforma é um meio, não um fim. As decisões técnicas partem sempre das necessidades pedagógicas.",
      },
      {
        title: "Soluções adaptadas",
        description:
          "Não aplicamos o mesmo modelo a todos os projetos. Cada solução é definida a partir do contexto real.",
      },
      {
        title: "Experiência do formando",
        description:
          "Uma plataforma só cumpre o seu papel quando é simples de utilizar por quem aprende.",
      },
    ],
    faq: [
      {
        question: "Que plataforma utilizam?",
        answer:
          "Trabalhamos com o LMS Moodle, o sistema de gestão de aprendizagem mais utilizado a nível mundial. É robusto, seguro, escalável e permite um nível de personalização que soluções fechadas não oferecem.",
      },
      {
        question: "Fazem a instalação do Moodle de raiz?",
        answer:
          "Sim. Tratamos da instalação completa: alojamento, domínio, certificado de segurança, configuração inicial, estrutura de cursos e utilizadores, tema personalizado e afinação de desempenho.",
      },
      {
        question: "Podem migrar ou melhorar um Moodle que já temos?",
        answer:
          "Sim. Migramos plataformas antigas para versões atuais do Moodle sem perda de cursos, utilizadores ou histórico, e otimizamos configuração, organização de conteúdos e imagem.",
      },
      {
        question: "A plataforma aceita conteúdos SCORM?",
        answer:
          "Sim. As nossas plataformas Moodle estão preparadas para SCORM 1.2 e SCORM 2004, com registo de progresso, tempos de utilização e resultados de avaliação.",
      },

      {
        question: "A plataforma pode ter a imagem da nossa marca?",
        answer:
          "Sim. Fazemos a personalização gráfica da plataforma para que o ambiente de aprendizagem seja coerente com a identidade visual da organização.",
      },
      {
        question: "É possível integrar a plataforma com outros sistemas?",
        answer:
          "Sim, conforme as necessidades do projeto. Integrações, SSO, videoconferência ou eCommerce são possibilidades que avaliamos caso a caso.",
      },
      {
        question: "A plataforma funciona em telemóvel e tablet?",
        answer:
          "Sim. A utilização em diferentes dispositivos é tida em conta na configuração e na adaptação da experiência de utilização.",
      },
      {
        question: "Também produzem os conteúdos dos cursos?",
        answer:
          "Sim, através do serviço de Cursos e Conteúdos eLearning, que pode ser combinado com a implementação da plataforma.",
      },
    ],
    ctaMid: {
      title: "Tem um projeto de plataforma em mente?",
      text: "Fale connosco sobre o contexto da sua organização e ajudamos a definir o caminho.",
      button: "Falar sobre o projeto",
    },
    ctaFinal: {
      title: "Vamos construir o seu ambiente de aprendizagem",
      text: "Conte-nos o que pretende e avaliamos consigo a solução mais adequada.",
      button: "Entrar em contacto",
    },
  },
  {
    number: "02",
    slug: "cursos-conteudos-elearning",
    path: "/servicos/cursos-conteudos-elearning",
    icon: BookOpen,
    title: "Cursos e Conteúdos eLearning",
    heroTitle: "Cursos e Conteúdos",
    heroHighlight: "eLearning",
    heroSubtitle:
      "Produzimos cursos em formato SCORM e conteúdos interativos de alta qualidade, prontos a integrar em qualquer plataforma Moodle ou LMS.",
    cardDescription:
      "Desenho instrucional e produção de cursos interativos em formato SCORM, compatíveis com Moodle e qualquer LMS.",
    metaTitle: "Cursos e Conteúdos eLearning em SCORM | Conteúdos Interativos | i9 Learning",
    metaDescription:
      "Produção de cursos eLearning e conteúdos interativos em SCORM 1.2 e SCORM 2004, compatíveis com Moodle e qualquer LMS. Desenho instrucional, vídeo e gamificação.",
    keywords:
      "conteúdos SCORM, cursos SCORM, SCORM 1.2, SCORM 2004, conteúdos interativos, cursos eLearning, desenho instrucional, conteúdos para Moodle, gamificação, microlearning, produção de cursos online",

    navLabel: "Cursos",
    challenge: {
      title: "O desafio",
      paragraphs: [
        "Ter uma plataforma não chega. O que decide o sucesso da formação online é aquilo que o formando encontra dentro dos cursos.",
        "Manuais convertidos em PDF, apresentações longas e vídeos sem estrutura conduzem quase sempre ao mesmo resultado: desinteresse e taxas de conclusão baixas.",
        "O desafio não é apenas transmitir informação — é organizá-la de forma que seja compreendida, aplicada e retida.",
      ],
    },
    solution: {
      title: "A solução",
      paragraphs: [
        "Concebemos cursos a partir dos objetivos de aprendizagem, não a partir do material disponível. A estrutura pedagógica vem primeiro.",
        "A produção é feita com ferramentas de autor profissionais de altíssima qualidade, reconhecidas internacionalmente, que nos permitem criar interatividade avançada, simulações, avaliações e percursos adaptativos.",
        "Todos os cursos são entregues em formato SCORM (1.2 e 2004), prontos a integrar numa plataforma Moodle ou em qualquer outro LMS, com registo fiável de progresso, tempos e resultados.",
      ],

    },
    capabilities: [
      {
        title: "Conceção de cursos",
        description:
          "Definição de objetivos, público-alvo, percurso de aprendizagem e formato mais adequado a cada conteúdo.",
      },
      {
        title: "Estruturação pedagógica e desenho instrucional",
        description:
          "Organização da informação em módulos e sequências coerentes, com ritmo e progressão pensados para o formato digital.",
      },
      {
        title: "Produção em formato SCORM",
        description:
          "Cursos exportados em SCORM 1.2 e SCORM 2004, prontos a carregar numa plataforma Moodle ou noutro LMS, com registo de progresso e classificações.",
      },
      {
        title: "Conteúdos interativos avançados",
        description:
          "Atividades, simulações, cenários de decisão e interações criadas com ferramentas de autor profissionais de referência internacional.",
      },
      {
        title: "Vídeo e multimédia",
        description:
          "Integração de vídeo, áudio, animação e elementos gráficos para reforçar a compreensão dos temas.",
      },
      {
        title: "Avaliações e acompanhamento",
        description:
          "Testes, questionários e momentos de verificação que permitem medir a aprendizagem ao longo do percurso.",
      },
    ],
    possibilities: {
      heading: "Recursos que podemos incluir nos cursos",
      note:
        "A combinação de recursos é definida em função dos objetivos do curso e do perfil dos formandos.",
      items: [
        "SCORM 1.2",
        "SCORM 2004",
        "Interatividade avançada",
        "Simulações",
        "Vídeo",
        "Multimédia",
        "Storytelling",
        "Gamificação",
        "Progressão e níveis",
        "Microlearning",
        "Avaliações",
        "Recursos personalizados",
      ],
    },

    benefits: [
      {
        title: "Mais envolvimento",
        description: "Conteúdos que mantêm a atenção e reduzem o abandono a meio do percurso.",
      },
      {
        title: "Aprendizagem aplicada",
        description: "Estrutura pensada para que o conhecimento seja compreendido e utilizado.",
      },
      {
        title: "Compatibilidade",
        description: "Cursos preparados para funcionar na sua plataforma de formação.",
      },
      {
        title: "Identidade própria",
        description: "Conteúdos alinhados com a linguagem, o tom e a imagem da organização.",
      },
    ],
    audience: [
      "Organizações que precisam de formar equipas à distância",
      "Entidades formadoras que querem digitalizar a sua oferta",
      "Equipas com conteúdos existentes por converter para eLearning",
      "Departamentos de formação e recursos humanos",
      "Instituições de ensino e centros de formação",
      "Projetos de onboarding, compliance ou formação técnica",
    ],
    process: [
      {
        step: "01",
        title: "Levantamento",
        description: "Reunimos objetivos, conteúdos existentes e características do público-alvo.",
      },
      {
        step: "02",
        title: "Desenho",
        description: "Definimos a estrutura pedagógica, o percurso e os recursos a utilizar.",
      },
      {
        step: "03",
        title: "Produção",
        description: "Desenvolvemos o curso com os conteúdos, interações e avaliações previstos.",
      },
      {
        step: "04",
        title: "Validação e entrega",
        description: "Revemos consigo, ajustamos e disponibilizamos o curso na plataforma.",
      },
    ],
    approach: [
      {
        title: "Pedagogia antes da ferramenta",
        description:
          "A tecnologia é escolhida depois de definido o que o formando precisa de aprender.",
      },
      {
        title: "Conteúdo com ritmo",
        description:
          "Módulos com dimensão adequada, linguagem clara e progressão que sustenta a atenção.",
      },
      {
        title: "Trabalho com o seu conhecimento",
        description:
          "Partimos dos conteúdos e da experiência da organização, sem inventar aquilo que não nos é dado.",
      },
    ],
    faq: [
      {
        question: "Podem criar cursos a partir dos nossos materiais?",
        answer:
          "Sim. Trabalhamos a partir de manuais, apresentações, vídeos ou documentação técnica já existentes e transformamos esse material num curso estruturado para o formato digital.",
      },
      {
        question: "Que formatos de curso produzem?",
        answer:
          "Produzimos cursos interativos, percursos com vídeo e multimédia, módulos de microlearning e formatos mistos, conforme os objetivos de aprendizagem.",
      },
      {
        question: "Os cursos funcionam na nossa plataforma?",
        answer:
          "Sim. Os cursos podem ser produzidos em formatos compatíveis com plataformas LMS, nomeadamente SCORM, permitindo o registo de progresso e de resultados.",
      },
      {
        question: "Que ferramentas utilizam na produção?",
        answer:
          "Utilizamos ferramentas como Articulate Storyline, Articulate Rise 360 e H5P, entre outras, escolhidas em função do tipo de curso e do nível de interatividade pretendido.",
      },
      {
        question: "É possível incluir gamificação?",
        answer:
          "Sim. Elementos de gamificação, progressão e níveis podem ser incluídos quando fazem sentido para o tema e para o público.",
      },
      {
        question: "Também tratam da plataforma onde o curso vai ficar?",
        answer:
          "Sim, através do serviço de Plataformas eLearning. Os dois serviços podem ser articulados no mesmo projeto.",
      },
    ],
    ctaMid: {
      title: "Tem conteúdos à espera de ganhar vida?",
      text: "Mostre-nos o que já tem e avaliamos como pode ser transformado num curso online.",
      button: "Falar sobre o projeto",
    },
    ctaFinal: {
      title: "Vamos criar o seu curso eLearning",
      text: "Conte-nos os seus objetivos de formação e propomos o caminho mais adequado.",
      button: "Solicitar informação",
    },
  },
  {
    number: "03",
    slug: "integracoes-desenvolvimento",
    path: "/servicos/integracoes-desenvolvimento",
    icon: Puzzle,
    title: "Integrações e Desenvolvimento à Medida",
    heroTitle: "Integrações e Desenvolvimento",
    heroHighlight: "à Medida",
    heroSubtitle:
      "Quando a configuração padrão de uma plataforma não chega, desenvolvemos e integramos aquilo que o projeto exige.",
    cardDescription:
      "Integrações via API, automatizações e desenvolvimento de funcionalidades específicas, incluindo soluções de IA quando aplicável.",
    metaTitle: "Integrações e Desenvolvimento à Medida para eLearning | i9 Learning",
    metaDescription:
      "Integrações via API, automatizações, SSO, eCommerce, videoconferência e desenvolvimento de funcionalidades personalizadas para plataformas eLearning.",
    keywords:
      "integrações LMS, API, automatização, SSO, eCommerce eLearning, videoconferência, desenvolvimento à medida, funcionalidades personalizadas, soluções de IA",
    navLabel: "Integrações",
    challenge: {
      title: "A necessidade",
      paragraphs: [
        "Há projetos que ultrapassam aquilo que uma plataforma oferece de origem.",
        "A informação dos formandos está noutro sistema, o processo de inscrição obriga a trabalho manual repetido, falta uma funcionalidade específica ou é preciso ligar a formação a ferramentas que a organização já utiliza.",
        "Sem essa ligação, a plataforma funciona isolada e a equipa continua a perder tempo em tarefas que podiam ser automáticas.",
      ],
    },
    solution: {
      title: "A solução",
      paragraphs: [
        "Adaptamos e expandimos a solução eLearning de acordo com os requisitos específicos de cada projeto.",
        "Ligamos a plataforma a sistemas externos, automatizamos processos e desenvolvemos funcionalidades que não existem de raiz, mantendo a coerência e a estabilidade do ambiente.",
        "A Inteligência Artificial entra aqui como uma das possibilidades de desenvolvimento, aplicada quando traz valor real ao projeto — e não como um fim em si mesma.",
      ],
    },
    capabilities: [
      {
        title: "Integração com sistemas externos",
        description:
          "Ligação da plataforma a sistemas de gestão, recursos humanos ou outras aplicações através de API.",
      },
      {
        title: "Integração entre plataformas",
        description:
          "Comunicação entre diferentes ambientes, evitando duplicação de dados e de trabalho.",
      },
      {
        title: "Automatizações",
        description:
          "Eliminação de tarefas manuais repetidas em inscrições, atribuições, notificações ou emissão de documentos.",
      },
      {
        title: "Funcionalidades personalizadas",
        description:
          "Desenvolvimento de módulos e comportamentos específicos que respondem a requisitos próprios da organização.",
      },
      {
        title: "Ligação a serviços externos",
        description:
          "Integração de videoconferência, agendas, pagamentos ou outros serviços no fluxo da formação.",
      },
      {
        title: "Soluções de IA aplicadas",
        description:
          "Desenvolvimento de componentes com Inteligência Artificial dentro de projetos onde essa tecnologia acrescenta valor.",
      },
    ],
    possibilities: {
      heading: "Exemplos de desenvolvimento e integração",
      note:
        "Cada necessidade técnica é avaliada individualmente. Estes são exemplos do tipo de trabalho que pode ser realizado.",
      items: [
        "Integração com sistemas externos via API",
        "Integração entre plataformas",
        "Automatizações",
        "Videoconferência",
        "Agendas",
        "eCommerce",
        "SSO",
        "Menus multidioma",
        "Funcionalidades personalizadas",
        "Serviços externos",
        "Soluções específicas",
        "Soluções de IA",
      ],
    },
    benefits: [
      {
        title: "Menos trabalho manual",
        description: "Processos automatizados libertam a equipa para o que é realmente importante.",
      },
      {
        title: "Sistemas a falar entre si",
        description: "Informação sincronizada, sem duplicações nem introdução repetida de dados.",
      },
      {
        title: "Solução à medida",
        description: "Funcionalidades desenhadas para o processo real da organização.",
      },
      {
        title: "Capacidade de evoluir",
        description: "Uma base técnica preparada para acompanhar novas necessidades.",
      },
    ],
    audience: [
      "Organizações com vários sistemas que precisam de comunicar",
      "Projetos com requisitos técnicos fora do padrão",
      "Equipas com processos manuais repetitivos na gestão da formação",
      "Entidades que vendem formação online e precisam de eCommerce",
      "Projetos multidioma ou com múltiplas entidades",
      "Organizações que pretendem explorar IA aplicada à formação",
    ],
    process: [
      {
        step: "01",
        title: "Levantamento técnico",
        description: "Identificamos sistemas envolvidos, requisitos e restrições do projeto.",
      },
      {
        step: "02",
        title: "Proposta de abordagem",
        description: "Definimos a solução técnica e o modo como será integrada no ambiente existente.",
      },
      {
        step: "03",
        title: "Desenvolvimento",
        description: "Construímos a integração ou a funcionalidade e testamos o seu comportamento.",
      },
      {
        step: "04",
        title: "Implementação",
        description: "Colocamos em produção e acompanhamos o funcionamento da solução.",
      },
    ],
    approach: [
      {
        title: "Requisito primeiro, tecnologia depois",
        description:
          "Só propomos desenvolvimento quando existe uma necessidade concreta que o justifique.",
      },
      {
        title: "Estabilidade acima de tudo",
        description:
          "Cada desenvolvimento é pensado para conviver com a plataforma sem comprometer o que já funciona.",
      },
      {
        title: "IA como meio",
        description:
          "A Inteligência Artificial é aplicada dentro de projetos concretos, integrada na solução e não vendida à parte.",
      },
    ],
    faq: [
      {
        question: "Conseguem integrar a plataforma com o nosso sistema interno?",
        answer:
          "Na generalidade dos casos sim, desde que o sistema disponibilize uma forma de comunicação, normalmente uma API. Fazemos primeiro um levantamento técnico para avaliar a viabilidade.",
      },
      {
        question: "O que é uma integração via API?",
        answer:
          "É uma ligação que permite que dois sistemas troquem informação automaticamente entre si, evitando que a mesma informação tenha de ser introduzida manualmente em dois sítios.",
      },
      {
        question: "Podem desenvolver funcionalidades que não existem na plataforma?",
        answer:
          "Sim. Desenvolvemos módulos e funcionalidades personalizadas quando a necessidade não é coberta pelas opções padrão da plataforma.",
      },
      {
        question: "Trabalham com Inteligência Artificial?",
        answer:
          "Sim, como uma das possibilidades de desenvolvimento dentro de um projeto eLearning. A IA é aplicada quando responde a uma necessidade concreta, integrada na solução.",
      },
      {
        question: "É possível vender cursos online através da plataforma?",
        answer:
          "Sim. A integração de eCommerce e de meios de pagamento é uma das possibilidades, avaliada de acordo com os requisitos do projeto.",
      },
      {
        question: "Podem intervir numa plataforma que não implementaram?",
        answer:
          "Sim. Analisamos o ambiente existente e avaliamos o que é possível integrar ou desenvolver a partir dele.",
      },
    ],
    ctaMid: {
      title: "Tem um requisito técnico específico?",
      text: "Descreva-nos a necessidade e avaliamos a viabilidade técnica consigo.",
      button: "Falar sobre o projeto",
    },
    ctaFinal: {
      title: "Vamos adaptar a solução ao seu processo",
      text: "Conte-nos o que precisa de integrar ou desenvolver e analisamos o cenário.",
      button: "Entrar em contacto",
    },
  },
  {
    number: "04",
    slug: "suporte-manutencao",
    path: "/servicos/suporte-manutencao",
    icon: Wrench,
    title: "Suporte e Manutenção",
    heroTitle: "Suporte e",
    heroHighlight: "Manutenção",
    heroSubtitle:
      "Acompanhamento técnico para que a sua plataforma de formação se mantenha estável, atualizada e a funcionar como deve.",
    cardDescription:
      "Suporte técnico, manutenção, configuração e otimização de plataformas eLearning, de forma pontual ou continuada.",
    metaTitle: "Suporte e Manutenção de Plataformas eLearning | i9 Learning",
    metaDescription:
      "Suporte técnico e manutenção de plataformas eLearning: resolução de problemas, configuração, otimização e acompanhamento técnico continuado.",
    keywords:
      "suporte técnico LMS, manutenção Moodle, apoio técnico eLearning, otimização de plataformas, acompanhamento técnico, resolução de problemas LMS",
    navLabel: "Suporte",
    challenge: {
      title: "O desafio",
      paragraphs: [
        "Uma plataforma de formação não termina no dia em que entra em funcionamento.",
        "Surgem dúvidas de utilização, comportamentos inesperados, necessidades de configuração e pedidos que a equipa interna nem sempre tem tempo ou conhecimento técnico para resolver.",
        "Quando esse apoio falta, os problemas acumulam-se e acabam por afetar diretamente quem está a tentar aprender.",
      ],
    },
    solution: {
      title: "A solução",
      paragraphs: [
        "Prestamos apoio técnico à plataforma e a quem a gere, de forma pontual ou em acompanhamento continuado, conforme o contexto do projeto.",
        "Analisamos e resolvemos problemas, fazemos configurações, otimizamos o funcionamento e apoiamos a equipa na utilização diária do ambiente.",
        "O objetivo é simples: manter a formação a funcionar sem interrupções e com quem a gere a sentir-se apoiado.",
      ],
    },
    capabilities: [
      {
        title: "Suporte técnico",
        description:
          "Apoio à equipa responsável pela plataforma na resolução de questões técnicas do dia a dia.",
      },
      {
        title: "Análise e resolução de problemas",
        description:
          "Identificação da origem de comportamentos inesperados e correção do que está a falhar.",
      },
      {
        title: "Manutenção da plataforma",
        description:
          "Trabalho de manutenção necessário para manter o ambiente estável e em condições de utilização.",
      },
      {
        title: "Configuração",
        description:
          "Ajustes de parametrização, permissões, cursos e utilizadores sempre que a operação o exige.",
      },
      {
        title: "Otimização",
        description:
          "Melhoria do funcionamento e da experiência de utilização a partir do uso real da plataforma.",
      },
      {
        title: "Apoio à utilização e à evolução",
        description:
          "Acompanhamento de quem gere a plataforma e apoio na evolução da solução ao longo do tempo.",
      },
    ],
    possibilities: {
      heading: "Tipo de pedidos que acompanhamos",
      note:
        "O serviço pode responder a necessidades pontuais ou a um acompanhamento regular, conforme o contexto do projeto.",
      items: [
        "Resolução de problemas técnicos",
        "Ajustes de configuração",
        "Gestão de utilizadores e permissões",
        "Apoio na criação e estruturação de cursos",
        "Correção de comportamentos inesperados",
        "Otimização do funcionamento",
        "Apoio à utilização da plataforma",
        "Apoio na evolução da solução",
      ],
    },
    benefits: [
      {
        title: "Continuidade",
        description: "A formação mantém-se disponível e a funcionar como esperado.",
      },
      {
        title: "Equipa apoiada",
        description: "Quem gere a plataforma deixa de estar sozinho perante questões técnicas.",
      },
      {
        title: "Problemas resolvidos na origem",
        description: "Análise que procura a causa em vez de aplicar apenas soluções temporárias.",
      },
      {
        title: "Plataforma que evolui",
        description: "Acompanhamento técnico que permite melhorar a solução ao longo do tempo.",
      },
    ],
    audience: [
      "Organizações com plataforma em funcionamento e sem equipa técnica dedicada",
      "Equipas de formação que precisam de apoio técnico regular",
      "Entidades formadoras com utilização intensiva da plataforma",
      "Projetos que exigem estabilidade e disponibilidade permanente",
      "Organizações que herdaram uma plataforma sem acompanhamento",
      "Equipas que precisam de apoio apenas em momentos pontuais",
    ],
    process: [
      {
        step: "01",
        title: "Pedido",
        description: "Recebemos a questão ou a necessidade identificada pela equipa.",
      },
      {
        step: "02",
        title: "Análise",
        description: "Avaliamos a situação e identificamos a origem do problema ou o âmbito do trabalho.",
      },
      {
        step: "03",
        title: "Intervenção",
        description: "Executamos a correção, a configuração ou a otimização necessária.",
      },
      {
        step: "04",
        title: "Validação",
        description: "Confirmamos o resultado com a equipa e deixamos a situação encerrada.",
      },
    ],
    approach: [
      {
        title: "Resposta com contexto",
        description:
          "Conhecemos o projeto e a plataforma, o que permite responder sem repetir explicações a cada pedido.",
      },
      {
        title: "Causa em vez de sintoma",
        description:
          "Procuramos perceber a origem do problema para evitar que volte a acontecer.",
      },
      {
        title: "Flexibilidade",
        description:
          "O apoio ajusta-se à realidade do projeto, seja uma necessidade isolada ou um acompanhamento regular.",
      },
    ],
    faq: [
      {
        question: "Dão suporte a plataformas que não foram implementadas por vocês?",
        answer:
          "Sim. Começamos por analisar o ambiente existente para compreender a configuração e o histórico antes de intervir.",
      },
      {
        question: "O suporte é pontual ou continuado?",
        answer:
          "Pode ser qualquer um dos dois. O serviço pode responder a necessidades pontuais ou a um acompanhamento regular, conforme o contexto do projeto.",
      },
      {
        question: "Que tipo de situações são abrangidas?",
        answer:
          "Resolução e análise de problemas, manutenção, configuração, otimização, apoio à utilização da plataforma e apoio na evolução da solução.",
      },
      {
        question: "Apoiam também a equipa que gere a plataforma?",
        answer:
          "Sim. Uma parte importante do serviço é o apoio a quem administra a plataforma no seu trabalho diário.",
      },
      {
        question: "Também fazem melhorias e não apenas correções?",
        answer:
          "Sim. A otimização do funcionamento e o apoio à evolução da solução fazem parte do âmbito do serviço.",
      },
      {
        question: "Podem ajudar na formação da nossa equipa técnica?",
        answer:
          "Sim, através do serviço de Formação e Capacitação, orientado para administradores e gestores de plataformas.",
      },
    ],
    ctaMid: {
      title: "A sua plataforma precisa de apoio técnico?",
      text: "Descreva-nos a situação e avaliamos como podemos ajudar.",
      button: "Solicitar informação",
    },
    ctaFinal: {
      title: "Não fique sozinho com a plataforma",
      text: "Fale connosco sobre o acompanhamento técnico de que a sua equipa precisa.",
      button: "Entrar em contacto",
    },
  },
  {
    number: "05",
    slug: "consultoria-estrategia",
    path: "/servicos/consultoria-estrategia",
    icon: Search,
    title: "Consultoria e Estratégia eLearning",
    heroTitle: "Consultoria e Estratégia",
    heroHighlight: "eLearning",
    heroSubtitle:
      "Apoiamos organizações a avaliar, definir e orientar a sua solução de formação online — antes ou durante a implementação.",
    cardDescription:
      "Análise de necessidades, auditoria a plataformas e conteúdos, definição de estratégia e orientação tecnológica para eLearning.",
    metaTitle: "Consultoria e Estratégia eLearning | Auditoria e Análise | i9 Learning",
    metaDescription:
      "Consultoria especializada em eLearning: análise de necessidades, auditoria a plataformas, definição de estratégia, planeamento e orientação tecnológica.",
    keywords:
      "consultoria eLearning, estratégia eLearning, auditoria LMS, análise de plataformas, avaliação de soluções, planeamento formação digital, orientação tecnológica",
    navLabel: "Consultoria",
    challenge: {
      title: "O desafio",
      paragraphs: [
        "Decidir sobre formação online envolve escolhas que condicionam anos de trabalho: que plataforma adotar, que formatos usar, por onde começar e como crescer.",
        "Sem uma análise prévia, é frequente investir em soluções sobredimensionadas, subaproveitadas ou desalinhadas das necessidades reais da organização.",
        "Noutros casos, o projeto já existe mas estagnou — e falta uma leitura externa que identifique o que está a travar os resultados.",
      ],
    },
    solution: {
      title: "A solução",
      paragraphs: [
        "Ajudamos a avaliar, definir e orientar a solução eLearning, com foco exclusivo em formação digital, plataformas, conteúdos e tecnologia aplicada à formação.",
        "Analisamos o que existe, identificamos necessidades, avaliamos alternativas e apresentamos uma orientação clara sobre o caminho a seguir.",
        "O resultado é uma base fundamentada para decidir — seja antes de iniciar um projeto, seja para corrigir o rumo de um projeto em curso.",
      ],
    },
    capabilities: [
      {
        title: "Análise de necessidades",
        description:
          "Levantamento dos objetivos de formação, dos destinatários e das condições reais da organização.",
      },
      {
        title: "Análise e auditoria de plataformas",
        description:
          "Avaliação técnica e funcional do ambiente existente, identificando limitações e oportunidades de melhoria.",
      },
      {
        title: "Avaliação de soluções existentes",
        description:
          "Leitura crítica de plataformas, conteúdos e processos já implementados face aos objetivos pretendidos.",
      },
      {
        title: "Definição de soluções e estratégia",
        description:
          "Proposta de abordagem para a formação digital, com prioridades e faseamento definidos.",
      },
      {
        title: "Planeamento",
        description:
          "Organização das etapas do projeto, com clareza sobre o que fazer primeiro e o que pode esperar.",
      },
      {
        title: "Orientação tecnológica e otimização",
        description:
          "Aconselhamento sobre tecnologias adequadas e identificação de melhorias no que já está em funcionamento.",
      },
    ],
    possibilities: {
      heading: "Situações em que a consultoria é útil",
      note:
        "O âmbito de cada intervenção é definido em função do momento e da maturidade do projeto.",
      items: [
        "Antes de escolher uma plataforma",
        "Antes de iniciar um projeto eLearning",
        "Quando os resultados ficam abaixo do esperado",
        "Quando é preciso justificar uma decisão tecnológica",
        "Quando a plataforma está subaproveitada",
        "Quando há necessidade de reorganizar a oferta formativa",
        "Durante a implementação de um projeto",
        "Na preparação da evolução de uma solução",
      ],
    },
    benefits: [
      {
        title: "Decisões fundamentadas",
        description: "Escolhas apoiadas em análise e não em suposições.",
      },
      {
        title: "Menos desperdício",
        description: "Evitar investimento em soluções desajustadas às necessidades reais.",
      },
      {
        title: "Rumo definido",
        description: "Um caminho claro, com prioridades e etapas identificadas.",
      },
      {
        title: "Visão externa",
        description: "Uma leitura especializada e independente sobre o estado do projeto.",
      },
    ],
    audience: [
      "Organizações a ponderar iniciar formação online",
      "Equipas com projetos eLearning que não estão a produzir resultados",
      "Responsáveis de formação que precisam de fundamentar decisões",
      "Entidades formadoras a repensar a sua oferta digital",
      "Organizações com plataformas subaproveitadas",
      "Projetos em fase de crescimento ou reformulação",
    ],
    process: [
      {
        step: "01",
        title: "Enquadramento",
        description: "Compreendemos o contexto, os objetivos e o ponto de partida da organização.",
      },
      {
        step: "02",
        title: "Análise",
        description: "Avaliamos plataformas, conteúdos, processos e necessidades identificadas.",
      },
      {
        step: "03",
        title: "Orientação",
        description: "Apresentamos conclusões, alternativas e a abordagem recomendada.",
      },
      {
        step: "04",
        title: "Apoio à decisão",
        description: "Acompanhamos a definição do plano e, se pretendido, a sua execução.",
      },
    ],
    approach: [
      {
        title: "Especialização em eLearning",
        description:
          "Não fazemos consultoria genérica. O foco está sempre na formação digital e na tecnologia que a suporta.",
      },
      {
        title: "Análise honesta",
        description:
          "Dizemos o que encontramos, incluindo quando a melhor decisão é não avançar com determinada solução.",
      },
      {
        title: "Orientação prática",
        description:
          "Conclusões traduzidas em passos concretos, não em documentos que ficam na gaveta.",
      },
    ],
    faq: [
      {
        question: "Em que consiste exatamente a consultoria?",
        answer:
          "Consiste em analisar necessidades, avaliar plataformas e soluções existentes, definir estratégia e dar orientação tecnológica para a formação online da organização.",
      },
      {
        question: "Fazem consultoria empresarial geral?",
        answer:
          "Não. O foco é sempre eLearning, formação digital, plataformas, conteúdos e tecnologia aplicada à formação.",
      },
      {
        question: "Podem ajudar-nos a escolher uma plataforma?",
        answer:
          "Sim. Analisamos as necessidades da organização e avaliamos as alternativas disponíveis para apoiar essa decisão.",
      },
      {
        question: "Fazem auditoria a uma plataforma já em funcionamento?",
        answer:
          "Sim. Avaliamos o ambiente existente do ponto de vista técnico e funcional e identificamos o que pode ser otimizado.",
      },
      {
        question: "A consultoria obriga a contratar os restantes serviços?",
        answer:
          "Não. A consultoria pode ser uma intervenção autónoma, destinada apenas a apoiar a decisão da organização.",
      },
      {
        question: "Podem acompanhar o projeto depois da análise?",
        answer:
          "Sim. Se for essa a vontade da organização, acompanhamos a implementação e a evolução do projeto.",
      },
    ],
    ctaMid: {
      title: "Precisa de clareza antes de decidir?",
      text: "Fale connosco sobre o momento em que o seu projeto se encontra.",
      button: "Falar sobre o projeto",
    },
    ctaFinal: {
      title: "Vamos avaliar o seu projeto eLearning",
      text: "Uma análise especializada antes de investir poupa tempo e decisões erradas.",
      button: "Solicitar informação",
    },
  },
  {
    number: "06",
    slug: "formacao-capacitacao",
    path: "/servicos/formacao-capacitacao",
    icon: GraduationCap,
    title: "Formação e Capacitação",
    heroTitle: "Formação e",
    heroHighlight: "Capacitação",
    heroSubtitle:
      "Preparamos equipas para gerir plataformas, produzir conteúdos e tirar partido real das ferramentas de eLearning.",
    cardDescription:
      "Formação adaptada a administradores de plataformas, formadores e criadores de conteúdos, em Moodle, Articulate, H5P e boas práticas eLearning.",
    metaTitle: "Formação e Capacitação em eLearning | Moodle, Articulate, H5P | i9 Learning",
    metaDescription:
      "Formação para administradores de plataformas, gestores de LMS, formadores e criadores de conteúdos: Moodle, Articulate Storyline, Rise 360, H5P e boas práticas.",
    keywords:
      "formação Moodle, formação LMS, formação Articulate Storyline, formação Rise 360, formação H5P, capacitação de formadores, criação de conteúdos eLearning",
    navLabel: "Formação",
    challenge: {
      title: "O desafio",
      paragraphs: [
        "Ter uma boa plataforma e bons conteúdos não garante autonomia à equipa.",
        "É comum encontrar organizações que dependem sempre de apoio externo para tarefas simples, ou que utilizam apenas uma fração das funcionalidades disponíveis porque ninguém as conhece.",
        "A tecnologia existe, mas o conhecimento para a explorar está em falta.",
      ],
    },
    solution: {
      title: "A solução",
      paragraphs: [
        "Formamos as equipas para que consigam trabalhar com autonomia nas ferramentas que utilizam no dia a dia.",
        "A formação é construída a partir do contexto real da organização: as ferramentas que usa, os processos que tem e o nível de conhecimento de quem participa.",
        "O objetivo não é apresentar funcionalidades — é deixar a equipa capaz de as aplicar no seu trabalho.",
      ],
    },
    capabilities: [
      {
        title: "Administração de plataformas",
        description:
          "Capacitação de administradores na gestão de utilizadores, cursos, permissões e configurações.",
      },
      {
        title: "Gestão de LMS",
        description:
          "Formação orientada a quem tem a responsabilidade operacional da plataforma de formação.",
      },
      {
        title: "Criação de conteúdos",
        description:
          "Formação prática em ferramentas de autor para produção de cursos e recursos interativos.",
      },
      {
        title: "Capacitação de formadores",
        description:
          "Apoio a formadores na transição para o formato digital e na dinamização de cursos online.",
      },
      {
        title: "Boas práticas de eLearning",
        description:
          "Princípios de estruturação, ritmo e envolvimento aplicáveis à formação à distância.",
      },
      {
        title: "Formação à medida",
        description:
          "Programas construídos de acordo com as necessidades e o nível de conhecimento da equipa.",
      },
    ],
    possibilities: {
      heading: "Áreas e destinatários",
      note:
        "A formação é adaptável às necessidades da organização, tanto no conteúdo como na profundidade.",
      items: [
        "Moodle",
        "Gestão de plataformas LMS",
        "Articulate Storyline",
        "Articulate Rise 360",
        "H5P",
        "Criação de conteúdos",
        "Formação online",
        "Boas práticas de eLearning",
      ],
    },
    benefits: [
      {
        title: "Autonomia da equipa",
        description: "Menos dependência de apoio externo em tarefas do dia a dia.",
      },
      {
        title: "Tecnologia aproveitada",
        description: "Funcionalidades já disponíveis passam a ser efetivamente utilizadas.",
      },
      {
        title: "Formação contextualizada",
        description: "Conteúdos ligados às ferramentas e aos processos reais da organização.",
      },
      {
        title: "Conhecimento que fica",
        description: "Competências que permanecem na equipa depois do projeto.",
      },
    ],
    audience: [
      "Administradores de plataformas",
      "Gestores de LMS",
      "Formadores e equipas de formação",
      "Criadores de conteúdos",
      "Departamentos de formação e recursos humanos",
      "Equipas em transição para a formação digital",
    ],
    process: [
      {
        step: "01",
        title: "Diagnóstico",
        description: "Identificamos o nível de partida da equipa e as competências pretendidas.",
      },
      {
        step: "02",
        title: "Desenho do programa",
        description: "Definimos conteúdos, duração e formato adequados aos destinatários.",
      },
      {
        step: "03",
        title: "Realização",
        description: "Conduzimos a formação com foco na aplicação prática às tarefas reais.",
      },
      {
        step: "04",
        title: "Consolidação",
        description: "Esclarecemos dúvidas posteriores e apoiamos a aplicação do que foi aprendido.",
      },
    ],
    approach: [
      {
        title: "Prática antes de teoria",
        description:
          "A formação é orientada para o trabalho real que a equipa tem de executar.",
      },
      {
        title: "Ritmo adaptado",
        description:
          "O programa acompanha o nível de conhecimento dos participantes, sem pressupor bases que não existem.",
      },
      {
        title: "Ligação ao contexto",
        description:
          "Sempre que possível, usamos o ambiente e os casos da própria organização.",
      },
    ],
    faq: [
      {
        question: "A quem se destina esta formação?",
        answer:
          "A administradores de plataformas, gestores de LMS, formadores, equipas de formação e criadores de conteúdos, entre outros perfis envolvidos na formação digital.",
      },
      {
        question: "Que áreas podem ser abordadas?",
        answer:
          "Moodle, gestão de plataformas LMS, Articulate Storyline, Articulate Rise 360, H5P, criação de conteúdos, formação online e boas práticas de eLearning.",
      },
      {
        question: "A formação é adaptada à nossa realidade?",
        answer:
          "Sim. Os conteúdos e a profundidade são definidos a partir das necessidades da organização e do nível de conhecimento dos participantes.",
      },
      {
        question: "É necessário conhecimento prévio?",
        answer:
          "Não necessariamente. O programa é desenhado a partir do nível de partida da equipa, podendo começar do início.",
      },
      {
        question: "A formação pode ser realizada à distância?",
        answer:
          "Sim. O formato é definido em conjunto com a organização, de acordo com a disponibilidade e as características da equipa.",
      },
      {
        question: "Podem formar a equipa na plataforma que já utilizamos?",
        answer:
          "Sim. Sempre que possível, a formação decorre no ambiente e com os casos reais da própria organização.",
      },
    ],
    ctaMid: {
      title: "Quer tornar a sua equipa autónoma?",
      text: "Fale connosco sobre as competências que pretende desenvolver.",
      button: "Solicitar informação",
    },
    ctaFinal: {
      title: "Vamos capacitar a sua equipa",
      text: "Conte-nos quem vai participar e o que pretende alcançar com a formação.",
      button: "Entrar em contacto",
    },
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
