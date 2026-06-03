import franklinSketch from "@/assets/franklin-rafael-sketch.jpeg";

const newsItems = [
  {
    id: 1,
    title: "10 Anos de Cátedra como Professor",
    excerpt:
      'Nesse ano de 2026, Franklin Rafael comemora 10 anos que tem exercido sua vocação de cátedra como um professor incansável. Sobre isso, ele comentou: "Minhas forças continuam as mesmas, tão intensas quanto o primeiro dia em que entrei em uma escola para ensinar."',
  },
  {
    id: 2,
    title: 'Medalha Ascensão — Ranking Editora Uiclap',
    excerpt:
      'Franklin Rafael recebeu a "Medalha Ascensão" pelo Ranking da Editora Uiclap, um prémio que classifica os escritores pela relevância de vendas relacionadas às suas obras literárias.',
  },
  {
    id: 3,
    title: "Especialização em Teologia Reformada",
    excerpt:
      "Pouco tempo atrás, Franklin expressou sua alegria por estar se especializando em Teologia Reformada, pelo Instituto Reformado de São Paulo, com o Dr. Augustus Nicodemos, Leandro Lima, Hermisten Maia e Felipe Fontes, professores com os quais têm mantido contato, conhecidos como os maiores pastores renomados da tradição reformada do cristianismo no país e no exterior. Segundo as suas palavras, era um sonho que ele tinha desde a sua adolescência.",
  },
];

const NewsSection = () => {
  return (
    <section id="noticias" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-10">
          <img
            src={franklinSketch}
            alt="Retrato artístico de Franklin Rafael"
            className="w-56 md:w-64 h-auto block grayscale-[20%]"
          />
        </div>

        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
          Notícias Recentes
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {newsItems.map((news) => (
              <article
                key={news.id}
                className="border-b border-border pb-8 last:border-b-0"
              >
                <h3 className="font-heading text-xl md:text-2xl font-medium text-foreground mb-3 uppercase">
                  {news.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {news.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
