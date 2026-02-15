import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-20 px-4 md:px-8">
        <article className="container-narrow mx-auto prose prose-invert max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">
            Política de <span className="text-primary">Privacidade</span>
          </h1>
          <p className="text-muted-foreground mb-4">Última atualização: Fevereiro de 2026</p>

          <section className="space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Responsável pelo Tratamento</h2>
              <p>A i9 Nexus é um portal de soluções tecnológicas com base em Coimbra, Portugal, responsável pelo tratamento dos dados pessoais recolhidos através deste website.</p>
              <p>Email de contacto: geral.i9nexus@gmail.com</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Dados Pessoais Recolhidos</h2>
              <p>Recolhemos apenas os dados que nos fornece voluntariamente através do formulário de contacto:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Nome completo</li>
                <li>Endereço de email</li>
                <li>Mensagem/conteúdo da comunicação</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. Finalidade do Tratamento</h2>
              <p>Os dados pessoais são tratados para as seguintes finalidades:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Responder a pedidos de contacto e orçamentos</li>
                <li>Comunicar informações sobre os nossos serviços</li>
                <li>Cumprir obrigações legais aplicáveis</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Base Legal</h2>
              <p>O tratamento de dados baseia-se no consentimento do titular (artigo 6.º, n.º 1, alínea a) do RGPD) e no interesse legítimo da i9 Nexus em responder aos pedidos recebidos.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Conservação dos Dados</h2>
              <p>Os dados pessoais são conservados apenas pelo período necessário para a finalidade para a qual foram recolhidos, ou conforme exigido por lei.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Partilha de Dados</h2>
              <p>Não partilhamos, vendemos ou cedemos os seus dados pessoais a terceiros, exceto quando necessário para cumprir obrigações legais.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">7. Direitos do Titular</h2>
              <p>Nos termos do RGPD, tem o direito de:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Aceder aos seus dados pessoais</li>
                <li>Solicitar a retificação de dados incorretos</li>
                <li>Solicitar a eliminação dos seus dados</li>
                <li>Opor-se ao tratamento dos seus dados</li>
                <li>Solicitar a portabilidade dos dados</li>
              </ul>
              <p className="mt-2">Para exercer estes direitos, contacte-nos através de geral.i9nexus@gmail.com.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">8. Segurança</h2>
              <p>Implementamos medidas técnicas e organizativas adequadas para proteger os seus dados pessoais contra acesso não autorizado, perda ou destruição.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">9. Cookies</h2>
              <p>Este website pode utilizar cookies essenciais para o seu funcionamento. Não utilizamos cookies de rastreamento ou publicidade.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">10. Alterações a Esta Política</h2>
              <p>Reservamo-nos o direito de atualizar esta política de privacidade. Quaisquer alterações serão publicadas nesta página com a data de atualização revista.</p>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
