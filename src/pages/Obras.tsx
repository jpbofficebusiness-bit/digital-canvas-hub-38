import { useState } from "react";
import { X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

type Book = {
  title: string;
  img: string;
  link?: string;
  sinopse: string;
  soon?: boolean;
};

type Section = {
  category: string;
  description: string;
  books: Book[];
};

const sections: Section[] = [
  {
    category: "Teologia",
    description:
      "Obras de teologia bíblica, apologética e espiritualidade cristã, escritas com rigor doutrinário e linguagem acessível.",
    books: [
      {
        title: "Donzela Cristã",
        img: "https://storage.googleapis.com/images.uiclap.com/capa/ua60526.jpg",
        link: "https://loja.uiclap.com/titulo/ua60526/",
        sinopse:
          "Em meio a um mundo confuso e maligno, a jovem cristã se vê como uma mulher que precisa firmar-se em Deus a cada dia. Nunca foi tão necessário estar em guarda contra os diversos males, bem como preservar-se pura em uma era tão promíscua e subjetivista. Neste livro profundo, caloroso e instigante, Franklin Rafael trata sobre o verdadeiro perfil da jovem cristã.",
      },
      {
        title: "O Sequestro da Cruz",
        img: "https://storage.googleapis.com/images.uiclap.com/capa/ua95894.jpg",
        link: "https://loja.uiclap.com/titulo/ua95894/",
        sinopse:
          "Assombroso, robusto e firme — este livro irrompe sobre a consciência como trovões e relâmpagos. Com seu jeito teológico, filosófico, destemido e biblista, Franklin Rafael não escreve como os apáticos, mas como um pregoeiro em chamas. Ele não oferece pontos de vista, ele denuncia. Não dialoga com heresias — ele as destrona.",
      },
      {
        title: "O Homem Aceso",
        img: "https://storage.googleapis.com/images.uiclap.com/capa/ua126109.jpg",
        link: "https://loja.uiclap.com/titulo/ua126109/",
        sinopse:
          "Mais do que uma obra colossal, isso é uma teologia da devoção. Um monumento literário, biblista, histórico, filosófico e prático, combinado ao estilo metódico de um professor e à performance de um pregoeiro em chamas. Aos que desejam saber qual é a teologia de Franklin Rafael, O Homem Aceso é o livro.",
      },
    ],
  },
  {
    category: "Filosofia e Educação",
    description:
      "Reflexões sobre pensamento crítico, cultura e o papel da educação clássica na formação do ser humano livre.",
    books: [
      {
        title: "Os 28 Burros e o Caos da Burrice",
        img: "",
        sinopse: "Em breve.",
        soon: true,
      },
    ],
  },
  {
    category: "Série Os Reformadores",
    description:
      "Uma série monumental sobre os gigantes da Reforma Protestante — suas vidas, pregações e o legado que transformou a cristandade.",
    books: [
      {
        title: "Martinho Lutero — Livro I",
        img: "https://storage.googleapis.com/images.uiclap.com/capa/ua88503.jpg",
        link: "https://loja.uiclap.com/titulo/ua88503/",
        sinopse:
          "No alvorecer do século XVI, um monge alemão desafiou as trevas de um mundo subjugado pelo medo e pela superstição. Seu nome ecoaria pelos séculos como um trovão que abalou a cristandade. Empunhando a espada da Palavra de Deus, Lutero confrontou o império mais poderoso da terra.",
      },
      {
        title: "Ulrico Zuínglio — Livro II",
        img: "https://storage.googleapis.com/images.uiclap.com/capa/ua88665.jpg",
        link: "https://loja.uiclap.com/titulo/ua88665/",
        sinopse:
          "Ele ergueu a voz contra os gigantes de seu tempo. Com a pena e a espada, combateu a tirania espiritual, desafiou Roma e reformou Zurique. Ulrico Zuínglio não apenas pregou a verdade — ele a viveu, defendeu e por ela morreu.",
      },
      {
        title: "Filipe Melâncton — Livro III",
        img: "https://storage.googleapis.com/images.uiclap.com/capa/ua88667.jpg",
        link: "https://loja.uiclap.com/titulo/ua88667/",
        sinopse:
          "Em meio às chamas da Reforma Protestante, um nome ressoa como a mente estratégica por trás do renascimento teológico. Melâncton foi o braço direito de Lutero e o arquiteto de uma nova era no pensamento cristão.",
      },
      {
        title: "Guilherme Farel — Livro IV",
        img: "https://storage.googleapis.com/images.uiclap.com/capa/ua88721.jpg",
        link: "https://loja.uiclap.com/titulo/ua88721/",
        sinopse:
          "Ele pregou a verdade como um trovão. Sua voz despertou cidades, enfrentou reis e desafiou o papado corrupto com coragem feroz. Sem Farel, não haveria Genebra reformada. Sem sua ousadia, Calvino talvez nunca tivesse sido o líder que conhecemos.",
      },
      {
        title: "Pregação Reformada — Livro IX",
        img: "https://storage.googleapis.com/images.uiclap.com/capa/ua88810.jpg",
        link: "https://loja.uiclap.com/titulo/ua88810/",
        sinopse:
          "No coração do século XVI, ergueram-se Os Reformadores — gigantes da pregação e arautos da verdade — para resgatar a pureza do Evangelho. O que é, afinal, a pregação reformada? Franklin Rafael ergue aqui uma obra monumental em resposta.",
      },
    ],
  },
  {
    category: "Alta Fantasia",
    description:
      "Literatura épica ambientada em mundos imaginários, permeada de filosofia, teologia e personagens de caráter inegável.",
    books: [
      {
        title: "Alcateia Infernal",
        img: "https://storage.googleapis.com/images.uiclap.com/capa/ua108467.jpg",
        link: "https://loja.uiclap.com/titulo/ua108467/",
        sinopse:
          "Um épico-pastoral, um terror rural e um drama teológico. Um surto de lobos vorazes invade um Vilarejo. Quando se dão conta, um grupo de pastores decide fazer algo inédito por toda a Luméria, no grande país da Torvia. Uma obra que o deixará perplexo diante de verdades chocantes.",
      },
    ],
  },
];

type SelectedBook = Book & { category: string };

const BookCard = ({
  book,
  onClick,
}: {
  book: Book;
  onClick: () => void;
}) => {
  const handleClick = () => {
    if (!book.soon) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
    >
      <div className="relative aspect-[2/3] overflow-hidden bg-muted shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
        {book.soon ? (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <span className="font-heading text-muted-foreground text-sm">
              Em breve
            </span>
          </div>
        ) : (
          <img
            src={book.img}
            alt={book.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        )}
        {book.soon && (
          <span className="absolute top-2 right-2 bg-foreground/80 text-background text-[10px] font-body uppercase tracking-wider px-2 py-1 rounded">
            Em breve
          </span>
        )}
      </div>
      <h3 className="mt-3 font-heading text-base text-foreground leading-snug">
        {book.title}
      </h3>
    </button>
  );
};

const BookModal = ({
  book,
  onClose,
}: {
  book: SelectedBook;
  onClose: () => void;
}) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-[#faf9f7] max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 hover:bg-background text-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="grid md:grid-cols-[260px_1fr] gap-6 md:gap-8 p-6 md:p-8">
          <div className="aspect-[2/3] bg-muted overflow-hidden shadow-md">
            <img
              src={book.img}
              alt={book.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
              {book.category}
            </span>
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4 leading-tight">
              {book.title}
            </h2>
            <p className="font-body text-foreground/80 leading-relaxed text-sm md:text-base mb-6">
              {book.sinopse}
            </p>
            {book.link && (
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center self-start px-6 py-3 bg-foreground text-background font-body text-sm tracking-wider uppercase hover:bg-foreground/90 transition-colors rounded-sm"
              >
                Saiba mais
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Obras = () => {
  const [selected, setSelected] = useState<SelectedBook | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f7]">
      <Header />
      <main className="flex-1 pt-24 md:pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <header className="mb-12 md:mb-16 text-center">
            <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-3">
              Obras
            </h1>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              A coleção completa dos livros de Franklin Rafael, organizada por
              categoria.
            </p>
          </header>

          {sections.map((section) => (
            <section key={section.category} className="mb-16 md:mb-20">
              <div className="mb-8 border-b border-border pb-4">
                <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-2">
                  {section.category}
                </h2>
                <p className="font-body text-sm md:text-base text-muted-foreground max-w-3xl">
                  {section.description}
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
                {section.books.map((book) => (
                  <BookCard
                    key={book.title}
                    book={book}
                    onClick={() =>
                      setSelected({ ...book, category: section.category })
                    }
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      {selected && (
        <BookModal book={selected} onClose={() => setSelected(null)} />
      )}
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Obras;
