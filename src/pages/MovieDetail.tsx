import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Ticket, Calendar, Clock, Film } from "lucide-react";
import Layout from "@/components/Layout";
import { movies } from "@/data/mockData";

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const movie = movies.find(m => m.id === id);

  if (!movie) {
    return (
      <Layout>
        <div className="flex flex-col flex-1 items-center justify-center p-8 text-center min-h-[60vh]">
          <h2 className="text-3xl font-bold mb-4">Película no encontrada</h2>
          <Link to="/" className="text-accent hover:underline flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Volver al inicio
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={movie.backdrop} alt={movie.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        
        <div className="container relative mx-auto px-4 h-full flex items-end pb-12">
          <div className="flex flex-col md:flex-row gap-8 items-end w-full">
            <img 
              src={movie.poster} 
              alt={movie.title} 
              className="hidden md:block w-48 rounded-lg shadow-xl border-4 border-background"
            />
            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap gap-2">
                {movie.genre.map(g => (
                  <span key={g} className="bg-accent/20 text-accent border border-accent/30 text-xs font-semibold px-3 py-1 rounded-full">
                    {g}
                  </span>
                ))}
                <span className="bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {movie.rating}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">{movie.title}</h1>
              
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground font-medium">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> {movie.duration} min
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> {movie.releaseDate}
                </span>
                <span className="flex items-center gap-2">
                  <Film className="w-4 h-4" /> {movie.isUpcoming ? "Próximo estreno" : "En cartelera"}
                </span>
              </div>
            </div>
            
            {!movie.isUpcoming && (
              <button className="flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold px-8 py-4 rounded-lg hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/20 w-full md:w-auto shrink-0">
                <Ticket className="w-5 h-5" />
                Comprar Entradas
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Sinopsis</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {movie.synopsis}
            </p>
          </div>
          
          {movie.trailerUrl && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Tráiler</h2>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-border">
                <iframe 
                  src={movie.trailerUrl} 
                  title={`Tráiler de ${movie.title}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
        
        <div className="space-y-8">
          {!movie.isUpcoming && movie.showtimes.length > 0 && (
            <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" /> Horarios de hoy
              </h3>
              <div className="space-y-4">
                {movie.showtimes.map(showtime => (
                  <div key={showtime.id} className="flex items-center justify-between p-3 rounded-lg bg-background hover:bg-accent/5 transition-colors border border-border/50">
                    <div>
                      <span className="font-bold text-lg block">{showtime.time}</span>
                      <span className="text-xs text-muted-foreground">{showtime.room} · {showtime.roomType}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-semibold text-accent block">${showtime.price.toFixed(2)}</span>
                      <button className="text-xs font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground hover:underline mt-1">
                        Elegir
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default MovieDetail;
