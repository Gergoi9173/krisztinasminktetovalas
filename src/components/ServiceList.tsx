import { Card } from "@/components/ui/card";
import { serviceCategories } from "@/data/services";

const ServiceList = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Szolgáltatások & Árak</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professzionális szépségápolási szolgáltatásokat kínálok versenyképes árakon
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {serviceCategories.map((category, index) => {
            // Első sor: Zsírbontó Kavitáció (teljes szélesség)
            // Második sor: Sminktetoválás, Arckezelések
            // Harmadik sor: Szempilla & Szemöldök, Gyantázás
            const getGridClass = () => {
              if (category.id === 'zsirbonto-kavitacio') return 'md:col-span-2';
              if (category.id === 'sminktetovalas' || category.id === 'arckezelesek') return '';
              if (category.id === 'szempilla-szemoldok' || category.id === 'gyantazas') return '';
              return '';
            };
            
            return (
              <Card 
                key={category.id} 
                className={`p-6 ${getGridClass()}`}
              >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.name}
              </h3>
              
              {category.id === 'zsirbonto-kavitacio' ? (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
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
                  
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <h4 className="text-lg font-semibold mb-4">A készülék technológiái</h4>
                    <div className="space-y-4 text-sm text-muted-foreground">
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">Ultrahangos szonda</h5>
                        <p>Az ultrahangos karcsúsító készülékkel a test gyakorlatilag bármely problémás területére pontosan célozható, ahol extra súlyt cipel.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">Három szintű RF (rádiófrekvencia)</h5>
                        <p>A kavitációs karcsúsító készülék harmadik szintű RF-vel rendelkezik a szemhez, negyedik szintű RF-jel az archoz, hatodik szinthez RF a testhez. Ez a három rádiófrekvenciás szint fokozhatja a vérkeringést, felgyorsíthatja a zsírlebontást, eltávolíthatja a salakanyagokat.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">Negatív nyomás plusz RF</h5>
                        <p>A pozitív és negatív aktivációs energia felhasználása felszabadíthatja a bőrsejteket, elősegítheti a szövetek anyagcseréjét, visszafordíthatja az elöregedést és javíthatja a bőr rugalmasságát.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">EMS</h5>
                        <p>Bőrfeszesítés a narancsbőr és a zsír lebontása után. Például az arc, a mellek, a csípő stb. felemelése.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">Fagyasztás és hideg borogatás</h5>
                        <p>A karcsúsító készülék hűvössége megnyithatja a pórusokat, míg a görgő elősegítheti a vérkeringést, amely csökkentheti a duzzanatokat és a ráncosodást, helyreállíthatja a ragyogást és emelheti a bőrt.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">7 lámpa a terápiához</h5>
                        <p>A zsírégető gép lámpái megfelelő megoldást nyújtanak fényterápiához. Biztos lehet benne, hogy a készülék használatakor hatékony fénymennyiséget juttat a szervezetébe.</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                      <p className="text-xs text-muted-foreground italic">
                        A termék nem orvostechnikai eszköz!
                      </p>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold mb-3">Funkciók és elérhető hatások</h4>
                      <div className="grid md:grid-cols-2 gap-2 text-sm">
                        <div className="flex items-start gap-2">
                          <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                          <span>Karcsúsítás és zsíroldás</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                          <span>Bőrfeszesítés, öregedésgátlás</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                          <span>Vérkeringés és anyagcsere javítása</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                          <span>Hegek és ráncok simítása</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                          <span>Terhességi csíkok simítása</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                          <span>Fogyás, karcsúsítás</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
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
              )}
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
