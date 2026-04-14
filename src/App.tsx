import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes } from "react-router-dom";
import Snacks from "./pages/Snacks";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Routes>
      {/*Aquí deben poner las rutas*/}
      <Route path="/snacks" element={<Snacks />} />
      </Routes>
      </BrowserRouter>
  </QueryClientProvider>
)

export default App;