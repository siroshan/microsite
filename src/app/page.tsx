"use client";

import { useEffect, useRef, useState } from "react";
import {
  CarouselSection,
  HomeCarousel,
  Logo,
  NavBar,
  NavDots,
  ScrollIndicator,
  VideoSection,
} from "@ui-core/components";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const sectionsRef = useRef<HTMLElement[]>([]);
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = 2; // Update this if you add or remove sections

  useEffect(() => {
    const options = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const targetElement = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          setCurrentSection(sectionsRef.current.indexOf(targetElement));
          entry.target.classList.add("animate-in", "fade-in");
          entry.target.classList.remove("animate-out", "fade-out");
        } else {
          entry.target.classList.add("animate-out", "fade-out");
          entry.target.classList.remove("animate-in", "fade-in");
        }
      });
    }, options);

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const setSectionRef = (index: number) => (el: HTMLElement | null) => {
    if (el) sectionsRef.current[index] = el;
  };

  return (
    <div>
      <div
        className="no-scrollbar h-screen w-full overflow-y-scroll"
        style={{ scrollSnapType: "y mandatory", scrollBehavior: "smooth" }}
      >
        <VideoSection id="section1" ref={setSectionRef(0)}>
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
        </VideoSection>

        <CarouselSection id="section2" ref={setSectionRef(1)}>
          <div className="flex h-full w-full items-center justify-end px-40">
            <div className="max-w-lg ">
              <div className="mb-10 w-full text-right text-4xl font-bold text-white">
                DONEC NEC JUSTO
              </div>
              <HomeCarousel />
            </div>
          </div>
        </CarouselSection>
      </div>

      <NavBar currentSection={currentSection} />

      <NavDots
        currentSection={currentSection}
        sections={sectionsRef.current.map((_, i) => ({
          id: `section${i + 1}`,
        }))}
      />

      <ScrollIndicator
        visible={currentSection < totalSections - 1}
        onClick={() => {
          const nextSection = sectionsRef.current[currentSection + 1];
          nextSection?.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </div>
  );
}
