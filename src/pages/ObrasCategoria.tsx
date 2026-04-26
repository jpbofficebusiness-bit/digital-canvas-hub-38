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

          <ul className="divide-y divide-border">
            {section.books.map((book) => {
              const inner = (
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <h2 className="font-heading text-xl md:text-2xl text-foreground leading-snug group-hover:text-gold transition-colors">
                      {book.title}
                    </h2>
                    {book.subtitle && (
                      <p className="font-body italic text-sm md:text-base text-muted-foreground mt-1">
                        {book.subtitle}
                      </p>
                    )}
                  </div>
                  {book.soon && (
                    <span className="font-body text-xs uppercase tracking-widest text-muted-foreground flex-shrink-0">
                      Em breve
                    </span>
                  )}
                </div>
              );

              return (
                <li key={book.slug}>
                  {book.soon ? (
                    <div className="block py-5 md:py-6 group">{inner}</div>
                  ) : (
                    <Link
                      to={`/obras/${section.slug}/${book.slug}`}
                      className="block py-5 md:py-6 group"
                    >
                      {inner}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ObrasCategoria;
