import { useEffect } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import donzelaHero from "@/assets/hero-donzela-crista.png";
import alcateiaHero from "@/assets/hero-alcateia-infernal.png";
import sequestroHero from "@/assets/hero-sequestro-cruz.png";
import homemAcesoHero from "@/assets/hero-homem-aceso.png";

type SlideType = {
  id: number;
  title: string;
  image: string;
  to: string;
  // Área clicável sobre o "Saiba Mais" desenhado na imagem (percentuais do banner)
  cta: { top: string; left: string; width: string; height: string };
};

// A posição do "Saiba Mais" é praticamente a mesma nas 4 artes.
const defaultCta = { top: "70%", left: "31%", width: "13%", height: "16%" };

const slides: SlideType[] = [
  {
    id: 1,
    title: "DONZELA CRISTÃ",
    image: donzelaHero,
    to: "/obras/teologia/donzela-crista",
    cta: defaultCta,
  },
  {
    id: 2,
    title: "ALCATEIA INFERNAL",
    image: alcateiaHero,
    to: "/obras/alta-fantasia/alcateia-infernal",
    cta: defaultCta,
  },
  {
    id: 3,
    title: "O SEQUESTRO DA CRUZ",
    image: sequestroHero,
    to: "/obras/teologia/o-sequestro-da-cruz",
    cta: defaultCta,
  },
  {
    id: 4,
    title: "O HOMEM ACESO",
    image: homemAcesoHero,
    to: "/obras/teologia/o-homem-aceso",
    cta: defaultCta,
  },
];

const HeroCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: false }),
  ]);

  useEffect(() => {
    // Força o autoplay a iniciar assim que o componente monta
  }, []);

  return (
    <section className="relative w-full h-auto overflow-hidden bg-black">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-auto object-contain object-center"
              />

              {/* Área clicável invisível sobre o "Saiba Mais" da própria imagem */}
              <Link
                to={slide.to}
                aria-label={`${slide.title} — Saiba Mais`}
                className="absolute z-10"
                style={{
                  top: slide.cta.top,
                  left: slide.cta.left,
                  width: slide.cta.width,
                  height: slide.cta.height,
                }}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default HeroCarousel;
