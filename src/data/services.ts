export interface Service {
  name: string;
  price: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "zsirbonto-kavitacio",
    name: "Zsírbontó Kavitációs RF & Lézeres Fogyasztás",
    services: [
      { name: "Első alkalom 1 területre", price: "15.000 Ft" },
      { name: "5 alkalmas bérlet 1 területre", price: "60.000 Ft" },
      { name: "Első alkalom 2 területre", price: "25.000 Ft" },
      { name: "5 alkalmas bérlet 2 területre", price: "100.000 Ft" },
      { name: "Arc és tokalifting", price: "15.000 Ft" },
    ],
  },
  {
    id: "sminktetovalas",
    name: "Sminktetoválás",
    services: [
      { name: "Szemöldök", price: "35.000 Ft" },
      { name: "Száj", price: "35.000 Ft" },
      { name: "Szemhéj", price: "35.000 Ft" },
      { name: "Korrekció", price: "8.000 Ft" },
    ],
  },
  {
    id: "arckezelesek",
    name: "Arckezelések",
    services: [
      { name: "Arctisztítás", price: "12.500 Ft" },
      { name: "Hydro arcfiatalítás", price: "13.500 Ft" },
      { name: "Hydro bőrhalványítás", price: "13.500 Ft" },
      { name: "Hydro szeborreás bőr", price: "13.500 Ft" },
      { name: "Tűs mezoterápia", price: "22.000 Ft" },
      { name: "Viózás & maszk", price: "5.000 Ft" },
      { name: "Ledes kezelés", price: "13.500 Ft" },
    ],
  },
  {
    id: "szempilla-szemoldok",
    name: "Szempilla & Szemöldök",
    services: [
      { name: "Szemöldök festés", price: "2.200 Ft" },
      { name: "Szempilla festés", price: "2.500 Ft" },
      { name: "Pilla lifting hennával", price: "10.000 Ft" },
    ],
  },
  {
    id: "gyantazas",
    name: "Gyantázás",
    services: [
      { name: "Szemöldök", price: "2.200 Ft" },
      { name: "Bajusz", price: "1.500 Ft" },
      { name: "Pajesz, Áll", price: "1.500 Ft" },
      { name: "Hónalj", price: "2.800 Ft" },
      { name: "Bikini", price: "2.800 Ft" },
      { name: "Kar könyékig", price: "3.200 Ft" },
      { name: "Kar végig", price: "3.800 Ft" },
      { name: "Láb térdig", price: "3.800 Ft" },
      { name: "Láb végig", price: "5.800 Ft" },
    ],
  },
];
