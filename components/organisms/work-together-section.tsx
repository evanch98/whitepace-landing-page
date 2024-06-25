import { Button, Container } from "@/components/atoms";
import { CircularAvatars, Section2Text } from "@/components/molecules";
import { ArrowRight } from "lucide-react";

export const WorkTogetherSection = () => {
  return (
    <div className="w-full">
      <Container className="text-accent-black lg:justify-center lg:gap-[100px] xl:gap-x-[160px] 2xl:gap-x-[100px] gap-y-[60px]">
        <CircularAvatars />
        <div className="flex items-center lg:items-start flex-col gap-y-[60px]">
          <Section2Text />
          <div className="z-10">
            <Button size="with-icon">
              Try it now
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
