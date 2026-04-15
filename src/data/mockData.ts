export interface Movie {
  id: string;
  title: string;
  genre: string[];
  duration: number;
  rating: string;
  synopsis: string;
  poster: string;
  backdrop: string;
  trailerUrl: string;
  releaseDate: string;
  isUpcoming: boolean;
  showtimes: Showtime[];
}

export interface Showtime {
  id: string;
  time: string;
  room: string;
  roomType: string;
  price: number;
}

export interface Seat {
  id: string;
  row: string;
  number: number;
  status: 'available' | 'occupied' | 'selected';
}

export interface SnackCombo {
  id: string;
  name: string;
  description: string;
  items: string[];
  price: number;
  image: string;
  popular?: boolean;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  discount: string;
  code?: string;
  validUntil: string;
  image: string;
}

export const movies: Movie[] = [
  {
    id: "1",
    title: "El Último Horizonte",
    genre: ["Ciencia Ficción", "Drama"],
    duration: 148,
    rating: "PG-13",
    synopsis: "En un futuro cercano, un grupo de exploradores emprende un viaje más allá de los límites conocidos del universo.",
    poster: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1200&h=600&fit=crop",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    releaseDate: "2026-03-15",
    isUpcoming: false,
    showtimes: [
      { id: "s1", time: "14:30", room: "Sala 1", roomType: "Standard", price: 8.50 },
    ],
  },
  {
    id: "6",
    title: "Código Omega",
    genre: ["Ciencia Ficción", "Acción"],
    duration: 140,
    rating: "PG-13",
    synopsis: "En 2050, una inteligencia artificial se rebela contra sus creadores.",
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=600&fit=crop",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    releaseDate: "2026-05-15",
    isUpcoming: true,
    showtimes: [],
  },
];

export const snackCombos: SnackCombo[] = [
  {
    id: "c1",
    name: "Combo Clásico",
    description: "El favorito de siempre para disfrutar tu película",
    items: ["Palomitas medianas", "Refresco mediano"],
    price: 6.50,
    image: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?w=400&h=300&fit=crop",
  },
];

export const promotions: Promotion[] = [
  {
    id: "p1",
    title: "Martes de Cine",
    description: "Todos los martes, entradas al 50% de descuento",
    discount: "50%",
    validUntil: "2026-12-31",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=300&fit=crop",
  },
];

export const generateSeats = (): Seat[] => {
  const rows = ['A', 'B', 'C'];
  const seatsPerRow = 10;
  const seats: Seat[] = [];
  rows.forEach(row => {
    for (let i = 1; i <= seatsPerRow; i++) {
      seats.push({ id: `${row}${i}`, row, number: i, status: 'available' });
    }
  });
  return seats;
};
