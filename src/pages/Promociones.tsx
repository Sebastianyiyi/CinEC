import { Copy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { promotions } from "@/data/mockData";
import { toast } from "sonner";

const Promociones = () => (
  <Layout>
    <section className="container mx-auto px-4 py-12">
      <h1 className="font-display text-4xl font-bold mb-2">Promociones</h1>
      <p className="text-muted-foreground mb-8">Aprovecha nuestras ofertas especiales</p>
      <div className="grid gap-6 md:grid-cols-2">
        {promotions.map(promo => (
          <div key={promo.id} className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <div className="relative h-44 overflow-hidden">
              <img src={promo.image} alt={promo.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
              <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground text-sm px-3 py-1">
                {promo.discount}
              </Badge>
            </div>
            <div className="p-5 space-y-2">
              <h3 className="font-display text-xl font-semibold">{promo.title}</h3>
              <p className="text-sm text-muted-foreground">{promo.description}</p>
              <p className="text-xs text-muted-foreground">Válido hasta: {promo.validUntil}</p>
              {promo.code && (
                <div className="flex items-center gap-2 pt-1">
                  <code className="rounded bg-muted px-3 py-1 text-sm font-mono">{promo.code}</code>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8"
                    onClick={() => {
                      navigator.clipboard.writeText(promo.code!);
                      toast.success("Código copiado al portapapeles");
                    }}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Promociones;
