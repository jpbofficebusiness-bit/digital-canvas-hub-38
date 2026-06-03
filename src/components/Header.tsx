import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X, Search, BookOpen, User, Clock, HelpCircle, Star, Youtube, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const mobileMenuLinks = [
  { label: "O Autor", href: "/sobre-franklin-rafael", isAnchor: false, icon: User },
  { label: "Todos os Seus Livros", href: "/obras", isAnchor: false, icon: BookOpen },
  { label: "Por Vir", href: "/por-vir", isAnchor: false, icon: Clock },
  { label: "(FAQ) Perguntas Frequentes", href: "/faq", isAnchor: false, icon: HelpCircle },
  { label: "Obra-Prima", href: "/obra-prima", isAnchor: false, icon: Star },
  { label: "Canal no YouTube — Franklin Rafael Oficial", href: "https://www.youtube.com/@franklinrafaeloficial", isExternal: true, icon: Youtube },
  { label: "The Franklin Village", href: "https://www.youtube.com/@espadicaoficial", isExternal: true, icon: Home },
];

const desktopNavLinks = [
  { label: "Obras", href: "/obras", isAnchor: false },
  { label: "O Autor", href: "/sobre-franklin-rafael", isAnchor: false },
  { label: "FAQ", href: "/faq", isAnchor: false },
  { label: "Informações Acadêmicas", href: "/informacoes-academicas", isAnchor: false },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Lock body scroll when menu open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

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
              aria-label="Abrir menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Navigation - rendered via portal so it escapes header's stacking context */}
      {isMenuOpen && typeof document !== "undefined" && createPortal(
        <div className="lg:hidden fixed inset-0 bg-background z-[100] overflow-y-auto pt-20">
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Fechar menu"
            className="absolute top-4 right-4 p-2 rounded-md text-foreground hover:bg-accent/50"
          >
            <X className="h-6 w-6" />
          </button>
          <nav className="container mx-auto px-4 py-6">
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
                      className="flex items-center gap-3 font-body text-lg md:text-xl tracking-wide text-foreground hover:text-primary hover:bg-accent/50 transition-colors duration-200 py-5 px-3 rounded-md border-b border-border"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className="h-5 w-5" />
                      {link.label}
                    </a>
                  );
                }
                if (link.isAnchor) {
                  return (
                    <a
                      key={link.label}
                      href={location.pathname === "/" ? link.href : "/" + link.href}
                      className="flex items-center gap-3 font-body text-lg md:text-xl tracking-wide text-foreground hover:text-primary hover:bg-accent/50 transition-colors duration-200 py-5 px-3 rounded-md border-b border-border"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className="h-5 w-5" />
                      {link.label}
                    </a>
                  );
                }
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="flex items-center gap-3 font-body text-lg md:text-xl tracking-wide text-foreground hover:text-primary hover:bg-accent/50 transition-colors duration-200 py-5 px-3 rounded-md border-b border-border"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>,
        document.body
      )}
    </header>
  );
};

export default Header;
