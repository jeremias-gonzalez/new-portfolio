'use client';
import { useEffect, useState } from "react";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
        text: "HI!,",
        className: "text-blue-500 dark:text-blue-500",
      },
    {
      text: "Im",
    },
    {
      text: "Jeremias",
    },
    {
      text: "Gonzalez",
    },
    {
      text: "Developer Front-end",
    },
    {
      text: "React.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div>
    
    <div className="flex flex-col items-center justify-center h-[10rem]  ">
  
      <p className="text-dark font-extrabold dark:text-neutral-200 text-xs sm:text-base  ">
      Welcome to my Portfolio

      </p>
      <img className="my-10  shadow-slate-800 w-48 rounded-full" src="./images/fotoface2.png" alt="" />
     
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
      
      </div>
    </div>
    </div>
  );
}
