import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import Index from "./pages/Index";
import SobreFranklinRafael from "./pages/SobreFranklinRafael";
import Biografia from "./pages/Biografia";
import Citacoes from "./pages/Citacoes";
import LinhaDoTempo from "./pages/LinhaDoTempo";
import InformacoesAcademicas from "./pages/InformacoesAcademicas";
import Obras from "./pages/Obras";
import ObrasCategoria from "./pages/ObrasCategoria";
import LivroDetalhe from "./pages/LivroDetalhe";
import PorVir from "./pages/PorVir";
import ObraPrima from "./pages/ObraPrima";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre-franklin-rafael" element={<SobreFranklinRafael />} />
          <Route path="/o-autor/biografia" element={<Biografia />} />
          <Route path="/o-autor/citacoes" element={<Citacoes />} />
          <Route path="/o-autor/linha-do-tempo" element={<LinhaDoTempo />} />
          <Route path="/informacoes-academicas" element={<InformacoesAcademicas />} />
          <Route path="/obras" element={<Obras />} />
          <Route path="/obras/:categoria" element={<ObrasCategoria />} />
          <Route path="/obras/:categoria/:livro" element={<LivroDetalhe />} />
          <Route path="/por-vir" element={<PorVir />} />
          <Route path="/obra-prima" element={<ObraPrima />} />
          <Route path="/faq" element={<FAQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
