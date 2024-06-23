"use client";

import { Button, Container } from "@/components/atoms";
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
    <Container>
      <Button>Get Started</Button>
      <Button size="with-icon">
        Try Whitepace Free <ArrowRight />
      </Button>
      <Button variant="secondary">Login</Button>
      <Button variant="outline">Get Started</Button>
    </Container>
  );
};

export default Client;
