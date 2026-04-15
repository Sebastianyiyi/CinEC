import Layout from "@/components/Layout";
import { promotions } from "@/data/mockData";

const Promociones = () => {
  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    alert("Código copiado: " + code);
  };

  return (
    <Layout>
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">Promociones</h1>
        <p className="text-muted-foreground mb-8">Aprovecha nuestras ofertas especiales</p>
        <div className="grid gap-6 md:grid-cols-2">
          {promotions.map(promo => (
            <div key={promo.id} className="group overflow-hidden rounded-xl border bg-card shadow-sm">
              <div className="relative h-44 overflow-hidden">
                <img src={promo.image} alt={promo.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded">
                  {promo.discount}
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-xl font-semibold">{promo.title}</h3>
                <p className="text-sm text-muted-foreground">{promo.description}</p>
                <p className="text-xs opacity-60">Válido hasta: {promo.validUntil}</p>
                {promo.code && (
                  <div className="flex items-center gap-2 pt-1">
                    <code className="rounded bg-muted px-3 py-1 text-sm font-mono">{promo.code}</code>
                    <button
                      onClick={() => handleCopy(promo.code!)}
                      className="p-2 hover:bg-muted rounded transition-colors"
                      title="Copiar código"
                    >
                      📋
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Promociones;
