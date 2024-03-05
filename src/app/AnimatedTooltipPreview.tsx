"use client";
import React from "react";
import Image from "next/image";
import { TextGenerateEffectDemo } from "./TextGenerateEffect";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Javascript",
    image:
      "/images/js-logo.png",
  },
  {
    id: 2,
    name: "React JS",
    image:
      "/images/React-icon.svg.png",
  },
  {
    id: 3,
    name: "CSS",
    image:
      "/images/css-logo.png",
  },
  {
    id: 4,
    name: "Tailwind CSS",

    image:
      "/images/tailwind-logo.png",
  },
  {
    id: 5,
    name: "NEXT JS",
    image:
      "/images/next.png",
  },

];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex dark:bg-dark bg-white flex-col items-center justify-center  mt-48 mb-48 ">
        <h1 className="font-bold text-8xl px-10 animate-fade-up animate-once animate-duration-[2000ms] animate-delay-500 animate-ease-in-out animate-normal ">
          <TextGenerateEffectDemo/>
        </h1>
        
        <div className="flex my-10 animate-fade-up animate-once animate-duration-[2500ms] animate-delay-[800ms] animate-ease-in-out animate-alternate animate-fill-forwards">
      <AnimatedTooltip items={people}  />
      </div>
    </div>
  );
}
