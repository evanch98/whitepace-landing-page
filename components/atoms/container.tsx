import { cn } from "@/lib/utils";

interface IContainer {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: IContainer) => {
  return (
    <div
      className={cn(
        "w-full px-4 md:px-5 lg:px-8 2xl:px-[220px] h-full flex flex-col items-center justify-center gap-y-[100px] lg:flex-row py-[80px] md:pt-[140px] md:pb-[100px] lg:py-[140px] xl:py-[100px] 2xl:py-[140px]",
        className
      )}
    >
      {children}
    </div>
  );
};
