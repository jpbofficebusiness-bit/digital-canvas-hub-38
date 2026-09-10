import { Link, useParams, Navigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSection } from "@/data/books";

const CategoryTitle = ({ category }: { category: string }) => {
  if (category === "Série: Sermões Franklin") {
    return (
      <>
        <span className="font-bold">Série</span>
        <span className="mx-1">:</span>
        <em className="font-bold">Sermões Franklin</em>
      </>
    );
  }

  if (category.includes(":")) {
    return (
      <>
        {category.split(":")[0]}:{" "}
        <em>{category.split(":").slice(1).join(":").trim()}</em>
      </>
    );
  }

  return <>{category}</>;
};

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
            <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-3 normal-case">
              <CategoryTitle category={section.category} />
            </h1>
            <p className="font-body text-muted-foreground">
              {section.description}
            </p>
          </header>

          <ul className="space-y-16 md:space-y-20">
            {section.books.map((book) => {
              const inner = (
                <div className="flex flex-col items-center text-center">
                  {book.img ? (
                    <div className="w-40 md:w-48 aspect-[2/3] overflow-hidden rounded-sm shadow-md group-hover:shadow-xl transition-shadow">
                      <img
                        src={book.img}
                        alt={book.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-40 md:w-48 aspect-[2/3] bg-muted rounded-sm flex items-center justify-center">
                      <span className="font-body text-xs text-muted-foreground uppercase tracking-widest">
                        Em breve
                      </span>
                    </div>
                  )}
                  <h2 className="font-heading text-lg md:text-xl text-foreground mt-4 group-hover:text-gold transition-colors">
                    {book.title}
                  </h2>
                  {book.subtitle && (
                    <p className="font-body italic text-sm text-muted-foreground mt-1">
                      {book.subtitle}
                    </p>
                  )}
                </div>
              );

              return (
                <li key={book.slug}>
                  {book.soon ? (
                    <div className="block group">{inner}</div>
                  ) : (
                    <Link
                      to={`/obras/${section.slug}/${book.slug}`}
                      className="block group"
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
      <Footer />
    </div>
  );
};

export default ObrasCategoria;
