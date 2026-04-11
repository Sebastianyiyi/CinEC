import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes } from "react-router-dom";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Routes>
      {/*Aquí deben poner las rutas*/}
      </Routes>
      </BrowserRouter>
  </QueryClientProvider>
)

export default App;