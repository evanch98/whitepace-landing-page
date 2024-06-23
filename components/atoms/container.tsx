import { cn } from "@/lib/utils";

interface IContainer {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: IContainer) => {
  return (
    <div
      className={cn("w-full px-4 md:px-5 lg:px-8 2xl:px-[220px]", className)}
    >
      {children}
    </div>
  );
};
