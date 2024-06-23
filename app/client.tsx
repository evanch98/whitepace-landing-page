"use client";

import { Button } from "@/components/atoms";
import { ArrowBigRight, ArrowRight } from "lucide-react";
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
    <div className="flex items-center justify-center space-x-1 p-2">
      <Button>Get Started</Button>
      <Button size="with-icon">
        Try Whitepace Free <ArrowRight />
      </Button>
      <Button variant="secondary">Login</Button>
      <Button variant="outline">Get Started</Button>
    </div>
  );
};

export default Client;
