'use client';
import { useEffect, useState } from "react";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
        text: "HI!,",
        className: "dark:text-transparent dark:bg-gradient-to-r dark:from-indigo-500 dark:via-purple-300 dark:to-pink-500 dark:bg-clip-text  text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text ",
      },
    {
      text: "Im",
    },
    {
      text: "Jeremias",
      className:"dark:text-transparent dark:bg-gradient-to-r dark:from-indigo-500 dark:via-purple-300 dark:to-pink-500 dark:bg-clip-text  text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text ",
    },
    {
      text: "Gonzalez",
      className:"dark:text-transparent dark:bg-gradient-to-r dark:from-indigo-500 dark:via-purple-300 dark:to-pink-500 dark:bg-clip-text  text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text ",
    },
    {
      text: "Developer Front-end",
    },
    {
      text: "React.",
      className:" dark:text-transparent dark:bg-gradient-to-r dark:from-indigo-500 dark:via-purple-300 dark:to-pink-500 dark:bg-clip-text  text-transparent bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 bg-clip-text ",
    },
  ];

  return (
    <div>
    
    <div className="flex flex-col items-center justify-center h-[10rem]  ">
     
      <p className="text-dark font-extrabold dark:text-neutral-200 text-xs sm:text-base  ">
      Welcome to my Portfolio
     
      </p>
      <img className="my-10  shadow-slate-800 w-48 rounded-full" src="./images/fotoface2.png" alt="" />
     
      <TypewriterEffectSmooth  words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
      
      </div>
    </div>
    </div>
  );
}
