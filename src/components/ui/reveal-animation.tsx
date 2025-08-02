"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface RevealAnimationProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function RevealAnimation({ 
  children, 
  delay = 0,
  className 
}: RevealAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ 
        duration: 0.6,
        ease: "easeOut",
        delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}