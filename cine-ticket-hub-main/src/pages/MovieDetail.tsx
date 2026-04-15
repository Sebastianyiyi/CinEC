import { useParams, useNavigate } from "react-router-dom";
import { Clock, Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { movies } from "@/data/mockData";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === id);

  if (!movie) return (
    <Layout>
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-bold">Película no encontrada</h1>
        <Button onClick={() => navigate("/cartelera")} className="mt-4">Volver a Cartelera</Button>
      </div>
    </Layout>
  );

  return (
    <Layout>
      {/* Backdrop */}
      <div className="relative h-[50vh] min-h-[350px]">
        <img src={movie.backdrop} alt={movie.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <Button
          variant="ghost"
          className="absolute top-4 left-4 text-primary-foreground hover:bg-primary-foreground/10"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-1 h-4 w-4" /> Volver
        </Button>
      </div>

      <div className="container mx-auto px-4 -mt-32 relative z-10 pb-16">
        <div className="flex flex-col md:flex-row gap-8">
          <img src={movie.poster} alt={movie.title} className="w-48 rounded-lg shadow-xl self-start hidden md:block" />
          <div className="flex-1 space-y-4">
            <h1 className="font-display text-4xl font-bold">{movie.title}</h1>
            <div className="flex flex-wrap gap-2">
              {movie.genre.map(g => <Badge key={g} variant="secondary">{g}</Badge>)}
              <Badge className="bg-accent text-accent-foreground">{movie.rating}</Badge>
            </div>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {movie.duration} min</span>
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {movie.releaseDate}</span>
            </div>
            <p className="text-foreground/80 leading-relaxed max-w-2xl">{movie.synopsis}</p>

            {/* Trailer */}
            <div className="mt-6">
              <h2 className="font-display text-xl font-semibold mb-3">Trailer</h2>
              <div className="aspect-video max-w-2xl rounded-lg overflow-hidden bg-muted">
                <iframe
                  src={movie.trailerUrl}
                  title={`Trailer de ${movie.title}`}
                  className="h-full w-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>

            {/* Showtimes */}
            {movie.showtimes.length > 0 && (
              <div className="mt-8">
                <h2 className="font-display text-xl font-semibold mb-4">Horarios Disponibles</h2>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {movie.showtimes.map(st => (
                    <button
                      key={st.id}
                      onClick={() => navigate(`/comprar/${movie.id}/${st.id}`)}
                      className="group rounded-lg border border-border p-4 text-left transition-all hover:border-accent hover:shadow-md"
                    >
                      <div className="font-display text-2xl font-bold">{st.time}</div>
                      <div className="text-sm text-muted-foreground">{st.room} · {st.roomType}</div>
                      <div className="mt-2 font-semibold text-accent">${st.price.toFixed(2)}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MovieDetail;
