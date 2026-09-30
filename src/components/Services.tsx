import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { services } from "@/data/services";

const Services = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="servicos" className="section-padding bg-card/30" ref={ref} aria-label="Serviços de eLearning da i9 Learning">
      <div className="container-narrow mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Os nossos{" "}
            <span className="text-gradient">serviços</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Soluções completas para cada etapa da transformação digital da sua formação.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6" role="list">
          {services.map((service, index) => (
            <article
              key={service.slug}
              role="listitem"
              className={`glass-card rounded-xl p-7 hover:border-primary/30 transition-all duration-700 ease-out group flex flex-col ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: isVisible ? `${100 * (index + 1)}ms` : "0ms" }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon size={22} width={22} height={22} className="text-primary" aria-hidden="true" />
                </div>
                <span className="font-display text-sm font-semibold text-primary/50">{service.number}</span>
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.cardDescription}</p>
              <span className="sr-only">{service.keywords}</span>
              <Link
                to={service.path}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                aria-label={`Saber mais sobre ${service.title}`}
              >
                Saber mais
                <ArrowRight size={16} width={16} height={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
