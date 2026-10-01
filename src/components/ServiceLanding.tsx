import { possibilityDetails } from "@/data/possibilityDetails";
import { removedPossibilities, morePossibilities, moreBenefits, possibilityIcons } from "@/data/serviceExtras";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, ArrowRight, BarChart3, CalendarClock, Cloud, Cog, Code2, Database, FileCheck2, GraduationCap, Layers, LifeBuoy, Lock, Palette, Plug, RefreshCw, Search, ShieldCheck, Target, Video, Wand2, Workflow, CheckCircle2, ChevronDown, MessageSquare, Phone, Sparkles, Users } from "lucide-react";

const ICON_RULES: [RegExp, React.ElementType][] = [
  [/segur|prote/i, ShieldCheck], [/acess|sso|autentic/i, Lock], [/migra|atualiz/i, RefreshCw],
  [/tema|gráfic|visual|design|identidade/i, Palette], [/instala|aloja|servidor/i, Cloud],
  [/configura|parametri/i, Cog], [/integra|api|ligação/i, Plug], [/automat/i, Workflow],
  [/ia\b|inteligência/i, Wand2], [/scorm|norma/i, FileCheck2], [/vídeo|video/i, Video],
  [/relatório|análise|métric|dados/i, BarChart3], [/diagnós|auditor|avalia/i, Search],
  [/estratég|plan|objetiv/i, Target], [/suporte|manuten|assist/i, LifeBuoy],
  [/backup|cópia/i, Database], [/formador|tutoria|capacita|formação/i, GraduationCap],
  [/funcionalidade|desenvolv|módulo/i, Code2], [/curso|conteúdo|estrutura/i, Layers],
];
const pickIcon = (title: string, fallback: React.ElementType) =>
  ICON_RULES.find(([re]) => re.test(title))?.[1] ?? fallback;

const CALENDAR_URL = "https://calendar.app.google/Lm89ExVvLMvTWSWa7";
const PHONE_URL = "tel:+351910213246";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceHeroVisual from "@/components/ServiceHeroVisual";

import { useCanonical } from "@/hooks/use-canonical";
import { services, type ServiceDefinition } from "@/data/services";
import { serviceEnrichment } from "@/data/serviceEnrichment";

const WHATSAPP_BASE = "https://wa.me/351910213246?text=";

const whatsappLink = (serviceTitle: string) =>
  `${WHATSAPP_BASE}${encodeURIComponent(
    `Olá, gostaria de saber mais sobre o serviço de ${serviceTitle}.`
  )}`;

const useServiceSeo = (service: ServiceDefinition) => {
  useCanonical(service.path);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = service.metaTitle;

    const setMeta = (selector: string, attr: string, name: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      let created = false;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
        created = true;
      }
      const previous = el.getAttribute("content");
      el.setAttribute("content", content);
      return () => {
        if (created) {
          el?.remove();
        } else if (previous !== null) {
          el?.setAttribute("content", previous);
        }
      };
    };

    const restorers = [
      setMeta('meta[name="description"]', "name", "description", service.metaDescription),
      setMeta('meta[name="keywords"]', "name", "keywords", service.keywords),
      setMeta('meta[property="og:title"]', "property", "og:title", service.metaTitle),
      setMeta(
        'meta[property="og:description"]',
        "property",
        "og:description",
        service.metaDescription
      ),
      setMeta(
        'meta[property="og:url"]',
        "property",
        "og:url",
        `https://i9learning.pt${service.path}`
      ),
      setMeta('meta[name="twitter:title"]', "name", "twitter:title", service.metaTitle),
      setMeta(
        'meta[name="twitter:description"]',
        "name",
        "twitter:description",
        service.metaDescription
      ),
    ];

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: service.title,
          serviceType: service.title,
          description: service.metaDescription,
          url: `https://i9learning.pt${service.path}`,
          areaServed: { "@type": "Country", name: "Portugal" },
          provider: {
            "@type": "Organization",
            name: "i9 Learning",
            url: "https://i9learning.pt",
            logo: "https://i9learning.pt/i9-logo.png",
          },
        },
        {
          "@type": "FAQPage",
          mainEntity: service.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: "https://i9learning.pt/" },
            {
              "@type": "ListItem",
              position: 2,
              name: "Serviços",
              item: "https://i9learning.pt/#servicos",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: service.title,
              item: `https://i9learning.pt${service.path}`,
            },
          ],
        },
      ],
    });
    document.head.appendChild(ld);

    return () => {
      document.title = previousTitle;
      restorers.forEach((restore) => restore());
      ld.remove();
    };
  }, [service]);
};

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top, behavior: "smooth" });
  }
};


