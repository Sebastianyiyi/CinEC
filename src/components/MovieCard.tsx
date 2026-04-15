import { Link, useNavigate } from "react-router-dom";
import { Clock } from "lucide-react";
import type { Movie } from "@/data/mockData";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const navigate = useNavigate();

  return (
    <motion.div 
      whileHover={{ scale: 1.05 }} 
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group block relative"
    >
      <Link to={`/pelicula/${movie.id}`}>
        <div className="relative overflow-hidden rounded-lg aspect-[2/3]">
          <img
            src={movie.poster}
            alt={movie.title}
            className="h-full w-full object-cover transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <span className="absolute top-2 right-2 bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded">
            {movie.rating}
          </span>
        </div>
        <div className="mt-3 space-y-1">
          <h3 className="font-semibold text-base leading-tight">{movie.title}</h3>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" /> {movie.duration} min
            </span>
            <span>{movie.genre[0]}</span>
          </div>
        </div>
      </Link>
      
      {/* Botón de Comprar visible en Hover */}
      <div className="absolute bottom-20 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <Button 
          variant="default" 
          className="pointer-events-auto"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/pelicula/${movie.id}`);
          }}
        >
          Comprar Boletos
        </Button>
      </div>
    </motion.div>
  );
};

export default MovieCard;
