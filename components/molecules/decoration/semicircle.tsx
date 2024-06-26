import { cn } from "@/lib/utils";

interface ISemicircle {
  className?: string;
  children?: React.ReactNode;
}

export const Semicircle = ({ className, children = <></> }: ISemicircle) => {
  return (
    <div
      className={cn(
        "w-[600px] h-[300px] border-[3px] border-primary-200 border-dashed rounded-t-full",
        className
      )}
    >
      {children}
    </div>
  );
};
