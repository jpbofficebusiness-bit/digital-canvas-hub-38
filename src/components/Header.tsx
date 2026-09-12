import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X, Search, BookOpen, User, Clock, HelpCircle, Star, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import SearchDialog from "@/components/SearchDialog";
import bioHero from "@/assets/franklin-rafael-bio-hero.jpg.asset.json";
import swordRealistic from "@/assets/sword-realistic.png";

const mobileMenuLinks = [
  { label: "O Autor", href: "/sobre-franklin-rafael", isAnchor: false, icon: User },
  { label: "Todos os Seus Livros", href: "/obras", isAnchor: false, icon: BookOpen },
  { label: "Por Vir", href: "/por-vir", isAnchor: false, icon: Clock },
  { label: "(FAQ) Perguntas Frequentes", href: "/faq", isAnchor: false, icon: HelpCircle },
  { label: "Obra-Prima", href: "/obra-prima", isAnchor: false, icon: Star },
  { label: "Canal no YouTube — Franklin Rafael Oficial", href: "https://www.youtube.com/@franklinrafaeloficial", isExternal: true, icon: Youtube },
];

const desktopNavLinks = [
  { label: "Obras", href: "/obras", isAnchor: false },
  { label: "O Autor", href: "/sobre-franklin-rafael", isAnchor: false },
  { label: "FAQ", href: "/faq", isAnchor: false },
  { label: "Informações Acadêmicas", href: "/informacoes-academicas", isAnchor: false },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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
        <div className="grid grid-cols-3 items-center h-16 md:h-20">
          {/* Author portrait */}
          <div className="flex justify-start">
            <Link to="/" aria-label="Página inicial">
              <img
                src={bioHero.url}
                alt="Franklin Rafael"
                className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border-2 border-gold shadow-md"
              />
            </Link>
          </div>

          {/* Logo - centered */}
          <div className="flex justify-center">
            <Link to="/" className="font-heading font-semibold text-forest tracking-wide flex flex-col leading-tight text-center">
              <span className="text-sm md:text-base tracking-[0.3em]">FRANKLIN</span>
              <span className="text-2xl md:text-3xl">RAFAEL</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-end gap-8">
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
            <Button
              variant="ghost"
              size="icon"
              aria-label="Pesquisar"
              className="h-10 w-10"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="!h-6 !w-6" />
            </Button>
          </nav>

          {/* Mobile Menu Buttons */}
          <div className="flex lg:hidden items-center justify-end gap-2">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Pesquisar"
              className="h-11 w-11"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="!h-7 !w-7" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menu"
              className="h-11 w-11"
            >
              {isMenuOpen ? <X className="!h-8 !w-8" /> : <Menu className="!h-8 !w-8" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Navigation - rendered via portal so it escapes header's stacking context */}
      {isMenuOpen && typeof document !== "undefined" && createPortal(
        <div
          className="lg:hidden fixed inset-0 bg-background z-[100] overflow-hidden pt-20 animate-slide-in-right"
        >
          <div className="absolute inset-0 bg-background" aria-hidden="true" />
          <img
            src={swordRealistic}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[115%] w-auto -translate-x-1/2 -translate-y-1/2 rotate-[25deg] opacity-15 select-none"
          />
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Fechar menu"
            className="absolute top-4 right-4 z-10 p-2 rounded-md text-foreground hover:bg-accent/50"
          >
            <X className="h-6 w-6" />
          </button>
          <nav className="relative z-10 container mx-auto px-4 py-6">
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
      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </header>
  );
};

export default Header;
