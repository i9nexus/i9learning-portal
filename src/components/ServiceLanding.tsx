import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ChevronDown, Minus, Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCanonical } from "@/hooks/use-canonical";
import { services, type ServiceDefinition } from "@/data/services";

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

const sectionNav = [
  { id: "o-servico", label: "O Serviço" },
  { id: "solucao", label: "Solução" },
  { id: "possibilidades", label: "Possibilidades" },
  { id: "como-trabalhamos-servico", label: "Como Trabalhamos" },
  { id: "faq", label: "FAQ" },
  { id: "contacto-servico", label: "Contacto" },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 130;
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
        <section id="o-servico" className="section-padding bg-card/30 scroll-mt-32">
          <div className="container-narrow mx-auto">
            <div className="max-w-3xl">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                {service.challenge.title}
              </h2>
              <div className="space-y-4">
                {service.challenge.paragraphs.map((p) => (
                  <p key={p} className="text-muted-foreground leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SOLUÇÃO */}
        <section id="solucao" className="section-padding scroll-mt-32">
          <div className="container-narrow mx-auto">
            <div className="max-w-3xl mb-14">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                {service.solution.title}
              </h2>
              <div className="space-y-4">
                {service.solution.paragraphs.map((p) => (
                  <p key={p} className="text-muted-foreground leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-semibold mb-8">
              O que podemos fazer
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {service.capabilities.map((item) => (
                <article key={item.title} className="glass-card rounded-xl p-6 hover:border-primary/30 transition-colors">
                  <h4 className="font-display text-base font-semibold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* POSSIBILIDADES */}
        <section id="possibilidades" className="section-padding bg-card/30 scroll-mt-32">
          <div className="container-narrow mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              {service.possibilities.heading}
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-10">{service.possibilities.note}</p>
            <ul className="flex flex-wrap gap-3">
              {service.possibilities.items.map((item) => (
                <li
                  key={item}
                  className="glass-card rounded-lg px-4 py-2.5 text-sm text-foreground/90"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
              Benefícios
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {service.benefits.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check size={18} width={18} height={18} className="text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold mb-1.5">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PARA QUEM É */}
        <section className="section-padding bg-card/30">
          <div className="container-narrow mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
              Para quem se destina
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {service.audience.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA INTERMÉDIO */}
        <section className="py-16 md:py-20">
          <div className="container-narrow mx-auto px-4 md:px-8">
            <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
                {service.ctaMid.title}
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">{service.ctaMid.text}</p>
              <a
                href={contactHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity group"
              >
                {service.ctaMid.button}
                <ArrowRight
                  size={18}
                  width={18}
                  height={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </section>

        {/* COMO TRABALHAMOS */}
        <section id="como-trabalhamos-servico" className="section-padding bg-card/30 scroll-mt-32">
          <div className="container-narrow mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
              Como trabalhamos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {service.process.map((step) => (
                <div key={step.step} className="glass-card rounded-xl p-6">
                  <span className="font-display text-2xl font-bold text-primary/60">{step.step}</span>
                  <h3 className="font-display text-base font-semibold mt-3 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABORDAGEM i9 */}
        <section className="section-padding">
          <div className="container-narrow mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
              A abordagem <span className="text-gradient">i9 Learning</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {service.approach.map((item) => (
                <div key={item.title} className="border-l-2 border-primary/40 pl-5">
                  <h3 className="font-display text-base font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="section-padding bg-card/30 scroll-mt-32">
          <div className="container-narrow mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
              Perguntas <span className="text-gradient">frequentes</span>
            </h2>
            <div className="max-w-3xl space-y-3">
              {service.faq.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={item.question} className="glass-card rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                    >
                      <span className="font-display text-base font-semibold">{item.question}</span>
                      {isOpen ? (
                        <Minus size={18} width={18} height={18} className="text-primary flex-shrink-0" aria-hidden="true" />
                      ) : (
                        <Plus size={18} width={18} height={18} className="text-primary flex-shrink-0" aria-hidden="true" />
                      )}
                    </button>
                    {isOpen && (
                      <p className="px-6 pb-5 -mt-1 text-muted-foreground text-sm leading-relaxed">
                        {item.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="contacto-servico" className="section-padding scroll-mt-32">
          <div className="container-narrow mx-auto">
            <div className="glass-card rounded-2xl p-8 md:p-14 text-center">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                {service.ctaFinal.title}
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">{service.ctaFinal.text}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={contactHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 group"
                >
                  {service.ctaFinal.button}
                  <ArrowRight
                    size={18}
                    width={18}
                    height={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <Link
                  to="/#contacto"
                  className="w-full sm:w-auto border border-white/15 px-8 py-3.5 rounded-lg font-semibold text-base text-foreground hover:bg-white/[0.05] transition-colors inline-flex items-center justify-center"
                >
                  Enviar mensagem
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* OUTROS SERVIÇOS */}
        <section className="section-padding bg-card/30">
          <div className="container-narrow mx-auto">
            <h2 className="font-display text-xl sm:text-2xl font-semibold mb-8">Outros serviços</h2>
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
