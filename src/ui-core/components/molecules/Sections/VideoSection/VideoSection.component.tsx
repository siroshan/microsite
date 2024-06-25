import React from "react";
import { VideoSectionProps } from "./VideoSection.type";
import { FadeInWhenVisible } from "../../FadeInWhenVisible";

export const VideoSection = ({ id, children }: VideoSectionProps) => (
  <>
    <video
      className="absolute left-0 top-0 h-full w-full object-cover"
      src="http://www.w3schools.com/html/mov_bbb.mp4"
      autoPlay
      loop
      muted
    />
    <div className="absolute left-0 top-0 h-full w-full bg-white opacity-50"></div>
    {children}
  </>
);

VideoSection.displayName = "VideoSection";
