"use client";

import {
  HeroSection,
  Navbar,
  ProjectManagementSection,
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
    </>
  );
};

export default Client;
