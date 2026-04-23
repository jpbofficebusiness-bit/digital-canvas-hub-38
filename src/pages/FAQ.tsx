import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="h-16 md:h-20" />

      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <header className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3">
              (FAQ) Perguntas Frequentes
            </h1>
            <p className="font-body text-muted-foreground">
              Respostas para as perguntas mais comuns
            </p>
          </header>

          <div className="border border-border bg-card rounded-sm p-8 text-center">
            <p className="font-body text-muted-foreground">
              Conteúdo em breve.
            </p>
          </div>
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default FAQ;
