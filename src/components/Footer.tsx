const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border/50 py-12">
      <div className="container-narrow mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-muted-foreground">
            © {currentYear} i9 Learning. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/politica-de-privacidade"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="/termos-de-utilizacao"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Termos de Utilização
            </a>
            <a
              href="https://wa.me/351910213246"
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
