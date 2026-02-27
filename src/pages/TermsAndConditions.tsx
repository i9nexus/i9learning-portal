import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-20 px-4 md:px-8">
        <article className="container-narrow mx-auto prose prose-invert max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">
            Termos e Condições de <span className="text-primary">Prestação de Serviços</span>
          </h1>
          <p className="text-muted-foreground mb-4">Última atualização: Fevereiro de 2026</p>

          <section className="space-y-6 text-muted-foreground leading-relaxed [&_strong]:text-foreground">
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Objeto e Âmbito</h2>
              <p>
                Os presentes Termos e Condições regulam a prestação de serviços, especialmente de natureza tecnológica,
                pela i9 Learning, definindo os direitos e obrigações de ambas as partes — Prestador de Serviços e
                Cliente — no âmbito dos projetos contratados.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>Conformidade com a Proposta:</strong> O projeto abrange exclusivamente as especificações
                  definidas no plano de trabalhos e na proposta comercial aprovada. Quaisquer funcionalidades ou
                  entregas estão limitadas ao âmbito expressamente acordado.
                </li>
                <li>
                  <strong>Alterações ao Âmbito:</strong> Qualquer funcionalidade, serviço ou alteração não prevista
                  expressamente na proposta original será objeto de novo orçamento e dependerá de aprovação prévia, por
                  escrito, do Prestador de Serviços. Estas alterações poderão impactar os prazos e custos inicialmente
                  estabelecidos.
                </li>
                <li>
                  <strong>Validade:</strong> As propostas apresentadas têm uma validade de 30 (trinta) dias a contar da
                  data de emissão, salvo indicação expressa em contrário.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                2. Obrigações e Colaboração do Cliente
              </h2>
              <p>A execução eficaz dos serviços depende da colaboração ativa e atempada do Cliente, nomeadamente:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>Fornecimento de Conteúdos:</strong> O Cliente deve disponibilizar, de forma completa e
                  atempada, todos os conteúdos, informações, credenciais e acessos técnicos necessários à execução dos
                  serviços. A qualidade e pontualidade deste fornecimento são determinantes para o cumprimento dos
                  prazos estabelecidos.
                </li>
                <li>
                  <strong>Titularidade:</strong> O Cliente garante ser o legítimo titular (ou possuir a devida
                  autorização) de todos os materiais, marcas, logótipos e dados fornecidos ao Prestador de Serviços,
                  assumindo total responsabilidade perante quaisquer reclamações, disputas ou ações legais intentadas
                  por terceiros.
                </li>
                <li>
                  <strong>Condições Técnicas:</strong> É da inteira responsabilidade do Cliente assegurar que dispõe das
                  infraestruturas, plataformas externas e requisitos técnicos necessários ao correto funcionamento e
                  implementação da solução contratada.
                </li>
                <li>
                  <strong>Conformidade Legal:</strong> A utilização da solução desenvolvida deve cumprir rigorosamente a
                  legislação vigente, incluindo, mas não se limitando ao RGPD, direitos de autor e demais normas
                  aplicáveis, sendo essa conformidade da inteira responsabilidade do Cliente.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. Execução e Prazos</h2>
              <p>
                A execução dos serviços está sujeita aos prazos acordados na proposta comercial, podendo ser afetada
                pelas seguintes circunstâncias:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>Suspensão por Atraso do Cliente:</strong> O atraso no fornecimento de conteúdos, informações
                  ou acessos por parte do Cliente suspende automaticamente a contagem dos prazos de entrega, não sendo
                  imputável ao Prestador de Serviços qualquer responsabilidade por esse adiamento. A retoma dos
                  trabalhos será efetuada mediante nova calendarização a acordar entre as partes.
                </li>
                <li>
                  <strong>Intervenções Técnicas Externas:</strong> O Cliente não deve proceder a alterações técnicas ou
                  estruturais na solução sem a validação prévia e expressa do Prestador de Serviços. Qualquer
                  modificação não autorizada liberta o Prestador de Serviços de toda e qualquer responsabilidade por
                  falhas, erros ou mau funcionamento que daí resultem.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                4. Conclusão Técnica e Entrega
              </h2>
              <p>
                A entrega do projeto segue um processo estruturado que assegura a qualidade e a transferência de
                conhecimento ao Cliente:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>Definição de Conclusão:</strong> Considera-se "Conclusão Técnica" a implementação funcional de
                  todos os itens e funcionalidades previstos na proposta original, independentemente de pedidos
                  adicionais ou alterações fora do âmbito inicialmente acordado.
                </li>
                <li>
                  <strong>Guia do Utilizador e Acessos:</strong> O Guia do Utilizador, contendo credenciais de acesso e
                  instruções de operação, será disponibilizado momentos antes da sessão de formação. A entrega deste
                  guia e dos respetivos acessos está condicionada à liquidação total do valor do projeto.
                </li>
                <li>
                  <strong>Sessão de Formação:</strong> A sessão de formação destina-se a capacitar o Cliente na correta
                  utilização e gestão da solução desenvolvida e será agendada após a confirmação do pagamento final.
                  Esta sessão é parte integrante do serviço contratado.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Condições Financeiras</h2>
              <p>
                Os pagamentos seguem a modalidade descrita na proposta comercial, obedecendo às seguintes condições:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>Modalidade de Pagamento para Projetos de Desenvolvimento e Produção (50/50):</strong>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>
                      <strong>50% na Adjudicação:</strong> Pagamento inicial obrigatório para reserva de agenda e início
                      do desenvolvimento do projeto.
                    </li>
                    <li>
                      <strong>50% na Conclusão:</strong> Pagamento devido após a Conclusão Técnica do projeto, sendo
                      condição obrigatória para a entrega de acessos, credenciais e realização da sessão de formação.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Pré-pagamento para Serviços de Formação, Consultoria ou Suporte:</strong> Todos os serviços de
                  formação, consultoria ou suporte deverão ser pagos na totalidade (100%) antes do início da prestação
                  do serviço, conforme valor apresentado na proposta comercial. Este pagamento é condição obrigatória
                  para iniciar a execução destes serviços.
                </li>
                <li>
                  <strong>Cancelamento:</strong> Em caso de desistência ou cancelamento do projeto após a adjudicação, o
                  valor inicial de 50% não será reembolsável, a título de compensação pelos recursos alocados e trabalho
                  já realizado ou planeado.
                </li>
                <li>
                  <strong>Incumprimento:</strong> O não cumprimento dos prazos de pagamento acordados determina a
                  suspensão imediata da execução dos trabalhos, sem prejuízo do direito do Prestador de Serviços a
                  exigir o pagamento das quantias em dívida.
                </li>
                <li>
                  <strong>Taxas e Impostos:</strong> Aos valores apresentados nas propostas comerciais acresce o IVA à
                  taxa legal em vigor. Os pagamentos são efetuados por transferência bancária para a conta indicada na
                  fatura.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                6. Propriedade Intelectual e Confidencialidade
              </h2>
              <p>
                A proteção da propriedade intelectual e a confidencialidade são pilares fundamentais da relação entre o
                Prestador de Serviços e o Cliente:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>Direitos de Utilização:</strong> O Cliente adquire o direito de utilizar e operar a solução
                  desenvolvida para os fins expressamente acordados na proposta comercial, após a liquidação integral do
                  orçamento contratado.
                </li>
                <li>
                  <strong>Titularidade do Prestador:</strong> A propriedade intelectual do código-fonte, design,
                  metodologias, frameworks, templates e know-how técnico empregues na solução permanece na titularidade
                  exclusiva do Prestador de Serviços. É expressamente proibida a reprodução, engenharia reversa, revenda
                  ou sublicença da solução, no todo ou em parte, sem autorização prévia e escrita do Prestador de
                  Serviços.
                </li>
                <li>
                  <strong>Sigilo Profissional:</strong> É estritamente proibida a partilha da proposta comercial,
                  métodos de trabalho, processos internos ou a gravação e/ou divulgação de sessões de formação e
                  reuniões online sem autorização prévia e expressa, por escrito, do Prestador de Serviços. O
                  incumprimento desta obrigação poderá dar lugar a ação judicial.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                7. Exclusões e Responsabilidade
              </h2>
              <p>
                A responsabilidade do Prestador de Serviços está limitada ao âmbito do projeto contratado, excluindo-se
                as seguintes situações:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>Custos de Terceiros:</strong> Serviços como registo de domínios, alojamento web, certificados
                  SSL, APIs de inteligência artificial (LLMs), gateways de pagamento ou quaisquer outras ferramentas e
                  plataformas de terceiros não estão incluídos no orçamento e são da inteira responsabilidade do
                  Cliente.
                </li>
                <li>
                  <strong>Falhas Externas:</strong> O Prestador de Serviços não se responsabiliza por falhas,
                  interrupções, atualizações ou descontinuação de serviços prestados por entidades terceiras após a
                  entrega do projeto, incluindo alterações em APIs, plataformas de alojamento ou outros serviços
                  externos.
                </li>
                <li>
                  <strong>Limite de Responsabilidade:</strong> A responsabilidade total do Prestador de Serviços, por
                  qualquer causa e independentemente da forma da ação, limita-se ao valor efetivamente pago pelo Cliente
                  no âmbito do projeto em questão, excluindo-se expressamente quaisquer danos indiretos, incidentais,
                  lucros cessantes, perdas de dados ou perdas de oportunidade de negócio.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">8. Lei Aplicável e Foro</h2>
              <p>
                O presente contrato e os presentes Termos e Condições regem-se pela legislação portuguesa. Para a
                resolução de qualquer litígio emergente da interpretação ou execução dos presentes termos, é competente
                o foro da comarca de Coimbra, com renúncia expressa a qualquer outro.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">9. Contacto</h2>
              <p>
                Para quaisquer questões relacionadas com estes Termos e Condições de Prestação de Serviços, contacte-nos
                através de geral.i9learning@gmail.com ou pelo telemóvel +351 910 213 246.
              </p>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
