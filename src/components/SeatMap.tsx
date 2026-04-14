import { useState, useMemo } from "react";
import { generateSeats, type Seat } from "@/data/mockData";
import { cn } from "@/lib/utils";

interface SeatMapProps {
  onSelectionChange: (seats: Seat[]) => void;
}

const SeatMap = ({ onSelectionChange }: SeatMapProps) => {
  const [seats, setSeats] = useState<Seat[]>(() => generateSeats());

  const rows = useMemo(() => {
    const map = new Map<string, Seat[]>();
    seats.forEach(s => {
      if (!map.has(s.row)) map.set(s.row, []);
      map.get(s.row)!.push(s);
    });
    return Array.from(map.entries());
  }, [seats]);

  const toggleSeat = (seatId: string) => {
    setSeats(prev => {
      const updated = prev.map(s => {
        if (s.id !== seatId || s.status === 'occupied') return s;
        return { ...s, status: s.status === 'selected' ? 'available' as const : 'selected' as const };
      });
      onSelectionChange(updated.filter(s => s.status === 'selected'));
      return updated;
    });
  };

  return (
    <div className="space-y-6">
      {/* Screen */}
      <div className="mx-auto w-3/4 text-center">
        <div className="h-2 rounded-full bg-accent/60 mb-2" />
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Pantalla</span>
      </div>

      {/* Seats */}
      <div className="space-y-2">
        {rows.map(([row, rowSeats]) => (
          <div key={row} className="flex items-center justify-center gap-1">
            <span className="w-6 text-center text-xs font-medium text-muted-foreground">{row}</span>
            <div className="flex gap-1">
              {rowSeats.map((seat, i) => (
                <button
                  key={seat.id}
                  onClick={() => toggleSeat(seat.id)}
                  disabled={seat.status === 'occupied'}
                  className={cn(
                    "h-7 w-7 rounded-t-md text-[10px] font-medium transition-all",
                    seat.status === 'available' && "bg-muted hover:bg-accent/40 text-muted-foreground",
                    seat.status === 'occupied' && "bg-primary/20 cursor-not-allowed text-primary/30",
                    seat.status === 'selected' && "bg-accent text-accent-foreground scale-105",
                    i === 5 && "mr-4", // aisle
                  )}
                >
                  {seat.number}
                </button>
              ))}
            </div>
            <span className="w-6 text-center text-xs font-medium text-muted-foreground">{row}</span>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <div className="h-4 w-4 rounded-t-md bg-muted" />
          Disponible
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-4 w-4 rounded-t-md bg-accent" />
          Seleccionado
        </div>
        <div className="flex items-center gap-1.5">
          <div className="h-4 w-4 rounded-t-md bg-primary/20" />
          Ocupado
        </div>
      </div>
    </div>
  );
};

export default SeatMap;
