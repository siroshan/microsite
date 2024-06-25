import React from "react";
import { CarouselSectionProps } from "./CarouselSection.type";

export const CarouselSection = React.forwardRef<
  HTMLElement,
  CarouselSectionProps
>((props, ref) => {
  return (
    <section ref={ref} id={props.id} className="h-screen w-full snap-center">
      {props.children}
    </section>
  );
});

CarouselSection.displayName = "CarouselSection";
