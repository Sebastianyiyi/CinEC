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
    synopsis: "En un futuro cercano, exploradores emprenden un viaje más allá de los límites del universo para encontrar un nuevo hogar para la humanidad.",
    poster: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1200&h=600&fit=crop",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    releaseDate: "2026-03-15",
    isUpcoming: false,
    showtimes: [
      { id: "s1", time: "14:30", room: "Sala 1", roomType: "Standard", price: 8.50 },
      { id: "s2", time: "17:00", room: "Sala 3", roomType: "IMAX", price: 12.00 },
    ],
  },
  {
    id: "2",
    title: "Sombras del Pasado",
    genre: ["Thriller", "Misterio"],
    duration: 126,
    rating: "R",
    synopsis: "Un detective retirado recibe una carta anónima que reabre el caso más perturbador de su carrera.",
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&h=600&fit=crop",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    releaseDate: "2026-03-20",
    isUpcoming: false,
    showtimes: [
      { id: "s3", time: "15:00", room: "Sala 2", roomType: "Standard", price: 8.50 },
      { id: "s4", time: "21:00", room: "Sala VIP", roomType: "VIP", price: 15.00 },
    ],
  },
  {
    id: "3",
    title: "Amor en Tokio",
    genre: ["Romance", "Drama"],
    duration: 112,
    rating: "PG",
    synopsis: "Dos extraños se encuentran en Tokio y descubren que sus vidas están entrelazadas de formas que ninguno esperaba.",
    poster: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&h=600&fit=crop",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    releaseDate: "2026-05-10",
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
  {
    id: "c2",
    name: "Combo Familiar",
    description: "Perfecto para compartir con toda la familia",
    items: ["Palomitas grandes", "2 Refrescos grandes", "Nachos con queso"],
    price: 14.00,
    image: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?w=400&h=300&fit=crop",
    popular: true,
  },
  {
    id: "c3",
    name: "Combo Premium",
    description: "La experiencia gourmet del cine",
    items: ["Palomitas grandes saborizadas", "2 Bebidas premium", "Hot dog gourmet"],
    price: 18.50,
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&h=300&fit=crop",
  },
  {
    id: "c4",
    name: "Combo Dulce",
    description: "Para los amantes de lo dulce",
    items: ["Palomitas caramelizadas", "Refresco mediano", "Chocolates surtidos"],
    price: 9.00,
    image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=400&h=300&fit=crop",
  },
  {
    id: "c5",
    name: "Combo Pareja",
    description: "Ideal para una cita de cine perfecta",
    items: ["Palomitas grandes", "2 Refrescos medianos", "Nachos para compartir"],
    price: 12.00,
    image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=400&h=300&fit=crop",
    popular: true,
  },
  {
    id: "c6",
    name: "Solo Palomitas",
    description: "Palomitas recién hechas",
    items: ["Palomitas grandes con mantequilla extra"],
    price: 5.00,
    image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=300&fit=crop",
  },
];
export const generateSeats = (): Seat[] => {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const seatsPerRow = 12;
  const seats: Seat[] = [];

  rows.forEach(row => {
    for (let i = 1; i <= seatsPerRow; i++) {
      const random = Math.random();
      seats.push({
        id: `${row}${i}`,
        row,
        number: i,
        status: random < 0.3 ? 'occupied' : 'available',
      });
    }
  });

  return seats;
};
