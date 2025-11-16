import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";

interface TreatmentCardProps {
  id: string;
  name: string;
  duration: string;
  image: string;
  description?: string;
}

const TreatmentCard = ({ id, name, duration, image, description }: TreatmentCardProps) => {
  return (
    <Link to={`/treatment/${id}`}>
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
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{duration}</span>
            </div>
            <Button 
              size="sm" 
              variant="outline"
              className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
            >
              Részletek
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default TreatmentCard;
