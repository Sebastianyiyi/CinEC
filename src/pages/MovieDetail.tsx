import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Clock, Calendar, MapPin, Ticket, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { movies } from "@/data/mockData";

export default function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === id);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedDate, _setSelectedDate] = useState<string>("2026-04-15"); // Simulando fecha por defecto

  const showtimes = useMemo(() => {
    if (!movie || !movie.showtimes) return [];
    // Aquí en el futuro se pueden filtrar por selectedDate
    return movie.showtimes;
  }, [movie]);

  if (!movie) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center flex flex-col items-center justify-center min-h-[50vh]">
          <h1 className="text-3xl font-bold mb-4">Película no encontrada</h1>
          <p className="text-muted-foreground mb-8">No pudimos encontrar la información de esta película.</p>
          <Button onClick={() => navigate("/cartelera")}>Ir a Cartelera</Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full">
        <div className="absolute inset-0">
          <img
            src={movie.backdrop}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        
        <div className="container relative h-full mx-auto px-4 flex flex-col justify-end pb-12">
          <Button 
            variant="ghost" 
            className="w-fit mb-6 text-muted-foreground hover:text-foreground"
            onClick={() => navigate(-1)}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Volver
          </Button>
          
          <div className="flex flex-col md:flex-row gap-8 items-end md:items-center">
            <img
              src={movie.poster}
              alt={movie.title}
              className="hidden md:block w-48 rounded-lg shadow-2xl border border-border"
            />
            
            <div className="space-y-4 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary">{movie.rating}</Badge>
                {movie.genre.map((g) => (
                  <Badge key={g} variant="outline">{g}</Badge>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-md">
                {movie.title}
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-gray-300 drop-shadow-md">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {movie.duration} minutos
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Estreno: {new Date(movie.releaseDate).toLocaleDateString()}
                </span>
              </div>
              
              <p className="text-lg text-gray-200 leading-relaxed drop-shadow-md">
                {movie.synopsis}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Showtimes Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Ticket className="w-6 h-6" />
          Horarios Disponibles
        </h2>

        {movie.isUpcoming ? (
          <Card className="bg-muted/50 border-0">
            <CardContent className="flex flex-col items-center justify-center py-16 text-center">
              <Calendar className="w-16 h-16 text-muted-foreground mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Próximamente en Cines</h3>
              <p className="text-muted-foreground max-w-md">
                Esta película aún no se estrena. Mantente atento a nuestras redes sociales para la preventa.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {showtimes.length > 0 ? (
              showtimes.map((show) => (
                <Card key={show.id} className="hover:border-primary/50 transition-colors bg-card hover:bg-muted/30">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h4 className="font-semibold text-xl mb-1">{show.time}</h4>
                        <p className="text-muted-foreground flex items-center gap-1 text-sm">
                          <MapPin className="w-3 h-3" />
                          {show.room} • {show.roomType}
                        </p>
                      </div>
                      <Badge variant="secondary" className="text-lg">
                        ${show.price.toFixed(2)}
                      </Badge>
                    </div>
                    <Button 
                      className="w-full font-semibold" 
                      onClick={() => navigate(`/reserva/${show.id}`)}
                    >
                      Reservar Asientos
                    </Button>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-muted-foreground col-span-full py-12 text-center bg-muted/20 rounded-lg">
                No hay horarios disponibles para esta película en la fecha seleccionada.
              </p>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}
