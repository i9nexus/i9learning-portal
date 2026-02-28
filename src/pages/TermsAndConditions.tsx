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
        <article className="container-narrow mx-auto prose prose-invert prose-strong:text-white max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">
            Termos e Condições de <span className="text-primary">Prestação de Serviços</span>
          </h1>
          <p className="text-muted-foreground mb-4">Última atualização: Fevereiro de 2026</p>

          <section className="space-y-6 text-muted-foreground leading-relaxed [&_strong]:text-foreground">
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Objeto e Âmbito</h2>
              <p>
                Os presentes Termos e Condições regulam a prestação de serviços tecnológicos pela i9 Learning, definindo
                os direitos e obrigações de ambas as partes — Prestador de Serviços e Cliente — no âmbito dos projetos
                contratados.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>Conformidade com a Proposta:</strong> O projeto abrange exclusivamente as especificações
                  definidas no plano de trabalhos e na proposta comercial aprovada. Quaisquer elementos não contemplados
                  na proposta original não fazem parte do âmbito do projeto.
                </li>
                <li>
                  <strong>Alterações ao Âmbito:</strong> Qualquer funcionalidade, serviço ou alteração não prevista
                  expressamente será objeto de novo orçamento e dependerá de aprovação prévia, por escrito, do Prestador
                  de Serviços. As alterações solicitadas fora do âmbito original poderão impactar os prazos e custos
                  inicialmente acordados.
                </li>
                <li>
                  <strong>Validade:</strong> As propostas apresentadas têm uma validade de 30 (trinta) dias a contar da
                  data de emissão, salvo indicação em contrário expressa na proposta.
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
                  serviços. A qualidade e pertinência dos materiais fornecidos são da responsabilidade do Cliente.
                </li>
                <li>
                  <strong>Titularidade:</strong> O Cliente garante ser o legítimo titular (ou possuir autorização
                  válida) de todos os materiais, marcas, logótipos e dados fornecidos, assumindo total responsabilidade
                  civil e legal perante quaisquer reclamações de terceiros relacionadas com direitos de propriedade
                  intelectual ou industrial.
                </li>
                <li>
                  <strong>Condições Técnicas:</strong> É da responsabilidade do Cliente assegurar que dispõe das
                  infraestruturas, plataformas externas e requisitos técnicos necessários ao correto funcionamento da
                  solução, incluindo serviços de alojamento, domínio e conectividade.
                </li>
                <li>
                  <strong>Conformidade Legal:</strong> A utilização da solução desenvolvida deve cumprir toda a
                  legislação vigente aplicável, incluindo, mas não se limitando ao RGPD, direitos de autor, legislação
                  comercial e regulamentações setoriais, sendo essa conformidade da inteira responsabilidade do Cliente.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. Execução e Prazos</h2>
              <p>
                O cumprimento dos prazos acordados está diretamente dependente da colaboração do Cliente e do respeito
                pelas condições estabelecidas nestes termos:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>Suspensão por Atraso do Cliente:</strong> O atraso no fornecimento de conteúdos, acessos ou
                  validações por parte do Cliente suspende automaticamente a contagem dos prazos de entrega, não sendo
                  imputável ao Prestador de Serviços qualquer responsabilidade por esse adiamento. A retoma dos
                  trabalhos fica condicionada à disponibilidade da agenda do Prestador de Serviços.
                </li>
                <li>
                  <strong>Intervenções Técnicas Externas:</strong> O Cliente não deve proceder a alterações técnicas,
                  estruturais ou de configuração na solução sem validação prévia e expressa do Prestador de Serviços.
                  Qualquer modificação não autorizada liberta o Prestador de Serviços de toda e qualquer
                  responsabilidade por falhas, mau funcionamento ou perda de dados resultantes dessa intervenção.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                4. Conclusão Técnica e Entrega
              </h2>
              <p>
                A entrega do projeto segue um processo estruturado que assegura a correta transferência de conhecimento
                e operacionalidade:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>Definição de Conclusão:</strong> Considera-se "Conclusão Técnica" a implementação funcional de
                  todos os itens e funcionalidades previstos na proposta original aprovada, independentemente de pedidos
                  adicionais realizados fora do âmbito inicial do projeto.
                </li>
                <li>
                  <strong>Guia do Utilizador e Acessos:</strong> O Guia do Utilizador, contendo credenciais de acesso e
                  instruções operacionais, será disponibilizado momentos antes da sessão de formação. A entrega deste
                  guia e dos respetivos acessos está condicionada à liquidação total do valor do projeto.
                </li>
                <li>
                  <strong>Sessão de Formação:</strong> A sessão de formação destina-se a capacitar o Cliente na
                  utilização autónoma da solução desenvolvida e será agendada após a confirmação do pagamento final. A
                  formação cobre exclusivamente as funcionalidades previstas na proposta original.
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
                  <strong>Modalidade de Pagamento 50/50 para Projetos de Desenvolvimento e Produção:</strong>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>
                      50% na Adjudicação: Pagamento inicial obrigatório para reserva de agenda e início do
                      desenvolvimento do projeto.
                      <strong>50% na Adjudicação:</strong> Pagamento inicial obrigatório para reserva de agenda e início
                      do desenvolvimento do projeto.
                    </li>
                    <li>
                      50% na Conclusão: Pagamento devido após a Conclusão Técnica do projeto, sendo condição obrigatória
                      para a entrega de acessos, credenciais e realização da sessão de formação.
                      <strong>50% na Conclusão:</strong> Pagamento devido após a Conclusão Técnica do projeto, sendo
                      condição obrigatória para a entrega de acessos, credenciais e realização da sessão de formação.
                    </li>
                  </ul>
                </li>
                <li>
                  Modalidade de Pré-pagamento para Serviços de Formação, Consultoria ou Suporte:  Todos os serviços de
                  formação, consultoria ou suporte deverão ser pagos na totalidade (100%) antes do início da prestação
                  do serviço, conforme valor apresentado na proposta comercial. Este pagamento é condição obrigatória
                  para iniciar a execução destes serviços.
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
                A proteção da propriedade intelectual e a confidencialidade são pilares fundamentais da relação
                contratual:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>Direitos de Utilização:</strong> O Cliente adquire o direito de utilizar e operar a solução
                  desenvolvida para os fins exclusivamente acordados na proposta, após a liquidação integral do
                  orçamento. Este direito não inclui a propriedade do código-fonte ou das metodologias utilizadas.
                </li>
                <li>
                  <strong>Titularidade do Prestador:</strong> A propriedade intelectual do código-fonte, design,
                  arquitetura, metodologias, frameworks e know-how técnico permanece na titularidade exclusiva do
                  Prestador de Serviços. É expressamente proibida a reprodução, engenharia reversa, revenda, sublicença
                  ou cessão da solução, no todo ou em parte, sem autorização prévia e escrita do Prestador de Serviços.
                </li>
                <li>
                  <strong>Sigilo Profissional:</strong> É proibida a partilha, divulgação ou reprodução da proposta
                  comercial, métodos de trabalho, processos internos, ou a gravação e divulgação de sessões de formação,
                  reuniões online e qualquer comunicação privada sem autorização prévia e expressa, por escrito, do
                  Prestador de Serviços.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                7. Exclusões e Limitação de Responsabilidade
              </h2>
              <p>As seguintes exclusões e limitações aplicam-se à prestação de serviços pela i9 Learning:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>Custos de Terceiros:</strong> Serviços como registo de domínios, renovação de domínios,
                  alojamento web, certificados SSL, APIs de inteligência artificial (LLMs), gateways de pagamento,
                  licenças de software de terceiros ou quaisquer outros serviços externos não estão incluídos no
                  orçamento e são da exclusiva responsabilidade e encargo do Cliente.
                </li>
                <li>
                  <strong>Falhas Externas:</strong> O Prestador de Serviços não se responsabiliza por falhas,
                  indisponibilidades, alterações de preço ou descontinuação de serviços de terceiros após a entrega do
                  projeto, incluindo mas não se limitando a serviços de alojamento, APIs externas e plataformas de
                  pagamento.
                </li>
                <li>
                  <strong>Limite de Responsabilidade:</strong> A responsabilidade total do Prestador de Serviços está
                  limitada ao valor efetivamente pago pelo Cliente no âmbito do projeto em causa, excluindo-se
                  expressamente quaisquer danos indiretos, consequenciais, lucros cessantes, perda de dados ou perdas de
                  oportunidade de negócio.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">8. Lei Aplicável e Foro</h2>
              <p>
                O presente contrato e os presentes Termos e Condições de Prestação de Serviços regem-se pela lei
                portuguesa. Para a resolução de qualquer litígio emergente da interpretação ou execução destes termos, é
                competente o foro da comarca de Coimbra, com renúncia expressa a qualquer outro.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">9. Aceitação</h2>
              <p>
                A adjudicação do projeto e o respetivo pagamento inicial constituem a aceitação integral e sem reservas
                dos presentes Termos e Condições de Prestação de Serviços por parte do Cliente.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">10. Contacto</h2>
              <p>
                Para quaisquer questões relacionadas com estes termos, contacte-nos através de
                geral.i9learning@gmail.com ou pelo telemóvel +351 910 213 246.
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
