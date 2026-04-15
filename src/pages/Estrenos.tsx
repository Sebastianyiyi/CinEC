import { movies } from "@/data/mockData";

const Estrenos = () => (
  <div className="min-h-screen bg-background">
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Próximos Estrenos</h1>
      <p className="text-muted-foreground mb-8">Las películas que llegarán pronto a CinEC</p>
      <div className="space-y-6">
        {movies.filter(m => m.isUpcoming).map(movie => (
          <div key={movie.id} className="flex flex-col md:flex-row gap-6 rounded-xl border bg-card p-6 shadow-sm">
            <img src={movie.poster} alt={movie.title} className="w-full md:w-40 h-56 rounded-lg object-cover" />
            <div className="flex-1 space-y-3">
              <div className="flex flex-wrap gap-2">
                {movie.genre.map(g => (
                  <span key={g} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">
                    {g}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-bold">{movie.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{movie.synopsis}</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                <div className="text-sm font-medium p-2 bg-primary/10 text-primary rounded border border-primary/20">
                  📅 Estreno: {movie.releaseDate}
                </div>
                <button
                  onClick={() => alert(`Te notificaremos para ${movie.title}`)}
                  className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors text-sm font-medium"
                >
                  🔔 Notificarme
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Estrenos;
