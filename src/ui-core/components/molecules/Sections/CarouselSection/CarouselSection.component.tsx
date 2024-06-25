import React from "react";
import { CarouselSectionProps } from "./CarouselSection.type";

export const CarouselSection = React.forwardRef<
  HTMLElement,
  CarouselSectionProps
>((props, ref) => {
  return (
    <section
      ref={ref}
      id={props.id}
      className="flex h-screen w-full snap-center items-center justify-center"
    >
      {props.children}
    </section>
  );
});

CarouselSection.displayName = "CarouselSection";
