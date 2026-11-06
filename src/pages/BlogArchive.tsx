import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogPosts } from "@/data/blogPosts";
import { useCanonical } from "@/hooks/use-canonical";
import BackToHomeButton from "@/components/BackToHomeButton";
import { ArrowLeft, ArrowRight, Calendar, Clock, Search, Sparkles } from "lucide-react";

const BlogArchive = () => {
  useCanonical("/blog");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(blogPosts.map((p) => p.category)));
    return ["all", ...unique];
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "all" || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between overflow-x-hidden">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <div className="container-narrow mx-auto px-4 sm:px-6 md:px-8">
          {/* Back to Home Button */}
          <div className="mb-6">
            <BackToHomeButton />
          </div>

          {/* Hero Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-primary mb-3">
              <Sparkles size={14} className="icon-gradient" />
              <span>Artigos & Publicações</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Blog & Centro de Conhecimento <span className="text-gradient">i9 Learning</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Explore o nosso acervo de artigos especializados sobre Moodle LMS, normas SCORM e xAPI, desenho instrucional, gamificação e estratégias pedagógicas para empresas e entidades formadoras.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="mb-12 space-y-4">
            {/* Search Input */}
            <div className="max-w-md mx-auto relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Pesquisar por tema, tecnologia ou palavra-chave..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-card/60 text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === "all"
                    ? "bg-primary text-background font-semibold shadow-sm shadow-primary/20"
                    : "bg-card/60 border border-border/70 text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                Todos ({blogPosts.length})
              </button>
              {categories.filter((c) => c !== "all").map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-primary text-background font-semibold shadow-sm shadow-primary/20"
                      : "bg-card/60 border border-border/70 text-muted-foreground hover:text-foreground hover:border-primary/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-card/30 rounded-2xl border border-dashed border-border/70">
              <p className="text-muted-foreground mb-4">Nenhum artigo encontrado para a pesquisa selecionada.</p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="text-sm font-semibold text-primary hover:underline"
              >
                Limpar filtros de pesquisa
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-2xl border border-white/10 bg-card/40 backdrop-blur-md overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
                >
                  {/* Thumbnail: slightly reduced height */}
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
                      <h2 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                        <Link to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>

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
          )}
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogArchive;
