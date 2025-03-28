
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route }
  from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index"
import Dashboard from './pages/Dashboard';
import CreditEvaluation from './components/CreditEvaluation';
import LoanApplication from "./components/LoanApplication";
import FinancialLiteracy from "./components/FinancialLiteracy"
import DashboardHome from "./components/DashboardHome"
import TransparencyReport from "./components/TransparencyReport";
import Feedback from "./components/Feedback"
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard-home" element={
              <Dashboard>
                <DashboardHome />
              </Dashboard>
            } />
            <Route path="/credit-evaluation" element={
              <Dashboard>
                <CreditEvaluation />
              </Dashboard>
            } />
            <Route path="/loan-application" element={
              <Dashboard>
                <LoanApplication />
              </Dashboard>
            } />
            <Route path="/financial-literacy" element={
              <Dashboard>
                <FinancialLiteracy />
              </Dashboard>
            } />
            <Route path="/transparency" element={
              <Dashboard>
                <TransparencyReport />
              </Dashboard>
            } />
            <Route path="/feedback" element={
              <Dashboard>
                <Feedback />
              </Dashboard>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
