import { Button, Container } from "@/components/atoms";
import { HeroBackground, HeroImage, HeroText } from "@/components/molecules";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <Container className="bg-secondary text-white">
        <div className="flex items-center lg:items-start flex-col gap-y-[60px]">
          <HeroText />
          <div className="z-10">
            <Button size="with-icon">
              Try Whitepace free
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <HeroImage imgSrc="/assets/hero.svg" />
      </Container>
      <div className="absolute top-1/2 -translate-y-[440px] md:-translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-[633px] md:h-[693px] lg:h-[422px] xl:h-[433px] 2xl:h-[547px]">
        <HeroBackground />
      </div>
    </div>
  );
};
