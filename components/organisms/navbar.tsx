import { Button, Container, Logo } from "@/components/atoms";
import { useMediaQuery } from "@/hooks";
import { NavMenu } from "@/components/molecules";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const largeScreen = useMediaQuery("(min-width: 1440px)");

  return (
    <Container className="bg-secondary">
      <nav className="py-4 text-white flex items-center justify-between">
        <Link href="/">
          <Logo className="w-[134px] h-[24px] md:w-[191px] md:h-[34px]" />
        </Link>
        {largeScreen && (
          <div className="flex items-center justify-center gap-x-[60px] z-50">
            <NavMenu />
            <div className="flex gap-x-6">
              <Button variant="secondary">Login</Button>
              <Button size="with-icon">
                Try Whitepace free <ArrowRight />
              </Button>
            </div>
          </div>
        )}
      </nav>
    </Container>
  );
};
