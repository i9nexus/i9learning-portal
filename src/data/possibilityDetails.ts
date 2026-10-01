/**
 * Descrições das possibilidades por serviço (chave = título existente em services.ts / serviceEnrichment.ts).
 */
export const possibilityDetails: Record<string, Record<string, string>> = {
  "plataformas-elearning": {
    SCORM:
      "Receção de cursos em SCORM 1.2 e 2004 com registo de conclusão, tempo e pontuação, para que cada conteúdo interativo seja acompanhado com rigor dentro da plataforma.",
    xAPI:
      "Registo de experiências de aprendizagem para além do curso tradicional — simulações, atividades práticas ou recursos externos — com dados mais ricos para análise.",
    LTI:
      "Ligação segura a ferramentas e conteúdos de terceiros sem novos acessos, abrindo-os diretamente dentro do curso e devolvendo resultados à plataforma.",
    "SSO / Single Sign-On":
      "Entrada na plataforma com as mesmas credenciais usadas noutros sistemas da organização, reduzindo palavras-passe esquecidas e pedidos de apoio.",
    Videoconferência:
      "Sessões síncronas agendadas e acedidas a partir do próprio curso, com presenças e gravações associadas ao percurso de cada formando.",
    Agendas:
      "Calendário com sessões, prazos de entrega e eventos de cada curso, visível para formandos e formadores e sincronizável com agendas pessoais.",
    "Gestão de inscrições":
      "Inscrições manuais, automáticas, por código ou por pedido com aprovação, com limites de vagas e listas de espera configuráveis por curso.",
    Certificados:
      "Emissão automática de certificados com o modelo gráfico da organização, código de verificação e regras de atribuição associadas à conclusão.",
    Relatórios:
      "Painéis e exportações sobre acessos, progresso, conclusões e resultados, por curso, grupo ou formando, para apoiar decisões e auditorias.",
    eCommerce:
      "Venda de cursos online com pagamento integrado e inscrição imediata após a compra, eliminando passos manuais entre a venda e o acesso.",
    "Menus multidioma":
      "Interface e navegação disponíveis em vários idiomas, com seleção pelo utilizador, para servir públicos de diferentes países na mesma plataforma.",
    Integrações:
      "Troca de dados com sistemas de recursos humanos, CRM ou faturação, evitando duplicação de registos e mantendo a informação sempre coerente.",
    "Funcionalidades personalizadas":
      "Desenvolvimento de módulos específicos quando o Moodle padrão não responde a um processo próprio da organização, mantendo a compatibilidade com atualizações.",
  },
  "cursos-conteudos-elearning": {
    "SCORM 1.2":
      "Pacotes no formato mais compatível do mercado, funcionando na generalidade dos LMS e garantindo registo de conclusão e pontuação sem surpresas.",
    "SCORM 2004":
      "Formato indicado quando é necessário registar mais detalhe — sequenciação de módulos, estados de progresso e resultados por objetivo de aprendizagem.",
    "Interatividade avançada":
      "Cenários com escolhas, arrastar e largar, cliques exploratórios e feedback imediato, que obrigam o formando a participar em vez de apenas ler.",
    Simulações:
      "Reprodução de procedimentos, sistemas ou situações reais num ambiente seguro, onde errar faz parte da aprendizagem e não tem consequências.",
    Vídeo:
      "Vídeos curtos integrados no percurso, com guião pedagógico e pontos de verificação, para explicar o que é difícil transmitir apenas por texto.",
    Multimédia:
      "Combinação equilibrada de áudio, animação, ilustração e texto, adaptada ao tema e ao público, para manter a atenção sem sobrecarregar.",
    Storytelling:
      "Conteúdos construídos à volta de personagens e situações do dia a dia da organização, tornando a mensagem mais memorável e próxima.",
    Gamificação:
      "Pontos, desafios, conquistas e missões aplicados com critério pedagógico, para aumentar a motivação e a taxa de conclusão.",
    "Progressão e níveis":
      "Percursos com desbloqueio progressivo de módulos, garantindo que o formando domina cada etapa antes de avançar para a seguinte.",
    Microlearning:
      "Unidades curtas e focadas num único objetivo, fáceis de consumir no telemóvel e úteis para reforço ou consulta rápida no posto de trabalho.",
    Avaliações:
      "Quizzes, casos práticos e avaliações finais com feedback explicativo, com resultados enviados para a plataforma para efeitos de certificação.",
    "Recursos personalizados":
      "Guias descarregáveis, infografias, glossários ou fichas de apoio criados à medida, que prolongam a utilidade do curso depois de concluído.",
  },
  "integracoes-desenvolvimento": {
    "Integração com sistemas externos via API":
      "Ligação da plataforma a sistemas internos através de API, para criar utilizadores, inscrever formandos ou devolver resultados sem intervenção manual.",
    "Integração entre plataformas":
      "Sincronização entre o LMS e outras plataformas em uso — portais, intranets ou sites — para que a informação circule num único sentido coerente.",
    Automatizações:
      "Tarefas repetitivas executadas automaticamente: inscrições por regra, lembretes de prazos, envio de certificados ou atualização de grupos.",
    Videoconferência:
      "Ligação a serviços de videoconferência para criar sessões a partir do curso, com acesso direto e registo de participação.",
    Agendas:
      "Sincronização de sessões e prazos com calendários externos, para que formandos e formadores tenham a mesma informação em todo o lado.",
    eCommerce:
      "Ligação a meios de pagamento e lojas online, com inscrição automática após compra e dados de faturação enviados para os sistemas certos.",
    SSO:
      "Autenticação única com o diretório ou fornecedor de identidade da organização, centralizando o controlo de acessos e a segurança.",
    "Menus multidioma":
      "Estruturas de navegação e conteúdos em vários idiomas, com regras de apresentação por perfil ou país do utilizador.",
    "Funcionalidades personalizadas":
      "Módulos desenvolvidos à medida para processos que nenhuma ferramenta existente cobre, mantendo a plataforma atualizável.",
    "Serviços externos":
      "Ligação a serviços de terceiros — envio de mensagens, armazenamento, assinatura ou análise — para ampliar o que a plataforma consegue fazer.",
    "Soluções específicas":
      "Ferramentas desenhadas para um caso concreto, como fluxos de aprovação, formulários avançados ou áreas reservadas para parceiros.",
    "Soluções de IA":
      "Integração de inteligência artificial em tarefas concretas, como apoio à pesquisa de conteúdos, resumos ou assistentes de ajuda ao formando.",
  },
  "suporte-manutencao": {
    "Resolução de problemas técnicos":
      "Diagnóstico e correção de erros que impedem o acesso, a navegação ou o registo de progresso, com explicação clara do que aconteceu.",
    "Ajustes de configuração":
      "Alteração de definições da plataforma à medida que as necessidades mudam — inscrições, notificações, avaliações ou aparência.",
    "Gestão de utilizadores e permissões":
      "Revisão de perfis e papéis, correção de acessos indevidos e apoio em importações de utilizadores, para que cada pessoa veja apenas o que deve.",
    "Apoio na criação e estruturação de cursos":
      "Ajuda na organização de cursos na plataforma — secções, atividades, regras de conclusão — para que fiquem consistentes e fáceis de seguir.",
    "Correção de comportamentos inesperados":
      "Análise de situações anómalas, como progressos que não ficam registados ou notificações que não chegam, até identificar e eliminar a causa.",
    "Otimização do funcionamento":
      "Afinação de desempenho, limpeza de dados obsoletos e revisão de tarefas automáticas, para manter a plataforma rápida e estável.",
    "Apoio à utilização da plataforma":
      "Resposta a dúvidas de gestores e formadores sobre como fazer determinada tarefa, reduzindo bloqueios no dia a dia.",
    "Apoio na evolução da solução":
      "Análise de novas necessidades e recomendação de ajustes ou funcionalidades, para que a plataforma acompanhe o crescimento da formação.",
    "Planeamento e aplicação de atualizações de versão":
      "Atualizações testadas previamente e aplicadas em momentos de menor utilização, garantindo segurança sem interromper a formação.",
    "Verificação de cópias de segurança e recuperação":
      "Confirmação periódica de que as cópias existem e são recuperáveis, para que nenhum curso ou histórico se perca num incidente.",
    "Monitorização de desempenho e tempos de resposta":
      "Acompanhamento contínuo da disponibilidade e velocidade da plataforma, com intervenção antes de os formandos sentirem o problema.",
  },
  "consultoria-estrategia": {
    "Antes de escolher uma plataforma":
      "Levantamento de requisitos e comparação de opções, para escolher uma solução adequada ao volume, público e orçamento da organização.",
    "Antes de iniciar um projeto eLearning":
      "Definição de objetivos, públicos, prioridades e fases, evitando investir em ferramentas ou conteúdos antes de saber o que é realmente necessário.",
    "Quando os resultados ficam abaixo do esperado":
      "Análise de dados de utilização e conclusão para perceber onde os formandos desistem e o que deve mudar para inverter a tendência.",
    "Quando é preciso justificar uma decisão tecnológica":
      "Preparação de fundamentação clara — vantagens, riscos e impacto — para apresentar a uma direção ou a um conselho de decisão.",
    "Quando a plataforma está subaproveitada":
      "Identificação de funcionalidades já disponíveis e não utilizadas, com recomendações práticas para extrair mais valor do investimento feito.",
    "Quando há necessidade de reorganizar a oferta formativa":
      "Revisão da estrutura de cursos, percursos e categorias, para tornar a oferta mais clara para formandos e mais simples de gerir.",
    "Durante a implementação de um projeto":
      "Acompanhamento das decisões ao longo do projeto, ajudando a manter o rumo, a validar entregas e a antecipar riscos.",
    "Na preparação da evolução de uma solução":
      "Planeamento das próximas fases — novas funcionalidades, públicos ou integrações — com prioridades realistas e sequência lógica.",
    "Quando é necessário comparar alternativas tecnológicas":
      "Avaliação objetiva de várias soluções com critérios definidos à partida, para decidir com base em factos e não em promessas comerciais.",
    "Antes de migrar de uma plataforma para outra":
      "Análise do que deve ser migrado, do que pode ser descartado e dos riscos envolvidos, para uma transição segura e sem perda de histórico.",
  },
  "formacao-capacitacao": {
    "Utilização do Moodle":
      "Navegação, organização de cursos e funcionalidades do dia a dia explicadas na plataforma da própria organização, para ganhar autonomia rapidamente.",
    "Gestão de formandos":
      "Inscrever, organizar e acompanhar formandos, consultar o seu percurso e resolver situações frequentes sem depender de apoio externo.",
    "Relatórios e progresso":
      "Leitura e interpretação dos relatórios disponíveis, para identificar quem está atrasado, quem concluiu e onde é preciso intervir.",
    Certificados:
      "Como funcionam as regras de emissão, como consultar certificados emitidos e como responder a pedidos de formandos e auditorias.",
    "Tutoria online":
      "Práticas de acompanhamento à distância — fóruns, mensagens e feedback — que mantêm os formandos envolvidos ao longo do curso.",
    "Avaliação de aprendizagens":
      "Utilização das ferramentas de avaliação disponíveis na plataforma, correção, atribuição de notas e consulta de resultados.",
    "Formação online":
      "Dinamização de sessões e cursos online com as funcionalidades existentes, adaptando a postura do formador ao contexto digital.",
    "Boas práticas de eLearning":
      "Recomendações de utilização que melhoram a experiência dos formandos: comunicação clara, prazos realistas e acompanhamento regular.",
    "Gestão de inscrições e grupos":
      "Organização de turmas e grupos, métodos de inscrição e gestão de vagas, para manter cada edição de curso bem estruturada.",
    "Comunicação com formandos":
      "Utilização de avisos, mensagens e notificações da plataforma para informar no momento certo, sem excesso de comunicações.",
    "Acompanhamento de atividades e prazos":
      "Monitorização de entregas e prazos, com envio de lembretes e intervenção atempada junto de quem fica para trás.",
  },
};
