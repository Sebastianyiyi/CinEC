import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Cartelera from "./pages/Cartelera";
import MovieDetail from "./pages/MovieDetail";
import Booking from "./pages/Booking";
import Snacks from "./pages/Snacks";
import Estrenos from "./pages/Estrenos";
import Promociones from "./pages/Promociones";
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
          <Route path="/cartelera" element={<Cartelera />} />
          <Route path="/pelicula/:id" element={<MovieDetail />} />
          <Route path="/comprar/:movieId/:showtimeId" element={<Booking />} />
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/estrenos" element={<Estrenos />} />
          <Route path="/promociones" element={<Promociones />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
