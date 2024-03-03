"use client";
import React from "react";

import { TextGenerateEffectDemo } from "./TextGenerateEffect";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Javascript",
    image:
      "https://images.unsplash.com/public/images/js-logo.png",
  },
  {
    id: 2,
    name: "React JS",
    image:
      "https://images.unsplash.com/public/images/React-icon.svg.png",
  },
  {
    id: 3,
    name: "CSS",
    image:
      "https://images.unsplash.com/public/images/css-logo.png",
  },
  {
    id: 4,
    name: "Tailwind CSS",

    image:
      "https://images.unsplash.com/public/images/tailwind-logo.png",
  },
  {
    id: 5,
    name: "NEXT JS",
    image:
      "https://images.unsplash.com/public/images/next-js-logo.png",
  },

];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-col items-center justify-center mb-10 w-full">
        <h1 className="font-bold text-8xl px-10 ">
          <TextGenerateEffectDemo/>
        </h1>
        
        <div className="flex my-10">
      <AnimatedTooltip items={people}/>
      </div>
    </div>
  );
}
