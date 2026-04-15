import { Film, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Film className="h-6 w-6 text-accent" />
            <span className="font-display text-xl font-bold">
              Cin<span className="text-accent">EC</span>
            </span>
          </div>
          <p className="text-sm text-primary-foreground/70">
            Tu experiencia cinematográfica favorita. Disfruta las mejores películas con la mejor calidad.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Navegación</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/cartelera" className="hover:text-accent transition-colors">Cartelera</Link></li>
            <li><Link to="/estrenos" className="hover:text-accent transition-colors">Próximos Estrenos</Link></li>
            <li><Link to="/snacks" className="hover:text-accent transition-colors">Snacks</Link></li>
            <li><Link to="/promociones" className="hover:text-accent transition-colors">Promociones</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Contacto</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Av. Principal 123, Ciudad</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +593 99 999 9999</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@cinec.com</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">Síguenos</h4>
          <div className="flex gap-3">
            <a href="#" className="rounded-full bg-primary-foreground/10 p-2 hover:bg-accent hover:text-accent-foreground transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="rounded-full bg-primary-foreground/10 p-2 hover:bg-accent hover:text-accent-foreground transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="rounded-full bg-primary-foreground/10 p-2 hover:bg-accent hover:text-accent-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
        © 2026 CinEC. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
