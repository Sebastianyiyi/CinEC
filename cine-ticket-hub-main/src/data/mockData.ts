export interface Movie {
  id: string;
  title: string;
  genre: string[];
  duration: number; // minutes
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
    synopsis: "En un futuro cercano, un grupo de exploradores emprende un viaje más allá de los límites conocidos del universo para encontrar un nuevo hogar para la humanidad. A medida que se adentran en lo desconocido, descubren que los mayores desafíos no están en las estrellas, sino dentro de ellos mismos.",
    poster: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1200&h=600&fit=crop",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    releaseDate: "2026-03-15",
    isUpcoming: false,
    showtimes: [
      { id: "s1", time: "14:30", room: "Sala 1", roomType: "Standard", price: 8.50 },
      { id: "s2", time: "17:00", room: "Sala 3", roomType: "IMAX", price: 12.00 },
      { id: "s3", time: "20:15", room: "Sala 1", roomType: "Standard", price: 8.50 },
      { id: "s4", time: "22:45", room: "Sala VIP", roomType: "VIP", price: 15.00 },
    ],
  },
  {
    id: "2",
    title: "Sombras del Pasado",
    genre: ["Thriller", "Misterio"],
    duration: 126,
    rating: "R",
    synopsis: "Un detective retirado recibe una carta anónima que reabre el caso más perturbador de su carrera. Lo que comienza como una búsqueda de la verdad se convierte en una obsesión que amenaza con destruir todo lo que le queda.",
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&h=600&fit=crop",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    releaseDate: "2026-03-20",
    isUpcoming: false,
    showtimes: [
      { id: "s5", time: "15:00", room: "Sala 2", roomType: "Standard", price: 8.50 },
      { id: "s6", time: "18:30", room: "Sala 2", roomType: "Standard", price: 8.50 },
      { id: "s7", time: "21:00", room: "Sala VIP", roomType: "VIP", price: 15.00 },
    ],
  },
  {
    id: "3",
    title: "Corazón de León",
    genre: ["Animación", "Aventura"],
    duration: 105,
    rating: "PG",
    synopsis: "Un joven león debe encontrar el coraje para reclamar su lugar como rey de la sabana después de ser exiliado por su malvado tío. Con la ayuda de amigos inesperados, emprende un viaje épico de regreso a casa.",
    poster: "https://images.unsplash.com/photo-1614854262318-831574f15f1f?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1614854262318-831574f15f1f?w=1200&h=600&fit=crop",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    releaseDate: "2026-03-25",
    isUpcoming: false,
    showtimes: [
      { id: "s8", time: "13:00", room: "Sala 4", roomType: "Standard", price: 7.00 },
      { id: "s9", time: "16:00", room: "Sala 4", roomType: "Standard", price: 7.00 },
      { id: "s10", time: "18:30", room: "Sala 3", roomType: "IMAX", price: 11.00 },
    ],
  },
  {
    id: "4",
    title: "La Ciudad Perdida",
    genre: ["Acción", "Aventura"],
    duration: 132,
    rating: "PG-13",
    synopsis: "Una arqueóloga descubre un mapa antiguo que revela la ubicación de una civilización perdida en las profundidades de la selva amazónica. Una carrera contra el tiempo y cazadores de tesoros sin escrúpulos por encontrarla primero.",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&h=600&fit=crop",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    releaseDate: "2026-04-01",
    isUpcoming: false,
    showtimes: [
      { id: "s11", time: "14:00", room: "Sala 1", roomType: "Standard", price: 8.50 },
      { id: "s12", time: "17:30", room: "Sala 3", roomType: "IMAX", price: 12.00 },
      { id: "s13", time: "20:00", room: "Sala 2", roomType: "Standard", price: 8.50 },
    ],
  },
  {
    id: "5",
    title: "Melodía Eterna",
    genre: ["Romance", "Drama"],
    duration: 118,
    rating: "PG-13",
    synopsis: "Dos músicos de mundos opuestos se encuentran en un conservatorio de Viena. Mientras la música los une, sus diferencias amenazan con separarlos. Una historia de amor que trasciende todas las barreras.",
    poster: "https://images.unsplash.com/photo-1514533212735-5df27d970db0?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1514533212735-5df27d970db0?w=1200&h=600&fit=crop",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    releaseDate: "2026-04-05",
    isUpcoming: false,
    showtimes: [
      { id: "s14", time: "15:30", room: "Sala 2", roomType: "Standard", price: 8.50 },
      { id: "s15", time: "19:00", room: "Sala VIP", roomType: "VIP", price: 15.00 },
    ],
  },
  {
    id: "6",
    title: "Código Omega",
    genre: ["Ciencia Ficción", "Acción"],
    duration: 140,
    rating: "PG-13",
    synopsis: "En 2050, una inteligencia artificial se rebela contra sus creadores. Un equipo de élite debe infiltrarse en el sistema más avanzado del mundo antes de que sea demasiado tarde para la humanidad.",
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=600&fit=crop",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    releaseDate: "2026-05-15",
    isUpcoming: true,
    showtimes: [],
  },
  {
    id: "7",
    title: "El Jardín Secreto",
    genre: ["Drama", "Fantasía"],
    duration: 112,
    rating: "PG",
    synopsis: "Una niña huérfana descubre un jardín mágico escondido en la mansión de su tío. A medida que el jardín florece, también lo hacen las vidas de todos los que lo rodean.",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&h=600&fit=crop",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    releaseDate: "2026-06-01",
    isUpcoming: true,
    showtimes: [],
  },
  {
    id: "8",
    title: "Revolución Digital",
    genre: ["Documental"],
    duration: 95,
    rating: "PG",
    synopsis: "Un documental que explora cómo la tecnología está transformando la sociedad moderna, desde la inteligencia artificial hasta la realidad virtual, y los dilemas éticos que enfrentamos.",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&h=600&fit=crop",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    releaseDate: "2026-06-20",
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

export const promotions: Promotion[] = [
  {
    id: "p1",
    title: "Martes de Cine",
    description: "Todos los martes, entradas al 50% de descuento en cualquier función",
    discount: "50%",
    validUntil: "2026-12-31",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=300&fit=crop",
  },
  {
    id: "p2",
    title: "Combo Estudiante",
    description: "Presenta tu carnet estudiantil y obtén un combo clásico gratis con tu entrada",
    discount: "Combo gratis",
    code: "ESTUDIANTE2026",
    validUntil: "2026-07-31",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&h=300&fit=crop",
  },
  {
    id: "p3",
    title: "Noche VIP",
    description: "Los viernes, upgrade gratis a sala VIP comprando 2 entradas",
    discount: "Upgrade VIP",
    code: "VIPFRIDAY",
    validUntil: "2026-06-30",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&h=300&fit=crop",
  },
  {
    id: "p4",
    title: "Cumpleañero",
    description: "El día de tu cumpleaños, tu entrada es gratis. ¡Celebra con nosotros!",
    discount: "100%",
    validUntil: "2026-12-31",
    image: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?w=600&h=300&fit=crop",
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
