import { Search, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logo from "@/assets/logo-krisztina.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Krisztina Sminktetoválás" 
              className="h-12 md:h-16 w-auto object-contain"
            />
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
              href="#rolunk" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('rolunk')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Rólunk
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
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
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
                href="#rolunk" 
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  document.getElementById('rolunk')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Rólunk
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
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
