const footerLinks = [
  { label: "O Autor", href: "#autor" },
  { label: "Notícias", href: "#noticias" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
  { label: "Política de Privacidade", href: "#privacidade" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="text-center mb-8">
          <a
            href="#"
            className="font-heading text-2xl font-semibold tracking-wide inline-block"
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
              className="font-body text-sm text-background/70 hover:text-background transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <p className="font-body text-sm text-center text-background/60">
            © {currentYear} Franklin Rafael. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
