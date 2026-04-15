import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import SeatMap from "@/components/SeatMap";
import { movies, snackCombos, type Seat } from "@/data/mockData";
import { motion, AnimatePresence } from "framer-motion";

type Step = "seats" | "snacks" | "checkout" | "ticket";

const Booking = () => {
  const { movieId, showtimeId } = useParams();
  const navigate = useNavigate();

  const movie = movies.find(m => m.id === movieId);
  const showtime = movie?.showtimes.find(s => s.id === showtimeId);

  const [step, setStep] = useState<Step>("seats");
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
  const [snackCart, setSnackCart] = useState<Map<string, number>>(new Map());

  if (!movie || !showtime) return (
    <Layout>
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-3xl font-bold">Función no encontrada</h1>
        <Button onClick={() => navigate("/cartelera")} className="mt-4">Volver</Button>
      </div>
    </Layout>
  );

  const updateSnack = (id: string, delta: number) => {
    setSnackCart(prev => {
      const next = new Map(prev);
      const qty = (next.get(id) || 0) + delta;
      if (qty <= 0) next.delete(id); else next.set(id, qty);
      return next;
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" onClick={() => step === "seats" ? navigate(-1) : setStep(step === "snacks" ? "seats" : step === "checkout" ? "snacks" : "seats")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="font-display text-2xl font-bold">{movie.title}</h1>
            <p className="text-sm text-muted-foreground">{showtime.time} · {showtime.room} · {showtime.roomType}</p>
          </div>
        </div>

        {/* Steps indicator */}
        <div className="flex gap-2 mb-8">
          {(["seats", "snacks", "checkout", "ticket"] as Step[]).map((s, i) => (
            <div key={s} className={`h-1 flex-1 rounded-full transition-colors ${
              (["seats", "snacks", "checkout", "ticket"] as Step[]).indexOf(step) >= i ? "bg-primary" : "bg-muted"
            }`} />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            {step === "seats" && (
              <div className="space-y-6">
                <h2 className="font-display text-xl font-semibold">Selecciona tus asientos</h2>
                <SeatMap onSelectionChange={setSelectedSeats} />
                {selectedSeats.length > 0 && (
                  <div className="flex items-center justify-between rounded-lg border border-border p-4">
                    <div>
                      <span className="text-sm text-muted-foreground">{selectedSeats.length} asiento(s): </span>
                      <span className="font-medium">{selectedSeats.map(s => s.id).join(", ")}</span>
                    </div>
                    <Button onClick={() => setStep("snacks")} className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Continuar
                    </Button>
                  </div>
                )}
              </div>
            )}

            {step === "snacks" && (
              <div className="space-y-6">
                <h2 className="font-display text-xl font-semibold">¿Agregar snacks?</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {snackCombos.map(combo => {
                    const qty = snackCart.get(combo.id) || 0;
                    return (
                      <div key={combo.id} className="flex gap-3 rounded-lg border border-border p-3">
                        <img src={combo.image} alt={combo.name} className="h-20 w-20 rounded-md object-cover" />
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <h3 className="font-semibold text-sm">{combo.name}</h3>
                            {combo.popular && <Badge className="bg-primary text-primary-foreground text-[10px]">Popular</Badge>}
                          </div>
                          <p className="text-xs text-muted-foreground">{combo.items.join(", ")}</p>
                          <div className="mt-2 flex items-center justify-between">
                            <span className="font-semibold text-primary">${combo.price.toFixed(2)}</span>
                            <div className="flex items-center gap-2">
                              {qty > 0 && (
                                <>
                                  <Button size="icon" variant="outline" className="h-7 w-7" onClick={() => updateSnack(combo.id, -1)}>
                                    <Minus className="h-3 w-3" />
                                  </Button>
                                  <span className="text-sm font-medium w-4 text-center">{qty}</span>
                                </>
                              )}
                              <Button size="icon" variant="outline" className="h-7 w-7" onClick={() => updateSnack(combo.id, 1)}>
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-end gap-3">
                  <Button variant="outline" onClick={() => setStep("checkout")}>Omitir</Button>
                  <Button onClick={() => setStep("checkout")} className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <ShoppingCart className="mr-1 h-4 w-4" /> Continuar
                  </Button>
                </div>
              </div>
            )}
            </motion.div>
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default Booking;
