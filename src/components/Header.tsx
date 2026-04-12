import { useState } from "react";
import { MoreVertical, X, Search, BookOpen, User, Clock, HelpCircle, Star, Youtube, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const mobileMenuLinks = [
  { label: "O Autor", href: "/sobre-franklin-rafael", isAnchor: false, icon: User },
  { label: "Todos os Seus Livros", href: "#trabalhos", isAnchor: true, icon: BookOpen },
  { label: "Por Vir", href: "#por-vir", isAnchor: true, icon: Clock },
  { label: "Perguntas Frequentes (FAQ)", href: "#faq", isAnchor: true, icon: HelpCircle },
  { label: "Obra-Prima", href: "#obra-prima", isAnchor: true, icon: Star },
  { label: "Franklin Rafael Oficial", href: "https://www.youtube.com/@franklinrafaeloficial", isExternal: true, icon: Youtube },
  { label: "The Franklin Village", href: "https://www.youtube.com/@espadicaoficial", isExternal: true, icon: Home },
];

const desktopNavLinks = [
  { label: "OBRAS", href: "#trabalhos", isAnchor: true },
  { label: "O AUTOR", href: "/sobre-franklin-rafael", isAnchor: false },
  { label: "FAQ", href: "#faq", isAnchor: true },
  { label: "INFORMAÇÕES ACADÊMICAS", href: "/informacoes-academicas", isAnchor: false },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
            {desktopNavLinks.map((link) => (
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
            <Button variant="ghost" size="icon" aria-label="Pesquisar">
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <MoreVertical className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {mobileMenuLinks.map((link) => {
                const Icon = link.icon;
                if (link.isExternal) {
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 font-body text-sm tracking-wider text-muted-foreground hover:text-primary hover:bg-accent/50 transition-colors duration-200 py-3 px-3 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                    </a>
                  );
                }
                if (link.isAnchor) {
                  return (
                    <a
                      key={link.label}
                      href={location.pathname === "/" ? link.href : "/" + link.href}
                      className="flex items-center gap-3 font-body text-sm tracking-wider text-muted-foreground hover:text-primary hover:bg-accent/50 transition-colors duration-200 py-3 px-3 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                    </a>
                  );
                }
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="flex items-center gap-3 font-body text-sm tracking-wider text-muted-foreground hover:text-primary hover:bg-accent/50 transition-colors duration-200 py-3 px-3 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
