import { Calendar, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingBooks = [
  {
    id: 1,
    title: "Entre Sombras e Luzes",
    expectedDate: "Março 2025",
    description: "O aguardado segundo volume da série Crônicas do Silêncio.",
  },
  {
    id: 2,
    title: "Projeto Secreto",
    expectedDate: "2025",
    description: "Uma nova história está sendo escrita. Em breve, mais detalhes.",
  },
];

const UpcomingReleases = () => {
  return (
    <section id="proximos" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
          PRÓXIMOS LANÇAMENTOS
        </h2>

        {upcomingBooks.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {upcomingBooks.map((book) => (
              <article
                key={book.id}
                className="bg-card p-6 md:p-8 rounded-sm border border-border hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-2 text-primary mb-3">
                  <Calendar className="h-4 w-4" />
                  <span className="font-body text-sm tracking-wider">
                    {book.expectedDate}
                  </span>
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">
                  {book.title}
                </h3>
                <p className="font-body text-muted-foreground mb-6">
                  {book.description}
                </p>
                <Button variant="outline" size="sm" className="gap-2">
                  <Bell className="h-4 w-4" />
                  NOTIFIQUE-ME
                </Button>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="font-body text-muted-foreground text-lg">
              Novos projetos em desenvolvimento.
            </p>
            <p className="font-body text-muted-foreground">
              Verifique novamente mais tarde ou inscreva-se na newsletter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default UpcomingReleases;
