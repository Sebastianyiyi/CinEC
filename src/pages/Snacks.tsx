import { snackCombos } from "@/data/mockData";

const Snacks = () => (
  <div className="min-h-screen bg-background">
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Snacks & Combos</h1>
      <p className="text-muted-foreground mb-8">Complementa tu experiencia cinematográfica</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {snackCombos.map(combo => (
          <div key={combo.id} className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
            <div className="relative h-48 overflow-hidden">
              <img src={combo.image} alt={combo.name} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
              {combo.popular && (
                <span className="absolute top-3 right-3 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">Popular</span>
              )}
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold">{combo.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{combo.description}</p>
              <ul className="mt-3 space-y-1">
                {combo.items.map(item => (
                  <li key={item} className="text-sm opacity-70">• {item}</li>
                ))}
              </ul>
              <div className="mt-4 text-2xl font-bold text-primary">${combo.price.toFixed(2)}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Snacks;
