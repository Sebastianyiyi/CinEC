import Layout from "@/components/Layout";
import MovieCard from "@/components/MovieCard";
import { movies } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const currentMovies = movies.filter(m => !m.isUpcoming);
  const upcomingMovies = movies.filter(m => m.isUpcoming);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={movies[0].backdrop}
            alt={movies[0].title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        </div>
        
        <div className="container relative mx-auto flex h-full flex-col justify-center px-4">
          <div className="max-w-2xl space-y-6">
            <span className="inline-block rounded-full bg-accent/20 px-4 py-1 text-sm font-semibold text-accent">
              Destacado de la semana
            </span>
            <h1 className="font-display text-5xl font-bold tracking-tight md:text-7xl">
              {movies[0].title}
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              {movies[0].synopsis}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to={`/pelicula/${movies[0].id}`}>Comprar Entradas</Link>
              </Button>
              <Button size="lg" variant="outline">
                Ver Tráiler
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cartelera Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold">En Cartelera</h2>
            <p className="text-muted-foreground">Las películas más populares del momento</p>
          </div>
          <Button variant="ghost" className="hidden md:flex" asChild>
            <Link to="/cartelera">
              Ver todo <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {currentMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      {/* Próximamente Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-3xl font-bold">Próximamente</h2>
            <p className="text-muted-foreground">Prepárate para los próximos grandes estrenos</p>
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {upcomingMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
