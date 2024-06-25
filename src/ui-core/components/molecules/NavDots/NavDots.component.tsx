import React from "react";
import { Minus } from "@ui-core/components";
import Link from "next/link";
import { NavDotsProps } from "./NavDots.type";

export const NavDots = ({ currentSection, sections }: NavDotsProps) => {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 transform">
      <div className="flex flex-col items-end justify-end">
        {sections.map((section, index) => (
          <Link
            key={section.id}
            href={`/#${section.id}`}
            scroll={false}
            onClick={() => console.log(`clicked ${index + 1}`)}
          >
            <Minus
              className={`transform transition-transform duration-500 ease-in-out ${
                currentSection === index
                  ? "scale-x-[3] scale-y-[2] text-blue-500"
                  : "scale-100"
              }`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
