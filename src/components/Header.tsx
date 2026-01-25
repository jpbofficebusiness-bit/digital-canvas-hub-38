import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "OBRAS", href: "#trabalhos", isAnchor: true },
  { label: "O AUTOR", href: "/sobre-franklin-rafael", isAnchor: false },
  { label: "FAQ", href: "#faq", isAnchor: true },
  { label: "INFORMAÇÕES ACADÊMICAS", href: "/informacoes-academicas", isAnchor: false },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (link: typeof navLinks[0]) => {
    setIsMenuOpen(false);
    
    // If it's an anchor link and we're not on home page, navigate to home first
    if (link.isAnchor && location.pathname !== "/") {
      window.location.href = "/" + link.href;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="font-heading font-semibold text-forest tracking-wide flex flex-col leading-tight">
            <span className="text-sm md:text-base tracking-[0.3em]">FRANKLIN</span>
            <span className="text-2xl md:text-3xl">RAFAEL</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isAnchor ? (
                <a
                  key={link.label}
                  href={location.pathname === "/" ? link.href : "/" + link.href}
                  className="font-body text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-body text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile Menu Buttons */}
          <div className="flex items-center gap-1 lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Pesquisar"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.isAnchor ? (
                  <a
                    key={link.label}
                    href={location.pathname === "/" ? link.href : "/" + link.href}
                    className="font-body text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="font-body text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
