import { Link, useParams, Navigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowLeft, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getBook } from "@/data/books";

import uiclapIcon from "@/assets/uiclap-icon.png";

const AmazonIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M15.93 17.09c-.07-.08-.21-.13-.4-.13-.2 0-.4.07-.58.2a6.47 6.47 0 0 1-3.65 1.08c-2.82 0-5.26-1.92-5.26-5.15 0-2.55 1.75-4.45 4.23-4.45 2.08 0 3.46 1.22 3.9 2.87.07.23.28.37.52.37h.02c.32 0 .55-.27.48-.58-.6-2.47-2.66-4.1-5.25-4.1-3.28 0-5.74 2.35-5.74 5.74 0 3.75 2.93 6.3 6.56 6.3 1.74 0 3.15-.53 4.23-1.38.22-.17.25-.42.13-.63l-.09-.14z" />
    <path d="M18.38 19.7c-2.3 1.7-5.65 2.6-8.54 2.6-4.04 0-7.68-1.5-10.43-3.98-.22-.2-.02-.47.23-.32 2.97 1.73 6.64 2.78 10.43 2.78 2.56 0 5.37-.5 7.96-1.54.38-.17.72.26.35.46z" />
  </svg>
);

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

          <article className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-10">
            {/* Coluna capa + botões prev/next ao lado */}
            <div className="flex flex-col items-center">
              <div className="flex items-start gap-2 w-full justify-center">
                {prev ? (
                  <Link
                    to={`/obras/${section.slug}/${prev.slug}`}
                    aria-label={`Anterior: ${prev.title}`}
                    title={`Anterior: ${prev.title}`}
                    className="flex-shrink-0 mt-12 w-9 h-9 rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:border-foreground flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Link>
                ) : (
                  <div className="w-9 flex-shrink-0" />
                )}

                <div className="w-[140px] md:w-[180px] aspect-[2/3] bg-muted overflow-hidden shadow-md">
                  <img
                    src={book.img}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {next ? (
                  <Link
                    to={`/obras/${section.slug}/${next.slug}`}
                    aria-label={`Próximo: ${next.title}`}
                    title={`Próximo: ${next.title}`}
                    className="flex-shrink-0 mt-12 w-9 h-9 rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:border-foreground flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                ) : (
                  <div className="w-9 flex-shrink-0" />
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
                {section.category}
              </span>
              <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-1 leading-tight">
                {book.title}
              </h1>
              {book.subtitle && (
                <p className="font-heading italic text-base md:text-lg text-muted-foreground mb-4">
                  {book.subtitle}
                </p>
              )}
              <h2 className="font-heading text-lg text-foreground mt-4 mb-2">
                Sinopse
              </h2>
              <p className="font-body text-foreground/80 leading-relaxed mb-8">
                {book.sinopse}
              </p>
              {book.link && (
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 self-start px-5 py-3 bg-red-700 text-white font-body text-sm tracking-wider uppercase hover:bg-red-800 transition-colors rounded-md"
                >
                  <img
                    src={uiclapIcon}
                    alt="UICLAP"
                    className="h-5 w-5 object-contain"
                  />
                  Saiba Mais na UICLAP
                </a>
              )}
              {book.amazonLink && (
                <a
                  href={book.amazonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 self-start px-5 py-3 bg-amber-500 text-white font-body text-sm tracking-wider uppercase hover:bg-amber-600 transition-colors rounded-md mt-3"
                >
                  <AmazonIcon className="h-5 w-5" />
                  Saiba Mais na Amazon
                </a>
              )}
            </div>
          </article>

          {/* Navegação prev/next textual no rodapé */}
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
      <Footer />
    </div>
  );
};

export default LivroDetalhe;
