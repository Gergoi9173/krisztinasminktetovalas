import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="kapcsolat" className="border-t border-border mt-20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Krisztina Sminktetoválás</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Professzionális sminktetoválás és szépségápolás szakértővel.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📍 Budapest, Rákos út 185, 1152</p>
              <p>📞 <a href="tel:+36706191961" className="hover:text-foreground transition-colors">+36 (70) 619 1961</a></p>
              <p>
                <a 
                  href="https://maps.google.com/maps?hl=en&gl=hu&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x4741dbc4bdce1fe9:0x32b2f14e4d8ea55b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors underline"
                >
                  Térkép megtekintése
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Kezelések</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Összes kezelés
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Arckezelések
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Időpontfoglalás
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Kapcsolat</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                📞 <a href="tel:+36706191961" className="hover:text-foreground transition-colors">+36 (70) 619 1961</a>
              </li>
              <li className="text-sm text-muted-foreground">
                📍 Budapest, Rákos út 185, 1152
              </li>
              <li className="text-sm">
                <a 
                  href="https://maps.google.com/maps?hl=en&gl=hu&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x4741dbc4bdce1fe9:0x32b2f14e4d8ea55b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors underline"
                >
                  Térkép
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-center text-muted-foreground">
            © 2024 Krisztina Sminktetoválás. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
