import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star, Sword } from "lucide-react";


const ObraPrima = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      {/* Sword background */}
      <Sword
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-1/4 h-[600px] w-[600px] md:h-[900px] md:w-[900px] text-gold/10 rotate-45"
      />
      <Header />
      <div className="h-16 md:h-20" />

      <main className="flex-1 py-12 md:py-20 relative z-10">
        <div className="container mx-auto px-4 max-w-3xl">
          <header className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/15 text-gold mb-4">
              <Star className="h-7 w-7" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3">
              OBRA-PRIMA
            </h1>
            <p className="font-body text-muted-foreground italic">
              Os Espadeiros
            </p>
          </header>

          <article className="font-body text-foreground leading-relaxed text-lg space-y-6 border-l-4 border-gold pl-6">
            <p>
              <strong>"Os Espadeiros"</strong> é uma obra de origem ancestral e
              fundacional de guerreiros notáveis e histórias épicas que vem sendo
              escrita há anos por Franklin Rafael, que decidiu demonstrar, através da
              Alta Fantasia, toda a sua teologia filosófica e a sua visão de mundo,
              bem como todos os seus talentos literários.
            </p>
            <p>
              Segundo ele, é nessa saga onde está a sua melhor performance, visto que
              ele pretende escrevê-la até a sua velhice, caso ainda esteja vivo até
              lá. É uma obra que, segundo as suas palavras, levará uma vida inteira.
            </p>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ObraPrima;
