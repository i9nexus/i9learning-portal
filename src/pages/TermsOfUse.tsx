import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useCanonical } from "@/hooks/use-canonical";

const TermsOfUse = () => {
  useCanonical("/termos-de-utilizacao");

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => { document.head.removeChild(meta); };
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-20 px-4 md:px-8">
        <article className="container-narrow mx-auto prose prose-invert max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-8">
            Termos de <span className="text-primary">Utilização</span>
          </h1>
          <p className="text-muted-foreground mb-4">Última atualização: Fevereiro de 2026</p>

          <section className="space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Identificação</h2>
              <p>O presente website é operado pela i9 Learning, um portal de soluções de formação online (eLearning) com base em Coimbra, Portugal. Ao aceder e utilizar este website, aceita os presentes Termos de Utilização.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Serviços</h2>
              <p>A i9 Learning presta serviços de implementação de plataformas eLearning, desenvolvimento e produção de conteúdos formativos, consultoria pedagógica, suporte e manutenção, soluções de inteligência artificial e integração de recursos avançados. Os detalhes específicos de cada serviço são acordados individualmente com cada cliente.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. Propriedade Intelectual</h2>
              <p>Todo o conteúdo presente neste website, incluindo textos, imagens, logótipos, design e código-fonte, é da autoria da i9 Learning e está protegido pela legislação portuguesa e europeia de propriedade intelectual. É proibida a reprodução, distribuição ou modificação sem autorização prévia e escrita.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Utilização do Website</h2>
              <p>O utilizador compromete-se a:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Utilizar o website apenas para fins legítimos</li>
                <li>Não interferir com o funcionamento do website</li>
                <li>Não tentar aceder a áreas restritas sem autorização</li>
                <li>Fornecer informações verdadeiras no formulário de contacto</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Limitação de Responsabilidade</h2>
              <p>A i9 Learning esforça-se por manter as informações no website atualizadas e corretas, mas não garante a sua exatidão absoluta. Não nos responsabilizamos por danos diretos ou indiretos resultantes da utilização deste website.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Links Externos</h2>
              <p>Este website pode conter links para websites de terceiros. A i9 Learning não controla nem se responsabiliza pelo conteúdo, políticas de privacidade ou práticas desses websites.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">7. Proteção de Dados</h2>
              <p>O tratamento de dados pessoais é regido pela nossa Política de Privacidade, disponível neste website, em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD).</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">8. Lei Aplicável</h2>
              <p>Os presentes Termos de Utilização são regidos pela lei portuguesa. Para a resolução de qualquer litígio emergente destes termos, será competente o foro da comarca de Coimbra.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">9. Alterações</h2>
              <p>A i9 Learning reserva-se o direito de alterar estes Termos de Utilização a qualquer momento. As alterações entram em vigor após a sua publicação nesta página.</p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">10. Contacto</h2>
              <p>Para quaisquer questões relacionadas com estes termos, contacte-nos através de geral.i9learning@gmail.com ou pelo telemóvel +351 910 213 246.</p>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
