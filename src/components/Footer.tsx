import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-8 pb-20 sm:pb-8 px-4 sm:px-6 md:px-8">
      <div className="container-narrow mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-4">
        {/* LADO ESQUERDO: LOGO E COPYRIGHT */}
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[hsl(190,95%,50%)] to-[hsl(210,90%,55%)] flex items-center justify-center">
              <span className="font-display text-sm font-bold tracking-tight text-background leading-none">i9</span>
            </div>
            <span className="font-display text-sm font-bold text-foreground">Learning</span>
          </div>
          <span className="text-muted-foreground text-xs sm:text-sm text-center">
            © {currentYear} Todos os direitos reservados.
          </span>
        </div>

        {/* LADO DIREITO: LINKS E REDES SOCIAIS */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              to="/politica-de-privacidade"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-xs sm:text-sm hover:text-foreground transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              to="/termos-de-utilizacao"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-xs sm:text-sm hover:text-foreground transition-colors"
            >
              Termos de Utilização
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {/* LINKEDIN CORRIGIDO */}
            <a
              href="https://www.linkedin.com/company/i9learning"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn da i9 Learning"
            >
              <Linkedin size={18} />
            </a>

            {/* WHATSAPP CORRIGIDO */}
            <a
              href="https://wa.me/351910213246?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20vossos%20servi%C3%A7os."
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Contactar i9 Learning via WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
