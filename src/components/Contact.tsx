import { useState } from "react";
import { Send, Mail, Phone, MapPin, CheckCircle, CalendarDays } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { z } from "zod";

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const contactSchema = z.object({
  nome: z.string().trim().min(2, "Nome deve ter pelo menos 2 caracteres").max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z.string().trim().email("Email inválido").max(255, "Email deve ter no máximo 255 caracteres"),
  mensagem: z.string().trim().min(10, "Mensagem deve ter pelo menos 10 caracteres").max(1000, "Mensagem deve ter no máximo 1000 caracteres"),
});

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

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const firstError = result.error.errors[0];
      toast({
        title: "Campos inválidos",
        description: firstError.message,
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
          subject: "🚀 NOVO CONTACTO: i9 Learning Portal",
          from_name: "i9 Learning",
          name: result.data.nome,
          email: result.data.email,
          message: result.data.mensagem,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data?.success) throw new Error("Erro ao enviar");

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
    <section id="contacto" className="section-padding bg-card/30" ref={ref} aria-label="Contactar a i9 Learning para soluções de eLearning">
      <div className="container-narrow mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Pronto para transformar <span className="text-gradient">a sua formação?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Preencha o formulário e entraremos em contacto consigo para perceber como podemos ajudar no seu projeto de formação eLearning.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
        >
          {/* Form */}
          {isSuccess ? (
            <div className="glass-card rounded-xl p-8 flex flex-col items-center justify-center text-center gap-4">
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
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8 space-y-5">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  minLength={2}
                  maxLength={100}
                  value={formData.nome}
                  onChange={handleChange}
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
                  required
                  maxLength={255}
                  value={formData.email}
                  onChange={handleChange}
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
                  required
                  minLength={10}
                  maxLength={1000}
                  rows={5}
                  value={formData.mensagem}
                  onChange={handleChange}
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

          {/* Scheduling */}
          <div className="glass-card rounded-xl p-8 flex flex-col items-center justify-center text-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <CalendarDays size={26} className="text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold">Prefere falar diretamente connosco?</h3>
            <p className="text-muted-foreground max-w-sm">
              Agende uma reunião online num horário conveniente para si.
            </p>
            <a
              href="https://calendar.app.google/rMie36ftHYkKFzhD9"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full max-w-sm inline-flex items-center justify-center gap-2 border border-primary/50 text-foreground px-6 py-3.5 rounded-lg font-semibold text-sm hover:bg-primary/10 transition-colors"
            >
              <CalendarDays size={16} className="text-primary" />
              Agendar reunião online
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="glass-card rounded-xl p-6 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:geral.i9learning@gmail.com"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      geral.i9learning@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 h-full">
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

              <div className="glass-card rounded-xl p-6 h-full">
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
    </section>
  );
};

export default Contact;
