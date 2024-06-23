import { cn } from "@/lib/utils";
import Image from "next/image";

interface ILogo {
  className?: string;
}

export const Logo = ({ className }: ILogo) => {
  return (
    <div className={cn("relative w-[595px] h-[95px]", className)}>
      <Image
        src="/assets/logo.svg"
        alt="Whitepace Logo"
        fill
        className="object-fill"
      />
    </div>
  );
};
