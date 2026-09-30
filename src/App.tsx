import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import PlataformasElearning from "./pages/servicos/PlataformasElearning";
import CursosConteudosElearning from "./pages/servicos/CursosConteudosElearning";
import IntegracoesDesenvolvimento from "./pages/servicos/IntegracoesDesenvolvimento";
import SuporteManutencao from "./pages/servicos/SuporteManutencao";
import ConsultoriaEstrategia from "./pages/servicos/ConsultoriaEstrategia";
import FormacaoCapacitacao from "./pages/servicos/FormacaoCapacitacao";

import NotFound from "./pages/NotFound";
import ScrollToTopButton from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.substring(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Analytics />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicos/plataformas-elearning" element={<PlataformasElearning />} />
          <Route path="/servicos/cursos-conteudos-elearning" element={<CursosConteudosElearning />} />
          <Route path="/servicos/integracoes-desenvolvimento" element={<IntegracoesDesenvolvimento />} />
          <Route path="/servicos/suporte-manutencao" element={<SuporteManutencao />} />
          <Route path="/servicos/consultoria-estrategia" element={<ConsultoriaEstrategia />} />
          <Route path="/servicos/formacao-capacitacao" element={<FormacaoCapacitacao />} />
          <Route path="*" element={<NotFound />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ScrollToTopButton />
      <WhatsAppButton />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
