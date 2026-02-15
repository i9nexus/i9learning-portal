import { useState } from "react";
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const WEB3FORMS_KEY = "2e462bc7-82b5-44de-a555-fa1e93239d52";

const Contact = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useScrollReveal();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome.trim() || !formData.email.trim() || !formData.mensagem.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "🚀 NOVO CONTACTO: i9 Nexus Portal",
          from_name: "i9 Nexus",
          to: "geral.i9nexus@gmail.com",
          name: formData.nome,
          email: formData.email,
          message: formData.mensagem,
          
        }),
      });

      const data = await res.json();
      if (!data.success) throw new Error("Erro ao enviar");

      setFormData({ nome: "", email: "", mensagem: "" });
      setIsSuccess(true);
    } catch {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde ou contacte-nos diretamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="section-padding bg-card/30" ref={ref}>
      <div className="container-narrow mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Pronto para transformar{" "}
            <span className="text-gradient">o seu negócio?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Preencha o formulário e entraremos em contacto nas próximas 24 horas.
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}>
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Estamos aqui para ajudar a elevar o seu negócio. Partilhe o seu desafio connosco e a nossa equipa entrará em contacto para agendar um diagnóstico gratuito e propor a melhor solução tecnológica.
            </p>
            <div className="space-y-6">
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:geral.i9nexus@gmail.com"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    geral.i9nexus@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Telemóvel</h3>
                  <a
                    href="tel:+351910213246"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    +351 910 213 246
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Localização</h3>
                  <p className="text-muted-foreground text-sm">Coimbra, Portugal</p>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Form */}
          {isSuccess ? (
            <div className="lg:col-span-3 glass-card rounded-xl p-8 flex flex-col items-center justify-center text-center gap-4">
              <CheckCircle size={48} className="text-primary" />
              <h3 className="font-display text-2xl font-bold">Mensagem enviada com sucesso!</h3>
              <p className="text-muted-foreground">Entraremos em contacto nas próximas 24 horas. Obrigado!</p>
              <button
                type="button"
                onClick={() => setIsSuccess(false)}
                className="mt-4 text-sm text-primary hover:underline"
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-3 glass-card rounded-xl p-8 space-y-5"
            >

              <div>
                <label htmlFor="nome" className="block text-sm font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  maxLength={100}
                  className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  placeholder="O seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  maxLength={255}
                  className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  placeholder="o-seu-email@exemplo.pt"
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows={5}
                  maxLength={1000}
                  className="w-full bg-secondary/50 border border-border/50 rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                  placeholder="Descreva o seu projeto ou dúvida..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] text-primary-foreground px-6 py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  "A enviar..."
                ) : (
                  <>
                    Enviar mensagem
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
