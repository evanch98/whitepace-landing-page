import { Button, Container } from "@/components/atoms";
import { HeroImage, Section1Text } from "@/components/molecules";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const ProjectManagementSection = () => {
  return (
    <div className="w-full relative">
      <Container className="text-accent-black">
        <div className="flex items-center lg:items-start flex-col gap-y-[60px]">
          <Section1Text />
          <div className="z-10">
            <Button size="with-icon">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <HeroImage imgSrc="/assets/team-work.svg" />
      </Container>
      <div className="absolute top-10 -left-[40%] h-[168px] w-[295px] md:w-[356px] md:h-[270px] md:top-20 md:-left-[17%] lg:w-[273px] lg:h-[245px] lg:-left-[6%] xl:w-[569px] xl:h-[440px] xl:top-0 xl:-left-[20%] 2xl:w-[602px] 2xl:h-[448px] 2xl:top-64 2xl:-left-[5%]">
        <Image
          src="/assets/web.svg"
          fill
          className="object-fill"
          alt="Decoration"
        />
      </div>
    </div>
  );
};
