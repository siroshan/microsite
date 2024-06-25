// components/Minus.tsx

import { IconProps } from "../Icon.type";

export const Minus = ({
  width = 24,
  height = 24,
  fill = "currentColor", // Use currentColor to inherit text color
  className,
}: IconProps & { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    stroke={fill} // Use stroke instead of fill for SVG stroke color
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`inline-block ${className}`}
  >
    <path d="M0 12h24" />
  </svg>
);
