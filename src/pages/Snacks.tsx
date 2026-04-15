import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { snackCombos } from "@/data/mockData";

const Snacks = () => (
  <Layout>
    <section className="container mx-auto px-4 py-12">
      <h1 className="font-display text-4xl font-bold mb-2">Snacks & Combos</h1>
      <p className="text-muted-foreground mb-8">Complementa tu experiencia cinematográfica</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {snackCombos.map(combo => (
          <div key={combo.id} className="group overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
            <div className="relative h-48 overflow-hidden">
              <img src={combo.image} alt={combo.name} className="h-full w-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
              {combo.popular && (
                <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">Popular</Badge>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl font-semibold">{combo.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{combo.description}</p>
              <ul className="mt-3 space-y-1">
                {combo.items.map(item => (
                  <li key={item} className="text-sm text-foreground/70">• {item}</li>
                ))}
              </ul>
              <div className="mt-4 font-display text-2xl font-bold text-accent">${combo.price.toFixed(2)}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Snacks;
