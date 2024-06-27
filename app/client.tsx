"use client";

import {
  CallToActionSection,
  CtaSection,
  CustomizeSection,
  FavoriteAppsSection,
  Footer,
  HeroSection,
  Navbar,
  PricingSection,
  ProjectManagementSection,
  SecurityFeatureSection,
  SponsorsSection,
  WorkTogetherSection,
} from "@/components/organisms";
import { useEffect, useState } from "react";

const Client = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProjectManagementSection />
      <WorkTogetherSection />
      <CustomizeSection />
      <PricingSection />
      <CallToActionSection />
      <SecurityFeatureSection />
      <SponsorsSection />
      <FavoriteAppsSection />
      <CtaSection />
      <Footer />
    </main>
  );
};

export default Client;
