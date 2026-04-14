import { useState, useMemo } from "react";
import Layout from "@/components/Layout";
import MovieCard from "@/components/MovieCard";
import { movies } from "@/data/mockData";
import { Button } from "@/components/ui/button";

const allGenres = Array.from(
  new Set(movies.filter(m => !m.isUpcoming).flatMap(m => m.genre))
);

const Cartelera = () => {
  const [genre, setGenre] = useState<string | null>(null);
  const filtered = useMemo(
    () => movies.filter(m => !m.isUpcoming && (!genre || m.genre.includes(genre))),
    [genre]
  );

  return (
    <Layout>
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">Cartelera</h1>
        <p className="text-muted-foreground mb-8">
          Todas las películas en cartel
        </p>

        {/* Botones de filtro */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Button
            variant={genre === null ? "default" : "outline"}
            size="sm"
            onClick={() => setGenre(null)}
          >
            Todas
          </Button>
          {allGenres.map(g => (
            <Button
              key={g}
              variant={genre === g ? "default" : "outline"}
              size="sm"
              onClick={() => setGenre(g)}
            >
              {g}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filtered.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No hay películas en este género actualmente.
          </p>
        )}
      </section>
    </Layout>
  );
};

export default Cartelera;