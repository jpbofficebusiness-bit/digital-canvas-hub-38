export type Book = {
  slug: string;
  title: string;
  subtitle?: string;
  img: string;
  link?: string;
  sinopse: string;
  soon?: boolean;
};

export type Section = {
  slug: string;
  category: string;
  description: string;
  books: Book[];
};

export const sections: Section[] = [
  {
    slug: "teologia",
    category: "Teologia",
    description:
      "Obras de teologia bíblica, apologética e espiritualidade cristã, escritas com rigor doutrinário e linguagem acessível.",
    books: [
      {
        slug: "donzela-crista",
        title: "Donzela Cristã",
        subtitle: "Toda a feminilidade devotada a Deus",
        img: "https://storage.googleapis.com/images.uiclap.com/capa/ua60526.jpg",
        link: "https://loja.uiclap.com/titulo/ua60526/",
        sinopse:
          "Em meio a um mundo confuso e maligno, a jovem cristã se vê como uma mulher que precisa firmar-se em Deus a cada dia. Nunca foi tão necessário estar em guarda contra os diversos males, bem como preservar-se pura em uma era tão promíscua e subjetivista. Neste livro profundo, caloroso e instigante, Franklin Rafael trata sobre o verdadeiro perfil da jovem cristã.",
      },
      {
        slug: "o-sequestro-da-cruz",
        title: "O Sequestro da Cruz",
        subtitle: "Projeto Coração Piedoso",
        img: "https://storage.googleapis.com/images.uiclap.com/capa/ua95894.jpg",
        link: "https://loja.uiclap.com/titulo/ua95894/",
        sinopse:
          "Assombroso, robusto e firme — este livro irrompe sobre a consciência como trovões e relâmpagos. Com seu jeito teológico, filosófico, destemido e biblista, Franklin Rafael não escreve como os apáticos, mas como um pregoeiro em chamas. Ele não oferece pontos de vista, ele denuncia. Não dialoga com heresias — ele as destrona.",
      },
      {
        slug: "o-homem-aceso",
        title: "O Homem Aceso",
        subtitle: "Projeto Coração Piedoso",
        img: "https://storage.googleapis.com/images.uiclap.com/capa/ua126109.jpg",
        link: "https://loja.uiclap.com/titulo/ua126109/",
        sinopse:
          "Mais do que uma obra colossal, isso é uma teologia da devoção. Um monumento literário, biblista, histórico, filosófico e prático, combinado ao estilo metódico de um professor e à performance de um pregoeiro em chamas. Aos que desejam saber qual é a teologia de Franklin Rafael, O Homem Aceso é o livro.",
      },
    ],
  },
  {
    slug: "filosofia-e-educacao",
    category: "Filosofia e Educação",
    description:
      "Reflexões sobre pensamento crítico, cultura e o papel da educação clássica na formação do ser humano livre.",
    books: [
      {
        slug: "os-28-burros",
        title: "Os 28 Burros e o Caos da Burrice",
        img: "",
        sinopse: "Em breve.",
        soon: true,
      },
    ],
  },
  {
    slug: "serie-os-reformadores",
    category: "Série Os Reformadores",
    description:
      "Uma série monumental sobre os gigantes da Reforma Protestante — suas vidas, pregações e o legado que transformou a cristandade.",
    books: [
      {
        slug: "martinho-lutero",
        title: "Martinho Lutero — Livro I",
        img: "https://storage.googleapis.com/images.uiclap.com/capa/ua88503.jpg",
        link: "https://loja.uiclap.com/titulo/ua88503/",
        sinopse:
          "No alvorecer do século XVI, um monge alemão desafiou as trevas de um mundo subjugado pelo medo e pela superstição. Seu nome ecoaria pelos séculos como um trovão que abalou a cristandade. Empunhando a espada da Palavra de Deus, Lutero confrontou o império mais poderoso da terra.",
      },
      {
        slug: "ulrico-zuinglio",
        title: "Ulrico Zuínglio — Livro II",
        img: "https://storage.googleapis.com/images.uiclap.com/capa/ua88665.jpg",
        link: "https://loja.uiclap.com/titulo/ua88665/",
        sinopse:
          "Ele ergueu a voz contra os gigantes de seu tempo. Com a pena e a espada, combateu a tirania espiritual, desafiou Roma e reformou Zurique. Ulrico Zuínglio não apenas pregou a verdade — ele a viveu, defendeu e por ela morreu.",
      },
      {
        slug: "filipe-melancton",
        title: "Filipe Melâncton — Livro III",
        img: "https://storage.googleapis.com/images.uiclap.com/capa/ua88667.jpg",
        link: "https://loja.uiclap.com/titulo/ua88667/",
        sinopse:
          "Em meio às chamas da Reforma Protestante, um nome ressoa como a mente estratégica por trás do renascimento teológico. Melâncton foi o braço direito de Lutero e o arquiteto de uma nova era no pensamento cristão.",
      },
      {
        slug: "guilherme-farel",
        title: "Guilherme Farel — Livro IV",
        img: "https://storage.googleapis.com/images.uiclap.com/capa/ua88721.jpg",
        link: "https://loja.uiclap.com/titulo/ua88721/",
        sinopse:
          "Ele pregou a verdade como um trovão. Sua voz despertou cidades, enfrentou reis e desafiou o papado corrupto com coragem feroz. Sem Farel, não haveria Genebra reformada. Sem sua ousadia, Calvino talvez nunca tivesse sido o líder que conhecemos.",
      },
      {
        slug: "pregacao-reformada",
        title: "Pregação Reformada — Livro IX",
        img: "https://storage.googleapis.com/images.uiclap.com/capa/ua88810.jpg",
        link: "https://loja.uiclap.com/titulo/ua88810/",
        sinopse:
          "No coração do século XVI, ergueram-se Os Reformadores — gigantes da pregação e arautos da verdade — para resgatar a pureza do Evangelho. O que é, afinal, a pregação reformada? Franklin Rafael ergue aqui uma obra monumental em resposta.",
      },
    ],
  },
  {
    slug: "alta-fantasia",
    category: "Alta Fantasia",
    description:
      "Literatura épica ambientada em mundos imaginários, permeada de filosofia, teologia e personagens de caráter inegável.",
    books: [
      {
        slug: "alcateia-infernal",
        title: "Alcateia Infernal",
        img: "https://storage.googleapis.com/images.uiclap.com/capa/ua108467.jpg",
        link: "https://loja.uiclap.com/titulo/ua108467/",
        sinopse:
          "Um épico-pastoral, um terror rural e um drama teológico. Um surto de lobos vorazes invade um Vilarejo. Quando se dão conta, um grupo de pastores decide fazer algo inédito por toda a Luméria, no grande país da Torvia. Uma obra que o deixará perplexo diante de verdades chocantes.",
      },
    ],
  },
];

export const getSection = (slug: string) =>
  sections.find((s) => s.slug === slug);

export const getBook = (categorySlug: string, bookSlug: string) => {
  const section = getSection(categorySlug);
  if (!section) return null;
  const index = section.books.findIndex((b) => b.slug === bookSlug);
  if (index === -1) return null;
  return {
    section,
    book: section.books[index],
    index,
    prev: section.books[index - 1] ?? null,
    next: section.books[index + 1] ?? null,
  };
};
