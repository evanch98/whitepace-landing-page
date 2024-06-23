"use client";

import { Navbar } from "@/components/molecules";
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
    </>
  );
};

export default Client;
