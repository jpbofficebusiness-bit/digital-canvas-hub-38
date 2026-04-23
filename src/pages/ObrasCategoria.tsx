import { Link, useParams, Navigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { getSection } from "@/data/books";

const ObrasCategoria = () => {
  const { categoria } = useParams<{ categoria: string }>();
  const section = categoria ? getSection(categoria) : null;

  if (!section) return <Navigate to="/obras" replace />;

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f7]">
      <Header />
      <main className="flex-1 pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/obras"
            className="inline-flex items-center gap-1 font-body text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Voltar para Obras
          </Link>

          <header className="mb-10 md:mb-12 border-b border-border pb-6">
            <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-3">
              {section.category}
            </h1>
            <p className="font-body text-muted-foreground">
              {section.description}
            </p>
          </header>

          <div className="space-y-6">
            {section.books.map((book) => {
              const content = (
                <div className="flex gap-5 md:gap-6 items-start border border-border bg-card rounded-sm p-4 md:p-5 hover:bg-accent/30 transition-colors group">
                  <div className="w-24 md:w-32 aspect-[2/3] flex-shrink-0 bg-muted overflow-hidden shadow-sm">
                    {book.soon ? (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="font-heading text-xs text-muted-foreground">
                          Em breve
                        </span>
                      </div>
                    ) : (
                      <img
                        src={book.img}
                        alt={book.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1 min-w-0 py-1">
                    <h2 className="font-heading text-lg md:text-xl text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                      {book.title}
                    </h2>
                    <p className="font-body text-sm text-muted-foreground line-clamp-3">
                      {book.sinopse}
                    </p>
                    {!book.soon && (
                      <span className="inline-block mt-3 font-body text-xs uppercase tracking-widest text-gold">
                        Ver detalhes →
                      </span>
                    )}
                    {book.soon && (
                      <span className="inline-block mt-3 font-body text-xs uppercase tracking-widest text-muted-foreground">
                        Em breve
                      </span>
                    )}
                  </div>
                </div>
              );

              return book.soon ? (
                <div key={book.slug}>{content}</div>
              ) : (
                <Link
                  key={book.slug}
                  to={`/obras/${section.slug}/${book.slug}`}
                  className="block"
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ObrasCategoria;
