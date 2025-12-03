import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logo from "@/assets/logo-krisztina.jpg";
import BookingDialog from "@/components/BookingDialog";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-md supports-[backdrop-filter]:bg-card/80 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-1">
            <img 
              src={logo} 
              alt="BeautyByKristina" 
              className="h-14 md:h-18 w-auto object-contain"
            />
            <span className="font-liber text-2xl md:text-3xl tracking-widest text-foreground uppercase">
              BEAUTYBYKRISTINA
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#kezelesek" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('kezelesek')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Kezelések
            </a>
            <a 
              href="#rolam" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('rolam')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Rólam
            </a>
            <a 
              href="#kapcsolat" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('kapcsolat')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Kapcsolat
            </a>
            <BookingDialog>
              <Button>Időpontfoglalás</Button>
            </BookingDialog>
          </nav>

          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a 
                href="#kezelesek" 
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  document.getElementById('kezelesek')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Kezelések
              </a>
              <a 
                href="#rolam" 
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  document.getElementById('rolam')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Rólam
              </a>
              <a 
                href="#kapcsolat" 
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  document.getElementById('kapcsolat')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Kapcsolat
              </a>
              <BookingDialog>
                <Button className="w-full">
                  Időpontfoglalás
                </Button>
              </BookingDialog>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
