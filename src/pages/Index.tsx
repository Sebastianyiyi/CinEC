import { Link } from "react-router-dom";
import { Ticket, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import MovieCard from "@/components/MovieCard";
import { movies } from "@/data/mockData";

const featured = movies[0];
const nowPlaying = movies.filter(m => !m.isUpcoming);
const upcoming = movies.filter(m => m.isUpcoming);

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <img src={featured.backdrop} alt={featured.title} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
      <div className="container relative mx-auto flex h-full items-center px-4">
        <div className="max-w-lg space-y-5">
          <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
            {featured.genre[0]}
          </span>
          <h1 className="text-5xl font-bold leading-tight text-primary-foreground md:text-6xl">
            {featured.title}
          </h1>
          <p className="text-primary-foreground/80 leading-relaxed">
            {featured.synopsis.slice(0, 150)}...
          </p>
          <Link
            to={`/pelicula/${featured.id}`}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
          >
            <Ticket className="h-4 w-4" /> Comprar Entrada
          </Link>
        </div>
      </div>
    </section>

    {/* En Cartelera */}
    <section className="container mx-auto px-4 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold">En Cartelera</h2>
          <p className="text-muted-foreground mt-1">Películas disponibles ahora</p>
        </div>
        <Link to="/cartelera" className="flex items-center gap-1 text-sm text-accent hover:underline">
          Ver todas <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        {nowPlaying.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>

    {/* Próximos Estrenos */}
    {upcoming.length > 0 && (
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Próximos Estrenos</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {upcoming.map(movie => (
              <div key={movie.id} className="flex gap-4 rounded-lg bg-card p-4 shadow-sm">
                <img src={movie.poster} alt={movie.title} className="h-32 w-20 rounded-md object-cover" />
                <div>
                  <h3 className="font-semibold text-lg">{movie.title}</h3>
                  <p className="text-xs text-muted-foreground">{movie.genre.join(" · ")}</p>
                  <p className="text-sm text-accent mt-2">Estreno: {movie.releaseDate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )}
  </Layout>
);

export default Index;
