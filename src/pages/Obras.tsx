import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { sections } from "@/data/books";

const Obras = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f7]">
      <Header />
      <main className="flex-1 pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <header className="mb-12 md:mb-16 text-center">
            <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-3">
              Obras
            </h1>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Coleção completa dos livros de Franklin Rafael, organizada por
              categoria.
            </p>
          </header>

          <div className="space-y-4">
            {sections.map((section) => (
              <Link
                key={section.slug}
                to={`/obras/${section.slug}`}
                className="flex items-center gap-4 border border-border bg-card hover:bg-accent/40 transition-colors rounded-sm p-5 md:p-6 group"
              >
                <div className="flex-1 min-w-0">
                  <h2 className="font-heading text-xl md:text-2xl text-foreground">
                    {section.category}
                  </h2>
                  <p className="font-body text-sm text-muted-foreground mt-1">
                    {section.description}
                  </p>
                  <p className="font-body text-xs text-gold mt-2 uppercase tracking-widest">
                    {section.books.length}{" "}
                    {section.books.length === 1 ? "livro" : "livros"}
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Obras;
