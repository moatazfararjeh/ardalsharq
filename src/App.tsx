import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminProducts from "./pages/AdminProducts";
import LoginPage from "./pages/LoginPage";
import RequireAdmin from "@/components/RequireAdmin";
import { useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isAdmin") === "true"
  );

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsLoggedIn(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route
              path="/admin"
              element={
                <RequireAdmin>
                  <AdminProducts onLogout={handleLogout} />
                </RequireAdmin>
              }
            />
            <Route
              path="/login"
              element={<LoginPage onLogin={handleLogin} />}
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
