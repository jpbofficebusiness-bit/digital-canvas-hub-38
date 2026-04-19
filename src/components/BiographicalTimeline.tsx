import { useState } from "react";

interface TimelineEntry {
  year: string;
  date?: string;
  category: string;
  title: string;
  text: string;
  image?: string;
}

interface DecadeBlock {
  id: string;
  label: string;
  entries: TimelineEntry[];
}

const decades: DecadeBlock[] = [
  {
    id: "decada-1990",
    label: "Década de 1990",
    entries: [
      {
        year: "1995",
        category: "Nascimento",
        title: "Marco em construção",
        text: "Conteúdo desta entrada será adicionado em breve.",
      },
    ],
  },
  {
    id: "decada-2000",
    label: "Década de 2000",
    entries: [
      {
        year: "2000",
        category: "Infância",
        title: "Marco em construção",
        text: "Conteúdo desta entrada será adicionado em breve.",
      },
    ],
  },
  {
    id: "decada-2010",
    label: "Década de 2010",
    entries: [
      {
        year: "2010",
        category: "Formação",
        title: "Marco em construção",
        text: "Conteúdo desta entrada será adicionado em breve.",
      },
    ],
  },
  {
    id: "decada-2020",
    label: "Década de 2020",
    entries: [
      {
        year: "2020",
        category: "Ministério",
        title: "Fundação do canal Reformado Franklin Rafael",
        text: "Franklin Rafael fundou no YouTube o canal Reformado Franklin Rafael, uma plataforma feita para todos aqueles que desejam conhecer sua personalidade, seu pensamento e as suas obras.",
      },
    ],
  },
];

const BiographicalTimeline = () => {
  const [activeDecade, setActiveDecade] = useState<string>(decades[0].id);

  const handleNavClick = (id: string) => {
    setActiveDecade(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-6">
      <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-1">
        Linha do Tempo Biográfica
      </h2>
      <p className="font-body text-sm text-muted-foreground mb-6">
        Franklin Rafael
      </p>

      {/* Decade navigation */}
      <nav className="flex flex-wrap gap-1.5 border-b border-border pb-4 mb-10">
        {decades.map((d) => (
          <button
            key={d.id}
            onClick={() => handleNavClick(d.id)}
            className={`font-body text-xs md:text-sm px-3 py-1 border rounded-sm transition-colors ${
              activeDecade === d.id
                ? "bg-foreground text-background border-foreground"
                : "border-border text-muted-foreground hover:bg-foreground hover:text-background hover:border-foreground"
            }`}
          >
            {d.label}
          </button>
        ))}
      </nav>

      {/* Decade blocks */}
      {decades.map((d) => (
        <section
          key={d.id}
          id={d.id}
          className="mb-14 scroll-mt-24"
        >
          <div className="font-body text-xs font-bold tracking-widest uppercase text-muted-foreground border-l-[3px] border-foreground pl-3 mb-8">
            {d.label}
          </div>

          {d.entries.map((entry, idx) => (
            <article
              key={idx}
              className={`grid md:grid-cols-[200px_1fr] gap-4 md:gap-10 mb-10 pb-10 ${
                idx < d.entries.length - 1 ? "border-b border-border" : ""
              }`}
            >
              {/* Left: image + year */}
              <div className="flex md:block items-center gap-3 md:text-right">
                {entry.image && (
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="w-20 md:w-full md:max-w-[190px] h-auto md:ml-auto md:mb-2.5 rounded-sm object-cover"
                  />
                )}
                <div>
                  <span className="block font-body text-2xl md:text-3xl font-bold text-foreground">
                    {entry.year}
                  </span>
                  {entry.date && (
                    <span className="block font-body text-xs text-muted-foreground mt-0.5">
                      {entry.date}
                    </span>
                  )}
                </div>
              </div>

              {/* Right: content */}
              <div className="pt-1">
                <span className="block font-body text-[0.72rem] font-bold tracking-widest uppercase text-muted-foreground mb-1.5">
                  {entry.category}
                </span>
                <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2.5 leading-snug">
                  {entry.title}
                </h3>
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                  {entry.text}
                </p>
              </div>
            </article>
          ))}
        </section>
      ))}
    </div>
  );
};

export default BiographicalTimeline;
