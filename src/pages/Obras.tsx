import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { sections } from "@/data/books";


const Obras = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f7]">
      <Header />
      <main className="flex-1 pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <header className="mb-12 md:mb-16 text-center">
            <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-3">
              OBRAS
            </h1>
          </header>

          <div className="space-y-0">
            {sections.map((section) => (
              <Link
                key={section.slug}
                to={`/obras/${section.slug}`}
                className="block py-5 border-b border-border last:border-b-0 group transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-heading text-xl md:text-2xl text-foreground group-hover:text-gold transition-colors">
                    {section.category}
                  </h2>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-gold transition-colors flex-shrink-0" />
                </div>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  {section.description}
                </p>
                <p className="font-body text-xs text-gold mt-2 uppercase tracking-widest">
                  {section.books.length}{" "}
                  {section.books.length === 1 ? "livro" : "livros"}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Obras;
