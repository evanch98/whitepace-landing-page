import { Button, Container, Logo } from "@/components/atoms";
import { MobileNav, NavMenu } from "@/components/molecules";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <Container className="text-white bg-secondary">
      <nav className="py-4 flex items-center justify-between w-full">
        <Link href="/">
          <Logo className="w-[134px] h-[24px] md:w-[191px] md:h-[34px]" />
        </Link>
        <div className="flex items-center justify-center gap-x-[60px] z-50">
          <NavMenu className="hidden xl:flex" />
          <div className="flex gap-x-6">
            <Button variant="secondary" className="hidden lg:flex">
              Login
            </Button>
            <Button size="with-icon" className="hidden lg:flex">
              Try Whitepace free <ArrowRight />
            </Button>
            <div className="flex xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>
    </Container>
  );
};
