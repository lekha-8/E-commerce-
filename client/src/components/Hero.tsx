import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage1 from "@assets/generated_images/Modern_home_office_lifestyle_da424628.png";
import heroImage2 from "@assets/generated_images/Outdoor_adventure_lifestyle_scene_baad5684.png";

const heroSlides = [
  {
    image: heroImage1,
    title: "Elevate Your Workspace",
    subtitle: "Premium products for modern professionals",
    cta: "Shop Now",
  },
  {
    image: heroImage2,
    title: "Adventure Awaits",
    subtitle: "Gear up for your next journey",
    cta: "Explore",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>

          <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl text-center text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg" data-testid={`text-hero-title-${index}`}>
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-white/90 drop-shadow-md" data-testid={`text-hero-subtitle-${index}`}>
                {slide.subtitle}
              </p>
              <Button
                size="lg"
                className="bg-primary/90 backdrop-blur-md hover:bg-primary text-lg px-8"
                data-testid={`button-hero-cta-${index}`}
              >
                {slide.cta}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white"
        onClick={goToPrevious}
        data-testid="button-hero-prev"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white"
        onClick={goToNext}
        data-testid="button-hero-next"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
            data-testid={`button-hero-dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
