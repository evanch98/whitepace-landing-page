import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface INavLink {
  icon?: LucideIcon;
  title: string;
  className?: string;
  desc?: string;
}

export const NavLink = ({
  icon: Icon,
  title,
  className,
  desc,
}: INavLink) => {
  return (
    <div className={cn("flex items-center gap-x-4", className)}>
      {Icon && <Icon className="h-7 w-7 text-primary flex-shrink-0" />}
      <div className="flex flex-col">
        <h1 className="text-p2">{title}</h1>
        {desc && (
          <p className="text-p3 text-accent-black/50">{desc}</p>
        )}
      </div>
    </div>
  );
};
