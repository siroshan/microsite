import React from "react";
import { ChevronDown } from "@ui-core/components";
import { ScrollIndicatorProps } from "./ScrollIndicator.type";

export const ScrollIndicator = ({ visible }: ScrollIndicatorProps) => {
  return visible ? (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 transform animate-bounce">
      <ChevronDown width={50} height={50} />
    </div>
  ) : null;
};
