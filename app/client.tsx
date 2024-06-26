"use client";

import {
  CallToActionSection,
  CustomizeSection,
  HeroSection,
  Navbar,
  PricingSection,
  ProjectManagementSection,
  SecurityFeatureSection,
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
    <>
      <Navbar />
      <HeroSection />
      <ProjectManagementSection />
      <WorkTogetherSection />
      <CustomizeSection />
      <PricingSection />
      <CallToActionSection />
      <SecurityFeatureSection />
    </>
  );
};

export default Client;
