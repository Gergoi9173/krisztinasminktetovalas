import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import ServiceList from "@/components/ServiceList";
import BookingDialog from "@/components/BookingDialog";
import { Button } from "@/components/ui/button";
import heroCollage from "@/assets/hero-collage.jpg";
import krisztinaProfile from "@/assets/krisztina-profile.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center py-20 md:py-0">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="text-center md:text-left order-2 md:order-1">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                  Ragyogj egész évben
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8">
                  Nálam megtalálod mindazt amitől fiatalabb, szebb és magabiztosabb lehetsz – kavitációs zsírbontás, sminktetoválás, szikrázó tekintet professzionális termékekkel, kedvező áron.
                </p>
                <BookingDialog>
                  <Button size="lg" className="text-lg px-8">
                    Időpontfoglalás
                  </Button>
                </BookingDialog>
              </div>
              <div className="flex justify-center md:justify-end order-1 md:order-2">
                <img 
                  src={heroCollage} 
                  alt="Sminktetoválás és szépségápolás eredmények" 
                  className="rounded-2xl shadow-lg w-full max-w-md lg:max-w-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services & Pricing */}
        <section id="kezelesek">
          <ServiceList />
        </section>

        {/* Gallery */}
        <Gallery />

        {/* About Section */}
        <section id="rolam" className="py-20 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Rólam</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Krisztina vagyok, sminktetoválás szakértőként professzionális PMU kezeléseket, arckezeléseket és zsírbontó kavitációs kezeléseket kínálok Budapest szívében.
                  Hiszek abban, hogy a szépség természetes, és a megfelelő technikával mindenki ragyoghat.
                </p>
                <p className="text-lg text-muted-foreground">
                  Egyéni konzultáció alapján állítom össze a számodra ideális kezelést.
                  Modern technológiákat és prémium termékeket használok minden kezelés során.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <img 
                  src={krisztinaProfile} 
                  alt="BeautyByKristina" 
                  className="rounded-lg shadow-lg w-full max-w-md object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
