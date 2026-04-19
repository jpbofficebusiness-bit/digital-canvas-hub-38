import { useEffect, useRef, useState } from "react";

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
    id: "bloco-1994",
    label: "1994",
    entries: [
      {
        year: "1994",
        date: "27 de dezembro",
        category: "Nascimento",
        title: "Nasceu em Ouricuri, Pernambuco",
        text: "Nasceu às 12h20, no Hospital Casa de Saúde e Maternidade João XXIII, na cidade de Ouricuri, estado de Pernambuco. Ainda nos primeiros dias de vida, foi levado para Trindade, onde passou a viver.",
        image: "",
      },
    ],
  },
  {
    id: "bloco-1999",
    label: "1999",
    entries: [
      {
        year: "1999",
        category: "Educação",
        title: "Primeiro contato com a escola",
        text: "Teve seu primeiro contato com o ambiente escolar na educação infantil, no Jardim I.",
        image: "",
      },
      {
        year: "2000",
        category: "Educação",
        title: "Jardim II",
        text: "Deu continuidade à educação infantil, no Jardim II, aprofundando a familiaridade com o espaço escolar.",
        image: "",
      },
      {
        year: "2001",
        category: "Educação",
        title: "Início da trajetória escolar formal",
        text: "Foi introduzido na 1ª série, iniciando formalmente sua trajetória escolar.",
        image: "",
      },
    ],
  },
  {
    id: "bloco-2005",
    label: "2005",
    entries: [
      {
        year: "2005",
        category: "Família",
        title: "Mudança para Ipubi",
        text: "Mudou-se com a sua família para Ipubi, Pernambuco, onde concluiu a 5ª série, dando continuidade regular à sua formação escolar.",
        image: "",
      },
      {
        year: "2006",
        category: "Família",
        title: "Retorno a Trindade",
        text: "Retornou à cidade de Trindade, prosseguindo na 6ª série, aprofundando o contato com disciplinas mais estruturadas.",
        image: "",
      },
    ],
  },
  {
    id: "bloco-2010",
    label: "2010",
    entries: [
      {
        year: "2010",
        category: "Fé",
        title: "Conversão e nova cosmovisão",
        text: "Foi convertido por Deus, tornando-se protestante aos 15 anos de idade, acontecimento que mudaria sua cosmovisão e trajetória de vida.",
        image: "",
      },
      {
        year: "2011",
        category: "Educação",
        title: "Conclusão do Ensino Médio",
        text: "Concluiu o 3º ano, encerrando os três anos do Ensino Médio.",
        image: "",
      },
    ],
  },
  {
    id: "bloco-2014",
    label: "2014",
    entries: [
      {
        year: "2014",
        category: "Ensino Superior",
        title: "Graduações em Pedagogia e Teologia",
        text: "Iniciou sua formação acadêmica superior na Faculdade de Ciências e Tecnologia da Bahia (FACITE), na graduação em Pedagogia, e, no mesmo período, deu início à formação em Teologia pela Faculdade Regional do Riachão do Jacuípe (FARJ).",
        image: "",
      },
      {
        year: "2018",
        category: "Ensino Superior",
        title: "Conclusão das graduações",
        text: "Concluiu a graduação em Pedagogia pela FACITE e a graduação em Teologia pela FARJ.",
        image: "",
      },
      {
        year: "2019",
        category: "Pós-graduação",
        title: "Especialização em Psicopedagogia",
        text: "Deu início à especialização em Psicopedagogia Institucional e Clínica pela Faculdade Regional do Riachão do Jacuípe (FARJ).",
        image: "",
      },
      {
        year: "2020",
        category: "Pós-graduação",
        title: "Conclusão da especialização",
        text: "Finalizou a especialização em Psicopedagogia Institucional e Clínica pela FARJ.",
        image: "",
      },
    ],
  },
  {
    id: "bloco-2024",
    label: "2024",
    entries: [
      {
        year: "2024",
        date: "7 de julho",
        category: "Publicação",
        title: "Lançamento: Donzela Cristã",
        text: "Publicou sua obra Donzela Cristã, marcando sua estreia no campo editorial.",
        image: "",
      },
    ],
  },
  {
    id: "bloco-2025",
    label: "2025",
    entries: [
      {
        year: "2025",
        category: "Ensino Superior",
        title: "Letras e especialização em Língua Inglesa",
        text: "Iniciou sua formação em Letras pela Faculdade de Administração, Humanas e Exatas (UNIFAHE) e, simultaneamente, a especialização em Língua Inglesa na mesma instituição.",
        image: "",
      },
      {
        year: "2025",
        category: "Pós-graduação",
        title: "Especialização em Teologia Reformada",
        text: "Iniciou a especialização em Teologia Reformada pelo Instituto Reformado de São Paulo, estudando com Dr. Augustus Nicodemus Lopes, Dr. Leandro Lima, Dr. Felipe Fontes e Dr. Hermisten Maia.",
        image: "",
      },
      {
        year: "2025",
        date: "24 de março",
        category: "Publicação",
        title: "Martinho Lutero — Série Os Reformadores, Livro I",
        text: "Publicou o primeiro volume da Série Os Reformadores.",
        image: "",
      },
      {
        year: "2025",
        date: "25 de março",
        category: "Publicação",
        title: "Ulrico Zwinglio, Filipe Melanchthon e Guilherme Farel — Livros II, III e IV",
        text: "Publicou três volumes da Série Os Reformadores no mesmo dia: Ulrico Zwinglio (Livro II), Filipe Melanchthon (Livro III) e Guilherme Farel (Livro IV).",
        image: "",
      },
      {
        year: "2025",
        date: "26 de março",
        category: "Publicação",
        title: "Pregação Reformada — Série Os Reformadores, Livro IX",
        text: "Publicou o nono volume da Série Os Reformadores.",
        image: "",
      },
      {
        year: "2025",
        date: "14 de maio",
        category: "Publicação",
        title: "O Sequestro da Cruz",
        text: "Publicou a obra O Sequestro da Cruz.",
        image: "",
      },
      {
        year: "2025",
        date: "26 de julho",
        category: "Publicação",
        title: "Alcateia Infernal",
        text: "Publicou a obra Alcateia Infernal.",
        image: "",
      },
      {
        year: "2025",
        date: "24 de dezembro",
        category: "Publicação",
        title: "O Homem Aceso",
        text: "Publicou a obra O Homem Aceso.",
        image: "",
      },
    ],
  },
];

const BiographicalTimeline = () => {
  const [activeDecade, setActiveDecade] = useState<string>(decades[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const handleNavClick = (id: string) => {
    setActiveDecade(id);
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Highlight active decade based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActiveDecade(visible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-6">
      <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-1">
        Linha do Tempo Biográfica
      </h2>
      <p className="font-body text-sm text-muted-foreground mb-6">
        Franklin Rafael
      </p>

      {/* Decade navigation */}
      <nav className="flex flex-wrap gap-1.5 border-b border-border pb-4 mb-10 sticky top-16 md:top-20 bg-background/95 backdrop-blur z-10 -mx-2 px-2 py-2">
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
          ref={(el) => (sectionRefs.current[d.id] = el)}
          className="mb-14 scroll-mt-32"
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
