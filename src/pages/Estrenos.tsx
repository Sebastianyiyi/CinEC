import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import CountdownTimer from "@/components/CountdownTimer";
import { movies } from "@/data/mockData";
import { toast } from "sonner";

const upcoming = movies.filter(m => m.isUpcoming);

const Estrenos = () => (
  <Layout>
    <section className="container mx-auto px-4 py-12">
      <h1 className="font-display text-4xl font-bold mb-2">Próximos Estrenos</h1>
      <p className="text-muted-foreground mb-8">Las películas que llegarán pronto a CinEC</p>
      <div className="space-y-6">
        {upcoming.map(movie => (
          <div key={movie.id} className="flex flex-col md:flex-row gap-6 rounded-xl border border-border bg-card p-6 shadow-sm">
            <img src={movie.poster} alt={movie.title} className="w-full md:w-40 h-56 rounded-lg object-cover" />
            <div className="flex-1 space-y-3">
              <div className="flex flex-wrap gap-2">
                {movie.genre.map(g => <Badge key={g} variant="secondary">{g}</Badge>)}
              </div>
              <h2 className="font-display text-2xl font-bold">{movie.title}</h2>
              <p className="text-foreground/70 leading-relaxed">{movie.synopsis}</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                <CountdownTimer targetDate={movie.releaseDate} />
                <Button
                  variant="outline"
                  onClick={() => toast.success(`Te notificaremos cuando "${movie.title}" esté disponible`)}
                >
                  <Bell className="mr-1 h-4 w-4" /> Notificarme
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Estrenos;
