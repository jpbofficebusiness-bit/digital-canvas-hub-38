import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { GraduationCap, Building, Youtube, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const InformacoesAcademicas = () => {
  const trivium = ["Gramática", "Lógica", "Retórica"];
  const quadrivium = ["Aritmética", "Geometria", "Música", "Astronomia"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20" />
      
      <main className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          
          {/* Page Title */}
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-center text-foreground mb-12">
            INFORMAÇÕES ACADÊMICAS
          </h1>
          
          {/* Seção 1: Formação Acadêmica */}
          <section className="max-w-4xl mx-auto mb-16">
            <div className="bg-secondary rounded-sm p-8 md:p-10 border border-border">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-gold" />
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
                  FORMAÇÃO ACADÊMICA
                </h2>
              </div>
              
              <p className="font-body text-muted-foreground mb-6">
                A trajetória educacional de Franklin Rafael é extensa e diversificada.
              </p>
              
              <div className="space-y-4">
                <div className="bg-card p-6 rounded-sm border border-border border-l-4 border-l-gold">
                  <p className="font-body text-foreground">
                    ◾ É <strong>graduado em Teologia</strong> pela Faculdade Regional do Jacuípe (FARJ), Bahia.
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-sm border border-border border-l-4 border-l-gold">
                  <p className="font-body text-foreground">
                    ◾ <strong>Graduado em Pedagogia</strong> pela Faculdade de Ciências e Tecnologia (FACITE), Bahia.
                  </p>
                </div>
                
                <div className="bg-card p-6 rounded-sm border border-border border-l-4 border-l-gold">
                  <p className="font-body text-foreground">
                    ◾ E <strong>pós-graduado em Psicopedagogia Institucional e Clínica</strong> pela Faculdade Regional do Jacuípe (FARJ), Bahia.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Seção 2: Atuações Relevantes */}
          <section className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-teal to-forest rounded-sm p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Building className="w-8 h-8 text-gold" />
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-primary-foreground">
                  ATUAÇÕES RELEVANTES
                </h2>
              </div>
              
              {/* Educador Clássico */}
              <div className="bg-primary-foreground/10 p-6 rounded-sm border border-primary-foreground/20 mb-6">
                <p className="font-body text-primary-foreground/90 leading-relaxed mb-6">
                  ◾ Atualmente, Franklin Rafael atua como <strong className="text-gold">professor em rede pública</strong>, 
                  conhecido pelo seu modo intelectual de educador clássico e conservador, influenciado profundamente pelas artes liberais:
                </p>
                
                {/* Trivium & Quadrivium */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Trivium */}
                  <div className="bg-primary-foreground/10 p-5 rounded-sm">
                    <h3 className="font-heading text-lg font-semibold text-gold mb-4 text-center">
                      Trivium
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                      {trivium.map((item) => (
                        <div 
                          key={item}
                          className="bg-gold/20 py-2 px-3 rounded-sm text-center"
                        >
                          <span className="font-body text-sm text-primary-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Quadrivium */}
                  <div className="bg-primary-foreground/10 p-5 rounded-sm">
                    <h3 className="font-heading text-lg font-semibold text-gold mb-4 text-center">
                      Quadrivium
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {quadrivium.map((item) => (
                        <div 
                          key={item}
                          className="bg-gold/20 py-2 px-3 rounded-sm text-center"
                        >
                          <span className="font-body text-sm text-primary-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="font-body text-primary-foreground/80 leading-relaxed mt-6 text-sm">
                  Franklin acredita e defende que este é o melhor método para o desenvolvimento completo de um ser humano livre, 
                  preparando-o para viver como um indivíduo completo em todos os ramos da vida pública, intelectual e cultural. 
                  Franklin acredita que, ao contrário dos artifícios pedagógicos recentes e passageiros, as artes liberais se 
                  mostraram eficazes ao longo de mais de 1500 anos de história, tendo formado a mente de filósofos, cientistas, 
                  teólogos, juristas, escritores e pessoas que transformaram civilizações.
                </p>
              </div>
              
              {/* YouTube */}
              <div className="bg-primary-foreground/10 p-6 rounded-sm border border-primary-foreground/20 mb-6">
                <div className="flex items-start gap-3">
                  <Youtube className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <p className="font-body text-primary-foreground/90 leading-relaxed">
                    ◾ No ano de 2020, fundou no YouTube o canal <strong className="text-gold">Reformado Franklin Rafael</strong>, 
                    uma plataforma feita para todos aqueles que desejam conhecer sua personalidade, seu pensamento e as suas obras.
                  </p>
                </div>
              </div>
              
              {/* FrankBooks */}
              <div className="bg-primary-foreground/10 p-6 rounded-sm border border-primary-foreground/20 mb-6">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <p className="font-body text-primary-foreground/90 leading-relaxed">
                    ◾ Também é o fundador da <strong className="text-gold">Livraria FrankBooks</strong>, uma plataforma online 
                    que consiste na divulgação de toda a sua obra literária e na venda de todos os seus livros.
                  </p>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button 
                  className="gap-2 bg-gold hover:bg-gold/90 text-foreground"
                  asChild
                >
                  <a href="https://www.youtube.com/@franklinrafaeloficial" target="_blank" rel="noopener noreferrer">
                    <Youtube className="h-5 w-5" />
                    Canal No Youtube - Franklin Rafael Oficial
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
      
      <Newsletter />
      <Footer />
    </div>
  );
};

export default InformacoesAcademicas;
