import { Container } from "@/components/atoms";
import {
  PricingCard,
  PricingCarousel,
  PricingSectionText,
} from "@/components/molecules";
import { freePlan, organizationPlan, personalPlan } from "@/content";

export const PricingSection = () => {
  return (
    <div className="w-full pb-[100px]">
      <Container className="text-accent-black lg:flex-col items-center justify-center gap-y-[60px]">
        <PricingSectionText />
        <div className="hidden lg:flex w-full items-center justify-center gap-x-8">
          <PricingCard {...freePlan} />
          <PricingCard isHighlight {...personalPlan} />
          <PricingCard {...organizationPlan} />
        </div>
      </Container>
      <div className="w-full flex items-center justify-center overflow-hidden lg:hidden">
        <PricingCarousel />
      </div>
    </div>
  );
};
