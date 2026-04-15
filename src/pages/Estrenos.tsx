import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CountdownTimer from "@/components/CountdownTimer";
import { movies } from "@/data/mockData";

const upcoming = movies.filter(m => m.isUpcoming);

const Estrenos = () => (
  <Layout>
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Próximos Estrenos</h1>
        <p className="text-muted-foreground mt-2">No te pierdas las películas que vienen</p>
      </div>

      {upcoming.length === 0 ? (
        <p className="text-muted-foreground text-center py-20">
          No hay estrenos próximos por el momento.
        </p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {upcoming.map(movie => (
            <Link
              key={movie.id}
              to={`/pelicula/${movie.id}`}
              className="group block rounded-xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={movie.backdrop}
                  alt={movie.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded">
                  {movie.rating}
                </span>
              </div>
              <div className="p-5 space-y-3">
                <h2 className="text-xl font-bold">{movie.title}</h2>
                <p className="text-xs text-muted-foreground">{movie.genre.join(" · ")}</p>
                <p className="text-sm text-muted-foreground line-clamp-2">{movie.synopsis}</p>
                <div className="pt-2">
                  <p className="text-xs text-muted-foreground mb-2">Estreno en:</p>
                  <CountdownTimer targetDate={movie.releaseDate} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  </Layout>
);

export default Estrenos;
