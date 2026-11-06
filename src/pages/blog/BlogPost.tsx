import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogPosts } from "@/data/blogPosts";
import { useCanonical } from "@/hooks/use-canonical";
import BackToHomeButton from "@/components/BackToHomeButton";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";
import { useToast } from "@/hooks/use-toast";

// Aliases for historical or migrated slugs to prevent broken links
const SLUG_ALIASES: Record<string, string> = {
  "moodle-workplace-gestao-talento-empresarial": "plataformas-lms-moodle-vantagens-analise-mercado",
  "articulate-storyline-rise-conteudos-interativos": "ferramentas-autoria-conteudos-scorm-analise-comparativa",
  "scorm-12-vs-xapi-guia-academia-digital": "scorm-12-vs-xapi-analise-comparativa",
  "microlearning-gamificacao-reduzir-abandono": "microlearning-gamificacao-fatores-retencao",
  "desenho-instrucional-modelo-addie-pratica": "modelo-addie-desenho-instrucional-analise-vantagens",
  "h5p-atividades-interativas-moodle": "h5p-atividades-interativas-moodle-vantagens",
  "blended-learning-estrategia-corporativa": "blended-learning-estrategia-corporativa-vantagens",
  "acessibilidade-wcag-elearning-inclusivo": "acessibilidade-digital-elearning-normas-wcag",
  "como-medir-roi-formacao-online-empresas": "retorno-investimento-roi-formacao-online-empresas",
  "passo-a-passo-instalacao-plataforma-moodle-segura": "instalacao-plataforma-moodle-seguranca-arquitetura",
  "como-criar-cursos-scorm-do-zero-guia-completo": "criacao-cursos-scorm-padroes-vantagens-mercado",
  "microlearning-corporativo-estrategia-pilulas-conhecimento": "microlearning-corporativo-vantagens-metricas",
  "suporte-moodle-preventivo-evitar-falhas-crise": "suporte-moodle-manutencao-preventiva-vantagens",
  "tutores-virtuais-ia-atendimento-formandos": "tutores-virtuais-ia-atendimento-formandos-vantagens",
  "gamificacao-empresarial-open-badges-niveis": "gamificacao-empresarial-badges-vantagens-engajamento",
  "videos-interativos-formacao-digital-h5p-ferramentas": "videos-interativos-elearning-analise-vantagens",
  "auditorias-dgert-relatorios-assiduidade-lms": "auditorias-dgert-requisitos-plataformas-lms",
  "onboarding-digital-colaboradores-academia-corporativa": "onboarding-digital-corporativo-analise-vantagens",
  "desenho-instrucional-storytelling-cenarios-decisao": "desenho-instrucional-storytelling-cenarios-decisao-vantagens",
  "aprendizagem-adaptativa-ia-percursos-personalizados": "aprendizagem-adaptativa-ia-modelos-vantagens",
  "migracao-plataformas-lms-sem-perda-historico": "migracao-plataformas-lms-desafios-vantagens",
  "como-montar-academia-digital-empresa-passo-a-passo": "academias-digitais-corporativas-vantagens-governacao",
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const resolvedSlug = (slug && SLUG_ALIASES[slug]) ? SLUG_ALIASES[slug] : slug;
  const post =
    blogPosts.find((p) => p.slug === resolvedSlug) ||
    blogPosts.find((p) => resolvedSlug && p.slug.includes(resolvedSlug)) ||
    blogPosts[0];

  useCanonical(`/blog/${post?.slug ?? ""}`);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [slug]);

  // Smart related articles: prioritize identical category, then content proximity
  const relatedPosts = useMemo(() => {
    if (!post) return [];
    const others = blogPosts.filter((p) => p.slug !== post.slug);
    const postWords = (post.title + " " + post.excerpt).toLowerCase().split(/\s+/).filter((w) => w.length > 3);

    const scored = others.map((p) => {
      let score = 0;
      // Highest priority: same category
      if (p.category === post.category) score += 12;

      // Secondary priority: word overlap in title and category
      const targetText = (p.title + " " + p.excerpt + " " + p.category).toLowerCase();
      postWords.forEach((word) => {
        if (targetText.includes(word)) score += 2;
      });

      return { post: p, score };
    });

    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 4).map((s) => s.post);
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
        <Navbar />
        <main className="container-narrow mx-auto px-4 py-32 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Artigo não encontrado</h1>
          <p className="text-muted-foreground mb-8">O artigo que procura não existe ou foi movido.</p>
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft size={18} />
            Voltar ao Blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copiado!",
        description: "O link do artigo foi copiado para a área de transferência.",
      });
    }
  };

  const whatsappInquiryUrl = whatsappUrl(
    `Olá! Li o artigo "${post.title}" no blog da i9 Learning e gostaria de falar convosco sobre soluções de eLearning para a minha empresa.`
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between overflow-x-hidden">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <article className="container-narrow mx-auto px-4 sm:px-6 md:px-8 max-w-4xl">
          {/* Breadcrumb & Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <BackToHomeButton />
              <span className="text-border text-sm hidden sm:inline" aria-hidden="true">|</span>
              <Link
                to="/blog"
                className="hidden sm:inline-flex items-center text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Ver todos os artigos
              </Link>
            </div>

            <button
              onClick={handleShare}
              aria-label="Partilhar artigo"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors px-3 py-1.5 rounded-full border border-border/60 hover:border-primary/40 bg-card/40"
            >
              <Share2 size={13} />
              <span>Partilhar</span>
            </button>
          </div>

          {/* Post Header */}
          <header className="mb-8">
            <div className="inline-block mb-3">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                {post.category}
              </span>
            </div>

            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-foreground">
              {post.title}
            </h1>

            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground pb-5 border-b border-border/50">
              <span className="flex items-center gap-1.5">
                <User size={15} className="text-primary/70" />
                {post.author}
              </span>
              <span aria-hidden="true" className="text-border">·</span>
              <span className="flex items-center gap-1.5">
                <Calendar size={15} className="text-primary/70" />
                {post.publishedAt}
              </span>
              <span aria-hidden="true" className="text-border">·</span>
              <span className="flex items-center gap-1.5">
                <Clock size={15} className="text-primary/70" />
                {post.readTime}
              </span>
            </div>
          </header>

          {/* Featured Banner Image: Compact height to show information immediately without excessive scrolling */}
          <div className="relative w-full h-52 sm:h-64 md:h-72 rounded-2xl overflow-hidden border border-white/10 mb-8 sm:mb-10 shadow-xl bg-muted/20">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              loading="eager"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                if (target.parentElement) {
                  target.parentElement.classList.add("bg-gradient-to-br", "from-slate-900", "to-slate-800");
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Article Body Content */}
          <div className="space-y-8 text-foreground/90 text-base sm:text-lg leading-relaxed">
            {/* Intro Lead Paragraph */}
            <p className="text-lg sm:text-xl font-medium text-foreground leading-relaxed border-l-2 border-primary pl-4 sm:pl-6 my-6 text-balance">
              {post.content.intro}
            </p>

            {/* Sections */}
            {post.content.sections.map((section, idx) => (
              <section key={idx} className="space-y-4 pt-4">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                  {section.title}
                </h2>

                {section.body.map((p, pIdx) => (
                  <p key={pIdx} className="text-muted-foreground leading-relaxed">
                    {p}
                  </p>
                ))}

                {section.highlight && (
                  <div className="my-6 p-6 rounded-xl border border-primary/20 bg-primary/5 text-foreground">
                    <p className="text-base sm:text-lg font-medium italic text-primary/90">
                      &ldquo;{section.highlight}&rdquo;
                    </p>
                  </div>
                )}
              </section>
            ))}

            {/* Key Takeaways Box */}
            <div className="my-10 p-6 sm:p-8 rounded-2xl border border-white/10 bg-card/60 backdrop-blur-md">
              <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-primary" />
                Pontos-Chave para a sua Organização
              </h3>
              <ul className="space-y-3">
                {post.content.takeaways.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Soluções i9 Learning Note */}
            {post.content.solutionNote && (
              <div className="my-8 p-6 rounded-2xl border border-primary/25 bg-gradient-to-r from-primary/10 via-primary/5 to-card/60 flex items-start gap-3.5">
                <Sparkles size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <div className="text-sm sm:text-base text-foreground/90">
                  <span className="font-semibold text-primary block mb-1">Como a i9 Learning pode ajudar:</span>
                  <p className="text-muted-foreground leading-relaxed">{post.content.solutionNote}</p>
                </div>
              </div>
            )}
          </div>

          {/* Conversion CTA Box */}
          <div className="mt-14 p-8 sm:p-10 rounded-2xl border border-primary/30 bg-gradient-to-br from-card/80 to-primary/10 text-center relative overflow-hidden">
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3 text-foreground">
              Pronto para transformar a formação na sua empresa?
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-sm sm:text-base">
              A i9 Learning desenvolve soluções personalizadas de LMS Moodle, produção multimédia em SCORM e tutoria inteligente. Fale diretamente com os nossos especialistas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-background font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20"
              >
                <MessageCircle size={18} />
                <span>Conversar no WhatsApp</span>
              </a>

              <Link
                to="/#contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 bg-card/80 hover:bg-card hover:border-primary/40 text-foreground font-semibold transition-all duration-200"
              >
                <span>Pedir Proposta ou Demonstração</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Related Articles Carousel / Grid */}
          {relatedPosts.length > 0 && (
            <div className="mt-20 pt-12 border-t border-border/50">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Outros Artigos Recomendados
                </h3>
                <Link
                  to="/blog"
                  className="text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                >
                  Ver todos
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  <article
                    key={related.slug}
                    className="rounded-xl border border-white/10 bg-card/40 overflow-hidden flex flex-col justify-between group hover:border-primary/30 transition-all duration-200"
                  >
                    <div className="aspect-video relative overflow-hidden bg-muted/20">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-xs text-primary font-medium">
                          {related.category}
                        </span>
                        <h4 className="font-display text-lg font-bold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          <Link to={`/blog/${related.slug}`}>
                            {related.title}
                          </Link>
                        </h4>
                        <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2 mb-4">
                          {related.excerpt}
                        </p>
                      </div>
                      <Link
                        to={`/blog/${related.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:underline"
                      >
                        Ler artigo
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;
