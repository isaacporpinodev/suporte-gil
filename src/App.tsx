import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import PaginaDashboard from "./pages/Dashboard";
import PaginaOrdens from "./pages/OrdensServico";
import PaginaNovaOS from "./pages/NovaOrdemServico";
import PaginaDetalheOS from "./pages/DetalheOrdemServico";
import PaginaClientes from "./pages/Clientes";
import PaginaNovoCliente from "./pages/NovoCliente";
import PaginaEstoque from "./pages/Estoque";
import PaginaNovoProduto from "./pages/NovoProduto";
import PaginaFinanceiro from "./pages/Financeiro";
import PaginaUsuarios from "./pages/Usuarios";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaDashboard />} />
          <Route path="/ordens" element={<PaginaOrdens />} />
          <Route path="/ordens/nova" element={<PaginaNovaOS />} />
          <Route path="/ordens/:id" element={<PaginaDetalheOS />} />
          <Route path="/clientes" element={<PaginaClientes />} />
          <Route path="/clientes/novo" element={<PaginaNovoCliente />} />
          <Route path="/estoque" element={<PaginaEstoque />} />
          <Route path="/estoque/novo" element={<PaginaNovoProduto />} />
          <Route path="/financeiro" element={<PaginaFinanceiro />} />
          <Route path="/usuarios" element={<PaginaUsuarios />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
