import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const RfCavitation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                Zsírbontó Kavitációs RF & Lézeres Fogyasztás
              </h1>
              
              <p className="text-lg text-muted-foreground mb-12 text-center">
                Modern testformálás ultrahang és rádiófrekvencia technológiával
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    Első alkalom
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>1 területre</span>
                      <span className="font-semibold text-primary">15.000 Ft</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>2 területre</span>
                      <span className="font-semibold text-primary">25.000 Ft</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    5 alkalmas bérlet
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>1 területre</span>
                      <span className="font-semibold text-primary">60.000 Ft</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>2 területre</span>
                      <span className="font-semibold text-primary">100.000 Ft</span>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">A készülék technológiái</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">
                      Ultrahangos szonda
                    </h3>
                    <p className="text-muted-foreground">
                      Az ultrahangos karcsúsító készülékkel a test gyakorlatilag bármely problémás 
                      területére pontosan célozható, ahol extra súlyt cipel.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">
                      Három szintű RF (rádiófrekvencia)
                    </h3>
                    <p className="text-muted-foreground">
                      A kavitációs karcsúsító készülék harmadik szintű RF-vel rendelkezik a szemhez, 
                      negyedik szintű RF-jel az archoz, hatodik szinthez RF a testhez. Ez a három 
                      rádiófrekvenciás szint fokozhatja a vérkeringést, felgyorsíthatja a zsírlebontást, 
                      eltávolíthatja a salakanyagokat.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">
                      Negatív nyomás plusz RF
                    </h3>
                    <p className="text-muted-foreground">
                      A pozitív és negatív aktivációs energia felhasználása felszabadíthatja a bőrsejteket, 
                      így a gyors szintézis fibroblasztok kollagén, rugalmas bőr visszaállhat az eredeti 
                      tömörségbe, stimulálhatja az izomzatot.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">
                      EMS
                    </h3>
                    <p className="text-muted-foreground">
                      Bőrfeszesítés a narancsbőr és a zsír lebontása után. Például az arc, a mellek, 
                      a csípő stb. felemelése.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">
                      Fagyasztás és hideg borogatás
                    </h3>
                    <p className="text-muted-foreground">
                      A karcsúsító készülék hűvössége megnyithatja a pórusokat, míg a görgő elősegítheti 
                      a vérkeringést, amely csökkentheti a duzzanatokat és a ráncosodást, helyreállíthatja 
                      a ragyogást és emelheti a bőrt.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary">
                      7 lámpa a terápiához
                    </h3>
                    <p className="text-muted-foreground">
                      A zsírégető gép lámpái megfelelő megoldást nyújtanak fényterápiához. Biztos lehet 
                      benne, hogy a készülék használatakor hatékony fénymennyiséget juttat a szervezetébe.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground italic">
                    A termék nem orvostechnikai eszköz!
                  </p>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Funkciók és elérhető hatások</h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Karcsúsítás és zsíroldás</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Bőrfeszesítés, öregedésgátlás</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Vérkeringés és anyagcsere javítása</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Hegek és ráncok simítása</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Terhességi csíkok simítása</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Fibroblaszt rugalmas szövet fokozása</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Fogyás, karcsúsítás</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Bőrfeszesítés, ránctalanítás</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Bőrfiatalítás és bőrfehérítés</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>Cellulit csökkentése</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RfCavitation;
