import { Link } from "react-router-dom";
import { ArrowRight, Clock, Calendar, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  const { ref, isVisible } = useScrollReveal();
  // Display initial 6 popular/featured articles in a 3-column grid
  const initialPosts = blogPosts.slice(0, 6);

  return (
    <section
      id="blog"
      ref={ref}
      aria-label="Blog e Artigos sobre eLearning"
      className="section-padding relative overflow-hidden"
    >
      {/* Background glow effect */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="container-narrow mx-auto relative z-10">
        {/* Header: Centered like other sections */}
        <div
          className={`text-center max-w-3xl mx-auto mb-14 md:mb-16 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary mb-3">
            <Sparkles size={14} className="icon-gradient" />
            <span>Conhecimento & Tendências</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Insights sobre <span className="text-gradient">eLearning & Inovação</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Estratégias práticas, tendências pedagógicas e inovações em LMS Moodle, produção de conteúdos digitais e Inteligência Artificial para impulsionar a formação na sua organização.
          </p>
        </div>

        {/* 3x2 Grid of Articles (aligned and responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {initialPosts.map((post, idx) => (
            <article
              key={post.slug}
              className={`rounded-2xl border border-white/10 bg-card/40 backdrop-blur-md overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* Thumbnail Container: slightly reduced height for balanced prominence */}
              <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-muted/20">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    if (target.parentElement) {
                      target.parentElement.classList.add("bg-gradient-to-br", "from-slate-900", "to-slate-800");
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />

                {/* Category tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-white/15 text-primary">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Metadata */}
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} className="text-primary/70" />
                      {post.publishedAt}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} className="text-primary/70" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer link */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                  >
                    <span>Ler artigo completo</span>
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Centered CTA: Ver todos os artigos */}
        <div
          className={`mt-12 md:mt-16 text-center transition-all duration-700 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-primary/10 via-primary/20 to-accent/15 border border-primary/30 text-foreground font-semibold hover:border-primary hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-200 group"
          >
            <span>Ver todos os artigos ({blogPosts.length})</span>
            <ArrowRight size={18} className="text-primary transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
