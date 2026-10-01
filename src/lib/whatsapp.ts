const WHATSAPP_BASE = "https://wa.me/351910213246?text=";

export const GENERAL_WHATSAPP_MESSAGE =
  "Olá! Gostaria de saber mais sobre as soluções de eLearning da i9 Learning.";

const SERVICE_MESSAGES: Record<string, string> = {
  "/servicos/plataformas-elearning":
    "Olá! Gostaria de saber mais sobre o serviço de Plataformas eLearning da i9 Learning.",
  "/servicos/cursos-conteudos-elearning":
    "Olá! Gostaria de saber mais sobre o desenvolvimento de Cursos e Conteúdos eLearning da i9 Learning.",
  "/servicos/integracoes-desenvolvimento":
    "Olá! Gostaria de obter informações sobre Desenvolvimento à Medida para eLearning na i9 Learning.",
  "/servicos/suporte-manutencao":
    "Olá! Gostaria de saber mais sobre o serviço de Suporte e Manutenção LMS da i9 Learning.",
  "/servicos/consultoria-estrategia":
    "Olá! Gostaria de saber mais sobre Consultoria e Estratégia eLearning na i9 Learning.",
  "/servicos/formacao-capacitacao":
    "Olá! Gostaria de obter informações sobre Formação e Capacitação na i9 Learning.",
};

export const whatsappMessageForPath = (pathname: string) =>
  SERVICE_MESSAGES[pathname.replace(/\/+$/, "")] ?? GENERAL_WHATSAPP_MESSAGE;

export const whatsappUrl = (message: string) =>
  `${WHATSAPP_BASE}${encodeURIComponent(message)}`;

export const whatsappUrlForPath = (pathname: string) =>
  whatsappUrl(whatsappMessageForPath(pathname));

export const GENERAL_WHATSAPP_URL = whatsappUrl(GENERAL_WHATSAPP_MESSAGE);
