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