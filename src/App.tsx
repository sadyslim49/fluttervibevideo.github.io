import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BrandDashboard from "./pages/BrandDashboard";
import CreatorDashboard from "./pages/CreatorDashboard";
import ProjectDetails from "./pages/ProjectDetails";
import CreateProject from "./pages/CreateProject";
import FindProjects from "./pages/FindProjects";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/brand/dashboard" element={<BrandDashboard />} />
          <Route path="/creator/dashboard" element={<CreatorDashboard />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/find-projects" element={<FindProjects />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;