import { Button, Container } from "@/components/atoms";
import { HeroImage, Section3Text } from "@/components/molecules";
import { ArrowRight } from "lucide-react";

export const CustomizeSection = () => {
  return (
    <div className="w-full">
      <Container className="text-white bg-secondary lg:justify-center lg:gap-x-[60px] 2xl:gap-x-[98px] gap-y-[60px]">
        <div className="flex items-center lg:items-start flex-col gap-y-[60px]">
          <Section3Text />
          <div className="z-10">
            <Button size="with-icon">
              Let&apos; Go
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <HeroImage imgSrc="/assets/customize.svg" />
      </Container>
    </div>
  );
};
