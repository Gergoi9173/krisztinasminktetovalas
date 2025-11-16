import { Search, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-semibold tracking-tight">
            Bella
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Kezelések
            </Link>
            <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Rólunk
            </Link>
            <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
              Kapcsolat
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="default" 
              size="sm"
              className="hidden md:inline-flex bg-primary hover:bg-primary/90"
            >
              Időpontfoglalás
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
              <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Kezelések
              </Link>
              <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Rólunk
              </Link>
              <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                Kapcsolat
              </Link>
              <Button 
                variant="default" 
                size="sm"
                className="bg-primary hover:bg-primary/90 w-full"
              >
                Időpontfoglalás
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
