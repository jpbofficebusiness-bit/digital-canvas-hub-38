import Header from "@/components/Header";
import Footer from "@/components/Footer";


const porVirItems: { title: string; titleLine2?: string; series: string }[] = [
  { title: "Os 28 Burros", titleLine2: "E o Caos da Burrice", series: "" },
  { title: "A Lenda de Árzur", series: "" },
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

          <div className="space-y-10">
            {porVirItems.map((item, idx) => (
              <article key={idx}>
                <div className="flex items-center gap-2 text-gold mb-2">
                  <span className="text-base leading-none" aria-hidden="true">✍️</span>
                  <span className="font-body text-xs uppercase tracking-widest">
                    Escrevendo...
                  </span>
                </div>
                <h2 className="font-heading text-xl md:text-2xl text-foreground mb-1">
                  {item.title}
                  {item.titleLine2 && (
                    <>
                      <br />
                      {item.titleLine2}
                    </>
                  )}
                </h2>
                <p className="font-body text-sm text-muted-foreground">
                  {item.series}
                </p>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PorVir;
