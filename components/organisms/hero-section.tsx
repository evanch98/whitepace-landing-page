import { Button, Container } from "@/components/atoms";
import { HeroBackground, HeroImage, HeroText } from "@/components/molecules";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <Container className="bg-secondary text-white h-full flex flex-col items-center justify-center gap-y-[100px] lg:flex-row py-[80px] md:pt-[140px] md:pb-[100px] lg:py-[140px] xl:py-[100px] 2xl:py-[140px]">
        <div className="flex items-center lg:items-start flex-col gap-y-[60px]">
          <HeroText />
          <div className="z-10">
            <Button size="with-icon">
              Try Whitepace free
              <ArrowRight className="w-[10px] h-[10px]" />
            </Button>
          </div>
        </div>
        <HeroImage />
      </Container>
      <div className="absolute top-1/2 -translate-y-[440px] md:-translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-[633px] md:h-[693px] lg:h-[422px] xl:h-[433px] 2xl:h-[547px]">
        <HeroBackground />
      </div>
    </div>
  );
};
