import { Film } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Inicio", path: "/" },
  { label: "Cartelera", path: "/cartelera" },
  { label: "Estrenos", path: "/estrenos" },
  { label: "Snacks", path: "/snacks" },
  { label: "Promociones", path: "/promociones" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <Film className="h-7 w-7 text-accent" />
          <span className="font-display text-2xl font-bold tracking-tight">
            Cin<span className="text-accent">EC</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
