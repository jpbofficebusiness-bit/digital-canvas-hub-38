import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User, Youtube, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const SobreFranklinRafael = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20" />
      
      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          
          {/* Seção 1: Introdução */}
          <section className="max-w-4xl mx-auto mb-16">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Author Image Placeholder */}
              <div className="flex justify-center md:col-span-1">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-secondary border-4 border-gold flex items-center justify-center shadow-xl">
                  <User className="w-20 h-20 text-muted-foreground/40" />
                </div>
              </div>
              
              {/* Content */}
              <div className="md:col-span-2 text-center md:text-left">
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Franklin Rafael
                </h1>
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  🏹 Franklin Rafael é um teólogo reformado e um exímio escritor de obras cristãs e alta fantasia, 
                  um gênero definido pela criação de mundos imaginários e histórias épicas, permeadas de personagens, 
                  filosofias próprias e heróis notáveis. Também é conhecido como um pregoeiro batista descendente 
                  da Reforma Protestante, de estilo veemente e ancestral, além de um professor relevante em sua época.
                </p>
              </div>
            </div>
          </section>
          
          {/* Seção 2: Religião e Influências */}
          <section className="max-w-4xl mx-auto mb-16">
            <div className="bg-secondary rounded-sm p-8 md:p-10 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">⛪</span>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
                  Religião e Influências
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-sm border border-border">
                  <p className="font-body text-muted-foreground leading-relaxed">
                    ◾ Franklin Rafael é um cristão batista de tradição protestante, influenciado pelos grandes reformadores, 
                    os piedosos puritanos e os grandes avivalistas, tanto em seu estilo bélico quanto em seu jeito pregacional.
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-sm border border-border">
                  <p className="font-body text-muted-foreground leading-relaxed">
                    ◾ Como Teólogo, se identifica como um arminiano-wesleyano, lapidado pela cosmovisão de Jacob Armínio 
                    e a teologia de John Wesley. De um modo peculiar, ele elaborou o seu próprio acróstico <strong className="text-gold">SWORD</strong>, 
                    que significa espada, para descrever sua própria posição teológica.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Seção 3: Cidadania e Política */}
          <section className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-teal to-forest rounded-sm p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🗽</span>
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-primary-foreground">
                  Cidadania e Política
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-primary-foreground/10 p-6 rounded-sm border border-primary-foreground/20">
                  <p className="font-body text-primary-foreground/90 leading-relaxed">
                    ◾ Em termos de cidadania e política, ele adota o conservadorismo histórico, cuja mentalidade se remete 
                    ao legado de homens como Edmund Burke, Russell Kirk, Roger Scruton e tantos outros intelectuais, 
                    filósofos e literatos no percurso da história.
                  </p>
                </div>
                
                <div className="bg-primary-foreground/10 p-6 rounded-sm border border-primary-foreground/20">
                  <div className="flex items-start gap-3">
                    <Youtube className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                    <p className="font-body text-primary-foreground/90 leading-relaxed">
                      ◾ No ano de 2020, fundou no YouTube o canal <strong className="text-gold">Reformado Franklin Rafael</strong>, 
                      uma plataforma feita para todos aqueles que desejam conhecer sua personalidade, seu pensamento e as suas obras.
                    </p>
                  </div>
                </div>
                
                <div className="bg-primary-foreground/10 p-6 rounded-sm border border-primary-foreground/20">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                    <p className="font-body text-primary-foreground/90 leading-relaxed">
                      ◾ Também é o fundador da <strong className="text-gold">Livraria FrankBooks</strong>, uma plataforma online 
                      que consiste na divulgação de toda a sua obra literária e na venda de todos os seus livros.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
                <Button 
                  className="gap-2 bg-gold hover:bg-gold/90 text-foreground"
                  asChild
                >
                  <a href="https://www.youtube.com/@espadicaoficial" target="_blank" rel="noopener noreferrer">
                    <Youtube className="h-5 w-5" />
                    CANAL NO YOUTUBE
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <BookOpen className="h-5 w-5" />
                    LIVRARIA FRANKBOOKS
                  </a>
                </Button>
              </div>
            </div>
          </section>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SobreFranklinRafael;
