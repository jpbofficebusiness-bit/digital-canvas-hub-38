import Header from "@/components/Header";
import Footer from "@/components/Footer";


const porVirItems = [
  { title: "Hereges e Heresias", series: "Série: Sermões Franklin" },
  { title: "Piratas", series: "Série: Sermões Franklin" },
  { title: "A Igreja", series: "Série: Sermões Franklin" },
];

const PorVir = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="h-16 md:h-20" />

      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <header className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3">
              POR VIR
            </h1>
            <p className="font-body text-muted-foreground">
              Obras em desenvolvimento por Franklin Rafael
            </p>
          </header>

          <div className="space-y-5">
            {porVirItems.map((item, idx) => (
              <article
                key={idx}
                className="border border-border bg-card rounded-sm p-6 border-l-4 border-l-gold"
              >
                <div className="flex items-center gap-2 text-gold mb-3">
                  <span className="text-base leading-none" aria-hidden="true">✍️</span>
                  <span className="font-body text-xs uppercase tracking-widest">
                  Escrevendo...
                  </span>
                </div>
                <h2 className="font-heading text-xl md:text-2xl text-foreground mb-1">
                  {item.title}
                </h2>
                <p className="font-body text-sm text-muted-foreground">
                  {item.series}
                </p>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default PorVir;
