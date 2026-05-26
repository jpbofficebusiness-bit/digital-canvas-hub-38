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
import bio01 from "@/assets/bio/bio-01.jpeg";
import bio02 from "@/assets/bio/bio-02.jpeg";
import bio03 from "@/assets/bio/bio-03.jpeg";
import bio04 from "@/assets/bio/bio-04.jpeg";
import bio05 from "@/assets/bio/bio-05.jpeg";
import bio06 from "@/assets/bio/bio-06.jpeg";
import bio07 from "@/assets/bio/bio-07.jpeg";
import bio08 from "@/assets/bio/bio-08.jpeg";
import bio09 from "@/assets/bio/bio-09.jpeg";
import bio10 from "@/assets/bio/bio-10.jpeg";

const galleryImages = [
  { src: bio01, alt: "Franklin Rafael — retrato 1" },
  { src: bio02, alt: "Franklin Rafael — retrato 2" },
  { src: bio03, alt: "Franklin Rafael — retrato 3" },
  { src: bio04, alt: "Franklin Rafael — retrato 4" },
  { src: bio05, alt: "Franklin Rafael — retrato 5" },
  { src: bio06, alt: "Franklin Rafael — retrato 6" },
  { src: bio07, alt: "Franklin Rafael — retrato 7" },
  { src: bio08, alt: "Franklin Rafael — retrato 8" },
  { src: bio09, alt: "Franklin Rafael — retrato 9" },
  { src: bio10, alt: "Franklin Rafael — retrato 10" },
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
                🏹 Franklin Rafael é um teólogo reformado e um exímio escritor de obras
                cristãs e alta fantasia, um gênero definido pela criação de mundos
                imaginários e histórias épicas, permeadas de personagens, filosofias
                próprias e heróis notáveis. Também é conhecido como um pregoeiro batista
                descendente da Reforma Protestante, de estilo veemente e ancestral, além
                de um professor relevante em sua época.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl md:text-2xl text-foreground mb-3">
                ⛪ Religião e Influências
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  ◾ Franklin Rafael é um cristão batista de tradição protestante,
                  influenciado pelos grandes reformadores, os piedosos puritanos e os
                  grandes avivalistas, tanto em seu estilo bélico quanto em seu jeito
                  pregacional.
                </p>
                <p>
                  ◾ Como Teólogo, se identifica como um arminiano-wesleyano, lapidado
                  pela cosmovisão de Jacob Armínio e a teologia de John Wesley. De um
                  modo peculiar, ele elaborou o seu próprio acróstico SWORD, que
                  significa espada, para descrever sua própria posição teológica.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl md:text-2xl text-foreground mb-3">
                🗽 Cidadania e Política
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  ◾ Em termos de cidadania e política, ele adota o conservadorismo
                  histórico, cuja mentalidade se remete ao legado de homens como Edmund
                  Burke, Russell Kirk, Roger Scruton e tantos outros intelectuais,
                  filósofos e literatos no percurso da história.
                </p>
                <p>
                  ◾ No ano de 2020, fundou no YouTube o canal Reformado Franklin
                  Rafael, uma plataforma feita para todos aqueles que desejam conhecer
                  sua personalidade, seu pensamento e as suas obras.
                </p>
                <p>
                  ◾ Também é o fundador da Livraria FrankBooks, uma plataforma online
                  que consiste na divulgação de toda a sua obra literária e na venda
                  de todos os seus livros.
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
