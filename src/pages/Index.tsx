import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-cosmetics.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
          </div>
          
          <div className="relative container mx-auto px-4 lg:px-8 text-center md:text-left">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                Természetes szépség
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                Prémium kozmetikumok természetes összetevőkkel, amelyek kiemelni a bőröd természetes szépségét.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Fedezd fel a termékeket
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Kiemelt Termékek</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Válogatott kollekcióink a legjobb természetes összetevőkből készülnek
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  description={product.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Rólunk</h2>
              <p className="text-lg text-muted-foreground mb-6">
                A Bella kozmetikumok természetes összetevőkből készülnek, és a bőrödre gondolva lettek kifejlesztve.
                Hiszünk abban, hogy a szépség természetes, és a megfelelő ápolással mindenki ragyoghat.
              </p>
              <p className="text-lg text-muted-foreground">
                Termékeink dermatológiailag teszteltek, cruelty-free és környezetbarát csomagolásban érkeznek.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
