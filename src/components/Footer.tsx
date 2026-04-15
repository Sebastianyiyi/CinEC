import { Film } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background mt-16">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Film className="h-6 w-6 text-primary" />
              <span className="font-display text-xl font-bold tracking-tight">
                Cin<span className="text-primary">EC</span>
              </span>
            </div>

            <p className="text-sm text-muted-foreground max-w-xs">
              Tu cine favorito. Compra tus entradas en línea y disfruta la mejor experiencia.
            </p>
          </div>
          <div className="flex gap-12">
            <div>
              <h4 className="font-semibold text-sm mb-3">Navegación</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/cartelera" className="hover:text-foreground transition-colors">Cartelera</Link></li>
                <li><Link to="/estrenos" className="hover:text-foreground transition-colors">Estrenos</Link></li>
                <li><Link to="/snacks" className="hover:text-foreground transition-colors">Snacks</Link></li>
                <li><Link to="/promociones" className="hover:text-foreground transition-colors">Promociones</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © 2026 CinEC. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
