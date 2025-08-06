"use client";

import TypeIt from "typeit-react";
import Image from "next/image";
import { ShineBorder } from "@/components/magicui/shine-border";
import { BoxReveal } from "@/components/magicui/box-reveal";
import me from "@/../public/me.webp";

const typeItOptions = {
  strings: ["Full Stack Developer", "System Administrator", "Linux Enthusiast"],
  speed: 50,
  deleteSpeed: 30,
  breakLines: false,
  loop: true,
  nextStringDelay: 2000,
  loopDelay: 1000,
  cursor: true,
};

export default function HeroSection() {
  return (
    <div className="section">
      <div className="relative z-10 h-dvh flex flex-col lg:flex-row items-center justify-center px-4 lg:px-16 gap-4 lg:gap-0">
        {/* Avatar */}
        <div className="flex justify-center items-center order-1 lg:order-2">
          <BoxReveal boxColor="#ffffff" duration={0.8}>
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-80 lg:h-80 rounded-full overflow-hidden">
              <Image
                src={me}
                alt="Abdulaziz Banabilah"
                className="w-full h-full object-cover"
              />
              <ShineBorder borderWidth={3} duration={8} shineColor="white" />
            </div>
          </BoxReveal>
        </div>

        {/* Text */}
        <div className="max-w-2xl lg:mr-16 text-center lg:text-left order-2 lg:order-1">
          <BoxReveal boxColor="#ffffff" duration={0.5}>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-light mb-1 sm:mb-2 text-foreground">Hello, I'm</h1>
          </BoxReveal>

          <BoxReveal boxColor="#ffffff" duration={0.5}>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-3 sm:mb-6 text-foreground">
              Abdulaziz Banabilah
            </h2>
          </BoxReveal>

          <BoxReveal boxColor="#ffffff" duration={0.5}>
            <h3 className="text-xl sm:text-2xl lg:text-4xl mb-4 sm:mb-8 text-foreground">
              I'm a{" "}
              <span className="font-semibold text-white [&_.ti-cursor]:text-white">
                <TypeIt options={typeItOptions} />
              </span>
            </h3>
          </BoxReveal>

          <BoxReveal boxColor="#ffffff" duration={0.5}>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 text-muted-foreground">
              Full-Stack Developer and System Administrator who transforms ideas
              into scalable applications. Experienced in React, Next.js, Node.js,
              Docker. I bridge development and operations, building clean,
              automated systems that perform flawlessly at scale.
            </p>
          </BoxReveal>
        </div>
      </div>
    </div>
  );
}
