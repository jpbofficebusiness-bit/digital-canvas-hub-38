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
              OBRAS
            </h1>
          </header>

          <div className="space-y-0">
            {sections.map((section) => (
              <Link
                key={section.slug}
                to={`/obras/${section.slug}`}
                className="flex items-center justify-between py-5 border-b border-border last:border-b-0 group transition-colors hover:text-gold"
              >
                <h2 className="font-heading text-xl md:text-2xl text-foreground group-hover:text-gold transition-colors">
                  {section.category}
                </h2>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-gold transition-colors flex-shrink-0" />
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
