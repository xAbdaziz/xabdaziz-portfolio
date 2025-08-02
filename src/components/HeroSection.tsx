"use client";

import TypeIt from "typeit-react";
import Image from "next/image";
import { ShineBorder } from "@/components/magicui/shine-border";
import { RevealAnimation } from "@/components/ui/reveal-animation";
import me from "@/../public/me.webp";

const typeItOptions = {
  strings: [
    "Full Stack Developer",
    "System Administrator",
    "Linux Enthusiast",
  ],
  speed: 50,
  deleteSpeed: 30,
  breakLines: false,
  loop: true,
  nextStringDelay: 2000,
  loopDelay: 1000,
};

export default function HeroSection() {
  return (
    <div className="section">
      <div className="relative z-10 h-screen flex flex-col lg:flex-row items-center justify-center px-4 lg:px-16 gap-8 lg:gap-0">

        {/* Avatar */}
        <RevealAnimation
          delay={0.3}
          className="flex justify-center items-center order-1 lg:order-2"
        >
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden">
            <Image
              src={me}
              alt="Abdulaziz Banabilah"
              className="w-full h-full object-cover"
            />
            <ShineBorder
              borderWidth={3}
              duration={8}
              shineColor="black"
            />
          </div>
        </RevealAnimation>

        {/* Text */}
        <RevealAnimation className="max-w-2xl lg:mr-16 text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-4xl lg:text-5xl font-light mb-2">
            Hello, I'm
          </h1>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Abdulaziz Banabilah
          </h2>

          <h3 className="text-3xl lg:text-4xl mb-8">
            I'm a{" "}
            <span className="font-semibold">
              <TypeIt options={typeItOptions} />
            </span>
          </h3>

          <p className="text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Full-Stack Developer and System Administrator who transforms ideas
            into scalable applications. Expert in React, Next.js, Node.js, Docker.
            I bridge development and operations, building clean, automated systems
            that perform flawlessly at scale.
          </p>
        </RevealAnimation>

      </div>
    </div>
  );
}