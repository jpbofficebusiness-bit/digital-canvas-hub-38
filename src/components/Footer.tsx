import { Youtube, Instagram } from "lucide-react";

const footerLinks = [
  { label: "O Autor", href: "#autor" },
  { label: "Notícias", href: "#noticias" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
  { label: "Política de Privacidade", href: "#privacidade" },
];

const socialLinks = [
  {
    label: "Canal no YouTube — Franklin Rafael Oficial",
    href: "https://www.youtube.com/@franklinrafaeloficial",
    Icon: Youtube,
  },
  {
    label: "Instagram — Franklin Rafael",
    href: "https://www.instagram.com/franklinrafael.v.s?stkn=MWFzeXY1ZXJxbWlsZQ%3D%3D",
    Icon: Instagram,
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
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm text-gold/80 hover:text-gold transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="text-gold/80 hover:text-gold transition-colors duration-200"
            >
              <Icon className="h-6 w-6" />
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
