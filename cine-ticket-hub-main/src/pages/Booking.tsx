import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Ticket, ShoppingCart, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import SeatMap from "@/components/SeatMap";
import { movies, snackCombos, type Seat, type SnackCombo } from "@/data/mockData";
import { QRCodeSVG } from "qrcode.react";
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
  const [coupon, setCoupon] = useState("");
  const [ticketId] = useState(() => `CEC-${Date.now().toString(36).toUpperCase()}`);

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

  const seatsTotal = selectedSeats.length * showtime.price;
  const snacksTotal = Array.from(snackCart.entries()).reduce((sum, [id, qty]) => {
    const combo = snackCombos.find(c => c.id === id);
    return sum + (combo ? combo.price * qty : 0);
  }, 0);
  const total = seatsTotal + snacksTotal;

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
              (["seats", "snacks", "checkout", "ticket"] as Step[]).indexOf(step) >= i ? "bg-accent" : "bg-muted"
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
                    <Button onClick={() => setStep("snacks")} className="bg-accent text-accent-foreground hover:bg-accent/90">
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
                            {combo.popular && <Badge className="bg-accent text-accent-foreground text-[10px]">Popular</Badge>}
                          </div>
                          <p className="text-xs text-muted-foreground">{combo.items.join(", ")}</p>
                          <div className="mt-2 flex items-center justify-between">
                            <span className="font-semibold text-accent">${combo.price.toFixed(2)}</span>
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
                  <Button onClick={() => setStep("checkout")} className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <ShoppingCart className="mr-1 h-4 w-4" /> Continuar
                  </Button>
                </div>
              </div>
            )}

            {step === "checkout" && (
              <div className="space-y-6 max-w-md mx-auto">
                <h2 className="font-display text-xl font-semibold">Resumen de compra</h2>
                <div className="rounded-lg border border-border p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold">{movie.title}</h3>
                    <p className="text-sm text-muted-foreground">{showtime.time} · {showtime.room}</p>
                  </div>
                  <div className="border-t border-border pt-3 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Entradas ({selectedSeats.length}x ${showtime.price.toFixed(2)})</span>
                      <span>${seatsTotal.toFixed(2)}</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Asientos: {selectedSeats.map(s => s.id).join(", ")}</div>
                    {Array.from(snackCart.entries()).map(([id, qty]) => {
                      const combo = snackCombos.find(c => c.id === id)!;
                      return (
                        <div key={id} className="flex justify-between">
                          <span>{combo.name} x{qty}</span>
                          <span>${(combo.price * qty).toFixed(2)}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex gap-2">
                    <Input placeholder="Código de cupón" value={coupon} onChange={e => setCoupon(e.target.value)} className="flex-1" />
                    <Button variant="outline" size="sm">Aplicar</Button>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between font-display text-xl font-bold">
                    <span>Total</span>
                    <span className="text-accent">${total.toFixed(2)}</span>
                  </div>
                </div>
                <Button onClick={() => setStep("ticket")} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Ticket className="mr-1 h-4 w-4" /> Confirmar Compra (Simulado)
                </Button>
              </div>
            )}

            {step === "ticket" && (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="max-w-sm mx-auto text-center space-y-6">
                <div className="rounded-xl border-2 border-dashed border-accent p-8 space-y-4 bg-card">
                  <h2 className="font-display text-2xl font-bold text-accent">¡Compra Exitosa!</h2>
                  <div className="flex justify-center">
                    <QRCodeSVG value={`cinec://ticket/${ticketId}`} size={160} level="H" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-display text-lg font-semibold">{movie.title}</p>
                    <p className="text-sm text-muted-foreground">{showtime.time} · {showtime.room}</p>
                    <p className="text-sm text-muted-foreground">Asientos: {selectedSeats.map(s => s.id).join(", ")}</p>
                    <p className="text-xs font-mono text-muted-foreground mt-2">ID: {ticketId}</p>
                  </div>
                  <p className="font-display text-xl font-bold text-accent">${total.toFixed(2)}</p>
                </div>
                <p className="text-sm text-muted-foreground">Presenta este código QR en la entrada del cine</p>
                <Button onClick={() => navigate("/")} variant="outline">Volver al Inicio</Button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default Booking;
