import React from "react";
import { VideoSectionProps } from "./VideoSection.type";

export const VideoSection = React.forwardRef<HTMLElement, VideoSectionProps>(
  (props, ref) => {
    return (
      <section
        id={props.id}
        ref={ref}
        className="relative h-screen w-full snap-center"
      >
        <video
          className="absolute left-0 top-0 h-full w-full object-cover"
          src="http://www.w3schools.com/html/mov_bbb.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute left-0 top-0 h-full w-full bg-white opacity-50"></div>
        {props.children}
      </section>
    );
  },
);

VideoSection.displayName = "VideoSection";
