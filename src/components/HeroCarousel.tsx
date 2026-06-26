import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

import donzelaHero from "@/assets/hero-donzela-crista.png.asset.json";
import alcateiaHero from "@/assets/hero-alcateia-infernal.png.asset.json";
import sequestroHero from "@/assets/hero-sequestro-cruz.png.asset.json";
import homemAcesoHero from "@/assets/hero-homem-aceso.png.asset.json";

type SlideType = {
  id: number;
  title: string;
  cta: string;
  image: string;
  to: string;
};

const slides: SlideType[] = [
  {
    id: 1,
    title: "DONZELA CRISTÃ",
    cta: "Saiba Mais",
    image: donzelaHero.url,
    to: "/obras/teologia/donzela-crista",
  },
  {
    id: 2,
    title: "ALCATEIA INFERNAL",
    cta: "Saiba Mais",
    image: alcateiaHero.url,
    to: "/obras/alta-fantasia/alcateia-infernal",
  },
  {
    id: 3,
    title: "O SEQUESTRO DA CRUZ",
    cta: "Saiba Mais",
    image: sequestroHero.url,
    to: "/obras/teologia/o-sequestro-da-cruz",
  },
  {
    id: 4,
    title: "O HOMEM ACESO",
    cta: "Saiba Mais",
    image: homemAcesoHero.url,
    to: "/obras/teologia/o-homem-aceso",
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
            <div
              key={slide.id}
              className="flex-[0_0_100%] min-w-0 relative"
            >
              {/* Banner image — object-contain so nothing is cropped */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-auto object-contain object-center"
              />

              {/* CTA overlay — transparent button below subtitle */}
              <div className="absolute bottom-[18%] left-[42%] -translate-x-1/2">
                <Button
                  asChild
                  size="sm"
                  className="bg-transparent border border-white text-white hover:bg-white/10 font-body rounded-none px-4 py-2 text-xs sm:text-sm md:text-base sm:px-6 sm:py-3"
                >
                  <Link to={slide.to}>{slide.cta}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
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
