import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
            <p className="font-body text-muted-foreground">Franklin Rafael</p>
          </header>

          <Accordion type="single" collapsible className="w-full space-y-3">
            <AccordionItem
              value="franklin-rafael"
              className="border border-border rounded-sm bg-card px-4"
            >
              <AccordionTrigger className="font-heading text-base md:text-lg text-foreground hover:no-underline">
                Franklin Rafael
              </AccordionTrigger>
              <AccordionContent>
                <p className="font-body text-muted-foreground leading-relaxed">
                  🏹 Franklin Rafael é um teólogo reformado e um exímio escritor de obras
                  cristãs e alta fantasia, um gênero definido pela criação de mundos
                  imaginários e histórias épicas, permeadas de personagens, filosofias
                  próprias e heróis notáveis. Também é conhecido como um pregoeiro batista
                  descendente da Reforma Protestante, de estilo veemente e ancestral, além
                  de um professor relevante em sua época.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="religiao"
              className="border border-border rounded-sm bg-card px-4"
            >
              <AccordionTrigger className="font-heading text-base md:text-lg text-foreground hover:no-underline">
                ⛪ Religião e Influências
              </AccordionTrigger>
              <AccordionContent>
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
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="cidadania"
              className="border border-border rounded-sm bg-card px-4"
            >
              <AccordionTrigger className="font-heading text-base md:text-lg text-foreground hover:no-underline">
                🗽 Cidadania e Política
              </AccordionTrigger>
              <AccordionContent>
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
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Biografia;
