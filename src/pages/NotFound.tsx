import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import img404 from "../assets/404.png";

const NotFound = () => (
  <Layout>
    <div className="container mx-auto px-4 py-32 text-center">
      <img src={img404} alt="404" className="mx-auto mb-8" />
      <h1 className="text-8xl font-bold text-accent">404</h1>
      <h2 className="text-3xl font-bold mt-4">Página no encontrada</h2>
      <p className="text-muted-foreground mt-3 mb-8">
        La página que buscas no existe o fue movida.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  </Layout>
);

export default NotFound;
