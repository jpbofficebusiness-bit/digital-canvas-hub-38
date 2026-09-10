import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import bioHero from "@/assets/franklin-rafael-bio-hero.jpg.asset.json";
import carousel1 from "@/assets/bio/bio-carousel-1.jpg.asset.json";
import carousel2 from "@/assets/bio/bio-carousel-2.jpg.asset.json";
import carousel3 from "@/assets/bio/bio-carousel-3.jpg.asset.json";
import carousel4 from "@/assets/bio/bio-carousel-4.jpg.asset.json";
import carousel5 from "@/assets/bio/bio-carousel-5.jpg.asset.json";
import carousel6 from "@/assets/bio/bio-carousel-6.jpg.asset.json";


const Biografia = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="h-16 md:h-20" />

      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="text-center mb-12">
            <div className="mx-auto mb-6 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gold shadow-2xl">
              <img
                src={bioHero.url}
                alt="Franklin Rafael"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3">
              BIOGRAFIA
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
                🎓 Formação Acadêmica
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
                ⛪ Religião e Influências
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
                🗽 Cidadania e Política
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Em termos de cidadania e política, ele adota o conservadorismo histórico, cuja mentalidade se remete ao legado de homens como Edmund Burke, T. S. Eliot, Russell Kirk, Roger Scruton e tantos outros intelectuais, filósofos e literatos no percurso da história.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading text-xl md:text-2xl text-foreground mb-3">
                🏛️ Atuações Relevantes
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

          </article>
        </div>
      </main>

      <section className="bg-black py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gold text-center mb-8 tracking-wider">
            GALERIA DE FOTOS
          </h2>
          <BioPhotoCarousel />
        </div>
      </section>

      <Footer />
    </div>
  );
};

const carouselImages = [
  { src: carousel1.url, alt: "Franklin Rafael - Foto 1" },
  { src: carousel2.url, alt: "Franklin Rafael - Foto 2" },
  { src: carousel3.url, alt: "Franklin Rafael - Foto 3" },
  { src: carousel4.url, alt: "Franklin Rafael - Foto 4" },
  { src: carousel5.url, alt: "Franklin Rafael - Foto 5" },
  { src: carousel6.url, alt: "Franklin Rafael - Foto 6" },
];

const BioPhotoCarousel = () => {
  const [current, setCurrent] = useState(0);
  const directionRef = useRef(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => {
        const next = i + directionRef.current;
        if (next >= carouselImages.length) {
          directionRef.current = -1;
          return i - 1;
        }
        if (next < 0) {
          directionRef.current = 1;
          return i + 1;
        }
        return next;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {carouselImages.map((img, idx) => (
          <div key={idx} className="min-w-full">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto max-h-[60vh] object-contain bg-black"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Biografia;

