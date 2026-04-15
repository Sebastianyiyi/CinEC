import { Link } from "react-router-dom";
import { ArrowRight, Play, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MovieCard from "@/components/MovieCard";
import CountdownTimer from "@/components/CountdownTimer";
import Layout from "@/components/Layout";
import { movies, promotions } from "@/data/mockData";
import { motion } from "framer-motion";

const featured = movies.find(m => !m.isUpcoming)!;
const nowPlaying = movies.filter(m => !m.isUpcoming);
const upcoming = movies.filter(m => m.isUpcoming);

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <img src={featured.backdrop} alt={featured.title} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
      <div className="container relative mx-auto flex h-full items-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg space-y-5"
        >
          <Badge className="bg-accent text-accent-foreground">{featured.genre[0]}</Badge>
          <h1 className="font-display text-5xl font-bold leading-tight text-primary-foreground md:text-6xl">
            {featured.title}
          </h1>
          <p className="text-primary-foreground/80 leading-relaxed">{featured.synopsis.slice(0, 150)}...</p>
          <div className="flex gap-3">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to={`/pelicula/${featured.id}`}>
                <Ticket className="h-4 w-4 mr-1" /> Comprar Entrada
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to={`/pelicula/${featured.id}`}>
                <Play className="h-4 w-4 mr-1" /> Ver Trailer
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Now Playing */}
    <section className="container mx-auto px-4 py-16">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="font-display text-3xl font-bold">En Cartelera</h2>
          <p className="text-muted-foreground mt-1">Películas disponibles ahora</p>
        </div>
        <Button asChild variant="ghost" className="text-accent">
          <Link to="/cartelera">Ver todas <ArrowRight className="ml-1 h-4 w-4" /></Link>
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {nowPlaying.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>

    {/* Upcoming */}
    {upcoming.length > 0 && (
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold">Próximos Estrenos</h2>
              <p className="text-muted-foreground mt-1">No te los pierdas</p>
            </div>
            <Button asChild variant="ghost" className="text-accent">
              <Link to="/estrenos">Ver todos <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {upcoming.slice(0, 3).map(movie => (
              <div key={movie.id} className="flex gap-4 rounded-lg bg-card p-4 shadow-sm">
                <img src={movie.poster} alt={movie.title} className="h-32 w-20 rounded-md object-cover" />
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg font-semibold">{movie.title}</h3>
                    <p className="text-xs text-muted-foreground">{movie.genre.join(" · ")}</p>
                  </div>
                  <CountdownTimer targetDate={movie.releaseDate} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )}

    {/* Promo Banner */}
    {promotions[0] && (
      <section className="container mx-auto px-4 py-16">
        <Link to="/promociones" className="group block relative overflow-hidden rounded-xl">
          <img src={promotions[0].image} alt={promotions[0].title} className="h-64 w-full object-cover transition-transform group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center p-8">
            <div className="max-w-md text-primary-foreground">
              <Badge className="bg-accent text-accent-foreground mb-3">{promotions[0].discount} OFF</Badge>
              <h2 className="font-display text-3xl font-bold">{promotions[0].title}</h2>
              <p className="mt-2 text-primary-foreground/80">{promotions[0].description}</p>
            </div>
          </div>
        </Link>
      </section>
    )}
  </Layout>
);

export default Index;
