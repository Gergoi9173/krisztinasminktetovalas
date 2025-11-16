import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { serviceCategories } from "@/data/services";
import { Link } from "react-router-dom";

const ServiceList = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Szolgáltatások & Árak</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professzionális szépségápolási szolgáltatások versenyképes árakon
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {serviceCategories.map((category) => (
            <Card key={category.id} className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.name}
              </h3>
              <div className="space-y-3">
                {category.services.map((service, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-border/50 last:border-0"
                  >
                    <span className="text-foreground">{service.name}</span>
                    <span className="font-semibold text-primary">
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
              {category.id === "zsirbonto-kavitacio" && (
                <div className="mt-4 pt-4 border-t border-border/50">
                  <Link to="/rf-cavitation">
                    <Button variant="outline" className="w-full">
                      Részletes információ
                    </Button>
                  </Link>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
