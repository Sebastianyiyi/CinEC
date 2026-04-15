import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Estrenos from "./pages/Estrenos";
import Snacks from "./pages/Snacks";
import NotFound from "./pages/NotFound";
import Promociones from "./pages/Promociones";
import Cartelera from "./pages/Cartelera";
import MovieDetail from "./pages/MovieDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        {/* Rutas principales de la aplicación */}
        <Route path="/" element={<Index />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/estrenos" element={<Estrenos />} />
        <Route path="/cartelera" element={<Cartelera />} />
        <Route path="/snacks" element={<Snacks />} />
        <Route path="/pelicula/:id" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
