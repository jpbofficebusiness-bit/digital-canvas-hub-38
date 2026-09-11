import { Link } from "react-router-dom";
import { ChevronRight, Quote, Clock, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const otherSections = [
  {
    to: "/o-autor/biografia",
    title: "Biografia",
    icon: BookOpen,
  },
  {
    to: "/o-autor/citacoes",
    title: "Citações",
    icon: Quote,
  },
  {
    to: "/o-autor/linha-do-tempo",
    title: "Linha do Tempo Biográfica",
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
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3 flex flex-col gap-1 leading-tight">
              <span>Conheça</span>
              <span>Franklin Rafael</span>
            </h1>
          </header>

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
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0" />
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SobreFranklinRafael;
