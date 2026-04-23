import { Button } from "@/components/ui/button";
import { Youtube, User } from "lucide-react";

const AboutAuthor = () => {
  return (
    <section id="autor" className="py-16 md:py-24 bg-gradient-to-br from-teal to-forest">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-center mb-12 text-primary-foreground">
          SOBRE FRANKLIN RAFAEL
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
          {/* Author Image Placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary-foreground/10 border-4 border-gold flex items-center justify-center shadow-2xl">
              <User className="w-24 h-24 md:w-32 md:h-32 text-primary-foreground/40" />
            </div>
          </div>

          {/* Author Info */}
          <div className="text-center md:text-left space-y-6">
            <div className="space-y-4">
              <p className="font-body text-primary-foreground/90 leading-relaxed">
                Franklin Rafael é um teólogo reformado e escritor de obras cristãs e alta fantasia. 
                Conhecido pelo seu estilo bélico e ancestral, é também um professor relevante em sua época.
              </p>
              <p className="font-body text-primary-foreground/80 leading-relaxed text-sm">
                [Descrição completa será adicionada posteriormente]
              </p>
            </div>

            {/* YouTube CTA */}
            <div className="bg-primary-foreground/10 rounded-sm p-6 border border-primary-foreground/20">
              <p className="font-body text-primary-foreground/90 mb-4">
                Conheça mais sobre o autor e suas obras no canal do YouTube!
              </p>
              <Button 
                className="gap-2 bg-gold hover:bg-gold/90 text-foreground font-body tracking-wider"
                asChild
              >
                <a href="https://www.youtube.com/@franklinrafaeloficial" target="_blank" rel="noopener noreferrer">
                  <Youtube className="h-5 w-5" />
                  CANAL NO YOUTUBE - FRANKLIN RAFAEL OFICIAL
                </a>
              </Button>
            </div>

            {/* Featured Video */}
            <div className="aspect-video rounded-sm overflow-hidden border border-primary-foreground/20">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/fOu3hMf6SY0"
                title="Vídeo em Destaque - Franklin Rafael"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;
