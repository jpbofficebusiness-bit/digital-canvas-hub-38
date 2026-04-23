import { Link, useParams, Navigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { getBook } from "@/data/books";

const LivroDetalhe = () => {
  const { categoria, livro } = useParams<{
    categoria: string;
    livro: string;
  }>();

  const data = categoria && livro ? getBook(categoria, livro) : null;
  if (!data) return <Navigate to="/obras" replace />;

  const { section, book, prev, next } = data;

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f7]">
      <Header />
      <main className="flex-1 pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to={`/obras/${section.slug}`}
            className="inline-flex items-center gap-1 font-body text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para {section.category}
          </Link>

          <article className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-12">
            <div className="aspect-[2/3] bg-muted overflow-hidden shadow-md">
              <img
                src={book.img}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
                {section.category}
              </span>
              <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-4 leading-tight">
                {book.title}
              </h1>
              <h2 className="font-heading text-lg text-foreground mb-2">
                Sinopse
              </h2>
              <p className="font-body text-foreground/80 leading-relaxed mb-8">
                {book.sinopse}
              </p>

              <p className="font-body text-sm text-muted-foreground italic mb-8">
                Mais informações sobre esta obra serão adicionadas em breve.
              </p>

              {book.link && (
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center self-start px-6 py-3 bg-foreground text-background font-body text-sm tracking-wider uppercase hover:bg-foreground/90 transition-colors rounded-sm"
                >
                  Saiba mais
                </a>
              )}
            </div>
          </article>

          {/* Navegação prev/next */}
          <nav className="mt-16 pt-8 border-t border-border grid grid-cols-2 gap-4">
            {prev ? (
              <Link
                to={`/obras/${section.slug}/${prev.slug}`}
                className="flex items-center gap-3 group"
              >
                <ChevronLeft className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
                <div className="min-w-0">
                  <span className="font-body text-xs uppercase tracking-widest text-muted-foreground block">
                    Anterior
                  </span>
                  <span className="font-heading text-sm md:text-base text-foreground truncate block">
                    {prev.title}
                  </span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                to={`/obras/${section.slug}/${next.slug}`}
                className="flex items-center gap-3 group justify-end text-right"
              >
                <div className="min-w-0">
                  <span className="font-body text-xs uppercase tracking-widest text-muted-foreground block">
                    Próximo
                  </span>
                  <span className="font-heading text-sm md:text-base text-foreground truncate block">
                    {next.title}
                  </span>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </div>
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default LivroDetalhe;
