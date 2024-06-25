import { Logo } from "@ui-core/components/atoms";
import { NavBarProps } from "./NavBar.type";

export const NavBar = ({ currentSection }: NavBarProps) => {
  return (
    <div className="absolute left-0 top-0 z-50 w-full bg-transparent px-8 py-4">
      <div className="flex w-full items-center justify-between">
        <Logo
          className={currentSection === 1 ? "border-white text-white" : ""}
        />
        {currentSection === 1 && (
          <div className="uppercase text-white">discover more</div>
        )}
      </div>
    </div>
  );
};
