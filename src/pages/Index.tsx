import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import ServiceList from "@/components/ServiceList";
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
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Professzionális arckezeléseket kínálok természetes hatóanyagokkal, amelyek kiemelik bőröd természetes szépségét.
              </p>
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
            <div className="max-w-3xl mx-auto text-center">
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
