import React from "react";
import { VideoSectionProps } from "./VideoSection.type";

export const VideoSection = React.forwardRef<HTMLElement, VideoSectionProps>(
  (props, ref) => {
    return (
      <section
        id="section1"
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
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center">
            <div className="underline-sm-centered relative mb-10 text-5xl font-semibold uppercase text-gray-700 delay-1000 duration-1000 fade-in">
              Lorem Ipsum Dolor
            </div>
            <div className="max-w-2xl text-xl text-gray-700">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros
            </div>
          </div>
        </div>
      </section>
    );
  },
);

VideoSection.displayName = "VideoSection";
