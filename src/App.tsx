import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Estrenos from "./pages/Estrenos";
import NotFound from "./pages/NotFound";
import Cartelera from "./pages/Cartelera";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        {/* Rutas principales de la aplicación */}
        <Route path="/" element={<Index />} />
        <Route path="/estrenos" element={<Estrenos />} />
        <Route path="/cartelera" element={<Cartelera />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
