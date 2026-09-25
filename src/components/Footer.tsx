import { Youtube, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "O Autor", href: "/sobre-franklin-rafael" },
  { label: "Notícias", href: "/#noticias" },
  { label: "FAQ", href: "/faq" },
  { label: "Contato", href: "/#contato" },
];

const socialLinks = [
  {
    label: "Canal no YouTube — Franklin Rafael Oficial",
    href: "https://www.youtube.com/@franklinrafaeloficial",
    Icon: Youtube,
    className: "text-gold hover:text-gold/80",
  },
  {
    label: "Instagram — Franklin Rafael",
    href: "https://www.instagram.com/franklinrafael.v.s?stkn=MWFzeXY1ZXJxbWlsZQ%3D%3D",
    Icon: Instagram,
    className: "text-gold hover:text-gold/80",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-gold py-12">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="text-center mb-8">
          <a
            href="#"
            className="font-heading text-2xl font-semibold tracking-wide inline-block text-gold"
          >
            FRANKLIN RAFAEL
          </a>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6 mb-8">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="font-body text-sm text-gold/80 hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map(({ label, href, Icon, className }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className={`${className} transition-colors duration-200`}
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 pt-8">
          <p className="font-body text-sm text-center text-gold/70">
            © {currentYear} Franklin Rafael. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
