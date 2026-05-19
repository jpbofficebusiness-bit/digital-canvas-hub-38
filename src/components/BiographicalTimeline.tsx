import { useEffect, useRef, useState } from "react";

interface YearEntry {
  year: string;
  paragraphs: string[];
}

const entries: YearEntry[] = [
  { year: "1994", paragraphs: ["Nasceu em 27 de dezembro de 1994, às 12h20, no Hospital Casa de Saúde e Maternidade João XXIII, na cidade de Ouricuri, estado de Pernambuco. Ainda nos primeiros dias de vida, foi levado para Trindade, onde passou a viver."] },
  { year: "1995", paragraphs: ["Viveu o primeiro ano completo da sua infância, sob os cuidados familiares."] },
  { year: "1996", paragraphs: ["Seguiu em desenvolvimento infantil no ambiente doméstico, marcado pelas primeiras percepções do mundo ao seu redor."] },
  { year: "1997", paragraphs: ["Permaneceu na primeira infância, ainda fora da escolarização formal."] },
  { year: "1998", paragraphs: ["Vivenciou o último ano, ainda sem contato direto com o ambiente escolar."] },
  { year: "1999", paragraphs: ["Teve seu primeiro contato com o ambiente escolar na educação infantil, no Jardim I."] },
  { year: "2000", paragraphs: ["Deu continuidade à educação infantil, no Jardim II, aprofundando a familiaridade com o espaço escolar."] },
  { year: "2001", paragraphs: ["Foi introduzido na 1ª série, iniciando formalmente sua trajetória escolar."] },
  { year: "2002", paragraphs: ["Avançou para a 2ª série, ampliando gradualmente as experiências de aprendizagem."] },
  { year: "2003", paragraphs: ["Deu sequência à 3ª série, consolidando os conhecimentos adquiridos nos anos iniciais."] },
  { year: "2004", paragraphs: ["Deu continuidade aos estudos, consolidando as bases acadêmicas."] },
  { year: "2005", paragraphs: ["Mudou-se com a sua família para Ipubi, Pernambuco, onde concluiu a 5ª série, dando continuidade regular à sua formação escolar."] },
  { year: "2006", paragraphs: ["Retornou à cidade de Trindade, prosseguindo na 6ª série, aprofundando o contato com disciplinas mais estruturadas."] },
  { year: "2007", paragraphs: ["Deu continuidade aos estudos na 7ª série, consolidando a base acadêmica."] },
  { year: "2008", paragraphs: ["Concluiu a 8ª série, ficando com matérias pendentes, posteriormente regularizadas no ano seguinte."] },
  { year: "2009", paragraphs: ["Deu início ao 1º ano do Ensino Médio, regularizando ao mesmo tempo as pendências do ano anterior."] },
  { year: "2010", paragraphs: [
    "Prosseguiu no 2º ano do Ensino Médio.",
    "Nesse período, foi convertido por Deus, tornando-se protestante aos 15 anos de idade, acontecimento que mudaria sua cosmovisão e trajetória de vida.",
  ] },
  { year: "2011", paragraphs: ["Concluiu o 3º ano, encerrando os três anos do Ensino Médio."] },
  { year: "2012", paragraphs: ["Teve oficialmente emitida a declaração de conclusão do Ensino Médio, conforme os registros institucionais."] },
  { year: "2013", paragraphs: ["Ano de transição e preparação para os estudos superiores."] },
  { year: "2014", paragraphs: ["Iniciou sua formação acadêmica superior na Faculdade de Ciências e Tecnologia da Bahia (FACITE), na graduação em Pedagogia, e, no mesmo período, deu início à formação em Teologia pela Faculdade Regional do Riachão do Jacuípe (FARJ)."] },
  { year: "2015", paragraphs: ["Deu continuidade à formação acadêmica nas duas instituições."] },
  { year: "2016", paragraphs: ["Prosseguiu regularmente nos estudos superiores iniciados."] },
  { year: "2017", paragraphs: ["Manteve a trajetória acadêmica até as etapas finais das graduações."] },
  { year: "2018", paragraphs: ["Concluiu a graduação em Pedagogia pela Faculdade de Ciências e Tecnologia da Bahia (FACITE) e a graduação em Teologia pela Faculdade Regional do Riachão do Jacuípe (FARJ)."] },
  { year: "2019", paragraphs: ["Deu início à especialização em Psicopedagogia Institucional e Clínica pela Faculdade Regional do Riachão do Jacuípe (FARJ)."] },
  { year: "2020", paragraphs: ["Finalizou a especialização em Psicopedagogia Institucional e Clínica pela Faculdade Regional do Riachão do Jacuípe (FARJ)."] },
  { year: "2021", paragraphs: ["Ano dedicado a experiências complementares e consolidação do aprendizado."] },
  { year: "2022", paragraphs: ["Participou de estudos e atividades correlatas às áreas de Pedagogia e Teologia."] },
  { year: "2023", paragraphs: ["Preparou-se para novas publicações e aprofundamento acadêmico."] },
  { year: "2024", paragraphs: ["Publicou sua primeira obra, Donzela Cristã, em 7 de julho de 2024, marcando sua atuação no campo editorial."] },
  { year: "2025", paragraphs: [
    "Iniciou sua formação em Letras pela Faculdade de Administração, Humanas e Exatas (UNIFAHE) e, simultaneamente, iniciou a especialização em Língua Inglesa na mesma instituição.",
    "Nesse mesmo ano, iniciou também sua especialização em Teologia Reformada pelo Instituto Reformado de São Paulo, estudando com professores de renome do cristianismo reformado, como o Dr. Augustus Nicodemus Lopes, Dr. Leandro Lima, Dr. Felipe Fontes e Dr. Hermisten Maia.",
  ] },
  { year: "2025", paragraphs: ["Publicou sua obra Martinho Lutero: Série Os Reformadores – Livro I, em 24 de março de 2025."] },
  { year: "2025", paragraphs: ["Publicou sua obra Ulrico Zwinglio: Série Os Reformadores – Livro II, em 25 de março de 2025."] },
  { year: "2025", paragraphs: ["Publicou sua obra Filipe Melanchthon: Série Os Reformadores – Livro III, em 25 de março de 2025."] },
  { year: "2025", paragraphs: ["Publicou sua obra Guilherme Farel: Série Os Reformadores – Livro IV, em 25 de março de 2025."] },
  { year: "2025", paragraphs: ["Publicou sua obra Pregação Reformada: Série Os Reformadores – Livro IX, em 26 de março de 2025."] },
  { year: "2025", paragraphs: ["Publicou sua obra O Sequestro da Cruz, em 14 de maio de 2025."] },
  { year: "2025", paragraphs: ["Publicou sua obra Alcateia Infernal, em 26 de julho de 2025."] },
  { year: "2025", paragraphs: ["Publicou sua obra O Homem Aceso, em 24 de dezembro de 2025."] },
];

