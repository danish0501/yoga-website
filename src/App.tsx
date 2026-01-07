import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import YogaClasses from "./pages/YogaClasses";
import Treatments from "./pages/Treatments";
import Consultations from "./pages/Consultations";
import Seminars from "./pages/Seminars";
import BookSession from "./pages/BookSession";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/classes" element={<YogaClasses />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/consultations" element={<Consultations />} />
          <Route path="/seminars" element={<Seminars />} />
          <Route path="/book-session" element={<BookSession />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
