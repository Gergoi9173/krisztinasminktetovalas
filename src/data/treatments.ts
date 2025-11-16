import serumImage from "@/assets/product-serum.jpg";
import creamImage from "@/assets/product-cream.jpg";
import lipstickImage from "@/assets/product-lipstick.jpg";

export interface Treatment {
  id: string;
  name: string;
  duration: string;
  image: string;
  description: string;
  longDescription: string;
  benefits: string[];
  process: string;
  aftercare: string;
}

export const treatments: Treatment[] = [
  {
    id: "1",
    name: "Hidratáló Arckezelés",
    duration: "60 perc",
    image: serumImage,
    description: "Intenzív hidratálás hialuronsavval és természetes hatóanyagokkal",
    longDescription:
      "Luxus arckezelés, amely mélyen hidratálja a bőrt hialuronsav és növényi kivonatok segítségével. A kezelés során a bőr visszanyeri feszességét és ragyogását. Ideális száraz és dehidratált bőrre.",
    benefits: [
      "Mélyen hidratálja a bőrt",
      "Simítja a ráncokat",
      "Feszesíti és rugalmassá teszi a bőrt",
      "Hosszan tartó ragyogás",
    ],
    process: "A kezelés bőrtisztítással kezdődik, majd enzimes hámlasztással folytatódik. Ezt követi a hialuronsavas szérum felhelyezése ultrahangos technológiával, végül hidratáló maszk és arckrém zárja.",
    aftercare: "A kezelés után kerülje a napozást 24 órán át. Használjon magas faktorszámú napvédőt és hidratáló krémet.",
  },
  {
    id: "2",
    name: "Anti-aging Kezelés",
    duration: "90 perc",
    image: creamImage,
    description: "Komplex ránccsökkentő és bőrmegújító kezelés",
    longDescription:
      "Hatékony anti-aging kezelés retinol és peptidek alkalmazásával. A kezelés stimulálja a kollagéntermelést, csökkenti a ráncokat és javítja a bőr textúráját. Érett bőrre ajánljuk.",
    benefits: [
      "Csökkenti a ráncok mélységét",
      "Javítja a bőr rugalmasságát",
      "Stimulálja a kollagéntermelést",
      "Egyenletesebb bőrszín",
    ],
    process: "Alapos tisztítás után következik a professzionális hámlasztás, majd a ránccsökkentő szérum bevezetése mikrotűs mezoterápiával vagy ultrahangos kezeléssel. Lift hatású maszk és krémek zárják a kezelést.",
    aftercare: "A kezelés után 48 órán át kerülje az intenzív napozást és a szaunát. Használjon regeneráló krémeket és napvédőt.",
  },
  {
    id: "3",
    name: "Relaxáló Arcmasszázs",
    duration: "45 perc",
    image: lipstickImage,
    description: "Stresszoldó és lympha aktiváló arcmasszázs",
    longDescription:
      "Speciális arcmasszázs technika, amely elősegíti a lymphakeringést, csökkenti a duzzanatokat és relaxálja az arcizmokat. Természetes olajokkal végzett kezelés, amely nemcsak a bőrnek, hanem a léleknek is jót tesz.",
    benefits: [
      "Csökkenti a stresszt",
      "Javítja a keringést",
      "Csökkenti a duzzanatokat",
      "Feszesebb arcvonalak",
    ],
    process: "A masszázs könnyű tisztítással kezdődik, majd természetes olajokkal végzett speciális masszázstechnikákkal folytatódik, beleértve a nyak és dekoltázs területét is.",
    aftercare: "Igyál sok vizet a kezelés után a méregtelenítés elősegítésére. A masszázs hatása 24-48 óra alatt teljesedik ki.",
  },
  {
    id: "4",
    name: "Mélytisztító Kezelés",
    duration: "75 perc",
    image: creamImage,
    description: "Posztisztító és mattító kezelés problémás bőrre",
    longDescription:
      "Alapos mélytisztító kezelés, amely eltávolítja a felesleges faggyút, mitesszereket és megtisztítja a pórusokat. Zsíros és problémás bőrre kifejlesztett kezelés.",
    benefits: [
      "Tiszta, friss bőr",
      "Mattított felszín",
      "Tiszta pórusok",
      "Csökkent faggyútermelés",
    ],
    process: "Gőzölés után következik a professzionális posztisztítás, fertőtlenítés, majd mattító maszk és szabályozó krém alkalmazása.",
    aftercare: "Kerülje a sminkelést 24 órán át. Használjon könnyű, olajtalan hidratálót és napvédőt.",
  },
  {
    id: "5",
    name: "Vitamin C Világosító Kezelés",
    duration: "60 perc",
    image: serumImage,
    description: "Bőrfényesítő kezelés C-vitaminnal és antioxidánsokkal",
    longDescription:
      "Erőteljes világosító kezelés stabilizált C-vitaminnal, amely csökkenti a pigmentfoltokat, kiegyenlíti a bőrtónust és védi a bőrt a káros környezeti hatásoktól.",
    benefits: [
      "Világosabb, ragyogó bőr",
      "Csökkent pigmentáció",
      "Antioxidáns védelem",
      "Egyenletesebb bőrszín",
    ],
    process: "Enyhe hámlasztás után C-vitaminos szérum és antioxidáns komplex kerül a bőrre, majd világosító maszk és védő krém zárja a kezelést.",
    aftercare: "Napvédő használata kötelező! Kerülje a napozást és szolárium használatát.",
  },
  {
    id: "6",
    name: "Express Lifting Kezelés",
    duration: "30 perc",
    image: lipstickImage,
    description: "Gyors feszesítő kezelés azonnali hatással",
    longDescription:
      "Rövid, intenzív kezelés, amely azonnali lift hatást biztosít. Tökéletes választás különleges alkalmak előtt vagy ha nincs sok időd.",
    benefits: [
      "Azonnali feszesítő hatás",
      "Kisimított arcvonalak",
      "Ragyogó bőr",
      "Gyors eredmény",
    ],
    process: "Gyors tisztítás, lift szérum bevezetése masszázzsal, majd feszesítő maszk és aktiváló krém.",
    aftercare: "A hatás 3-5 napig tart. A legjobb eredmény érdekében kerülje az alkohol fogyasztást 24 órán át.",
  },
];
