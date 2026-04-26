import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";

import donzelaCristaCover from "@/assets/donzela-crista-cover.png";
import donzelaCristaBg from "@/assets/donzela-crista-bg.jpg";
import alcateiaInfernalCover from "@/assets/alcateia-infernal-cover.png";
import alcateiaInfernalBg from "@/assets/alcateia-infernal-bg.jpg";
import sequestroCruzCover from "@/assets/sequestro-cruz-cover.png";
import sequestroCruzBg from "@/assets/sequestro-cruz-bg.jpg";
import homemAcesoCover from "@/assets/homem-aceso-cover.png";
import homemAcesoBg from "@/assets/homem-aceso-bg.jpg";

type SlideType = {
  id: number;
  title: string;
  subtitle: string;
  cta: string;
  image: string;
  bookCover: string;
  bookDescription: string;
  to: string;
};

const slides: SlideType[] = [
  {
    id: 1,
    title: "Donzela Cristã",
    subtitle: "Toda A Feminilidade Devotada À Deus",
    cta: "SAIBA MAIS",
    image: donzelaCristaBg,
    bookCover: donzelaCristaCover,
    bookDescription: "",
    to: "/obras/teologia/donzela-crista",
  },
  {
    id: 2,
    title: "Alcateia Infernal",
    subtitle: "Quando lobos atacam o aprisco",
    cta: "SAIBA MAIS",
    image: alcateiaInfernalBg,
    bookCover: alcateiaInfernalCover,
    bookDescription: "",
    to: "/obras/alta-fantasia/alcateia-infernal",
  },
  {
    id: 3,
    title: "O Sequestro da Cruz",
    subtitle: "Projeto Coração Piedoso",
    cta: "SAIBA MAIS",
    image: sequestroCruzBg,
    bookCover: sequestroCruzCover,
    bookDescription: "",
    to: "/obras/teologia/o-sequestro-da-cruz",
  },
  {
    id: 4,
    title: "O Homem Aceso",
    subtitle: "Projeto Coração Piedoso",
    cta: "SAIBA MAIS",
    image: homemAcesoBg,
    bookCover: homemAcesoCover,
    bookDescription: "",
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
    <section className="relative w-full h-[80vh] md:h-[70vh] overflow-hidden">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-[0_0_100%] min-w-0 h-full relative"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center justify-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-6 md:px-16 max-w-6xl animate-fade-in">
                  {/* Book Cover */}
                  <div className="flex-shrink-0">
                    <img
                      src={slide.bookCover}
                      alt={slide.title}
                      className="w-48 md:w-64 lg:w-80 h-auto drop-shadow-2xl rounded-sm"
                      style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                    />
                  </div>
                  {/* Book Info */}
                  <div className="text-center md:text-left text-primary-foreground max-w-xl">
                    <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight drop-shadow-lg">
                      {slide.title}
                    </h1>
                    <p className="font-heading text-lg md:text-xl mb-6 italic opacity-90 drop-shadow-md">
                      {slide.subtitle}
                    </p>
                    <div className="mb-8" />
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-body tracking-wider"
                    >
                      <Link to={slide.to}>{slide.cta}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
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
