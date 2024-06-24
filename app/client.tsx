"use client";

import {
  CustomizeSection,
  HeroSection,
  Navbar,
  ProjectManagementSection,
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
    </>
  );
};

export default Client;
