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

export const promotions: Promotion[] = [
  {
    id: "p1",
    title: "Lunes de Película",
    description: "Inicia la semana con 2x1 en entradas 2D y 3D en todas nuestras salas.",
    discount: "2x1",
    validUntil: "2026-12-31",
    image: "https://images.unsplash.com/photo-1485686531765-a80556285812?w=800&h=400&fit=crop",
  },
  {
    id: "p2",
    title: "Combo Familiar",
    description: "4 Entradas + 2 Popcorn grandes + 4 Bebidas por un precio increíble.",
    discount: "30% OFF",
    validUntil: "2026-08-31",
    image: "https://images.unsplash.com/photo-1572115606524-204961f6236b?w=800&h=400&fit=crop",
  },
  {
    id: "p3",
    title: "Descuento Estudiantes",
    description: "Presenta tu carnet estudiantil universitario y obtén descuento en tu entrada.",
    discount: "20% OFF",
    validUntil: "2026-12-31",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800&h=400&fit=crop",
  }
];