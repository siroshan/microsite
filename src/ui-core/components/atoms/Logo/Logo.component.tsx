import { cn } from "@libs/utils";
import { LogoProps } from "./Logo.type";

export const Logo = ({ className }: LogoProps) => {
  return (
    <div
      className={cn(
        "border border-black bg-transparent px-4 py-2 uppercase",
        className,
      )}
    >
      Logo
    </div>
  );
};
