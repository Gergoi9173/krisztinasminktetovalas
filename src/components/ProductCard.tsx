import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description?: string;
}

const ProductCard = ({ id, name, price, image, description }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({ id, name, price, image });
    toast.success("Termék hozzáadva a kosárhoz");
  };

  return (
    <Link to={`/product/${id}`}>
      <Card className="group overflow-hidden border-border hover:shadow-[var(--shadow-hover)] transition-all duration-300">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-1">{name}</h3>
          {description && (
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {description}
            </p>
          )}
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold">{price.toLocaleString('hu-HU')} Ft</span>
            <Button 
              size="sm" 
              onClick={handleAddToCart}
              className="bg-primary hover:bg-primary/90"
            >
              Kosárba
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
