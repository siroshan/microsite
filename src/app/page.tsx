"use client";

import { useEffect, useRef, useState } from "react";
import {
  FadeInWhenVisible,
  HomeCarousel,
  NavBar,
  NavDots,
  ScrollIndicator,
  VideoSection,
} from "@ui-core/components";
import { motion } from "framer-motion";

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
        <FadeInWhenVisible
          id="section1"
          className="relative h-screen w-full snap-start"
          ref={setSectionRef(0)}
        >
          <VideoSection>
            <div className="relative flex h-full items-center justify-center">
              <div className="text-center">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  transition={{ duration: 1 }}
                  variants={{
                    visible: { top: 0 },
                    hidden: { top: -40 },
                  }}
                  className="underline-sm-centered relative mb-10 text-5xl font-semibold uppercase text-gray-700 "
                >
                  Lorem Ipsum Dolor
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  transition={{ duration: 1 }}
                  variants={{
                    visible: { top: 0 },
                    hidden: { top: 40 },
                  }}
                  className="relative max-w-2xl text-xl text-gray-700"
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros
                </motion.div>
              </div>
            </div>
          </VideoSection>
        </FadeInWhenVisible>

        <FadeInWhenVisible
          id="section2"
          className="h-screen w-full snap-start"
          ref={setSectionRef(1)}
        >
          <div className="flex h-full w-full items-center justify-end px-40">
            <div className="max-w-lg">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                  visible: { right: 0 },
                  hidden: { right: 40 },
                }}
                className="relative mb-10 w-full text-right text-4xl font-bold text-white"
              >
                DONEC NEC JUSTO
              </motion.div>
              <HomeCarousel />
            </div>
          </div>
        </FadeInWhenVisible>
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
