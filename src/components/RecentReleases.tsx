import { Button } from "@/components/ui/button";
import { Play, Info, ShoppingCart } from "lucide-react";

import bookCover1 from "@/assets/book-cover-1.jpg";
import bookCover2 from "@/assets/book-cover-2.jpg";

const releases = [
  {
    id: 1,
    title: "O Último Suspiro",
    date: "Outubro 2024",
    description:
      "Um thriller psicológico que mergulha nas profundezas da mente humana. Quando uma série de eventos inexplicáveis começa a acontecer em uma pequena cidade, uma jovem investigadora precisa enfrentar seus próprios demônios para desvendar a verdade.",
    image: bookCover1,
  },
  {
    id: 2,
    title: "Crônicas do Silêncio - Volume I",
    date: "Julho 2024",
    description:
      "O primeiro volume de uma saga épica de fantasia que transporta o leitor para um mundo onde as palavras têm poder e o silêncio pode ser a arma mais poderosa. Uma jornada inesquecível aguarda.",
    image: bookCover2,
  },
];

const RecentReleases = () => {
  return (
    <section id="trabalhos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
          LANÇAMENTOS RECENTES
        </h2>

        <div className="space-y-12 md:space-y-16">
          {releases.map((release, index) => (
            <article
              key={release.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                <div className="aspect-[3/4] bg-muted rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={release.image}
                    alt={release.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                <div>
                  <p className="font-body text-sm text-primary tracking-wider mb-2">
                    {release.date}
                  </p>
                  <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    {release.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {release.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button variant="default" className="gap-2">
                    <Play className="h-4 w-4" />
                    ASSISTIR TRAILER
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Info className="h-4 w-4" />
                    MAIS INFORMAÇÕES
                  </Button>
                  <Button variant="secondary" className="gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    COMPRAR AGORA
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentReleases;
