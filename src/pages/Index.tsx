import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import ServiceList from "@/components/ServiceList";
import BookingDialog from "@/components/BookingDialog";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-beauty.png";
import krisztinaProfile from "@/assets/krisztina-profile.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-background/30" />
          </div>
          
          <div className="relative container mx-auto px-4 lg:px-8 text-center md:text-left">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                Minőségi sminktetoválás
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8">
                Professzionális PMU kezelésekkel és arcápolási szolgáltatásokkal segítek kiemelni természetes szépségedet. Minden kezelés során a legmodernebb technológiákat és prémium termékeket használok.
              </p>
              <BookingDialog>
                <Button size="lg" className="text-lg px-8">
                  Időpontfoglalás
                </Button>
              </BookingDialog>
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
        <section id="rolam" className="py-20 bg-gradient-to-b from-muted/20 to-background">
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
