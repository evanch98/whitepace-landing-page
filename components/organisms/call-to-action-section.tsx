import { Button, Container } from "@/components/atoms";
import { Section4Text } from "@/components/molecules";
import { ArrowRight } from "lucide-react";

export const CallToActionSection = () => {
  return (
    <Container className="flex flex-col gap-y-60 bg-secondary text-white">
      <div className="w-full pt-[100px] md:pt-[140px] pb-[140px] flex flex-col items-center justify-center gap-y-[60px]">
        <Section4Text />
        <Button size="with-icon">
          Try Whitepace
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </Container>
  );
};
