import { sections } from "@/data/books";

export type SearchEntry = {
  title: string;
  subtitle?: string;
  path: string;
  group: string;
  keywords: string[];
};

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const staticEntries: SearchEntry[] = [
  {
    title: "Notícias Recentes",
    subtitle: "Novidades e atualizações",
    path: "/#noticias",
    group: "Seções",
    keywords: [
      "noticia", "noticias", "novidade", "novidades", "atualizacao",
      "atualizacoes", "ultimas", "recentes", "premio", "medalha", "blog",
    ],
  },
  {
    title: "O Autor",
    subtitle: "Conheça Franklin Rafael",
    path: "/sobre-franklin-rafael",
    group: "Autor",
    keywords: [
      "autor", "sobre", "quem e", "quem", "franklin", "rafael", "escritor",
      "teologo", "professor", "pregador", "vida", "historia", "perfil",
    ],
  },
  {
    title: "Biografia",
    subtitle: "Trajetória, religião e influências",
    path: "/o-autor/biografia",
    group: "Autor",
    keywords: [
      "biografia", "bio", "vida", "trajetoria", "formacao", "academica",
      "religiao", "influencias", "galeria", "fotos", "historia de vida",
    ],
  },
  {
    title: "Citações",
    subtitle: "Frases e pensamentos",
    path: "/o-autor/citacoes",
    group: "Autor",
    keywords: [
      "citacao", "citacoes", "frase", "frases", "pensamento", "pensamentos",
      "aforismo", "quotes", "dito", "reflexao",
    ],
  },
  {
    title: "Linha do Tempo Biográfica",
    subtitle: "Ano a ano",
    path: "/o-autor/linha-do-tempo",
    group: "Autor",
    keywords: [
      "linha do tempo", "timeline", "cronologia", "anos", "datas", "historico",
    ],
  },
  {
    title: "Informações Acadêmicas",
    subtitle: "Formação e titulações",
    path: "/informacoes-academicas",
    group: "Autor",
    keywords: [
      "academico", "academicas", "faculdade", "graduacao", "pos graduacao",
      "estudos", "diploma", "formacao", "universidade", "letras", "teologia",
      "pedagogia",
    ],
  },
  {
    title: "Todos os Seus Livros",
    subtitle: "Coleção completa de obras",
    path: "/obras",
    group: "Obras",
    keywords: [
      "obras", "livros", "livro", "colecao", "catalogo", "publicacoes",
      "titulos", "ler", "comprar",
    ],
  },
  {
    title: "Por Vir",
    subtitle: "Obras em escrita",
    path: "/por-vir",
    group: "Obras",
    keywords: [
      "por vir", "escrevendo", "em breve", "futuro", "lancamento",
      "lancamentos", "novo livro", "proximos",
    ],
  },
  {
    title: "Obra-Prima",
    subtitle: "Os Espadeiros",
    path: "/obra-prima",
    group: "Obras",
    keywords: [
      "obra prima", "espadeiros", "espada", "fantasia", "epico", "saga",
    ],
  },
  {
    title: "Perguntas Frequentes",
    subtitle: "FAQ",
    path: "/faq",
    group: "Ajuda",
    keywords: [
      "faq", "perguntas", "duvidas", "frequentes", "ajuda", "contato",
      "suporte", "como", "onde comprar",
    ],
  },
  {
    title: "Canal no YouTube",
    subtitle: "Franklin Rafael Oficial",
    path: "https://www.youtube.com/@franklinrafaeloficial",
    group: "Links",
    keywords: [
      "youtube", "canal", "video", "videos", "pregacao", "pregacoes",
      "assistir", "live",
    ],
  },
];

const bookEntries: SearchEntry[] = sections.flatMap((section) => {
  const sectionEntry: SearchEntry = {
    title: section.category,
    subtitle: `${section.books.length} livro(s)`,
    path: `/obras/${section.slug}`,
    group: "Obras",
    keywords: [
      section.category,
      section.slug.replace(/-/g, " "),
      section.description,
    ],
  };

  const books = section.books
    .filter((book) => !book.soon)
    .map<SearchEntry>((book) => ({
      title: book.title,
      subtitle: section.category,
      path: `/obras/${section.slug}/${book.slug}`,
      group: "Livros",
      keywords: [
        book.title,
        book.slug.replace(/-/g, " "),
        book.subtitle ?? "",
        section.category,
        book.sinopse,
      ],
    }));

  return [sectionEntry, ...books];
});

export const searchEntries: SearchEntry[] = [...staticEntries, ...bookEntries];

const indexed = searchEntries.map((entry) => ({
  entry,
  haystack: normalize(
    [entry.title, entry.subtitle ?? "", ...entry.keywords].join(" ")
  ),
  title: normalize(entry.title),
}));

export const searchSite = (rawQuery: string): SearchEntry[] => {
  const query = normalize(rawQuery);
  if (!query) return [];

  const terms = query.split(" ").filter(Boolean);

  return indexed
    .map(({ entry, haystack, title }) => {
      let score = 0;
      if (title === query) score += 100;
      if (title.startsWith(query)) score += 50;
      if (title.includes(query)) score += 30;
      if (haystack.includes(query)) score += 20;

      for (const term of terms) {
        if (term.length < 3) continue;
        if (title.includes(term)) score += 10;
        if (haystack.includes(term)) score += 5;
        // partial match (radical of the word)
        const radical = term.slice(0, Math.max(4, term.length - 2));
        if (radical.length >= 4 && haystack.includes(radical)) score += 3;
      }

      return { entry, score };
    })
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 12)
    .map((result) => result.entry);
};