const navYears = Array.from(new Set(entries.map((e) => e.year)));

const slugify = (year: string, idx: number) => `ano-${year}-${idx}`;

const BiographicalTimeline = () => {
  const [activeNav, setActiveNav] = useState<string>(navYears[0]);
  const itemRefs = useRef<Record<string, HTMLElement | null>>({});

  const handleNavClick = (year: string) => {
    setActiveNav(year);
    const idx = entries.findIndex((e) => e.year === year);
    if (idx >= 0) {
      const el = itemRefs.current[slugify(year, idx)];
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (obs) => {
        const visible = obs
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target) {
          const year = (visible.target as HTMLElement).dataset.year;
          if (year) {
            // pick closest nav year <= current
            const candidate = [...navYears].reverse().find((y) => parseInt(y) <= parseInt(year));
            if (candidate) setActiveNav(candidate);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.5, 1] }
    );
    Object.values(itemRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-3xl mx-auto py-6">
      <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-1">
        Linha do Tempo Biográfica
      </h2>
      <p className="font-body text-sm text-muted-foreground mb-6">
        Franklin Rafael
      </p>

      <nav className="flex flex-wrap gap-1.5 border-b border-border pb-4 mb-10 sticky top-16 md:top-20 bg-background/95 backdrop-blur z-10 -mx-2 px-2 py-2">
        {navYears.map((y) => (
          <button
            key={y}
            onClick={() => handleNavClick(y)}
            className={`font-body text-xs md:text-sm px-3 py-1 border rounded-sm transition-colors ${
              activeNav === y
                ? "bg-foreground text-background border-foreground"
                : "border-border text-muted-foreground hover:bg-foreground hover:text-background hover:border-foreground"
            }`}
          >
            {y}
          </button>
        ))}
      </nav>

      {entries.map((entry, idx) => {
        const id = slugify(entry.year, idx);
        return (
          <article
            key={id}
            id={id}
            data-year={entry.year}
            ref={(el) => (itemRefs.current[id] = el)}
            className="grid md:grid-cols-[120px_1fr] gap-3 md:gap-8 mb-8 pb-8 border-b border-border scroll-mt-32"
          >
            <div className="md:text-right">
              <span className="block font-body text-2xl md:text-3xl font-bold text-foreground">
                {entry.year}
              </span>
            </div>
            <div className="pt-1 space-y-3">
              {entry.paragraphs.map((p, i) => (
                <p key={i} className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default BiographicalTimeline;
