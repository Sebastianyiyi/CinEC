import { Link } from "react-router-dom";
import { Clock, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Movie } from "@/data/mockData";
import { motion } from "framer-motion";

const MovieCard = ({ movie }: { movie: Movie }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2 }}
  >
    <Link to={`/pelicula/${movie.id}`} className="group block">
      <div className="relative overflow-hidden rounded-lg aspect-[2/3]">
        <img
          src={movie.poster}
          alt={movie.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform group-hover:translate-y-0">
          <p className="text-sm text-primary-foreground/90 line-clamp-2">{movie.synopsis}</p>
        </div>
        <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground text-xs">
          {movie.rating}
        </Badge>
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="font-display text-lg font-semibold leading-tight">{movie.title}</h3>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> {movie.duration} min
          </span>
          <span>{movie.genre[0]}</span>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default MovieCard;
