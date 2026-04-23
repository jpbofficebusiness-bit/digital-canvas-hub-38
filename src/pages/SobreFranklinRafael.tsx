import { Link } from "react-router-dom";
import { ChevronRight, Quote, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

const otherSections = [
  {
    to: "/o-autor/citacoes",
    title: "Citações",
    description: "Frases e pensamentos marcantes do autor.",
    icon: Quote,
  },
  {
    to: "/o-autor/linha-do-tempo",
    title: "Linha do Tempo Biográfica",
    description: "Os principais marcos da vida de Franklin Rafael.",
    icon: Clock,
  },
];

const SobreFranklinRafael = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="h-16 md:h-20" />

      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <header className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3">
              O Autor
            </h1>
            <p className="font-body text-muted-foreground">
              Conheça Franklin Rafael
            </p>
          </header>

          {/* Biografia completa - visível direto */}
          <section className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-6 border-b border-border pb-3">
              Biografia
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-lg md:text-xl text-foreground mb-3">
                  Franklin Rafael
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  🏹 Franklin Rafael é um teólogo reformado e um exímio escritor de obras
                  cristãs e alta fantasia, um gênero definido pela criação de mundos
                  imaginários e histórias épicas, permeadas de personagens, filosofias
                  próprias e heróis notáveis. Também é conhecido como um pregoeiro batista
                  descendente da Reforma Protestante, de estilo veemente e ancestral, além
                  de um professor relevante em sua época.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-lg md:text-xl text-foreground mb-3">
                  ⛪ Religião e Influências
                </h3>
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
                    modo peculiar, ele elaborou o seu próprio acróstico{" "}
                    <strong className="text-gold">SWORD</strong>, que significa espada,
                    para descrever sua própria posição teológica.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-lg md:text-xl text-foreground mb-3">
                  🗽 Cidadania e Política
                </h3>
                <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                  <p>
                    ◾ Em termos de cidadania e política, ele adota o conservadorismo
                    histórico, cuja mentalidade se remete ao legado de homens como Edmund
                    Burke, Russell Kirk, Roger Scruton e tantos outros intelectuais,
                    filósofos e literatos no percurso da história.
                  </p>
                  <p>
                    ◾ No ano de 2020, fundou no YouTube o canal{" "}
                    <strong className="text-gold">Reformado Franklin Rafael</strong>, uma
                    plataforma feita para todos aqueles que desejam conhecer sua
                    personalidade, seu pensamento e as suas obras.
                  </p>
                  <p>
                    ◾ Também é o fundador da{" "}
                    <strong className="text-gold">Livraria FrankBooks</strong>, uma
                    plataforma online que consiste na divulgação de toda a sua obra
                    literária e na venda de todos os seus livros.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Outras seções (citações, linha do tempo) */}
          <div className="space-y-4">
            {otherSections.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.to}
                  to={s.to}
                  className="flex items-center gap-4 border border-border bg-card hover:bg-accent/40 transition-colors rounded-sm p-5 md:p-6 group"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-sm bg-gold/15 text-gold flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-heading text-lg md:text-xl text-foreground">
                      {s.title}
                    </h2>
                    <p className="font-body text-sm text-muted-foreground mt-0.5">
                      {s.description}
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default SobreFranklinRafael;
