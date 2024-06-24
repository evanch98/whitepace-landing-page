import { cn } from "@/lib/utils";
import Image from "next/image";

interface IStrokeManagement {
  className?: string;
}

export const StrokeManagement = ({ className }: IStrokeManagement) => {
  return (
    <div
      className={cn(
        "relative w-[228px] h-[26px] md:w-[345px] md:h-[31px] lg:w-[418px] lg:h-[38px] xl:w-[515px] xl:h-[36px] flex-shrink-0",
        className
      )}
    >
      <Image
        src="/assets/stroke.svg"
        alt="Stroke"
        fill
        className="object-fill md:object-cover"
      />
    </div>
  );
};