interface ServiceLandingProps {
  service: ServiceDefinition;
}

const ServiceLanding = ({ service }: ServiceLandingProps) => {
  useServiceSeo(service);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const Icon = service.icon;
  const others = services.filter((item) => item.slug !== service.slug);
  const enr = serviceEnrichment[service.slug];
  const removed = removedPossibilities[service.slug] ?? [];
  const extraPoss = morePossibilities[service.slug] ?? [];
  const possibilityItems = [
    ...service.possibilities.items,
    ...(enr?.extraPossibilities ?? []),
    ...extraPoss.map((p) => p.title),
  ].filter((item) => !removed.includes(item));
  const possDesc = (item: string) =>
    possibilityDetails[service.slug]?.[item] ?? extraPoss.find((p) => p.title === item)?.description;
  const [possFirst, ...possRest] = service.possibilities.heading.split(" ");
  const benefitItems = [...service.benefits, ...(enr?.extraBenefits ?? []), ...(moreBenefits[service.slug] ?? [])];
  const audienceItems = [...service.audience, ...(enr?.extraAudience ?? [])];
  const faqItems = [...service.faq, ...(enr?.extraFaq ?? [])];
  const contactHref = whatsappLink(service.title);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        {/* HERO */}
        <section className="relative overflow-hidden py-14 md:py-24 lg:py-28">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-0 left-1/4 w-[70vw] max-w-[620px] h-[70vw] max-h-[620px] bg-primary/5 rounded-full blur-[130px]" />
          </div>
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="relative z-10 container-narrow mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Coluna de texto */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon
                      size={22}
                      width={22}
                      height={22}
                      className="text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-sm font-semibold tracking-widest text-primary">
                    SERVIÇO {service.number}
                  </span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
                  {service.heroTitle}{" "}
                  <span className="text-gradient">{service.heroHighlight}</span>
                </h1>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
                  {service.heroSubtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={contactHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
                  >
                    Falar sobre o projeto
                    <ArrowRight
                      size={18}
                      width={18}
                      height={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                  <button
                    onClick={() => scrollToSection("o-servico")}
                    className="w-full sm:w-auto border border-white/15 px-8 py-3.5 rounded-lg font-semibold text-base text-foreground hover:bg-white/[0.05] transition-colors flex items-center justify-center gap-2"
                  >
                    Conhecer o serviço
                    <ChevronDown size={18} width={18} height={18} aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Coluna visual */}
              <div className="lg:pl-4">
                <ServiceHeroVisual slug={service.slug} />
              </div>
            </div>
          </div>
        </section>


        {/* DESAFIO */}
        <section id="o-servico" className="section-padding bg-card/30 scroll-mt-24">
          <div className="container-narrow mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm font-semibold tracking-widest text-primary">O PROBLEMA</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
                O <span className="text-gradient">desafio</span>
              </h2>
              {enr?.challengeIntro && (
                <p className="text-muted-foreground leading-relaxed mt-5">{enr.challengeIntro}</p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {service.challenge.paragraphs.map((p) => (
                <article key={p} className="glass-card rounded-xl p-6 sm:p-7">
                  <div className="w-11 h-11 rounded-xl bg-destructive/10 flex items-center justify-center mb-5">
                    <AlertTriangle size={20} width={20} height={20} className="text-destructive" aria-hidden="true" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUÇÃO */}
        <section id="solucao" className="section-padding scroll-mt-24">
          <div className="container-narrow mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm font-semibold tracking-widest text-primary">A SOLUÇÃO</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-5">
                O que <span className="text-gradient">fazemos</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">{service.solution.paragraphs[0]}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {service.capabilities.map((item) => {
                const CapIcon = pickIcon(item.title, Icon);
                return (
                <article key={item.title} className="glass-card rounded-xl p-6 hover:border-primary/30 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <CapIcon size={20} width={20} height={20} className="text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-base font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* POSSIBILIDADES */}
        <section id="possibilidades" className="section-padding bg-card/30 scroll-mt-24">
          <div className="container-narrow mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-gradient">{possFirst}</span> {possRest.join(" ")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10">{service.possibilities.note}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
              {possibilityItems.map((item) => {
                const PossIcon = possibilityIcons[service.slug]?.[item] ?? Sparkles;
                return (
                <li key={item} className="glass-card rounded-xl p-6 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <PossIcon size={18} width={18} height={18} className="text-primary flex-shrink-0" aria-hidden="true" />
                    <h3 className="font-display text-base font-semibold">{item}</h3>
                  </div>
                  {possDesc(item) && (
                    <p className="text-muted-foreground text-sm leading-relaxed">{possDesc(item)}</p>
                  )}
                </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* CARACTERÍSTICAS E VANTAGENS */}
        {enr && enr.keyFeatures.length > 0 && (
          <section id="caracteristicas" className="section-padding scroll-mt-24">
            <div className="container-narrow mx-auto">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-sm font-semibold tracking-widest text-primary">DIFERENCIAÇÃO</span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
                  Principais <span className="text-gradient">características</span> e vantagens
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {enr.keyFeatures.map((item) => {
                  const FeatIcon = item.icon;
                  return (
                    <article key={item.title} className="glass-card rounded-xl p-6 hover:border-primary/30 transition-colors">
                      <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                        <FeatIcon size={20} width={20} height={20} className="text-accent" aria-hidden="true" />
                      </div>
                      <h3 className="font-display text-base font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* VANTAGENS */}
        <section className="section-padding bg-card/30">
          <div className="container-narrow mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-sm font-semibold tracking-widest text-primary">VANTAGENS</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
                Problemas <span className="text-gradient">resolvidos</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {benefitItems.map((item) => (
                <article key={item.title} className="glass-card rounded-xl p-6 flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={20} width={20} height={20} className="text-success" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold mb-1.5">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PARA QUEM É */}
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
                Para quem se <span className="text-gradient">destina</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {audienceItems.map((item) => (
                <div key={item} className="glass-card rounded-xl p-5 flex items-start gap-3">
                  <Users size={18} width={18} height={18} className="text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-foreground/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA ÚNICO */}
        <section id="contacto-servico" className="section-padding bg-secondary/30 scroll-mt-24">
          <div className="container-narrow mx-auto">
            <div className="glass-card rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" aria-hidden="true" />
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-primary/10 text-primary border border-primary/20 mb-6">
                  <CalendarClock size={14} width={14} height={14} aria-hidden="true" />
                  Reunião online, sem compromisso
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                  {service.ctaFinal.title}
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                  {enr?.ctaText ?? service.ctaFinal.text}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={CALENDAR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-display font-semibold text-lg bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.03] transition-all duration-300"
                  >
                    <CalendarClock size={20} width={20} height={20} aria-hidden="true" />
                    Escolher Horário
                    <ArrowRight size={20} width={20} height={20} aria-hidden="true" />
                  </a>
                  <a
                    href={contactHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-display font-semibold text-lg glass-card text-foreground hover:border-primary/40 hover:scale-[1.03] transition-all duration-300"
                  >
                    <MessageSquare size={20} width={20} height={20} className="text-primary" aria-hidden="true" />
                    Falar no WhatsApp
                  </a>
                  <a
                    href={PHONE_URL}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-display font-semibold text-lg glass-card text-foreground hover:border-primary/40 hover:scale-[1.03] transition-all duration-300"
                  >
                    <Phone size={20} width={20} height={20} className="text-primary" aria-hidden="true" />
                    Ligar Agora
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  Prefere que lhe telefonemos? Fale connosco pelo WhatsApp e indicamos-lhe o melhor horário.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section-padding scroll-mt-24">
          <div className="container-narrow mx-auto max-w-3xl">
            <div className="text-center mb-14">
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                Perguntas <span className="text-gradient">frequentes</span>
              </h2>
            </div>
            <div className="space-y-3">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={item.question} className={`glass-card rounded-xl overflow-hidden transition-colors ${isOpen ? "border-primary/30" : ""}`}>
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                    >
                      <span className="font-display text-base font-semibold">{item.question}</span>
                      <ChevronDown
                        size={18}
                        width={18}
                        height={18}
                        className={`text-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <p className="px-6 pb-5 -mt-1 text-muted-foreground text-sm leading-relaxed animate-fade-in">
                        {item.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* OUTROS SERVIÇOS */}
        <section className="section-padding !pt-0">
          <div className="container-narrow mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 text-center">Outros <span className="text-gradient">serviços</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {others.map((item) => {
                const OtherIcon = item.icon;
                return (
                  <Link
                    key={item.slug}
                    to={item.path}
                    className="glass-card rounded-xl p-5 hover:border-primary/30 transition-colors flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <OtherIcon size={20} width={20} height={20} className="text-primary" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-xs text-primary font-semibold">{item.number}</span>
                      <span className="block font-display text-sm font-semibold truncate">
                        {item.title}
                      </span>
                    </div>
                    <ArrowRight
                      size={16}
                      width={16}
                      height={16}
                      className="ml-auto text-muted-foreground group-hover:translate-x-1 transition-transform flex-shrink-0"
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceLanding;
