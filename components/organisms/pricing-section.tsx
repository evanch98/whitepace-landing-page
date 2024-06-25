import { Container } from "@/components/atoms";
import {
  PricingCard,
  PricingCarousel,
  PricingSectionText,
} from "@/components/molecules";
import { freePlan, organizationPlan, personalPlan } from "@/content";

export const PricingSection = () => {
  return (
    <div className="w-full pb-[80px] md:pb-[100px] lg:pb-0">
      <Container className="text-accent-black">
        <div className="w-full flex lg:flex-col items-center justify-center gap-y-[60px] py-[80px] md:pt-[140px] md:pb-[100px] lg:py-[140px] xl:py-[100px] 2xl:py-[140px]">
          <PricingSectionText />
          <div className="hidden lg:flex w-full items-center justify-center gap-x-8">
            <PricingCard {...freePlan} />
            <PricingCard isHighlight {...personalPlan} />
            <PricingCard {...organizationPlan} />
          </div>
        </div>
      </Container>
      <div className="w-full flex items-center justify-center overflow-hidden lg:hidden">
        <PricingCarousel />
      </div>
    </div>
  );
};
