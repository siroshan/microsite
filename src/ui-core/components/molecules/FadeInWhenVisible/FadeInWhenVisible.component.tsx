import { motion } from "framer-motion";
import { FadeInWhenVisibleProps } from "./FadeInWhenVisible.type";
import { cn } from "@libs/utils";
import { forwardRef } from "react";

export const FadeInWhenVisible = forwardRef<
  HTMLDivElement,
  FadeInWhenVisibleProps
>((props, ref) => {
  return (
    <motion.section
      ref={ref}
      id={props.id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className={cn(props.className)}
    >
      {props.children}
    </motion.section>
  );
});

FadeInWhenVisible.displayName = "FadeInWhenVisible";
