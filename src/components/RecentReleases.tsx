import { Button } from "@/components/ui/button";
import { Info, ShoppingCart, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

import donzelaCristaCover from "@/assets/donzela-crista-cover.jpg";

const releases = [
  {
    id: 1,
    title: "Alcateia Infernal",
    category: "Épico",
    tags: ["Alta-Fantasia", "Drama-Teológico", "Épico-Pastoral", "Terror-Rural"],
    date: "Em breve",
    description:
      "Um surto de lobos vorazes invade um Vilarejo. Quando se dão por conta, um grupo de pastores decide fazer algo inédito por toda a Luméria, situada no grande país da Torvia. Será que eles conseguirão alcançar o que pretendem? – Escrito por Franklin Rafael, Alcateia Infernal é uma obra que o deixará perplexo diante das verdades chocantes em meio à uma história sombria e impressionante.",
    image: null, // Placeholder
  },
  {
    id: 2,
    title: "Donzela Cristã",
    category: "Devocional",
    tags: ["Apologética", "Cristianismo", "Devoção", "Donzela", "Espiritualidade"],
    date: "Em breve",
    description:
      "Em meio à um mundo confuso e maligno, a jovem cristã se vê como uma mulher que precisa firmar-se em Deus a cada dia. Além disso, nunca foi tão necessário estar em guarda contra os diversos males, bem como preservar-se pura em uma era tão promíscua e subjetivista como a que vivemos. Neste livro profundo, caloroso e instigante, o autor Franklin Rafael tratará sobre o verdadeiro perfil da jovem cristã, além de responder as dúvidas e objeções mais relevantes dessa época. Tanto devocional quanto apologético, Donzela Cristã é um livro que virá muito a calhar em tempos tão obscuros como esse. Uma obra sólida, firme e alicerçada na teologia reformada.",
    image: donzelaCristaCover,
    topics: [
      "Os 5 Pontos da Donzela",
      "Questões Sociais",
      "Romance",
      "Lazer",
      "Vocação",
      "Amizade Com Homens",
      "Conflitos de Identidade",
      "Lesbianismo e Tentação",
      "Pureza Sexual",
      "Aborto",
      "O Movimento Político Feminista",
      "O Homem Ideal",
      "Música",
      "Artes Humanas",
      "E muito mais...",
    ],
  },
];

const RecentReleases = () => {
  const [expandedTopics, setExpandedTopics] = useState<number | null>(null);

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
              className={`grid md:grid-cols-2 gap-8 items-start ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                <div className="aspect-[3/4] bg-muted rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
                  {release.image ? (
                    <img
                      src={release.image}
                      alt={release.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-teal to-forest flex items-center justify-center">
                      <span className="font-heading text-2xl text-primary-foreground opacity-50">
                        Em breve
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className={`space-y-4 ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-gold text-foreground hover:bg-gold/90">
                      {release.category}
                    </Badge>
                  </div>
                  <p className="font-body text-sm text-primary tracking-wider mb-2">
                    {release.date}
                  </p>
                  <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-3">
                    {release.title}
                  </h3>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {release.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="border-gold text-gold hover:bg-gold/10"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {release.description}
                  </p>
                </div>

                {/* Topics (for Donzela Cristã) */}
                {release.topics && (
                  <div className="border border-border rounded-sm p-4 bg-secondary/50">
                    <button
                      onClick={() => setExpandedTopics(expandedTopics === release.id ? null : release.id)}
                      className="flex items-center justify-between w-full font-heading text-lg font-semibold text-foreground"
                    >
                      <span>Tópicos Abordados</span>
                      {expandedTopics === release.id ? (
                        <ChevronUp className="h-5 w-5 text-gold" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gold" />
                      )}
                    </button>
                    {expandedTopics === release.id && (
                      <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {release.topics.map((topic, i) => (
                          <li key={i} className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap gap-3 pt-2">
                  <Button variant="default" className="gap-2 bg-gold hover:bg-gold/90 text-foreground">
                    <Info className="h-4 w-4" />
                    SAIBA MAIS
                  </Button>
                  <Button variant="outline" className="gap-2 border-gold text-gold hover:bg-gold/10">
                    <ShoppingCart className="h-4 w-4" />
                    PRÉ-COMPRAR
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
