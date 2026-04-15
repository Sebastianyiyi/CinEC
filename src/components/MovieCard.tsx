import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import type { Movie } from "@/data/mockData";

const MovieCard = ({ movie }: { movie: Movie }) => (
  <Link to={`/pelicula/${movie.id}`} className="group block">
    <div className="relative overflow-hidden rounded-lg aspect-[2/3]">
      <img
        src={movie.poster}
        alt={movie.title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <span className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded">
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
);

export default MovieCard;
