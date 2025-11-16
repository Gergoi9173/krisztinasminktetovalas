import serumImage from "@/assets/product-serum.jpg";
import creamImage from "@/assets/product-cream.jpg";
import lipstickImage from "@/assets/product-lipstick.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  longDescription: string;
  ingredients: string[];
  usage: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Hidratáló Arcszérum",
    price: 12990,
    image: serumImage,
    description: "Intenzív hidratáló szérum hialuronsavval",
    longDescription:
      "Luxus arcszérum hialuronsavval és növényi kivonatokkal. Mélyen hidratál, simítja a ráncokat és feszesíti a bőrt. Könnyű, gyorsan felszívódó formula minden bőrtípusra.",
    ingredients: [
      "Hialuronsav",
      "Niacinamid",
      "Növényi kivonat komplex",
      "E-vitamin",
    ],
    usage: "Reggel és este használja tiszta, száraz bőrön. 2-3 csepp elegendő az egész arcra.",
  },
  {
    id: "2",
    name: "Tápláló Arckrém",
    price: 15990,
    image: creamImage,
    description: "Gazdag krém természetes összetevőkkel",
    longDescription:
      "Luxus arckrém sheavajakkal és természetes olajokkal. Intenzíven táplálja és regenerálja a bőrt, védi a környezeti ártalmaktól. Krémes, bársonyos textúra.",
    ingredients: [
      "Sheavaj",
      "Jojobaolaj",
      "Ceramidok",
      "Peptid komplex",
    ],
    usage: "Reggel és este használja tiszta bőrön. Finoman masszírozza be az arcra és nyakra.",
  },
  {
    id: "3",
    name: "Matt Rúzs",
    price: 8990,
    image: lipstickImage,
    description: "Hosszan tartó matt finish rózsaszín árnyalat",
    longDescription:
      "Prémium minőségű rúzs selymes matt finish-sel. A formula gazdag pigmentekkel és tápláló összetevőkkel, így egész nap kényelmesen viselhető. Nem száraz ki és nem töredezik.",
    ingredients: [
      "Színezőanyagok",
      "E-vitamin",
      "Jojobaolaj",
      "Sheavaj",
    ],
    usage: "Vigye fel közvetlenül az ajkakra. Egy réteg elegendő az intenzív színért.",
  },
  {
    id: "4",
    name: "Regeneráló Éjszakai Krém",
    price: 18990,
    image: creamImage,
    description: "Intenzív regeneráló krém éjszakai használatra",
    longDescription:
      "Gazdag éjszakai arckrém retinollal és peptidekkel. Alvás közben intenzíven regenerálja a bőrt, simítja a ráncokat és javítja a bőr textúráját.",
    ingredients: [
      "Retinol",
      "Peptidek",
      "Niacinamid",
      "Hialuronsav",
    ],
    usage: "Este használja tiszta bőrön, lefekvés előtt.",
  },
  {
    id: "5",
    name: "Vitamin C Szérum",
    price: 14990,
    image: serumImage,
    description: "Bőrfényesítő szérum C-vitaminnal",
    longDescription:
      "Erőteljes antioxidáns szérum stabilizált C-vitaminnal. Világosítja a bőrt, csökkenti a pigmentfoltokat és véd a szabadgyökök ellen.",
    ingredients: [
      "C-vitamin",
      "Ferulasav",
      "E-vitamin",
      "Hialuronsav",
    ],
    usage: "Reggel használja tiszta bőrön, napvédő használata előtt.",
  },
  {
    id: "6",
    name: "Nude Rúzs",
    price: 8990,
    image: lipstickImage,
    description: "Természetes árnyalat mindennapokra",
    longDescription:
      "Tökéletes nude árnyalat krémes finish-sel. Hidratáló formula, amely kényelmesen viselhető egész nap.",
    ingredients: [
      "Színezőanyagok",
      "Hialuronsav",
      "E-vitamin",
      "Arganolaj",
    ],
    usage: "Vigye fel közvetlenül az ajkakra egyenletes lefedésért.",
  },
];
