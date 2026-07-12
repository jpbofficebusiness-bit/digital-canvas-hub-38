import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import donzelaHero from "@/assets/hero-donzela-crista.png.asset.json";
import alcateiaHero from "@/assets/hero-alcateia-infernal.png.asset.json";
import sequestroHero from "@/assets/hero-sequestro-cruz.png.asset.json";
import homemAcesoHero from "@/assets/hero-homem-aceso.png.asset.json";

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
    image: donzelaHero.url,
    to: "/obras/teologia/donzela-crista",
    cta: defaultCta,
  },
  {
    id: 2,
    title: "ALCATEIA INFERNAL",
    image: alcateiaHero.url,
    to: "/obras/alta-fantasia/alcateia-infernal",
    cta: defaultCta,
  },
  {
    id: 3,
    title: "O SEQUESTRO DA CRUZ",
    image: sequestroHero.url,
    to: "/obras/teologia/o-sequestro-da-cruz",
    cta: defaultCta,
  },
  {
    id: 4,
    title: "O HOMEM ACESO",
    image: homemAcesoHero.url,
    to: "/obras/teologia/o-homem-aceso",
    cta: defaultCta,
  },
];

const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

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

      {/* Dots Indicator */}
      <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-primary-foreground scale-110"
                : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
