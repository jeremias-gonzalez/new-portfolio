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
    <div className="flex dark:bg-dark flex-col items-center justify-center mb-10 w-full">
        <h1 className="font-bold text-8xl px-10 ">
          <TextGenerateEffectDemo/>
        </h1>
        
        <div className="flex my-10">
      <AnimatedTooltip items={people}/>
      </div>
    </div>
  );
}
