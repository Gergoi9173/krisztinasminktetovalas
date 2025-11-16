import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { treatments } from "@/data/treatments";
import { ChevronLeft, Clock, CheckCircle2 } from "lucide-react";

const TreatmentDetail = () => {
  const { id } = useParams();
  const treatment = treatments.find((t) => t.id === id);

  if (!treatment) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Kezelés nem található</h1>
            <Link to="/">
              <Button>Vissza a főoldalra</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Vissza a kezelésekhez
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="aspect-square overflow-hidden rounded-lg bg-muted">
              <img
                src={treatment.image}
                alt={treatment.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">{treatment.name}</h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5" />
                  <span className="text-lg">{treatment.duration}</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground">
                {treatment.longDescription}
              </p>

              <div className="pt-6 border-t border-border">
                <h3 className="text-lg font-semibold mb-3">Előnyök</h3>
                <ul className="space-y-2">
                  {treatment.benefits.map((benefit, index) => (
                    <li key={index} className="text-muted-foreground flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="text-lg font-semibold mb-3">A kezelés menete</h3>
                <p className="text-muted-foreground">{treatment.process}</p>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="text-lg font-semibold mb-3">Utókezelés</h3>
                <p className="text-muted-foreground">{treatment.aftercare}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TreatmentDetail;
