import Layout from "@/components/Layout";

const Cartelera = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2">Cartelera</h1>
        <p className="text-muted-foreground mb-8">
          Todas las películas en cartel
        </p>
      </section>
    </Layout>
  );
};

export default Cartelera;