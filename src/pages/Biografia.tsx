import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import bio11 from "@/assets/bio/bio-11.png";
import bio12 from "@/assets/bio/bio-12.png";
import bio13 from "@/assets/bio/bio-13.png";
import bio14 from "@/assets/bio/bio-14.png";
import bio15 from "@/assets/bio/bio-15.png";
import bio16 from "@/assets/bio/bio-16.png";
import bio17 from "@/assets/bio/bio-17.jpeg";
import bio18 from "@/assets/bio/bio-18.jpeg";
import bio19 from "@/assets/bio/bio-19.jpeg";

const galleryImages = [
  { src: bio11, alt: "Franklin Rafael — retrato 1" },
  { src: bio12, alt: "Franklin Rafael — retrato 2" },
  { src: bio13, alt: "Franklin Rafael — retrato 3" },
  { src: bio14, alt: "Franklin Rafael — retrato 4" },
  { src: bio15, alt: "Franklin Rafael — retrato 5" },
  { src: bio16, alt: "Franklin Rafael — retrato 6" },
  { src: bio17, alt: "Franklin Rafael — retrato 7" },
  { src: bio18, alt: "Franklin Rafael — retrato 8" },
  { src: bio19, alt: "Franklin Rafael — retrato 9" },
];

const Biografia = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="h-16 md:h-20" />

      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3">
              Biografia
            </h1>
            <p className="font-body text-muted-foreground">
              A trajetória, religião e influências de Franklin Rafael.
            </p>
          </header>

          <article className="space-y-10">
            <section>
              <h2 className="font-heading text-xl md:text-2xl text-foreground mb-3">
                Franklin Rafael
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                🏹 Franklin Rafael é um teólogo cristão reformado e um exímio escritor de literatura protestante e alta fantasia, um gênero definido pela criação de mundos imaginários e histórias épicas, permeadas de personagens, filosofias próprias e heróis notáveis. Também é conhecido como um pregoeiro batista descendente da Reforma Protestante, de estilo veemente e ancestral, além de um professor relevante em sua época.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl md:text-2xl text-foreground mb-3">
                🎓 FORMAÇÃO ACADÊMICA
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>A trajetória educacional de Franklin Rafael é extensa e diversificada:</p>
                <p>
                  É graduado em Letras pela Faculdade de Administração, Humanas e Exatas (UNIFAHE), em São José dos Campos, São Paulo.
                </p>
                <p>
                  Graduado em Teologia pela Faculdade Regional do Jacuípe (FARJ), Bahia.
                </p>
                <p>
                  Graduado em Pedagogia pela Faculdade de Ciências e Tecnologia (FACITE) Bahia.
                </p>
                <p>
                  Pós-graduado em Língua Inglesa pela Faculdade de Administração, Humanas e Exatas (UNIFAHE), em São José dos Campos, São Paulo.
                </p>
                <p>
                  E pós-graduado em Psicopedagogia Institucional e Clínica pela Faculdade Regional do Jacuípe (FARJ), Bahia.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl md:text-2xl text-foreground mb-3">
                ⛪ RELIGIÃO E INFLUÊNCIAS
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Franklin Rafael é um cristão batista de tradição protestante, influenciado pelos grandes reformadores, os piedosos puritanos e os grandes avivalistas, tanto em seu estilo bélico quanto em seu jeito pregacional.
                </p>
                <p>
                  Como Teólogo, se identifica como um arminiano-wesleyano, lapidado pela cosmovisão de Jacob Armínio e a teologia de John Wesley. De um modo peculiar, ele elaborou o seu próprio acróstico sword, que significa espada, para descrever sua própria posição teológica.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl md:text-2xl text-foreground mb-3">
                🗽 CIDADANIA E POLÍTICA
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Em termos de cidadania e política, ele adota o conservadorismo histórico, cuja mentalidade se remete ao legado de homens como Edmund Burke, T. S. Eliot, Russell Kirk, Roger Scruton e tantos outros intelectuais, filósofos e literatos no percurso da história.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl md:text-2xl text-foreground mb-3">
                🏛️ ATUAÇÕES RELEVANTES
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Atualmente, Franklin Rafael atua como professor em rede pública, conhecido pelo seu modo intelectual de educador clássico e conservador, influenciado profundamente pelas artes liberais, isto é:
                </p>
                <p>
                  O Trivium: Gramática, Lógica e Retórica.
                </p>
                <p>
                  E o Quadrivium: Aritmética, Geometria, Música e Astronomia.
                </p>
                <p>
                  Como professor, ele acredita e defende que este é o melhor método para o desenvolvimento completo de um ser humano livre, preparando-o para viver como um indivíduo completo em todos os ramos da vida pública, intelectual e cultural. Franklin acredita que, ao contrário dos artifícios pedagógicos recentes e passageiros, as artes liberais se mostraram eficazes ao longo de mais de 1500 anos de história, tendo formado a mente de filósofos, cientistas, teólogos, juristas, escritores e pessoas que transformaram civilizações.
                </p>
                <p>
                  No ano de 2020, fundou no YouTube o canal Franklin Rafael Oficial, uma plataforma feita para todos aqueles que desejam conhecer sua personalidade, seu pensamento e as suas obras.
                </p>
                <p>
                  Também é o fundador da Livraria Herança Livros, uma plataforma online que consiste na divulgação de toda a sua obra literária e na venda de todos os seus livros.
                </p>
              </div>
            </section>

            <section className="pt-4 relative left-1/2 right-1/2 -mx-[50vw] w-screen">
              <div className="bg-black py-10 px-4 sm:px-10 md:px-16 shadow-2xl">
                <h2 className="font-heading text-2xl md:text-3xl text-white mb-8 text-center tracking-[0.2em]">
                  GALERIA DE FOTOS
                </h2>
                <Carousel
                  opts={{ align: "start", loop: true }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-3">
                    {galleryImages.map((img, i) => (
                      <CarouselItem
                        key={i}
                        className="pl-3 basis-2/3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                      >
                        <div className="aspect-[3/4] w-full overflow-hidden">
                          <img
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="-left-2 sm:-left-6 h-12 w-12 rounded-none bg-transparent text-white border-0 hover:bg-white/10 hover:text-white" />
                  <CarouselNext className="-right-2 sm:-right-6 h-12 w-12 rounded-none bg-transparent text-white border-0 hover:bg-white/10 hover:text-white" />
                </Carousel>
              </div>
            </section>
          </article>
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Biografia;
