import { ArrowRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Entrevista exclusiva para a Revista Literária",
    date: "15 de Janeiro, 2025",
    excerpt:
      "Conversamos sobre o processo criativo, inspirações e o que está por vir nos próximos projetos.",
  },
  {
    id: 2,
    title: "O Último Suspiro alcança 100 mil cópias vendidas",
    date: "10 de Janeiro, 2025",
    excerpt:
      "Um marco importante na trajetória literária, celebrando a conexão com os leitores.",
  },
  {
    id: 3,
    title: "Confirmada participação na Bienal do Livro 2025",
    date: "05 de Janeiro, 2025",
    excerpt:
      "Sessão de autógrafos e bate-papo com leitores confirmados. Anote na agenda!",
  },
  {
    id: 4,
    title: "Adaptação para série em negociação",
    date: "20 de Dezembro, 2024",
    excerpt:
      "Grandes novidades podem estar chegando das telonas. Fiquem ligados!",
  },
];

const NewsSection = () => {
  return (
    <section id="noticias" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
          ÚLTIMAS NOTÍCIAS
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {newsItems.map((news) => (
            <article
              key={news.id}
              className="group border-b border-border pb-6 last:border-b-0"
            >
              <p className="font-body text-sm text-primary tracking-wider mb-2">
                {news.date}
              </p>
              <h3 className="font-heading text-xl md:text-2xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                {news.title}
              </h3>
              <p className="font-body text-muted-foreground mb-4">
                {news.excerpt}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 font-body text-sm text-primary hover:text-burgundy-light transition-colors duration-200"
              >
                LER MAIS
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
