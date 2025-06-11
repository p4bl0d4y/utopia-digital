
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { usePageLoading } from "@/hooks/usePageLoading";
import PageLoader from "@/components/PageLoader";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import CrmSolution from "./pages/CrmSolution";
import EthioTradeConnect from "./pages/EthioTradeConnect";
import GreenGrowthEthiopia from "./pages/GreenGrowthEthiopia";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Payment from "./pages/Payment";
import AccountSetup from "./pages/AccountSetup";
import ScheduleDemo from "./pages/ScheduleDemo";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const isLoading = usePageLoading();

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/solutions/crm-solution" element={<CrmSolution />} />
      <Route path="/solutions/ethio-trade-connect" element={<EthioTradeConnect />} />
      <Route path="/solutions/green-growth-ethiopia" element={<GreenGrowthEthiopia />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/account-setup" element={<AccountSetup />} />
      <Route path="/schedule-demo" element={<ScheduleDemo />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="utopia-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
