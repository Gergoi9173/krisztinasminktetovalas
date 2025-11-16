import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { ChevronLeft } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Termék nem található</h1>
            <Link to="/">
              <Button>Vissza a főoldalra</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast.success("Termék hozzáadva a kosárhoz");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Vissza a termékekhez
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
                <p className="text-2xl font-semibold text-primary">
                  {product.price.toLocaleString('hu-HU')} Ft
                </p>
              </div>

              <p className="text-lg text-muted-foreground">
                {product.longDescription}
              </p>

              <Button 
                size="lg" 
                className="w-full md:w-auto bg-primary hover:bg-primary/90"
                onClick={handleAddToCart}
              >
                Kosárba
              </Button>

              <div className="pt-6 border-t border-border">
                <h3 className="text-lg font-semibold mb-3">Összetevők</h3>
                <ul className="space-y-2">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="text-lg font-semibold mb-3">Használat</h3>
                <p className="text-muted-foreground">{product.usage}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
