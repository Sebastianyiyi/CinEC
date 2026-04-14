import { Tag, Ticket, Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import type { Promotion } from "@/data/mockData";

// Temporary mock data since promotions array is in PR 1
const mockPromotions: Promotion[] = [
  {
    id: "p1",
    title: "Lunes de Película",
    description: "Inicia la semana con 2x1 en entradas 2D y 3D en todas nuestras salas.",
    discount: "2x1",
    validUntil: "2026-12-31",
    image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800&h=400&fit=crop",
  },
  {
    id: "p2",
    title: "Combo Familiar",
    description: "4 Entradas + 2 Popcorn grandes + 4 Bebidas por un precio increíble.",
    discount: "30% OFF",
    validUntil: "2026-08-31",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=400&fit=crop",
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

const Promociones = () => {
  return (
    <Layout>
      <div className="bg-muted py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Tag className="w-10 h-10 text-accent" />
            Promociones y Ofertas
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Disfruta de la mejor experiencia cinematográfica al mejor precio. Descubre nuestras promociones vigentes.
          </p>
        </div>
      </div>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPromotions.map((promo) => (
            <div key={promo.id} className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:border-accent/50 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent text-accent-foreground font-bold px-3 py-1 rounded-full text-sm shadow-lg">
                  {promo.discount}
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{promo.title}</h3>
                <p className="text-muted-foreground mb-6 flex-1">
                  {promo.description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 p-2 rounded-lg">
                    <Clock className="w-4 h-4 text-accent" />
                    Válido hasta: <span className="font-semibold text-foreground">{promo.validUntil}</span>
                  </div>

                  <button className="w-full flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground font-semibold py-3 rounded-xl transition-colors">
                    <Ticket className="w-4 h-4" />
                    Obtener Promoción
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter / Club Section */}
      <section className="bg-primary text-primary-foreground py-16 mt-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Quieres enterarte primero de nuestras ofertas?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Únete a nuestro club de cine y recibe promociones exclusivas, invitaciones a preestrenos y mucho más directamente en tu correo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="w-full px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="w-full sm:w-auto px-8 py-3 bg-accent text-accent-foreground font-bold rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2">
              Suscribirme <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Promociones;
